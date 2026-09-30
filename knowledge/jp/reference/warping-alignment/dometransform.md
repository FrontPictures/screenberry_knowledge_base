---
id: guide.warping-alignment.dometransform
variant_id: guide.warping-alignment.dometransform.imported-current-guide
title: Screenberry Dome Transform - ドーム投影の微調整
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
    path: archive/site/content/jp/warping-alignment/dometransform.mdx
    sha256: 204423cb38c5d90db907324e2274ca3d74784de4f10129b1e727b185f0a30c4f
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/warping-alignment/dometransform.mdx
  canonical_url: https://help.screenberry.com/jp/warping-alignment/dometransform
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 204423cb38c5d90db907324e2274ca3d74784de4f10129b1e727b185f0a30c4f
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Dome Transform - ドーム投影の微調整
    description: Dome Transformノードを利用して、ドーム投影でカメラの位置や向き、レンズ特性による形状の歪みを微調整する方法について説明します。
    openGraph:
      title: Screenberry Dome Transform - ドーム投影の微調整
      description: Dome Transformノードを利用して、ドーム投影でカメラの位置や向き、レンズ特性による形状の歪みを微調整する方法について説明します。
translation:
  source_language: en
  source_id: guide.warping-alignment.dometransform
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/reference/warping-alignment/dometransform.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/warping-alignment/dometransform.yaml
  visual_information_review: not-independently-verified
---

# Dome Transform

**Dome Transform** ノードは、ドームセットアップにおいて自動キャリブレーションの結果に追加のジオメトリ修正を適用するための Patch です。主にキャリブレーションカメラの位置、向き、およびレンズの歪みを補正するために使用されます。

典型的なセットアップでは、**Dome Transform** ノードは **Calibrator** ノードと **Render Target** ノードを介して接続されます。

**Dome Transform**ノードを使用したノードグラフの例

**Dome Transform**ノードが追加されると、ウィジェットのリストから**Dome Transform Controls**ウィジェットが利用可能になります。

|                                       |                                   |
| ------------------------------------- | --------------------------------- |
| **Dome Transform**ノードの**Settings**パネル | **Dome Transform Controls**ウィジェット |

**Dome Transform**ノードの**Settings**パネルと**Dome Transform Controls**ウィジェットの両方で、以下の設定が可能になります。

**Grid Size**： Patch メッシュグリッドの行数と列数を設定します。

**Subdivisions**： Patch メッシュグリッドの分割数を設定します。

**Rotation Angle**： ドーム映像を水平方向に設定された角度だけ回転させます。

**Flip V**： ドーム映像を垂直方向に反転させます。

**FOV**： 設定された係数だけ視野角を変更します。

**Lens Distortion**： キャリブレーションカメラのレンズ歪みを補正します。このパラメータは、0 では _等距離_、0.5（1/k2 値）に近い値では _等立体角_、1 では _正射影_ の _マッピング関数_ を使用します。

詳細については、<https://en.wikipedia.org/wiki/Fisheye_lens#Mapping_function>を参照してください。

**Tilt Angle**： キャリブレーションカメラの傾斜角度を補正します。

**Offset X**： キャリブレーションカメラの左右位置を補正します。

**Offset Y**： キャリブレーションカメラの前後位置を補正します。

**Offset Z**： キャリブレーションカメラがドームの天頂から近くまたは遠くに配置されていることを補正します。
