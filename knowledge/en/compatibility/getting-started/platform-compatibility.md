---
id: guide.getting-started.platform-compatibility
variant_id: guide.getting-started.platform-compatibility.imported-current-guide
title: Screenberry Platform Support
language: en
kind: compatibility
status: in_review
owner: unassigned
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: existing-guide
    path: archive/site/content/en/getting-started/platform-compatibility.mdx
    sha256: 21761016ab6aa9714875f02b0d44399c7f3ab2432a35c3c8184f87b7cde83d6c
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/getting-started/platform-compatibility.mdx
  canonical_url: https://help.screenberry.com/en/getting-started/platform-compatibility
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 21761016ab6aa9714875f02b0d44399c7f3ab2432a35c3c8184f87b7cde83d6c
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Platform Support
    description: Check which Screenberry Server features are supported on Windows, Linux, and macOS.
    openGraph:
      title: Screenberry Platform Support
      description: Compare Screenberry Server feature support on Windows, Linux, and macOS.
presentation:
  mode: text-only
  illustrations: null
  visual_information_review: not-applicable
---

# Platform Support

**Screenberry Server** and **Screenberry Panel** are available for Windows, Linux, and macOS. **Screenberry Server** feature availability varies by operating system because some features depend on platform-specific hardware, drivers, or third-party technologies.

The table compares selected **Screenberry Server** features across Windows, Linux, and macOS. It is not a complete feature list; features that do not appear in the table are not necessarily unsupported.

> **Note:** For a production system, confirm that the operating system you use supports every required capture device, GPU feature, integration, and third-party component.

## Screenberry Server feature support

| Feature                                                | Windows                                                        | Linux                                                          | macOS                                                                                        |
| ------------------------------------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Notch Playback (Notch Blocks)**                      | Supported                                                      | Not available                                                  | Not available                                                                                |
| **Notch LC video playback**                            | Supported                                                      | Supported                                                      | Not available                                                                                |
| **DeckLink (Blackmagic) capture cards**                | Supported                                                      | Supported                                                      | Not available                                                                                |
| **Magewell capture cards**                             | Supported                                                      | Not available                                                  | Not available                                                                                |
| **Vision capture cards (Datapath)**                    | Supported                                                      | Supported through V4L                                          | Not available                                                                                |
| **Deltacast capture cards**                            | Some PCIe cards only                                           | Some PCIe cards only                                           | Not available                                                                                |
| **FlyCapture (PointGrey cameras)**                     | Supported                                                      | Not available                                                  | Not available                                                                                |
| **Video capture (USB camera, etc.)**                   | Supported through DirectShow                                   | Supported through V4L                                          | Supported through AVFoundation; camera permission and compatible device formats are required |
| **GenICam**                                            | Supported through Aravis; device compatibility must be checked | Supported through Aravis; device compatibility must be checked | Not available                                                                                |
| **Web View**                                           | Supported                                                      | Supported                                                      | Not available                                                                                |
| **Calibrator: Gamma Calibration**                      | Supported                                                      | Supported                                                      | Not available                                                                                |
| **Screenberry plugins**                                | Supported                                                      | Supported                                                      | Not available                                                                                |
| **Camera control for auto-calibration**                | DigiCamControl and gphoto2                                     | gphoto2                                                        | gphoto2                                                                                      |
| **TouchEngine**                                        | Supported                                                      | Not available                                                  | Not available                                                                                |
| **VR camera (HTC Vive, Oculus, etc.)**                 | Supported                                                      | Supported                                                      | Not available                                                                                |
| **NVIDIA Quad Buffer (frame-sequential stereoscopic)** | Supported                                                      | Supported                                                      | Not available                                                                                |
| **GPU counters in System Info**                        | NVIDIA only\*                                                  | Not available                                                  | Not available                                                                                |
| **CPU name and CPU usage in System Info**              | Supported                                                      | Supported                                                      | Supported; individual values may depend on the hardware                                      |

\* Not available for Intel or AMD GPUs

Feature availability can change between Screenberry releases.

If your project depends on a listed feature or specific hardware, contact [Screenberry support](https://screenberry.com/contact-us) or your distributor to confirm support for your configuration.
