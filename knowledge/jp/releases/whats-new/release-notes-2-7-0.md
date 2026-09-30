---
id: guide.whats-new.release-notes-2-7-0
variant_id: guide.whats-new.release-notes-2-7-0.imported-current-guide
title: Screenberry v2.7.0 Panel Release Notes - Redesign and Enhanced Functionality
language: ja
kind: release-notes
status: in_review
owner: unassigned
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: existing-guide
    path: archive/site/content/jp/whats-new/release-notes-2-7-0.mdx
    sha256: b5bd771cbca879900b6db2325c67d0374639c99827078192474966c1ec093d3a
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: historical
source:
  path: content/jp/whats-new/release-notes-2-7-0.mdx
  canonical_url: https://help.screenberry.com/jp/whats-new/release-notes-2-7-0
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: b5bd771cbca879900b6db2325c67d0374639c99827078192474966c1ec093d3a
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry v2.7.0 Panel Release Notes - Redesign and Enhanced Functionality
    description: Explore the newly redesigned user interface and enhanced customization options for project workflows, plugin system support, Mapping Matter scene importing, and innovative web view functionality in Screenberry v2.7.0.
    openGraph:
      title: Screenberry v2.7.0 Panel Release Notes - UI Redesign and Enhanced Functionality
      description: Explore the newly redesigned UI, improved project workflow customization, plugin support, scene importing, and web view features.
translation:
  source_language: en
  source_id: guide.whats-new.release-notes-2-7-0
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/releases/whats-new/release-notes-2-7-0.md
describes_release: 2.7.0
presentation:
  mode: text-only
  illustrations: illustrations/jp/releases/whats-new/release-notes-2-7-0.yaml
  visual_information_review: not-independently-verified
---

# Screenberry v2.7.0 Panel Release Notes

## Major Features:

**New look and feel**

The look and feel of the Screenberry Panel graphical user interface has been redesigned and a new Dark Graphite theme has been implemented.

These design changes, combined with numerous UX improvements, have simplified the user interface and increased its contrast, clarity, and legibility, allowing users to focus more on their tasks.

**Project workflow and workspace organization reimagined**

Screenberry’s conceptual approach to workflow has been changed to provide a better user experience. Now, you can fully customize your workflow by arranging workspaces and widgets into a layout that best suits your current tasks and work style.

The improvements include:

- **Implementation of a new advanced docking system for the widgets**

Now, users have the flexibility of docking a widget almost anywhere on the user interface – on any border of the main window or into any dock area. Docking to floating windows is also supported.

Widgets can be organized into convenient tab groups allowing quick, one-click navigation between widgets. Entire groups of tabbed widgets can be moved into a floating widget or from one dock area to another one by dragging the title bar of a dock area.

Users can further customize the layout by changing the size of dock areas by moving the separators between them.

- **All workspaces have become fully customizable**

Now, any available widget can be added to any workspace. The same widget can be displayed in multiple workspaces.

- **The layout of workspaces is now stored on the server-side**

The current layout of workspaces is saved on the Screenberry server-side, allowing multiple users to access the same project layout from different (remote) computers.

## Features:

**The Display and Patch Editors have merged together**

The **Display Editor** and the **Patch Editor** have been merged into a single widget, allowing users the convenience of editing both displays and patches in one place.

Now, a dedicated (stand-alone) editor is available for any created instance of the **RenderTarget** in addition to the **Canvas**.

A list of displays and patches integrated into the editor provides a clearer view of their hierarchy and dependencies and allows easy selection and access to editing.

When a display or patch is selected in the editor, its settings become available in the integrated **Settings** panel.

**Editing displays has become easier**

Now, users can drag displays to change their position, duplicate displays by copy-pasting, and arrange their stack order directly in the visual part of the editor.

**3D nodes list and Settings have been integrated into the Scene Editor widget**

The list of 3D nodes and the **Settings** panel are now integrated into the **Scene Editor** widget allowing easy access and editing of all the elements comprising the 3D scene in one place.

**Channel/background selection for video output in the VideoPreview and SceneEditor widgets**

RGBA channels and background type (Checker, Gradient, Black) have been added to the **VideoPreview** and **SceneEditor** widgets.

**Displaying units in the input fields**

The units are now displayed directly in the input fields of the **Settings** panel to improve usability.

