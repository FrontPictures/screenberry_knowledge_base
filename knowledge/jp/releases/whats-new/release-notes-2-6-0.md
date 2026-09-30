---
id: guide.whats-new.release-notes-2-6-0
variant_id: guide.whats-new.release-notes-2-6-0.imported-current-guide
title: Screenberry v2.6.0 Server Release Notes - New Features & Tools
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
    path: archive/site/content/jp/whats-new/release-notes-2-6-0.mdx
    sha256: b538605b27d814bbf8eed1356c684d1e96a425d79f619e8b72393d8a584493e7
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: historical
source:
  path: content/jp/whats-new/release-notes-2-6-0.mdx
  canonical_url: https://help.screenberry.com/jp/whats-new/release-notes-2-6-0
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: b538605b27d814bbf8eed1356c684d1e96a425d79f619e8b72393d8a584493e7
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry v2.6.0 Server Release Notes - New Features & Tools
    description: Explore the latest enhancements in Screenberry v2.6.0, including timeline playback, pose estimation in 3D scenes, multi-camera automatic calibration, Spout and Notch support, multi-channel audio routing, and more.
    openGraph:
      title: Screenberry v2.6.0 Server Release Notes - Features & Tool Updates
      description: Discover new tools and features in Screenberry v2.6.0 like timeline playback, 3D pose estimation, multi-camera calibration, Spout and Notch support, and enhanced audio routing.
translation:
  source_language: en
  source_id: guide.whats-new.release-notes-2-6-0
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/releases/whats-new/release-notes-2-6-0.md
describes_release: 2.6.0
presentation:
  mode: text-only
  illustrations: null
  visual_information_review: not-applicable
---

# Screenberry v2.6.0 Server Release Notes

## Major New Features

- Projector pose estimation (position, rotation, zoom, and lens shift) in a 3D scene using reference points on a model.
- Multi-camera automatic calibration for fulldome projections (Experimental)
- Timeline playback
- Graphical user interface builder – GuiPanel
- Spout input/output support
- Notch support (see [Notch Playback](../../reference/node-reference/integration-nodes/notchplayback.md))
- Multi-channel audio routing control with audio mix matrix

## New Nodes

- **MultiCameraCalibratorV2:** the node automatically aligns images from two or more cameras with fisheye lenses for the dome screen calibration.
- **FisheyeDistortion**: the node is a patch for manual cropping and distortion compensation of images from a camera with a circular fisheye lens.
- **GuiPanel**: the node creates a custom graphical interface for user controls.
- **NotchPlayback**: the node provides support for Notch blocks playback.
- **SpoutIn**: the node receives frames from other Spout sender applications.
- **SpoutOut**: the node sends an image to any Spout receiver application.
- New type conversion nodes: **IVec2**, **Vec2**, **Vec3**, **Vec4**, **Mat4**; **FromIvec2**, **FromVec2**, **FromVec3**, **FromVec4**, **FromMat4**.
- **ObjectTransform**: the node combines source 3D objects into a single target 3D object and applies additional transformations.
- **ObjectFileSaver**: the node saves a 3D object to a file.
- **TriMesh**: the node is a patch that allows the user to manually define triangular mesh polygons and their vertices to facilitate projection mapping on objects that can be represented in mesh-type geometry.
- User control nodes: **ColorPicker**, **ComboBox**, **TextValue**.
- **InvertColor**: the node inverts the colors of a source image.

## Major fixes

Audio:

- Fixed: a 1-second captured audio delay.
- Fixed: audio glitches (short, continuous, repetitive) during playback when disk usage is high.
- Fixed: automatic node reinitialization when an audio device is removed/added.

Image blending:

- Fixed: an incorrect brightness level was calculated for projection overlap areas if patches had different aspect ratios of UV maps.
- Fixed: quadratic easing in the **Simple Distance Transform** blending mode has been enabled by default and resulted in the creation of incorrect blending maps for areas where three or more projections overlap. Now, the **Apply Quadratic Easing** parameter has been added and disabled by default.

