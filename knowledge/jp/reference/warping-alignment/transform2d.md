---
id: guide.warping-alignment.transform2d
variant_id: guide.warping-alignment.transform2d.imported-current-guide
title: Screenberry Transform 2D - 映像の行列変形
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
    path: archive/site/content/jp/warping-alignment/transform2d.mdx
    sha256: e2cf9ea7e292999e4936245b99a9e7fbc0e1434bc59b8c5d05eec1e72a2b91f7
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/warping-alignment/transform2d.mdx
  canonical_url: https://help.screenberry.com/jp/warping-alignment/transform2d
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: e2cf9ea7e292999e4936245b99a9e7fbc0e1434bc59b8c5d05eec1e72a2b91f7
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Transform 2D - 映像の行列変形
    description: Transform 2Dノードを利用した、映像の行列変形の方法を説明します。行列変形により、変形中心点の調整や回転、拡大縮小、Picture in Picture効果などを実現することができます。
    openGraph:
      title: Screenberry Transform 2D - 映像の行列変形
      description: Transform 2Dノードを利用した、映像の行列変形の方法を説明します。行列変形により、変形中心点の調整や回転、拡大縮小、Picture in Picture効果などを実現することができます。
translation:
  source_language: en
  source_id: guide.warping-alignment.transform2d
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/reference/warping-alignment/transform2d.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/warping-alignment/transform2d.yaml
  visual_information_review: not-independently-verified
---

# Transform 2D

**Transform 2D**ノードは、Patchに対して静的または動的な行列変形を適用することができます。通常、Patchの位置、移動、スケール、回転、さまざまなピクチャーインピクチャー効果を作成するために使用されます。

**Transform 2D**ノードは、変形対象にするPatchノードの**Transform Matrix**入力ピンに接続されます。

**Transform 2D**ノードを使用したノードグラフの例

> **メモ：** **Transform 2D**ノードを使用する利点は、対象となるPatchノードの設定と変形を保持しながら、映像出力にさらに変形を適用できることです。

**Transform 2D** ノードの**Settings**パネルでは、次ような設定を使用して行列変形を行います：

**Anchor Point：** 変形の起点となる位置を調整します。変形はこのポイントを中心に適用されます。

**Translate：** Patchを水平方向（**X**）および/または垂直方向（**Y**）に設定された量だけオフセットします。

**Rotate：** 指定された角度だけPatchを回転させます。

**Scale：** Patchを中心から設定された倍率でスケーリングします。

**Transform Order：** 変形が実行される順序を選択します。例： **Scale**, **Rotate**, **Translate**

**Flip V：** Patchを垂直方向に反転させます。

**Flip H：** Patchを水平方向に反転させます。

**Aspect Ratio：** Patchを水平方向に設定された係数で伸ばします。

**Translation Speed：** Patchを水平（**X**）および/または垂直（**Y**）方向に設定した移動速度で連続的に移動させます。

**Scaling Speed：** Patchを中心から連続的にスケーリングする速度を設定します。

**Rotation Speed：** 指定された角度でPatchを連続的に回転させる速度を設定します。

**Reset to Default：** **Transform 2D**ノードで適用されたすべての変形をリセットします。

**Transform 2D**ノードを使用する場合は、Patchの共通操作について[Patchの編集](../../how-to/patch-editor/editing-patches.md)の章も参照してください。
