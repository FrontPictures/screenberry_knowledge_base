---
id: guide.automatic-calibration.post-calibration
variant_id: guide.automatic-calibration.post-calibration.imported-current-guide
title: Screenberry Post-Calibration - Final Adjustments and Data Export
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
    path: archive/site/content/en/automatic-calibration/post-calibration.mdx
    sha256: 3834b5b66175f4d1ac218a9809b3a368e9f594e16a87bd3bbb0897528ce9b4df
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/automatic-calibration/post-calibration.mdx
  canonical_url: https://help.screenberry.com/en/automatic-calibration/post-calibration
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 3834b5b66175f4d1ac218a9809b3a368e9f594e16a87bd3bbb0897528ce9b4df
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Post-Calibration - Final Adjustments and Data Export
    description: Learn about post-calibration steps in Screenberry, including image adjustments and exporting calibration data for integration with other platforms.
    openGraph:
      title: Screenberry Post-Calibration - Final Adjustments and Data Export
      description: Insights into the final steps of Screenberry's calibration process, including image tuning and data export for further use.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/automatic-calibration/post-calibration.yaml
  visual_information_review: not-independently-verified
---

# Post-Calibration

## Post-Calibration Dome Image Adjustment

After the completion of automatic calibration, further adjustments to compensate for the position, orientation, and lens distortion of the calibration camera can be made using the [Dome Transform](../../reference/warping-alignment/dometransform.md) node.

## Reviewing Calibration Images

If the calibration results are not satisfactory, or if a failure occurred during calibration resulting in an error message, the calibration images can be reviewed to identify the problem.

To review the calibration data, press the **Open Calibration Images Viewer** button  in the **Calibrator Wizard** widget and choose the image file for the required calibration stage from the **Select Image** drop-down list.

## Exporting Calibration Files

Calibration files may be exported with the help of the **DomeSDK Saver** node, which saves the calibration files of the combined projection image in the _.sbraw_ (Screenberry proprietary) and _.png_ file formats. These files can be used in the **Front Pictures SDK** plugins developed for the Unreal® Engine 4, Unity®, and TouchDesigner applications. The _.sbraw_ file format contains floating-point pixel values.

> **Note:** Export of calibration files is disabled in the demo version of Screenberry.
