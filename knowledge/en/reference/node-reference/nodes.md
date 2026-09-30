---
id: guide.node-reference.nodes
variant_id: guide.node-reference.nodes.imported-current-guide
title: Complete Screenberry Node List
language: en
kind: reference
status: in_review
owner: unassigned
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: existing-guide
    path: archive/site/content/en/node-reference/nodes.mdx
    sha256: 918b3410a6fc7de83c4b7df7746453b99ed4edf0879b62ebbc827c689e03cded
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/node-reference/nodes.mdx
  canonical_url: https://help.screenberry.com/en/node-reference/nodes
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 918b3410a6fc7de83c4b7df7746453b99ed4edf0879b62ebbc827c689e03cded
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Complete Screenberry Node List
    description: Explore the full range of nodes in Screenberry organized by type and including detailed descriptions.
    openGraph:
      title: Screenberry Complete Node List
      description: Get a comprehensive overview of all nodes in Screenberry, categorized and described for easy reference.
presentation:
  mode: text-only
  illustrations: null
  visual_information_review: not-applicable
---

# List of Nodes

## 3D

|                                                                       |                                                                                                                                                                                                                     |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3D Combine                                                            | Сombines multiple 3D objects into a single one.                                                                                                                                                                     |
| [3D Model Export](../../how-to/3d-scene/3d-model.md#saving-3d-models) | Saves a 3D object to a file.                                                                                                                                                                                        |
| [3D Model File](../../how-to/3d-scene/3d-model.md#adding-3d-models)   | Loads a 3D object from a file.                                                                                                                                                                                      |
| [3D Primitive](../../how-to/3d-scene/3d-primitive.md)                 | Creates a primitive 3D object (**Sphere**, **Box**, **Cylinder**, **Plane**, or **Dome**).                                                                                                                          |
| [3D Scene](../3d-scene/3d-scene-settings.md)                          | Creates a virtual 3D environment where 3D objects, cameras, and projectors can be added, positioned, or edited. It is mostly used for projection mapping.                                                           |
| [3D Camera](../../how-to/3d-scene/3d-camera.md)                       | Configures a camera to render an image from a particular viewpoint in a 3D scene.                                                                                                                                   |
| Projector                                                             | Represents a projector in a **3D Scene**. In remapping mode, it renders a remapped output image. In simulation mode, it projects an image onto 3D objects in the scene.                                             |
| [Projection Mapper](../../how-to/3d-scene/projection-mapper.md)       | Projects an image onto 3D objects in a scene.                                                                                                                                                                       |
| Transform 3D                                                          | Generates or receives a transformation matrix for 3D objects. Multiple **Transform 3D** nodes can be chained together to perform complex transformations.                                                           |
| VR Camera                                                             | Provides a viewpoint in a 3D scene and is compatible with HTC Vive and other VR devices. It obtains headset and joystick positions, processes button press events, and enables 3D scene navigation using joysticks. |

## Audio

|                     |                                                                                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Audio Analyzer      | Processes an input audio signal and outputs a visualization of the audio spectrum.                                                                 |
| Audio Channel Mixer | Generates an audio output by remixing the individual channels of the input audio signal using a mix matrix.                                        |
| Audio Delay         | Delays the input audio signal by a specified duration.                                                                                             |
| Audio In            | Captures audio from the specified audio device.                                                                                                    |
| Audio Mixer         | Combines multiple audio inputs to generate a single audio output.                                                                                  |
| Audio Meter         | Displays the audio level of each channel.                                                                                                          |
| Audio Out           | Outputs audio to the specified audio device.                                                                                                       |
| DTMF Generator      | Generates Dual-Tone Multi-Frequency (DTMF) signals based on a user-specified tone sequence.                                                        |
| Tone Generator      | Generates a pure audio tone at the specified frequency.                                                                                            |
| VST Effect          | Integrates any VST plugins installed by the user into the system, providing a graphical interface for controlling audio generation and processing. |

## Auto Calibration

|                    |                                                                                                                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BlendCalibrators   | Blends two calibrator patches on the same display.                                                                                                                                                                                     |
| Calibrator         | Provides automatic camera-based calibration of multi-projector output.                                                                                                                                                                 |
| CalibratorPatch    | Creates a single projector patch for automatic multi-projector calibration.                                                                                                                                                            |
| Digital Camera     | Provides access to DSLR or mirrorless camera controls and settings.                                                                                                                                                                    |
| Calibration Export | Saves Screenberry DomeSDK calibration files.                                                                                                                                                                                           |
| Calibration Import | Loads Screenberry DomeSDK calibration files.                                                                                                                                                                                           |
| GenICam Camera     | Enables the use of GenICam-compatible cameras for calibration.                                                                                                                                                                         |
| Virtual Camera     | Is used to simulate the calibration process (mostly for debugging while evaluating the work of the **Calibrator**). Additionally, it can be used in combination with the **3D Scene** node to simulate complex multi-projector setups. |

## Automation

|                           |                                                                                                                                                                             |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Action Delay              | Delays the execution of a trigger for a specified period of time.                                                                                                           |
| Action Toggle             | Executes On and Off triggers alternately and changes the value of an output boolean parameter every time an input trigger is received.                                      |
| Art-Net Timecode Listener | Receives Art-Net timecode over the network.                                                                                                                                 |
| Art-Net Timecode Sender   | Sends Art-Net timecode over the network.                                                                                                                                    |
| Content Sync              | Automatically converts and updates media items from a shared folder to a target folder.                                                                                     |
| DMX Pixel Mapper          | Maps image-based input onto two-dimensional arrays of DMX fixtures and transmits the result via Art-Net or sACN, enabling visual content to control lighting installations. |
| Event Filter              | Filters received triggers based on the criteria specified.                                                                                                                  |
| Event Scheduler           | Schedules triggers to be executed at specified times and dates, such as hourly, daily, monthly, etc.                                                                        |
| Gate                      | Connects or breaks a link of a specified type depending on the execution of the On and Off triggers.                                                                        |
| Media Player Action       | Executes the specified playback control of the selected **Media Player** upon receiving a trigger.                                                                          |
| On Item Finished          | Executes a trigger when playback of a specified media item finishes.                                                                                                        |
| On Item Started           | Executes a trigger upon starting the playback of a specified media item.                                                                                                    |
| On Startup                | Executes a trigger at Screenberry startup.                                                                                                                                  |
| On Value Change           | Executes a trigger when the input value changes.                                                                                                                            |
| Play Item                 | Starts the playback of a specified media item.                                                                                                                              |
| Playlist Randomizer       | Inserts randomized copies of source-playlist items into an existing target playlist, with conditional replacement of the configured target range. See the note below.       |
| Preset                    | Allows switching between sets of parameters with predefined values.                                                                                                         |
| Script                    | Runs JavaScript code.                                                                                                                                                       |
| System Exec               | Runs external processes.                                                                                                                                                    |
| Ticker                    | Creates a trigger to be executed every specified number of frames.                                                                                                          |
| Timeline Marker           | Enables or disables a marker in a specified timeline.                                                                                                                       |

> **Note:** **Playlist Randomizer** inserts randomized copies of source-playlist items into an existing target playlist, starting at **Target First Item** and adding **Target Items Count** items. When enough target items are present for the configured replacement range, that range is removed before the new items are inserted. Source entries are used approximately equally. Avoiding consecutive copies of the same source entry requires at least two distinct entries; a single-entry source necessarily repeats when more than one item is requested. The target playlist must already exist.

## Communication

|                    |                                                                                                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DMX Receiver       | Receives DMX packets over an ethernet network using Art-Net or sACN.                                                                                                         |
| DMX Sender         | Sends DMX packets over an ethernet network using Art-Net or sACN.                                                                                                            |
| HTTP Listener      | Listens to HTTP requests and, upon receiving them, either executes triggers based on configured commands or processes HTTP requests using Screenberry Control Protocol.      |
| HTTP Request       | Sends HTTP requests.                                                                                                                                                         |
| MIDI Controller    | Processes input from a MIDI device.                                                                                                                                          |
| MIDI In            | Receives MIDI input from a single device and enables the routing of MIDI messages to multiple MIDI controllers.                                                              |
| MIDI Out           | Enables the output of MIDI messages.                                                                                                                                         |
| MIDI Player        | Processes a loaded MIDI file and outputs MIDI messages for its individual channels.                                                                                          |
| MQTT Client        | Establishes a connection to the MQTT (Message Queuing Telemetry Transport) broker over TCP.                                                                                  |
| OSC Listener       | Listens for OSC packets and, upon receiving them, either executes triggers based on configured commands or processes OSC packets using Screenberry Control Protocol.         |
| OSC Sender         | Sends OSC packets using UDP.                                                                                                                                                 |
| Serial Port Input  | Receives packets from a serial port and, upon receiving them, either executes triggers based on configured commands or processes packets using Screenberry Control Protocol. |
| Serial Port Output | Sends messages over a serial port.                                                                                                                                           |
| TCP Listener       | Listens for TCP/IP connections and processes messages by either executing triggers based on configured commands or using Screenberry Control Protocol.                       |
| TCP Sender         | Sends simple commands and reads a response over TCP/IP.                                                                                                                      |
| UDP Listener       | Listens for UDP packets and, upon receiving them, either executes triggers based on configured commands or processes UDP packets using Screenberry Control Protocol.         |
| UDP Sender         | Sends UDP packets.                                                                                                                                                           |
| Wake on LAN        | Sends Wake-on-LAN packets.                                                                                                                                                   |
| Web Server         | Runs a web server that enables the hosting and processing of web pages. The default page is a web panel for controlling Screenberry via a web browser.                       |

## Device Control

|                                  |                                                                                                                                       |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Barco Control                    | Provides IP-based control for a range of Barco projectors.                                                                            |
| PJLink                           | Provides control over devices via the PJLink protocol.                                                                                |
| Projectors Control (Serial Port) | Provides control over projectors via a serial port.                                                                                   |
| Samsung MDC Protocol             | Provides control over Samsung displays via the Multiple Display Control (MDC) protocol.                                               |
| Serial Relay Input               | Detects short circuits on the serial port’s Rx and Tx lines.                                                                          |
| SerialPPM                        | Converts floating-point numbers to a PPM signal for RC devices using the Front Pictures USBtoPPM device (over a virtual serial port). |

## Fulldome

|                                                          |                                                                                                                                                                                   |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dome Transform](../warping-alignment/dometransform.md)  | Applies a geometry correction to the Dome Master image to compensate for the position, orientation, and lens distortion of the calibration camera.                                |
| Fisheye Lens Correction                                  | Applies compensation for minor deviations of certain measured physical fisheye lens models to achieve a correctly equidistant fisheye image.                                      |
| Fisheye Remap                                            | Converts a source fisheye or VR 360-degree image into a circular fisheye image, allowing adjustment for the position, orientation, and lens distortion of the calibration camera. |
| [LatLong to Dome](../warping-alignment/latlongtodome.md) | Maps a VR 360-degree image onto a virtual sphere and provides controls for displaying it on a dome screen.                                                                        |
| [Planar to Dome](../warping-alignment/planartodome.md)   | Maps a planar image onto a virtual flat or curved surface and provides controls for displaying it on a dome screen.                                                               |
| Spherical Mirror Warp                                    | Warps a source fisheye dome master image for projection through a spherical mirror onto a dome screen using a single projector.                                                   |

## General

|                                                |                                                                                                                                                                                                                                              |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Canvas](primary-nodes/canvas.md)              | Creates a main server video output window with an OpenGL context.                                                                                                                                                                            |
| Comment Area                                   | Сreates a block in the node graph containing a comment or annotation. Additionally, nodes placed inside a comment box become attached to it and can be moved as one entity, providing a simple method of organizing the node graph visually. |
| [Display](primary-nodes/display.md)            | Creates a viewport that can be placed on the canvas.                                                                                                                                                                                         |
| Display Output                                 | Creates a separate output window for a specified display.                                                                                                                                                                                    |
| Group                                          | Creates a container that nests a group of nodes and forwards their input and output parameters.                                                                                                                                              |
| Hot Backup                                     | Synchronizes project data with a backup server and forwards control commands to it.                                                                                                                                                          |
| [Info](primary-nodes/info.md)                  | Displays connected parameter values and image previews directly in the **Node Graph**.                                                                                                                                                       |
| [Render Target](primary-nodes/rendertarget.md) | Renders an off-screen image.                                                                                                                                                                                                                 |
| Server Control                                 | Provides controls over the server and Screenberry application; displays general system information.                                                                                                                                          |
| Shared Group                                   | Creates a container that nests a group of nodes and can be shared between projects.                                                                                                                                                          |
| System Info                                    | Calculates and displays performance counters (CPU and GPU usage, frame rate, disk read speed, etc.)                                                                                                                                          |

