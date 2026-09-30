---
id: guide.media-playback.timelines.timeline-markers
variant_id: guide.media-playback.timelines.timeline-markers.imported-current-guide
title: Screenberry Keyframe Animation
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
    path: archive/site/content/en/media-playback/timelines/timeline-markers.mdx
    sha256: c5b17d33ce7f91fd781e8f547ab65040d94a0001ca2700ba274b95bb0612667b
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/media-playback/timelines/timeline-markers.mdx
  canonical_url: https://help.screenberry.com/en/media-playback/timelines/timeline-markers
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: c5b17d33ce7f91fd781e8f547ab65040d94a0001ca2700ba274b95bb0612667b
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Keyframe Animation
    description: Explore keyframe animation in Screenberry. Learn about setting, navigating, and adjusting keyframes for transformation, opacity, volume, and data item keyframing.
    openGraph:
      title: Keyframe Animation in Screenberry
      description: Comprehensive guide to understanding and using keyframe animation in Screenberry for various media transformations.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/media-playback/timelines/timeline-markers.yaml
  visual_information_review: not-independently-verified
---

# Timeline Markers

## Overview

Markers are used to indicate specific points on a timeline. They serve a variety of purposes, including organizing the flow of playback, adding playback controls, synchronizing the playback of multiple media players, making the editing process more efficient, and snapping the playhead or media items to a specific point on the timeline. Markers are color-coded for easier identification.

There are four types of markers that can be currently added to the Screenberry timeline:

- **Label Marker** ( (M1 Icon) \*): Adds a text label to a specific point on the timeline.
- **Pause Marker** ( (M2 Icon) \*): Halts playback at a specific point on the timeline.
- **Jump Marker** ( (M3 Icon) \*): Skips ahead or back to a specific point on the timeline.
- **Timecode Marker** ( (M4 Icon) \*): Marks a specific point on the timeline from which playback can be started upon receiving a matching timecode value.

\* The icon represents a button in the top toolbox. Clicking this button adds its associated marker to the timeline.

## Adding and Managing Markers

To add a marker, do one of the following:

- Right-click on the time ruler, and select the desired type of marker from the dropdown menu.
- Place the playhead at the desired position, then click on the respective marker icon located on the top toolbar.

To rename a marker, right-click on it and select **Edit** from the dropdown menu. In the dialog window that appears, enter the desired value in the **Name** field.

To move a marker, drag it on the time ruler or, for more precise positioning, right-click on the marker and select **Edit** from the dropdown menu. In the dialog window that appears, enter the desired value in the **Position** field.

Markers can be enabled or disabled. To disable a marker, right-click on the marker and deselect the **Enabled** checkbox in the dropdown menu.

To delete a marker, right-click on the marker and select **Delete** from the dropdown menu.

Setting up the **Label Marker** and the **Pause Marker** is simple and straightforward. However, using the **Jump Marker** and the **Timecode Marker** requires some further explanation.

## Jump Marker

The **Jump Marker** allows you to move the playhead to a specific position on the timeline, either to a specific time or to another marker. To set the **Jump Marker**, do the following:

1. Open the **Marker Properties** window. It appears automatically when you add the marker or can be accessed by right-clicking on the marker and selecting **Edit** from the dropdown menu.
2. Select the **Time** or **Marker** option for the **Jump To** parameter.
3. If you choose **Time**, enter the desired time in the **Time** field. If you choose **Marker**, select the desired marker name in the **Marker** dropdown.

## Timecode Marker

The **Timecode Marker** marks a specific point on the timeline from which playback of the timeline starts when the incoming timecode value matches the time value of the marker. For the **Timecode Marker** to function, certain conditions must be met:

1. The **Media Player** node must receive the timecode. In the node graph, connect the incoming timecode link to the input **Timecode In** pin of the **Media Player** node.
2. The media player should be set to accept the timecode. In the general timecode settings of the media player, select the **Accept** (Timecode) checkbox and deselect the **Follow** (Timecode) checkbox. Note that when the **Follow** (Timecode) checkbox is selected, the timeline will automatically play back in exact accordance with the timecode.
3. The timeline should be set to listen for the timecode. Enable the **Listening to the Timecode** toggle next to the timeline name in the **Playlist and Timeline List** panel, or right-click on the timeline name and select **Preferences** from the dropdown menu. In the window that appears, select the **Accept Timecode** checkbox.

If playback of the timeline needs to start at the **Timecode Marker**, but at a different time than the timecode value, use the **Timecode Offset** option. Right-click on the timeline name and select **Preferences** from the dropdown menu. In the window that appears, enter the desired value into the **Timecode Offset** field. For example, if the **Timecode Marker** is set on the timeline at 5 minutes but playback needs to start when the timecode value reaches 15 minutes, set the timecode offset to 10 minutes.

## Using Markers for Automation

Markers of any type, when added to the timeline, can be used for automation.

For example, the **On Item Started** node can be configured to listen for the event of a playhead reaching the specified marker, which will create a trigger that can be used to start some other processes. To achieve this, do the following:

1. Select the **On Item Started** node in the node graph.
2. In the settings for the node:
   - Select the media player that you want to monitor for marker events in the **Media Player** parameter.
   - Select **Timeline Control Point** for the **Item Selection Criteria** parameter.
   - Enter the name of the marker in the **Control Point Name** field.

Similarly, this event can be used to synchronize the playback of a timeline with the playback of a playlist in some other media player. To achieve this, do the following:

1. In the node graph, connect the **Output Events** pin of the source media player to the input **Events** pin of the target media player.
2. Switch to the target media player, select the desired playlist, and right-click on the media item that you want to map to the event. In the dropdown menu, select **Map Item to Event** to enable the state in which the media item is waiting for an event to be mapped to.
3. Switch to the source media player’s timeline, position the playhead right before the desired marker, and start playback. When the playhead passes the marker on the timeline, this event will be mapped to the media item in the playlist of the target media player.
