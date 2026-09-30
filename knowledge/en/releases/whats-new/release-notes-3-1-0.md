---
id: guide.whats-new.release-notes-3-1-0
variant_id: guide.whats-new.release-notes-3-1-0.imported-current-guide
title: Screenberry v3.1.0 Release Notes - New Nodes and Enhancements
language: en
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
    path: archive/site/content/en/whats-new/release-notes-3-1-0.mdx
    sha256: 0a5790377ac40da9ad61ab15b3eeaf18feb7b47493ff758dcadf44647ca75ab4
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: historical
source:
  path: content/en/whats-new/release-notes-3-1-0.mdx
  canonical_url: https://help.screenberry.com/en/whats-new/release-notes-3-1-0
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 0a5790377ac40da9ad61ab15b3eeaf18feb7b47493ff758dcadf44647ca75ab4
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry v3.1.0 Release Notes - New Nodes and Enhancements
    description: Discover new improvements and features in Screenberry v3.1.0, including RTMP Server, RTSP Player, Blend Calibrator for multi-camera calibration, GPU-accelerated codecs, SB Plugins SDK, and benchmarking tools.
    openGraph:
      title: Screenberry v3.1.0 Release Notes - Nodes & Enhancements Highlight
      description: Explore the latest in Screenberry v3.1.0 with RTMP Server, RTSP Player, multi-camera calibration, accelerated codecs, plugins SDK, and more.
describes_release: 3.1.0
presentation:
  mode: text-only
  illustrations: null
  visual_information_review: not-applicable
---

# Screenberry v3.1.0 Release Notes

## What’s new

### New nodes:

- **RTMP Server**: receives RTMP video and audio streams.
- **RTSP Player**: plays back an RTSP video and audio stream from a remote source.
- **Gate**: is used for the conditional breaking and connecting of the node links.
- **Image Split**: slices an image into smaller sections according to a specified grid.
- **Float Compare**, **Float In Range**, **Float Mix**: for basic comparison and compounding operations with floating-point numbers.
- **Matrix Decompose**: decomposes a transformation matrix.
- **Blend Calibrator**: for use with the **Calibrator** for semi-automatic multi-camera calibration. (The experimental nodes previously used for multi-camera calibration have been removed as obsolete).
- **Shared Group**: a group of nodes can be saved for sharing between projects.
- A variety of utility nodes for conversion between parameter types: **Combo** and **Int**, **Bool** and **Float**, **Bool** and **Int**, **Float** and **Action**, **Timecode** and **Float**, **Int** and **Float**.

### GPU-accelerated codecs support:

- **HAP** and **NotchLC** codecs (for media items uploaded using the **Original** preset).

### Other new features:

- **SB Plugins SDK** allows the creation of custom nodes and node widgets.
- **Benchmark application** (experimental), designed to measure and compare Screenberry’s performance on different systems.
- **Project collection** for consolidating and downloading all resources and media associated with a project.
- **UV map viewer** in the **3D Scene** widget.
- **Data Item** can now record value changes by automatically creating corresponding keyframes.
- The option to open a project by passing its path as an argument from the command line.
- The functionality to rename, reorder and delete parameters forwarded by the **Group** node.
- Timeline markers to play a timeline from a specified position using a timecode.
- In addition to other parameters, the volume of media items on the timeline can also be animated with keyframes.
- Support for a spherical (equirectangular) camera in the **3D Scene**.
- The Screenberry **Configurator** now displays information regarding connected HASP keys and software licenses. Additionally, it features a widget that allows users to check their personal accounts for available license updates and flash them to HASP keys or use them to install software keys.
- New licensing options have been added that include _Screenberry Lite_, _Screenberry Pro_, _Calibrator_, and _Calibrator Plus_. Existing HASP keys for versions 3.0 and older need to be updated (reflashed).

## Improvements:

**Node Graph**

- The drawing of nodes has been optimized to speed up the response time of complex node graphs.
- Each node category has been assigned a unique color. In addition, these colors are now displayed in the category section of the **Add Node** menu.
- The visual appearance of node names and parameter names has been improved by disabling font hinting.
- Only existing parameters are now shown in the **Paste Properties** dialog for nodes.

**Media Player**

