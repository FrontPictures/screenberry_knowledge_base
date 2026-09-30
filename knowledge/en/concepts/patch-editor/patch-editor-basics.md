---
id: guide.patch-editor.patch-editor-basics
variant_id: guide.patch-editor.patch-editor-basics.imported-current-guide
title: Screenberry Patch Editor - Image Warping and Geometry Correction
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
    path: archive/site/content/en/patch-editor/patch-editor-basics.mdx
    sha256: 13a6d2774daa92f4f72d2605d70bac6f0fca8446f229ca57adbd8e5dde03c35a
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/patch-editor/patch-editor-basics.mdx
  canonical_url: https://help.screenberry.com/en/patch-editor/patch-editor-basics
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 13a6d2774daa92f4f72d2605d70bac6f0fca8446f229ca57adbd8e5dde03c35a
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Patch Editor - Image Warping and Geometry Correction
    description: Learn how to navigate and use the Patch Editor for editing patches, including available view modes and customization options.
    openGraph:
      title: Screenberry Patch Editor - Image Warping and Geometry Correction
      description: Learn how to navigate and use the Patch Editor for editing patches, including available view modes and customization options.
presentation:
  mode: text-only
  illustrations: illustrations/en/concepts/patch-editor/patch-editor-basics.yaml
  visual_information_review: not-independently-verified
---

# Patch Editor Basics

## Overview

**Patch nodes** (or **Patches**) such as **Rectangle**, **Bezier Warp**, **Quad Warp**, and others (see the full list of [patch nodes](../../reference/node-reference/nodes.md#warp-and-transform)) are designed to apply various types of image\* geometry correction (warping), transformation, arrangement, and mapping. Extensive control for patch management is provided in the **Patch Editor** integrated into the **Canvas** (or **Render Target**) widget.\*\* In addition, most operations with the patches can be performed directly from a computer keyboard connected to the \*\*Server\*\*.

\* The term “image” refers to any static or dynamic media (i.e. video).

\*\* To access the **Patch Editor,** add the **Canvas** (or **Render Target**) widget to your workspace, then click the
**Patches** tab on the top left of the widget to switch to the **Patches** view.

## Patch Editor View

The **Patch Editor** view: (1) View mode bar, (2) Work area which is split into two parts: (A) **Input** panel and (B) **Output** panel, (3) Navigation tree, (4) **Settings** panel.

## View Modes

There are four view modes of the work area available. You can toggle between them by clicking on the corresponding icon.

(Vm1) Display only the **Input** panel.

(Vm2) Display only the **Output** panel.

(Vm3) Display both panels in the **Vertical** split view.

(Vm4) Display both panels in the **Horizontal** split view.

## View Options

Additionally, the appearance of the **Input** and **Output** panels can be customized using the **View Options** panel, which can be opened by clicking the button in the top right corner of the panels.

The **View Options** panel allows the user to show or hide the following elements:

- **Rulers** Helps you accurately place and measure patches and displays.
- **Labels** Shows the names of the patches and displays.
- **Coordinates** Shows the coordinates of the positions of the patch control points.
- **Live Image** The interactively updated preview of the current video output.
- **Reference Image** The reference image is used as a background for more precise positioning of control points.

## Zoom and Pan Functions

Тo zoom in and out of a specific area in the **Input** or **Output** panels of the **Patch Editor**, place the mouse cursor over the area, and use the mouse scroll wheel. Alternatively, click the button (Zoom Icon) in the top right corner of the panel and move the mouse to change the magnification.

To pan a view, drag with the middle or right mouse button held down, or click the button (Pan Icon) in the top right corner of the panel and move the mouse.
