---
id: guide.media-playback.matrix-based-playlists.playback
variant_id: guide.media-playback.matrix-based-playlists.playback.imported-current-guide
title: Managing the Playback of Matrix-Based Playlists in Screenberry
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
    path: archive/site/content/en/media-playback/matrix-based-playlists/playback.mdx
    sha256: 91f8af8dc531104ad883e142c5a260aed7bf8fd8bd292c5bd54a1cfecffd3607
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/media-playback/matrix-based-playlists/playback.mdx
  canonical_url: https://help.screenberry.com/en/media-playback/matrix-based-playlists/playback
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 91f8af8dc531104ad883e142c5a260aed7bf8fd8bd292c5bd54a1cfecffd3607
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Managing the Playback of Matrix-Based Playlists in Screenberry
    description: Understand matrix-based playlist playback in Screenberry, including row, column, and individual media item playback options.
    openGraph:
      title: Playback Management for Matrix-Based Playlists in Screenberry
      description: Understand matrix-based playlist playback in Screenberry, including row, column, and individual media item playback options.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/media-playback/matrix-based-playlists/playback.yaml
  visual_information_review: not-independently-verified
---

## Overview

Each row within a matrix-based playlist operates independently, allowing for the individual control of playback. The playback dynamics are as follows: Upon the completion of a media item's playback, the playback of the subsequent media item in the row begins automatically. This sequence continues unless some media items are specifically set to loop. By default, when the playback reaches the end of the last media item in a row, it loops back to the beginning of the first media item in that row.

## Playback of Individual Media Items

To start the playback of individual media items within a matrix-based playlist, do one of the following:

- Select one or multiple items in the playlist grid, then click the **Play Selected Item** button. If more than one media item is selected within a particular row, playback of that row will initiate from the first item in that sequence of selected items.
- Alternatively, hold down the **`Alt`** key (the cursor changes to the orange play symbol (Altplay) when hovering over a media item) and click on the media item within the playlist grid.
- To resume the playback of media items that were paused earlier, click the **Play** button (Play1). Playback will restart from the positions where they had been paused.

To pause the playback, click the **Pause** button. This action will freeze the playback at the last played frames of the media items currently in play, and these frames will continue to be output.

To halt the playback completely, click the **Stop** button.

## Row-Specific Playback

To start the playback of media items within a specific row of the matrix-based playlist, you have several options:

- Click the **Play** button (Play1) located in the header of that row. If it's the initial play, or if the **Stop** button  was used prior, playback begins with the first available media item in that row. If playback was paused earlier, it resumes from where it was paused.
- To start the playback from a particular media item within the row, select that item and then click the **Play Selected Item** button  located in the header of that row.
- Hold down the **`Alt`** key and click on the media item within the row.

To pause the playback of a specific row, click the **Pause** button  in the row's header. This action will freeze the playback at the last played frame of the media item currently in play, with that frame continuing to be output.

To stop the playback of a specific row, click the **Stop** button  in the header of that row. This will cease playback and reset the starting playback position to the beginning of the first media item in that row.

The **Play Previous** (Prev) and **Play Next**  buttons in the row header allow users to navigate sequentially through the media items within a specific row of a matrix-based playlist:

- **Play Previous**: Reverts playback to the previous media item in the sequence.
- **Play Next**: Advances playback to the next media item in the sequence.

## Column-Specific Playback

To start the simultaneous playback of all media items within a specific column:

- Right-click the column header and select **Play Column** from the dropdown menu.
- Hold down the **`Alt`** key and click on the column header.

To pause or stop playback, use the **Pause**  or **Stop**  buttons located in the playlist's playback controls bar, just as you would when controlling the playback of individual media items.

Additionally, the **Play Previous** (Prev) and **Play Next**  buttons in the playlist's playback controls bar enable sequential column playback navigation:

- **Play Previous**: Jumps to the playback of the previous column. This is achieved by identifying the currently playing media item in the topmost active row and initiating playback of the column that immediately precedes this item.
- **Play Next**: Advances to the next column's playback by locating the currently playing media item in the topmost active row and initiating playback of the column immediately subsequent to this item.

## Additional Playback Control Features

The playback controls bar also offers the following features:

**Lock/Unlock Playback Controls** toggle: This safeguard prevents unintended changes to the playback state of a matrix-based playlist. Activating the **Lock** option disables all the interactive playback buttons, including **Play Selected**, **Play**, **Pause**, and **Stop**. To re-enable these controls, click the toggle once again.

**Reveal Active Item** button (Reveal Icon) : Allows you to quickly locate a currently playing media item. Clicking this button shifts the view to the active playlist, automatically scrolls to the currently playing media items, and highlights them.

## Indication

When a matrix-based playlist is being played, paused, or stopped, the corresponding indicators adjacent to the playlist's name in the **Navigation Pane** reveal its current state. If the currently active playlist is located within a collapsed folder, these state indicators will replace the folder icon.

## Playback Prioritization Logic

In a matrix-based playlist, every new user interaction related to playback supersedes the previous one. For instance, when column playback is initiated and a single row is subsequently paused, this more recent interaction prevails, pausing the playback exclusively for that row.