Geometry calibration:

- Fixed: Incorrect blobs indexing during geometry calibration on extremely curved surfaces.

Camera:

- Fixed: a system crash on Linux caused by the **Camera** node (with the **Multi-camera** parameter enabled) when attempting to capture images from two or more cameras.

Nodes:

- **SolidColor**: the node **SolirColor3f** has been renamed to **SolidColor**. The color type parameter has been changed from **vec3** to **vec4 with Alpha** and the **Premultiply by Alpha** parameter has been added.

- **Gradient**: the color type parameter has been changed from **vec3** to **vec4 with Alpha**.

- The Experimental tag has been removed from the following nodes:

  **MidiIn, Script, TimeEvent, WebServer, DecklinkOutput, ImageBuffer, BlendImage, GetChannel, InvertColor, Maximal, Remap, Transform, NDIIn, NDIOut, StereoscopicMerge, LTCDecoder, LTCEncoder, MidiOut, MidiTimeCodeDecoder, TimeCode, TimeCodeDisplay, VideoPreview,  MagewellCapture, FisheyeToFisheye360, TriMesh, XGrid**.

- The deprecated **MaximalAction** node has been removed.

## New Features

Geometry Patches:

- A selection of the **Texture** (default), **Texture + Grid**, and **Texture + Subdivided Grid** modes have been added for the **ViewMode** option to display a patch grid when editing patches from the Panel.
- The patch name is now displayed when switching between patches during the manual calibration with the keyboard shortcuts directly on the server.
- The **Lock Geometry** parameter has been added. When it is enabled, the patch cannot be edited from the Panel and is excluded from the list of patches available for calibration with the keyboard shortcuts directly on the server.

Listener Nodes:

- The **Verbose Logging** parameter has been added for the **HttpListener**, **OscListener**, **TcpListener**, **UdpListener**, **SerialInput** nodes (set as true by default), which can be used to disable logging.

VideoPreview:

- Forwarding of mouse and keyboard events from the Panel’s **VideoPreview** widget to **VideoPreview** node has been added.

MediaPlayer:

- **Timelines**: Now, **Media Player** playback can be organized using timelines in addition to the playlists. For more information, see [Timelines](../../reference/media-playback/timelines/timeline-view.md).
- The **Volume Boost** option in media item settings has been added, which allows the user to increase the sound level up to 200%.

## Improvements

