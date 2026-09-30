---
id: guide.whats-new.release-notes-3-2-0
variant_id: guide.whats-new.release-notes-3-2-0.imported-current-guide
title: Screenberry v3.2.0 Release Notes - Latest Updates and Features
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
    path: archive/site/content/en/whats-new/release-notes-3-2-0.mdx
    sha256: ae8e8e3a163796fdd6b8468b74cdf9f8df9427c67c51a8e34654967e362dd419
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: historical
source:
  path: content/en/whats-new/release-notes-3-2-0.mdx
  canonical_url: https://help.screenberry.com/en/whats-new/release-notes-3-2-0
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: ae8e8e3a163796fdd6b8468b74cdf9f8df9427c67c51a8e34654967e362dd419
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry v3.2.0 Release Notes - Latest Updates and Features
    description: Learn about the latest improvements and new features in Screenberry v3.2.0, including matrix-based playlists, redesigned audio system, RTMP output, support for MacOS M1 and M2, and VR headset support.
    openGraph:
      title: Screenberry v3.2.0 Release Notes - Updates & Features Overview
      description: Discover the newest features in Screenberry v3.2.0, such as matrix playlists, updated audio, RTMP output, MacOS M1/M2 support, and VR headset compatibility.
describes_release: 3.2.0
presentation:
  mode: text-only
  illustrations: null
  visual_information_review: not-applicable
---

# Screenberry v3.2.0 Release Notes

## New Features

### Matrix Player

The **Matrix Player** feature brings a new level of versatility to Screenberry, offering the organization and playback of video content as a matrix-based playlist. This enhancement provides users with improved media control, enabling them to manage and play their media in more complex sequences and trigger clips in a non-linear fashion for flexible and dynamic content presentation.

### Support for MacOS M1 and M2

Both the Screenberry Server and Panel can now be operated on devices running Apple’s latest M1 and M2 chipsets. Currently, a limited set of features is supported, as it remains in the experimental phase.

### Redesigned Audio Subsystem

Screenberry features an advanced audio engine that has been completely redesigned to offer low latency, support for more channels (up to 128 channels), unlimited audio instances, and new audio processing nodes. This revamped audio subsystem ensures high-fidelity sound reproduction and provides professional AV production capabilities. With support for various audio formats and advanced routing capabilities, it delivers the ultimate solution for managing and producing high-quality audio in your projects.

### Low Latency Audio Processing

The software’s advanced audio engine offers low latency processing, ensuring a seamless and precise audio experience. With the introduction of a new low latency operation mode, users can further optimize audio performance by selecting the **Clock Audio Engine from Device** option. This feature is particularly beneficial for live performances, interactive games, and other real-time audio applications, where minimal delay and precise synchronization are essential for an immersive user experience.

### Flexible Audio Mixing

Screenberry introduces a new **Audio Mixer** node that empowers users with precise control over mixing different audio streams. This powerful feature enables users to combine and blend multiple audio sources by utilizing the node functionality, audio mixers, and matrices.

### Audio Channel Mixer

The newly introduced **Audio Channel Mixer** node implements the audio mixing logic previously found in the **Audio Out** node. This enhancement streamlines the audio channel mixing process, enabling users to gain precise control over multichannel audio routing and blending. With the **Audio Channel Mixer**, users can easily manage a wide variety of multichannel audio formats, including 2.1, 5.1, 7.1, and 10.2, as well as custom multichannel audio configurations.

### WASAPI Exclusive API Support

The Screenberry audio subsystem now incorporates support for the _WASAPI Exclusive API_, enabling lower latency on Windows systems.

### VST Plugins Integration

Screenberry now offers experimental support for _Virtual Studio Technology_ (VST) audio plugins through the new **VST Effect** node. This integration expands the software’s audio processing capabilities, allowing users to enhance their sound production with a wide range of third-party effects, instruments, and utilities.

### Visual Audio Analyzer

