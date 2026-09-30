---
id: guide.warping-alignment.ledstripesmapper
variant_id: guide.warping-alignment.ledstripesmapper.imported-current-guide
title: Screenberry LED Stripes Mapper - Mapping Media Content for LED Displays
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
    path: archive/site/content/en/warping-alignment/ledstripesmapper.mdx
    sha256: c247c02f8fc4fc5a624e3bd370c9069d9a8a3229ab789253a32e9bfdb806ce4d
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/warping-alignment/ledstripesmapper.mdx
  canonical_url: https://help.screenberry.com/en/warping-alignment/ledstripesmapper
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: c247c02f8fc4fc5a624e3bd370c9069d9a8a3229ab789253a32e9bfdb806ce4d
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry LED Stripes Mapper - Mapping Media Content for LED Displays
    description: Discover Screenberry's LED Stripes Mapper for transforming media into linear formats suitable for LED displays. Learn about remapping content for compatibility with various LED controllers.
    openGraph:
      title: Screenberry LED Stripes Mapper - Mapping Media Content for LED Displays
      description: Discover Screenberry's LED Stripes Mapper for transforming media into linear formats suitable for LED displays. Learn about remapping content for compatibility with various LED controllers.
presentation:
  mode: text-only
  illustrations: illustrations/en/reference/warping-alignment/ledstripesmapper.yaml
  visual_information_review: not-independently-verified
---

# LED Stripes Mapper

The **LED Stripes Mapper** node is a patch that allows the remapping of media content into lines. Typically, it is used to output the signal to a _LED stripes controller_. It can also be used to control lighting devices that can receive video as input.

Typically, the **LED Stripes Mapper** node receives the media content from the **Media Player** node and sends output to the **Canvas** node.

Example of the node graph with the **LED Stripes Mapper** node

To remap the content, do the following:

1. In the **Node Graph** widget, create a node tree by adding the **Media Player**, **LED Stripes Mapper**, and **Canvas** nodes, and connect them by **Ctrl**-clicking them one by one.
2. Switch to the **Media Player** widget, add the media content you want to remap into the lines to the **Media Player** playlist and start playback to have a visual reference while working with the patch.

3) Switch to the **Patch Editor**, and select the **LED Stripes Mapper** in the patches list.

4. In the **Settings** panel of the **LED Stripes Mapper**:

   - In the **Source Line Width** parameter, set the width in pixels of the source media to be remapped as lines.
   - Enter values for the **Target Image Size**, **Offset X** and **Y**, output **Line Width**, and **Spacing** parameters (consult your LED stripes or lighting controller documentation for the format details).
   - Enter a value for the **Number of Polylines** parameter, and for each polyline enter the number of **Segments** and **Total Length** in pixels (for example, if you have a polyline with 5 sections and each section is 128 pixels, then the total length is 5 x 128 = 640 pixels).

5) In the **Input** panel, right-click and enable **Show Live Image** in the context menu. Then map each polyline by dragging its control points to the corresponding endpoints in the source image.

Example of the server output from the **LED Stripes Mapper**