## Human Interface Devices

|                      |                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------- |
| Joystick             | Provides joystick events handling.                                                    |
| Keyboard             | Listens to the specified keyboard events and executes triggers based on them.         |
| Mouse                | Provides mouse events handling.                                                       |
| Presentation Clicker | Forwards (and remaps, if needed) presentation clicker input events or simulates them. |

## Image Processing

|                       |                                                                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Alpha Mask            | Uses the red channel (first channel) of an image as the alpha channel for a source image.                                                                                 |
| Chroma Key            | Removes the chroma key color (green) from a source image.                                                                                                                 |
| Color Correction      | Provides controls for adjusting the color attributes of a source image through RGB channels, curve manipulation, and **Hue**, **Saturation**, and **Lightness** settings. |
| Color Space Transform | Applies OpenColorIO color-space transformations to images using ACES profiles.                                                                                            |
| Dilate                | Applies an optimized maximum filter to a source image.                                                                                                                    |
| Erode                 | Applies an optimized minimum filter to a source image.                                                                                                                    |
| Extract Channel       | Extracts the specified single channel from a source image.                                                                                                                |
| FX Stack              | Applies a sequence of ISF (Interactive Shader Format) effects to a source image.                                                                                          |
| GLSL Shader           | Creates a GLSL shader.                                                                                                                                                    |
| Image Blending        | Blends two images together using the standard blending modes.                                                                                                             |
| Image Buffer          | Accumulates a specified number of source video frames in a buffer, and can be used for a delay effect or to hold an image temporarily when paused.                        |
| Image Saver           | Saves an image into a file.                                                                                                                                               |
| Image Split           | Slices a source image into equally sized sections according to a specified grid.                                                                                          |
| Invert                | Inverts a source image’s colors.                                                                                                                                          |
| Lighten               | Applies the lighten filter to a source image.                                                                                                                             |
| Gamma Correction File | Applies a Look-Up Table to a source image.                                                                                                                                |
| Merge to Stereoscopic | Creates a stereoscopic image by merging two single images or converting a stereoscopic frame-packed image.                                                                |
| Multi GPU Image       | Copies an image from a single GPU to multiple GPUs in a mosaic setup, overcoming single-GPU image-processing limitations in applications such as **Touch Engine**.        |
| Multiply              | Multiplies two images.                                                                                                                                                    |
| Threshold             | Applies a threshold filter to a source image.                                                                                                                             |
| UV Remap              | Applies UV transforms to a source image.                                                                                                                                  |

