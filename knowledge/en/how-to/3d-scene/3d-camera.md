---
id: guide.3d-scene.3d-camera
variant_id: guide.3d-scene.3d-camera.imported-current-guide
title: Utilizing 3D Cameras in Screenberry 3D Scene
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
    path: archive/site/content/en/3d-scene/3d-camera.mdx
    sha256: 3f58a088691ac3fb803f1dd9cbc8311f55b595552d911359b1628d822545c670
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/3d-scene/3d-camera.mdx
  canonical_url: https://help.screenberry.com/en/3d-scene/3d-camera
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 3f58a088691ac3fb803f1dd9cbc8311f55b595552d911359b1628d822545c670
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Utilizing 3D Cameras in Screenberry 3D Scene
    description: Explore the functionality of 3D cameras in Screenberry, including how to add and configure them for capturing scenes.
    openGraph:
      title: Utilizing 3D Cameras in Screenberry 3D Scene
      description: Explore the functionality of 3D cameras in Screenberry, including how to add and configure them for capturing scenes.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/3d-scene/3d-camera.yaml
  visual_information_review: not-independently-verified
---

# 3D Camera

The **3D Camera** enables the capturing of the 3D scene from a user-customized viewpoint. The rendered output of the camera view can be forwarded to subsequent nodes within the node graph.

To add a **3D Camera**, do the following:

1. Navigate to the **Node Graph** widget.
2. Add a **3D Camera** node to your node graph.
3. Connect the **Camera** output parameter of the **3D Camera** node to the **Cameras** input parameter of the **3D Scene** node. This will integrate the camera into the scene.
4. Switch to the **3D Scene** widget to further adjust the position and orientation of the camera, either by using 3D scene tools or directly in the **3D Camera** settings.

When a **3D Camera** node is connected to the **3D Scene** node, a **3D Camera** output parameter is added to the **3D Scene** node. This parameter outputs the camera view image, which can then be routed to a visual output node, such as the **Canvas** or **Display** nodes.

The camera settings allow you to configure the parameters of the **3D Camera** view within a scene.

##### General settings

- **Image Size**: Set the width (**W**) and height (**H**) dimensions in pixels for the camera’s output image.
- **Bits per Channel**: Determine the color depth of the camera's output. Options include **8-bit** and **32-bit (float)**.
- **Type**: Choose the type of camera lens:
  - **Perspective**: Emulates the perception of the human eye, creating a sense of depth proportional to the distance from the camera.
  - **Orthogonal**: Displays objects without perspective distortion, maintaining their scale regardless of distance.
  - **Fisheye**: Captures a wide-angle view with spherical distortion.
  - **Spherical (Lat/Long)**: Provides a 360-degree panoramic output.
- **View Mode**: Select how the scene is displayed within the camera view.
  - **Textured**: Displays the scene with all textures applied to objects.
  - **Wireframe**: Displays the geometry of objects as a mesh of lines, representing the edges of all polygons.
  - **Textured + Wireframe**: Combines the textured and wireframe views, overlaying the wireframe mesh on top of the textured objects.
  - **Color**: Renders objects in solid colors, which can be set in the settings of the individual objects.
  - **Color + Wireframe**: Displays the objects in flat colors with the wireframe mesh overlaid.
  - **Points**: Displays only the vertices (points) of the objects' geometry.
  - **None (Projections Only)**: Displays only projections from **Projection Mappers**.
- **Show Projections**: Toggles the visibility of projections in the camera view.
- **Image Interpolation**: Determines the method by which the image is interpolated.
  - **Linear**: Blends the colors of surrounding pixels to produce smooth transitions.
  - **Nearest-neighbor**: Selects the color of the nearest pixel without any blending, preserving hard edges.
- **Mask**: Allows the user to apply a mask image to the camera's view. The mask image should be connected to the **Mask** input parameter of the **3D Camera** node in the node graph.
- **Transform Matrix**: Displays the transformation matrix, which is a representation of the camera's position, rotation, and scale within the 3D space.
- **Transform Order**: Specifies the order in which transformations (scale, rotate, translate) are applied to the camera.
- **Scale**: Adjusts the size of the camera's view area within the 3D scene, scaling along the **X**, **Y**, and **Z** axes. This setting depends on the **Transform Order** specified and is applied sequentially only when following other transformations (such as rotation or translation).
- **Rotation Order**: Indicates the sequence in which rotations are applied around the axes, for example, **Y** (Heading), **X** (Pitch), and **Z** (Bank).
- **Rotation**: Orients the camera within the 3D space by setting rotation angles around the **X**, **Y**, and **Z** axes.
- **Position**: Defines the camera's location in the 3D space along the X, Y, and Z axes.
- **Perspective Angle Mode**: Specifies the method used to define the camera's perspective.
  - **Throw Ratio**: Defines the relationship between the camera's distance from the screen and the width of the image.
  - **Horizontal FOV** (Field of View): Specifies the horizontal extent of the visible area in a 3D scene captured by a camera.
  - **Vertical FOV** (Field of View): Specifies the vertical extent of the visible area in a 3D scene captured by a camera.
- **Throw Ratio**: Adjusts the size of the visible image relative to the distance between the camera and the image plane.
- **Horizontal FOV**: Adjusts the horizontal field of view of the camera.
- **Vertical FOV**: Adjusts the vertical field of view of the camera.
- **Horizontal Shift**: Shifts the camera's view horizontally without changing the camera's position.
- **Vertical Shift**: Shifts the camera's view vertically without changing the camera's position.
- **Ortho Width**: Determines the width of the camera’s view when using orthographic cameras.
- **Render Behind Camera**: Enables the rendering of objects located behind the camera.
- **Fixed Lens Shifts for Pose Estimation**: Locks the lens shifts settings to predefined values when estimating the camera's position and orientation within a scene.
- **Fixed Throw Ratio for Pose Estimation**: Locks the throw ratio at a fixed value during pose estimation.
- **Fixed Position for Pose Estimation**: Locks the camera's position during pose estimation.
- **Depth Test**: Enables the camera to determine and render the visibility of objects by comparing their relative depth, ensuring that objects closer to the camera occlude those further away.
- **Back-face Culling**: When enabled, only the front faces of polygons are rendered, and the ones facing away from the camera are not, improving rendering performance.
- **Frustum Distance**: Defines the distance of the camera’s frustum planes from the camera's position.
- **Show Frustum Center**: Toggles the visibility of the camera's frustum center that is used for reference.
- **Near Distance**: Sets the near-clipping plane distance. Objects closer than this distance will not be rendered.
- **Antialiasing**: Enables the smoothing of jagged edges in the rendered image.
- **Preview Mode**: Includes scene preview aids, such as the grid and gizmos, in the camera’s rendered image, subject to the scene’s visibility settings. These guides can appear in the output image.
- **Camera Gizmo Size**: Adjusts the size of the camera object in the 3D scene viewport.

##### Simulation

- **Gamma**: Adjusts the gamma levels of the camera view image.

##### Navigation

- **Keyboard Fly Speed** and **Keyboard Orbit and Zoom Speed**: Set the camera's movement speed for keyboard navigation.
