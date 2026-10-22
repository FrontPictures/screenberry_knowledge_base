<!-- Generated from facts.json by tools/implementation.mjs; edit facts.json. -->
# Frame timers

Source snapshot: **3.5.0 beta, source build 2422**. Static implementation review on 2026-10-22. Runtime verification: **not performed**. Product-owner review: **pending**. Applicability to released 3.4: **not established**.

[Evidence and use rules](README.md) · [All topics](README.md#topics)

## CODE-CLOCK-001

**Real-frame and Canvas-frame time use different inputs**

AppHost::process records NMTimer::uptimeUs in AppInfo before processMain. RealFrameTimer reads that stored uptime value. CanvasFrameTimer calculates currentFameNumber multiplied by frameTimeMs and 1000.

Scope: These are two time sources. Reading either timer repeatedly does not by itself advance a rendered frame or sample a new wall-clock time.

Source evidence (original source is not bundled):

- `Server/AppHost/AppHost.cpp`, lines 224–234; SHA-256 `e58082e98da641067595de98b037f09981b6e4fc0ccce6e671958281b064322d`.
- `Libs/NodesBase/FrameTimer.cpp`, lines 137–145; SHA-256 `65957db1e85f4d29de63d723e5e43bab256638ebf2f893740648834d7159ed7d`.
- `Libs/NodesBase/FrameTimer.cpp`, lines 153–161; SHA-256 `65957db1e85f4d29de63d723e5e43bab256638ebf2f893740648834d7159ed7d`.

## CODE-CLOCK-002

**Changing timer speed preserves elapsed accumulation**

FrameTimer::setSpeed adds the elapsed interval at the old speed into mAddDurationUs and updates its reference point before assigning the new speed. Pause fixes a paused point; Resume preserves the preceding accumulated interval. period(ms) subtracts one period and returns a boolean when the threshold is reached.

Scope: One period call does not return a count of all missed periods. Catch-up behavior depends on the caller.

Source evidence (original source is not bundled):

- `Libs/NodesBase/FrameTimer.cpp`, lines 15–45; SHA-256 `65957db1e85f4d29de63d723e5e43bab256638ebf2f893740648834d7159ed7d`.
- `Libs/NodesBase/FrameTimer.cpp`, lines 95–135; SHA-256 `65957db1e85f4d29de63d723e5e43bab256638ebf2f893740648834d7159ed7d`.
