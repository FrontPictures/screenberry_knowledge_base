---
id: guide.media-playback.playlists.creating-managing-playlists
variant_id: guide.media-playback.playlists.creating-managing-playlists.imported-current-guide
title: Screenberry Playlists - Creation, Management & Settings
language: en
kind: how-to
status: in_review
owner: unassigned
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: existing-guide
    path: archive/site/content/en/media-playback/playlists/creating-managing-playlists.mdx
    sha256: 34e718f1730666c9f2c58f57ed3624c278014aedd7f48ce74c7d1c9658d6316d
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/media-playback/playlists/creating-managing-playlists.mdx
  canonical_url: https://help.screenberry.com/en/media-playback/playlists/creating-managing-playlists
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 34e718f1730666c9f2c58f57ed3624c278014aedd7f48ce74c7d1c9658d6316d
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Playlists - Creation, Management & Settings
    description: Learn how to create, organize, and manage playlists in Screenberry Media Player, along with advanced settings for playback control and event mapping.
    openGraph:
      title: Creating and Managing Playlists in Screenberry
      description: Learn how to create, organize, and manage playlists in Screenberry Media Player, along with advanced settings for playback control and event mapping.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/media-playback/playlists/creating-managing-playlists.yaml
  visual_information_review: not-independently-verified
---

# Creating and Managing Playlists

**Playlists** are used to organize media items for playback in the **Media Player** widget. Folders can be used to organize playlists.

## Adding Playlists

To create a new playlist, either right-click an empty area of the **Navigation Pane** or click the **Add** button  on the bottom toolbar and select **Add Playlist** from the dropdown menu.

To add a new playlist to an existing folder, select the folder and click the **Add** button  on the bottom toolbar, or right-click the folder name and select **Add Playlist** from the dropdown menu.

To show/hide a folder’s contents, press the arrow icons next to the folder icon.

## Renaming Playlists

When you create playlists, it’s helpful to name them descriptively so they can be identified easily. To rename it, right-click on a playlist, select **Rename** from the dropdown menu, and enter a new name in the opened dialog box.

## Deleting Playlists

To delete a playlist, either right-click on its name, and select **Delete** from the dropdown menu, or select its name and click the **Delete** button (Trash) in the bottom toolbar of the **Navigation Pane**.

## Arranging Playlists

To navigate the playlists and timelines list, use the **`Up`** and **`Down`** arrow keys. To expand or collapse the contents of a folder, click on the arrow icon next to the folder icon.

To change the order of playlists, timelines, and folders, either right-click on the name and select **Move Up** (**`Ctrl`** + **`Up`**) or **Move Down** (**`Ctrl`** + **`Down`**) from the dropdown menu, or drag and drop them into the list. A playlist can be moved into a folder by dragging it over the name of a folder or its contents.

## Playlist Settings and Indication

1. **Locking and Unlocking** a playlist to prevent accidental modifications. A locked playlist cannot be further modified, while an unlocked one can be edited.
2. **Playback Control with Presentation Clicker**. The playback of playlists may be controlled by a presentation clicker. This toggle enables and disables this function. For more information, see [Playlist Playback Control with Presentation Clicker](playlists-playback.md#playback-control-with-presentation-clicker).
3. **MIDI/Keyboard Events Mapping**. Individual media items in playlists can be mapped to start playback on MIDI/Keyboard events. This toggle changes the state of a playlist between listening to MIDI/Keyboard events and ignoring them. For more information, see [Mapping Media Item to MIDI/Keyboard Event](../../../reference/media-playback/playlists/media-item-properties.md#mapping-a-media-item-to-a-midikeyboard-event).
4. **Listening to the Timecode** toggle changes the state of a playlist between listening to the timecode and ignoring it.
5. **Number of Media Items** currently added to the playlist.

### Playback Indication

When a playlist is currently being played, paused, or stopped, the corresponding indicators appear next to the playlist name. Whenever the currently active playlist is part of a folder, and the contents of the folder have been collapsed, these indicators replace the folder icon.
