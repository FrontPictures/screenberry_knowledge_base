---
{
  "id": "guide.integration-control.ndi-network-configuration",
  "variant_id": "guide.integration-control.ndi-network-configuration.owner-approved-2026-11-19",
  "title": "NDI Network Configuration on Windows",
  "language": "en",
  "kind": "how-to",
  "status": "in_review",
  "owner": "Andre",
  "applies_to": {
    "from": null,
    "until_exclusive": null
  },
  "verified_in": [],
  "last_verified": null,
  "evidence": [
    {
      "type": "published-guide",
      "url": "https://help.screenberry.com/en/integration-control/ndi-network-configuration",
      "scope": "Owner-approved guide text; reported field fix and official Windows/NDI references; not independently runtime-tested"
    }
  ],
  "aliases": [
    "NDI Troubleshooting",
    "NDI network settings"
  ],
  "related": [
    "guide.getting-started.hardware",
    "guide.node-reference.nodes"
  ],
  "source": {
    "path": "content/en/integration-control/ndi-network-configuration.mdx",
    "canonical_url": "https://help.screenberry.com/en/integration-control/ndi-network-configuration",
    "sha256": "39cd5e80605a7f020ba1ef71c76a0dc747ddb891a972093c41e4b1fae3e334ba"
  },
  "review": {
    "publication_approved_by": "Andre",
    "publication_approved_on": "2026-11-19",
    "runtime_verified": false,
    "applicability": "Windows with multiple network adapters; NDI runtime supporting the documented settings. Exact Screenberry build not established."
  },
  "presentation": {
    "mode": "text-only",
    "illustrations": null,
    "visual_information_review": "not-applicable"
  }
}
---

# NDI Network Configuration on Windows

On a Windows computer connected to more than one network, network adapter priorities can affect NDI communication. For example, a computer may use one Ethernet adapter for the Media Server and cameras and another for an office network or internet access.

If an NDI stream does not arrive, check the network configuration first. If the problem remains, try the NDI receive settings described below. Disabling Reliable UDP is a troubleshooting workaround; it is not required for every computer with multiple network adapters.

## Identify the Receiving Computer

Apply the checks to the computer receiving the affected NDI stream.

| Affected Connection | Computer to Check |
| --- | --- |
| NDI video received by **Screenberry Panel** | The Operator Workstation running **Screenberry Panel** |
| An external NDI source received by an **NDI In** node | The computer running **Screenberry Server** for that project |
| An **NDI Out** stream received by another application | The computer running the receiving application |

