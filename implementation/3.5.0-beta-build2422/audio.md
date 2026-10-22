<!-- Generated from facts.json by tools/implementation.mjs; edit facts.json. -->
# Audio processing and channel counts

Source snapshot: **3.5.0 beta, source build 2422**. Static implementation review on 2026-10-22. Runtime verification: **not performed**. Product-owner review: **pending**. Applicability to released 3.4: **not established**.

[Evidence and use rules](README.md) · [All topics](README.md#topics)

## CODE-AUDIO-001

**Audio processing has its own block loop**

When startAudioThread is true, AudioEngine starts a thread that calls processGraph with mSystemFrameSize and schedules the next iteration using the frame size and sample rate. processGraph calls processAudio(samples) for each audio node under the graph mutex. videoFrameProcessFinished applies deferred changes and notifies audio nodes under the same mutex.

Scope: This is the internal-thread path. Device-clock mode and actual end-to-end latency are separate topics.

Source evidence (original source is not bundled):

- `Libs/NodesBase/AudioEngine/AudioEngine.cpp`, lines 10–68; SHA-256 `6dd555a20dbf228eee3523e09949487ac582257d95d200a541cfc23ae4240afc`.

## CODE-CLOCK-005

**Audio output channel adjustment resizes channel storage**

AudioStream::pushOutput applies volume and calls trimOrExtendChannels with the device output-channel count. AudioBlob updates that count and resizes its channel array and sample arrays. This path performs no mixing matrix and does not duplicate a mono channel into a second channel. With no data in the ordinary non-clock-cache path, AudioStream writes silence.

Scope: Channel-count adjustment is not a downmix or a channel-routing plan. Device-clock caching follows a separate branch.

Source evidence (original source is not bundled):

- `Nodes/AudioNodes/AudioStream.cpp`, lines 170–193; SHA-256 `e6845942f4118148f4dd8f03383754e52a705b04c97ca4337759554612d8cd37`.
- `Libs/SBCore/AudioEngine/AudioBlob.cpp`, lines 122–130; SHA-256 `eeaaac66af85f35a937a160800c1f9dbeee415f345aba18840de607648de4a03`.
- `Libs/SBCore/AudioEngine/AudioBlob.cpp`, lines 169–183; SHA-256 `eeaaac66af85f35a937a160800c1f9dbeee415f345aba18840de607648de4a03`.