- The display input has been added to the **RenderTarget** node (for advanced use).
- A **Watchdog Timer** (WDT) has been added to restart the server when it is frozen. The default watchdog timeout is 10 seconds.
- The server now automatically saves the memory dump and restarts if a critical error occurs (a crash or freeze).
- The bitrate has been increased for the video items preview generated when content is uploaded.
- Automatically generated patch grids (for **PanoToDome**, **DomeTransform**, **FisheyeToFisheye360**, etc.) are not saved in the configuration file to reduce its size and improve saving/loading speed.
- All floating-point data types for node parameters are now stored in double-precision format.
- The action parameters **Load Image Filename** and **Load Image** (hidden by default) have been added to the **Camera** node for calibration debugging purposes.
- The **Capture** button has been added to the **Camera** node settings. It requires the **Camera** node to be connected to the **Calibrator** node to operate.
- Support for fisheye mapping types (**Equidistant**, **Equisolid angle**, **Stereographic**, **Orthographic**) has been added to the **FisheyeToFisheye360** node. It does not work well with commonly used circular fisheye lenses, for which the manual adjustment with the **FisheyeDistortion** node is preferable.
- The transformation mathematics in the **FisheyeToFisheye360** node has been fixed and the **Fisheye Wrap** parameter has been removed.
- A warning has been added to the **File Manager** for cases when a user attempts to download an opened file (e.g. logs.txt).
- The **Enable Full-Duplex Mode** parameter has been added to the **DeckLinkInput** node for enabling the use of either outputs or inputs on the same DeckLink device.
- The **Geometry Extrapolation: Linear Angle Mix** and **Linear Length Mix** parameters have been added to the **Calibrator** node for the geometry extrapolation fine adjustment. Previously, these parameters could only be accessed and edited directly in the **geometry.xml** file.
- The process of sending images to the Panel in the **Calibrator** node has been optimized to avoid frame drops.
- The **Mask stage** in the **Calibrator** node has been improved to allow the creation of masks that touch the edge of the camera image.
- Image file format selection has been added to the **ImageFileSaver** node.
- The audio matrix mixer in the **AudioOut** node can now be applied without reinitializing the audio device.
- The timecode parameters **Accept Timecode**, **Follow Timecode** and **Filter Timecode Frames** have been added to the **MediaPlayer** node.
- A black frame is now sent from the **NDIOut** node when the source is no longer connected.
- The **Keep Aspect Ratio** option has been added to the **VideoPreview** node.
- 3D Nodes workflow has been redesigned. Now **Object**, **Camera3D**, and **Projector** nodes are connected to the input (left) parameters of the **Scene** node. All images are rendered in the **Scene** node.
- Automatic blending for remapped cameras has been implemented when the **Blender** node is used in conjunction with the **Scene** node.
- A UV map projection on UV map for perspective and orthogonal projector types (in addition to the fisheye type that has been moved from the **Camera3D** node) has been implemented in the **Projector** node.
- A projection on UV map for **Perspective** and **Orthogonal** projector types has been implemented for the **Object**, **Projector**, **Scene** nodes.
- The **Fisheye** projector type has been moved from the **Camera3D** node to the **Object**, **Projector**, **Scene** nodes.
- The dimensions of a projected image are now configured with the **Size** parameter in the **Projector** node.
- The **UV-optimized rendering** parameter has been added to the **Scene** node to improve rendering speed for complex 3D models.
- The **SystemExec** node has been reimplemented from scratch. Some parameters (**Hidden**, **Crashed**, etc.) had been removed.
- The **Fullscreen** option for the **Context** node in the Linux version has been removed.
- The parsing of escape sequences in arguments of the **HttpListener** node has been improved.
- The highest supported OpenGL version is now initialized by the **Context** node by default. OpenGL version selection and information have been added.
- The **Additional Buffers for Upload** parameter (hidden by default) has been added to the **Context** node. This parameter sets the number of buffers used in the map➜write➜unmap➜upload➜render texture upload sequence. The values of 1 or 2 may be used to fix the issue with non-synchronized slices (texture tearing).
- The **29.97 fps drop frame timecode** option has been added to the **TimeCode** node. This option is only implemented for the **LTCEncoder** node – other nodes will behave as if a 30 fps timecode was selected.
- The “Server started without administrative privileges” message box has been removed.
- The **NDI library** has been updated to version 4.5.
- The **Assimp library** has been updated to version 5.0.0.rc2.

## Fixes

