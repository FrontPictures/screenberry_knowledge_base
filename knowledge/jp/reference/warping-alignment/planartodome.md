---
id: guide.warping-alignment.planartodome
variant_id: guide.warping-alignment.planartodome.imported-current-guide
title: Screenberry Planar to Dome - 平面映像とドーム映像の合成
language: ja
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
    path: archive/site/content/jp/warping-alignment/planartodome.mdx
    sha256: 217cd9f66369279906dccd634bbdf83aab96add07fb5c2f476899076618ba9c7
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/warping-alignment/planartodome.mdx
  canonical_url: https://help.screenberry.com/jp/warping-alignment/planartodome
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 217cd9f66369279906dccd634bbdf83aab96add07fb5c2f476899076618ba9c7
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Planar to Dome - 平面映像とドーム映像の合成
    description: Planar to Domeノードを利用して、平面映像をドーム曲面上にマッピングする方法を説明します。マッピングの際には大きさや位置、傾きや回転を指定して、ドーム映像内のPicture in Pictureを実現することができます。
    openGraph:
      title: Screenberry Planar to Dome - 平面映像とドーム映像の合成
      description: Planar to Domeノードを利用して、平面映像をドーム曲面上にマッピングする方法を説明します。マッピングの際には大きさや位置、傾きや回転を指定して、ドーム映像内のPicture in Pictureを実現することができます。
translation:
  source_language: en
  source_id: guide.warping-alignment.planartodome
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/reference/warping-alignment/planartodome.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/warping-alignment/planartodome.yaml
  visual_information_review: not-independently-verified
---

# Planar to Dome

**Planar to Dome**ノードは、平面イメージをドーム表面にマッピングするためのPatchです。これは、主にドームスクリーン上で平面とドームメディアコンテンツを組み合わせてピクチャーインピクチャー表示を実現するために使用されます。

典型的なセットアップでは、**Planar to Dome**ノードはソース映像を入力として受け取り、変形されたイメージを**Display**ノードまたは**Canvas**ノードに出力します。

**Planar to Dome**ノードを使用したノードグラフの例

**Planar to Dome**ノードの**Settings**パネルでは、以下の設定が可能になります。

**Grid Size：** Patchメッシュグリッドの行数と列数を設定します。

**Subdivisions：** Patchメッシュグリッドの分割数を設定します。

**Aspect Ratio：** 平面メディアのアスペクト比を設定します。

**Projection：** 平面メディアがマッピングされる三次元形状のタイプを **平面（Planar）**、**円錐（Conical）**、または **円柱（Cylindrical）** のいずれかから選択します。

**Scale：** 平面メディアを設定された倍率でスケーリングします。

**Vertical Offset：** 平面メディアの垂直位置をドームの天頂に対してオフセットします。

**Tilt Angle：** 平面メディアを設定された角度だけ傾けます。

**Rotation Angle：** 平面メディアの表示位置をドームの天頂を中心に回転させます。
