<!-- Generated from facts.json by tools/implementation.mjs; edit facts.json. -->
# Media decoding and upload processing

Source snapshot: **3.5.0 beta, source build 2422**. Static implementation review on 2026-10-22. Runtime verification: **not performed**. Product-owner review: **pending**. Applicability to released 3.4: **not established**.

[Evidence and use rules](README.md) · [All topics](README.md#topics)

## CODE-CONTENT-003

**Image-sequence decoding requires an explicit frame rate**

RvaDecoder::initInputFileOrFolder fails when InputFile identifies a sequence and no sequenceFps argument was supplied. initStreams selects the LibAv, sequence or RVA/EDV route. For a sequence, an empty stream set marks parsing finished; a nonempty set must contain exactly one stream.

Scope: These branches do not establish support for every codec, file extension or image sequence in a shipping build.

Source evidence (original source is not bundled):

- `Libs/SMF/RvaDecoder.cpp`, lines 31–93; SHA-256 `cf1cfbc7b1b5d552f93b55380242d5bcb0ce2a018e250cc62310cccf7a7c1226`.

## CODE-UPLOAD-001

**Completed and terminal upload states differ**

UploadItem::isComplete returns true for done, upload error, conversion error and aborted. UploadManager displays Completed only for done and uses distinct failure/aborted labels for the other states. finishConversion chooses done only when result.success is true and no stop request exists; a stop request selects aborted, otherwise an unsuccessful result selects conversion error.

Scope: The internal isComplete predicate means a terminal queue state. It must not be interpreted as a successful import.

Source evidence (original source is not bundled):

- `Libs/NodesBase/UploadItem.h`, lines 11–22; SHA-256 `c4265a4df28fe83a365619cc3e157546a56a227287172549e9cb07db2be7c114`.
- `Libs/NodesBase/UploadItem.cpp`, lines 82–89; SHA-256 `6c619255884b8e003a7567d7ba4a93b0a6e1a39332d8c9e0a8726e618096a74b`.
- `Panel/PanelModules/MediaLibrary/UploadManager.cpp`, lines 195–212; SHA-256 `264e49cc8ecb2f6ee4ac712c630c20f66f6916a1724da97ddb33d2c25441a0d4`.
- `Server/ContentManager/UploadContent.cpp`, lines 306–357; SHA-256 `b9406f6183c9573910ba95b21a414e6506b02f48286d2f4820f1e4cceeff5219`.

## CODE-UPLOAD-002

**Pause, Resume and Abort operate differently**

UploadItem allows Pause for waiting-for-convert and converting states, and Resume for paused. UploadContent::pauseAll pauses unfinished conversion processes; resumeAll requeues paused processes. abortUploads marks eligible items aborted, requests a stop for running conversions or removes waiting conversions, and calls removeMedia for the collected destination paths.

Scope: These pause controls apply to processing. Abort is not equivalent to hiding a queue entry and does not promise preservation of an intermediate output.

Source evidence (original source is not bundled):

- `Libs/NodesBase/UploadItem.cpp`, lines 90–106; SHA-256 `6c619255884b8e003a7567d7ba4a93b0a6e1a39332d8c9e0a8726e618096a74b`.
- `Server/ContentManager/UploadContent.cpp`, lines 696–722; SHA-256 `b9406f6183c9573910ba95b21a414e6506b02f48286d2f4820f1e4cceeff5219`.
- `Server/ContentManager/UploadContent.cpp`, lines 509–566; SHA-256 `b9406f6183c9573910ba95b21a414e6506b02f48286d2f4820f1e4cceeff5219`.

## CODE-UPLOAD-003

**Clearing completed uploads removes queue history**

UploadContent::clearCompletedUploads erases UploadItem entries whose isComplete predicate is true and sends the updated list. It does not call removeMedia. Because isComplete includes failures and aborted items, those terminal records are cleared along with successful ones.

Scope: This is the queue-clear handler. Media deletion uses a separate path.

Source evidence (original source is not bundled):

- `Server/ContentManager/UploadContent.cpp`, lines 295–305; SHA-256 `b9406f6183c9573910ba95b21a414e6506b02f48286d2f4820f1e4cceeff5219`.
- `Libs/NodesBase/UploadItem.cpp`, lines 82–89; SHA-256 `6c619255884b8e003a7567d7ba4a93b0a6e1a39332d8c9e0a8726e618096a74b`.
- `Server/ContentManager/UploadContent.cpp`, lines 722–733; SHA-256 `b9406f6183c9573910ba95b21a414e6506b02f48286d2f4820f1e4cceeff5219`.

## CODE-UPLOAD-004

**Upload Again needs a source path available to Panel**

UploadItem stores its remote destination and panelFilePath separately. UploadManager::canBeUploadAgain checks that panelFilePath exists through the Panel-side FileSystem. uploadAgain passes that local source and the recorded remote destination back to processUrlsDrop.

Scope: A matching path string on Server does not establish that the source exists on the Panel computer. The existence check also does not guarantee that a subsequent upload succeeds.

Source evidence (original source is not bundled):

- `Libs/NodesBase/UploadItem.cpp`, lines 5–25; SHA-256 `6c619255884b8e003a7567d7ba4a93b0a6e1a39332d8c9e0a8726e618096a74b`.
- `Panel/PanelModules/MediaLibrary/UploadManager.cpp`, lines 227–238; SHA-256 `264e49cc8ecb2f6ee4ac712c630c20f66f6916a1724da97ddb33d2c25441a0d4`.
- `Panel/PanelModules/MediaLibrary/UploadManager.cpp`, lines 261–271; SHA-256 `264e49cc8ecb2f6ee4ac712c630c20f66f6916a1724da97ddb33d2c25441a0d4`.
- `Libs/SBCore/FileSystem/RemotePath.cpp`, lines 40–55; SHA-256 `90d67550f1c382e2fdaf70ec910e5f89b223a7813b9ef35837baa7d42f8575c4`.

## CODE-UPLOAD-005

**Upload progress accounts for stages**

UploadItem uses the item size for total upload work and includes conversion work only when hasConversionStage is set. isCountedForProgress includes queued, uploading, converting and done states, and excludes paused, failed and aborted states. A done item reports progress 1.0.

Scope: These are work/progress calculations, not an estimate of remaining seconds. Transfer and conversion are separate stages.

Source evidence (original source is not bundled):

- `Libs/NodesBase/UploadItem.cpp`, lines 118–158; SHA-256 `6c619255884b8e003a7567d7ba4a93b0a6e1a39332d8c9e0a8726e618096a74b`.
- `Libs/NodesBase/UploadItem.cpp`, lines 74–80; SHA-256 `6c619255884b8e003a7567d7ba4a93b0a6e1a39332d8c9e0a8726e618096a74b`.

## CODE-UPLOAD-006

**A low-space check can pause processing**

UploadContent::updateDiskFreeSpaceInfo checks free space for ./Media after its update interval. If the integer calculation freeSpace / 1024 / 1024 is at most 200 and there are running tasks, it calls pauseAll. It then looks for a conversion in progress to attach the low-space error; if none is found, it logs an internal error and returns.

Scope: The checked path is ./Media in the Server process context. This is not a check of every external destination or a guarantee of sufficient space for the remaining job.

Source evidence (original source is not bundled):

- `Server/ContentManager/UploadContent.cpp`, lines 153–181; SHA-256 `b9406f6183c9573910ba95b21a414e6506b02f48286d2f4820f1e4cceeff5219`.