## Math

|                   |                                                                                                                                                                                                                                                                            |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Add Float         | Adds multiple floating-point number inputs and outputs the result of the addition.                                                                                                                                                                                         |
| Add Int           | Adds multiple integer inputs and outputs the result of the addition as an integer.                                                                                                                                                                                         |
| Add IVec2         | Adds the components of multiple IVec2 inputs and outputs a new IVec2 with the summed components.                                                                                                                                                                           |
| Add Vec2          | Adds the components of multiple Vec2 inputs and outputs a new Vec2 with the summed components.                                                                                                                                                                             |
| Add Vec3          | Adds the components of multiple Vec3 inputs and outputs a new Vec3 with the summed components.                                                                                                                                                                             |
| Add Vec4          | Adds the components of multiple Vec4 inputs and outputs a new Vec4 with the summed components.                                                                                                                                                                             |
| Compare Float     | Compares two floating-point numbers and outputs a Boolean result as well as triggers when the comparison state changes.                                                                                                                                                    |
| Divide Float      | Divides the first floating-point number input by the second floating-point number input and outputs the result of the division.                                                                                                                                            |
| Divide Int        | Divides the first integer input by the second integer input and outputs the result of the division as an integer.                                                                                                                                                          |
| Divide IVec2      | Divides the components of the first IVec2 input by the corresponding components of the second IVec2 input and outputs the result of the division as a new IVec2.                                                                                                           |
| Divide Vec2       | Divides the components of the first Vec2 input by the corresponding components of the second Vec2 input and outputs the result of the division as a new Vec2.                                                                                                              |
| Divide Vec3       | Divides the components of the first Vec3 input by the corresponding components of the second Vec3 input and outputs the result of the division as a new Vec3.                                                                                                              |
| Divide Vec4       | Divides the components of the first Vec4 input by the corresponding components of the second Vec4 input and outputs the result of the division as a new Vec4.                                                                                                              |
| Easing Function   | Applies the easing functions to the input value changing within the range \[0, 1].                                                                                                                                                                                         |
| Equal Float       | Compares two floating-point numbers and outputs whether they are equal.                                                                                                                                                                                                    |
| Equal Int         | Compares two integers and outputs whether they are equal.                                                                                                                                                                                                                  |
| Equal IVec2       | Compares two IVec2 values component by component and outputs whether all corresponding components are equal.                                                                                                                                                               |
| Equal Vec2        | Compares two Vec2 values component by component and outputs whether all corresponding components are equal.                                                                                                                                                                |
| Equal Vec3        | Compares two Vec3 values component by component and outputs whether all corresponding components are equal.                                                                                                                                                                |
| Equal Vec4        | Compares two Vec4 values component by component and outputs whether all corresponding components are equal.                                                                                                                                                                |
| Expression        | Provides the runtime parsing and evaluation of a mathematical expression using the Mathematical Expression Toolkit Library (ExprTk).                                                                                                                                       |
| Float In Range    | Identifies whether the input floating-point number is within the specified minimum and maximum range and outputs a Boolean result as well as triggers when it becomes in range and out of range.                                                                           |
| Float Mix         | Compounds two floating-point numbers proportionally based on the mix value.                                                                                                                                                                                                |
| Line Graph        | Plots a graph based on incoming values over a specified time period or a number of frames.                                                                                                                                                                                 |
| Logic Operation   | Performs the specified logical operation on Boolean value inputs.                                                                                                                                                                                                          |
| Max Float         | Determines the maximum value among multiple floating-point number inputs and outputs the largest value.                                                                                                                                                                    |
| Max Int           | Determines the maximum value among multiple integer inputs and outputs the largest value as an integer.                                                                                                                                                                    |
| Max IVec2         | Determines the maximum values component-wise among multiple IVec2 inputs and outputs a new IVec2 with the largest components.                                                                                                                                              |
| Max Vec2          | Determines the maximum values component-wise among multiple Vec2 inputs and outputs a new Vec2 with the largest components.                                                                                                                                                |
| Max Vec3          | Determines the maximum values component-wise among multiple Vec3 inputs and outputs a new Vec3 with the largest components.                                                                                                                                                |
| Max Vec4          | Determines the maximum values component-wise among multiple Vec4 inputs and outputs a new Vec4 with the largest components.                                                                                                                                                |
| Min Float         | Determines the minimum value among multiple floating-point number inputs and outputs the smallest value.                                                                                                                                                                   |
| Min Int           | Determines the minimum value among multiple integer inputs and outputs the smallest value as an integer.                                                                                                                                                                   |
| Min IVec2         | Determines the minimum values component-wise among multiple IVec2 inputs and outputs a new IVec2 with the smallest components.                                                                                                                                             |
| Min Vec2          | Determines the minimum values component-wise among multiple Vec2 inputs and outputs a new Vec2 with the smallest components.                                                                                                                                               |
| Min Vec3          | Determines the minimum values component-wise among multiple Vec3 inputs and outputs a new Vec3 with the smallest components.                                                                                                                                               |
| Min Vec4          | Determines the minimum values component-wise among multiple Vec4 inputs and outputs a new Vec4 with the smallest components.                                                                                                                                               |
| Multiply Float    | Multiplies multiple floating-point number inputs and outputs the result of the multiplication.                                                                                                                                                                             |
| Multiply Int      | Multiplies multiple integer inputs and outputs the result of the multiplication as an integer.                                                                                                                                                                             |
| Multiply IVec2    | Multiplies the components of multiple IVec2 inputs and outputs a new IVec2 with the multiplied components.                                                                                                                                                                 |
| Multiply Vec2     | Multiplies the components of multiple Vec2 inputs and outputs a new Vec2 with the multiplied components.                                                                                                                                                                   |
| Multiply Vec3     | Multiplies the components of multiple Vec3 inputs and outputs a new Vec3 with the multiplied components.                                                                                                                                                                   |
| Multiply Vec4     | Multiplies the components of multiple Vec4 inputs and outputs a new Vec4 with the multiplied components.                                                                                                                                                                   |
| PID Controller    | Implements a PID (proportional–integral–derivative) controller.                                                                                                                                                                                                            |
| Round             | Rounds a value to the specified precision.                                                                                                                                                                                                                                 |
| Simulated System  | Simulates output of the inertial system.                                                                                                                                                                                                                                   |
| Smooth Transition | Provides a smooth transition between input value states over a specified period of time.                                                                                                                                                                                   |
| Subtract Float    | Subtracts the second floating-point number input from the first, returning the resultant floating-point difference.                                                                                                                                                        |
| Subtract Int      | Subtracts the second integer input from the first, returning the resultant integer difference.                                                                                                                                                                             |
| Subtract IVec2    | Subtracts the second IVec2 input from the first, returning the resultant IVec2 difference.                                                                                                                                                                                 |
| Subtract Vec2     | Subtracts the second Vec2 input from the first, returning the resultant Vec2 difference.                                                                                                                                                                                   |
| Subtract Vec3     | Subtracts the second Vec3 input from the first, returning the resultant Vec3 difference.                                                                                                                                                                                   |
| Subtract Vec4     | Subtracts the second Vec4 input from the first, returning the resultant Vec4 difference.                                                                                                                                                                                   |
| Threshold Float   | Executes corresponding triggers when the rising or falling edge of an input value passes through a specified threshold value, outputs a Boolean value that is _true_ when an input value exceeds a threshold value, and _false_ when it is smaller than a threshold value. |
| Vec2 Mix          | Mixes two Vec2 values proportionally based on the mix value.                                                                                                                                                                                                               |
| Vec3 Mix          | Mixes two Vec3 values proportionally based on the mix value.                                                                                                                                                                                                               |
| Vec4 Mix          | Mixes two Vec4 values proportionally based on the mix value.                                                                                                                                                                                                               |

