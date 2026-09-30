---
id: guide.3d-scene.3d-model
variant_id: guide.3d-scene.3d-model.imported-current-guide
title: Adding and Managing 3D Models in Screenberry 3D Scene
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
    path: archive/site/content/en/3d-scene/3d-model.mdx
    sha256: ec97f7235a728c9628a1d0c9c8edf9176725714e60753e9ebd3fa2c484dd498c
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/3d-scene/3d-model.mdx
  canonical_url: https://help.screenberry.com/en/3d-scene/3d-model
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: ec97f7235a728c9628a1d0c9c8edf9176725714e60753e9ebd3fa2c484dd498c
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Adding and Managing 3D Models in Screenberry 3D Scene
    description: Learn how to add, configure, and manage 3D models within Screenberry's 3D scenes, including importing models and adjusting their settings.
    openGraph:
      title: Adding and Managing 3D Models in Screenberry 3D Scene
      description: Learn how to add, configure, and manage 3D models within Screenberry's 3D scenes, including importing models and adjusting their settings.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/3d-scene/3d-model.yaml
  visual_information_review: not-independently-verified
---

# 3D Model

## Adding 3D Models

3D models can be added to the 3D scene using the **3D Model File** node.

To add a 3D model, do the following:

1. Navigate to the **Node Graph** widget.
2. Add a **3D Model File** node to your node graph.
3. In the **3D Model File** node settings, select your desired 3D model file using the **Filename** parameter.
4. Connect the **Object** output parameter of the **3D Model File** node to the **Objects** input parameter of the **3D Scene** node.
5. Switch to the **3D Scene** widget to further adjust the position and dimensions of the 3D model, either using 3D scene tools or within the **3D Model File** settings.

The **3D Model File** settings include:

##### General settings

- **Filename**: Shows the path to the 3D model file.

##### Baked Texture

- **Render Baked Texture**: Toggle this option to enable or disable the rendering of the baked texture.
- **Baked Texture Size**: Set the resolution of the baked texture. Specify values for width (**X**) and height (**Y**), for example, 1920x1080 for full HD.
- **Baked Texture Bits per Channel**: Choose the color depth for the texture. Options include **8-bit** and **32-bit (float)**.
- **Baked Texture Wrap Mode**: Select how the image is sampled outside its texture boundaries. **Clamp to Black** returns black outside the image; **Repeat Edge Pixels** extends the colors of the nearest edge pixels.

##### Other parameters

- **Current UV Set**: Choose the UV set that determines how textures are applied to the 3D model.
- **Color**: Select the color of the 3D model's surface for previewing without a texture.
- **Merge Points**: Combines vertices or points that are within proximity to each other to reduce the complexity of the 3D model.
- **Transform Matrix**: Access transformation controls, including scale, rotation, and position.
- **Transform Order**: Choose the order in which transformations like scale, rotate, and translate are applied.
- **Scale**: Adjust the size of the primitive across the **X**, **Y**, and **Z** axes.
- **Rotation Order**: Indicate the sequence in which rotations are applied around the axes, for example, **Y (Heading), X (Pitch)**, and **Z (Bank)**.
- **Rotation**: Orient the 3D model within the 3D space by setting the rotation angles around the **X**, **Y**, and **Z** axes.
- **Position**: Set the location of the 3D model within the 3D space by entering coordinates for the **X**, **Y**, and **Z** axes.
- **Projection Mapping**: Enable or disable the application of projected textures onto the surface of the 3D model.
- **Source Model Orientation**: Specifies the initial orientation of the model when imported into the scene. The options include **Y Up** and **Z Up**.
- **Show Subobjects**: Toggles the display of the individual sub-parts of the model.
- **Resources Folder**: Specify the path to the resources folder where the 3D model’s data will be stored.

## Saving 3D Models

You can save the current state of 3D models or 3D Primitives using the **3D Model Export** node.

To export a 3D model, follow these steps:

1. Navigate to the **Node Graph** widget.
2. Add a **3D Model Export** node to your node graph.
3. Connect the **Object** output parameter from the **3D Model File** and/or **3D Primitive** nodes to the **Source Object** input parameter of the **3D Model Export** node.
4. In the settings of the **3D Model Export** node, input the path and name for the 3D model file in the **Filename** parameter, then click the **Save File** button.
