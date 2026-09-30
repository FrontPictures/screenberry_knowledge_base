---
id: guide.3d-scene.3d-scene-view-navigation
variant_id: guide.3d-scene.3d-scene-view-navigation.imported-current-guide
title: Navigating and Viewing the Screenberry 3D Scene
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
    path: archive/site/content/en/3d-scene/3d-scene-view-navigation.mdx
    sha256: ce4e746f3a30fdead8233167bcc52d91ef5e7de15e559f2a55a0977df6449439
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/3d-scene/3d-scene-view-navigation.mdx
  canonical_url: https://help.screenberry.com/en/3d-scene/3d-scene-view-navigation
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: ce4e746f3a30fdead8233167bcc52d91ef5e7de15e559f2a55a0977df6449439
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Navigating and Viewing the Screenberry 3D Scene
    description: Explore the various tools and options available for navigating and viewing 3D scenes in Screenberry, including the 3D Viewport, UV Viewer, Camera View Selector, and navigation modes.
    openGraph:
      title: Navigating and Viewing the Screenberry 3D Scene
      description: Explore the various tools and options available for navigating and viewing 3D scenes in Screenberry, including the 3D Viewport, UV Viewer, Camera View Selector, and navigation modes.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/3d-scene/3d-scene-view-navigation.yaml
  visual_information_review: not-independently-verified
---

# 3D Scene View and Navigation

1. **View Selectors**: This toolbar includes the **3D Viewport** / **UV Viewer Selector** and **Camera View Selector**.

   ##### 3D Viewport / UV Viewer Selector

   (icon (description unverified))

   - The **3D Viewport** is the interactive workspace where the 3D environment is rendered. It is used to navigate, select, and modify objects within the 3D scene.
   - The **UV Viewer** is a specialized view mode for inspecting and editing the UV map of a selected 3D object (if it has a UV map).

   (icon (description unverified))

   ##### Camera View Selector

   (icon (description unverified))

   This dropdown menu allows you to select a view from among various predefined views or custom camera angles:

   - The **Free Camera** is a default navigational tool that enables users to freely move, rotate, and zoom the viewpoint, providing unrestricted exploration of the 3D environment.
   - The **3D** **Camera** serves to capture the perspective of the 3D scene from a user-customized viewpoint, distributing the rendered output of the camera view to subsequent nodes within the node graph.
   - The **Projection Mapper** view offers a visualization from the projector's standpoint, enabling users to see how projected images are applied and interact with the objects in the 3D scene.
   - Standard orthographic views (cameras) include **Top**, **Bottom**, **Left**, **Right**, **Front**, and **Back**.

2. **Navigation and View Options Toolbar:** This toolbar provides a set of tools that modify how you interact with the 3D scene and navigate within the viewport. The functions include:

   - (Fly Mode Icon) **Fly Mode**: Enables camera movement similar to a first-person perspective, allowing for free movement within the scene.
   - (Orbit Mode Icon) **Orbit Mode**: Facilitates rotation around a central point, providing a view from different angles.
   - (Pan Mode Icon) **Pan Mode**: Allows you to move the view parallel to the viewing plane.
   - (Zoom Mode Icon) **Zoom Mode**: Enables you to move closer to or further away from objects in the scene.

   Additionally, this toolbar contains **View Options**, which offers customization settings for the 3D viewport, such as the background color.

   For more information on using navigation options, refer to the [Navigating the Viewport](working-in-3d-scene.md#navigating-the-viewport) section.

3. **Toolbox** contains:

   - (Select Tool Icon) **Select Tool**: For selecting objects in the 3D scene. It is also used to switch back from the navigation modes described above.
   - (Move Tool Icon) **Move Tool**: For moving selected objects within the 3D scene.
   - (Rotate Tool Icon) **Rotate Tool**: For rotating selected objects around different axes.
   - (Scale Tool Icon) **Scale Tool**: For scaling selected objects along different axes.

   There are two modes available for interacting with a selected object:

   - (Object Mode Icon) **Object Mode**: Allows users to interact with an entire object.
   - (Mesh Mode Icon) **Mesh Mode**: Provides the capability to edit the individual vertices of an object's mesh.

4. **Viewport**: The area where the 3D scene is displayed and interaction with its contents occurs. It's where you select, position, and modify objects, adjust camera settings, and observe the results in real-time.

5. **Axis Indicator**: This gizmo provides a constant reference for spatial orientation within the 3D scene.

6. **Scene Inspector**: This pane lists all the elements present in your 3D scene, allowing you to select and manage them. When a particular object is selected, its parameters are displayed in the panel below.

7. **Settings Panel**: This section allows you to view the parameters for selected objects and edit their values.