- Playback start for sequences in RVA has been optimized. There had been a slight delay at the beginning of the playback.
- The asynchronous reading logic has been improved to require less data to be read before playing back, resulting in a more rapid playback start.
- Direct frame upload mode has been deemed unnecessary and removed.
- The logic of starting playback by timecode has been modified:
  - Playback of the playlist media items can be started by timecode without activation.
  - The **Accept Timecode** option for the playlists (shown in the list of playlists) is enabled by default. It is no longer exclusive.
  - Playlists no longer follow the timecode, only timelines.
  - Playback of the timeline is triggered by timecode control points.
  - Media players accept and follow the timecode by default.
- The **Mute** icon is now displayed on a media item thumbnail only if the **Mute** option is set in the media item settings. Previously, it had also been displayed when the media item volume level was set to 0%.
- The shortcut for starting the playback of a selected media item has been changed to **Ctrl**+**Space**.
- Only relevant settings are now shown for **AUX** and **Data** items.
- The **Reveal Active** Item button has been added to the playback controls panel.
- The **Volume Boost** checkbox in the media item settings has been replaced with the **Auto Boost** slider.
- In the media item information window, the last modification time is now indicated.
- The **Select Al**l button has been added in the **Paste Properties** dialog window for media item properties in **Media Player** and node parameter properties in the node graph.
- The timecode indication has been improved to show the filtering state.

**Timeline**

