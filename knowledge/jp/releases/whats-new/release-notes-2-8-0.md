---
id: guide.whats-new.release-notes-2-8-0
variant_id: guide.whats-new.release-notes-2-8-0.imported-current-guide
title: Screenberry v2.8.0 Release Notes - Integrations and New Features
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
    path: archive/site/content/jp/whats-new/release-notes-2-8-0.mdx
    sha256: 558d1794e22c007bb2890131fbb01dc586eb4cb5dc7692576b01f66bf368f662
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: historical
source:
  path: content/jp/whats-new/release-notes-2-8-0.mdx
  canonical_url: https://help.screenberry.com/jp/whats-new/release-notes-2-8-0
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 558d1794e22c007bb2890131fbb01dc586eb4cb5dc7692576b01f66bf368f662
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry v2.8.0 Release Notes - Integrations and New Features
    description: Discover the latest updates in Screenberry v2.8.0, including TouchEngine integration, Mo-Sys F4 tracker support, a new project system, a web-based control panel, improved UI/UX, and enhanced Scene Editor functionalities.
    openGraph:
      title: Screenberry v2.8.0 Release Notes - Integrations and New Features
      description: Explore Screenberry v2.8.0's new integrations and features, like TouchEngine integration, Mo-Sys F4 tracker support, new project system, web control panel, and improved UI/UX.
translation:
  source_language: en
  source_id: guide.whats-new.release-notes-2-8-0
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/releases/whats-new/release-notes-2-8-0.md
describes_release: 2.8.0
presentation:
  mode: text-only
  illustrations: illustrations/jp/releases/whats-new/release-notes-2-8-0.yaml
  visual_information_review: not-independently-verified
---

# Screenberry v2.8.0 Release Notes

In this release, we continue to improve our existing tools, add new features, and change the look and feel of the Screenberry graphical user interface to be more user-friendly and convenient. For instance, the **Media Player** widget has been completely redesigned to provide users with better playback control through a more convenient interface, and allow the easier organization of workflow.

## Major Features:

### **TouchEngine integration**

We are thrilled to be the first in the industry to fully integrate TouchEngine from Derivative.

The integration of TouchEngine as an embeddable library enables users to easily augment Screenberry playback with all of the functionality of TouchDesigner by running TouchDesigner projects directly inside Screenberry. It provides maximum efficiency and minimal latency as compared to previous indirect methods of integrating TouchDesigner projects into the Screenberry playback pipeline.

This integration is accomplished with the **TouchEngine** node that can be added to the Screenberry node graph and provides easy and intuitive control over TouchEngine instance creation, TOX file loading, parameter value retrieval, etc.

The TouchEngine node can have TOPs and CHOPs inputs/outputs depending on the TouchDesigner project setup. Additionally, it contains a descriptive error logging system that makes troubleshooting easy and fast.

Video streams obtained from TouchEngine can be displayed as a texture, or as a composition layer. Incoming data streams can be used to provide Screenberry with information like tracking coordinates, object properties, DMX values, touch events, or any other real-time data. It is also easy to send a video stream or numeric values from Screenberry nodes to TouchEngine for processing and receive the resulting output back.