Screenberry has introduced an experimental **Audio Analyzer** node that provides a visual representation of the audio spectrum. This work-in-progress feature allows users to visualize and analyze audio frequencies, enabling them to make informed decisions when processing and manipulating audio within their projects.

### MIDI Playback

A new **MIDI Player** node enhances the MIDI capabilities in Screenberry. This node generates MIDI messages that can be directly utilized with VST plugins, allowing users to seamlessly integrate MIDI files and leverage the extensive capabilities of VST plugins.

### Node Audio Meter Bars

Each audio parameter of the nodes within the node graph now displays audio meter bars. This new feature enhances the visualization of audio levels in real-time, allowing users to easily monitor and adjust individual audio parameters.

### Plugins SDK

The _Screenberry Plugins SDK_ now includes support for audio input and output streams. This enhancement allows developers to create plugins that can seamlessly interact with audio streams, expanding the possibilities for audio processing and integration within Screenberry.

### Audio Delay

A new **Audio Delay** node has been implemented, enhancing the flexibility of audio control.

### Multiple Video Outputs in Media Player

The **Media Player** in Screenberry now offers support for playing multiple video outputs from the timeline and matrix playlist. This feature enables users to seamlessly synchronize and play multiple video outputs simultaneously, allowing for enhanced visual presentations using multiple screen displays and/or projections.

### RTMP Output

Screenberry now includes the **RTMP Out** node, allowing users to stream their content to platforms like YouTube and other popular streaming services. With support for the RTMP network streaming protocol, Screenberry seamlessly integrates into various video production and broadcasting workflows, enabling users to reach a wider audience and effectively broadcast their content.

### SRT Output

The introduction of the new **SRT Out** node enables users to output _Secure Reliable Transport_ (SRT) streams. With this addition, users can easily stream their content using the SRT protocol, ensuring the secure and reliable transmission of audio and video data.

### VR Headsets Support

Screenberry now offers experimental support for VR headsets within the **3D Scene** widget, utilizing the OpenVR SDK. This new feature allows users to interact with the 3D scene using immersive virtual reality technology directly within Screenberry and is compatible with leading devices such as Valve Index, HTC Vive, Oculus Rift, and various Windows Mixed Reality headsets.

### Spherical Mirror Warp

A new feature, **Spherical Mirror Warp**, designed specifically for single projector fulldome setups, has been introduced. This addition further expands the already extensive range of calibration and projection tools available in Screenberry.

### Simple Math Nodes

Screenberry has introduced a collection of new simple math nodes designed to streamline the workflow within the node graph. These nodes cover mathematical operations such as Sum, Difference, Multiply, Divide, Mix, Maximal, and Minimal, which are applicable to various types including Int, Float, IVec2, Vec2, Vec3, and Vec4.

### New Node Selection Menu

The **Node Graph** widget now includes an alternative left-side panel menu that simplifies the process of exploring, searching for, and adding nodes to the node graph.

### Quick Access Navigation for Playlists and Timelines

The **Media Player** now includes a convenient quick-access navigation feature, enabling users to easily locate and switch between playlists and timelines, even when the side panel containing the playlist and timeline list is closed.

### Media Item Settings — Custom Transformations

A new graphical interface has been introduced, offering quick access buttons for adjusting the **Anchor Point**, **Position**, and **Scale** parameters, thereby making the process of positioning and scaling media items on the video output more intuitive and efficient

### Color Correction

A new **Color Correction** node has been introduced, allowing users to utilize the corresponding widget for applying color correction to any video output at any stage of the Screenberry dataflow.

## Improvements

### Node Graph