## Media Sources

|                                                      |                                                                                                                                                         |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gradient                                             | Generates a UV gradient or a gradient image with user-specified colors. A UV gradient can be used together with 3D nodes (**3D Camera**, **UV Remap**). |
| Image File                                           | Loads an image from a file.                                                                                                                             |
| [Media Player](primary-nodes/mediaplayer.md)         | Creates a media player that provides control over the playlists or timelines playback.                                                                  |
| [Notch Playback](integration-nodes/notchplayback.md) | Plays Notch blocks.                                                                                                                                     |
| Solid Color                                          | Generates a solid color image.                                                                                                                          |
| Test Pattern                                         | Generates a grid pattern image that can be used for manual calibration.                                                                                 |
| Text Image                                           | Renders text according to the user-defined formatting.                                                                                                  |
| [Touch Engine](integration-nodes/touchengine.md)     | Plays a Touch Engine `.tox` container loaded from a file.                                                                                               |
| Web View                                             | Renders a specified web page.                                                                                                                           |

## Timecode

|                  |                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| LTC Decoder      | Extracts SMPTE Linear Timecode (LTC) data from an audio stream.                                                          |
| LTC Encoder      | Outputs internal timecode encoded as an SMPTE Linear Timecode (LTC) audio stream.                                        |
| MTC Decoder      | Decodes a MIDI timecode from messages received from the **MIDI In** node.                                                |
| Timecode Display | Renders an image of the current timecode value. Timecode Display can be added as a separate widget.                      |
| Timecode Events  | Executes triggers when specified cue points are reached in the received timecode.                                        |
| Timecode         | Generates a timecode that provides a time reference for synchronizing the processing of nodes and external applications. |

