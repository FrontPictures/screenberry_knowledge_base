---
id: guide.node-reference.integration-nodes.touchengine
variant_id: guide.node-reference.integration-nodes.touchengine.imported-current-guide
title: Screenberry TouchEngine Node - Integrating TouchDesigner Projects
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
    path: archive/site/content/en/node-reference/integration-nodes/touchengine.mdx
    sha256: c3234a7dcd1f6ab32ae0ec79d286ed9db18d99a687d0c411b3225e306c56a4d6
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/node-reference/integration-nodes/touchengine.mdx
  canonical_url: https://help.screenberry.com/en/node-reference/integration-nodes/touchengine
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: c3234a7dcd1f6ab32ae0ec79d286ed9db18d99a687d0c411b3225e306c56a4d6
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry TouchEngine Node - Integrating TouchDesigner Projects
    description: Learn how to integrate TouchDesigner projects with the TouchEngine node in Screenberry for real-time and interactive effects and data processing.
    openGraph:
      title: Integrating TouchDesigner Projects in Screenberry - TouchEngine Node
      description: Step-by-step guide on using Screenberry's TouchEngine Node for integrating TouchDesigner projects in Screenberry.
presentation:
  mode: text-only
  illustrations: illustrations/en/reference/node-reference/integration-nodes/touchengine.yaml
  visual_information_review: not-independently-verified
---

# TouchEngine

The **TouchEngine** node allows the integration of TouchDesigner projects directly into a Screenberry pipeline using the [TouchEngine API](https://docs.derivative.ca/TouchEngine). Video streams obtained from TouchEngine can be used as a texture or as a composition layer. Incoming data streams can be used to provide Screenberry with information like tracking coordinates, object properties, DMX values, touch events, and any other real-time data.

> **Note:** TouchDesigner version 2020.28110 or newer is required. We recommend using the latest official release.

> **Note:** TouchEngine requires an installed version of TouchDesigner along with any paid license. When TouchEngine is run, it automatically locates the TouchDesigner application on the user’s system suitable for use.

> **Note:** It is not required to run TouchDesigner for TouchEngine to work.

To make a TouchDesigner project available for integration:

1. In the TouchDesigner project, create the needed _In_ and _Out_ operators of the required types.
2. Save the project as a component (.tox file).

To integrate the TouchDesigner project into Screenberry:

1. Add the **TouchEngine** node to the **Node Graph**.
2. In the node’s **Settings** panel, select and load the `.tox` file.
3. After the file loads, Screenberry automatically discovers its exposed inputs, outputs, and custom parameters and creates the corresponding node parameters.
4. Connect the resulting input and output pins to the required nodes.

Currently, TOP, CHOP, and DAT input and output operators are supported by the TouchEngine API:

- TOP — an operator family that creates, composites, and modifies images, and reads/writes images and movies to/from files and the network. TOPs run on the graphics card’s GPU.
- CHOP — an operator family which operates on Channels (a series of numbers) that are used for animation, audio, mathematics, simulation, logic, UI construction, and many other applications.
- DAT — an operator family that manipulates text strings: multi-line text or tables. Multi-line text is often a command script but can be any multi-line text. Tables are rows and columns of cells, each containing a text string.

The automatically discovered input and output parameters provide corresponding pins on the **TouchEngine** node. Connect these pins to other nodes to exchange the exposed data.

Example of a node tree with the **TouchEngine** node. You can download these [sample Screenberry and TouchDesigner
projects](https://screenberry.com/resources/downloads).
