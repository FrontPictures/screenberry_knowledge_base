---
id: guide.working-with-nodes.node-parameters-and-settings
variant_id: guide.working-with-nodes.node-parameters-and-settings.imported-current-guide
title: Screenberry Node Parameters and Settings
language: en
kind: reference
status: in_review
owner: unassigned
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: existing-guide
    path: archive/site/content/en/working-with-nodes/node-parameters-and-settings.mdx
    sha256: 211d6dfa71328b453a079aff547c77280c849cf2fb5f70db3192a2b6cdf683c5
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/working-with-nodes/node-parameters-and-settings.mdx
  canonical_url: https://help.screenberry.com/en/working-with-nodes/node-parameters-and-settings
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 211d6dfa71328b453a079aff547c77280c849cf2fb5f70db3192a2b6cdf683c5
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Node Parameters and Settings
    description: Learn about the different types of node parameters, editing node settings, and managing the visibility of nodes.
    openGraph:
      title: Understanding Node Parameters in Screenberry
      description: Learn about the different types of node parameters, editing node settings, and managing the visibility of nodes.
presentation:
  mode: text-only
  illustrations: illustrations/en/reference/working-with-nodes/node-parameters-and-settings.yaml
  visual_information_review: not-independently-verified
---

# Node Parameters and Settings

## Node Parameters (Pins)

In Screenberry, every node has a set of parameters. These parameters are represented by pins on the nodes. The flow of data, actions, or messages between nodes is established by creating links between the pins of corresponding parameters.

**Data** (gray pin) parameter contains simple data (number, string, timecode) or a pointer to Screenberry internal resources (i.e. image).

**SmartLink** (blue pin) establishes a transaction of a process between linked nodes.

**Action** (orange pin) supports the creation of multiple links to one input. The value of each resulting frame will be determined using logical OR for all input values.

**Messages** (pink pin) also enables the creation of multiple links to one input. All incoming messages will be queued on the input.

## Node Settings

Selecting the node will open its **Settings** panel where node parameters can be edited.

The change of the node parameter value in the **Settings** panel is indicated by the button (Redoarrow 1) next to the parameter value field. Clicking on this button restores the default parameter value.

### Settings of Multiple Selected Nodes

When more than one node is selected, only the parameters common to all selected nodes are displayed in the **Settings** panel and can be edited. Additionally, information regarding the number of nodes of each type within the selection will be displayed on the buttons at the top of the **Settings** panel. Click a button with a number to have only the nodes of that type remain in the current selection.

## Hiding/Showing Individual Node Parameters

To hide a parameter, right-click on the parameter name and select **Hide** from the dropdown menu. To display hidden parameters, click **Show** in the **Hidden parameters** field. The parameters with a hidden status are displayed in italics. To unhide a parameter, right-click on the parameter name and select **Show** from the dropdown menu. To stop displaying hidden parameters, click **Hide** in the **Hidden parameters** field.

> **Note:** Less frequently used and more advanced parameters for some nodes are hidden by default.

## Hiding/Showing Node Pins

In the **Settings** panel, left-clicking on the dot to the left of the parameter name toggles between displaying and hiding the corresponding parameter pin on the node. A blue dot  indicates that the parameter pin is displayed, and a gray dot  indicates that it is hidden.

When a parameter pin with an established link becomes hidden, this link will remain active and be displayed as a dimmed straight line.