- Fixed: a memory leak in the **Script** node.
- Fixed: the issue with the X and Y coordinate swap in the **DomeTransform** node. Transformation mathematics has been improved for a field-of-view.
- Fixed: the issue causing rarely occurring crashes when adding/removing the audio track for the currently playing media item in the **MediaPlayer** node.
- Fixed: the issue with the **Transparent** option that did not work when playing video tracks with the alpha channel in the **MediaPlayer** node.
- Fixed: the issue with crashing (freeze) when playing 1-frame video in a loop in **AsyncShort** or **AsyncLong** texture transfer mode in the **MediaPlayer** node.
- Fixed: the issue with playback of a media item restoring on the previous frame when reinitialized after being paused in the **MediaPlayer** node.
- Fixed: the issue with non-synchronized slices when the **PBO texture transfer** mode is selected in the **MediaPlayer** node.
- Fixed: the appearance of a green line between texture slices when playing video encoded with the **Optimal Quality** preset in the **MediaPlayer** node.
- Fixed: The **TimeCodeDisplay** node has been showing incorrect values when performing **Step One Frame Back** for a media item in the **MediaPlayer** node.
- Fixed: crashing when the **NDIOut** node (or another node that has **NDI** output) was removed during content upload.
- Fixed: crashing on the **NDIIn** node reinitialization/removal.
- Fixed: the input **Transform** parameter was not executed for the **PatchesArray** node.
- Fixed: the transformation mathematics in the **FisheyeToFisheye360** node and the **Fisheye Wrap** parameter has been removed.
- Fixed: incorrect processing for sources with an alpha channel in the **Calibrator** node.
- Fixed: the **Colors** stage critical error when the projection area is small for one of the projectors during automatic calibration.
- Fixed: freeze when the camera battery level becomes low during automatic calibration.
- Changed: parameter names related to pre-iterations.
- Fixed: blobs geometry for the correct determination of the central L-shape marker in cases with a very extended projection area.
- Fixed: freezing during the **Geometry** calibration stage if the **CalibratorPatch** node was not connected to the **Display** or **RenderTarget** node.
- Fixed: an incorrect camera error message was displayed when the **Do Capture** option was disabled in the parameters of the **Calibrator** node.
- Fixed: the next calibration was scheduled if the **Start Calibration** button was pressed during the calibration.
- Fixed: the **Numbers** test pattern was not updated when the **CalibratorPatch** node was added/removed or the label changed.
- Fixed: the **Wireframe** and **PointCloud** view modes were not working in the **Camera3D** node.
- Fixed: The **Fisheye Type** parameter for a projector in the **Projector** node did not work.
- Fixed: a server crash when uploading media content during calibration.
- Fixed: a server crash when uploading files in **M2T** format.
- Fixed: the incorrect folder size displayed in the **Media Library** when uploading multiple images to different folders.
- Fixed: an incorrect “Input file does not exist” error message was displayed during the media files upload.
- Fixed: the automatic scan function in the **DeckLinkInput** node could not find the input signal.
- Fixed: continuous reinitialization in the event of invalid input in the **DeckLinkInput** node.
- Fixed: the **No Signal Color** parameter of the **DeckLinkInput** node was not updated when the node was linked to the **RenderTarget** node.
- Fixed: **DSP** addition and processing did not work in the **SoundEffect** node.
- Fixed: the copy-pasted **Blender** node with the connected patch nodes did not work until the application was restarted.
- Fixed: keyboard shortcut commands were not processed for a disabled patch node during calibration.
- Fixed: the cursor display position was not updated in the **BlobsPatch** node when the patch was edited with the keyboard shortcuts directly on the server.
- Fixed: empty string parsing when passed as two double quotes in sequence (“”) in the **Listener** nodes.
- Fixed: the triggered state of the **Group** input action parameters did not change when a value was set using the Screenberry protocol.
- Fixed: the loss of presets or change of preset names after copy/paste operations or server restart when the preset name began with digits in the **Preset** node.
- Fixed: loss of the first argument of the received message in the **OscListener** node (regression from 2.5.1 when the OSC channels mapping feature was added).
- Fixed: the **Shader** node caused a server crash when the **Context** node reinitialized.
- Changed: parameter names (typo fixed) for “exitScreenberry” and “restartScreenberry” in the **AppHostControls** node.
- Fixed: incorrect values in the days and months checkboxes in the **TimeEvent** node settings after restarting the server.

# Screenberry v2.6.0 Panel Release Notes

## New Features:

- **Scene Editor** for 3D nodes.
- **Timeline Editor** in **MediaPlayer** (experimental).
- **GuiPanel**: a new graphic user interface builder.
- **VideoPreview**: forwarding of mouse and keyboard events now to the **Server** from the **VideoPreview** node widget.
- **LinkPin**: a feature to assist with links routing in complex node graphs.
- **Group/Ungroup** nodes function.
- **New Project** creation (**Server ➜ New Project**)
- The patch is automatically selected in the **Patch Editor** when the patch node is selected in the **Node Graph**.
- The **Edit Patch** function has been added to the node context menu in the **Node Graph**.
- The selection of the patch type (including the **Calibrator**) has been added to the **Create Display Array** dialog box in the **Display Editor**.
- The **Set Picture from the Server** function has been added to the patch context menu in the **Node Graph,** which downloads the image from the **Server** and sets it as a background for the patch. It can also be done using shortcuts: **F5** to set, **Shift+F5** to unset.
- The search widget for items in playlists has been added to the **MediaPlayer**.
- The **Maximize** option for widgets in the custom user tabs.
- Background selection for **NDI streams** (**Solid Black**, **Gray Gradient** or **Checkerboard Pattern**).

