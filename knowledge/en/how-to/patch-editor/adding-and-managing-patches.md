---
id: guide.patch-editor.adding-and-managing-patches
variant_id: guide.patch-editor.adding-and-managing-patches.imported-current-guide
title: Screenberry Patch Management - Adding and Deleting Patches
language: en
kind: how-to
status: in_review
owner: unassigned
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: existing-guide
    path: archive/site/content/en/patch-editor/adding-and-managing-patches.mdx
    sha256: 34296cad7b0602fc1e4a03e17f5792a2f1b1632fd6929b7662ee59969a8306d9
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/patch-editor/adding-and-managing-patches.mdx
  canonical_url: https://help.screenberry.com/en/patch-editor/adding-and-managing-patches
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 34296cad7b0602fc1e4a03e17f5792a2f1b1632fd6929b7662ee59969a8306d9
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Patch Management - Adding and Deleting Patches
    description: Understand adding and managing patches in Screenberry.
    openGraph:
      title: Adding and Managing Patches in Screenberry
      description: Learn about adding, managing, and deleting patches in Screenberry.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/patch-editor/adding-and-managing-patches.yaml
  visual_information_review: not-independently-verified
---

# Adding and Managing Patches

## Adding Patches

Patch nodes are added in the **Node Graph** (see [Adding Nodes](../working-with-nodes/adding-and-managing-nodes.md#adding-nodes)).

In a typical setup, an input of the patch node is connected to the source image node and its output to the **Display** or **Canvas** node.

The **Bezier Warp** receives input from the **Media Player** and sends output to the **Canvas**

## Deleting Patches

To delete a patch, open the **Canvas** widget and do one of the following:

- Right-click on any of the patch control points in the **Input** or **Output** panels and select **Delete** **Patches** from the dropdown menu.
- Click the patch in the navigation tree and choose **Delete** **Patch** from the dropdown menu.

Alternatively, you can delete the related patch node in the **Node Graph**.
