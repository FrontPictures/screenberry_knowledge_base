---
id: guide.warping-alignment.mask
variant_id: guide.warping-alignment.mask.imported-current-guide
title: Screenberry Mask Node - Using Custom Shape Overlays
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
    path: archive/site/content/en/warping-alignment/mask.mdx
    sha256: 7a52c4e82cf7effedaaf9045fad12905c9594d0cbe347b72f5f351aa540fb19a
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/warping-alignment/mask.mdx
  canonical_url: https://help.screenberry.com/en/warping-alignment/mask
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 7a52c4e82cf7effedaaf9045fad12905c9594d0cbe347b72f5f351aa540fb19a
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Mask Node - Using Custom Shape Overlays
    description: Learn to create and apply custom shape masks in Screenberry. Understand how to draw, modify, and overlay shape masks on images.
    openGraph:
      title: Screenberry Mask Node - Using Custom Shape Overlays
      description: Learn to create and apply custom shape masks in Screenberry. Understand how to draw, modify, and overlay shape masks on images.
presentation:
  mode: text-only
  illustrations: illustrations/en/reference/warping-alignment/mask.yaml
  visual_information_review: not-independently-verified
---

# Mask

The **Mask** node is a patch generally used to create and customize free-form solid color shapes that can be applied as a mask over other images. In a typical setup, the **Mask** node receives a solid color image from the **Solid Color** node and outputs the resulting shape mask to the **Display** or **Canvas** node, where it overlays the image received from another image source node.

Example of the node graph with the **Mask** node

Create and customize a shape mask by performing the following actions in the **Output** layout area of the **Patch Editor**:

- **Draw a path by adding control points.** Position the cursor over the layout area and press **`P`**, or right-click there and select **Add Point** from the context menu. Each new control point is connected to the previous one by a straight line. Continue adding points to form the desired shape.
- **Complete the shape.** Double-click while the cursor is over the layout area to close the path.
- **Transform straight path segments to curved ones.** While hovering over a control point, do one of the following:
  - Hold **`Ctrl`** and drag the mouse to extend a direction line (or tangent) handle and adjust the curve on one side of the control point.
  - Hold **`Ctrl`** + **`Shift`** and drag the mouse to extend paired direction line handles and adjust the curve on opposite sides of the control point simultaneously.
- **Modify the shape by moving control points and direction line handles.** Change the shape of a path by dragging its control points, and the direction line handles. If you select more than one control point, you can drag them simultaneously. Additionally, you can set the position of a control point by selecting it and pressing the **`Enter`** key, or right-clicking on the control point and selecting **Set Position** from the context menu, then entering **X** and **Y** coordinates in the opened dialog window. When dragging direction line handles, hold **`Shift`** to adjust the curve on opposite sides of the control point simultaneously.
- **Create additional control points on the path.** Hold **`Alt`** and click on the path to add a control point.
- **Delete control points.** Select the control points and press **`Del`**, or right-click the selection and choose **Delete Points** from the context menu.

A shape mask can contain more than one shape. There can be an overlap between these shapes.

In addition, working with the **Mask** patch follows the general principles for working with patches outlined in the [Editing Patches](../../how-to/patch-editor/editing-patches.md) section of the documentation.