**Improved search in the Add Node dialog**

The search engine in the **Add Node** dialog has been improved. Now, when a user enters a string in the search box, a list of suggestions is generated based on the intelligent sorting algorithm that contains matches by the node name and/or node tag.

**Parameter types renamed**

The names of the parameter types have been changed for additional clarity:

- _ints_ to _IntArray_,
- _strings_ to _StringArray_,
- _ivec2_ to _IVec2_,
- _vec2_ to _DVec2_,
- etc.

**Added option to disable links animation**

Now, in **General Preferences**, the users can disable node links animation in the **Node Graph**.

**Improved algorithm of a triangular mesh generation**

A new and improved algorithm for triangular mesh generation from selected control points has been implemented for the **TriangleMesh** patch, which makes the mapping onto complex polygonal objects easier and more intuitive.

**Color indication of different log types**

To improve the legibility of the logs and to highlight more significant log messages, the text of warning and error messages is now colored (in yellow and red, respectively).

**Patch Editor interface controls**

Further control over the user interface in the **Patch Editor** has been provided. Now users can switch between horizontal and vertical layouts of the **Patch Editor**, show/hide _Geometry_ and _UV Layout Areas_.

**Zoom and pan navigation in the Node Graph using shortcuts**

The option of zoom and pan navigation using keyboard shortcuts has been added to the **Node Graph**. Now users can click and drag while holding **Alt** to pan or **Ctrl** + **Alt** to zoom.

**Waveforms generation for media items**

Now, waveforms are generated for the media items that have audio tracks when they are placed on the Timeline (works only for the items directly uploaded to Screenberry version 2.7.x).

**More reliable automatic linking of the nodes**

Now, the linking of the nodes using **Ctrl** + **click** in the **Node Graph** has become more responsive to user action.

## Fixes:

- Fixed: folder size not updating after uploading additional media items.

Numerous other minor fixes and improvements have been implemented.

# Screenberry v2.7.0 Server Release Notes

## Major Features:

**Implementation of the plugin system**

Support for the plugin system has been implemented, allowing the flexibility of adding additional features as plugins for Screenberry and enabling better customization of the program components.

**Import for Mapping Matter scenes**

The import of _Mapping Matter_ layouts into the **Scene** node has been implemented.

**Rendering of web pages**

The new **WebView** node has been added. It allows the integration of web pages into the Server output.

**Sony Alpha a6000 camera support**

The _Sony Alpha a6000_ camera has been added to the list of supported calibration cameras.

## Features:

- The **MediaPlayer**‘s texture transfer pipeline has been optimized to enable playback of media content at higher resolutions and frame rates.
- The new _Quaternion_ parameter type has been added.
- The **Label** parameter has been removed from the node **Settings**, as a node can now be renamed directly.
- Now, mouse and keyboard events in the **VideoPreview** widget can be streamed from the Panel to the Server.
- The number of image output links allowed from patch, display, and 3D nodes has been limited to a single one to simplify the processing logic on the Server side.
- The option to save and load intensity maps in color (as separate files) has been added to the **DomeSDK**. For third party applications that are supported by the **DomeSDK**, this allows to compensate for color shifts in blacks and/or whites caused by differences in the projectors’ colors.
- The import of _ISF_ (Interactive Shader Format) files has been implemented for the **Shader** node.
- A **Multiply** blending mode has been added to the Blending Mode options.
- Support for control of the line of _ViewSonic_ projectors has been added to the **SerialProjectorsControl** node.
- The option to automatically interpolate selected inner control points of the mesh has been added to the **BezierWarp** node (the **Ctrl** + **I** keyboard shortcut).
- An input transformation (**Transform Matrix In**) parameter has been added to the **Transform** node that allows users to create a transformation chain by connecting multiple Transform nodes.
- Support for the _POST_ request method has been implemented in the **WebRequest** node.
- A set of easing functions has been added to the **Preset** node to allow users better control over the preset behavior.
- The functionality for triggering events has been moved from the **LTCDecoder** node to the **TimecodeEvents** node.
- The number of packets received per second is now displayed in the **Settings** panel of the **ArtNetServer** node.
- The use of **Vec3** (color) and **Vec4** (color with alpha) parameter types has been implemented in the Shader and Script nodes.
- In the **DomeTransform** and **FisheyeToFisheye360** nodes, the mesh generation algorithm has been improved to provide correct distortion of the media content on extreme X, Y, and Z offsets.
- Multiple UV maps support for 3D objects has been implemented in the **ObjectFile** node.
- The option to disable Windows Explorer has been added to the **Canvas** node.
- An AUX input mechanism has been added to the **MediaPlayer** node. This feature has replaced the approach of inserting a node as a media item into the **MediaPlayer** playlist.
- Custom audio mixing functionality (a matrix mixer) for multiple input audio streams has been implemented in the **AudioIn** node.
- The option to use a custom user web page has been added to the **WebServer** node.
- The ability to backup and restore calibrations has been added in the **Calibrator** node.

