---
id: guide.media-playback.playlists.playlists-playback
variant_id: guide.media-playback.playlists.playlists-playback.imported-current-guide
title: Screenberry Media Player - Playlist Playback Controls
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
    path: archive/site/content/en/media-playback/playlists/playlists-playback.mdx
    sha256: 796d175829a67867a07399f2c52722632e1fe6e606be43121176aeeaaa1cc792
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/media-playback/playlists/playlists-playback.mdx
  canonical_url: https://help.screenberry.com/en/media-playback/playlists/playlists-playback
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 796d175829a67867a07399f2c52722632e1fe6e606be43121176aeeaaa1cc792
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Media Player - Playlist Playback Controls
    description: Learn about Screenberry Media Player's playlist playback features.
    openGraph:
      title: Controlling Playlist Playback in Screenberry Media Player
      description: Learn about Screenberry Media Player's playlist playback features.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/media-playback/playlists/playlists-playback.yaml
  visual_information_review: not-independently-verified
---

# Playlists Playback

The **Media Player** widget contains several standard playback controls displayed along the bottom.

> **Note:** Playback controls displayed along the bottom of the **Media Player** widget are associated with the currently active media item. At the same time, while the active playlist is playing, other playlists can be opened and edited. If you need to switch to the active playlist, right-click on the playlists tree or playlist area and select **Reveal Active Item**, or press the **`A`** key.

## Playlist Playback Controls

1. The **Seek Bar** displays the playback progress and provides additional playback controls and settings for media items.
2. &#x20;**Play Selected Item** starts playback of a selected media item.
3. (Play1) **Play** starts playback from the current playhead position.
4. &#x20;**Pause** freezes playback at the current playhead position.
5. &#x20;**Stop** ends playback.
6. (Prev) **Previous Item** jumps to the previous media item in the playlist.
7. &#x20;**Next Item** jumps to the next media item in the playlist.
8. &#x20;**Lock** blocks playback controls to avoid accidental actions.
9. **Duration display** shows the current time (or frame number) information in relation to the duration of a media item.
10. **Volume Control** adjusts the overall audio volume for the **Media Player** output (see [Volume Control](../../../reference/media-playback/media-player/media-player-global-settings.md#volume-control)).
11. **Color Correction** controls global color correction for the **Media Player** output (see [Color Correction)](../../../reference/media-playback/media-player/media-player-global-settings.md#color-correction).
12. **Playlist Name**.
13. **Media Item Name**.
14. **Number of the active media item** that displays the sequential number of the active media item in relation to the total number of media items in the playlist.
15. **Duration** shows the full duration of the currently playing media item.
16. **Timecode** displays the timecode information.
17. **Timecode controls menu** provides access to the global timecode controls for the **Media Player** output.

There are two modes for displaying playlist playback controls (normal and narrow) that change automatically depending on the **Media Player** widget width.

### Seek Bar

In Screenberry, the seek bar displays playback information for the currently active media item.

1. **Playhead** shows the playback progress. A user is able to change the current position of the playhead by dragging it. The playback then will continue from the frame at which the playhead is located.
2. **Duration display** shows the current time (or frame number) information in relation to the duration of a media item.
3. **In Point** slider position defines the first frame of the playback.
4. **Out Point** slider position defines the last frame of the playback.
5. **Time Ruler** shows the time scale.
6. **Audio Peaks** displays the waveform of the active audio track (if present) of the media item.

Right-clicking on the seek bar opens the related context menu:

- **Jump to Frame** changes the position of the playhead to the specified frame.
- **Set In Point** sets the first frame of playback at the current cursor position.
- **Set Out Point** sets the last frame of playback at the current cursor position.
- **Reset In/Out Points** resets the media item trimming to the default state.
- **Tag Frame** allows assigning a tag to the frame at the current cursor position.
- **Jump to Tagged Frame** displays a list of currently tagged frames and allows moving the playhead to a selected tagged frame.
- **Split at Frame (frame#)** allows dividing the media item into two instances based on the current playhead position. The first instance has a duration from the beginning to the selected frame, and the second instance has a duration starting from the selected frame to the end.
- **Show Trimmed / Show Full Duration** toggles between full length and trimmed part duration viewing modes.
- **Show Time Ruler / Hide Time Ruler** toggles between time ruler display on and off modes.

> **Note:** By default, left-clicking on the seek bar will move the playhead to the position of the click. This option can be switched off in **Preferences** > **General** by unselecting the **Mouse Seek Control** checkbox.

### Duration Display

Right-clicking on the **Duration Display** allows switching between the three different display modes:

1. Current playback time/total media item duration (hh:mm:ss) (Dd1).
2. Current frame count/total media item frame count (Dd2).
3. Remaining playback time of the media item (hh:mm:ss) (Dd3).

If the **Out Point** is set, the **}** symbol is added to the **Duration Display** in all three display modes and the duration (or frame count) is calculated to the **Out Point** instead of the end of the media item (Dds).

## Media Items Playback

To start playback of the media item in the playlist do one of the following:

- Press the **Play** button (Play1) to start playback from the current playhead position.
- Select the media item in the playlist and press the **Play Selected Item** button.
- Hold the **`Alt`** key (the mouse pointer will turn into an orange **Play** symbol (Altplay)) and click on the media item in the playlist.

The last two options are most commonly used when there is a need to switch playback on the fly to a specific media item.

Media items in the playlist are played sequentially from left to right from top to bottom. When the playhead reaches the last frame of the last media item in the playlist, playback switches to the first frame of the first media item in the playlist.

Playback continues unless the user specifically issues **Stop** or **Pause** commands.

- Pause playback by pressing the **Pause** button  – the playhead remains on the last played frame of the current media item. The last frame is being broadcasted.
- Stop playback by pressing the **Stop** button  – the playhead returns to the first frame of the first media item in the playlist.

During playback, the user can add and delete media items, reorder them by moving and copying within the playlist and between playlists, and change their settings. When attempting to delete an item that is currently playing, a warning will be displayed, and deleting the item will stop playback.

## Revealing Currently Playing Media Item

The currently playing item can be quickly located and brought into view by right-clicking on the playlists tree or playlist area and selecting **Reveal Active Item**, or by pressing the **`A`** key.

## Media Items Loop Group

To play a group of media items in the loop, right-click a selection of media items in the playlist and select **Loop Through Selected Items** from the dropdown menu, or press **`Shift`** + **`L`**.

When a loop group is created, special **Loop Start** and **Loop End** items are added to the playlist before and after the media items in the group to indicate the beginning and end of the loop. It is possible to move these items in the playlist to include more or fewer media items in the loop group.

## Playback Control with Presentation Clicker

_Logitech® presentation clicker (remote control)_

Using a presentation clicker is a convenient method of giving a presentation with Screenberry, which allows the presenter to control the playback of playlists remotely. Pressing the **Next** (**Right Arrow**) or **Previous** (**Left Arrow**) buttons of a presentation clicker advances the presentation to the next or previous media item respectively and starts its playback.

To turn on the functionality of Screenberry playback control with a presentation clicker, open **Preferences** > **General** and select the **Presentation Clicker** checkbox.

Additionally, the playlist has to be enabled for playback control using a presentation clicker, see [Playlist Settings. Playback Control with Presentation Clicker](creating-managing-playlists.md#playlist-settings-and-indication).

> **Note:** The USB transmitter/receiver of the presentation clicker can be either plugged into the USB port of the server or the operator’s computer. In case when it’s plugged into the operator’s computer, the **Screenberry Panel** window needs to be in focus for the presentation clicker to function.

Refer to your presentation clicker device manual to find more information about its functionality.
