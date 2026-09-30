---
id: guide.getting-started.first-project
variant_id: guide.getting-started.first-project.imported-current-guide
title: Run Your First Screenberry Project
language: en
kind: tutorials
status: in_review
owner: unassigned
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: existing-guide
    path: archive/site/content/en/getting-started/first-project.mdx
    sha256: d66a9973ddaddc0175b3a474b244538803c22290b3e33688605ac7e1960726ae
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/getting-started/first-project.mdx
  canonical_url: https://help.screenberry.com/en/getting-started/first-project
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: d66a9973ddaddc0175b3a474b244538803c22290b3e33688605ac7e1960726ae
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Run Your First Screenberry Project
    description: Connect Screenberry Panel to Server, create a project, build a basic node graph, add media, preview playback, and save the project.
    openGraph:
      title: Run Your First Screenberry Project
      description: Create and run a basic Screenberry project with Canvas and Media Player nodes.
presentation:
  mode: text-only
  illustrations: null
  visual_information_review: not-independently-verified
---

# Run Your First Screenberry Project

In this tutorial, you will connect **Screenberry Panel** to **Screenberry Server**, create a blank project, build a basic node graph, add media, and confirm that it plays on the **Screenberry Server** output.

The instructions follow the official [Running Your First Screenberry Project video tutorial](https://www.youtube.com/watch?v=nbY1YFiltRU). The video demonstrates **Screenberry Server** and **Screenberry Panel** running on one Windows computer; the same applications can run on separate computers connected through the same network.

## Start Screenberry

1. Start **Screenberry Server** on the Media Server computer. Its window displays the graphical output produced by the project.

   (Screenberry Server output window before a project is loaded)

2. Start **Screenberry Panel**. If a language-selection window appears on first launch, choose your preferred language.

   (Screenberry Panel starting on the Operator Workstation)

3. On the **Welcome** screen, select the **Screenberry Server** connection. The first time you use Screenberry, select **New Server Connection**.

   (Screenberry Panel Welcome screen for selecting a Server connection)

4. Select **New Project**.

5. Enter a descriptive project name and create a blank project.

After the project is created, **Screenberry Panel** connects to **Screenberry Server** and opens the default workspace with an empty **Node Graph** widget.

## Build the node graph

Screenberry projects are built from nodes. Nodes define the operations in a project, and the links between them define how data flows.

1. Add a **Canvas** node to the **Node Graph**. You can drag it from the node list or right-click the **Node Graph** and search for it by name.

   The **Canvas** creates the graphical context used for output. After it is added, the **Screenberry Server** output window is initialized and appears black until image content reaches the **Canvas**.

2. Add a **Media Player** node.

3. Connect the **Image** output of the **Media Player** node to the corresponding image input on the **Canvas** node.

## Add and play media

1. Add the **Media Player** widget to the workspace.

2. Drag one or more media files from a system folder to the default playlist in the **Media Player** widget.

   Screenberry uploads the files to **Screenberry Server** and converts them when required. Uploaded files are also available in the **Media Library**.

3. Use the **Play**, **Pause**, and **Stop** controls at the bottom of the **Media Player** widget to control the media.

4. Check the **Screenberry Server** output window. On a two-computer system, check the output on the Media Server computer.

## Preview the output in Panel

To monitor the output without switching to the **Screenberry Server** window:

1. Add a **Video Preview** node to the **Node Graph**.
2. Connect the same **Image** output from the **Media Player** node to the **Image** input of the **Video Preview** node.
3. Add the **Video Preview** widget to the workspace.

The widget can remain in the workspace or be used as a floating window. If you close it, double-click the **Video Preview** node to open it again.

## Save the project

Select **File** > **Save Project** before closing Screenberry. You can also configure automatic save intervals in **Preferences**.

You now have a Screenberry project that sends **Media Player** output to a **Canvas** and can be monitored from **Screenberry Panel**.
