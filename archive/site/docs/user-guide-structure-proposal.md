# Screenberry User Guide structure proposal

Status: Proposed information architecture; not yet implemented in the published navigation.

Created: 2026-08-21

## Purpose

This document proposes a long-term structure for the Screenberry User Guide. It considers the current English navigation, the complete list of 282 current node types, existing guide coverage, and documentation patterns used by mature creative and technical products.

The structure has two simultaneous goals:

1. Help users find information by the task or functional domain they are working in.
2. Ensure every capability represented by a Screenberry node is explained somewhere outside the node reference list.

## Core separation

### Working with Nodes

**Working with Nodes** is limited to the mechanics of using the Node Graph:

- understanding nodes, parameters, links, actions, and data types;
- adding, deleting, selecting, copying, and grouping nodes;
- configuring parameters;
- creating and removing links;
- navigating and monitoring the graph;
- searching, arranging, profiling, and debugging graphs.

It must not become a container for every feature implemented by nodes. Mathematics, logic, image processing, automation, tracking, streaming, audio, and integrations are product capabilities and require their own functional sections.

### Functional User Guide

The functional sections explain what users can accomplish with related node families. Each family guide should explain:

- what the capability is for;
- when to use each related node;
- meaningful differences between nodes;
- how the nodes connect in representative graphs;
- prerequisites, limitations, and expected results;
- links to exact node reference entries.

### Node Reference

**Node Reference** remains a separate technical layer containing exact inputs, outputs, parameters, defaults, units, valid ranges, availability, aliases, status, and minimal examples.

A node is fully documented only when it has both:

- a functional or workflow home in the User Guide; and
- an exact entry in Node Reference.

## Industry direction

Adobe organizes creative documentation around durable functional domains such as projects, workspaces, media, effects, compositing, keying, color, animation, tracking, audio, automation, and output. Individual effects remain referenceable, but the User Guide teaches what those effects accomplish together.

Unity separates its workflow-oriented Manual from its exact Scripting API. Concepts such as graphics, audio, UI, input, profiling, and visual scripting are taught in the Manual; exact classes and members live in the API reference.

Screenberry should use the same general model without copying either product's sidebar literally.

Official examples:

- https://helpx.adobe.com/after-effects/using/keying-effects.html
- https://helpx.adobe.com/after-effects/using/expression-language.html
- https://helpx.adobe.com/uk/after-effects/using/workspaces-panels-viewers.html
- https://docs.unity3d.com/6000.1/Documentation/Manual/UnityManual.html
- https://docs.unity3d.com/6000.0/Documentation/Manual/com.unity.visualscripting.html
- https://docs.unity3d.com/6000.0/Documentation/ScriptReference/index.html

## Recommended top-level navigation

- **Introduction**
- **What's New**
- **Getting Started**
- **Projects & Workspaces**
- **Media & Playback**
- **Working with Nodes**
- **Automation & Show Control**
- **Logic, Math & Data**
- **User Controls & Interaction**
- **Visual Processing**
- **Audio**
- **Live Video & Streaming**
- **Outputs**
- **Mapping & Warping**
- **3D & Fulldome**
- **Calibration**
- **Tracking**
- **Control & Integration**
- **Monitoring & Reliability**
- **Node Reference**
- **Troubleshooting**
- **Reference**

The number of top-level domains is justified by Screenberry's breadth. If sidebar length becomes a usability problem, related domains can be presented under non-clickable navigation groups, but their conceptual boundaries should remain intact.

## Proposed navigation in detail

### Introduction

- What Screenberry Is
- Screenberry Server, Panel, and Configurator
- User Guide Conventions
- Terminology

### What's New

- What's New in the Current Release
- Current Release Notes
- Previous Release Notes
- Migration and Renamed Features

### Getting Started

- Overview
- Platform Support
- Hardware Requirements
- Licensing
- Software Installation
- Tour the Server and Panel
- Run Your First Project

### Projects & Workspaces

- Create, Open, Save, and Close Projects
- Work with Panel Workspaces and Widgets
- Organize Graphs with Comments and Groups
- Use Shared Groups
- Undo and Undo History
- Autosave, Backups, and Recovery
- Collect and Transfer Projects
- Synchronize Content
- Configure Hot Backup
- Initialize a Project at Startup