## Tracking

|               |                                                                                                                        |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Accumulator   | Accumulates a specified number of frames to create a mask for blob tracking.                                           |
| BlobTracker   | Detects the positions of blobs in the source image.                                                                    |
| FreeD Tracker | Receives camera tracking data from devices that support the FreeD protocol.                                            |
| LiDAR         | Receives range data from LiDAR devices.                                                                                |
| Mo-Sys F4     | Receives camera tracking data from devices that support the Mo-Sys F4 protocol.                                        |
| RTTrP Tracker | Receives tracked motion data from devices that support Real Time Tracking Protocol (RTTrP), such as BlackTrax devices. |

## User Controls

|              |                                                                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Button       | Creates a custom button control that executes a trigger on a button click.                                                                                         |
| Checkbox     | Creates a custom checkbox control that executes On and Off triggers on a checkbox state change and outputs a boolean value corresponding to the checkbox status.   |
| Color Picker | Creates a custom color picker control that outputs a vec3 value of the selected color. For convenience, a color HEX value is displayed in the color picker.        |
| Combo Box    | Creates a user control that exposes the selected combo box parameter of a specified node that is currently added to the node graph and has this type of parameter. |
| Float        | Creates an input field for double-precision floating-point numbers.                                                                                                |
| GUI Panel    | Allows adding, arranging, or modifying the user interface controls in the panel layout that can be customized using the visual editor.                             |
| Int          | Creates an input field for integer numbers.                                                                                                                        |
| Label        | Creates a custom label in the user controls layout.                                                                                                                |
| Slider       | Creates a custom slider control.                                                                                                                                   |
| Switch       | Creates a custom control for switching links in the node graph.                                                                                                    |
| Text Value   | Creates a custom text field or text area control.                                                                                                                  |

