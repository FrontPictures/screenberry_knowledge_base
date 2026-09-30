---
id: guide.warping-alignment.quadwarp
variant_id: guide.warping-alignment.quadwarp.imported-current-guide
title: Screenberry Quad Warp Patch - Correcting Keystone Distortions
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
    path: archive/site/content/en/warping-alignment/quadwarp.mdx
    sha256: 4087f44aac725396fbd13db137571b02e4679103b72c65cabff4875a99b4eb0b
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/warping-alignment/quadwarp.mdx
  canonical_url: https://help.screenberry.com/en/warping-alignment/quadwarp
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 4087f44aac725396fbd13db137571b02e4679103b72c65cabff4875a99b4eb0b
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Quad Warp Patch - Correcting Keystone Distortions
    description: Correct keystone distortions on planar surfaces for off-axis projection alignment.
    openGraph:
      title: Screenberry Quad Warp Patch - Correcting Keystone Distortions
      description: Correct keystone distortions on planar surfaces for off-axis projection alignment.
presentation:
  mode: text-only
  illustrations: illustrations/en/reference/warping-alignment/quadwarp.yaml
  visual_information_review: not-independently-verified
---

# Quad Warp

The **Quad Warp** node is a patch primarily used for image geometry correction to compensate for the distortion caused by an off-axis image projection onto a planar surface (also known as _keystone distortion_).

In a typical setup, the **Quad Warp** node receives a source image as the input and outputs the modified image to the **Display** or **Canvas** node.

Example of the node graph with the **QuadWarp** node

To modify image geometry and mapping using the **Quad Warp** patch, do the following in the **Patch Editor:**

- In the **Input** panel, adjust the area of the source image to be mapped by dragging the handles of the mesh control points.
- In the **Output** panel, set the image geometry by adjusting the image perspective by dragging the handles of the mesh control points.

In addition, working with the **Quad Warp** patch follows the general principles for working with patches outlined in the [Editing Patches](../../how-to/patch-editor/editing-patches.md) section of the documentation.
