---
id: guide.working-with-nodes.linking-nodes
variant_id: guide.working-with-nodes.linking-nodes.imported-current-guide
title: Linking Nodes in Screenberry Node Graph
language: en
kind: how-to
status: in_review
owner: unassigned
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: existing-guide
    path: archive/site/content/en/working-with-nodes/linking-nodes.mdx
    sha256: 5d2a0e41ae82b06eda6fe6c2941eee7655647c7d5b3285f6b0a9b4a7a4b5b307
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/working-with-nodes/linking-nodes.mdx
  canonical_url: https://help.screenberry.com/en/working-with-nodes/linking-nodes
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 5d2a0e41ae82b06eda6fe6c2941eee7655647c7d5b3285f6b0a9b4a7a4b5b307
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Linking Nodes in Screenberry Node Graph
    description: Learn how to automatically and manually link nodes in Screenberry - creating, rearranging, and removing links for organized data flow.
    openGraph:
      title: Linking Nodes Effectively in Screenberry
      description: A comprehensive guide to linking nodes in Screenberry's node graph for efficient and organized data flow.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/working-with-nodes/linking-nodes.yaml
  visual_information_review: not-independently-verified
---

# Linking Nodes

## Creating Links Between Nodes Automatically

To create a link between nodes automatically, select one or more nodes and, while holding **`Ctrl`**, left-click on the target node — the system identifies parameters of the same type to establish the links. This is the fastest method of connecting nodes.

## Creating Links Between Nodes Manually

To manually connect nodes, left-click the input or output pin on a node and drag the link to the side of the node you want to link it to. The link will automatically attach to the appropriate pin of the target node and will be established upon releasing the mouse.

> **Note:** The link is possible only between pins of the same type.

> **Note:** More than one pin may be available for a given link. Drag the link along the side of the target node to view all valid connections.

> **Note:** When creating several links to a single pin, depending on the type of parameter, a new link will either replace an existing link or be added to an existing one.

## Removing Links Between Nodes

Right-clicking on the link or node pin (or its parameter name) and selecting **Unlink \[Parameter Name]** will remove the link.

Alternatively, **Shift**-clicking on the pin and dragging the link to an empty area of the **Node Graph** will also remove the link.

## Rearranging Links Between Nodes

To move a link (or group of links) from one pin to another, **Shift**-click on the pin and drag the link(s) to a new pin or node.

## Reestablishing Links Between Nodes Automatically

Left-click an empty area of the **Node Graph Editor** to deselect all the nodes. Holding **Ctrl**, select the nodes you want to connect, one by one, in the order in which they should be executed. The appropriate links between the selected nodes will be created automatically and any existing links that conflict with the new ones will be removed.

## Reordering Node Links

When several links are connected to the same input pin of a node, they are processed in the same order the links had been created. To change the processing order of inputs, right-click on the input parameter pin or name, and select **Reorder Links for \[Parameter Name]**. Reorder the inputs in the opened dialog box by dragging the link names or selecting names and using the arrow buttons (Reorderarrows).

## Using Reroute Pin

A **Reroute Pin** is a specialized node used to route links for parameters of the same type allowing multiple input and output connections. It helps to organize data flow and improve the visual clarity of a node graph.

To add a **Reroute Pin**, right-click on the link between nodes and select **Reroute Pin** from the dropdown menu.

To delete a **Reroute Pin**, right-click on it and select **Delete** from the dropdown menu (or press the **`Del`** key).