For more information read this [TouchDesigner article](https://derivative.ca/community-post/introducing-touchengine-and-front-pictures-screenberry-integration/64140).

### **Mo-Sys F4 tracker support**

Support has been added for the Mo-Sys (F4 protocol) precision camera tracking that has become an industry standard for use with XR stages, LED volumes, and green/blue screens in virtual production and content creation for live broadcasts, film, and game cinematics. The new **Mo-Sys F4** node, which allows you, for example, to synchronize camera movement in the Screenberry **3D Scene** using Mo-Sys camera tracking data.

### **New project system**

The Screenberry project system has been redesigned to provide more flexibility and security. Now, work folders and project folders are separated from the executables and can be located anywhere on the user’s hard drive. The project folder includes the main configuration file, media folder, node resources folder, assets folder for text, objects, CSV files, databases, and other non-media resources.

### **Web-based control panel for Screenberry playback and widgets**

The web-based control panel has been developed to control Screenberry playlist playback and work of user-defined widgets remotely, from any computer, tablet or smartphone. A custom platform-independent web interface with HTML 5 support makes it possible for multiple users to operate the server via the web browser.

## Features:

The new **Chroma Key** node has been added that enables the green screen removal and despill.

The new **MQTTClient** node has been added allowing Screenberry to connect to any MQTT broker over a network.

The mechanism for storing template projects has been implemented, and the option to upload template projects has been added to the **New Project** dialog box.

The new **Comment Area** element has been added to the node graph. It allows organizing a node graph more clearly and descriptively by arranging nodes into notated comment boxes, which is helpful for at-a-glance overviews of a complex node graph’s functionality.

The **TimecodeDisplay** node now has its own widget.

The **Timecode** input parameter and the option to **Follow Timecode** have been added to the **NotchPlayback** node.

The _Notch SDK_ used by Screenberry (the **NotchPlayback** node) has been updated to support the 0.9.23 version.

The **Disable Alpha Channel** option has been added to the media item settings in the **Media Player** widget.

The capability of triggering media items playback in the **Media Player** with a button press event in the **GUI Panel** has been added.

The capability of triggering media items playback in the **Media Player** on the preset value change event in the **Preset** node has been added.

The capability of mapping media items in the playlists and timelines to the events sent from the **Button** node has been added.

A server-side **Undo**/**Redo** stack has been implemented for operations in the **Scene Editor**.

The **Scene Editor** has been enhanced with 3D gizmos and a grid in the **Free Camera** view.

## UI/UX Improvements:

- The **Media Player** widget has been completely redesigned to provide users with better playback control through a more convenient interface, and allow the easier organization of workflow.

* The option to lock transport controls has been added to the **Media Player** widget to prevent users from performing accidental actions.

- Waveforms have been added to the seek bar of the **Media Player** widget to display the audio peaks of the media item’s audio track.

* The behavior of the logarithmic slider in the node **Settings** has been changed to improve usability and simplify precise value selection.

- The behavior of the spinbox in the node **Settings** has been improved. Now users can change values by dragging the mouse over the spinbox while holding the left mouse button or by clicking on the spinbox and entering a value.

* In the **GUI Panel**, a new grid layout system has been implemented and the UI design of the user control elements has been improved. A function of snapping elements to the grid layout has been added, simplifying the creation of custom interfaces.
* If a node has an associated widget, it can be opened by double-clicking on a node in the node graph, or pressing the **O** key when a node is selected.

- In the **Node Graph**, the automatic selection of the added node has been implemented.
- The **]** shortcut has been added to select linked nodes in the **Node Graph**.
- The **F2** shortcut has been added to rename nodes in the **Node Graph**.
- The **N** shortcut has been added to create a new node in the **Node Graph**.
- Panning and zooming in the **Node Graph** are now possible by dragging the mouse while pressing the right mouse button to pan or pressing the right mouse button and holding the **Alt** key to zoom.

## Improvements:

- The algorithm for soft-edge blending (when combining two or more overlapping projected images into a single seamless image) has been improved. The separate options for horizontal and vertical soft-edge blending in the **SoftEdgeBlender** node have been removed as deprecated.
- A perspective transformation option for image geometry modification has been added to the **BezierWarp** (patch) node.
- New widget tabs can now be added with the help of the **+** button.
- The node names can now contain spaces.
- You can now display the trimmed part or the full duration of a media item in the **Media Player** seek bar.
- The filename is now displayed in the media item **Settings**.
- A zoom factor selection has been added to the **VideoPreview** widget.
- Now, the objects selected in the **3D Scene** tree are highlighted in the view window.
- The **Color** parameter for text has been added to the **TestPattern** node.
- Expressions entered in the **Expression** node are now parsed automatically. The **Parse** button had been removed as deprecated.
- New **Int** and **Double** nodes have been added, which can be used to create integer and double-precision floating-point number input fields for user controls.
- The **Minimized** parameter has been added to the **Canvas** node settings, which allows server output in a minimized window.
- The option to receive a trigger event from a defined timeline **Control Point** has been added to the **OnItemStarted** node.
- Black and white intensity parameters have been added to the **Calibrator** node settings.
- The option to enable a hot reload of a Notch block has been added to the **NotchPlayback** node.
- The preset for the _Nikon 8-15mm_ fisheye lens (for 8mm focal length) has been added to the **FisheyeDistortion** node.
- The **VideoPreview** has become a standalone widget. Previously, it was a part of the user controls group.

## Localization:

The localization options for Ukrainian and Chinese languages have been added to the Screenberry Panel. The language can be changed in the **Preferences** > **Choose Language** dialog box.

## Changes:

- The following nodes have been renamed:
- **AppHostControls** to **ServerControl**,
- **GridImage** to **TestPattern**,
- **MidiTimeCodeDecoder** to **MTCDecoder**,
- **Camera** to **DigitalCamera**,
- **CommercialsRandomizer** to **PlaylistRandomizer**.
- Numerous changes had been made to the node parameters’ names to improve clarity and legibility.
- Nodes have been substantially reorganized by categories and tags for the related **Add Node** drop-down lists to make finding a specific node easier.

## Fixes:

**Node Graph**

- Fixed: the issue with the **Undo** command not working when the **Displays Editor** is visible in the workspace.
- Fixed: the Screenberry Panel crashing when the **Group** node is renamed.
- Fixed: incorrect visual link orientation when three **Reroute Pins** are connected from right to left.

**MediaPlayer**

- Fixed: duplication of the **Discard Mapping** command in the context menu.
- Fixed: incorrect seek positioning using a mouse when playing an image media item.
- Fixed: not automatically changing the number of audio outputs in timeline **Settings** when the number of audio outputs has been changed in the **Media Player**.
- Fixed: not reacting to a trigger event mapped to a timeline media item.
- Fixed: fade-in not working for AUX media items.
- Fixed: incorrect fade-in duration of media items after framerate change.
- Fixed: the server crashing when playing a media item with a number of loops set to zero.
- Fixed: the issue with the paused timeline starting playback after the **Canvas** node is disabled and then enabled again.
- Fixed: changing audio tracks in a timeline not taking effect until playback is restarted.

**Media Library**

- Fixed: the Screenberry Panel crashing when two instances of the Screenberry Panel are open at the same time and a media item is deleted in one while that media item’s settings are open in the other.
- Fixed: the issue with the media file conversion progress bar disappearing.

**Patch Editor**

- Fixed: the issue with the patches not appearing in the **Canvas** editor when they are in a sub-sub node group.
- Fixed: the UV background loaded for a patch not being visible when editing other patches sharing the same UV source.
- Fixed: the **Disable Snapping** option not working.
- Fixed: the Screenberry Panel crashing when renaming **Canvas** in the displays and patches list.

**Display Editor**

- Fixed: not being able to copy-paste a display.

**Scene Editor**

- Fixed: the issue with the **SoftEdgeBlender** not being added to the **Objects** list.

**Workspaces**

- Fixed: the issue with not all other widget tabs closing when selecting the **Close Other Widgets** command from the context menu.
- Fixed: the issue with not all other widget groups closing when selecting the **Close Other Groups** command from the context menu.
- Fixed: the Screenberry Panel crashing when docking a detached widget window.

**RenderTarget**

- Fixed: an _OpenGL_ error when the **RenderTarget** node inputs the **Image Format** parameter from the output **depthImage** parameter of another **RenderTarget** node.

Numerous other minor fixes and improvements have been implemented.
