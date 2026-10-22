<!-- Generated from facts.json by tools/implementation.mjs; edit facts.json. -->
# Node graph processing

Source snapshot: **3.5.0 beta, source build 2422**. Static implementation review on 2026-10-22. Runtime verification: **not performed**. Product-owner review: **pending**. Applicability to released 3.4: **not established**.

[Evidence and use rules](README.md) · [All topics](README.md#topics)

## CODE-GRAPH-002

**Conditions for node processing**

NodesGroup combines the Enabled state of the node and ancestor groups, checks the node product mask and checks whether a required graphics context is available. Inputs/Outputs nodes and groups marked always-processing use a separate override. basicProcess is called separately; doProcess runs only when processNode is true. Disabled-node input actions are consumed through triggered().

Scope: Enabled alone is not the complete processing condition. Product-mask checks are implementation facts, not statements about commercial license entitlements.

Source evidence (original source is not bundled):

- `Libs/NodesBase/NodesGroup.cpp`, lines 965–1134; SHA-256 `d06b6767d3037779513407f7b3ac9be617f2806b1d6558dbc755d2d5209842f1`.

## CODE-GRAPH-003

**Order of work within a graph pass**

NodesGroup copies the current process-order list before iterating it. For each existing node it processes input notifiers and input links before basicProcess and the conditional doProcess. It then propagates changed state for smart outputs, collects output changes, checks shared resources and clears the processed input change flags.

Scope: This describes a node pass. The process-order calculation and special smart-link/resource behavior must be inspected separately for a particular graph.

Source evidence (original source is not bundled):

- `Libs/NodesBase/NodesGroup.cpp`, lines 995–1164; SHA-256 `d06b6767d3037779513407f7b3ac9be617f2806b1d6558dbc755d2d5209842f1`.

## CODE-GRAPH-004

**Runs per Frame repeats group processing**

Group declares Runs per Frame with default 1 and a parameter range of 1 to 1000. NodesGroup reads that value for Group instances, additionally bounds the process count to 0 through 1000, and calls the child group basicProcess that many times.

Scope: The repeated operation is group processing inside the parent pass. The counter does not itself create additional presented Canvas frames.

Source evidence (original source is not bundled):

- `Libs/NodesBase/Group.cpp`, lines 99–107; SHA-256 `3822dea390bc7ea9e935141b823dcceff3f408284056c666d3a303afde09e962`.
- `Libs/NodesBase/NodesGroup.cpp`, lines 921–930; SHA-256 `d06b6767d3037779513407f7b3ac9be617f2806b1d6558dbc755d2d5209842f1`.
- `Libs/NodesBase/NodesGroup.cpp`, lines 1061–1074; SHA-256 `d06b6767d3037779513407f7b3ac9be617f2806b1d6558dbc755d2d5209842f1`.
- `Libs/NodesBase/NodesGroup.cpp`, lines 1105–1107; SHA-256 `d06b6767d3037779513407f7b3ac9be617f2806b1d6558dbc755d2d5209842f1`.

## CODE-GRAPH-005

**Creating a node requires a registered instantiator**

NodeFactory rejects an empty node name or unknown type. createNodePriv also rejects a missing instantiator and a name containing /. A successful creation receives the description product mask, an optional StreamSource flag and its parent group.

Scope: A C++ class or catalog description by itself does not prove that the node can be instantiated in a particular build.

Source evidence (original source is not bundled):

- `Libs/NodesBase/NodeFactory.cpp`, lines 28–46; SHA-256 `48b4ca748d43b09f31964cddf493b6145bb0268cca61d84f3d11458857170d20`.
- `Libs/NodesBase/NodeFactory.cpp`, lines 114–146; SHA-256 `48b4ca748d43b09f31964cddf493b6145bb0268cca61d84f3d11458857170d20`.
