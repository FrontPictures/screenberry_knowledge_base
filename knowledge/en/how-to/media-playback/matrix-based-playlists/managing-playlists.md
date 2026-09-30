---
id: guide.media-playback.matrix-based-playlists.managing-playlists
variant_id: guide.media-playback.matrix-based-playlists.managing-playlists.imported-current-guide
title: Screenberry Matrix Playlists - Creation, Arrangement, and Settings
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
    path: archive/site/content/en/media-playback/matrix-based-playlists/managing-playlists.mdx
    sha256: c0c64ce2cd87808997ee73e33628e683417cccb9487ee89108ae373c939ae2fa
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/media-playback/matrix-based-playlists/managing-playlists.mdx
  canonical_url: https://help.screenberry.com/en/media-playback/matrix-based-playlists/managing-playlists
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: c0c64ce2cd87808997ee73e33628e683417cccb9487ee89108ae373c939ae2fa
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Matrix Playlists - Creation, Arrangement, and Settings
    description: Learn to create, rename, and manage matrix-based playlists in Screenberry.
    openGraph:
      title: Screenberry Matrix Playlists - Creation and Management
      description: Creating, arranging, and configuring matrix-based playlists in Screenberry.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/media-playback/matrix-based-playlists/managing-playlists.yaml
  visual_information_review: not-independently-verified
---

# Managing Playlists

## Creating Playlists

To create a new matrix-based playlist, right-click on an empty space within the **Navigation Pane** or click the **Add** button  in its bottom toolbar, then select **Add Matrix Playlist** from the dropdown menu.

For creating a playlist within an existing folder, right-click the folder or select and click **Add**, then select **Add Matrix Playlist**. To toggle the visibility of a folder’s contents, click the arrow icon next to that folder.

Matrix-based playlists when created are named sequentially as **Matrix1**, **Matrix2**, and so on.

## Renaming Playlists

To rename a playlist, right-click on its name, select **Rename** from the dropdown menu, and then enter a new name in the dialog box that appears.

## Deleting Playlists

To remove a playlist, right-click on its name and choose **Delete** from the dropdown menu, or simply select the playlist and press the **Delete** button (Trash) located in the bottom toolbar of the **Navigation Pane**.

## Arranging Playlists

In the **Navigation Pane**, click to select and use the **`Up`** and **`Down`** arrow keys to move through the list of playlists, timelines, and folders. Expand or collapse folders by clicking the arrow icon next to the folder name.

To reorder playlists or timelines within the Navigation Pane, right-click the name of the playlist or timeline you want to move and select **Move Up** (**`Ctrl`** + **`Up`**) or **Move Down** (**`Ctrl`** + **`Down`**) from the dropdown menu, or drag them to a new position within the list. To place a playlist into a folder, drag it over the folder's name or into the list of its current contents.

## Playlist Settings and Indications

Next to each playlist name are toggles for settings, which also indicate the playlist's current state:

1. **Locking**: Prevents unintended changes by locking the playlist. A locked playlist can’t be modified, while an unlocked one allows editing.
2. **Playback Control with Presentation Clicker**: Enables or disables control of the playlist using a presentation clicker. For more information, please refer to the [Playlist Playback Control with Presentation Clicker](../playlists/playlists-playback.md#playback-control-with-presentation-clicker) section.
3. **Event Mapping**: Media items in a playlist can initiate playback through various events, like MIDI/Keyboard inputs. This toggle allows you to switch the playlist's monitoring of such events on or off. For more information, please refer to the [Mapping Media Item to Event](../../../reference/media-playback/playlists/media-item-properties.md#mapping-a-media-item-to-a-midikeyboard-event) section.
4. **Listening to the Timecode**: Use this toggle to set the playlist to either actively listen for timecode signals or to disregard them.
5. **Number of Media Items**: Shows the current count of media items in the playlist.

### Playback Indication

Indicators next to the playlist name display its current state—playing, paused, or stopped. If the playlist is in a collapsed folder, these indicators take the place of the folder icon.
