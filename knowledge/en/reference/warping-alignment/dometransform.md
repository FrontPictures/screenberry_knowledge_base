---
id: guide.warping-alignment.dometransform
variant_id: guide.warping-alignment.dometransform.imported-current-guide
title: Screenberry Dome Transform - Precision Alignment for Dome Projections
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
    path: archive/site/content/en/warping-alignment/dometransform.mdx
    sha256: 496c119edb8188f3cd03df7c5e67be2d46eaa1180670a7cc71949376432f85a6
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/warping-alignment/dometransform.mdx
  canonical_url: https://help.screenberry.com/en/warping-alignment/dometransform
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 496c119edb8188f3cd03df7c5e67be2d46eaa1180670a7cc71949376432f85a6
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Dome Transform - Precision Alignment for Dome Projections
    description: Learn to apply geometry correction for dome projections to compensate for calibration camera position, orientation, and lens distortion.
    openGraph:
      title: Screenberry Dome Transform - Precision Alignment for Dome Projections
      description: Learn to apply geometry correction for dome projections to compensate for calibration camera position, orientation, and lens distortion.
presentation:
  mode: text-only
  illustrations: illustrations/en/reference/warping-alignment/dometransform.yaml
  visual_information_review: not-independently-verified
---

# Dome Transform

The **Dome Transform** node is a patch that allows the application of additional geometry correction to the image aligned by automatic calibration for the dome setup. Typically, it is used to compensate for the position, orientation, and lens distortion of the calibration camera.

Generally, the **Dome Transform** node connects to the **Calibrator** node via the **Render Target** node.

Example of the node graph with the **Dome Transform** node

When the **Dome Transform** node is added, the **Dome Transform Controls** widget becomes available in the list of widgets.

|                                                   |                                    |
| ------------------------------------------------- | ---------------------------------- |
| **Settings** panel of the **Dome Transform** node | **Dome Transform Controls** widget |

Both the **Settings** panel of the **Dome Transform** node and the **Dome Transform Controls** widget offer control over the following transformation parameters:

**Grid Size**    Sets the number of rows and columns for the patch mesh grid.

**Subdivisions**   Sets the number of subdivisions for the patch mesh grid.

**Rotation Angle**    Rotates the projection image by the set angle.

**Flip V**    Flips the projection image vertically.

**FOV**    Changes the field of view angle by the set factor.

**Lens Distortion**    Compensates for lens distortion of the calibration camera. This parameter transitions through the following _mapping functions_ of the lens: _Equidistant_ at 0, _Equisolid_ _angle_ for values closer to 0.5 (1/k2 value), and _Orthographic_ at 1.

For more information, visit <https://en.wikipedia.org/wiki/Fisheye_lens#Mapping_function>.

**Tilt Angle**    Compensates for the calibration camera tilt.

**Offset X**    Compensates for the horizontal shift of the calibration camera position.

**Offset Y**    Compensates for the vertical shift of the calibration camera position.

**Offset Z**    Compensates for the calibration camera being positioned closer or farther away from the zenith of the dome.