Related nodes: **Comment Area**, **Group**, **Shared Group**, **Content Sync**, **Hot Backup**, **On Startup**, **Server Control**.

### Media & Playback

- Media Library Overview
- Add and Organize Media
- Manage Media Folders
- Upload and Rescan Media
- Convert Media to RVA
- Use Screenberry Media Encoder
- Supported Media Formats
- Media Sources and Generated Content
  - Image Files
  - Solid Colors and Gradients
  - Test Patterns
  - Text Images
  - Web Content
- Media Player
- Playlists
- Timelines
- Matrix Playlists
- Control Playback from the Node Graph
- React to Playback Events
- Randomize Playlist Content
- Notch Playback
- Touch Engine

Related nodes: **Image File**, **Gradient**, **Solid Color**, **Test Pattern**, **Text Image**, **Web View**, **Media Player**, **Play Item**, **Media Player Action**, **On Item Started**, **On Item Finished**, **Playlist Randomizer**, **Notch Playback**, **Touch Engine**.

### Working with Nodes

- Node Graph Overview
- Understand Nodes and Parameters
- Understand Link and Data Types
- Add and Manage Nodes
- Configure Parameters
- Link Nodes
- Copy, Paste, and Reuse Nodes
- Group and Organize Graphs
- Navigate the Node Graph
- Monitor Nodes and Links
- Search and Automatically Arrange Nodes
- Profile and Debug a Graph

This section explains graph operation only. Domain functionality is documented in the sections below.

### Automation & Show Control

- Understand Actions, Triggers, State, and Events
- Delay, Toggle, Filter, and Gate Actions
- Schedule Events
- Run Actions at Startup
- React to Value Changes
- Trigger Actions When Playback Starts or Finishes
- Control Media Player Items
- Control Timeline Markers
- Create and Recall Presets
- Generate Repeating Frame-Based Events
- Run JavaScript
- Run External Processes
- Build a Complete Show-Control Graph

Related nodes: **Action Delay**, **Action Toggle**, **Event Filter**, **Event Scheduler**, **Gate**, **On Startup**, **On Value Change**, **On Item Started**, **On Item Finished**, **Media Player Action**, **Play Item**, **Playlist Randomizer**, **Timeline Marker**, **Preset**, **Ticker**, **Script**, **System Exec**.

### Logic, Math & Data

- Understand Values and Data Types
- Arithmetic
  - Add Values
  - Subtract Values
  - Multiply Values
  - Divide Values
- Find Minimum and Maximum Values
- Compare Values
- Test Equality
- Work with Boolean Logic
- Test Ranges and Thresholds
- Round and Convert Numeric Values
- Mix, Ease, and Smooth Values
- Build PID and Simulated Control Systems
- Evaluate Expressions
- Plot Values with a Line Graph
- Convert Actions to Values and Values to Actions
- Create and Split Vectors
- Work with Matrices
- Convert Euler Angles and Quaternions
- Create and Split Arrays
- Create and Split Matrices and String Tables
- Format, Join, Split, and Compare Strings
- Convert Timecode and Numeric Values
- Inspect Image Formats in a Graph

#### Arithmetic node families

- Add: **Add Float**, **Add Int**, **Add IVec2**, **Add Vec2**, **Add Vec3**, **Add Vec4**
- Subtract: **Subtract Float**, **Subtract Int**, **Subtract IVec2**, **Subtract Vec2**, **Subtract Vec3**, **Subtract Vec4**
- Multiply: **Multiply Float**, **Multiply Int**, **Multiply IVec2**, **Multiply Vec2**, **Multiply Vec3**, **Multiply Vec4**
- Divide: **Divide Float**, **Divide Int**, **Divide IVec2**, **Divide Vec2**, **Divide Vec3**, **Divide Vec4**
- Minimum: **Min Float**, **Min Int**, **Min IVec2**, **Min Vec2**, **Min Vec3**, **Min Vec4**
- Maximum: **Max Float**, **Max Int**, **Max IVec2**, **Max Vec2**, **Max Vec3**, **Max Vec4**

#### Comparison and control nodes

