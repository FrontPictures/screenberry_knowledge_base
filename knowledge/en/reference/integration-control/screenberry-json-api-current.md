---
id: guide.integration-control.screenberry-json-api
variant_id: guide.integration-control.screenberry-json-api.owner-approved-2026-11-24
title: Screenberry JSON API - Command Reference and Integration Guide
language: en
kind: reference
status: in_review
owner: Andre
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: owner-supplied-guide-revision
    path: docs/json-api-update-2026-11-24.md
    sha256: 5c779b0b1aa200b9957a793b1c8d44b5e7e386c5cedb359728fd91177268ea41
    scope: Complete revised reference and separate source-review description supplied by Andre; publication explicitly requested. No runtime verification or confirmed release applicability.
aliases: []
related: []
source:
  path: content/en/integration-control/screenberry-json-api.mdx
  canonical_url: https://help.screenberry.com/en/integration-control/screenberry-json-api
  sha256: d839345393bc2dff3f88245c30ee768059b60cb2e648280f6d2d80fac1fed74c
presentation:
  mode: text-only
  illustrations: null
  visual_information_review: not-applicable
review:
  publication_approved_by: Andre
  publication_approved_on: 2026-11-24
  runtime_verified: false
  applicability: "Unspecified: supplied revision differs from the available local source snapshot; do not infer 3.4 or 3.5 applicability."
  supersedes_for_current_guide: guide.integration-control.screenberry-json-api.imported-current-guide
---

# Screenberry JSON API

The **Screenberry JSON API** allows external applications to communicate with the server to:

- Retrieve and set parameter values

- Fetch nodes with parameters and links

- Access **Media Players**, playlists, and **Media Library** items

- Modify playlist, timeline, and matrix items

- Control playback

All requests are JSON objects with a case-sensitive `"cmd"` string. Successful replies are serialized JSON objects. HTTP and TCP command-processing errors can be plain text; clients must not assume every response is valid JSON.

## Listener Nodes

The following nodes support JSON API communication:

- **HTTP Listener**

- **TCP Listener**

- **Serial Input**

- **UDP Listener**

- **OSC Listener**

