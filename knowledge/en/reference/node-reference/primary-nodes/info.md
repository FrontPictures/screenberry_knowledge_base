---
id: guide.node-reference.primary-nodes.info
variant_id: guide.node-reference.primary-nodes.info.imported-current-guide
title: Screenberry Info Node - Monitoring Parameter Values
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
    path: archive/site/content/en/node-reference/primary-nodes/info.mdx
    sha256: a6a78b20072aa351e37e5943866575edac3e1471f324c3e611c55628cd2966b5
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/node-reference/primary-nodes/info.mdx
  canonical_url: https://help.screenberry.com/en/node-reference/primary-nodes/info
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: a6a78b20072aa351e37e5943866575edac3e1471f324c3e611c55628cd2966b5
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Info Node - Monitoring Parameter Values
    description: Use the Info node to display parameter values and image previews directly in the Screenberry Node Graph.
    openGraph:
      title: Screenberry Info Node - Monitoring Parameter Values
      description: Use the Info node to display parameter values and image previews directly in the Screenberry Node Graph.
presentation:
  mode: text-only
  illustrations: null
  visual_information_review: not-applicable
---

# Info

The **Info** node displays the value of a connected parameter directly in the **Node Graph**, allowing you to monitor data without leaving the workspace. It supports various parameter types, including timecodes, images, vectors, and Boolean values.

The node is useful for inspecting data at a specific point in the node graph, checking connections, monitoring changing values, and troubleshooting.

## Monitoring a Parameter

1. Add an **Info** node to the **Node Graph**, see [Adding and Managing Nodes](../../../how-to/working-with-nodes/adding-and-managing-nodes.md)
2. Drag a link from the pin of the parameter you want to monitor onto the **Info** node and release it anywhere over the node.
3. The node displays the connected parameter's value, updating as it changes.

The displayed information adapts to the parameter type, allowing you to inspect different types of data directly within the node graph. This is useful when checking connections, monitoring changing values, or troubleshooting a node graph.

For general instructions on creating, rearranging, and removing connections, see [Linking Nodes](../../../how-to/working-with-nodes/linking-nodes.md).

## Opening the Info Widget

Double-click the **Info** node to open its widget, or click the **Open** button on the node.

You can drag the widget and position it anywhere in the workspace. It provides a dedicated display for monitoring the selected parameter, even when the **Info** node itself is no longer visible in the Node Graph or the Node Graph is not in view.

## Settings

The **Settings** panel provides controls for selecting the source and adjusting the display. Use **Auto Font Size** to size text automatically, or turn it off and adjust **Font Size** manually. **Text Padding** controls the space around the displayed text.

| Parameter              | Description                                                                 |
| ---------------------- | --------------------------------------------------------------------------- |
| Node                   | Name of the node containing the parameter to monitor.                       |
| Parameter Name         | Name of the parameter to display from the chosen node.                      |
| Auto Font Size         | Automatically adjusts the text size to the available display area.          |
| Font Size              | Sets the text size when **Auto Font Size** is disabled.                     |
| Text Padding           | Sets the padding around the displayed text, in pixels.                      |
| Stream Size            | Sets the width (**W**) and height (**H**) of the preview stream, in pixels. |
| Show On Screen Options | Shows or hides the on-screen options in the preview.                        |
