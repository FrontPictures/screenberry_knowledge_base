<!-- Generated from facts.json by tools/implementation.mjs; edit facts.json. -->
# Workspaces and layout synchronization

Source snapshot: **3.5.0 beta, source build 2422**. Static implementation review on 2026-10-22. Runtime verification: **not performed**. Product-owner review: **pending**. Applicability to released 3.4: **not established**.

[Evidence and use rules](README.md) · [All topics](README.md#topics)

## CODE-PANEL-002

**Workspace layouts have a server-side model**

WorkspaceForm::onLayoutChanged starts a single-shot 500 ms timer. Its timeout serializes the docking state and sends updateWorkspaceLayout to AppHost. PanelLayoutManager updates the corresponding server-side layout and broadcasts WorkspaceLayout. A receiving Panel restores the layout when it belongs to its current workspace and differs from the previous layout, temporarily blocking layout-change feedback.

Scope: The 500 ms value is a UI update delay, not a disk-save interval or a network delivery guarantee. Local preferences and floating-window geometry require separate analysis.

Source evidence (original source is not bundled):

- `Panel/WorkspaceForm/WorkspaceForm.cpp`, lines 317–324; SHA-256 `2b092e93ec02570192b4f7955f147c6a06cacc26045aac75c036cec41ee262fb`.
- `Panel/WorkspaceForm/WorkspaceForm.cpp`, lines 656–664; SHA-256 `2b092e93ec02570192b4f7955f147c6a06cacc26045aac75c036cec41ee262fb`.
- `Server/Commands/PanelLayout/PanelLayoutManager.cpp`, lines 72–83; SHA-256 `5eb2ee5fa8b7852c6772760c044b3799e0af3aa2892c4436d1adabe83201e2c2`.
- `Panel/WorkspaceForm/WorkspaceForm.cpp`, lines 713–728; SHA-256 `2b092e93ec02570192b4f7955f147c6a06cacc26045aac75c036cec41ee262fb`.

## CODE-PANEL-003

**Duplicating and removing a workspace**

The duplication handler copies the selected WorkspaceLayout, chooses an unused name, sets its ID to -1 and submits it as a new workspace immediately after the original. The server has separate handlers for adding, removing and renaming workspaces. When Panel receives removal of its current workspace, it chooses the nearest remaining workspace and restores that layout, or clears the current ID if none remains.

Scope: The inspected duplication path copies layout data; it does not issue node-creation commands. This record does not settle disputed widget-instance, chooser-label or Reset Layout behavior.

Source evidence (original source is not bundled):

- `Server/Commands/PanelLayout/PanelLayoutManager.cpp`, lines 21–48; SHA-256 `5eb2ee5fa8b7852c6772760c044b3799e0af3aa2892c4436d1adabe83201e2c2`.
- `Server/Commands/PanelLayout/PanelLayoutManager.cpp`, lines 85–144; SHA-256 `5eb2ee5fa8b7852c6772760c044b3799e0af3aa2892c4436d1adabe83201e2c2`.
- `Panel/WorkspaceForm/WorkspaceForm.cpp`, lines 611–623; SHA-256 `2b092e93ec02570192b4f7955f147c6a06cacc26045aac75c036cec41ee262fb`.
- `Panel/WorkspaceForm/WorkspaceForm.cpp`, lines 736–757; SHA-256 `2b092e93ec02570192b4f7955f147c6a06cacc26045aac75c036cec41ee262fb`.