## New Nodes:

- **QuaternionToEuler** and **EulerToQuaternion**: used for conversion between quaternions and Euler rotation angles.
- **EffectChain**: applies a sequence of effects to the input image. The effects used in the EffectChain are stored in the Resources/Shader folder in ISF format.
- **TimecodeEvents**: used to trigger events at predetermined time points.
- **Switch**: used to switch between different inputs to create one output.
- **Transform3D**: applies a transformation to 3D nodes.
- **FloatMatrix** and **FloatMatrixValues**: used for creating a matrix from the input values and extracting values from a matrix, respectably (in particular for the MixMatrix used in the AudioOut node).
- **IntArray**, **FloatArray**, **StringArray**, **Vec2Array**, **Vec3Array:** used for converting values into arrays, and **IntArrayValues**, **FloatArrayValues**, **StringArrayValues**, **Vec2ArrayValues**, **Vec3ArrayValues** for the reverse conversion.

## Improvements:

- In the node **Settings**, the parameters of a wide range of nodes have been organized into groups, and advanced parameters have been hidden by default.
- The option to switch the rendering model from _straight RGB_ to _pre-multiplied alpha_ has been added for the **ImageFile** node.
- Password support has been added for the **PJLink** node.

## Changes:

**Node and parameter name changes**

The following nodes have been renamed:

- “Context” to “Canvas”,
- “BezierPatch” to “BezierWarp”,
- “Blender” to “SoftEdgeBlender”,
- “LinesPatch” to “LedStripesMapper”,
- “PanoToDome” to “LatLongToDome”,
- “PatchesArray ” to “PatchReplicator”,
- “PerspQuad” to “QuadWarp”,
- “PerspQuadArray” to “QuadGrid”,
- “Rect” to “Rectangle”,
- “Transform” to “Transform2D”,
- “TriMesh ” to “TriangleMesh”.
- For connecting the **Display** nodes to the **DomeSDKSaver** node, the **DomeSDKDisplay**  parameter of the **Display** node should be used.
- Most of the parameters in the patch nodes have been renamed to improve clarity and legibility.
- The “blendMode” parameter has been replaced with two parameters: “Blending Mode” and “Multiply by Alpha”.
- The “Label” parameter has been removed. Nodes in projects saved with earlier versions of Screenberry which have assigned labels will be renamed during configuration conversion upon loading.
- The **NVidiaPerfKit** node has been removed as defunct.

## Fixes:

- Fixed: the canvas output resolution extended from 16K x 16K to 32K x 32K.
- Fixed: the multiple issues with incorrect behavior of group/ungroup functionality for nodes.
- Fixed: incorrect playback of stereoscopic content with alpha channel.
- Fixed: the issue with audio fade-in and fade-out not working on the timelines.
- Fixed: the issue with incorrect fade-in and fade-out of the image items on the timelines.
- Fixed: the issue with the rotation of indices for mesh grids with uneven topology not working in the **BezierWarp** node.
- Fixed: the issue with the loss of links when changing related node parameters (**Preset**, **PlayItem**, **Keyboard**, Listener nodes, etc.).
- Fixed: the issue with data not transferring in the **Route Pin**.
- Fixed: the issue with reverse mode not working in the **PanoToDome** node.
- Fixed: the issue with audio playing from the beginning instead of continuing playback from the current position after the **AudioOut** (**NDIOut**, **LTCDecoder**) node has been enabled.
- Fixed: the issue with the incorrect playback speed of the media items with a high frame rate at conventional frame rates.

Numerous other minor fixes and improvements have been implemented.