**Compare Float**, **Equal Float**, **Equal Int**, **Equal IVec2**, **Equal Vec2**, **Equal Vec3**, **Equal Vec4**, **Equal String**, **Logic Operation**, **Float In Range**, **Threshold Float**, **Round**, **Float Mix**, **Vec2 Mix**, **Vec3 Mix**, **Vec4 Mix**, **Easing Function**, **Smooth Transition**, **PID Controller**, **Simulated System**, **Expression**, **Line Graph**.

#### Conversion and state nodes

**Action to Bool**, **Action to Float**, **Bool to Action**, **Bool to Float**, **Bool to Int**, **Float to Action**, **Float to Bool**, **Float to Int**, **Int to Bool**, **Int to Combo**, **Int to Float**, **Combo to Int**, **Float to Timecode**, **Timecode to Float**.

#### Vector, matrix, and rotation nodes

**IVec2**, **IVec2 Split**, **Vec2**, **Vec2 Split**, **Vec3**, **Vec3 Split**, **Vec4**, **Vec4 Split**, **Mat4**, **Mat4 Split**, **Matrix Decompose**, **Euler to Quaternion**, **Quaternion to Euler**, **Quaternion to Vec4**, **Vec4 to Quaternion**.

#### Collection and string nodes

**Float Array**, **Float Array Split**, **Int Array**, **Int Array Split**, **Vec2 Array**, **Vec2 Array Split**, **Vec3 Array**, **Vec3 Array Split**, **String Array**, **String Array Split**, **Float Matrix**, **Float Matrix Split**, **String Table**, **String Table Split**, **Format String**, **Join String**, **Split String**, **Equal String**, **Image Format**.

This section must include reusable graph recipes, not only descriptions. Examples should include scaling a control value, constraining a range, comparing a sensor value, smoothing movement, formatting a protocol message, decomposing a transformation, and converting state changes into actions.

### User Controls & Interaction

- Build a Custom GUI Panel
- Add Buttons and Toggle Controls
- Add Numeric Controls
- Add Text and Label Controls
- Select Parameters and Colors
- Switch Graph Connections
- Open and Operate User Control Widgets
- Receive Keyboard and Mouse Input
- Use Joysticks and Presentation Clickers
- Build an Operator-Control Workspace
- Build a Simple Interactive Installation

Related nodes: **GUI Panel**, **Button**, **Checkbox**, **Color Picker**, **Combo Box**, **Float**, **Int**, **Label**, **Slider**, **Switch**, **Text Value**, **Keyboard**, **Mouse**, **Joystick**, **Presentation Clicker**.

### Visual Processing

- Understand the Image-Processing Pipeline
- Inspect Image Formats, Channels, and Bit Depth
- Work with Alpha and Masks
- Extract Channels and Split Images
- Composite and Blend Images
- Key Green-Screen Content
- Correct Image Color
- Manage Color Spaces with OpenColorIO and ACES
- Apply Gamma and Calibration LUTs
- Apply Morphological Filters
- Use ISF Effects
- Create Custom GLSL Shaders
- Buffer, Hold, and Delay Images
- Save Processed Images
- Prepare Stereoscopic Images
- Remap Images with UV Data
- Move Images Between GPUs

Related nodes: **Alpha Mask**, **Chroma Key**, **Color Correction**, **Color Space Transform**, **Dilate**, **Erode**, **Extract Channel**, **FX Stack**, **Gamma Correction File**, **GLSL Shader**, **Image Blending**, **Image Buffer**, **Image Saver**, **Image Split**, **Invert**, **Lighten**, **Merge to Stereoscopic**, **Multi GPU Image**, **Multiply**, **Threshold**, **UV Remap**, **Image Format**, **Render Target**.

### Audio

- Understand Audio Signal Flow
- Configure Audio Input and Output Devices
- Mix Audio Sources
- Remix Individual Channels
- Delay Audio for Synchronization
- Analyze Audio Spectra
- Monitor Per-Channel Audio Levels
- Generate Test Tones
- Generate DTMF Signals
- Use VST Effects
- Route Media Player and AUX Audio
- Troubleshoot Missing, Distorted, or Unsynchronized Audio

Related nodes: **Audio In**, **Audio Out**, **Audio Mixer**, **Audio Channel Mixer**, **Audio Delay**, **Audio Analyzer**, **Audio Meter**, **Tone Generator**, **DTMF Generator**, **VST Effect**.

### Live Video & Streaming

