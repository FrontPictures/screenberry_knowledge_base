<!-- Generated from facts.json by tools/implementation.mjs; edit facts.json. -->
# JSON API contracts

Source snapshot: **3.5.0 beta, source build 2422**. Static implementation review on 2026-10-22. Runtime verification: **not performed**. Product-owner review: **pending**. Applicability to released 3.4: **not established**.

[Evidence and use rules](README.md) · [All topics](README.md#topics)

## CODE-API-001

**JSON API command dispatch**

JsonApiFactory registers command factories through std::call_once. getCommand requires a cmd member that can be read as a string, rejects missing or unparseable cmd values, rejects names absent from the factory and constructs the matching command. Descriptions, parameter schemas and mutating metadata are stored separately for commands with a nonempty description.

Scope: Registration and metadata do not prove successful execution or authorize a command. Each command implementation defines its validation and effects.

Source evidence (original source is not bundled):

- `Server/Commands/JsonApi/JsonApiFactory.cpp`, lines 64–76; SHA-256 `dd9afdbeea85fa9f2091f1aad34cfc9204510e46dec5a07e2dc8ed0fdd741605`.
- `Server/Commands/JsonApi/JsonApiFactory.cpp`, lines 79–173; SHA-256 `dd9afdbeea85fa9f2091f1aad34cfc9204510e46dec5a07e2dc8ed0fdd741605`.

## CODE-API-002

**SetParameter validates and dispatches a parameter command**

JSetParameter finds the node parameter, clones it, requires value and loads that JSON value into the clone through NParamToJson. It serializes the clone and sends SetNodesParamEasy to the parent group, then returns getSuccess().

Scope: This success path contains no independent check of an external device or physical result. The accepted JSON shape depends on the parameter type.

Source evidence (original source is not bundled):

- `Server/Commands/JsonApi/NodeGraphCommands/JSetParameter.cpp`, lines 9–32; SHA-256 `f74fa2df7501a897f5e885c2bc4c27923471b3945bd3e3e495feaa27071f92bc`.
- `Server/Commands/JsonApi/NodeGraphCommands/JSetParameter.h`, lines 16–38; SHA-256 `6b671db09dc460e499fe28e8cf096595da43a82c0823cb902afc4c54e69223b1`.

## CODE-ITEM-003

**Timeline JSON properties use seconds**

ItemPropertyTimelineDataPos exports position through usToS and imports a JSON double multiplied by 1e6 into int64. ItemPropertyTimelineDataStartOffset also exports seconds and imports through sToUs. StartOffset applies to media timeline items, and its isSkip predicate is true when StartFrom is zero.

Scope: Internal microsecond values must not be copied into these JSON properties without conversion. The skip predicate does not remove the underlying feature.

Source evidence (original source is not bundled):

- `Server/Commands/JsonApi/MediaPlayerCommands/MediaItemPropertiesFactory/ItemPropertyTimelineDataPos.cpp`, lines 12–26; SHA-256 `eabd0c94c6a66b92337669b67a28f16ea0d86b0e6b05b5132b6f4caa92fb9518`.
- `Server/Commands/JsonApi/MediaPlayerCommands/MediaItemPropertiesFactory/ItemPropertyTimelineDataStartOffset.cpp`, lines 12–32; SHA-256 `70a2e9fd31f89766a2c9c6d217419269c3d2aaebe2785b94eae3d734e39f3693`.
