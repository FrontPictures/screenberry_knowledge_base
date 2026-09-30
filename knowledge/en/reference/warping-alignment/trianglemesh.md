---
id: guide.warping-alignment.trianglemesh
variant_id: guide.warping-alignment.trianglemesh.imported-current-guide
title: Screenberry Triangle Mesh Patch - Image Warping Using Triangular Mesh
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
    path: archive/site/content/en/warping-alignment/trianglemesh.mdx
    sha256: 1f00545f69cfcabe8e6746120f020c59b60240db9c58f9778524dde6e19a8409
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/warping-alignment/trianglemesh.mdx
  canonical_url: https://help.screenberry.com/en/warping-alignment/trianglemesh
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 1f00545f69cfcabe8e6746120f020c59b60240db9c58f9778524dde6e19a8409
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Triangle Mesh Patch - Image Warping Using Triangular Mesh
    description: Learn about Screenberry's Triangle Mesh patch for mapping images onto complex surfaces by adjusting triangle-based mesh.
    openGraph:
      title: Screenberry Triangle Mesh Patch - Image Warping Using Triangular Mesh
      description: Learn about Screenberry's Triangle Mesh patch for mapping images onto complex surfaces by adjusting triangle-based mesh.
presentation:
  mode: text-only
  illustrations: illustrations/en/reference/warping-alignment/trianglemesh.yaml
  visual_information_review: not-independently-verified
---

# Triangle Mesh

The **Triangle Mesh** node is a patch that is mostly used to map projection onto the surfaces of objects that are composed of triangular shapes.

In a typical setup, the **Triangle Mesh** node receives a source image as the input and outputs the modified image to the **Display** or **Canvas** node.

Example of the node graph with the **Triangle Mesh** node

To apply triangular mesh warping:

1. Create and edit a triangular mesh by doing the following:
   - **Add control points.** Position the cursor over the layout area and press **`P`**, or right-click there and select **Add Point** from the context menu.
   - **Connect control points into triangular mesh faces.** Select the control points and press **`T`**, or right-click the selection and choose **Create Triangles** from the context menu. If no points are selected, pressing **`T`** connects all existing control points.
   - **Delete control points.** Select the control points and press **`Del`**, or right-click the selection and choose **Delete Points** from the context menu.

2) In the **Output** panel, modify the mesh grid by dragging the handles of the mesh control points.
3) In the **Input** panel, define the mapping of the source image for the individual mesh triangles by dragging the handles of the mesh control points.

In addition, working with the **Triangle Mesh** patch follows the general principles for working with patches outlined in the [Editing Patches](../../how-to/patch-editor/editing-patches.md) section of the documentation.
