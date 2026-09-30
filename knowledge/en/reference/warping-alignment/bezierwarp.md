---
id: guide.warping-alignment.bezierwarp
variant_id: guide.warping-alignment.bezierwarp.imported-current-guide
title: Screenberry Bezier Warp Patch - Image Mapping on Curved Surfaces
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
    path: archive/site/content/en/warping-alignment/bezierwarp.mdx
    sha256: 93cdb21d4ef78c9cc4e291fb003ef6839cff97b98fd64f297588f80660efd13e
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/warping-alignment/bezierwarp.mdx
  canonical_url: https://help.screenberry.com/en/warping-alignment/bezierwarp
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 93cdb21d4ef78c9cc4e291fb003ef6839cff97b98fd64f297588f80660efd13e
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Bezier Warp Patch - Image Mapping on Curved Surfaces
    description: Use Screenberry's Bezier Warp patch for precise image warping on curved surfaces.
    openGraph:
      title: Screenberry Bezier Warp Patch - Image Mapping on Curved Surfaces
      description: Use Screenberry's Bezier Warp patch for precise image warping on curved surfaces.
presentation:
  mode: text-only
  illustrations: illustrations/en/reference/warping-alignment/bezierwarp.yaml
  visual_information_review: not-independently-verified
---

# Bezier Warp

The **Bezier Warp** node is a patch that allows image warping based on Bezier curves. It is mostly used for mapping a projection onto curved or partially curved surfaces and other regular or free-form objects.

In a typical setup, the **Bezier Warp** node receives a source image as the input and outputs the modified image to the **Display** or **Canvas** node.

Example of the node graph with the **Bezier Warp** node

To modify image geometry and mapping using the **Bezier Warp** patch, do the following in the **Patch Editor**:

- In the **Input** panel, adjust the mapping of the source image for the individual mesh cells by dragging the handles of the mesh control points.
- In the **Output** panel, modify the image geometry by dragging the handles of the mesh control points.

Typically, warping with the **Bezier Warp** starts from setting up the corner control points of the mesh according to the projection surface geometry, while the mesh density is set to the minimum. It’s followed by a gradual subdivision of the mesh grid while refining the curves of the mesh at each subdivision step until the desired image warping is achieved.

Another approach to editing the **Bezier Warp** mesh is by selecting **Interpolate Inner Points** mode in the **Settings** panel. In this mode, the coordinates of inner control points are automatically recalculated to adapt to the modification of the Bezier curve caused by the movement of the patch grid edge points.

In addition, working with the **Bezier Warp** patch follows the general principles for working with patches outlined in the [Editing Patches](../../how-to/patch-editor/editing-patches.md) section of the documentation.