- Choose a Capture or Streaming Method
- Capture Datapath Video
- Capture DeckLink Video and Audio
- Capture Deltacast Video
- Capture GenICam Cameras
- Capture Magewell Video and Audio
- Capture through AVFoundation
- Capture through DirectShow
- Capture through V4L
- Receive NDI
- Receive RTMP
- Play RTSP Streams
- Receive Spout Textures
- Send NDI
- Stream RTMP
- Stream SRT
- Send Spout Textures
- Output through DeckLink
- Preview Live Video
- Troubleshoot Formats, Drivers, Discovery, Latency, and Firewalls

Related nodes: **Datapath Capture**, **DeckLink Capture**, **Deltacast Capture**, **GenICam Capture**, **Magewell Capture**, **Video Capture (AVFoundation)**, **Video Capture (DirectShow)**, **Video Capture (V4L)**, **NDI In**, **RTMP Server**, **RTSP Player**, **Spout In**, **NDI Out**, **RTMP Out**, **SRT Out**, **Spout Out**, **DeckLink Output**, **Video Preview**.

### Outputs

- Understand the Output Pipeline
- Configure Canvas Output
- Add and Configure Displays
- Route Content with Display Output
- Render Off-Screen Images
- Configure Displays Control
- Configure Mosaic, EDID, and Synchronization
- Preview and Test Outputs
- Configure DeckLink Output
- Choose between Display, Hardware, Network, and Texture-Sharing Outputs

Related nodes: **Canvas**, **Display**, **Display Output**, **Render Target**, **Video Preview**, **DeckLink Output**, **NDI Out**, **RTMP Out**, **SRT Out**, **Spout Out**, **Test Pattern**, **System Info**.

### Mapping & Warping

- Mapping Overview
- Patch Editor
- Position and Scale with Rectangle
- Generate 2D Transformations
- Correct Perspective with Quad Warp
- Warp Multi-Plane Grids
- Warp Curved Surfaces with Bezier Warp
- Map Triangle Meshes
- Map Repeating Pyramid Surfaces with XGrid
- Deform Images with Mesh Distort
- Create Free-Form Masks
- Replicate Patches
- Blend Overlapping Outputs
- Map Content to LED Strips
- Correct Lens Distortion

Related nodes: **Rectangle**, **Transform 2D**, **Quad Warp**, **Quad Grid**, **Bezier Warp**, **Triangle Mesh**, **XGrid**, **Mesh Distort**, **Mask**, **Patch Replicator**, **Soft Edge Blender**, **LED Stripes Mapper**, **Lens Distortion**.

### 3D & Fulldome

- 3D Scene Overview
- Create and Navigate a 3D Scene
- Add 3D Primitives
- Import and Export 3D Models
- Combine 3D Objects
- Transform 3D Objects
- Configure 3D Cameras
- Configure Projectors
- Project Images onto 3D Objects
- Use VR Camera Input
- Understand Fulldome Image Formats
- Apply Dome Transform
- Map Planar Content to a Dome
- Map Latitude/Longitude Content to a Dome
- Remap Fisheye Content
- Correct Fisheye Lenses
- Map Content through a Spherical Mirror

Related nodes: **3D Scene**, **3D Primitive**, **3D Model File**, **3D Model Export**, **3D Combine**, **Transform 3D**, **3D Camera**, **Projector**, **Projection Mapper**, **VR Camera**, **Dome Transform**, **Planar to Dome**, **LatLong to Dome**, **Fisheye Remap**, **Fisheye Lens Correction**, **Spherical Mirror Warp**.

### Calibration

- Choose Manual or Automatic Calibration
- Build an Automatic-Calibration Graph
- Configure Calibrator Patches
- Blend Calibrator Patches
- Configure Digital Cameras
- Configure GenICam Cameras
- Simulate Calibration with a Virtual Camera
- Run and Review Calibration
- Import Calibration
- Export Calibration
- Apply Lens, UV, and Gamma Correction
- Troubleshoot Calibration

Related nodes: **Calibrator**, **CalibratorPatch**, **BlendCalibrators**, **Digital Camera**, **GenICam Camera**, **Virtual Camera**, **Calibration Import**, **Calibration Export**, **Lens Distortion**, **UV Remap**, **Gamma Correction File**.

### Tracking

