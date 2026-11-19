---
{
  "id": "guide.integration-control.ndi.receiving-ndi-streams",
  "variant_id": "guide.integration-control.ndi.receiving-ndi-streams.owner-approved-2026-11-19",
  "title": "Receiving NDI Streams",
  "language": "en",
  "kind": "how-to",
  "status": "in_review",
  "owner": "Andre",
  "applies_to": {
    "from": "3.4",
    "until_exclusive": "3.5"
  },
  "verified_in": [],
  "last_verified": null,
  "evidence": [
    {
      "type": "owner-approved-guide",
      "url": "https://help.screenberry.com/en/integration-control/ndi/receiving-ndi-streams",
      "scope": "Owner reviewed the concise NDI revision and Settings formatting, and approved GitHub publication on 2026-11-20. Deployment awaits Vercel administrator approval; not independently runtime-tested."
    },
    {
      "type": "implementation-review",
      "snapshot": "3.5.0 beta, source build 2422",
      "scope": "NDI node and receiver implementation inspected locally; source-backed prose approved for the guide. Original private source is not included."
    }
  ],
  "aliases": [
    "NDI In"
  ],
  "related": [
    "guide.integration-control.ndi.overview",
    "guide.integration-control.ndi.sending-ndi-streams",
    "guide.integration-control.ndi-network-configuration"
  ],
  "presentation": {
    "mode": "text-only",
    "illustrations": null,
    "visual_information_review": "not-applicable"
  },
  "source": {
    "path": "content/en/integration-control/ndi/receiving-ndi-streams.mdx",
    "canonical_url": "https://help.screenberry.com/en/integration-control/ndi/receiving-ndi-streams",
    "sha256": "6fb07ac493affb30e2f62680bdc5296d975c6b7f03e742abd6d27a3a0ed29e1d"
  },
  "review": {
    "publication_approved_by": "Andre",
    "publication_approved_on": "2026-11-20",
    "runtime_verified": false,
    "deployment_status": "pending-administrator-approval",
    "applicability": "Screenberry 3.4; owner explicitly instructed that NDI functionality is the same in 3.4 and the inspected 3.5.0 beta build 2422 snapshot. Version parity is an owner-provided assumption, not runtime verification. Windows-specific configuration remains scoped to the documented NDI runtime settings."
  }
}
---

# Receiving NDI Streams

Use **NDI In** to receive an external NDI stream in a Screenberry project.

## Receive a Stream

1. Enable NDI output on the source device or application.
2. Add an **NDI In** node to the project.
3. Select the stream in **Source**.
4. Connect **Image** to the required image-processing or display input. For audio, connect **Audio** to an audio-processing node or **Audio Out**.
5. Check the received image, **FPS**, and audio output.

## Settings

The **Settings** panel of the **NDI In** node offers the following control and information parameters:

| Parameter | Description |
| --- | --- |
| **Groups** | Groups to search, separated by commas, for example `Public,Stage`. An empty value uses **Public**. Include the sender's group. |
| **IP Addresses** | Comma-separated IP addresses of source computers to query when automatic discovery fails. Routing and firewall access must allow communication. |
| **Volume** | Received audio level. |
| **Audio Buffer Size** | Target buffer for received audio; default `100 ms`. Increasing it can smooth uneven delivery but adds audio delay. This is separate from the global audio buffer. |
| **Color Format** | **Fastest** (default) or **Best Quality**. |
| **Frame Upload Method** | Method for transferring received frames to the GPU. Keep the default unless investigating frame-transfer performance. |
| _Output Parameters_ | |
| **FPS** | Measured incoming video frame rate; read-only. |

> **Note:** **IP Addresses** queries remote sources; it does not select a local network adapter. For adapter priorities, see [NDI Network Configuration](https://help.screenberry.com/en/integration-control/ndi/ndi-network-configuration).

## Reception Problems

| Symptom | Check |
| --- | --- |
| Source missing or disappeared | The sender's NDI output, source name, **Groups**, and firewall access. Add its address to **IP Addresses** if automatic discovery fails. Reselect the stream if its name changed. |
| Source listed, but no video | The source in another receiver, the **Image** connection, and **FPS**. For multiple Windows adapters, check [network configuration](https://help.screenberry.com/en/integration-control/ndi/ndi-network-configuration) on the Media Server. |
| Video without audio | Source audio, **Volume**, the **Audio** connection, and the output device's channel mapping. See [Working with Audio](https://help.screenberry.com/en/working-with-audio). |
| Audio interruptions or delay | Network and system load, then **Audio Buffer Size**. More buffering increases delay. |

If only the remote **Screenberry Panel** preview fails, check [Panel preview reception](https://help.screenberry.com/en/integration-control/ndi/overview#ndi-previews-in-screenberry-panel).