## Utility

|                     |                                                                                                                                                                                                                             |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Action to Bool      | Sets the value of an output boolean parameter to _true_ when an On trigger is executed and to _false_ when an Off trigger is executed.                                                                                      |
| Action to Float     | Converts On and Off triggers into 1.0 and 0.0 floating-point numbers, respectively.                                                                                                                                         |
| Bool to Action      | Executes On and Off triggers when an input boolean parameter changes its value.                                                                                                                                             |
| Bool to Float       | Converts a boolean value into a floating-point number (_true_ to 1.0 and _false_ to 0.0).                                                                                                                                   |
| Bool to Int         | Converts a boolean value into an integer number (_true_ to 1 and _false_ to 0).                                                                                                                                             |
| CHOP Input          | Creates a custom CHOP parameter for use with the **Touch Engine** node.                                                                                                                                                     |
| CHOP Output         | Exposes a CHOP parameter from the **Touch Engine** node.                                                                                                                                                                    |
| Combo to Int        | Returns an integer number corresponding to the index number of the value selected in a combo box.                                                                                                                           |
| Euler to Quaternion | Converts Euler rotation angles into a quaternion.                                                                                                                                                                           |
| Equal String        | Compares two string inputs and outputs whether they are equal.                                                                                                                                                              |
| Float Array Split   | Extracts floating-point numbers from a floating-point array.                                                                                                                                                                |
| Float Array         | Creates a floating-point array from floating-point numbers.                                                                                                                                                                 |
| Float Matrix Split  | Extracts floating-point numbers from a floating-point matrix.                                                                                                                                                               |
| Float Matrix        | Creates a floating-point matrix from floating-point numbers.                                                                                                                                                                |
| Float to Action     | Executes an Off trigger when an incoming floating-point number value is changed to zero and executes an On trigger when an incoming floating-point number value is changed from zero to any other value.                    |
| Float to Bool       | Changes a boolean value to _false_ when an incoming floating-point number value is changed to zero. Changes a boolean value to _true_ when an incoming floating-point number value is changed from zero to any other value. |
| Float to Int        | Converts a floating-point number into an integer.                                                                                                                                                                           |
| Float to Timecode   | Converts a floating-point number into a timecode value.                                                                                                                                                                     |
| Format String       | Creates a formatted string from the specified values.                                                                                                                                                                       |
| Image Format        | Extracts image format information, including image size, number of channels, bits per channel, and whether it is stereoscopic.                                                                                              |
| Int Array Split     | Extracts integer numbers from an integer array.                                                                                                                                                                             |
| Int Array           | Creates an integer array from integer numbers.                                                                                                                                                                              |
| Int to Bool         | Returns a boolean value of _false_ when an incoming integer equals zero, and _true_ when it equals any other value.                                                                                                         |
| Int to Combo        | Converts an integer into an index number and can be used for selecting values of a linked combo box parameter.                                                                                                              |
| Int to Float        | Converts an integer into a floating-point number.                                                                                                                                                                           |
| IVec2 Split         | Converts an IVec2 value into two integers.                                                                                                                                                                                  |
| IVec2               | Converts two integers into an IVec2 value.                                                                                                                                                                                  |
| Join String         | Joins multiple strings using a specified separator.                                                                                                                                                                         |
| Mat4 Split          | Converts a Mat4 value into four Vec4 values.                                                                                                                                                                                |
| Mat4                | Converts four Vec4 values into a Mat4 value (composing a 4x4 matrix).                                                                                                                                                       |
| Matrix Decompose    | Decomposes a transformation matrix into position, scale, rotation, skew, and perspective values.                                                                                                                            |
| Quaternion to Euler | Converts a quaternion into Euler rotation angles.                                                                                                                                                                           |
| Quaternion to Vec4  | Converts a quaternion into a Vec4 value in the form (x, y, z, w).                                                                                                                                                           |
| Split String        | Splits a string using a specified separator.                                                                                                                                                                                |
| String Array Split  | Extracts strings from a string array.                                                                                                                                                                                       |
| String Array        | Creates a string array from strings.                                                                                                                                                                                        |
| String Table Split  | Extracts strings from a string matrix.                                                                                                                                                                                      |
| String Table        | Creates a string matrix from strings.                                                                                                                                                                                       |
| Timecode to Float   | Converts a timecode value into a floating-point number.                                                                                                                                                                     |
| Vec2 Array Split    | Extracts Vec2 values from a Vec2 array.                                                                                                                                                                                     |
| Vec2 Array          | Creates a Vec2 array from Vec2 values.                                                                                                                                                                                      |
| Vec2 Split          | Converts a Vec2 value into two floating-point numbers.                                                                                                                                                                      |
| Vec2                | Converts two floating-point numbers into a Vec2 value.                                                                                                                                                                      |
| Vec3 Array Split    | Extracts Vec3 values from a Vec3 array.                                                                                                                                                                                     |
| Vec3 Array          | Creates a Vec3 array from Vec3 values.                                                                                                                                                                                      |
| Vec3 Split          | Converts a Vec3 value into three floating-point numbers.                                                                                                                                                                    |
| Vec3                | Converts three floating-point numbers into a Vec3 value.                                                                                                                                                                    |
| Vec4 Split          | Converts a Vec4 value into four floating-point numbers.                                                                                                                                                                     |
| Vec4                | Converts four floating-point numbers into a Vec4 value.                                                                                                                                                                     |
| Vec4 to Quaternion  | Converts a Vec4 value in the form (x, y, z, w) into a quaternion.                                                                                                                                                           |

