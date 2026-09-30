---
id: guide.warping-alignment.transform2d
variant_id: guide.warping-alignment.transform2d.imported-current-guide
title: Screenberry Transform 2D - Dynamic Image Transformation
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
    path: archive/site/content/en/warping-alignment/transform2d.mdx
    sha256: 5c96df1e7dfc37b79d38349fb5d50ef44af151e0c1f9304e736522ba3389890e
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/warping-alignment/transform2d.mdx
  canonical_url: https://help.screenberry.com/en/warping-alignment/transform2d
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 5c96df1e7dfc37b79d38349fb5d50ef44af151e0c1f9304e736522ba3389890e
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Transform 2D - Dynamic Image Transformation
    description: An overview of dynamic image transformations using Screenberry's Transform 2D node, including anchor point adjustments, translation, rotation, scaling, and creating picture-in-picture effects.
    openGraph:
      title: Screenberry Transform 2D - Dynamic Image Transformation
      description: An overview of dynamic image transformations using Screenberry's Transform 2D node, including anchor point adjustments, translation, rotation, scaling, and creating picture-in-picture effects.
presentation:
  mode: text-only
  illustrations: illustrations/en/reference/warping-alignment/transform2d.yaml
  visual_information_review: not-independently-verified
---

# Transform 2D

The **Transform 2D** node allows you to apply static or dynamic post-processing transformations to the patches. Typically, it is used to position, move, scale, rotate patches, and create various picture-in-picture effects.

The **Transform 2D** node connects to the **Transform Matrix** input parameter of the target patch node.

Example of the node graph with the **Transform 2D** node

> **Note:** The advantage of using the **Transform 2D** node is that you can apply transformations to the image output while preserving the settings and geometry of the target patch node.

The **Settings** panel of the **Transform 2D** node provides the following transformation controls:

**Anchor Point** Adjusts the transform origin used for rotation and scaling. The default is (0.5, 0.5), the center of the patch.

**Translate** Offsets the patch horizontally (**X**) and/or vertically (**Y**) by the specified factor.

**Rotate** Rotates the patch around **Anchor Point** by the specified angle.

**Scale** Scales the patch relative to **Anchor Point** by the specified factor.

**Transform Order** Selects the order in which transformations are applied, for example, **Scale, Rotate, Translate**.

**Flip V** Flips the patch vertically.

**Flip H** Flips the patch horizontally.

**Aspect Ratio** Stretches the patch horizontally by the specified factor.

**Reset to Default** Resets all transformations applied to the patch by the **Transform 2D** node.

The following speed parameters are hidden by default. To display them, click **Show** in **Hidden Parameters** in the **Settings** panel. See [Hiding/Showing Individual Node Parameters](../working-with-nodes/node-parameters-and-settings.md#hidingshowing-individual-node-parameters).

**Translation Speed** Sets the speed of continuous horizontal (**X**) and/or vertical (**Y**) movement.

**Scaling Speed** Sets the speed of continuous scaling relative to **Anchor Point**.

**Rotation Speed** Sets the speed of continuous rotation around **Anchor Point**.

In addition, working with the **Transform 2D** patch follows the general principles for working with patches outlined in the [Editing Patches](../../how-to/patch-editor/editing-patches.md) section of the documentation.
