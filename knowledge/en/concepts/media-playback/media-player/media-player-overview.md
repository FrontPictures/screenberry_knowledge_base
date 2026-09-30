---
id: guide.media-playback.media-player.media-player-overview
variant_id: guide.media-playback.media-player.media-player-overview.imported-current-guide
title: Screenberry Media Player - Playback Management
language: en
kind: concepts
status: in_review
owner: unassigned
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: existing-guide
    path: archive/site/content/en/media-playback/media-player/media-player-overview.mdx
    sha256: 11ce5eb924451b0557ad99b589fb80ae7e02683e9711ae22b4112ec8f21796c4
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/media-playback/media-player/media-player-overview.mdx
  canonical_url: https://help.screenberry.com/en/media-playback/media-player/media-player-overview
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 11ce5eb924451b0557ad99b589fb80ae7e02683e9711ae22b4112ec8f21796c4
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Media Player - Playback Management
    description: Control media playback, manage playlists and timelines, and automate playback with event mapping in Screenberry.
    openGraph:
      title: Screenberry Media Player - Playback Management
      description: Control media playback, manage playlists and timelines, and automate playback with event mapping in Screenberry.
presentation:
  mode: text-only
  illustrations: illustrations/en/concepts/media-playback/media-player/media-player-overview.yaml
  visual_information_review: not-independently-verified
---

# Media Player Overview

The **Media Player** provides control over the playback of media files, as well as over the management of playlists and timelines, timecode operations, color correction, and audio volume adjustment.

In Screenberry, multiple media players can be created. Each media player can contain playlists and timelines.

With the help of displays and patches, media players can be layered over each other, adjusted to different sizes, positions, and shapes on the output canvas.

The playback of media players can be automated, since media players, as well as each playlist, timeline, and media item they contain, have the ability to trigger or be triggered manually or automatically by MIDI/keyboard/IP events, scripts, DMX commands, etc.

_The **Media Player** view. 1 – the Navigation Pane, 2 – current playlist or timeline contents, 3 – playback controls and settings._

## Media Player Widget

When the **MediaPlayer** node is added to the **Node Graph,** the corresponding **Media Player** widget becomes accessible. To add this widget to the workspace, select **Window** > \[**Media Player Name**] from the main **Screenberry Panel** menu.

> **Note:** Multiple **Media Player** nodes can be created. Each added **MediaPlayer** node has its own **Media Player** widget.

## Playlists, Timelines, and Folders

For playback, media items can be organized into **Playlists** or composed with the help of **Timelines**.

Additionally, multiple playlists and timelines can be organized into folders. To create a new folder, either right-click an empty area of the playlist and timelines tree panel and select **Add Folder** from the dropdown menu or click the button (Addfolder) on the bottom toolbar of the **Navigation Pane**.

> **Note:** By default, the new **Media Player** widget is created with one empty **Playlist** to which media items can be added by dragging them from the **Media Library** or directly from the system folders. See [Adding Media Items to the Playlist](../../../how-to/media-playback/playlists/organizing-media-items-in-playlists.md#adding-media-items-to-playlists).