Operating an **NDI In** node from **Screenberry Panel** does not make the Panel computer the receiver for that node. For application roles, see [Screenberry Overview](https://help.screenberry.com/en/getting-started/screenberry-overview).

For a reception problem confined to **Screenberry Panel**, begin on the Operator Workstation. Test one computer and one change at a time.

## Check Network Adapter Priorities

Windows normally assigns an interface metric automatically, based on connection speed. A lower metric gives an interface a higher preference when Windows compares otherwise equivalent routes. The fastest adapter may not be the one connected to the NDI network.

> **Note:** An interface metric is not a rule that forces every connection through one adapter. Windows prefers the most specific matching route; for equally specific routes, it compares the combined route and interface metrics. See Microsoft's explanations of [route selection](https://learn.microsoft.com/en-us/windows-hardware/customize/desktop/unattend/microsoft-windows-tcpip-interfaces-interface-routes-route-metric) and [interface metrics](https://learn.microsoft.com/en-us/powershell/module/nettcpip/set-netipinterface).

Before changing settings, identify the adapter connected to the NDI source network and record the existing metric settings for each adapter you will change. Administrative privileges may be required. Changing network settings can interrupt remote access, so make the change with local access available.

To assign interface metrics manually:

1. Press **Win + R**, enter `ncpa.cpl`, and press **Enter** to open **Network Connections**.
2. Right-click the adapter connected to the NDI network and select **Properties**.
3. Select **Internet Protocol Version 4 (TCP/IPv4)** and click **Properties**.
4. On the **General** tab, click **Advanced**.
5. On the **IP Settings** tab, clear **Automatic Metric**.
6. In **Interface Metric**, enter a value lower than the values assigned to the other relevant active adapters. For example, use `5` for the NDI network adapter and `50` for the other network adapter. These are example priorities, not required values.
7. Click **OK** in both TCP/IP dialogs, then close the adapter properties dialog to apply the change.
8. Repeat the procedure for the other relevant adapter, assigning the higher metric. Leave the IP address, subnet mask, DNS, and gateway settings unchanged unless your network configuration requires a separate correction.

The important relationship is **lower metric for the intended NDI network, higher metric for the competing network**. Do not choose an adapter solely by its name, such as **Ethernet** or **Ethernet 2**; check which network it connects to.

Restart the affected NDI application and test the stream again. If the system sends and receives NDI, check both directions. Also check that the connection between **Screenberry Panel** and **Screenberry Server**, and any other required network connections, still work.

If you previously applied an NDI transport workaround, [restore the original NDI configuration](#restore-the-original-configuration) and retest after correcting the adapter priorities. If reception works with the original settings, keep those settings.

To undo the metric changes, return to **Advanced TCP/IP Settings** and restore each adapter's recorded value or reselect **Automatic Metric**, as appropriate.

## Test Alternative NDI Receive Settings

If changing adapter priorities does not resolve the problem, test the following configurations on the receiving computer. Try disabling Reliable UDP first. If that does not help, try TCP-based reception.

These settings apply to NDI applications using the shared configuration on that computer. They are not saved in a Screenberry project and are not limited to a single node or Panel window. The examples change receive settings only when merged into the existing configuration.

### Prepare the Configuration File

1. Close **Screenberry Panel** and all other NDI applications on the computer you are configuring, including any running **NDI Tools** applications. If **Screenberry Server** is running there and uses NDI, close it as well. Keep **NDI Tools** closed during the initial Screenberry test.
2. Open the NDI configuration folder. The standard Windows location is:

   ```text
   C:\ProgramData\NDI
   ```

3. Back up `ndi-config.v1.json` to a separate location before editing it. If there is no file, record that fact so you can return to the previous state later.
4. Open the file in a text editor. If the folder or file does not exist, create it and use the complete JSON from the selected test below. Save the filename exactly as `ndi-config.v1.json`, without an additional `.txt` extension.

> **Note:** If the application uses the `NDI_CONFIG_DIR` environment variable, its configuration file is in that directory instead. See [NDI Platform Considerations](https://docs.ndi.video/all/developing-with-ndi/sdk/platform-considerations).

If a configuration file already exists, merge the selected settings into its existing `ndi` object. For example, the first test changes `ndi.rudp.recv.enable` to `false`. Add missing objects as needed, but keep existing properties inside them. Do not add a second `ndi` object or duplicate keys.

Preserve all unrelated settings, including discovery servers, source addresses, groups, allowed adapters, and `send` settings. Replacing an existing file with a short example discards omitted settings; it does not preserve them.

### Test 1: Disable Reliable UDP Reception

Use the following configuration:

```json
{
  "ndi": {
    "rudp": {
      "recv": {
        "enable": false
      }
    }
  }
}
```

This disables Reliable UDP reception. When merged, it leaves the other transport settings unchanged; it does not force TCP reception.

Save the file, start the affected Screenberry application, and test the same source again. On the Operator Workstation, restart **Screenberry Panel**. Applications must be restarted to load the changed shared configuration; disconnecting and reconnecting a source is not a substitute.

### Test 2: Use TCP-Based Reception

If the first test does not help, close the NDI applications again. Restore the backup before applying the second test, or replace the test file if no original file existed. Merge these settings using the same procedure:

```json
{
  "ndi": {
    "rudp": {
      "recv": {
        "enable": false
      }
    },
    "tcp": {
      "recv": {
        "enable": true
      }
    },
    "unicast": {
      "recv": {
        "enable": false
      }
    },
    "multicast": {
      "recv": {
        "enable": false
      }
    }
  }
}
```

This enables Multi-TCP reception and disables Reliable UDP, unicast UDP, and multicast reception for NDI media. The sender must also support the negotiated mode; base TCP remains a fallback. See [NDI Configuration Files](https://docs.ndi.video/all/developing-with-ndi/sdk/configuration-files).

Save the file, restart the affected Screenberry application, and test again. This configuration does not disable all UDP traffic on the computer. NDI source discovery can still use mDNS over UDP, as described in [NDI Network Ports](https://docs.ndi.video/all/getting-started/white-paper/ndi-related-network-ports).

For each test, check that the expected source is available and that video and, where applicable, audio arrive correctly. Test both stream directions if the setup uses them. After the initial test, reopen any NDI applications required for normal operation and check the complete setup again.

## Restore the Original Configuration

To remove a transport workaround:

1. Close all NDI applications on the computer whose configuration you changed.
2. Restore the original `ndi-config.v1.json` from the backup. If no file existed before testing, remove only the file created for the test.
3. Restart the affected applications and test reception again.

Restoring the file does not undo Windows interface metric changes. Restore those separately if needed.

## If the Problem Remains

Check the source and receiver network addresses, subnet configuration, and firewall access for the intended network. A source that is missing from the list and a visible source that delivers no video may require different checks.

If editing the JSON file has no apparent effect, confirm that you edited the configuration used by the application and restarted it. On managed computers, [NDI administrative settings](https://docs.ndi.video/all/getting-started/white-paper/ndi-administrative-settings) can override the shared file; ask the system administrator to check them.

When contacting Screenberry support, include:

- The Screenberry and Windows versions, and the NDI runtime version if known.
- Which computers run **Screenberry Server**, **Screenberry Panel**, and the external NDI source or receiver.
- The adapters, IP addresses, and interface metrics used by the affected computers.
- Whether the source is missing, visible without video, or receiving video with interruptions.
- Which direction fails and the result of each metric or transport test.

For related setup information, see [Network Requirements](https://help.screenberry.com/en/getting-started/hardware#network) and [Video Streaming Nodes](https://help.screenberry.com/en/node-reference/nodes#video-streaming).
