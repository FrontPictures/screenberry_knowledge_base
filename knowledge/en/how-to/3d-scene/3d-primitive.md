---
id: guide.3d-scene.3d-primitive
variant_id: guide.3d-scene.3d-primitive.imported-current-guide
title: Screenberry 3D Scene - Adding and Modifying 3D Primitives
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
    path: archive/site/content/en/3d-scene/3d-primitive.mdx
    sha256: 64089bc157ed9660e13ab1a296e548c067832f8f73f65faba38aa8117addbdc6
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/3d-scene/3d-primitive.mdx
  canonical_url: https://help.screenberry.com/en/3d-scene/3d-primitive
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 64089bc157ed9660e13ab1a296e548c067832f8f73f65faba38aa8117addbdc6
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry 3D Scene - Adding and Modifying 3D Primitives
    description: Learn how to add and modify basic geometric shapes in Screenberry's 3D scenes, including boxes, spheres, and cylinders.
    openGraph:
      title: Screenberry 3D Scene - Adding and Modifying 3D Primitives
      description: Learn how to add and modify basic geometric shapes in Screenberry's 3D scenes, including boxes, spheres, and cylinders.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/3d-scene/3d-primitive.yaml
  visual_information_review: not-independently-verified
---

# 3D Primitive

The **3D Primitive** feature allows you to add basic geometric shapes such as boxes, spheres, cylinders, etc., into your 3D scene and modify them.

To add a **3D Primitive**, do the following:

1. Navigate to the **Node Graph** widget.
2. Add a **3D Primitive** node to your node graph.
3. Connect the **Object** output parameter of the **3D Primitive** node to the **Objects** input parameter of the **3D Scene** node.
4. Optionally (this step can be performed later directly in the 3D scene), select the type of geometric shape you want to add in the **3D Primitive** node settings. Options include a sphere, box, cylinder, plane, or dome.
5. Switch to the **3D Scene** widget to further adjust the position and dimensions of the primitive, either using **3D scene** tools or within the **3D Primitive** settings.

The **3D Primitive** settings include:

##### General settings

- **Type**: Select the type of primitive you wish to create: **Sphere**, **Box**, **Cylinder**, **Plane**, or **Dome**.
- **Size**: Define the dimensions of the primitive with specific values for width (**X**), height (**Y**), and depth (**Z**).

##### Texture Controls

- **Flip U / Flip V**: These options invert the texture mapping on the U-axis or V-axis.
- **Opposite Polygons**: Enable the rendering of opposite sides of polygons. This can be useful in certain 3D setup scenarios, for example, when the 3D camera is placed inside the primitive.
- **Double-sided**: When checked, both sides of the polygons are rendered.
- **Top/Bottom Plane**: Toggle these to include or exclude the top and bottom planes in shapes like boxes and cylinders.

##### Baked Texture

- **Render Baked Texture**: Toggle this option to enable or disable the continuous re-rendering of the baked texture.
- **Baked Texture Size**: Set the resolution of the baked texture. Specify values for width (**X**) and height (**Y**), for example, 1920x1080 for full HD.
- **Baked Texture Bits per Channel**: Choose the color depth for the texture. Options include **8-bit** and **32-bit (float)**.
- **Baked Texture Wrap Mode**: Select how the image is sampled outside its texture boundaries. **Clamp to Black** returns black outside the image; **Repeat Edge Pixels** extends the colors of the nearest edge pixels.

##### Other parameters

- **Current UV Set**: Define which set of texture coordinates will be used for the texture mapping of the 3D primitive.
- **Color**: Select the color of the primitive's surface (if no texture is applied).
- **Transform Matrix**: Access transformation controls, including scale, rotation, and position.
- **Transform Order**: Choose the order in which transformations like scale, rotate, and translate are applied.
- **Scale**: Adjust the size of the primitive across the **X**, **Y**, and **Z** axes.
- **Rotation Order**: Indicate the sequence in which rotations are applied around the axes, for example, **Y (Heading), X (Pitch),** and **Z (Bank)**.
- **Rotation**: Orient the primitive within the 3D space by setting the rotation angles around the **X**, **Y**, and **Z** axes.
- **Position**: Set the location of the primitive within the 3D space by entering coordinates for the **X**, **Y**, and **Z** axes.
- **Projection Mapping**: Enable or disable the application of projected textures onto the surface of the primitive.
- **Resources Folder**: Specify the path to the folder where the current state of the primitive, including its geometry and texture coordinates, will be continuously saved as an OBJ file.
- **UV Set \[N] Texture**: Assigns the texture to be mapped onto the surface of the 3D primitive using **UV Set \[N]**.
