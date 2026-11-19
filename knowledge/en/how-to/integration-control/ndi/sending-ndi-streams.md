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
      "scope": "Owner reviewed the concise NDI revision and Settings formatting, and approved GitHub publication on 2026-11-20. Deployment awaits Vercel administrator approval; not independently runtime-tested."
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
    "sha256": "6b7f50d2c738866d2a97dd6e8d4bdd0e26b09f5f4a3e099d5aba6dea739ea48e"
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

# Sending NDI Streams

Use **NDI Out** to send project video and optional audio to an NDI receiver.

## Send a Stream

1. Add an **NDI Out** node to the project.
2. Connect the image source to **Image**. For example, use **Image** from a **Media Player** node.
3. Set **Name** to identify the stream in the receiver.
4. For audio, connect the source to **Audio** and enable **Enable Audio**. Set **Audio Sample Rate** and **Audio Channels** as required.
5. Select the stream in the receiving application and check its video and audio.

## Stream Settings

The **Settings** panel of the **NDI Out** node offers the following control and information parameters:

| Parameter | Description |
| --- | --- |
| **Name** | Stream name. If empty, uses the node's name and hierarchy. Set an explicit name to keep it independent of node renaming or moving. |
| **Groups** | Comma-separated discovery groups, for example `Public,Stage`. An empty value uses **Public**. The receiver must search a matching group. |
| **Audio Sample Rate** | Outgoing sample rate; default `48000 Hz`. Audio is converted to this rate. |
| **Audio Channels** | Outgoing channel count; default `2`. For mixing or remapping, use **Audio Mixer** or **Audio Channel Mixer**; see [Working with Audio](https://help.screenberry.com/en/working-with-audio). |
| _Output Parameters_ | |
| **FPS** | Measured sending rate; read-only. |

Changing **Name** or **Groups** recreates the sender; reselect the stream in the receiver if needed.

## Image Size

Enable **Resize** to set **Image Size**. With **Keep Aspect Ratio** enabled, the image fits within those dimensions while preserving its proportions. Disable it to resize to the exact width and height. With **Resize** disabled, the node uses the input dimensions before alignment.

### Padding

**NDI Out** aligns the stream width to a multiple of 16 and the height to an even number. **Padding**, under **Advanced Settings**, controls this adjustment:

- **Upscale** scales the image to the aligned dimensions.
- **Add Padding** adds transparent pixels without scaling the image.

For example, `1919 × 1079` becomes `1920 × 1080`. Transparency handling depends on the receiver.

## Frame Processing

**Optimized Frame Processing** avoids repeatedly sending unchanged images, so a static image can produce a low **FPS** value. Disable it for continuous frame sending. **FPS** does not set an independent stream frame rate.

## Output Problems

| Symptom | Check |
| --- | --- |
| Stream missing | Node initialization errors, **Name**, matching **Groups**, and firewall access. |
| Black image | The **Image** connection and upstream nodes. **NDI Out** sends black when no image is available. |
| Video without audio | The **Audio** connection, **Enable Audio**, channel count, and receiver playback settings. |
| Unreliable reception on Windows | Follow [NDI Network Configuration](https://help.screenberry.com/en/integration-control/ndi/ndi-network-configuration) on the receiving computer. |
