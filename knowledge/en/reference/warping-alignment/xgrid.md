---
id: guide.warping-alignment.xgrid
variant_id: guide.warping-alignment.xgrid.imported-current-guide
title: Screenberry XGrid Patch - Projection Mapping Using X-Shaped Mesh Grids
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
    path: archive/site/content/en/warping-alignment/xgrid.mdx
    sha256: 43bc325472ec948b51dde4da42f7c983bce51570206ec6810f0b4d1997a423c9
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/warping-alignment/xgrid.mdx
  canonical_url: https://help.screenberry.com/en/warping-alignment/xgrid
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 43bc325472ec948b51dde4da42f7c983bce51570206ec6810f0b4d1997a423c9
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry XGrid Patch - Projection Mapping Using X-Shaped Mesh Grids
    description: Explore the XGrid patch in Screenberry, designed for projection mapping on surfaces with X-shaped grid patterns.
    openGraph:
      title: Screenberry XGrid Patch - Projection Mapping Using X-Shaped Mesh Grids
      description: Explore the XGrid patch in Screenberry, designed for projection mapping on surfaces with X-shaped grid patterns.
presentation:
  mode: text-only
  illustrations: illustrations/en/reference/warping-alignment/xgrid.yaml
  visual_information_review: not-independently-verified
---

# XGrid

The **XGrid** node is a patch that is mostly used to map projections onto surfaces with an X-shaped grid pattern.

In a typical setup, the **XGrid** node receives a source image as the input and outputs the modified image to the **Display** or **Context** node.

Example of the node graph with the **XGrid** node

To apply X-grid mapping in the **Patch Editor**, do the following:

1. Create a mesh grid by entering **X** and **Y** values for the **Grid Size** parameter in the **Settings** panel.
2. In the **Input** panel, define the mapping of the source image for the individual grid cells by dragging the handles of the mesh control points.
3. In the **Output** panel, modify the warping mesh of the projected image by dragging the handles of the mesh control points for individual grid cells.

In addition, working with the **XGrid** patch follows the general principles for working with patches outlined in the [Editing Patches](../../how-to/patch-editor/editing-patches.md) section of the documentation.
