---
id: guide.organizing-media.managing-media-items
variant_id: guide.organizing-media.managing-media-items.imported-current-guide
title: Screenberry Media Management - Adding, Deleting, and Searching Media
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
    path: archive/site/content/en/organizing-media/managing-media-items.mdx
    sha256: e506b2c377d1a59c1135d29307379cbe3a8d299e88f206f1671775ea33a75ad1
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/organizing-media/managing-media-items.mdx
  canonical_url: https://help.screenberry.com/en/organizing-media/managing-media-items
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: e506b2c377d1a59c1135d29307379cbe3a8d299e88f206f1671775ea33a75ad1
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Media Management - Adding, Deleting, and Searching Media
    description: Learn how to manage media in Screenberry including adding, deleting, and searching for media files in the Media Library.
    openGraph:
      title: Media Management in Screenberry - Adding, Deleting, and Searching
      description: Learn how to manage media in Screenberry including adding, deleting, and searching for media files in the Media Library.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/organizing-media/managing-media-items.yaml
  visual_information_review: not-independently-verified
---

# Managing Media Items

## Adding Media Files

To add media files to the server, do one of the following:

- select a **Media Library** folder and press the **Add Media** button (Plus) at the bottom of the folders tree area, or
- drag and drop file(s) into an existing **Media Library** folder, or
- drag and drop file(s) into the playlist of an existing **Media Player** window.

In the opened **Add Media File(s)** dialog box, resize or change the quality of media item(s) if needed, then press the **Add** button.

If media files with the same name already exist, the user will be given the option to add new media files or overwrite existing ones.

The table below lists common file formats accepted for upload; it is not exhaustive. Recognition of an extension or container does not guarantee support for every codec or file variant it can contain.

|                  |                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------- |
| Video            | mov, avi, mp4, flv, mkv, vob, ogv, wmv, mpg, m2v, 3gp, m4v, ts, gif, m2t, m2ts, mxf, webm |
| Image            | jpg, tga, png, bmp, tif, jpeg, tiff, webp, exr, dpx                                       |
| Audio            | wav, mp3, aif, wma, ogg, ac3, aac, m4a, flac, ape, aiff, caf, m4r, mmf, opus              |
| Subtitles        | srt                                                                                       |
| Internal formats | RVA, EDVA, EDV, EDVI, ERVA, license                                                       |

> **Note**: If multiple files are uploaded and/or converted at once and the process is aborted by pressing the **Interrupt** button, the files that have been uploaded but not converted will be automatically removed from the server while those that have already been uploaded and converted will be added to the **Media Library**.

> **Note:** Uploaded files are converted into the native Screenberry container format \*.rva.

> **Note:** If the media files were uploaded directly to Screenberry Server (i.e. by using a shared folder or FTP), press the **Refresh** button (Reload) to reveal them in the **Media Library** view.

## Deleting Media Items

To delete media item(s), right-click the media item (selection of media items) in a folder contents area and select **Remove Item from Media Library** or press **`Shift`** + **`Del`**.

## Arranging Media Items

If the **Media** folder in the **Media Library** is selected, the contents of all folders will be displayed, and media items can be dragged and dropped between folders.

## Searching Media Items

To search for specific media items, type any part of the name in the **Media Library** search box. As a result, only the media items with names or user-defined labels matching the search criteria will be displayed in the contents area. If the **Media** folder is selected, the search will be performed in all folders.
