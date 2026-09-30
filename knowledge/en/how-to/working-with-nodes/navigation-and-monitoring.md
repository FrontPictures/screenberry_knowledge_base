---
id: guide.working-with-nodes.navigation-and-monitoring
variant_id: guide.working-with-nodes.navigation-and-monitoring.imported-current-guide
title: Screenberry Node Graph - Navigation, Monitoring, & Color Coding
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
    path: archive/site/content/en/working-with-nodes/navigation-and-monitoring.mdx
    sha256: 60606cbbcd67c7b760b26ebec743a289cb714b591eac3f58faafc48057cb7b0d
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/working-with-nodes/navigation-and-monitoring.mdx
  canonical_url: https://help.screenberry.com/en/working-with-nodes/navigation-and-monitoring
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 60606cbbcd67c7b760b26ebec743a289cb714b591eac3f58faafc48057cb7b0d
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Node Graph - Navigation, Monitoring, & Color Coding
    description: Explore Screenberry node graph navigation and monitoring - auto-layout, zooming, panning, the color coding of nodes, and node search methods.
    openGraph:
      title: Navigating the Screenberry Node Graph
      description: Explore Screenberry node graph navigation and monitoring - auto-layout, zooming, panning, the color coding of nodes, and node search methods.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/working-with-nodes/navigation-and-monitoring.yaml
  visual_information_review: not-independently-verified
---

# Node Graph Navigation and Monitoring

## Arranging Nodes Automatically

To align the nodes in the **Node Graph**, right-click on the nodes and select **Auto-Layout Nodes** from the dropdown menu (or press the **`L`** key). If no nodes have been selected, using the **Auto-Layout Nodes** function will align the entire node tree.

## Fit To View For Nodes

To scale a view of one or more selected nodes to fit the **Node Graph** window, right-click on the nodes and select **Fit to View** from the dropdown menu (or press the **`A`** key). If no nodes have been selected, using the **Fit to View** function will bring the entire node tree into view.

## Changing Node Size

To resize a node, select it and drag any one of its corner handles (which become visible on mouseover).

## Zooming and Panning in the Node Graph

Тo zoom in and out a specific area of the **Node Graph**, move the mouse cursor to the location and use the mouse scroll wheel. Alternatively, click the button  in the top right corner and move the mouse to change the magnification.

To pan a view, do one of the following:

- Hold the mouse scroll wheel button or hold the **`Alt`** key while moving the mouse.
- Click the button (Pan Button) in the top right corner and move the mouse.

## Using the Navigator Panel

The **Navigator** panеl (located in the bottom left corner of the **Node Graph** window) is a thumbnail display of a node graph. The gray frame in the **Navigator** panеl is the proxy view area which corresponds to the currently viewable area in the window.

Pan the node graph view quickly by dragging the gray frame in the **Navigator** panеl.

Zoom in and out of the node graph by using the mouse scroll wheel while the cursor is over the **Navigator** panеl.

Right-clicking on the **Navigator** panel toggles between two display modes, standard and enlarged.

To show/hide the **Navigator** panel, right-click an empty area in the **Node Graph** window and enable/disable the **Minimap** checkbox (or press **`Ctrl`** + **`M`**).

## Nodes Color Coding

Color coding is used to indicate various types of nodes.

Node colors are determined by the active palette. A color assigned to the node type takes priority over a color assigned to its category. If neither is defined, the palette’s default node color is used.

## Searching the Nodes

To search for specific nodes added to the project, click the button  (located in the top left corner of the **Node Graph** window) or press **`Ctrl`** + **`F`**, and type any part of the node name in the opened search field. Any matching nodes are displayed in the list below. Click on the node name in the list to select it in the node graph.

If more than one node matches the search criteria, pressing **`F3`** will switch the selection to the next node in the results list.

## Using Tooltips for Monitoring Parameters and Data Transfer

When you hover over a node's parameter name, a pin, or a link between nodes in the node graph, an information tooltip appears, displaying key properties, including real-time data exchange when applicable. This functionality is particularly useful during setup, enabling quick access to relevant information without opening the node's **Settings** panel.

You can also quickly preview a video and monitor audio levels directly within the node graph:

- **Video Preview**: Hold the **Alt** key while hovering over an image link to view the real-time video being transferred.
- **Audio Level Meter**: Hold the **Alt** key while hovering over an audio link to monitor audio levels.