- The **Center on Mouse** option, accessible via the **C** shortcut, has been implemented to quickly center the node graph view on the mouse cursor. This enhances navigation and improves workflow efficiency. Additionally, the shortcut for creating a **Comment Area** has been changed to **Shift** + **C**, as the **C** shortcut was previously used for this action.
- The node searching algorithms in the **Add Node** dialog have been enhanced, enabling users to search for nodes using multiple words and matching node aliases, facilitating faster and more efficient node selection and addition.
- The minimap visualization has been enhanced for higher-scale representation, improving the user experience when working with large and complex node graphs. Additionally, performance optimizations have been implemented to ensure smooth navigation and increased responsiveness of the node graph.
- Setting out-of-bounds node parameter values via a link or through the Screenberry protocol is now disallowed, preventing accidental parameter value adjustments beyond valid ranges.
- Touchscreen support has been added to the **Node Graph** widget, enabling users to interact with the node graph using touch gestures on compatible touchscreen devices.

### Media Player

- The option to rename media using the **F2** shortcut has been added, allowing for the easy and quick renaming of item titles directly within the **Media Player**.
- The visibility of currently playing items has been improved by displaying the current item playback progress directly on the item poster, making it easier to identify the active items in the **Media Player** playlists.
- The **Play Selected** function will now play from the position of the first selected item when multiple items are selected.
- The fade/loop/pause settings bar is now hidden on the media item posters if none of these settings are set for the items, resulting in a cleaner and less cluttered user interface.
- A seek bar is now displayed for the selected item, facilitating easier navigation and the simpler adjustment of playback settings, such as editing **In**/**Out** points, for individual media items, even if they are not currently active.
- The playback sync mode audio-based option has been removed, as it is now implemented through the **Clock Audio Engine** option in the **Audio In**/**Out** settings.
- The visualization of audio peaks in the **Media Player** has been improved by using the RMS (root mean square) instead of the maximum peak value, providing a more accurate representation of audio levels.
- When adding a new timeline, the timeline preferences window for configuring the frame rate is now displayed, providing users with more control over timeline playback settings.
- The duplicate action (**Ctrl+D**) has been added for the timeline media items, providing users with a convenient method for creating duplicates of selected items within the timeline.
- The **Optimize Rendering** option has been removed from the **Media Player** node settings, as it did not provide significant optimization benefits.
- A new **Preferences** option has been introduced to always fit the seek bar to the full width of the **Media Player** widget, providing a consistent and convenient user experience.
- Preloading of the next media item in the playback queue has been introduced to reduce transition times, prevent frame drops, and enhance the overall smoothness of media playback.
- A **Smooth Playback** mode has been added to the timeline options. It is designed to prevent frame drops and improve video smoothness by making slight adjustments to the playback speed.
- The synchronization between different media players or timeline tracks has been enhanced, guaranteeing the simultaneous playback of corresponding media items when they are started at the same time.
- Optimizations have been implemented to minimize unnecessary CPU workload on high-core-count CPUs. This change results in decreased overall CPU usage, particularly during the playback of non-demanding media content, and consequently enhances performance.

### Files Widget

- The addition of a **Home** button now allows users to quickly navigate to the root folder of the current project, improving file management and accessibility.
- Users can now sort files in the **Files** widget by clicking on the table headers, providing a convenient way to organize and browse files based on different criteria.
- The file name will now be automatically selected when the rename dialog opens, providing convenience for users.
- **Files Widget and Media Library**: View settings, such as scale and aspect ratio adjustments of the media item posters, have been introduced, providing users with more control over the visual representation of their media files.
- **File Extension**: Screenberry project files now use the “.sbr” extension, making it easier to identify and manage project files.

### Projects

