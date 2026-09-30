---
id: guide.warping-alignment.rectangle
variant_id: guide.warping-alignment.rectangle.imported-current-guide
title: Screenberry Rectangle Patch - Planar Image Adjustments
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
    path: archive/site/content/en/warping-alignment/rectangle.mdx
    sha256: b76fd5c65d4e5314926d41392ffbeeed3c0e7e8529711567f3374d6f1725bf03
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/warping-alignment/rectangle.mdx
  canonical_url: https://help.screenberry.com/en/warping-alignment/rectangle
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: b76fd5c65d4e5314926d41392ffbeeed3c0e7e8529711567f3374d6f1725bf03
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Rectangle Patch - Planar Image Adjustments
    description: Learn to use the Rectangle patch in Screenberry for planar image modifications, including the scaling, alignment, and positioning of images.
    openGraph:
      title: Screenberry Rectangle Patch - Planar Image Adjustments
      description: Learn to use the Rectangle patch in Screenberry for planar image modifications, including the scaling, alignment, and positioning of images.
presentation:
  mode: text-only
  illustrations: illustrations/en/reference/warping-alignment/rectangle.yaml
  visual_information_review: not-independently-verified
---

# Rectangle

The **Rectangle** node is a patch for applying planar rectangle-based modifications and is commonly used to scale, align and position the image on rectangular screens (mainly _LED_) or to create a picture-in-picture effect by combining multiple media sources on a single screen. In a typical setup, the **Rectangle** node receives a source image as the input and outputs the modified image to the **Display** or **Canvas** node.

Example of the node graph with the **Rectangle** node

To modify image geometry and mapping using the **Rectangle** patch in the **Patch Editor**, do the following:

- In the **Input** panel, modify the scale, aspect ratio, and area of the source image to be mapped by dragging the handles of the mesh control points.
- In the **Output** panel, set the image geometry by adjusting the scale, aspect ratio, and offset of the image by dragging the handles of the mesh control points.

When editing control points with the **Rectangle** patch, an additional diagonal smart guide is displayed.

- In the **Input** panel, it corresponds to the aspect ratio of the resulting image defined in the **Output** panel.
- In the **Output** panel, it corresponds to the aspect ratio of the image currently defined in the **Input** panel.

In addition, working with the **Rectangle** patch follows the general principles for working with patches outlined in the [Editing Patches](../../how-to/patch-editor/editing-patches.md) section of the documentation.