The **Screenberry API** parameter is enabled by default on listener nodes. You can toggle it in the node’s settings panel (**Screenberry API**: **Enabled**/**Disabled**) if needed.

Each JSON request must include a `"cmd"` field with the command name. Additional fields depend on the command used.

## HTTP Listener

Supports GET and POST requests.

Returns a JSON response string.

**Example — Get Media Players list:**

```json
{
  "cmd": "GetMediaPlayers"
}
```

If the server is local (127.0.0.1) and the **HTTP Listener** port is 8080:

**GET request:**

```text
http://127.0.0.1:8080/request?command={"cmd":"GetMediaPlayers"}
```

**POST request:**

Send to /command with the JSON object in the request body:

```text
http://127.0.0.1:8080/command
```

## TCP Listener

Accepts JSON messages separated by the delimiter configured on the **TCP Listener**. The default is `\r\n` (carriage return followed by line feed).

Ends each response with the same configured delimiter. Configure the client to use it for both sending requests and reading responses.

TCP replies use command-specific fields. Many read commands include a response `"cmd"` name and selected request fields; successful action commands usually include `"request"`. These are not unique request IDs.

> **Note:** Use the default `\r\n` delimiter. Delimiters of other lengths can cause parsing errors, especially when several requests arrive together.

## Serial Input

Receives JSON commands over a serial port.

By default, terminate each JSON request with `\r` (carriage return).

Receive-message separation is configurable: by a separator, by start and end symbols, or by a timeout. Configure the sending device to match the selected mode.

JSON responses end with `\r`. Do not wait for `\r\n` when reading a response.

## UDP Listener

Receives JSON objects via UDP.

To receive a reply, the request must include `"replyIp"` and `"replyPort"`.

Replies use command-specific response names and selected echoed fields, rather than unique request IDs. Not every command adds these fields.

**Example — Get Media Players list with reply address:**

```json
{
  "cmd": "GetMediaPlayers",
  "replyIp": "127.0.0.1",
  "replyPort": 8081
}
```

## OSC Listener

Send the OSC message to the address `/jsonApi`.

Supply the serialized JSON object as the first OSC argument, with the OSC string type. Additional arguments are ignored.

To request a reply, include `"replyIp"` and `"replyPort"` inside the JSON object.

**Example — Get Media Players list with a reply address:**

OSC address: `/jsonApi`

OSC type tag: `,s`

**First argument (string):**

```json
{
  "cmd": "GetMediaPlayers",
  "replyIp": "127.0.0.1",
  "replyPort": 8081
}
```

Send the OSC packet to the IP address and listening port configured for the **OSC Listener**. The reply address in this example is suitable only when the client runs on the server computer; for a remote client, supply that client’s reachable IP address and reply port.

## Listener Quick Reference

| Listener | Protocol | Message Format | Delimiter / Rules | Response Behavior | Special Notes |
| --- | --- | --- | --- | --- | --- |
| **HTTP Listener** | HTTP (GET / POST) | JSON object | N/A | Returns JSON string in response | For GET requests, JSON must be URL-encoded. POST accepts JSON in body. |
| **TCP Listener** | TCP stream | JSON object | Configured delimiter; default `\r\n`. Use the default; delimiters of other lengths can cause parsing errors. | Command-specific JSON reply; often includes `"cmd"` and selected request fields; ends with the configured delimiter | Supports multiple requests/responses in the same stream. |
| **Serial Input** | Serial port | JSON object | Configurable receive-message separation; default `\r` | JSON responses end with `\r` | Match the sending device to the configured receive mode. |
| **UDP Listener** | UDP datagram | JSON object | Entire JSON object in one datagram | Command-specific JSON reply; supply `"replyIp"` and `"replyPort"` to receive it | Lightweight but requires reply address fields in request. |
| **OSC Listener** | OSC | Serialized JSON in the first argument, with OSC string type | OSC address must be `/jsonApi` | Requires `"replyIp"` and `"replyPort"` in the JSON request for a reply | Additional arguments are ignored. |

## Reply Conventions

The reply examples distinguish HTTP from listeners that request additional information (TCP, UDP, and OSC). Most action commands return `{"cmd":"Success"}` and add request when additional information is enabled. Read-command response names are command-specific. RenameNode, AutoLayoutNodes, ForwardParameter, and GetLicenses return their data directly without an additional `cmd` or request wrapper. There is no universal request-ID field.

Some mutations are dispatched to the server's message queue. A Success reply can acknowledge dispatch before the resulting state is applied; it is not a general completion guarantee.

Additional-information response names include NodeGraph (GetNodeGraph), NodeParameters (GetNodeParameters), NodeTypes (GetNodeTypes), PlaylistItems (GetPlaylistItems), TimelineMarkers (GetTimelineMarkers), UploadingItems (GetUploadingItems), MediaFolder (GetMediaFolder), WorkFolders (GetWorkFolders), and MediaItem (GetMediaItem). GetPlaylistItems also echoes `mediaPlayer`; GetTimelineMarkers echoes `mediaPlayer` and the supplied playlist selector; GetMediaFolder echoes path; GetMediaItem echoes `itemPath`. HTTP omits these added fields.

## Node Graph Commands

### GetParameter

Retrieves the value of a node parameter in the **Node Graph**.

**Parameters:**

node — name of the node. Can be:

Full path: `"Root/Media Player"` or `"Root/Group/Media Player"`

Partial path (without `"Root/"`): `"Media Player"` or `"Group/Media Player"`

(This rule applies to all commands that use node name fields.)

parameter — name of the parameter. Use only the parameter name, even if it belongs to a group.

**Request:**

```json
{
  "cmd": "GetParameter",
  "node": "Audio Out",
  "parameter": "Volume"
}
```

**HTTP Response:**

```json
{
  "value": 1.0
}
```

**TCP/UDP Response:**

```json
{
  "cmd": "ParameterValue",
  "node": "Root/Audio Out",
  "parameter": "Volume",
  "value": 1.0
}
```

### SetParameter

Sets the value of a node parameter.

```json
{
  "cmd": "SetParameter",
  "node": "Slider",
  "parameter": "Value",
  "value": 0.75
}
```

### AddNode

Adds a node to the **Node Graph**.

```json
{
  "cmd": "AddNode",
  "nodePath": "My Media Player Node",
  "nodeType": "Media Player",
  "position": [
    11.2,
    12.5
  ]
}
```

The optional position field contains the node coordinates. If it is omitted, the node is placed to the right of all existing nodes.

### RemoveNode

Removes a node from the **Node Graph**.

```json
{
  "cmd": "RemoveNode",
  "node": "Slider"
}
```

### Link

Creates a link between two node parameters.

```json
{
  "cmd": "Link",
  "sourceNode": "Float",
  "sourceParameter": "Out",
  "sinkNode": "Slider",
  "sinkParameter": "External Control"
}
```

### Unlink

Removes a link between two node parameters.

```json
{
  "cmd": "Unlink",
  "sourceNode": "Float",
  "sourceParameter": "Out",
  "sinkNode": "Slider",
  "sinkParameter": "External Control"
}
```

### GetNodeGraph

Returns the nodes and links in the **Node Graph**.

```json
{
  "cmd": "GetNodeGraph"
}
```

**HTTP Response:**

```json
{
  "nodes": [
    {
      "path": "Root/HTTP Listener",
      "type": "HTTP Listener"
    },
    {
      "path": "Root/Solid Color",
      "type": "Solid Color"
    },
    {
      "path": "Root/Canvas",
      "type": "Canvas"
    }
  ],
  "links": [
    {
      "sourceNode": "Root/Solid Color",
      "sourceParam": "Image",
      "sinkNode": "Root/Canvas",
      "sinkParam": "Background Image"
    }
  ]
}
```

### GetNodeParameters

Returns the parameters of a node, including each parameter’s direction, type, pin visibility, and value where applicable.

```json
{
  "cmd": "GetNodeParameters",
  "node": "Media Player"
}
```

**HTTP Response (abbreviated):**

```json
{
  "params": [
    {
      "name": "Enabled",
      "direction": "input",
      "type": "Bool",
      "pin": true,
      "value": true
    },
    {
      "name": "Image Size",
      "direction": "input",
      "type": "IVec2",
      "pin": false,
      "value": [
        1920,
        1080
      ]
    }
  ]
}
```

### GetNodeTypes

Returns a flat list of registered node types. Each entry contains its type and category; the response is not grouped into category arrays.

```json
{
  "cmd": "GetNodeTypes"
}
```

**HTTP Response (abbreviated):**

```json
{
  "types": [
    {
      "type": "3D Camera",
      "category": "3D"
    },
    {
      "type": "3D Combine",
      "category": "3D"
    },
    {
      "type": "3D Model Export",
      "category": "3D"
    },
    {
      "type": "3D Model File",
      "category": "3D"
    }
  ]
}
```

### RenameNode

Renames an existing node. node is the current path; name is the new leaf name, not a path. name must be non-empty and must not contain '/'. Root cannot be renamed; a name already used by a sibling fails. Built-in **Inputs/Outputs** nodes cannot be renamed, and reserved names are rejected. Renaming a **Group** also changes its children's paths; use the returned path in subsequent requests.

```json
{
  "cmd": "RenameNode",
  "node": "Root/Slider",
  "name": "Master Slider"
}
```

**Response (all listeners):**

```json
{
  "node": "Root/Master Slider"
}
```

### GetCategories

Returns the sorted, unique category names from the registered node types. No fields other than `cmd` are required.

```json
{
  "cmd": "GetCategories"
}
```

HTTP response (abbreviated; available categories depend on the server):

```json
{
  "categories": [
    "3D",
    "Audio"
  ]
}
```

TCP/UDP replies also include `"cmd"`: `"Categories"`.

### AutoLayoutNodes

Automatically arranges the nodes listed in the required nodes array. Each entry must be an existing node path string. Nodes are arranged independently within each parent group according to their links. A selected subset is placed to the right of unselected siblings; arranging all nodes in a group preserves the subset's bounding-box origin. An empty array returns an arranged count of 0.

```json
{
  "cmd": "AutoLayoutNodes",
  "nodes": [
    "Root/Float",
    "Root/Slider"
  ]
}
```

**Response (all listeners):**

```json
{
  "arranged": 2
}
```

### ForwardParameter

Forwards a node input or output to its immediate parent **Group** and creates the internal connection. Required: node and parameter. The node must be inside a non-root **Group**. Optional name specifies the forwarded parameter name; omit it or use an empty string to generate a unique name. An explicit name must be unused in the **Group** and its **Inputs/Outputs** node and must not contain '/'.

```json
{
  "cmd": "ForwardParameter",
  "node": "Root/Controls/Slider",
  "parameter": "Value",
  "name": "Level"
}
```

**Response (all listeners):**

```json
{
  "group": "Root/Controls",
  "parameter": "Level",
  "direction": "input",
  "linkedTo": "Root/Controls/Slider.Value"
}
```

direction is input or output. The response does not add `cmd` or request.

### RemoveForwardedParameter

Removes an existing forwarded **Group** parameter. Required: group (a non-root **Group** path) and parameter (the forwarded name). Base parameters cannot be removed with this command.

```json
{
  "cmd": "RemoveForwardedParameter",
  "group": "Root/Controls",
  "parameter": "Level"
}
```

HTTP response: `{"cmd":"Success"}`. TCP/UDP success also includes the original request in request.

### RenameForwardedParameter

Renames an existing forwarded **Group** parameter. Required: group, parameter (current name), and name (new name). The new name must be non-empty, contain no '/', and be unused in the **Group** and its corresponding **Inputs/Outputs** node. Keeping the current name succeeds without a change.

```json
{
  "cmd": "RenameForwardedParameter",
  "group": "Root/Controls",
  "parameter": "Level",
  "name": "Master Level"
}
```

HTTP response: `{"cmd":"Success"}`. TCP/UDP success also includes request.

### ReorderForwardedParameter

Moves a forwarded parameter within the **Group**'s forwarded inputs or forwarded outputs. Required: group, parameter, and shift. shift must be a signed 32-bit JSON integer; negative moves earlier and positive moves later. The resulting index must stay within the same-direction forwarded list. Zero succeeds without a change.

```json
{
  "cmd": "ReorderForwardedParameter",
  "group": "Root/Controls",
  "parameter": "Master Level",
  "shift": -1
}
```

The example requires another forwarded input before Master Level.

HTTP response: `{"cmd":"Success"}`. TCP/UDP success also includes request.

## Media Player Commands

### GetMediaPlayers

Retrieves the list of **Media Players**.

**Request:**

```json
{
  "cmd": "GetMediaPlayers"
}
```

**HTTP Response:**

```json
{
  "mediaPlayers": [
    "Media Player",
    "Media Player 2"
  ]
}
```

**TCP/UDP Response:**

```json
{
  "cmd": "MediaPlayers",
  "mediaPlayers": [
    "Media Player",
    "Media Player 2"
  ]
}
```

### GetPlaylists

Retrieves the list of playlists for a **Media Player**.

**Parameters:**

`mediaPlayer` — name of the **Media Player**.

**Request (use a name or path returned by GetMediaPlayers):**

```json
{
  "cmd": "GetPlaylists",
  "mediaPlayer": "Media Player 1"
}
```

**HTTP Response:**

```json
{
  "playlists": [
    {
      "type": "Playlist",
      "name": "Playlist",
      "id": 2
    },
    {
      "type": "Timeline",
      "name": "Timeline1",
      "id": 3
    },
    {
      "type": "Matrix",
      "name": "Matrix1",
      "id": 4
    },
    {
      "type": "Playlist",
      "name": "folder1/subPlaylist",
      "id": 6
    }
  ]
}
```

**TCP/UDP Response:**

Includes additional fields `"cmd"` and `"mediaPlayer"`.

```json
{
  "cmd": "Playlists",
  "mediaPlayer": "Media Player 1",
  "playlists": [
    {
      "type": "Playlist",
      "name": "Playlist",
      "id": 2
    },
    {
      "type": "Timeline",
      "name": "Timeline1",
      "id": 3
    },
    {
      "type": "Matrix",
      "name": "Matrix1",
      "id": 4
    }
  ]
}
```

### GetMediaPlayerStatus

Retrieves the current status of a **Media Player**.

**Parameters:**

`mediaPlayer` — name of the **Media Player**.

**Request:**

```json
{
  "cmd": "GetMediaPlayerStatus",
  "mediaPlayer": "Media Player 1"
}
```

**HTTP Responses:**

**Stopped playlist:**

```json
{
  "playlistType": "Playlist",
  "playlistName": "Show",
  "state": "Stopped"
}
```

**Playlist playing:**

```json
{
  "playlistType": "Playlist",
  "playlistName": "Show",
  "state": "Playing",
  "itemIndex": 0,
  "itemName": "You",
  "itemId": 1,
  "position": 177.924
}
```

**Paused timeline:**

```json
{
  "playlistType": "Timeline",
  "playlistName": "Timeline1",
  "state": "Paused",
  "position": 47.0
}
```

**Matrix:**

```json
{
  "playlistType": "Matrix",
  "playlistName": "Matrix1",
  "rows": [
    {
      "rowName": "Output 1",
      "state": "Paused",
      "itemIndex": 0,
      "itemName": "You",
      "itemId": 1,
      "position": 2.627
    },
    {
      "rowName": "Output 2",
      "state": "Playing",
      "itemIndex": 1,
      "itemName": "clip2",
      "itemId": 2,
      "position": 3.837
    },
    {
      "rowName": "Output 3",
      "state": "Stopped"
    }
  ]
}
```

**TCP/UDP Response:**

Same as HTTP, but includes `"cmd"` and `"mediaPlayer"`.

```json
{
  "cmd": "MediaPlayerStatus",
  "mediaPlayer": "Media Player 1",
  "playlistType": "Playlist",
  "playlistName": "Show",
  "state": "Playing",
  "itemIndex": 0,
  "itemName": "You",
  "itemId": 1,
  "position": 177.924
}
```

If no playlist is selected, GetMediaPlayerStatus returns `"playlistType"`: null. Item fields are absent for stopped Playlist/Matrix playback. In a Matrix row status, `itemIndex` is the zero-based column of the playing item.

### GetPlaylistItems

Retrieves items from a playlist, timeline, or matrix.

> **Note:**

> Playlists can be addressed by `playlistId` or `playlistName`.

> Playlist IDs are unique within a **Media Player**.

> Item IDs are unique only within a single playlist.

> All duration values are floating-point numbers of seconds.

> Set the optional `showAllFields` field to true to include applicable fields normally omitted at their default values. Fields that do not apply to the item type remain absent. The response examples below are abbreviated.

**Request (by playlistId):**

```json
{
  "cmd": "GetPlaylistItems",
  "mediaPlayer": "MediaPlayer1",
  "playlistId": 2,
  "showAllFields": true
}
```

**Request (by playlistName):**

```json
{
  "cmd": "GetPlaylistItems",
  "mediaPlayer": "MediaPlayer1",
  "playlistName": "Show1",
  "showAllFields": true
}
```

**HTTP Responses:**

**Playlist:**

```json
{
  "playlistType": "Playlist",
  "playlistName": "Playlist",
  "playlistId": 3,
  "items": [
    {
      "id": 0,
      "path": "TestMedia/sequenceRva.rva",
      "duration": 7.2
    }
  ]
}
```

**Timeline:**

```json
{
  "playlistType": "Timeline",
  "playlistName": "Timeline1",
  "playlistId": 4,
  "tracks": [
    {
      "name": "Track 1",
      "items": [
        {
          "id": 0,
          "path": "TestMedia/sequenceRva.rva",
          "position": 1.0,
          "duration": 10.0
        }
      ]
    }
  ]
}
```

**Matrix:**

```json
{
  "playlistType": "Matrix",
  "playlistName": "Matrix1",
  "playlistId": 5,
  "items": [
    {
      "id": 0,
      "path": "TestMedia/sequenceRva.rva",
      "duration": 7.2,
      "column": 0,
      "row": 0
    },
    {
      "id": 1,
      "path": "TestMedia/sequenceRva.rva",
      "duration": 7.2,
      "column": 1,
      "row": 1
    }
  ]
}
```

### Playback Control Commands

- Play — Starts or resumes playback.

- Pause — Pauses playback.

- Stop — Stops playback.

- PlayPlaylistItem — Plays a specific item in a Playlist.

- PlayTimeline — Plays a Timeline from a defined position (in seconds).

- PlayMatrixItem — Plays a specific item in a Matrix by row/column.

- PlayMatrixColumn — Plays an entire Matrix column.

**All commands use the following pattern:**

**Request (Play example):**

```json
{
  "cmd": "Play",
  "mediaPlayer": "Media Player 1"
}
```

**HTTP Response:**

```json
{
  "cmd": "Success"
}
```

**TCP/UDP Response:**

Includes the original request in `"request"`.

```json
{
  "cmd": "Success",
  "request": {
    "cmd": "Play",
    "mediaPlayer": "Media Player 1"
  }
}
```

**Pause and Stop apply to the currently selected playlist:**

```json
{
  "cmd": "Pause",
  "mediaPlayer": "Media Player 1"
}
```

```json
{
  "cmd": "Stop",
  "mediaPlayer": "Media Player 1"
}
```

### PlayPlaylistItem — Plays item in Playlist

**Request:**

```json
{
  "cmd": "PlayPlaylistItem",
  "mediaPlayer": "Media Player 1",
  "playlistId": 2,
  "itemId": 1
}
```

**HTTP Response:**

```json
{
  "cmd": "Success"
}
```

**TCP/UDP Response (echoes original request):**

```json
{
  "cmd": "Success",
  "request": {
    "cmd": "PlayPlaylistItem",
    "mediaPlayer": "Media Player 1",
    "playlistId": 2,
    "itemId": 1
  }
}
```

> **Note:** Address the playlist using `playlistId` or `playlistName`. An item selector is required: provide `itemId` or the zero-based `itemIndex`. To play the first item, use `"itemIndex"`: 0. If both selectors are omitted, the command fails.

### PlayTimeline — Plays Timeline from selected position (seconds)

**Request:**

```json
{
  "cmd": "PlayTimeline",
  "mediaPlayer": "Media Player 1",
  "playlistId": 2,
  "position": 2.5
}
```

**HTTP Response:**

```json
{
  "cmd": "Success"
}
```

**TCP/UDP Response (echoes original request):**

```json
{
  "cmd": "Success",
  "request": {
    "cmd": "PlayTimeline",
    "mediaPlayer": "Media Player 1",
    "playlistId": 2,
    "position": 2.5
  }
}
```

> **Note:**

> Playlist can be addressed using `playlistId` or `playlistName`.

> position is optional. If it is 0 or omitted, playback starts at the beginning of the timeline.

### PlayMatrixItem — Plays item in Matrix (by row/column)

**Request:**

```json
{
  "cmd": "PlayMatrixItem",
  "mediaPlayer": "Media Player 1",
  "playlistId": 2,
  "row": 3,
  "column": 1
}
```

**HTTP Response:**

```json
{
  "cmd": "Success"
}
```

**TCP/UDP Response (echoes original request):**

```json
{
  "cmd": "Success",
  "request": {
    "cmd": "PlayMatrixItem",
    "mediaPlayer": "Media Player 1",
    "playlistId": 2,
    "row": 3,
    "column": 1
  }
}
```

> **Note:** Playlist can be addressed using `playlistId` or `playlistName`.

### PlayMatrixColumn — Plays column in Matrix

**Request:**

```json
{
  "cmd": "PlayMatrixColumn",
  "mediaPlayer": "Media Player 1",
  "playlistId": 2,
  "column": 1
}
```

**HTTP Response:**

```json
{
  "cmd": "Success"
}
```

**TCP/UDP Response (echoes original request):**

```json
{
  "cmd": "Success",
  "request": {
    "cmd": "PlayMatrixColumn",
    "mediaPlayer": "Media Player 1",
    "playlistId": 2,
    "column": 1
  }
}
```

> **Note:** Playlist can be addressed using `playlistId` or `playlistName`.

### PlayMatrixRow

Plays a row in the currently selected Matrix.

```json
{
  "cmd": "PlayMatrixRow",
  "mediaPlayer": "Media Player 1",
  "row": 1
}
```

### PauseMatrixRow

Pauses a row in the currently selected Matrix.

```json
{
  "cmd": "PauseMatrixRow",
  "mediaPlayer": "Media Player 1",
  "row": 1
}
```

### StopMatrixRow

Stops a row in the currently selected Matrix.

```json
{
  "cmd": "StopMatrixRow",
  "mediaPlayer": "Media Player 1",
  "row": 1
}
```

The Matrix row commands apply only when the current playlist is a Matrix.

### Seek

Moves playback to a specified position in the current Playlist or Timeline.

```json
{
  "cmd": "Seek",
  "mediaPlayer": "Media Player 1",
  "position": 2.0
}
```

position is a time in seconds. This command applies only to Playlists and Timelines.

### SetVolume

Sets the **Media Player** volume.

```json
{
  "cmd": "SetVolume",
  "mediaPlayer": "Media Player 1",
  "volume": 0.75
}
```

volume is a floating-point value. Use 0.0 for silence and 1.0 for the original volume level. TCP/UDP success echoes the internally generated SetParameter request (node, parameter, value), rather than the original SetVolume request.

### SeekMatrixItem

Moves playback to a specified position in the item playing in a Matrix row.

```json
{
  "cmd": "SeekMatrixItem",
  "mediaPlayer": "Media Player 1",
  "row": 1,
  "position": 2.0
}
```

row identifies the Matrix row. position is the playback position in seconds. This command applies only when the current playlist is a Matrix.

## Editing Playlists

- CreatePlaylist — Creates a new Playlist, Timeline, or Matrix.

- AddPlaylistItem — Inserts an item into a Playlist.

- AddTimelineItem — Adds an item to a Timeline track.

- AddMatrixItem — Adds an item to a Matrix grid.

### CreatePlaylist

Creates a new Playlist, Timeline, or Matrix inside a **Media Player**.

**Request:**

```json
{
  "cmd": "CreatePlaylist",
  "mediaPlayer": "Media Player 1",
  "name": "New Playlist",
  "playlistType": "Timeline",
  "framerate": 30
}
```

> **Note:**

> `playlistType` must be `"Playlist"`, `"Timeline"`, or `"Matrix"`. (Case sensitive.)

> `framerate` is optional and applies only to Timelines. The default value is 30.

### AddPlaylistItem

Inserts an item into a playlist. The item must be uploaded to the **Media Library** beforehand.

**Request:**

```json
{
  "cmd": "AddPlaylistItem",
  "mediaPlayer": "Media Player 1",
  "playlistId": 2,
  "index": 2,
  "itemPath": "folder/Video.rva"
}
```

> **Note:**

> A playlist can be referenced by `playlistId` or `playlistName`.

> index is an optional, zero-based insertion index. A negative value or a value greater than or equal to the playlist size appends the item.

> Use -1 to insert at the end.

> If omitted, the item is inserted at the end.

### AddTimelineItem

Adds an item into a timeline track. The item must be uploaded to the **Media Library** beforehand.

**Request:**

```json
{
  "cmd": "AddTimelineItem",
  "mediaPlayer": "Media Player 1",
  "playlistId": 2,
  "track": 0,
  "position": 2.5,
  "itemPath": "folder/Video.rva"
}
```

> **Note:**

> A timeline can be referenced by `playlistId` or `playlistName`.

> track (optional): index of the track where the item is inserted. If the track does not exist, it is created. If omitted, the item is placed in the first track.

> position (optional): time in seconds from the start of the timeline. If omitted, the item is placed after the last item in the track.

### AddMatrixItem

Adds an item to a matrix grid. The media must already be uploaded to the **Media Library**.

> **Warning:** If the destination cell is occupied, AddMatrixItem removes the existing matrix item before inserting the new one. Its item-specific configuration is removed with it. This is a remove-and-add operation; use ReplaceItem when you intend to replace the media of an addressed existing item.

**Request:**

```json
{
  "cmd": "AddMatrixItem",
  "mediaPlayer": "Media Player 1",
  "playlistId": 2,
  "column": 2,
  "row": 2,
  "itemPath": "folder/Video.rva"
}
```

> **Note:** Address the matrix using `playlistId` or `playlistName`. Supply both row and column as nonnegative, zero-based indices, or omit both. If both are omitted, the item is appended to the first row (row 0). Supplying only one coordinate is invalid.

### ReplaceItem

Replaces an item in a Playlist, Timeline, or Matrix.

```json
{
  "cmd": "ReplaceItem",
  "mediaPlayer": "Media Player 1",
  "playlistName": "Playlist",
  "itemId": 0,
  "itemPath": "Media/Uploaded/111.rva",
  "updateDuration": true,
  "moveRightItems": true
}
```

The playlist can be addressed using `playlistId` or `playlistName`. Use the fields supported by the playlist type to identify the item:

Playlist: `itemId` or `itemIndex`.

Timeline: `itemId` only.

Matrix: `itemId`, or both itemRowIndex and itemColumnIndex. Matrix row and column indices start at 0. ReplaceItem accepts only existing Media items; it cannot replace AUX or other non-media items.

For Timeline items, set the optional `updateDuration` field to true to update the item duration to match the new **Media Library** item. If `updateDuration` is enabled, set `moveRightItems` to true to move subsequent items according to the duration change.

### ModifyTimelineItem

Modifies an item in a Timeline. Address the playlist using `playlistId` or `playlistName` and the item using `itemId`. Supply at least one supported modification field; a request producing an empty change fails.

```json
{
  "cmd": "ModifyTimelineItem",
  "mediaPlayer": "Media Player 1",
  "playlistName": "Timeline",
  "itemId": 0,
  "duration": 100.0,
  "position": 3.0,
  "fadeIn": 0.2,
  "fadeOut": 0.2,
  "opacity": 0.85,
  "volume": 0.9,
  "muted": false,
  "transformations": {
    "mode": "Custom",
    "crop": [
      1,
      10,
      12,
      15
    ],
    "anchor": [
      10,
      20
    ],
    "position": [
      30,
      40
    ],
    "scale": [
      0.9,
      0.8
    ],
    "rotate": 90
  },
  "disableVideo": true,
  "multiplyByAlpha": true,
  "freezeFrameEnable": false,
  "freezeFramePosition": 0.0,
  "audioFiles": [
    "en.wav"
  ],
  "subtitles": "subs.srt"
}
```

The transformation crop values are ordered left, top, right, bottom. anchor and position contain horizontal and vertical coordinates; scale contains horizontal and vertical scale factors; rotate is measured counterclockwise in degrees. `transformations`.mode accepts Custom, Stretch, FitToHeight, FitToWidth, FitAll, or FillAll. Timeline fields also include startOffset (Media source offset in seconds) and blending (Over, Add, Replace, or Multiply). `opacity` is clamped to 0–1. `audioFiles`, subtitles, `freezeFrameEnable`, and `freezeFramePosition` apply only to Media items; `freezeFramePosition` is measured in seconds. Use aux for AUX items.

Modify…Item requests use the same property names returned by GetPlaylistItems, except that id, path, and sourceType cannot be changed. Unsupported or inapplicable fields do not create changes. `audioFiles` and subtitles accept null to clear their selections. Timeline edits can cut or remove overlapping items on the affected track.

### ModifyPlaylistItem

Modifies an item in a Playlist. Address the playlist using `playlistId` or `playlistName` and the item using `itemId` or zero-based `itemIndex`. Supply at least one supported modification field; a request producing an empty change fails.

```json
{
  "cmd": "ModifyPlaylistItem",
  "mediaPlayer": "Media Player 1",
  "playlistName": "Playlist",
  "itemId": 0,
  "volume": 0.9,
  "muted": false,
  "loop": true,
  "pauseOnStart": false,
  "pauseOnEnd": false,
  "inPoint": 1.0,
  "outPoint": 6.0,
  "fadeIn": 0.25,
  "sendTimecodeEnable": true,
  "sendTimecodeOffset": 0.0,
  "startOnTimecodeEnable": false,
  "startOnTimecodeValue": 0.0
}
```

Media and AUX items support volume, muted, `transformations`, `disableVideo`, and `multiplyByAlpha`. Only Media items support `freezeFrameEnable`, `freezeFramePosition` (seconds), `audioFiles`, and subtitles; AUX items support aux. duration can be changed for Timeline items or AUX items in any playlist type. id, path, and sourceType are read-only; use ReplaceItem to change media.

### ModifyMatrixItem

Modifies an item in a Matrix. Address the playlist using `playlistId` or `playlistName` and the item using `itemId`, or both itemRowIndex and itemColumnIndex. Use column and/or row to change the item's destination cell; these are separate from the item selectors. Coordinates start at 0 and must not be negative. Moving to an occupied cell fails. Supply at least one supported modification field; a request producing an empty change fails.

```json
{
  "cmd": "ModifyMatrixItem",
  "mediaPlayer": "Media Player 1",
  "playlistName": "Matrix",
  "itemId": 0,
  "column": 0,
  "row": 0,
  "volume": 0.9,
  "muted": false,
  "loop": true,
  "inPoint": 1.0,
  "outPoint": 6.0,
  "fadeIn": 0.25
}
```

Matrix items support the same Media- and AUX-specific fields as Playlist items.

### RemovePlaylistItem

Removes an item from a Playlist. The item can be addressed using `itemIndex` or `itemId`.

```json
{
  "cmd": "RemovePlaylistItem",
  "mediaPlayer": "Media Player",
  "playlistName": "Playlist1",
  "itemIndex": 0
}
```

### RemoveTimelineItem

Removes an item from a Timeline. The item must be addressed using `itemId`.

```json
{
  "cmd": "RemoveTimelineItem",
  "mediaPlayer": "Media Player",
  "playlistName": "Timeline1",
  "itemId": 0
}
```

### RemoveMatrixItem

Removes an item from a Matrix. Address the playlist using `playlistId` or `playlistName` and the item using `itemId`, or both itemRowIndex and itemColumnIndex (zero-based). The fields row and column are not item selectors for this command.

```json
{
  "cmd": "RemoveMatrixItem",
  "mediaPlayer": "Media Player",
  "playlistName": "Matrix1",
  "itemId": 0
}
```

All Remove…Item commands accept `playlistId` or `playlistName`. If both `itemIndex` and `itemId` are supplied for a Playlist, `itemIndex` takes precedence. For a Matrix, `itemId` takes precedence over itemRowIndex/itemColumnIndex.

## Timeline Marker Commands

### GetTimelineMarkers

Returns the markers in a Timeline.

```json
{
  "cmd": "GetTimelineMarkers",
  "mediaPlayer": "Media Player",
  "playlistName": "Timeline1"
}
```

**HTTP Response:**

```json
{
  "markers": [
    {
      "name": "Marker 1",
      "position": 5.866,
      "type": "Marker",
      "id": 1,
      "enabled": true
    },
    {
      "name": "Jump 1",
      "position": 7.666,
      "type": "Jump",
      "id": 2,
      "enabled": true,
      "jumpTime": 2.1,
      "jumpType": "time"
    }
  ]
}
```

### AddTimelineMarker

Adds a marker to a Timeline. The playlist can be addressed using `playlistId` or `playlistName`, and the marker name must be unique.

```json
{
  "cmd": "AddTimelineMarker",
  "mediaPlayer": "Media Player",
  "playlistName": "Timeline1",
  "type": "Marker",
  "position": 2.5,
  "name": "My Marker"
}
```

The case-sensitive marker types are Marker, Pause, Jump, and TimecodeTrigger. A Jump marker also requires `jumpType`. Use `jumpTime` when `jumpType` is time, or jumpMarkerId when `jumpType` is marker.

### RemoveTimelineMarker

Removes a marker from a Timeline.

```json
{
  "cmd": "RemoveTimelineMarker",
  "mediaPlayer": "Media Player",
  "playlistName": "Timeline1",
  "markerId": 4
}
```

### ModifyTimelineMarker

Modifies a marker in a Timeline. The playlist can be addressed using `playlistId` or `playlistName`, and the marker is identified by `markerId`.

```json
{
  "cmd": "ModifyTimelineMarker",
  "mediaPlayer": "Media Player",
  "playlistName": "Timeline1",
  "markerId": 4,
  "name": "Updated Marker",
  "position": 3.5,
  "enabled": true
}
```

name, position, and enabled are optional, but at least one supported change field is required. A supplied name must be unique; even resubmitting the marker's current name fails the duplicate-name check. For Jump markers, `jumpType`, `jumpTime` (seconds), and jumpMarkerId may be updated independently. `jumpType` accepts time or marker; jumpMarkerId must identify an existing point.

## Upload Manager Commands

### GetUploadingItems

Retrieves the status of current uploads.

**Request:**

```json
{
  "cmd": "GetUploadingItems"
}
```

**HTTP Response:**

```json
{
  "items": [
    {
      "path": "Media/Untitled2.rva",
      "progress": 1,
      "status": "done"
    },
    {
      "path": "Media/2024-02-03 22-50-50 (1).rva",
      "progress": 0.01,
      "status": "converting"
    }
  ]
}
```

## File System Commands

### GetMediaFolder

Returns the contents of a directory.

```json
{
  "cmd": "GetMediaFolder",
  "path": "Media"
}
```

path is optional. If omitted, the current project directory is returned. It can be relative to the current project directory or an absolute path, but paths outside the configured work folders are not permitted.

**HTTP Response:**

```json
{
  "entries": [
    {
      "path": "Media/someMedia.rva",
      "type": "Content",
      "size": 35784144
    },
    {
      "path": "Media/Synced",
      "type": "Folder"
    }
  ]
}
```

### GetWorkFolders

Returns the configured Screenberry work folders.

```json
{
  "cmd": "GetWorkFolders"
}
```

**HTTP Response:**

```json
{
  "workFolders": [
    "/Users/username/Documents/Screenberry"
  ]
}
```

### GetMediaItem

Returns information about an RVA media item.

```json
{
  "cmd": "GetMediaItem",
  "itemPath": "Media/someMedia.rva"
}
```

`itemPath` is the path to an existing RVA media file. If the file exists but its media information is invalid, the reply contains `"mediaItem"`: null.

**HTTP Response:**

```json
{
  "mediaItem": {
    "path": "Media/someMedia.rva",
    "fps": 60.0,
    "duration": 17.116,
    "width": 1920,
    "height": 1080,
    "size": 35784144,
    "date": 1763038182,
    "audioFiles": [
      "2025-08-06 14-56-07 6.wav"
    ]
  }
}
```

duration is a floating-point number of seconds.

## General Commands

General commands retrieve license information, request project saving, or control the **Screenberry Server** application and its computer. Exit, Restart, Shutdown, and Reboot can interrupt operation.

### Exit

Closes the **Screenberry Server** application.

```json
{
  "cmd": "Exit"
}
```

### Restart

Restarts the **Screenberry Server** application.

```json
{
  "cmd": "Restart"
}
```

### Shutdown

Shuts down the **Screenberry Server** computer.

```json
{
  "cmd": "Shutdown"
}
```

### Reboot

Reboots the **Screenberry Server** computer.

```json
{
  "cmd": "Reboot"
}
```

### GetLicenses

Returns the effective license status and feature limits. No fields other than `cmd` are required. The response has the same shape on every listener and does not add `cmd` or request.

```json
{
  "cmd": "GetLicenses"
}
```

**Response fields:**

screenberry: active (boolean), edition (pro, lite, or none), and outputPixels. When key state is available, also outputs4K and summary.

calibrator: active (boolean), edition (calibratorPlus, calibrator, or none), and devices. When key state is available, also summary.

nonCommercialDemo, calibratorOnly, and medusa: booleans.

limits: maxMediaPlayers, maxMediaPlayerLayers, maxPixelMapperDevices (numbers or null for unlimited), contentLicensesAllowed and stereoscopicAllowed (booleans), and note (`"null means unlimited"`).

When key state is available, keys is an array (possibly empty); licenseId and keyTimeUtc are included when available. keyTimeUtc uses UTC ISO 8601 or null for an unset time.

Each keys entry contains keyId, type (hardware, software, or unknown), rehostable, trial, totalActiveOutputs, and products. Each product contains id, name, active, usableOutputs, and features.

Each feature contains id, name, licenseType (perpetual, expiring, trial, or unknown), active, and expired. Expiring and trial features include expiresAt. Trial features also include trialStartedAt and trialDurationDays. Date-time values are UTC ISO 8601 strings or null when unset. outputs is included only when that feature exposes an output count.

### SaveProject

Requests saving the current project through AppHost. The request must contain only `cmd`: every additional field is rejected, including a destination path, `replyIp`, or `replyPort`. This command does not implement Save As.

```json
{
  "cmd": "SaveProject"
}
```

**HTTP success response:**

```json
{
  "cmd": "Success"
}
```

**TCP success response:**

```json
{
  "cmd": "Success",
  "request": {
    "cmd": "SaveProject"
  }
}
```

Success acknowledges dispatch to AppHost, not completion of the disk write. No operation ID, progress, or completion notification is returned. Use HTTP or TCP when an acknowledgement is needed: UDP/OSC reply-address fields are rejected by this command.
