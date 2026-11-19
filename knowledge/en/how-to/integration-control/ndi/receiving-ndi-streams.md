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
      "scope": "Owner reviewed the local guide and approved GitHub publication on 2026-11-19. Deployment awaits Vercel administrator approval; not independently runtime-tested."
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
    "sha256": "91fdede616760590ad53742a8d201ec970c4b9d0499e4b007544381ff5b79486"
  },
  "review": {
    "publication_approved_by": "Andre",
    "publication_approved_on": "2026-11-19",
    "runtime_verified": false,
    "deployment_status": "pending-administrator-approval",
    "applicability": "Screenberry 3.4; owner explicitly instructed that NDI functionality is the same in 3.4 and the inspected 3.5.0 beta build 2422 snapshot. Version parity is an owner-provided assumption, not runtime verification. Windows-specific configuration remains scoped to the documented NDI runtime settings."
  }
}
---

# Receiving NDI Streams

Use an **NDI In** node to receive video and audio from an NDI source, such as a camera or another application. The node makes the received media available through its **Image** and **Audio** outputs for use elsewhere in the project.

The receiving application is **Screenberry Server**. When configuring the node from a remote **Screenberry Panel**, check source discovery and network access on the Media Server, not only on the Operator Workstation.

## Receive a Stream

1. Start the source application or device and enable its NDI output. Use content with visible movement so that you can distinguish a live image from a retained frame.
2. Add an **NDI In** node to the project.
3. In the node's parameters, select the required stream in **Source**. Check the source name explicitly when several streams are available.
4. Connect **Image** to the image-processing or display path that should use the stream. For details on making connections, see [Linking Nodes](https://help.screenberry.com/en/working-with-nodes/linking-nodes).
5. If audio is required, connect **Audio** to the appropriate audio-processing path or an **Audio Out** node configured for the intended device.
6. Verify that the expected image updates and that the **FPS** output reports received video frames. Check audio separately by listening through the intended output device.

For a simple audio path, connect **NDI In** → **Audio Out** using their **Audio** parameters. Connecting **Image** alone does not route audio to a playback device. See [Working with Audio](https://help.screenberry.com/en/working-with-audio) for output devices, mixing, and channel mapping.

## Find the Source

### Groups

Use **Groups** to specify which NDI groups the receiver searches. Enter a comma-separated list, for example `Public,Stage`. An empty value uses **Public**.

If the sender publishes to a custom group, include that group in **Groups** on **NDI In**. To continue discovering public sources as well, include **Public** in the list.

### IP Addresses

Use **IP Addresses** to query additional remote computers for NDI sources when automatic discovery does not find them. Enter a comma-separated list of source-computer addresses, for example `192.168.10.20,192.168.10.21`, then select the discovered stream in **Source**.

This can be useful when the source is on a different subnet and the network is configured to carry traffic between the two computers. Adding an address does not create a network route or bypass a firewall.

> **Note:** **IP Addresses** contains addresses of remote source computers. It does not bind the receiver to a local Ethernet adapter. For Windows adapter priorities, see [NDI Network Configuration](https://help.screenberry.com/en/integration-control/ndi/ndi-network-configuration).

## Adjust Audio Reception

Use **Volume** to adjust the level of the received audio. **Audio Buffer Size** sets the target receive-audio buffer in milliseconds; its default is `100 ms`.

A larger buffer can help accommodate uneven audio delivery, at the cost of additional audio delay. Make small changes and check both continuity and alignment with the image. This node parameter is separate from the global audio buffer setting described in [Working with Audio](https://help.screenberry.com/en/working-with-audio).

## Parameters

| Parameter | Purpose |
| --- | --- |
| **Source** | Selects the NDI stream to receive from the discovered sources. |
| **Groups** | Comma-separated groups to search. An empty value uses **Public**. |
| **IP Addresses** | Comma-separated addresses of additional remote computers to query for sources. |
| **Volume** | Adjusts the received audio level. |
| **Audio Buffer Size** | Sets the receive-audio buffer target in milliseconds. The default is `100 ms`. |
| **Color Format** | Selects **Fastest** or **Best Quality** for NDI reception. The default is **Fastest**. |
| **Frame Upload Method** | Selects how received frames are transferred to the GPU. Keep the default for the initial setup; change it when investigating a frame-transfer or performance problem. |
| **Image** | Outputs the received image to the node graph. |
| **Audio** | Outputs the received audio to the node graph. |
| **FPS** | Reports the measured rate of incoming video frames. This is an output, not a frame-rate setting. |

For working with parameters that are not exposed as pins, see [Node Parameters and Settings](https://help.screenberry.com/en/working-with-nodes/node-parameters-and-settings).

## Check Reception Problems

| Symptom | Checks |
| --- | --- |
| The source is missing from **Source** | Confirm that the sender is running and publishing NDI. Check **Groups**, network reachability, and firewall access. If appropriate, add the source computer to **IP Addresses**. |
| The source is listed, but no moving image arrives | Verify the source's output in another receiver. Check the selected source, the **Image** connection, and **FPS**. On a Windows Media Server with multiple adapters, follow [NDI Network Configuration](https://help.screenberry.com/en/integration-control/ndi/ndi-network-configuration). |
| The image arrives, but there is no sound | Confirm that the source includes audio, **Volume** is not muted, and **Audio** is connected to the intended playback or processing path. Check the output device and channel mapping. |
| Audio is interrupted or delayed | Check network and system load, then review **Audio Buffer Size**. Increasing it adds buffering and can increase delay. |
| A previously working source disappears | Check that the sender is still running, its name and groups have not changed, and the network remains connected. When it is available again, check **Source** and verify that media resumes; reselect the stream if needed. |

If only the preview in a remote **Screenberry Panel** fails, verify the server-side image path before treating the **NDI In** node as the cause. Panel preview reception uses the Operator Workstation's network connection. See [NDI in Screenberry](https://help.screenberry.com/en/integration-control/ndi/overview#ndi-previews-in-screenberry-panel).
