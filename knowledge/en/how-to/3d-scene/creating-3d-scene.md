---
id: guide.3d-scene.creating-3d-scene
variant_id: guide.3d-scene.creating-3d-scene.imported-current-guide
title: Creating a 3D Scene in Screenberry - Step-by-Step Guide
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
    path: archive/site/content/en/3d-scene/creating-3d-scene.mdx
    sha256: 941e197cf86a6eee30120ccc2e54242d1ae9c3b155a6a425df8ad53350320c22
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/3d-scene/creating-3d-scene.mdx
  canonical_url: https://help.screenberry.com/en/3d-scene/creating-3d-scene
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 941e197cf86a6eee30120ccc2e54242d1ae9c3b155a6a425df8ad53350320c22
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Creating a 3D Scene in Screenberry - Step-by-Step Guide
    description: Learn how to create a 3D scene in Screenberry with detailed instructions on adding and connecting essential nodes like 3D primitives, models, cameras, and projection mappers.
    openGraph:
      title: Creating a 3D Scene in Screenberry - Step-by-Step Guide
      description: Learn how to create a 3D scene in Screenberry with detailed instructions on adding and connecting essential nodes like 3D primitives, models, cameras, and projection mappers.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/3d-scene/creating-3d-scene.yaml
  visual_information_review: not-independently-verified
---

# Creating 3D Scene

To create the **3D Scene**, do the following:

1. Navigate to the **Node Graph** widget.
2. Add a **3D Scene** node to your node graph. The **Canvas** node must already be added to the node graph for the **3D Scene** widget to function correctly.
3. Add the nodes of objects you will require in your scene and connect them to the **3D Scene** node.

These might include:

- **3D Primitives**: Basic geometric shapes like boxes, spheres, cylinders, etc.
- **3D Models**: More complex shapes imported from external files.
- **Cameras**: Virtual cameras for viewing the scene from various perspectives.
- **Projection Mappers**: Virtual devices for projecting textures onto your 3D objects.

Once the **3D Scene** node is added, the corresponding widget is automatically created. You can access it by double-clicking on the **3D Scene** node or by selecting **Window** > \[**3D Scene**] in the main Screenberry Panel menu.

All objects added to the **3D** **Scene** (by connecting the related nodes to the **3D Scene** node in the node graph) are added to the 3D environment. A list of these objects is available in the top right pane of the widget, with the **Settings** panel for the object selected from the list located just below this pane.
