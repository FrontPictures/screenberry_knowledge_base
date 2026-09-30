---
id: guide.warping-alignment.patchreplicator
variant_id: guide.warping-alignment.patchreplicator.imported-current-guide
title: Screenberry Patch Replicator - Duplicating and Distributing Patches
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
    path: archive/site/content/en/warping-alignment/patchreplicator.mdx
    sha256: 889765e2a784fe7b84df5d75237f932318c7d5c2d1f372fd65202138c0c963fb
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/warping-alignment/patchreplicator.mdx
  canonical_url: https://help.screenberry.com/en/warping-alignment/patchreplicator
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 889765e2a784fe7b84df5d75237f932318c7d5c2d1f372fd65202138c0c963fb
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Patch Replicator - Duplicating and Distributing Patches
    description: Learn different methods like Rectangular Array, Radial Array, and Mirror for the replication and distribution of patch instances.
    openGraph:
      title: Screenberry Patch Replicator - Duplicating and Distributing Patches
      description: Learn different methods like Rectangular Array, Radial Array, and Mirror for the replication and distribution of patch instances.
presentation:
  mode: text-only
  illustrations: illustrations/en/reference/warping-alignment/patchreplicator.yaml
  visual_information_review: not-independently-verified
---

# Patch Replicator

The **Patch Replicator** is a patch that duplicates and distributes the instances of the target patch according to user-defined rules.

> **Note:** The **Patch Replicator** node can receive image input from the patch nodes only.

Example of the node graph with the **Patch Replicator** node

The **Patch Replicator** patch offers three replication types: **Rectangular Array**, **Radial Array**, and **Mirror**, which are selectable as a **Mode** parameter in the **Settings** panel. Each type is provided with its own set of settings.

## Rectangular Array replication

Using this replication, you can define the number of instances to be created and their offset along the X and / or Y axes.

When the **Rectangular Array** type is chosen the following replication parameters become available in the **Settings** panel:

- **X Count** and **Y Count** values that determine the number of instances to be created along the X and Y axes.
- **X Offset** and **Y Offset** values that determine the offset between instances relative to the entire width and height of the output area.

## Radial Array replication

Using **Radial Array replication**, you can define the number of instances and their placement on a circle relative to the center of the output area (**Сanvas**). The most typical use of circular replication is placing copies of one image radially around dome zenith.

When the **Radial Array** type is chosen the following replication parameters become available in the **Settings** panel:

- A **Count** parameter value determines the number of instances to be created.
- An **Angle** parameter sets the angle of rotation.
- The **Method** options determine how the instances are distributed. If **Between** mode is selected, the angle between each of the created instances is equal to the value of the **Angle** parameter. The selection of **Total** allows to distribute instances at even angles within the angle specified in the **Angle** parameter.
- The **Keep Aspect Ratio** option specifies whether or not to maintain the aspect ratio for the created instances.

## Mirror replication

Using mirroring, you can create a mirror copy of the image along the X or Y axes.

When the **Mirror** type is chosen, select the **Horizontal** or **Vertical** option for the **Direction** parameter to set the mirroring direction.

In addition, working with the **Patch Replicator** patch follows the general principles for working with patches outlined in the [Editing Patches](../../how-to/patch-editor/editing-patches.md) section of the documentation.
