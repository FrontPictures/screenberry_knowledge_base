---
id: guide.web-panel
variant_id: guide.web-panel.imported-current-guide
title: Screenberry Web Control Panel - Remote Media Management and Playback
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
    path: archive/site/content/en/web-panel.mdx
    sha256: 2b268f3da506df92b007a9bb76c3f882bf1c731b8a9241284dafc1efdf4ccb9c
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/web-panel.mdx
  canonical_url: https://help.screenberry.com/en/web-panel
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 2b268f3da506df92b007a9bb76c3f882bf1c731b8a9241284dafc1efdf4ccb9c
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Web Control Panel - Remote Media Management and Playback
    description: Access media players, manage playlists, and edit media item settings remotely from any device with the HTML5-powered web control panel.
    openGraph:
      title: Screenberry Web Control Panel - Remote Media Management and Playback
      description: Access media players, manage playlists, and edit media item settings remotely from any device with the HTML5-powered web control panel.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/web-panel.yaml
  visual_information_review: not-independently-verified
---

# Web Control Panel

## Overview

The web control panel provides a platform-independent web interface powered by HTML 5 that enables multiple users to operate the Screenberry server simultaneously via the web browser from a computer, tablet, or smartphone.

## Accessing Web Panel

To access the web panel, do the following:

1. In the **Node Graph**, add the **WebServer** node. Notice that the default **Port** 8081 is selected in the settings of the node. You can choose another port if port 8081 is already in use.
2. Enter the URL [http://127.0.0.1:8081](http://127.0.0.1:8081/) (or [http://localhost:8081](http://localhost:8081/)) in your web browser if you’re accessing the web panel from the same machine that hosts the Screenberry server. When accessing from a mobile phone or another computer on the same computer network, you can enter any of the IP addresses associated with the Screenberry server computer. For example, the URL may look like [http://192.168.31.218:8081](http://192.168.31.218:8081/).

> **Note:** The web panel provides access to the media players, playlists, and widgets currently created in Screenberry.

> **Note:** A known issue affects some builds of the Screenberry version 2.8.x, in which the web server components are not copied into the _Resources_ folder of the newly created Screenberry project. In case you get an empty page after completing the above steps, please copy the files from [this archive](https://help.screenberry.com/downloads/Web-Panel-Components.zip) into the _Resources/webServer_ folder of the project manually.

## Media Playback

The web panel provides control over media playback and playlist management for the **Media Players** created in Screenberry.

### Playlist Selection

To access the desired playlist, do the following:

1. Click on the **Screenberry Web Panel** menu button (Burgmenu) located at the top left corner and select **Media Player**.
2. Click on the **Settings** button  located at the bottom right corner to open the right sidebar.
3. Select the **Media Player** in the dropdown menu.
4. Select the playlist in the dropdown menu.

### Playback Controls

1. &#x20;**Play Selected Item** starts playback of a selected media item.
2. &#x20;**Play** starts playback from the current playhead position.
3. &#x20;**Pause** freezes playback at the current playhead position.
4. &#x20;**Stop** ends playback.
5. (Rew) **Previous Item** jumps to the previous media item in the playlist.
6. (Fwd) **Next Item** jumps to the next media item in the playlist.
7. &#x20;**Volume Control** adjusts the overall audio volume for the **Media Player** output.

### Media Items Playback

To start playback of a media item in the playlist, do one of the following:

- Press the **Play** button  to start playback from the current playhead position.
- Select the media item in the playlist and press the **Play Selected Item** button.

### Media Item Settings

To access media item settings, select a media item and press the **Settings** button  located at the bottom right corner.

The following media item settings are available for editing:

- **Title** changes the name of a media item.
- **Fade In** defines fade in time for a media item in seconds (crossfades a media item with a previous one).
- **Pause on First Frame** / **Pause on Last Frame** specifies whether the media item’s playback should be paused on the first or last frame.
- **Loops** and **Infinite Loop** specify whether the media item should be played in a loop.
- **Volume** adjusts the volume of a selected media item’s audio output.

### Managing Playlists

To manage playlists, click on the **Settings** button  located at the bottom right corner to open the right-sidebar, and then click on the playlist dropdown menu. You can perform the following actions:

- To add a new playlist, click on the **Add New Playlist** button.
- To rename a playlist, click the **Edit** icon  next to the playlist name, and enter a new name in the opened dialog box.
- To delete a playlist, click the **Trash** icon  next to the playlist name.

### Organizing Media Items in Playlists

To manage media items in the playlists, click on the **Edit** floating button (Edit Big). You can perform the following actions:

- To add media items, click on the button (Plus) if the playlist is empty or the icon (Plus Icon) on the particular media item after which media items should be added. Select media items in the opened **Media Library** window and press the **Add** button.
- To delete a media item, click the icon (X Icon) on the media item.
- To change the order of media items, drag the media item to the desired position.

When you have finished editing the playlist, click on the **Edit** floating button (Edit Big) again to exit the editing mode.

## Working with Widgets

The web panel allows access to the widgets added in Screenberry.

To access the desired widget, do the following:

1. Click on the Screenberry Web Panel menu button located at the top left corner and select **Widgets**.
2. Select the widget in the dropdown menu.