- The playback of timeline media items with a large number of keyframes has been optimized.
- Timeline track options have been moved to a specialized context menu.
- Timeline track renaming is now done using a specialized dialog window.
- The fade-in and fade-out duration periods set for a timeline media item are now restricted from being overlapped.
- Alt-clicking on a timeline’s time point now allows starting playback from the time point’s position.
- Snapping to the fade-in and fade-out points of timeline media items has been implemented.
- There is now an indication that a timeline media item includes keyframes outside of its visible time range.
- A timeline media item’s keyframe positions are now preserved when its length is expanded.
- Now, when the timeline is inactive, its playhead position is shown in gray.
- A top toolbar has been added to the timeline panel.
- When working with a timeline, the **`\`** and **`Shift`**+**`\`** shortcuts can now be used to toggle between zoom-in and zoom-out states.
- There is now a separate toggle that controls snapping to the timeline’s playhead.
- Switching to the **Razor** tool when working with a timeline can now be done using the **C** key shortcut.
- Pasting media items to a timeline now replaces overlapping sections of existing media items. Items are inserted into the selected timeline track at the current playhead position.
- New buttons are available on the top toolbar to insert timeline tracks above or below the selected track.
- Holding shift now enables snapping to the playhead while moving the mouse cursor.
- The **Data** Item now has a new status parameter that indicates if a related node or parameter is invalid (for example, in cases where the referenced node was deleted after the data item was created.)

**Displays**

- The list of test patterns in the **Display** node has been expanded to include **Black**, **White**, **Color**, and **Comment Color** options.
- The **Left Only** and **Right Only** options have been added to the **Stereoscopic Mode** parameter for projectors with a dual channel stereoscopic mode.

**Patches**

- An option has been added to display the control points of the patch currently being edited on the server output.
- The **Subdivisions** parameter has been added to the **Mask** patch settings.
- Patch icons in the **Patch Editor** list are now colored according to the colors of the comment area that contains related patch nodes.

**Media Library**

- The icon has been added to a media item’s thumbnail to indicate whether a media item contains encrypted or licensed content. A tooltip with the list of active licenses appears when the mouse hovers over the icon.
- When a video file with multiple audio tracks is being uploaded, all audio tracks are uploaded to a media item (instead of just the first track, as was done previously.)

**Project**

- While a project is being consolidated, the progress is now shown in the status bar.

**Content uploading and files**

- The file system module has been redesigned to support network paths, long paths, and localized paths on windows. The validation of filenames has been improved.
- Support has been added for the following formats:
  - Audio formats: _ai&#x66;_&#x66;, _caf_, _m4r_, _mmf_, _opus_.
  - Video formats: _WebM_ and _AV1_ codec.
- Uploading to the **Media Player** or **Media Library** can now be aborted from the context menu of a media item.
- The **Files** widget now displays the media item’s size and duration.
- User interaction with the **Files** widget is now disabled while file operations are in progress.
- The context menu and related shortcuts have been added to the folders tree panel in the **Files** widget.
- The **Abort Upload** and **Abort Conversion** actions have been added to the **Upload Manager**.
- The drag-and-drop functionality that initiates the uploading of media content has been added to the **Upload Manager**.

**Licenses**

- A single application is now used as both the demo and paid license versions of Screenberry (based on which license is available to the user).
- The list of licenses now displays all expired licenses.
- The popup window now alerts the user when the content license has expired.
- In the demo version of Screenberry, the watermark is now displayed on the server output instead of the demo message.
- The **Server Control** node now includes an option to temporarily switch between the Screenberry active and demo licenses.
- In the demo version of Screenberry, the server output of screen resolutions less than or equal to 1280x800 pixels is now permitted for non-commercial use.

**Calibrator**

- The **Black** and **Limited Black** test patterns have been added to the **Calibrator** node.
- The **Group Capture** parameter has been added to the **Calibrator** node to allow the disabling of capturing geometry patterns for multiple projectors simultaneously.
- The **Bounding Box Off** checkbox has been replaced with the **Crop Shape** combo box parameter in the **Calibrator** wizard.
- The **Calibrator** settings now include a perspective compensation option (enabled by default) that improves the precision of full geometric calibration.
- Advanced parameters for pattern calibration have been added to the **Calibrator**.
- Circle mask processing has been optimized in the **Calibrator** for fulldome playback.

**3D Scene**

- The **Remap-optimized Rendering** parameter has been moved from the **3D Scene** node to the **Camera 3D** and **Projection Mapper** nodes.
- The **Render Baked Texture** parameter has been moved from the **3D Scene** node to nodes representing 3D objects including **3D Combine**, **3D Model File**, and **3D Primitive**.
- The **Output UV Maps** option has been added to the **3D Scene** node. It can be used for multi-camera calibration.
- The rendering of UV maps in the **3D Scene** has been improved by implementing smart interpolation along the edges of spherical and cylindrical projections.
- Custom UV maps for every primitive type are now used in the **3D Primitive** node. The generation of spherical and cylindrical UV maps has been redesigned.
- Options to enable fixed lens shift and throw ratio for pose estimation have been added to the **Camera 3D** node.
- The default field of view for the free camera in the **3D Scene** has been changed from 60° to 90°.

**Logs**

- The **Clear Logs** button has been added to the **Logs** widget.
- When the **Show Logs for Node** option is selected from the context menu in the node graph, the logs for the node are shown in the raised window.

**NDI**

- The **Enable Audio** and **Volume** parameters have been added to the **NDI In** node.
- The information parameter to show the incoming stream framerate has been added to the **NDI In** node.
- The information parameter to show the output stream framerate has been added to the **NDI Out** node.

**Others**

- The **Joystick** node has been fully redeveloped to support most joystick models. Now, it can process all of a joystick’s axes, balls, heads, and button states as well as its power level information, and output this data as JSON messages.
- Escape sequences are now processed automatically for the **Message** string parameter in the **Serial Output** node.
- The **Manual Aperture** parameter has been added to the **Digital Camera** node settings to support cameras with manual lenses.
- The **Delay before Capture** option has been added to the **Digital Camera** and **Virtual Camera** nodes.
- Exposure simulation is now disabled by default in the **Virtual Camera** node.
- The **Number of Audio Streams** information parameter has been added to the **Audio Out** node.
- The **System Info** node now displays the system **Read/Write Speed** instead of the **Decoders Disk Read Speed**.
- A new option has been added to the **Spout In** node for enabling additional delay before acquiring a frame.
- The output parameter with the inverted slider value has been added to the **Slider** node.
- The **No Project** widget has been added, which contains the **New Project**, **Open Project** buttons, and recent projects list.
- The **Frame Drops Logging** option in the **Canvas** node settings is now disabled by default.
- Changing a project name by editing the **Project Name** parameter in the **Server Control** node settings is now forbidden.
- It is now possible to use the **System Info**, **GUI Panel**, **Switch**, and **Gate** nodes when the **Canvas** node has not been added to the node graph or disabled.
- The **Slider** node has two new options for changing the orientation (**Vertical** or **Horizontal**) and size of the slider in the **User Controls** widget.
- The inverted value output parameter has been added to the **Slider** node.
- Video mode is now auto-detected in the **DeckLink Capture** node (for devices that support this function).
- The **Multiply by Alpha** option has been added to the **Alpha Mask** node (enabled by default).
- The trigger outputs have been added for subscribed topics in the **MQTT Client** node.
- Trigger output parameters for subscribed topics have been added to the **MQTT Client** node.
- The **Character Spacing** parameter has been added to the **Text Image** node.
- The tabbed widgets are now open automatically when media items are dragged over them.
- Name validation has been improved in the renaming dialogs for nodes, playlists, files, etc.

## Third-party Library Updates:

_NDI SDK_ has been updated to version 5.5.2

_TouchEngine SDK_ has been updated to version 2021.16860.

## Changes:

Multiple nodes and node parameters have been renamed to improve clarity and legibility.

## Fixes:

**Node Graph**

- Fixed: an issue with the **Fit to View** and **Auto-Layout Nodes** options in the context menu not being disabled when the node graph is empty.
- Fixed: an issue with the smart links having duplicate routes when one of the routes goes through a reroute pin or a group node.
- Fixed: an issue with the minimap (**Navigator**) still displaying nodes after all the nodes in the node graph have been deleted.
- Fixed: an issue with the **Canvas** node changing its position in the node graph after the display array has been added in the **Display Editor**.
- Fixed: an issue with the preview image not being displayed on the output link of the reroute pin after it was relinked.
- Fixed: an issue with the **Reset to Default** icon in the node settings occasionally having the wrong color.
- Fixed: an issue with the loaded file not automatically being updated when the name of a new file selected using the browse dialog window matched the previously loaded one.
- Fixed: an issue with the search in the **Add Node** dialog box being case-insensitive when a node couldn’t be found by its old name (before it was renamed).
- Fixed: an issue where changes in mix matrix cell values in the **Audio Out** node caused by double-clicking were not reflected on the server.
- Fixed: an issue with the panel crashing when the matrix size was changed in the node settings.
- Fixed: an issue with the system crashing when the **LED Stripes Mapper** node was added to the node graph.
- Fixed: an issue with the server crashing after deleting display and patch nodes that were part of the display array when these nodes and the **Canvas** node were in a subgroup.
- Fixed: an issue with the display and patch nodes not being removed when creating a new display array if these nodes were part of the previously created display array and grouped.
- Fixed: an issue caused by renaming the _SmartLink_ parameters forwarded from a subgroup.
- Fixed: renaming the **Inputs** and **Outputs** nodes in subgroups is now forbidden.
- Fixed: an issue with the incorrect positioning of a node being pasted if the **Paste** option was selected in the context menu.
- Fixed: an issue with the incorrect positioning of a comment area when it was added using the context menu.
- Fixed: an issue with not being able to move nodes when the node graph was extremely zoomed out, due to the node’s resizing being employed instead. The resizing of nodes was disabled in such zoom-out states.
- Fixed: an issue with **Undo** not working after deleting a **Reroute Pin**.
- Fixed: an issue with the panel crashing after changing the matrix size in the **Float Matrix** node settings.
- Fixed: an issue with a cursor position offset occurring when dragging nodes over the _TeamViewer_ connection.

**Media Player**

- Fixed: an issue with the alpha channel enabling/disabling and the **Multiply by Alpha** option not working with non-MPEG2 media items and with AUX items in the **Media Player**.
- Fixed: an issue with disabling video and applying color correction not working with AUX items in the **Media Player**.
- Fixed: an issue with the **Play Selected** button not being automatically disabled when there are no media items in the playlist.
- Fixed: the playback issues of RVA media items with odd pixel number heights.
- Fixed: an issue of not being able to add a second audio track to the media item while the first audio track was still being converted.
- Fixed: an issue with the system crashing when too many AUX inputs were specified in the **Media Player**. Their number is now limited to 100.
- Fixed: an issue with the cursor jumping to the end of the line when trying to edit existing text in the **Comments** field of the media item settings.
- Fixed: an issue with the incorrect playback of a timeline in **Async Long** mode.
- Fixed: an issue with the incorrect seeking of media items uploaded using the **Original** preset.
- Fixed: an issue with an incorrect volume value being set for one of two media items created by dividing the original media item using the **Split by Frame** option.
- Fixed: an issue with the **Media Player** widget focus state not being correctly updated on Linux.
- Fixed: an issue with the **Show Next** and **Show Previous** buttons not working in the playlist search widget.
- Fixed: an issue with being able to add a data item to a locked playlist.
- Fixed: an issue with the keyframe values not being updated correctly in the settings during timeline playback.
- Fixed: an issue with the **Reveal Current Item** option not working for timelines.
- Fixed: an issue with the **Fade In** and **Fade Out** triangular handles and selection areas not being displayed on the media item at extreme zoom-in states.
- Fixed: an issue with the media item not appearing over other media items on the timeline if it overlaps them when resized.
- Fixed: an issue with the system crashing when playing an invalid RVA media item on the timeline.
- Fixed: an issue with not being able to change the timeline media item’s offset and duration in the **Video Preview** window.
- Fixed: an issue with randomly selecting media items on the timeline after deleting media items.
- Fixed: an issue with the system crashing when playing uncompressed sequences with a number of slices exceeding the number of available CPU threads.
- Fixed: an issue with the missing **Show Item Info** option in the context menu for audio-only and invalid items.
- Fixed: an issue with the settings of media items not being correctly converted to the playlist format when the items were dragged and dropped from a timeline onto the playlist name in the **Navigation Pane**.
- Fixed: an issue with the shortcuts not working for renaming (**F2**) or deleting (**Del**) a playlist or timeline in the **Navigation Pane**.
- Fixed: an issue with not updating the **Media Player** status bar with the current timeline name when switching from a playlist to a timeline.
- Fixed: an issue with the navigation using arrow keys in the **Navigation Pane** ceasing to work once a timeline name was selected.
- Fixed: an issue with the **Comments** icon being incorrectly positioned on the thumbnail of the media item in the playlist after the thumbnail was resized.

**Timeline**

- Fixed: an issue with not being able to paste media items to a timeline after selecting a timeline name in the **Navigation Pane**.
- Fixed: an issue with some timeline editing actions (for example, changing the length of a media item) still being allowed after the timeline was locked to prevent editing. Additionally, the locked timeline is now indicated by a diagonal line pattern background.
- Fixed: an issue with the **Follow Timecode** feature not working for timelines.

**Displays**

- Fixed: an issue with the display labels previously set as hidden becoming visible when new displays were added.

**Patches**

- Fixed: an issue with the **Multiply by Alpha** arithmetic affecting non-RGB channels.
- Fixed: an issue with the diagonal guideline not representing the correct aspect ratio after the **Rectangle** patch was rotated.
- Fixed: an issue with patch names missing from the list after the patches had been relinked.
- Fixed: an issue with the live preview image not being updated after switching between patches.
- Fixed: an issue with the deleted patches not being restored after the **Undo** command was used.
- Fixed: an issue with updating a live preview image after a display orientation was changed.

**Media Library**

- Fixed: an issue of not uploading the rest of the valid media files after the uploading of invalid files had been interrupted.
- Fixed: an issue of misinterpreting the orientation information of uploaded JPG files.
- Fixed: an issue with the server crashes caused by uploading some types of high-resolution video files using the **CineForm** preset.
- Fixed: an issue with the **Ctrl**+**A** shortcut not working for selecting all items.
- Fixed: an issue with incorrect conversion of Targa Type 10 images.

**Files Widget**

- Fixed: an issue of not asking for confirmation before deleting files or folders.

**Content Upload**

- Fixed: an issue with uploading JPG images with odd sizes (for example 959x499) while using the **Max Quality** (mpeg2) or **Good Quality** presets.
- Fixed: an issue with uploading audio files containing more than 8 channels.
- Fixed: an encoding issue that caused the conversion speed to increase threefold.
- Fixed: an issue with uploading image files larger than 128 MB.
- Fixed: an issue with the inability to upload an uncompressed sequence with ten or more slices.

**3D Scene**

- Fixed: an issue with the camera/projector gizmo being scaled when the **Scale** transformation was used to change the camera position.

**Projects**

- Fixed: an issue with automatically creating a new project when the current project is missing. Instead, the server now starts in no-project mode.

**NDI**

- Fixed: an issue with the transparent images in NDI streams being multiplied by alpha twice.
- Fixed: an issue with the NDI stream names conflicting when an **NDI Out** node with the same name existed in the subgroup.
- Fixed: an issue with an NDI stream not being automatically reinitialized with a new name when the source **NDI Out** node has been renamed.
- Fixed: an issue with the internal (preview) NDI streams not being hidden from selection in the **NDI In** node.

**Audio**

- Fixed: an issue with the **Custom Mixing** parameters becoming disabled after the server was restarted.
- Changed: the default stream buffer size has been changed from 60ms to 80ms to avoid audio drops.

**Calibrator**

- Fixed: an issue with the **Normalized Exposure** slider not working when the **Calibrator** node was in the group.
- Fixed: the occurrence of memory leaks during the **Gamma Corrections** stage.
- Fixed: an issue with the algorithm used to remove cropped blobs along the border of the calibration area that resulted in thin dots along the edges.
- Fixed: an issue with a calibration error caused by a specific AMD driver.
- Fixed: the occasional appearance of twisted sections in the calibrated area after the **Patterns** calibration stage was run.

**GUI Panel**

- Fixed: an issue with the video preview not loading on PCs with longer computer names (resulting in an exceedingly long NDI stream source name).
- Fixed: an issue with the placement of the GUI items in the editor not being restricted exclusively to the visible area (allowing negative positioning).

**Switch**

- Fixed: an issue with the server crashing when too many inputs were initialized by limiting the number of possible inputs to 100.
- Fixed: an issue with the action links to the **Switch to \[Input]** parameter being disconnected when the **Input** type was changed.

**Soft Edge Blender**

- Fixed: an issue with incorrect UV blend maps output for fisheye cameras.
- Fixed: an issue with the server crashing when the **Soft Edge Blender** node was deleted in the node graph while the **Digital Camera** node was still present.

**Others**

- Fixed: an issue with the **Group** node not being placed at the center of the node group selection when created using a shortcut.
- Changed: the **Fit to Size** logic in the **Text Image** node has been changed to work exclusively for texts that exceed the frame size, and not affect text contained within the frame.
- Fixed: an issue with the process closing not being detected by the **System Exec** node.
- Fixed: an issue with the **Connect** button disappearing when clicking on the empty space in the **Connect to Server** dialog window.
- Fixed: an issue with the color correction data not being saved to file in the **Color Correction** dialog window.
- Fixed: an issue with the stereoscopic mode not working when only one display was defined on the canvas (with display dimensions equal to the canvas size).
- Fixed: an issue with the **Checkbox** node not working when included in the group.
- Fixed: an issue with the output values of the **Expression** node being automatically updated even when no changes were made to the input values or previously entered expression.
- Fixed: an issue with the fixed step of the value change selected not being saved for the double spin box in the settings panel.
- Fixed: an issue with the double spin box value being automatically updated in the settings panel before its editing had been completed.
- Fixed: an issue with the server crashing when the incorrect ISF file was imported in the **GLSL Shader** node.
- Fixed: an issue with the duration display modes (the current playback time or the remaining playback time) not being switched on a mouse click in the **Video Preview** widget.
- Fixed: an issue with the white map processing in the **DomeSDK Saver** node by selecting the proper clamping method.
- Changed: Outputs in the **BlobTracker** node are now updated if parameters have been modified without a source image being changed (previously updated only if a source image had been updated).
- Changed: media items uploaded using the **CineForm** preset are now automatically resized to the correct dimensions before encoding – divisible by 16x8 blocks.
- Fixed: an issue with the server crashing after enabling the **LTC Encoder** node if it was disabled for a long time.
- Fixed: an issue with the output image having the incorrect width in the **DeckLink Capture** node.
- Fixed: an issue with the output image of the **USB Camera** node containing invalid data.
- Fixed: an issue with not being able to copy or move files between project folders on different drives.
- Fixed: the **Recent Projects** list now only shows recent projects that are currently available.
- Fixed: an issue with the video freezing when the source texture size in the **Spout In** node was changed.
- Fixed: an issue with the panel crashing when the server application was closed while any information, warning, or error popup window was open.
- Fixed: an issue with the **Add Node** context menu closing unexpectedly when using the **Alt**+**Shift** shortcut to change the language. That was done by disabling the **Alt** navigation functionality that changes focus to the main menu when **Alt** is pressed.
- Fixed: an issue with not being able to use all device ports for capture or output in the **DeckLink Capture** node (for example, on DeckLink Duo 2).
- Changed: the **Logs** widget now logs the current server time instead of the UTC.
- Fixed: an issue with the user controls widget being missed after the **Combo Box** node was added to the node graph.
- Fixed: an issue with the **Dome Transform**, **Planar to Dome**, and **System Info** widgets not being automatically updated after the corresponding nodes were renamed.
- Fixed: an issue with not being able to change pixel value parameters in the **LED Stripes Mapper** node.
- Fixed: an issue with the disabled buttons not being readable.
- Fixed: an issue with the server crashing when the **Use GPUDirect** option was enabled in the **DeckLink Capture** node settings on a GPU that did not support this option.
- Fixed: an issue with the R, G, and B output values for transparent source image being incorrect due to them being multiplied by the alpha channel of the source image.
- Fixed: an issue with a failure to build blending maps in the **Soft Edge Blender** node when a non-zero **Soft Edge** parameter was configured in the connected patches.
- Fixed: an issue with work folders in the **Configurator** being allowed to contain each other.
- Changed: in the **Configurator**, work folders are disallowed from containing each other.
