<!-- Generated from facts.json by tools/implementation.mjs; edit facts.json. -->
# TouchEngine frame processing

Source snapshot: **3.5.0 beta, source build 2422**. Static implementation review on 2026-10-22. Runtime verification: **not performed**. Product-owner review: **pending**. Applicability to released 3.4: **not established**.

[Evidence and use rules](README.md) · [All topics](README.md#topics)

## CODE-INTEGRATION-003

**TouchEngine Low Latency changes when frame completion is awaited**

TouchEngineNode2 processes the previous frame before passing inputs and starting the next TOX frame. When Low Latency is enabled, it also finishes input images before processFrame and invokes doProcessPrevFrame again after starting that frame. doProcessPrevFrame obtains the current frame result with getResult(true) and reports an error if that result fails.

Scope: This explains the extra completion step. It does not establish a fixed latency reduction or throughput on any GPU or TOX project.

Source evidence (original source is not bundled):

- `Nodes/IntegrationNodes/TouchEngine/TouchEngineNode2.cpp`, lines 380–407; SHA-256 `e27fe73fe623d815960b19fe785adb4c115198cf73ce04202f13780635d5f9a4`.
- `Nodes/IntegrationNodes/TouchEngine/TouchEngineNode2.h`, lines 92–111; SHA-256 `ed94019ff1c17402936fe53cfb867e212044370270d5f065a1058393d3e66e60`.
- `Nodes/IntegrationNodes/TouchEngine/TouchEngineNode2.cpp`, lines 416–439; SHA-256 `e27fe73fe623d815960b19fe785adb4c115198cf73ce04202f13780635d5f9a4`.