- Tracking Overview
- Prepare a Background Mask
- Track Blobs in an Image
- Receive FreeD Camera Tracking
- Receive Mo-Sys F4 Tracking
- Receive RTTrP and BlackTrax Tracking
- Understand Tracking Coordinates
- Drive 3D Cameras and Objects from Tracking Data
- Use Tracking in Interactive Installations
- Troubleshoot Noise, Drift, Coordinates, and Network Data

Related nodes: **Accumulator**, **BlobTracker**, **FreeD Tracker**, **Mo-Sys F4**, **RTTrP Tracker**.

### Control & Integration

- Choose a Control Protocol
- Screenberry JSON API
- Host Web Controls
- Receive HTTP and Upload Media
- Send HTTP Requests
- Receive and Send TCP
- Receive and Send UDP
- Receive and Send OSC
- Connect to MQTT
- Work with MIDI Devices and Files
- Receive and Send DMX through Art-Net and sACN
- Map Images to DMX Fixtures
- Receive and Send Art-Net Timecode
- Communicate through Serial Ports
- Read Serial Relays and Send PPM
- Control Barco Projectors
- Control PJLink Devices
- Control Projectors through Serial Ports
- Control Samsung Displays through MDC
- Wake Servers over the Network
- Integrate TouchDesigner
- Integrate Notch

Related nodes: **Web Server**, **HTTP Listener**, **HTTP Request**, **TCP Listener**, **TCP Sender**, **UDP Listener**, **UDP Sender**, **OSC Listener**, **OSC Sender**, **MQTT Client**, **MIDI In**, **MIDI Out**, **MIDI Player**, **MIDI Controller**, **DMX Receiver**, **DMX Sender**, **DMX Pixel Mapper**, **Art-Net Timecode Listener**, **Art-Net Timecode Sender**, **Serial Port Input**, **Serial Port Output**, **Serial Relay Input**, **SerialPPM**, **Barco Control**, **PJLink**, **Projectors Control (Serial Port)**, **Samsung MDC Protocol**, **Wake on LAN**, **Touch Engine**, **Notch Playback**.

### Timecode and Synchronization

Timecode is a named subsection of **Control & Integration** and is cross-linked from Playback, Automation, and Audio.

- Understand Timecode and Frame Rates
- Generate Internal Timecode
- Decode and Encode LTC
- Decode MIDI Timecode
- Display Timecode
- Trigger Cue Points from Timecode
- Receive and Send Art-Net Timecode
- Apply Timecode Offsets
- Troubleshoot Drift and Frame-Rate Mismatches

Related nodes: **Timecode**, **LTC Decoder**, **LTC Encoder**, **MTC Decoder**, **Timecode Display**, **Timecode Events**, **Art-Net Timecode Listener**, **Art-Net Timecode Sender**, **Float to Timecode**, **Timecode to Float**.

### Monitoring & Reliability

- Monitor CPU, GPU, Frame Rate, and Disk Activity
- Profile Node Processing
- Plot Diagnostic Values
- Monitor Audio and Video
- Diagnose Network Listeners
- Diagnose Serial Communication
- Inspect External Process Results
- Configure Hot Backup
- Synchronize Content
- Build a Predictable Startup Sequence
- Recover from Project, Output, Device, or Integration Failures

Related nodes: **System Info**, **Line Graph**, **Audio Meter**, **Video Preview**, **System Exec**, listener nodes, **Hot Backup**, **Content Sync**, **On Startup**, **Preset**, **Server Control**, **Wake on LAN**.

### Node Reference

- All Nodes
- 3D
- Audio
- Auto-Calibration
- Automation
- Communication
- Device Control
- Fulldome
- General
- Human Interface Devices
- Image Processing
- Math
- Media Sources
- Timecode
- Tracking
- User Controls
- Utility
- Video Streaming
- Warp and Transform

Each node reference must contain:

- current name and legacy aliases;
- concise purpose;
- version, platform, and license availability;
- experimental or deprecated status;
- inputs and outputs with types;
- parameters, defaults, valid ranges, and units;
- errors, constraints, and side effects;
- minimal valid example;
- links to functional guides and workflows.

### Troubleshooting

