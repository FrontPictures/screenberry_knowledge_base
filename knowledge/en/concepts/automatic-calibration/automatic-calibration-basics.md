---
id: guide.automatic-calibration.automatic-calibration-basics
variant_id: guide.automatic-calibration.automatic-calibration-basics.imported-current-guide
title: Screenberry Automatic Calibration - Streamlining Multi-Projector Setups
language: en
kind: concepts
status: in_review
owner: unassigned
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: existing-guide
    path: archive/site/content/en/automatic-calibration/automatic-calibration-basics.mdx
    sha256: 587153e835795ea37f171d60ac59ce93daa3614b44e32ffc852296f56c0bdd56
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/automatic-calibration/automatic-calibration-basics.mdx
  canonical_url: https://help.screenberry.com/en/automatic-calibration/automatic-calibration-basics
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 587153e835795ea37f171d60ac59ce93daa3614b44e32ffc852296f56c0bdd56
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Automatic Calibration - Streamlining Multi-Projector Setups
    description: Explore the essentials of automatic calibration in Screenberry for multi-projector setups, particularly on non-planar surfaces like domes and cylindrical panoramas.
    openGraph:
      title: Automatic Calibration in Screenberry for Multi-Projector Setups
      description: Learn the fundamentals of Screenberry's automatic calibration for optimal multi-projector setups on complex surfaces.
presentation:
  mode: text-only
  illustrations: illustrations/en/concepts/automatic-calibration/automatic-calibration-basics.yaml
  visual_information_review: not-independently-verified
---

# Automatic Calibration Basics

## Overview

The automatic calibration (or auto-alignment) is recommended for multi-projector setups to visually combine several projected images into a single seamless image. This technique is recommended for non-planar screens like domes or cylindrical panoramas. It can also be effectively used on planar and rectangular screens to speed up image warping and the blending process as well as to achieve more precise results in geometry and brightness.

In Screenbrerry both manual and automatic calibrations can be applied either separately or combined together.

## Creating a Node Graph for Automatic Calibration

To create a node graph for automatic calibration:

1. In the **Node Graph** widget, add the **Canvas** node.
2. Add the **Canvas Editor** widget to your workspace and ensure that the **Displays** option is chosen in the **View Mode** dropdown menu.
3. In the **Canvas Editor**, press the **Create Display Array** button. In the dialog box that appears, enter the number of **Rows** and **Columns** to generate a display grid corresponding to the number of projectors\* in your setup, select **CalibratorPatch** as the **Patch Type**, and press **OK**. Consequently, a node tree consisting of the **Calibrator** node, connected to the **CalibratorPatch** nodes which in turn are connected to the **Canvas** node via **Display** nodes, is generated in the node graph.
4. Add the **Media Player** node (or any other media source node) to the node graph and connect its **Image** parameter to the **Source** input parameter of the **Calibrator** node.
5. Add a **Digital Camera** node to the node graph, then:
   - Connect its **Camera** output parameter to the **Camera** input parameter of the **Calibrator** node.
   - Connect its **Image** output parameter to the **Camera Image** input parameter of the **Calibrator** node.

\* The number and layout of displays in a display array should align with the settings and topology of the GPU driver
settings.

_Creating the Calibration node graph for a typical 4-projector set-up_
