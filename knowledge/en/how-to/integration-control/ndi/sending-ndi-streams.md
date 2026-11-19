---
{
  "id": "guide.integration-control.ndi.sending-ndi-streams",
  "variant_id": "guide.integration-control.ndi.sending-ndi-streams.owner-approved-2026-11-19",
  "title": "Sending NDI Streams",
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
      "url": "https://help.screenberry.com/en/integration-control/ndi/sending-ndi-streams",
      "scope": "Owner reviewed the local guide and approved GitHub publication on 2026-11-19. Deployment awaits Vercel administrator approval; not independently runtime-tested."
    },
    {
      "type": "implementation-review",
      "snapshot": "3.5.0 beta, source build 2422",
      "scope": "NDI node and receiver implementation inspected locally; source-backed prose approved for the guide. Original private source is not included."
    }
  ],
  "aliases": [
    "NDI Out"
  ],
  "related": [
    "guide.integration-control.ndi.overview",
    "guide.integration-control.ndi.receiving-ndi-streams",
    "guide.integration-control.ndi-network-configuration"
  ],
  "presentation": {
    "mode": "text-only",
    "illustrations": null,
    "visual_information_review": "not-applicable"
  },
  "source": {
    "path": "content/en/integration-control/ndi/sending-ndi-streams.mdx",
    "canonical_url": "https://help.screenberry.com/en/integration-control/ndi/sending-ndi-streams",
    "sha256": "48aadf6ada65630041d6f933697ab0a8bc99e65173e979a0534393dcc5948b52"
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

# Sending NDI Streams

Use an **NDI Out** node to send an image and optional audio from a Screenberry project to another NDI application or device. The stream is sent by **Screenberry Server**, even when you configure the node from a remote **Screenberry Panel**.

## Send a Stream

1. Add an **NDI Out** node to the project.
2. Connect the required image output to **Image** on **NDI Out**. For example, connect **Image** from a **Media Player** node to send its output.
3. Set **Name** to a recognizable stream name, such as `Stage Output`. Use different names for streams that need to be selected separately.
4. Leave **Groups** empty to use **Public**, or enter the groups in which the stream should be discoverable. Configure the receiver to search those groups.
5. To send audio, connect an audio output to **Audio** and enable **Enable Audio**. Set **Audio Sample Rate** and **Audio Channels** for the intended output. If audio is not needed, disable **Enable Audio**.
6. In the receiving application, select the stream from the computer running **Screenberry Server**.
7. Play content with visible movement and, if applicable, sound. Check the image and audio in the receiving application, including the expected audio channels.

A basic **Media Player** connection uses two links:

| From | To |
| --- | --- |
| **Media Player** → **Image** | **NDI Out** → **Image** |
| **Media Player** → **Audio** | **NDI Out** → **Audio** |

The video and audio can also come from different nodes. Use the processed image and mixed audio that the receiving application should receive. See [Linking Nodes](https://help.screenberry.com/en/working-with-nodes/linking-nodes) and [Working with Audio](https://help.screenberry.com/en/working-with-audio).

## Name and Groups

**Name** identifies the stream. If it is empty, Screenberry derives the name from the node's name and its location in the node hierarchy. Set an explicit name when the stream needs to remain easy to identify after nodes are renamed or moved.

**Groups** accepts a comma-separated list, for example `Public,Stage`. An empty value publishes to **Public**. If you specify only a custom group, the receiving application must search that group to discover the stream.

Changing **Name** or **Groups** recreates the sender. Check the receiver's source selection after making either change.

## Set the Image Size

With **Resize** disabled, the node uses the input image dimensions before applying the stream-size alignment described below.

Enable **Resize** to set a target **Image Size**:

- With **Keep Aspect Ratio** enabled, the image is fitted within the target dimensions while preserving its aspect ratio. The resulting dimensions can differ from the requested width or height.
- With **Keep Aspect Ratio** disabled, the image is resized to the specified width and height, which can change its proportions.

The **Image Size** and **Keep Aspect Ratio** controls are editable when **Resize** is enabled.

### Padding

The **NDI Out** node aligns the outgoing stream width to a multiple of 16 pixels and the height to an even number. If the calculated image dimensions do not meet these requirements, **Padding** under **Advanced Settings** determines how the difference is handled:

- **Upscale** enlarges the image to the aligned stream dimensions.
- **Add Padding** preserves the calculated image size and adds transparent padding to reach the aligned dimensions.

For example, an image measuring `1919 × 1079` pixels needs a `1920 × 1080` stream. **Upscale** scales the image to that size; **Add Padding** adds the extra pixels without that scaling. How transparency is displayed depends on the receiving application.

## Frame Processing

With **Optimized Frame Processing** enabled, **NDI Out** avoids repeatedly sending unchanged images. A static image can therefore produce a low measured **FPS** value even though the receiver continues to display it.

Disable **Optimized Frame Processing** when you need the node to process and send frames continuously rather than only when the image changes. The **FPS** output reports the measured sending rate; it is not a control for setting an independent stream frame rate.

Check performance with the actual content and receiver. A changing image and a static test image exercise different sending behavior when optimization is enabled.

## Audio

**Enable Audio** controls audio transmission. **Audio Sample Rate** defaults to `48000 Hz`, and **Audio Channels** defaults to `2`. The node converts audio to the configured output sample rate.

Choose a channel count that matches the required signal and receiver. Channel-count settings do not replace an intentional mix: use **Audio Mixer** or **Audio Channel Mixer** when you need to combine or remap channels. See [Working with Audio](https://help.screenberry.com/en/working-with-audio).

## Parameters

| Parameter | Purpose |
| --- | --- |
| **Image** | Receives the project image to send. |
| **Audio** | Receives the project audio to send when **Enable Audio** is enabled. |
| **Name** | Sets the stream name. An empty value uses the node's name and hierarchy. |
| **Groups** | Sets the comma-separated discovery groups. An empty value uses **Public**. |
| **Enable Audio** | Enables audio transmission. |
| **Audio Sample Rate** | Sets the outgoing audio sample rate in Hz. The default is `48000`. |
| **Audio Channels** | Sets the outgoing channel count. The default is `2`. |
| **Resize** | Enables explicit image sizing. |
| **Keep Aspect Ratio** | Preserves the input proportions when resizing. |
| **Image Size** | Sets the target width and height when **Resize** is enabled. |
| **Padding** | Chooses **Upscale** or **Add Padding** when the image dimensions need stream-size alignment. |
| **Optimized Frame Processing** | Avoids repeatedly sending unchanged images. |
| **FPS** | Reports the measured sending rate. |

For accessing parameters, see [Node Parameters and Settings](https://help.screenberry.com/en/working-with-nodes/node-parameters-and-settings).

## Check the Receiving Application

| Symptom | Checks |
| --- | --- |
| The stream is missing | Confirm that the **NDI Out** node is enabled and has no initialization error. Check **Name**, matching discovery groups, network reachability, and firewall access. |
| The stream is listed, but the image is black | Check the **Image** input and its upstream nodes. **NDI Out** sends a black image when no image input is available. |
| The image is static or the reported frame rate is low | Confirm that the input is changing. Check **Optimized Frame Processing** before treating a low rate on a static image as a network failure. |
| The image arrives without audio | Check the **Audio** input, **Enable Audio**, channel count, and the receiver's audio playback settings. |
| A Windows receiver cannot receive the stream reliably | Apply [NDI Network Configuration](https://help.screenberry.com/en/integration-control/ndi/ndi-network-configuration) on the receiving computer. Changes to receive settings on the Media Server do not configure a separate receiver. |

Confirm the result in the destination application. A working project preview or a nonzero **FPS** value on the sender does not establish that a remote receiver is receiving the stream correctly.
