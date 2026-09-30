---
id: guide.warping-alignment.latlongtodome
variant_id: guide.warping-alignment.latlongtodome.imported-current-guide
title: Screenberry LatLong to Dome - 360-degree Media Mapping for Domes
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
    path: archive/site/content/en/warping-alignment/latlongtodome.mdx
    sha256: 072d762416fde1e58e2bc6908843743b034480e3e93e279017e37c03eebf20c8
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/warping-alignment/latlongtodome.mdx
  canonical_url: https://help.screenberry.com/en/warping-alignment/latlongtodome
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 072d762416fde1e58e2bc6908843743b034480e3e93e279017e37c03eebf20c8
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry LatLong to Dome - 360-degree Media Mapping for Domes
    description: Understand Screenberry's LatLong to Dome node for projecting 360-degree media onto domes. Learn about orientation, rotation, and camera adjustments for enhancing immersive experiences.
    openGraph:
      title: Screenberry LatLong to Dome - 360-degree Media Mapping for Domes
      description: Understand Screenberry's LatLong to Dome node for projecting 360-degree media onto domes. Learn about orientation, rotation, and camera adjustments for enhancing immersive experiences.
presentation:
  mode: text-only
  illustrations: illustrations/en/reference/warping-alignment/latlongtodome.yaml
  visual_information_review: not-independently-verified
---

# LatLong to Dome

The **LatLong to Dome** node is a patch that allows the mapping of _VR 360-degree_ media onto a virtual sphere and provides controls for displaying it on a dome surface.

In a typical setup, the **LatLong to Dome** node receives a source image as the input and outputs the modified image to the **Display** or **Canvas** node.

Example of the node graph with the **LatLong to Dome** node

The **Settings** panel of the **LatLong to Dome** node offers the following parameters for geometry correction and control over the media presentation:

**Initial Orientation**   Allows you to define the default orientation of the media after the patch reset or server restart. **X** and **Y** values set the longitude and latitude rotation angles. The **Y** value has set extremes at 90° and -90° which correspond to the zenith and nadir of the virtual sphere.

**Current Orientation**   Allows you to edit the current position of the media. **X** and **Y** values set the longitude and latitude rotation angles. Editing of this parameter is enabled by selecting the **Manual Position** option for the **Position Input** parameter.

**Rotation Speed**    Sets the angle for the step of constant media rotation along **X**– or **Y**-axes. This parameter is disabled by default. To enable editing of this parameter, select the **Rotation Speed** for the **Position Input** parameter.

**Speed Multiplier**    Sets the sensitivity level (the rotation angle step size multiplier) when rotation is controlled by external input parameters.

**Subdivisions X**   Sets the number of latitude segments for the virtual sphere to which the media is mapped.

**Subdivisions Y**   Sets the number of longitude segments for the virtual sphere to which the media is mapped.

**Camera Offset Z**    Offsets the position of the virtual camera in relation to the dome zenith.

**Control Mode**   Allows you to select the type of control for media orientation by choosing the **Manual Orientation** option for manual input, or the **Rotation Speed** option when media orientation is controlled by external input parameters.

**Camera FOV**    Sets the fisheye lens field of view angle for the media.

**Visible FOV**    Sets the angle of masking for the fisheye lens field of view.

> **Note:** When the fisheye lens field of view angle approaches 360°, some artifacts may appear on the edges of the image. To avoid this, use a mask to limit the visible part of the image.
