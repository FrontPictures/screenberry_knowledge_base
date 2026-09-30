---
id: guide.node-reference.primary-nodes.display
variant_id: guide.node-reference.primary-nodes.display.imported-current-guide
title: Screenberry Display Node - Customizing Media Outputs
language: en
kind: reference
status: in_review
owner: unassigned
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: existing-guide
    path: archive/site/content/en/node-reference/primary-nodes/display.mdx
    sha256: 0ba4e7c7de0f432aa73b130d89f3c75b04cc0da640137260f0b6cc609f72b358
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/node-reference/primary-nodes/display.mdx
  canonical_url: https://help.screenberry.com/en/node-reference/primary-nodes/display
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 0ba4e7c7de0f432aa73b130d89f3c75b04cc0da640137260f0b6cc609f72b358
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Display Node - Customizing Media Outputs
    description: Learn how to configure individual output viewports on the server output canvas and set their parameters.
    openGraph:
      title: Configuring Screenberry Display Node - Media Output Customization
      description: Learn how to configure individual output viewports on the server output canvas and set their parameters.
presentation:
  mode: text-only
  illustrations: illustrations/en/reference/node-reference/primary-nodes/display.yaml
  visual_information_review: not-independently-verified
---

# Display

The **Display** node defines an individual viewport that can be placed on the Screenberry server output canvas. Multiple **Display** nodes can be connected to the **Canvas** node or **RenderTarget** node (for off-screen rendering).

The **Display** node receives media content from any image source or patch node connected to it.

When the **Display** node is connected to the **Canvas** (or **RenderTarget**) node in the **Node Graph**, this node becomes accessible for editing in the corresponding **Canvas** (or **RenderTarget**) **Editor** widget. For more information on editing displays, see [Display Editor](../../../how-to/display-editor.md).

The **Settings** panel of the **Display** node offers the following control and information parameters:

|                     |                                                                                                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Patches             | Provides information about the number of **Patch** nodes connected to the **Display** node.                                                                                                                              |
| Image               | Provides information about the image source connected to the **Display** node.                                                                                                                                           |
| Size                | Sets the width and height of the display in pixels.                                                                                                                                                                      |
| Position            | Sets the position of the top-left corner of the display relative to the top-left corner of the server output canvas.                                                                                                     |
| Test Pattern        | Allows selecting a test pattern to show on the display (**Label**, **Grid**, **Color Bars**, or **Gradient**). See [Turning on Display Test Pattern](../../../how-to/display-editor.md#turning-on-display-test-pattern). |
| _Stereoscopic_      |                                                                                                                                                                                                                          |
| Enable Stereoscopic | Enables stereoscopic image rendering to the **Display**.                                                                                                                                                                 |
| Stereoscopic Mode   | Allows selecting a mode for stereoscopic image output: **Side-by-side**, **Top/Bottom**, or **Frame Sequential**.                                                                                                        |
| Swap Left-Right     | Swaps the positions of the left eye and right eye images in the side-by-side stereoscopic modes.                                                                                                                         |
| _Output Parameters_ |                                                                                                                                                                                                                          |
| Display             | Indicates whether the **Display** node is connected to the **Canvas** or **Render Target** node.                                                                                                                         |
| DomeSDKDisplay      | Indicates whether the **Display** node is connected to the DomeSDK Saver node.                                                                                                                                           |

> **Note:** The **Display** node can also be connected to the **DomeSDK Saver** node allowing you to save calibration data for individual projections in a multi-projector dome setup. To accomplish this, the **DomeSDK Display** output parameter pin should be enabled.