## Video Streaming

|                              |                                                                                    |
| ---------------------------- | ---------------------------------------------------------------------------------- |
| Datapath Capture             | Implements video input from Datapath Vision capture cards.                         |
| DeckLink Capture             | Implements video and audio input from DeckLink capture cards by Blackmagic Design. |
| DeckLink Output              | Outputs a video stream to DeckLink devices by Blackmagic Design.                   |
| Deltacast Capture            | Implements video input from Deltacast capture cards.                               |
| GenICam Capture              | Implements video input from GenICam-compliant cameras.                             |
| Magewell Capture             | Implements video and audio input from Magewell capture cards.                      |
| NDI In                       | Receives a video and audio stream from an NDI-compatible device.                   |
| NDI Out                      | Outputs video and audio as an NDI stream.                                          |
| Point Grey Camera            | Captures a video stream from Point Grey cameras.                                   |
| RTMP Out                     | Streams media to an RTMP media server.                                             |
| RTMP Server                  | Receives an RTMP video and audio stream.                                           |
| RTSP Player                  | Plays an RTSP video and audio stream from a remote source.                         |
| Spout In                     | Receives real-time video from Spout-enabled applications.                          |
| Spout Out                    | Sends real-time video to Spout-enabled applications.                               |
| SRT Out                      | Streams media using SRT.                                                           |
| Video Capture (AVFoundation) | Receives video streams from devices that support the AVFoundation API (macOS).     |
| Video Capture (DirectShow)   | Receives video streams from devices that support the DirectShow API (Windows).     |
| Video Capture (V4L)          | Receives video streams from devices that support the V4L API (Linux).              |
| Video Preview                | Displays a video preview in a custom-sized window.                                 |

