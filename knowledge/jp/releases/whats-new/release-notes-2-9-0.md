---
id: guide.whats-new.release-notes-2-9-0
variant_id: guide.whats-new.release-notes-2-9-0.imported-current-guide
title: Screenberry v2.9.0 Release Notes - New Features & Functionalities
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
    path: archive/site/content/jp/whats-new/release-notes-2-9-0.mdx
    sha256: b3dd991958c0b2b69c8faf03ef1de93939265af9e7d853e101e004bfda4c35c2
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: historical
source:
  path: content/jp/whats-new/release-notes-2-9-0.mdx
  canonical_url: https://help.screenberry.com/jp/whats-new/release-notes-2-9-0
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: b3dd991958c0b2b69c8faf03ef1de93939265af9e7d853e101e004bfda4c35c2
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry v2.9.0 Release Notes - New Features & Functionalities
    description: Explore the latest enhancements in Screenberry v2.9.0, including redesigned timeline controls, a new Home Screen, expanded Media Player capabilities, improved node graph functionalities, and support for camera tracking protocols.
    openGraph:
      title: Screenberry v2.9.0 Release Notes - Feature Enhancements
      description: Discover the new features in Screenberry v2.9.0, such as improved timeline controls, a new Home Screen, expanded Media Player features, and advanced node graph functions.
translation:
  source_language: en
  source_id: guide.whats-new.release-notes-2-9-0
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/releases/whats-new/release-notes-2-9-0.md
describes_release: 2.9.0
presentation:
  mode: text-only
  illustrations: illustrations/jp/releases/whats-new/release-notes-2-9-0.yaml
  visual_information_review: not-independently-verified
---

# Screenberry v2.9.0 Release Notes

## Features

- Timeline controls have been redesigned. Users can now add and modify keyframes to animate the position, scale, rotation, and opacity of media items.

* The new **Home Screen** has replaced the server connection pop-up dialog window.

- The **Media Player** widget is now capable of playing media files from any folder on the Screenberry server, as opposed to the previous limitation of playing media files from the **Media** folder of the current project.
- The new **Media Library** widget can access all folders on the Screenberry server.
- The consolidation function to gather all media resources related to the current project into a single folder has been added.
- Media item transformation functionality has been added in the **Media Player** widget. Now users can either set the media item to scale using either the frame size of the **Media Player** or its width or height, as well as apply custom transformations to the media item, controlling its position, scale, and rotation.

* A new display orientation option has been added to make manual calibration easier when projectors are placed in portrait mode or upside down.

