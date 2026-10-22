<!-- Generated from facts.json by tools/implementation.mjs; edit facts.json. -->
# Media playback and timeline coordinates

Source snapshot: **3.5.0 beta, source build 2422**. Static implementation review on 2026-10-22. Runtime verification: **not performed**. Product-owner review: **pending**. Applicability to released 3.4: **not established**.

[Evidence and use rules](README.md) · [All topics](README.md#topics)

## CODE-MEDIA-002

**Autoplay and previous-state restoration**

During MediaPlayer initialization, the branch without previous states enables autoplay only when both the Autoplay parameter and mProcessAutoplay are true; otherwise it calls Stop. When previous states exist, it calls restorePrevState. The autoplay call occurs after setInitialized(true).

Scope: This establishes the initialization branches, not which item autoplay selects or the output visible on a physical display.

Source evidence (original source is not bundled):

- `Nodes/MediaPlayer/MediaPlayer.cpp`, lines 297–325; SHA-256 `4dcd5aedd7a11a6933a44775cdba9a8ce41d6efae09ed957a15d8fbeff153e84`.

## CODE-MEDIA-005

**Playlist, Timeline and Matrix use distinct processors**

ProcessorController constructs PlaylistProcessor, TimelineProcessor and MatrixProcessor. When switching to a registered different processor, it stops and suspends the current processor, assigns the new one and activates it. A non-forced request for the already selected type returns without switching.

Scope: This describes processor switching. It is not a promise of identical pause, seek, timing or transition behavior across the three modes.

Source evidence (original source is not bundled):

- `Nodes/MediaPlayer/Processors/ProcessorController.cpp`, lines 13–35; SHA-256 `49e348b8029d6216309f28d43c9f08f107787803799c0348fe3d696bd3e58ebd`.
- `Nodes/MediaPlayer/Processors/ProcessorController.cpp`, lines 43–71; SHA-256 `49e348b8029d6216309f28d43c9f08f107787803799c0348fe3d696bd3e58ebd`.
- `Nodes/MediaPlayer/Processors/ProcessorController.cpp`, lines 86–126; SHA-256 `49e348b8029d6216309f28d43c9f08f107787803799c0348fe3d696bd3e58ebd`.

## CODE-TIME-005

**Declared synchronization modes and defaults**

Sync lists Real Time, Smooth Playback and Play Every Frame for playlists, and Real Time and Smooth Playback for timelines. defaultPlaylistSyncMode returns sync_video, the Smooth Playback entry. defaultTimelineSyncMode returns sync_time, the Real Time entry.

Scope: These are defaults in this snapshot. Saved settings and the defaults of other versions have not been verified.

Source evidence (original source is not bundled):

- `Libs/SBCore/Sync/Sync.cpp`, lines 5–22; SHA-256 `ad9a6d2bc7cb33b732c468e73a941a9e62d952ebcdd2fd3481e374192a6ea2d7`.
- `Libs/SBCore/Sync/Sync.h`, lines 9–15; SHA-256 `30077b3c301ab6028163fa05e487b5f1707178fef13d68e1517dd423732421dd`.

## CODE-ITEM-002

**Timeline position and item time have an explicit conversion**

TimelineData::mapToItemTime calculates globalTime − Pos + StartFrom. mapToTimelineTime calculates localTime − StartFrom + Pos. The keyframe insertion and retrieval paths use these conversions. For example, Pos = 10 seconds and StartFrom = 2 seconds map timeline time 11 seconds to item time 3 seconds.

Scope: The methods store time in microseconds; the example expresses the same arithmetic in seconds. This is not a claim about every UI time display.

Source evidence (original source is not bundled):

- `Server/Commands/MediaPlayer/MediaItem/TimelineData.cpp`, lines 36–56; SHA-256 `1f9ea034a013f6402395a55c96e90637372f357895c63d0e2b81cb6632eb7292`.
- `Server/Commands/MediaPlayer/MediaItem/TimelineData.cpp`, lines 111–128; SHA-256 `1f9ea034a013f6402395a55c96e90637372f357895c63d0e2b81cb6632eb7292`.