## Warp and Transform

|                                                                |                                                                                                                                                                                                               |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bezier Warp](../warping-alignment/bezierwarp.md)              | Warps an image using Bezier curves, for example, for mapping a projection onto curved or partially curved surfaces.                                                                                           |
| [LED Stripes Mapper](../warping-alignment/ledstripesmapper.md) | Remaps media content into lines for output to an LED stripes controller.                                                                                                                                      |
| Lens Distortion                                                | Applies lens distortion correction and is used with the Camera and Calibrator nodes to calibrate panoramas using non-fisheye lenses.                                                                          |
| [Mask](../warping-alignment/mask.md)                           | Allows the creation of free-form vector shapes that can be applied over other images as masks.                                                                                                                |
| [Patch Replicator](../warping-alignment/patchreplicator.md)    | Creates instances of the target patch and distributes them based on the rules specified by the user.                                                                                                          |
| [Quad Grid](../warping-alignment/quadgrid.md)                  | Applies a perspective warp transformation to the individual planes of a mesh grid.                                                                                                                            |
| [Quad Warp](../warping-alignment/quadwarp.md)                  | Applies a perspective warp transformation to an image, for example, to compensate for the distortion caused by the projection of an off-axis image onto a planar surface (also known as keystone distortion). |
| [Rectangle](../warping-alignment/rectangle.md)                 | Applies planar rectangle-based translate/scale transformations to an image.                                                                                                                                   |
| Mesh Distort                                                   | Warps an image using smooth calculated deformations (**Affine**, **Similarity**, or **Rigid**), centered at the specified points.                                                                             |
| [Soft Edge Blender](../warping-alignment/softedgeblender.md)   | Generates blending maps for the soft edge blending of two or more overlapping images into a single seamless image.                                                                                            |
| [Transform 2D](../warping-alignment/transform2d.md)            | Generates a transformation matrix for the patches.                                                                                                                                                            |
| [Triangle Mesh](../warping-alignment/trianglemesh.md)          | Warps an image based on triangle mesh, for example, for mapping a projection onto objects that are composed of triangular shapes.                                                                             |
| [XGrid](../warping-alignment/xgrid.md)                         | Warps an image for mapping onto objects with repeating 3D pyramid-like shapes.                                                                                                                                |