- Screenberry Does Not Start or Connect
- Media Does Not Upload or Play
- Audio Is Missing, Distorted, or Unsynchronized
- Live Video Cannot Be Captured or Received
- Output Is Missing, Incorrect, or Unsynchronized
- Playback or Node Processing Is Too Slow
- Mapping or Calibration Is Incorrect
- Tracking Data Is Missing or Unstable
- An Integration Cannot Connect or Send Commands
- Automation Does Not Trigger as Expected

### Reference

- Keyboard Shortcuts
- System Requirements
- Supported Media Formats
- Ports and Network Requirements
- Screenberry Terminology
- Data and Link Types
- Feature Availability by Platform and License
- Current and Legacy Node Names

## Complete category coverage

The authoritative CSV currently contains 282 nodes in 18 categories. Each category has both a functional User Guide destination and a Node Reference destination.

| CSV category | Count | Primary functional section |
| --- | ---: | --- |
| 3D | 10 | 3D & Fulldome |
| Audio | 10 | Audio |
| Auto-Calibration | 8 | Calibration |
| Automation | 21 | Automation & Show Control |
| Communication | 19 | Control & Integration |
| Device Control | 6 | Control & Integration |
| Fulldome | 6 | 3D & Fulldome |
| General | 10 | Projects & Workspaces, Outputs, Monitoring & Reliability |
| Human Interface Devices | 4 | User Controls & Interaction |
| Image Processing | 21 | Visual Processing |
| Math | 57 | Logic, Math & Data |
| Media Sources | 9 | Media & Playback |
| Timecode | 6 | Control & Integration / Timecode and Synchronization |
| Tracking | 5 | Tracking |
| User Controls | 11 | User Controls & Interaction |
| Utility | 48 | Logic, Math & Data |
| Video Streaming | 18 | Live Video & Streaming |
| Warp and Transform | 13 | Mapping & Warping |

## Coverage rule and validation

Add structured `relatedNodes` metadata, or an equivalent content manifest, to every non-reference functional page. A validation script should compare that metadata with the authoritative node export.

A current node is considered covered only when:

1. it appears by exact current name in at least one non-reference functional page;
2. that page explains what the node or its family enables and when to use it;
3. the page contains or links to a representative graph/workflow;
4. a complete Node Reference entry exists;
5. the functional page and reference entry link to each other;
6. legacy names redirect to the current reference or migration note.

The documentation build should fail or warn when a current node lacks either functional coverage or reference coverage.

## Implementation sequence

### Phase 1 — navigation and metadata foundation

1. Keep **Working with Nodes** limited to Node Graph mechanics.
2. Add **Automation & Show Control**, **Logic, Math & Data**, **User Controls & Interaction**, **Visual Processing**, **Live Video & Streaming**, and **Tracking**.
3. Rename **Node References** to **Node Reference**.
4. Add functional landing pages and structured node-coverage metadata.
5. Preserve current URLs and add permanent redirects for moved pages.

### Phase 2 — first functional guides

1. Logic, Math & Data fundamentals and graph recipes
2. Automation, actions, scheduling, and playback events
3. Visual-processing pipeline, compositing, keying, and color management
4. Live capture and streaming inputs/outputs
5. User controls and local input devices
6. DMX lighting and Art-Net timecode
7. Tracking into 3D and interactive content
8. Monitoring, startup, backup, and recovery

### Phase 3 — complete coverage

1. Add or revise the remaining functional-family guides.
2. Create structured reference records for all current nodes.
3. Add bidirectional links between workflows and reference.
4. Run automated coverage validation against the authoritative node export.

### Phase 4 — localization and quality

1. Keep the English and Japanese trees structurally aligned.
2. Add version, platform, license, and status metadata.
3. Add symptom-led troubleshooting.
4. Use search and support data to decide which family-covered nodes also require dedicated pages.

## Recommended decision

Adopt this structure as the long-term direction. It retains the stronger workflow-oriented version of the proposal while correcting the boundary around **Working with Nodes**.

Node Graph mechanics remain in **Working with Nodes**. Mathematics and data processing live in **Logic, Math & Data**. Show behavior lives in **Automation & Show Control**. Operator-facing controls live in **User Controls & Interaction**. Image processing, streaming, tracking, and other node capabilities receive equally explicit functional homes.

This structure makes all node functionality teachable and discoverable without turning the User Guide into a duplicate of Node Reference.
