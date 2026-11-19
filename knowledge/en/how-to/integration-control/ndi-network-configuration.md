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
      "type": "owner-approved-guide",
      "url": "https://help.screenberry.com/en/integration-control/ndi/ndi-network-configuration",
      "scope": "Owner reviewed the concise NDI revision and Settings formatting, and approved GitHub publication on 2026-11-20. Deployment awaits Vercel administrator approval; not independently runtime-tested."
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
    "path": "content/en/integration-control/ndi/ndi-network-configuration.mdx",
    "canonical_url": "https://help.screenberry.com/en/integration-control/ndi/ndi-network-configuration",
    "sha256": "b50e123ada734c4fd3ea590c9e3347d527ee141d4cd8777da9e63c181b8cf86a"
  },
  "review": {
    "publication_approved_by": "Andre",
    "publication_approved_on": "2026-11-20",
    "runtime_verified": false,
    "deployment_status": "pending-administrator-approval",
    "applicability": "Screenberry 3.4; owner explicitly instructed that NDI functionality is the same in 3.4 and the inspected 3.5.0 beta build 2422 snapshot. Version parity is an owner-provided assumption, not runtime verification. Windows-specific configuration remains scoped to the documented NDI runtime settings."
  },
  "presentation": {
    "mode": "text-only",
    "illustrations": null,
    "visual_information_review": "not-applicable"
  }
}
---

# NDI Network Configuration on Windows

On Windows computers with multiple network adapters, adapter priorities can prevent NDI reception. Check interface metrics first; use the receive-transport workarounds below only if the problem remains.

## Identify the Receiving Computer

Apply the settings on the computer receiving the affected stream:

| Affected Stream | Computer to Configure |
| --- | --- |
| NDI preview in **Screenberry Panel** | Operator Workstation |
| External stream received by **NDI In** | Media Server |
| **NDI Out** received by another application | Computer running that receiver |

## Check Network Adapter Priorities

Windows normally assigns interface metrics automatically. Give the NDI network adapter a lower metric than competing adapters—for example, `5` for NDI and `50` for the other network.

> **Note:** Metrics affect route preference, not a forced adapter binding. Windows first chooses the most specific route, then compares combined route and interface metrics. See Microsoft's [route selection](https://learn.microsoft.com/en-us/windows-hardware/customize/desktop/unattend/microsoft-windows-tcpip-interfaces-interface-routes-route-metric) and [interface metric](https://learn.microsoft.com/en-us/powershell/module/nettcpip/set-netipinterface) documentation.

Record the current settings before changing them. Administrative privileges may be required. Keep local access available: changing network settings can interrupt remote access.

1. Press **Win + R**, enter `ncpa.cpl`, and press **Enter**.
2. Open **Properties** for the adapter connected to the NDI network.
3. Select **Internet Protocol Version 4 (TCP/IPv4)** → **Properties** → **Advanced**.
4. On **IP Settings**, clear **Automatic Metric** and enter the lower value in **Interface Metric**.
5. Click **OK** in both TCP/IP dialogs and close the adapter properties. Repeat for the competing adapter with the higher value. Leave IP address, subnet, DNS, and gateway settings unchanged.
6. Restart the affected NDI application and test reception, any NDI output, and the connection between **Screenberry Panel** and **Screenberry Server**.

If an NDI transport workaround was already applied, [restore the original configuration](#restore-the-original-configuration) and retest after changing metrics. Keep the original NDI settings if they work.

To undo metric changes, restore the recorded values or reselect **Automatic Metric**.

## Test Alternative NDI Receive Settings

These settings apply to NDI applications using the shared configuration on the receiving computer, rather than to an individual project or node.

### Prepare the Configuration File

1. Close all NDI applications on that computer, including **Screenberry Panel**, **NDI Tools**, and **Screenberry Server** if it uses NDI.
2. Back up the configuration file:

   ```text
   C:\ProgramData\NDI\ndi-config.v1.json
   ```

3. Merge the selected test settings into the existing `ndi` object, preserving unrelated properties and all `send` settings. Do not duplicate keys or replace an existing file with the short example.
4. If no file exists, create the folder and file using the complete example. Save it as `ndi-config.v1.json`, without a `.txt` extension.

> **Note:** Applications using `NDI_CONFIG_DIR` read the file from that directory instead. See [NDI Platform Considerations](https://docs.ndi.video/all/developing-with-ndi/sdk/platform-considerations).

### Test 1: Disable Reliable UDP Reception

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

This disables Reliable UDP reception without forcing TCP. Merging it leaves other transport settings unchanged.

Save the file and restart the affected Screenberry application. Keep **NDI Tools** closed during the initial test. Check video and audio reception; reconnecting a source alone does not reload the configuration.

### Test 2: Use TCP-Based Reception

If Test 1 fails, close the NDI applications and restore the backup before merging these settings. If there was no original file, replace the test file.

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

This enables Multi-TCP reception and disables Reliable UDP, unicast UDP, and multicast reception for NDI media. The sender must support the negotiated mode; base TCP remains a fallback. See [NDI Configuration Files](https://docs.ndi.video/all/developing-with-ndi/sdk/configuration-files).

Save, restart the affected application, and retest. Discovery can still use UDP; these settings do not disable all UDP traffic. See [NDI Network Ports](https://docs.ndi.video/all/getting-started/white-paper/ndi-related-network-ports).

After either test succeeds, reopen the other required NDI applications and check the complete setup, including both stream directions if used.

## Restore the Original Configuration

1. Close all NDI applications on the affected computer.
2. Restore the backed-up `ndi-config.v1.json`. If no original file existed, remove only the test file.
3. Restart the applications and retest.

Windows interface metrics must be restored separately.

## If the Problem Remains

For a missing source, check the receiver's discovery settings; see [NDI In settings](https://help.screenberry.com/en/integration-control/ndi/receiving-ndi-streams#settings). For a listed source without video, check the source output, routing, and firewall access.

If JSON changes have no effect, confirm the configuration path and restart the application. On managed systems, [NDI administrative settings](https://docs.ndi.video/all/getting-started/white-paper/ndi-administrative-settings) can override the file.

For support, include application and OS versions, the source/receiver computers, adapter IP addresses and metrics, the failing stream direction, and the result of each test.
