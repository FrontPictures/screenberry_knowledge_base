---
id: guide.media-playback.playlists.organizing-media-items-in-playlists
variant_id: guide.media-playback.playlists.organizing-media-items-in-playlists.imported-current-guide
title: Screenberry Media Player - Organizing Media in Playlists
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
    path: archive/site/content/en/media-playback/playlists/organizing-media-items-in-playlists.mdx
    sha256: 62aef9d413536511fd264478e16f93eae6d405530c3e4a1ad25e7c67c2a77b74
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/media-playback/playlists/organizing-media-items-in-playlists.mdx
  canonical_url: https://help.screenberry.com/en/media-playback/playlists/organizing-media-items-in-playlists
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 62aef9d413536511fd264478e16f93eae6d405530c3e4a1ad25e7c67c2a77b74
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Media Player - Organizing Media in Playlists
    description: Learn about adding, renaming, and deleting media items, as well as sorting options and adjusting playlist view settings.
    openGraph:
      title: Managing Media in Screenberry Playlists - Adding, Renaming, Deleting
      description: Detailed overview of how to effectively organize media within playlists in Screenberry Media Player.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/media-playback/playlists/organizing-media-items-in-playlists.yaml
  visual_information_review: not-independently-verified
---

# Organizing Media Items in Playlists

**Playlists** are used to organize media items for playback in the **Media Player** widget. Multiple playlists can be placed in folders.

## Adding Media Items to Playlists

Media items can be added to a playlist from the **Media Library** or directly from any folder on your computer (i.e. from a _Windows File Explorer_ folder).

To add media items from the **Media Library**:

1. Reveal the contents of a playlist in the **Media Player** widget by clicking on its name.
2. Drag and drop the media items from the **Media Library** to the playlist contents area, or select media items in the **Media Library** and use **Copy** (**`Ctrl`** + **`C`**) and **Paste** (**`Ctrl`** + **`V`**) operations to perform this action.

To add media items directly:

1. Reveal the contents of a playlist in the **Media Player** widget by clicking on its name.
2. Drag and drop the files from a system folder, or use **Copy** (**`Ctrl`** + **`C`**) and **Paste** (**`Ctrl`** + **`V`**) operations to perform this action.
3. In the opened **Add Media File(s)** dialog box, select the quality for the uploaded media items (**Good Quality 4:2:2**, **Max Quality 4:2:2**, **Optimal Quality 4:2:0**) and choose to resize them if required, then press the **Add** button.

> **Note:** If media items are added directly to the playlists, they are automatically added to the **Media Library** folders named **Uploaded\_on\_YYYY-MM-DD**.

If media items with the same names already exist, a user is offered the option of adding new media items or overwriting the existing ones.

## Supported Media Formats

The table below lists common file formats accepted for upload; it is not exhaustive. Recognition of an extension or container does not guarantee support for every codec or file variant it can contain.

|                           |                                                                                           |
| ------------------------- | ----------------------------------------------------------------------------------------- |
| Video                     | mov, avi, mp4, flv, mkv, vob, ogv, wmv, mpg, m2v, 3gp, m4v, ts, gif, m2t, m2ts, mxf, webm |
| Image (or Image Sequence) | jpg, tga, png, bmp, tif, jpeg, tiff, webp, exr, dpx                                       |
| Audio                     | wav, mp3, aif, wma, ogg, ac3, aac, m4a, flac, ape, aiff, caf, m4r, mmf, opus              |
| Subtitles                 | srt                                                                                       |
| Internal formats          | RVA, EDVA, EDV, EDVI, ERVA, license                                                       |

## Renaming Media Items

There are two ways to rename a media item. Renaming a media item in the **Media Library** will change its name globally, i.e. in all existing playlists.

A media item’s name in a particular playlist can also be changed by assigning it a title – right-click on the media item, select **Settings** from the dropdown menu, and enter a new name in the **Title** field.

> **Note:** Media items cannot be renamed if they are currently playing in any of the existing **Media Player** widgets.

## Deleting Media Items

To delete a media item or a selection of media items from a playlist, right-click them and choose **Delete** from the dropdown menu, or press the **`Del`** button.

You can also delete media items globally in all existing playlists by removing them from the **Media Library** – right-click a media item or a selection of media items in a playlist and select **Remove Item from Media Library** from the dropdown menu, or press **`Shift`** + **`Del`**.

To indicate that a media item has been removed from the **Media Library** and is no longer accessible for playback, the thumbnails of all its instances in existing playlists are marked as crossed-out. If a media item with the same name is later added to the **Media Library**, the thumbnails of all instances of that media item will return to an active state and it will become available for playback in **Media Player** playlists again.

## Arranging Media Items

Media items can be organized by dragging and dropping them or by using the **Copy** (**`Ctrl`** + **`C`**), **Cut** (**`Ctrl`** + **`X`**), and **Paste** (**`Ctrl`** + **`V`**) commands

- Within a single playlist to change the order of the media items playback.
- Between different playlists of the same **Media Player** widget.
- Between playlists of different **Media Player** widgets.

When media items are copied or moved between playlists, they retain their playback settings.

Additionally, the media items’ data and playback settings may be copied to and from the text editor by using **Copy** (**`Ctrl`** + **`C`**) and **Paste** (**`Ctrl`** + **`V`**) operations.

For easier visual identification of media items within a playlist, they can be assigned color tags – right-click a media item or a selection of media items in the playlist and select one of the default colors in the **Set Color Tag** submenu.

## Sorting Media Items

Media items can be sorted by right-clicking a selection of items in the playlist and choosing the **Sort by** submenu from the dropdown menu. There are several sorting options, including **Frame Count**, **Name**, **Title**, **Color Tags**, and **Shuffle**.

## Adjusting Media Item Thumbnails

You can adjust how the thumbnails of media items are displayed using the thumbnail size slider and options menu at the top right of the playlist contents area.

To resize thumbnails, drag the thumbnail size slider.

The thumbnails menu, which is accessible by clicking the eye icon, offers the following options:

- Three different orientations for displaying thumbnails:
  - **Square** (T Square), 1 x 1 (default),
  - **Horizontal** (T Wide), 2 x 1 for landscape-oriented media,
  - **Vertical** (T Tall), 1 x 2 for portrait-oriented media.
- Thumbnail image fit method. When the **Aspect Fit** checkbox is selected (default), the hard crop is performed, meaning that the centered thumbnail image will be automatically cropped to fill a box by its shorter dimension. With the **Aspect Fit** checkbox left unselected, the thumbnail image will be automatically fitted in a box by its longer dimension.
- The visibility of media item titles (names) is changed by selecting / unselecting the **Hide Titles** checkbox.