- The automatic conversion of projects from different versions has been disabled to give users more control over project compatibility and ensure data integrity. Now, when opening a project file from a different version, users are presented with options to convert the file to the current version, convert the file while saving a backup of the original, or make a copy of the file and convert the copy. These options enhance compatibility, prevent data loss, and maintain consistency throughout the project.
- Project versions are now displayed in the **Open**/**Save Project** dialogs, allowing users to identify and select the desired project version easily.

### Content Upload

- Additional MPEG-2 quality presets have been added, offering users more options to select from, including 100, 200, and 400 Mbit per FullHD slice.
- A new preset **Original Format without Preview** has been added, enabling faster upload times by excluding the preview generation step.

### Web View

- The _Chromium Embedded Framework_ (CEF) has been updated to Release 5735, resolving issues with video playback on platforms like Vimeo and improving overall web browsing capabilities within Screenberry.
- Website caches, including login sessions, are now saved by the **Web View** node, providing a more seamless browsing experience and allowing users to stay logged in to their preferred websites.
- The **Reload** button and **Current URL** information parameter have been added to the **Web View** node, giving users more control over refreshing the web page and providing easy access to the current URL being displayed.
- A workaround has been implemented to address a known bug in fullscreen mode for certain web pages. This improvement ensures a smoother and more consistent fullscreen experience when interacting with those web pages.

### Other Improvements

- **Canvas**: An option to manually set the **System Frame Rate** has been added to the **Canvas** node, allowing users to override the automatic frame rate calculation in cases where it may not have been accurately determined.
- **Patch Editor**: Users can now easily rename patches or displays using the **F2** shortcut, improving workflow efficiency.
- **Home Widget**: The visual appearance of the Home widget, which displays available servers, has been improved for enhanced usability.
- **NDI Out**: The NDI Out node has been enhanced to support up to 128 audio channels.
- **NDI Library**: The NDI library has been updated to version 5.5.4, improving performance and stability when working with NDI streams in Screenberry.
- **User Controls**: Enhancements have been made to the value adjustment functionality in the **User Controls** widget. Users can now change values more by dragging the mouse and using logarithmic sliders, accessible by holding the middle mouse button, in the value edit field of the **Slider** and **Float** controls of the **User Controls** widget, enhancing the precision and ease of value adjustment.
- **Notch LC Playback**: CPU usage has been optimized to improve overall performance when playing back high-resolution Notch LC videos.
- **Calibrator**: The **Merge Distance Threshold** parameter has been introduced for the **Masks** stage in the Calibrator, facilitating the merging of projector areas for improved calibration accuracy.
- **MQTT Client**: The **Auto Publish** option has been added to the **MQTT Client** node and is now enabled by default. Parameters in the published topic have been reordered for improved usability and clarity.
- **MQTT Client**: The parameter name has been updated, replacing **Value** with **Payload** for clarity.
- **Panel**: The “Loading” indicator will now be displayed while nodes are loading from the server, providing visual feedback to the user.
- **Item Preview**: If the default audio device is changed, the **Item Preview** widget now automatically switches to the new device, ensuring seamless audio output during previewing.
- **Transform 2D Widge**t: The **Reset to Default** button has been added to the **Transform 2D** widget, allowing users to quickly reset all applied transformations to their initial values.
- **Float Node**: The **Increment** and **Increment Step** input parameters have been added, enabling users to make precise adjustments to float values with customizable step sizes.
- **Matrix Decompose Node**: The **Transform Order** and **Rotation Order** output parameters have been added to the **Matrix Decompose** node, providing users with more comprehensive control over transformations.
- **Error Messages**: The tooltip error messages for uninitialized nodes have been improved, making it easier for users to understand and troubleshoot potential issues with node initialization.
- **Workspaces**: Keyboard shortcuts (**Ctrl** + **1**, **2**, **3**…) have been implemented to allow quick and efficient switching between workspaces.
- **Widgets**: To alert users of potential issues, a red line will now appear on a widget’s tab header if the associated node of the widget is not currently initialized.
- **Audio**: The simultaneous use of an ASIO audio device as both an input and output within the same project is now supported.
- **Tone Generation**: The **Tone Generator** node now offers a selection of various waveform generation modes, including a white noise option, allowing users to generate a wider range of audio tones and sounds.
- **Frame Rate Status Widget**: The frames per second (FPS) information of the currently playing media item is now displayed in the status bar, providing users with real-time feedback on the video output.
- **Configurator: Available Licenses Widget**: A checkbox has been added to filter out already installed licenses, making license management more straightforward.

## Fixes

- **Node Graph**: An issue where the mouse cursor became hidden and the pan/zoom buttons were not properly working via Teamviewer has been resolved.
- **Canvas**: An issue with the detection of RTX cards as NVidia has been resolved, ensuring the accurate recognition of hardware.
- **Media Player**: The item audio tracks list in the settings will now update correctly after uploading or removing audio tracks, ensuring accurate information.
- **Media Player**: An issue has been fixed where view settings, including wide/tall, fit thumbnails, and media item names, were not saved correctly.
- **Media Player**: An issue with mapping the first item of two or more selected items has been fixed, ensuring accurate mapping behavior.
- **Media Player**: An issue has been resolved where the **Cancel Item Mapping** option was not functioning properly for media items after a server restart or when items were copy-pasted.
- **Media Player**: An issue where users were able to change the positions of **In** and **Out** points when dragging the corresponding handles on the seek bar in locked playlists has been fixed. The ability to modify **In** and **Out** points in locked playlists has been disabled.
- **Media Player**: The issue of synchronization errors occurring when an audio track has been removed or not selected has been resolved.
- **Media Player**: An issue has been resolved where media items were not being highlighted correctly when dragged to the playlist for upload.
- **Media Player**: An issue causing a server crash when currently playing items on the timeline were dragged has been resolved.
- **Media Player**: An issue where a long audio file name resulted in an unusably wide layout when the **Audio** parameters subgroup had been expanded in media item settings.
- **Media Player**: An issue that affected the video playback position of a media item when the **Enable Freeze Frame** or **Disable Video Track** options were deselected for this item during its playback has been resolved.
- **Patch Editor**: An issue with the live image stream not rendering accurately for displays with configured orientation has been resolved.
- **Calibration**: An issue where existing calibration files were not being cleaned up properly before restoring other calibration settings has been resolved.
- **Scene Editor**: An issue where the mouse cursor became hidden when orienting in the 3D scene via Teamviewer has been resolved.
- **Recent Projects**: An issue with projects not being added to the **Recent Projects** list after using the **Save as…** function has been resolved.
- **Files Widget**: An issue where the project folders were displayed as invalid (crossed out) in the **Icon View** in **No Project** mode after the project file had been deleted. The issue has been resolved, ensuring that project folders are now displayed validly.
- **Content Upload**: A conversion issue for TS files with non-zero starting timestamps and a related seeking issue when such files were uploaded using the **Original** preset have been resolved.
- **Panel**: An issue causing the **Server** computer to freeze for 10 seconds when Wi-Fi was turned off on the **Panel** computer has been resolved.
- **Panel**: An issue where a floating widget was occasionally hidden after a restart. The issue has been resolved, ensuring the proper visibility of the widget.
- **NDI In**: An issue with the incorrect premultiplication of alpha for transparent images has been resolved.
- **MQTT Client**: An issue with the output trigger not working in node settings has been resolved, ensuring proper functionality.
- **Video Preview Dialog**: An issue with the **Set Poster Frame** function has been resolved, enabling users to set poster frames accurately.
- **Switch Node**: An issue with incorrect input names and output types when copying the node has been resolved.
- **Fisheye Camera Pose Estimation**: An issue with pose estimation for fisheye cameras when the camera was rotated 90 degrees on the X-axis has been resolved.
- **Time Conversion**: An issue with incorrect time conversion for daylight saving time in logs has been resolved, ensuring an accurate representation of timestamps.
- **PointGrey Camera**: An issue causing a server crash when the camera was connected and selected within the node has been resolved.
- **Shader**: An issue where input parameters were not being updated in the shader has been resolved.
- **Benchmark**: An issue where GPU and bus usage were not shown for all GPUs. The issue has been resolved, ensuring the complete visibility of GPU and bus usage.