## Improvements:

- Node parameters with names that start with ‘**$**‘ (previously hidden by default) are now shown in the node **Settings** in the **Node Graph**.
- The buttons have been removed from the nodes in the **Node Graph.**
- The functionality of input fields for editing the node parameters with integer values has been improved. These fields now have a fixed size and the edit arrows have been removed.
- Floating-point values for the node parameters can be entered using either ‘**.**‘ (a period) or ‘**,**‘ (a coma) as a delimiter. Entered numbers are always displayed with a period as a delimiter and at least one digit afterward (whereby trailing zeros are hidden and the scientific notation is applied if necessary).
- The step input control has been added in the node **Settings** for editing the node parameters with floating-point values. The step can be changed using the **Ctrl**+’**+**‘/ **Ctrl**+’**–**‘ hotkey combinations (or **Ctrl**+**Mouse Scroll Wheel**) and stored locally for each node parameter.
- If a node parameter has array values, they are hidden in the **Settings** panel by default. The **Edit Array** button has been added to display array values for editing.
- The last visited folder is remembered by the **Open/Save File** dialog.
- The **Open/Save File** dialog returns a relative path if the file is inside the Server work folder.
- The node settings for the **Context**, **Display** or **RenderTarget** nodes are displayed in the **Patch Editor** when they are selected.
- The **TriMesh** node supports the use of keyboard shortcuts: ‘**P**‘ to add control points, ‘**T**‘ to create triangular mesh polygons from selected points.
- **Displays**/**RenderTargets** sorting is fixed in the **Patch Editor**.
- The media item **Settings** in the **MediaPlayer** has been redesigned and the new **time input widget** in the media item settings has been implemented.
- The **timecode input widget** (in the upper right corner of the **MediaPlayer**) has been redesigned.
- A hint for the **In Point** field has been added in the media item settings, which shows the preferred **In Point** value, which enables a fast and smooth transition without frame drops.
- The **MXF** video file format has been added to the list of formats that are supported for media content upload.
- The message “Content upload finished” has been replaced by the green text color message “Uploading finished” in the **Media Library** status bar.
- The warning message “Existing displays will be removed”, which requires confirmation, has been added to the **Create Display Array** dialog in the **Display Editor**.
- The button for scrolling to the most recent logs with one click has been added in the **Logs** window of the **Node Graph**.
- The search widget has been added in the **Logs** window of the **Node Graph**.
- The last connected server is automatically selected in the **Choose Server** dialog box.
- The system remembers if the **Advanced Mode** option is selected.
- The system automatically reconnects to the server when resuming from sleep or hibernation (Windows only), or when the functions **New Project,** **Open Project**, or **Restart Screenberry Application on Server** are used.

## Fixes:

- Fixed: the selected control points were unselected when attempting to add to the selection by holding **Shift** and using the rectangular marquee selection in the **Patch Editor**.
- Fixed: the undo function did not work if floating-point values for the node parameters were changed with a logarithmic slider in the **Patch Editor**.
- Fixed: the **BezierPatch** control points were trembling when the **Auto Adjust Internals** option was turned on. The internal control points are now grayed out, and editing for them is disabled.
- Fixed: The code editor resizing in the node **Settings**.
- Fixed: The **File Manager** was freezing when the folder was switched.
-
- Fixed: The issue with loading color correction settings from a file in the **MediaPlayer**.
- Fixed: The **In Point** and **Out Point** set to the media item in the **Item Preview** window did not apply to the media item in the **MediaPlayer**.
