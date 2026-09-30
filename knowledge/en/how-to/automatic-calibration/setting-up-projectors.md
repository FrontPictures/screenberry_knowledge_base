---
id: guide.automatic-calibration.setting-up-projectors
variant_id: guide.automatic-calibration.setting-up-projectors.imported-current-guide
title: Setting Up Projectors for Screenberry Automatic Calibration
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
    path: archive/site/content/en/automatic-calibration/setting-up-projectors.mdx
    sha256: dbc65f6b4ccd1def5e424d86a742b780c31f8c4d2f4431dcba3689a5e467a9e5
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/automatic-calibration/setting-up-projectors.mdx
  canonical_url: https://help.screenberry.com/en/automatic-calibration/setting-up-projectors
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: dbc65f6b4ccd1def5e424d86a742b780c31f8c4d2f4431dcba3689a5e467a9e5
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Setting Up Projectors for Screenberry Automatic Calibration
    description: Learn about optimal projector positioning and image overlapping for optimal automatic calibration results.
    openGraph:
      title: Setting Up Projectors for Screenberry Automatic Calibration
      description: Learn about optimal projector positioning and image overlapping for optimal automatic calibration results.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/automatic-calibration/setting-up-projectors.yaml
  visual_information_review: not-independently-verified
---

# Setting Up Projectors

The following steps should be performed to set up projectors properly:

1. Ensure that the projectors have equal or comparable lamp life. Replace the lamps if necessary. For projectors with solid-state laser light source, select the same brightness mode.
2. Ensure that the projectors are fixed firmly and will not move during the calibration process.
3. Connect the projectors to the corresponding video card outputs of the Screenberry Server with the help of video signal cables.
4. Turn on all projectors.
5. Using the projector’s menu, turn on Test Patterns to confirm that the projected images cover the whole surface of a target projection area (screen) and overlap sufficiently. The recommended overlap region is 5 to 15% on each side of the adjacent images. Adjust the zoom, lens shift, focus, and position of the projectors, if necessary.\*

Example of the correct projections overlapping in a 4-projector dome setup

1. Ensure that all additional correction settings on the projectors are turned off (like Auto Keystone Correction, Keystone and Geometry Corrections, unnecessary Color Corrections), and no additional functionality (like Picture-in-Picture mode, etc.) is being used. Confirm that the projector’s dynamic contrast and auto-brightness features (Auto Iris, Dynamic, Smart Eco, etc.) are turned off.
2. Verify that all projectors are switched to the same Color Mode (sRGB, Presentation, Cinema, etc.).\*\*
3. To ensure that the signal is passing correctly and that the projectors are connected to the correct video card ports, use the **Test Pattern** option of the **Calibration Wizard**:

   1. Add the **Calibration Wizard** widget by selecting **Window** > **Calibration Wizard** from the main menu.
   2. Open the **Show Test Pattern** drop-down list.
   3. Select the **White (No Blends)** test pattern to check that the projectors are displaying images within the intended area and are overlapping correctly.
   4. Select the **Focus Grid** test pattern to check that all projectors are in focus.
   5. Use other test patterns available in the **Show Test Pattern** drop-down list to check the contrast, brightness, color, and sharpness settings of the projectors.



\* Refer to your projector manufacturer’s user guide for details.

\*\* The names of the color modes can vary depending on the projector model and manufacturer.
