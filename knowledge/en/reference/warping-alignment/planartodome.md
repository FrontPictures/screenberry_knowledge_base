---
id: guide.warping-alignment.planartodome
variant_id: guide.warping-alignment.planartodome.imported-current-guide
title: Screenberry Planar to Dome - Blending Planar and Dome Media
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
    path: archive/site/content/en/warping-alignment/planartodome.mdx
    sha256: 19474f1650fc18d10d2c3fdd9fe26cd79b2ba34a21d82449f171b054499152bc
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/warping-alignment/planartodome.mdx
  canonical_url: https://help.screenberry.com/en/warping-alignment/planartodome
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 19474f1650fc18d10d2c3fdd9fe26cd79b2ba34a21d82449f171b054499152bc
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Planar to Dome - Blending Planar and Dome Media
    description: Explore Screenberry's Planar to Dome node for integrating planar images onto dome surfaces. Learn to scale, offset, tilt, and rotate images for a perfect fit on dome-shaped surfaces and picture-in-picture effects.
    openGraph:
      title: Screenberry Planar to Dome - Blending Planar and Dome Media
      description: Explore Screenberry's Planar to Dome node for integrating planar images onto dome surfaces. Learn to scale, offset, tilt, and rotate images for a perfect fit on dome-shaped surfaces and picture-in-picture effects.
presentation:
  mode: text-only
  illustrations: illustrations/en/reference/warping-alignment/planartodome.yaml
  visual_information_review: not-independently-verified
---

# Planar to Dome

The **Planar to Dome** node is a patch that allows the mapping of a planar image onto a dome surface. It is mostly used to achieve a picture-in-picture effect by combining planar and dome media content on a dome screen.

In a typical setup, the **Planar to Dome** node receives a source image as the input and outputs the modified image to the **Display** or **Context** node.

Example of the node graph with the **Planar to Dome** node

The **Settings** panel of the **Planar to Dome** node offers the following geometry correction parameters:

**Grid Size**    Sets the number of rows and columns for the patch mesh grid.

**Subdivisions**    Sets the number of subdivisions for the patch mesh grid.

**Aspect Ratio**   Defines the aspect ratio of the planar media.

**Projection**   Allows you to select the type of three-dimensional shape on which the image is mapped by choosing one of the following options: **Planar**, **Conical**, or **Cylindrical**.

**Scale**   Scales the image arbitrarily from its center by the set factor.

**Vertical Offset**   Offsets the vertical position of the image in relation to the dome zenith.

**Tilt Angle**   Sets the angle of the image tilt.

**Rotation Angle**   Rotates the image by the specified angle around the zenith of the dome.
