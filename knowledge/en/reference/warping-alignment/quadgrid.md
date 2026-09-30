---
id: guide.warping-alignment.quadgrid
variant_id: guide.warping-alignment.quadgrid.imported-current-guide
title: Screenberry Quad Grid Patch - Projection Mapping on Stair-Like Surfaces
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
    path: archive/site/content/en/warping-alignment/quadgrid.mdx
    sha256: 91ce00720be83e3bf41728f82c0d0574edbccbc9200bb5547e8dc8bf47cfbb1b
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/warping-alignment/quadgrid.mdx
  canonical_url: https://help.screenberry.com/en/warping-alignment/quadgrid
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 91ce00720be83e3bf41728f82c0d0574edbccbc9200bb5547e8dc8bf47cfbb1b
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Quad Grid Patch - Projection Mapping on Stair-Like Surfaces
    description: Explore the Quad Grid patch in Screenberry for mapping projections on stair-like objects, using mesh control for precise alignment.
    openGraph:
      title: Screenberry Quad Grid Patch - Projection Mapping on Stair-Like Surfaces
      description: Explore the Quad Grid patch in Screenberry for mapping projections on stair-like objects, using mesh control for precise alignment.
presentation:
  mode: text-only
  illustrations: illustrations/en/reference/warping-alignment/quadgrid.yaml
  visual_information_review: not-independently-verified
---

# Quad Grid

The **Quad Grid** node is a patch that applies perspective to the individual planes of the user-defined mesh grid. This patch is developed to map projection onto surfaces of stair-like objects. In a typical setup, the **Quad Grid** node receives a source image as the input and outputs the modified image to the **Display** or **Canvas** node.

Example of the node graph with the **Quad Grid** node

To apply perspective warping using the **Quad Grid** patch, do the following in the **Patch Editor**:

1. Create a mesh grid by entering **X** and **Y** values in the **Grid Size** parameter in the **Settings** panel.

   For a staircase-like object with horizontal tread and riser surfaces:

   - Set **X** to 2 to create one column of quadrilateral faces. Use a larger value if a more complex object requires additional columns.
   - Set **Y** to the total number of consecutive visible tread and riser surfaces plus 1.

   A grid with **X** = 2 and **Y** = N + 1 contains N quadrilateral faces. For the corresponding vertical arrangement, swap the **X** and **Y** values.

|                                                                                                                   |                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Example of a patch grid for an object with horizontal planes. Grid Size: X=2, Y=10, giving 9 quadrilateral faces. | Example of a patch grid for an object with vertical planes. Grid Size: X=10, Y=2, giving 9 quadrilateral faces. |

2. In the **Output** panel, modify the warping mesh for the projected image by dragging the handles of the mesh control points for each grid plane.
3. If the grid planes are transformed into trapezoidal shapes during the modification of the mesh grid, some warping artifacts may occur at the junction of the planes. To avoid this, select the **Linear** option for the **Vertical Interpolation** or **Horizontal Interpolation** parameters in the **Settings** panel to limit perspective distortion to horizontal or vertical grid planes.

In addition, working with the **Quad Grid** patch follows the general principles for working with patches outlined in the [Editing Patches](../../how-to/patch-editor/editing-patches.md) section of the documentation.
