---
id: guide.warping-alignment.softedgeblender
variant_id: guide.warping-alignment.softedgeblender.imported-current-guide
title: Screenberry Soft Edge Blender - 映像のシームレスなブレンディング
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
    path: archive/site/content/jp/warping-alignment/softedgeblender.mdx
    sha256: cfd5d1fe231bd2d4c7e240641309226bb471d544f5192ce1c89b97db78578fe8
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/warping-alignment/softedgeblender.mdx
  canonical_url: https://help.screenberry.com/jp/warping-alignment/softedgeblender
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: cfd5d1fe231bd2d4c7e240641309226bb471d544f5192ce1c89b97db78578fe8
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Soft Edge Blender - 映像のシームレスなブレンディング
    description: Soft Edge Blenderノードを利用してブレンドマップを生成し、映像の重なりを調整することでシームレスな映像のブレンディングを実現する方法を説明します。
    openGraph:
      title: Screenberry Soft Edge Blender - 映像のシームレスなブレンディング
      description: Soft Edge Blenderノードを利用してブレンドマップを生成し、映像の重なりを調整することでシームレスな映像のブレンディングを実現する方法を説明します。
translation:
  source_language: en
  source_id: guide.warping-alignment.softedgeblender
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/reference/warping-alignment/softedgeblender.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/warping-alignment/softedgeblender.yaml
  visual_information_review: not-independently-verified
---

# Soft Edge Blender

**Soft Edge Blender**ノードは、2つ以上の重なり合う映像を1つのシームレスな映像に組み合わせるためのソフトエッジブレンディングの機能を提供します。

**Soft Edge Blender**ノードは、Patchによって修正された映像のシームレスな重なり合いを可能にするブレンディングマップを生成するために、これらのPatchノードの**Soft Edge Blender**入力パラメータに接続する必要があります。

**Soft Edge Blender**ノードを使用したノードグラフの例

**Soft Edge Blender**ノードの**Settings**パネルでは、次ような設定を使用してソフトエッジブレンドを行います：

**Generation Method：** ブレンドマップの生成方法を設定します。**線形距離（Linear Distance）** または **重力関数（Gravity Function）** のいずれかを選択します

**Gravity Falloff：** ブレンドマップの生成における重力ベースのエッジ検出アルゴリズムの値を設定します。**重力関数**ブレンドマップの生成方法が選択されている場合に使用されます。

**Quadratic Easing：** 映像のオーバーラップ領域に対して _二次イージング_ 関数を適用するかどうかを指定します。

**Blur Radius：** ブレンドマップのぼかし半径を設定します。

**Gamma：** ブレンドマップの逆ガンマ分布値を設定します。

**Build Blend Maps：** **Build Blend Maps**ボタンを押すと、新しいブレンドマップが生成されます。

**Disable Blending：** ブレンドマップがリセットされます。

> **メモ：** **Soft Edge Blender** ノードの設定が変更された場合や、**Soft Edge Blender** ノードに接続されたPatchノードのジオメトリが変更された場合は、ブレンドマップを再生成するために **Build Blend Maps** ボタンを押してください。

**Soft Edge Blender**ノードを使用する場合は、Patchの共通操作について[Patchの編集](../../how-to/patch-editor/editing-patches.md)の章も参照してください。