- Nodes in the **Node Graph** can now be copied and pasted as text, which makes it easier to save and share node snippets.
- The Screenberry Panel now offers two new viewing options – **Full-screen Mode** (shortcut F11), which activates full-screen for the current workspace, and **Exclusive Widget Mode** (hover over the widget with the shortcut key **\`** (accent grave)), which maximizes the specified widget.
- The option to select frames or time as the time display format in the **Media Player** widget has been added.
- The Screenberry Server can be started without a project.
- Implementation of the **AudioIn** node for the Linux version of Screenberry has been rebuilt from scratch.
- The **FreeD Receiver** node has been added to support the _FreeD_ camera tracking protocol.
- The **ContentSync** node has been added, allowing users to automatically upload and convert media from a shared folder.
- The new specialized widget for the **Preset** node has been created, making it easier to monitor and manage preset variables. Previously it could only be done in the **Preset** node settings.
- A video preview option is now available for image node parameters and links in the **Node Graph** (hover over the node parameter name or link while pressing the Alt key).

* Users now have the option to hide the **Workspace Switcher** bar and/or **Status** bar to maximize the available workspace.
* The new **Spherical Projection** mode has been added to the **Projector** node, enabling the spherical texture mapping of the projection.
* Support for the DAT parameters has been added to the **TouchEngine** node, and it was updated to the latest TouchEngine SDK.
* Frame synchronization for multiple Datapath Vision capture inputs has been implemented in the **Vision** node.
* The despill function has been added to the **ChromaKey** node for removing the green color backdrop cast from the chroma key video.

## Improvements

**Media Player:**

- The new **Settings** panel has replaced the media item settings dialog box. Now, all changes in the parameter settings are instantly applied to the media items.
- The razor tool that allows users to split media items on the timeline with a single click has been implemented.

* The function to duplicate selected media items has been added (shortcut **Ctrl** + **D**).
* The ability to simultaneously change fade-in settings for multiple selected media items has been added.
* The total playback duration for the selected media items is now displayed.
* The new **Media Library** no longer offers configuration of the default media item settings. This feature has been removed.

**Node Graph**:

- Spaces and other special symbols are now allowed in node names.
- The function to duplicate selected nodes has been added (shortcut **Ctrl** + **D**).
- The function to unlink nodes using the **Ctrl** + **Alt** + **Click** shortcut is now available.

**Files widget**:

- New icon view has been implemented.
- Media items can now be dragged and dropped from the **Files** widget to the Media Player widget.
- A warning is now displayed when existing files may be overwritten by newly added files.

**Nodes**:

- The **Resources Path** parameter has been added to the **Calibrator**, **SoftEdgeBlender**, and other nodes.

**Scene**:

- Perspective frustums with adjustable lengths are now shown for the cameras and projectors.

* Specific projection gizmos are now used for different camera types (**Perspective**, **Orthogonal**, **Fisheye**, **Spherical**).

- Different visualization models for the camera and projector have been added.
- Scene preview stream stability and resizing have been improved.
- The **Fit to View** function using the ‘F’ key shortcut has been added.
- Settings for the adjustment of wireframe color, width, and point size have been implemented.

**Other**:

- The **Anchor Point** parameter has been added to the **Transform2D** node.
- The method for the naming of duplicate parameters in the **Notch Playback** node has been improved to be consistent for different blocks.
- Support for the Blackmagic capture cards has been updated to DeckLinkAPI 11.2 for both Windows and Linux. The full-duplex mode is not supported yet.
- The maximum allowed input value for the timecode has been changed from 23:59 to 39:59.
- The content encoding algorithm for the upload has been further optimized.
- A custom window title bar has been added for the Windows version of the Screenberry Panel.
- The **Video Preview** widget now allows smooth scaling for the video, and the size of the video preview can now be set as a percentage (%) in the settings.
- The **Comments Area** now allows the customization of the font size and background color.
- The **Reload** button has been added to the node settings for the nodes with file/folder selection parameters.
- A uniform scaling capability has been added to all the nodes that allow you to change the image size or apply scaling transformations.

* Support for _YUYV_ pixel format has been added to the **USB Camera** node (Linux only).
* The **DigitalCamera** node setting now has the capability to terminate gvfs processes, allowing access to the camera under Linux.
* The calibration time has been reduced by eliminating duplicate configuration requests sent to the camera.
* A preset for _Sigma 8mm Circular Fisheye Fixed Lens for Nikon D610 Camera_ has been added to the **FisheyeDistortion** node.
* The draw order of patches and displays in the **Canvas Editor** has been changed to bottom-to-top.
* Upon double-clicking a **Display** or **Patch** node in the Node Graph, the related **Display** or **Patch** will now open in the **Canvas Editor**.

## Changes

- The following nodes have been renamed:

  **OnItemStarted** to **On Item Started**,

  **MidiOut** to **Midi Out**,

  **DigitalCamera** to **Digital Camera**,

  **Shader** to **GLSL Shader**,

  **EffectChain** to **FX Stack**,

  **OnStartup** to **On Startup**,

  **TriggerFilter** to **Event Filter**,

  **TimeEvent** to **Event Scheduler**,

  **SpoutIn** to **Spout In**,

  **SpoutOut** to **Spout Out**,

  **WebServer** to **Web Server**,

  **WebView** to **Web View**,

  **ArtNetServer** to **Art-Net Receiver**,

  **ArtNetClient** to **Art-Net Sender**,

  **SysInfo** to **System Info**.

- Numerous changes have been made to the node parameters’ names to improve clarity and legibility.

## Fixes

**Media Player:**

- Fixed: the issue with possible playback of the next frame after the specified **Out Point**.
- Fixed: the issue with the missing “Waiting for timecode” indication.
- Fixed: the issue with the seek function for paused 25 fps movie on 60 fps system.
- Fixed: the issue with crashing when playing 12K media items on older GPUs.
- Fixed: the issue with the media item not being mapped to the mouse clicks events.
- Fixed: the issue with the rare server crash when stopping playback of the media item with subtitles.

**Node Graph**:

- Fixed: the issue with not showing the correct link count for the rerouted and forwarded parameter links.
- Fixed: the issue with the auto-layout not working correctly for the comment area items.
- Fixed: the issue with not updating the values of arrays or matrices with over 500 elements.

**Patch Editor**:

- Fixed: the issue with the rare panel crash when opening the **Patch Editor** after adding or renaming patches.
- Fixed: the issue with the indices rotation of the **Bezier Patch** and other grid-based patches not working when the grid height and width are not equal.

**Other**:

- Fixed: the issue with keyboard navigation not working in the **Scene Editor** under Linux.
- Fixed: the issue with an application not being executed in the **SystemExec** node from a subfolder of the current project.
- Fixed: the issue with the server freezing on exit when the restart command in the **SystemExec** node is initiated from a script.
- Fixed: the issue with the **Web Panel** not working when a new project is created.
- Fixed: the issue with the server crash that occurs during automatic calibration initiated from the **Web Panel**.
- Fixed: the issue with the TDR (_Timeout Detection and Recovery_) related server crash that occurs during the **Intensity** stage of automatic calibration.
