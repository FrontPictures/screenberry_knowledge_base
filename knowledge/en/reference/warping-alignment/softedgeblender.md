---
id: guide.warping-alignment.softedgeblender
variant_id: guide.warping-alignment.softedgeblender.imported-current-guide
title: Screenberry Soft Edge Blender - Seamless Image Merging
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
    path: archive/site/content/en/warping-alignment/softedgeblender.mdx
    sha256: 82cc3ed89ec245d98ef92d314de802c39db8c8685cedf5a72db8b48efd80a81b
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/warping-alignment/softedgeblender.mdx
  canonical_url: https://help.screenberry.com/en/warping-alignment/softedgeblender
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 82cc3ed89ec245d98ef92d314de802c39db8c8685cedf5a72db8b48efd80a81b
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Soft Edge Blender - Seamless Image Merging
    description: Learn about blending methods, generating blend maps, controls and settings for merging overlapping projected images seamlessly.
    openGraph:
      title: Screenberry Soft Edge Blender - Seamless Image Merging
      description: Learn about blending methods, generating blend maps, controls and settings for merging overlapping projected images seamlessly.
presentation:
  mode: text-only
  illustrations: illustrations/en/reference/warping-alignment/softedgeblender.yaml
  visual_information_review: not-independently-verified
---

# Soft Edge Blender

The **Soft Edge Blender** node offers control over soft-edge blending for combining two or more overlapping projected images into a single seamless image.

The **Soft Edge Blender** node generates blending maps to allow seamless overlapping for the images modified by patches and should be connected to the **Soft Edge Blender** input parameter of these patch nodes.

Example of the node graph with the **Soft Edge Blender** node

The **Settings** panel of the **Soft Edge Blender** node provides the following controls for soft-edge blending:

**Generation Method**    Select the blend map generation method: **Linear Distance** or **Gravity Function**.

**Gravity Falloff**    Sets the value for the gravitation-based edge detection algorithm for the blend maps generation if the **Gravity Function** blends map generation method is selected.

**Quadratic Easing**    Specifies if the _quadratic easing_ function should be applied for the area of image overlap.

**Blur Radius**    Sets the blur radius for the blend maps.

**Gamma**    Sets the inverse-gamma distribution value for the blend maps.

**Build Blend Maps**    Pressing the **Build Blend Maps** button generates new blend maps.

**Disable Blending**    Resets the blend maps.

> **Note:** Regenerate blend maps by pressing the **Build Blend Maps** button every time the settings of the **Soft Edge Blender** node are changed or when the geometry is modified in patch nodes connected to the **Soft Edge Blender** node.

In addition, working with the **Soft Edge Blender** patch follows the general principles for working with patches outlined in the [Editing Patches](../../how-to/patch-editor/editing-patches.md) section of the documentation.
