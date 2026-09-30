---
id: guide.warping-alignment.latlongtodome
variant_id: guide.warping-alignment.latlongtodome.imported-current-guide
title: Screenberry LatLong to Dome - 360度映像のドーム形状へのマッピング
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
    path: archive/site/content/jp/warping-alignment/latlongtodome.mdx
    sha256: e4035014da1b326127a4869796614d9fd90074068dba429be962bbcb8d08fe19
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/warping-alignment/latlongtodome.mdx
  canonical_url: https://help.screenberry.com/jp/warping-alignment/latlongtodome
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: e4035014da1b326127a4869796614d9fd90074068dba429be962bbcb8d08fe19
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry LatLong to Dome - 360度映像のドーム形状へのマッピング
    description: LatLong to Domeノードを利用して、360度映像をドーム形状にマッピングする方法を説明します。向きや回転、カメラ位置の調整によって、没入感を高めることができます。
    openGraph:
      title: Screenberry LatLong to Dome - 360度映像のドーム形状へのマッピング
      description: LatLong to Domeノードを利用して、360度映像をドーム形状にマッピングする方法を説明します。向きや回転、カメラ位置の調整によって、没入感を高めることができます。
translation:
  source_language: en
  source_id: guide.warping-alignment.latlongtodome
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/reference/warping-alignment/latlongtodome.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/warping-alignment/latlongtodome.yaml
  visual_information_review: not-independently-verified
---

# LatLong to Dome

**LatLong to Dome**ノードは、仮想球面に _VR/360度映像_ メディアをマッピングし、ドーム上で表示するためのPatchです。

典型的なセットアップでは、**LatLong to Dome**ノードは入力としてソース映像を受け取り、変形された映像を**Display**ノードまたは**Canvas**ノードに出力します。
(LatLong To Dome Node Tree)

**LatLong to Dome**ノードを使用したノードグラフの例

**LatLong to Dome**ノードの**Settings**パネルでは、以下の設定を使用してジオメトリ補正とメディアプレゼンテーションの制御が行えます。

**Initial Orientation：** Patchのリセットまたはサーバーの再起動後に360度映像メディアが表示されるときのデフォルトの正面方向を設定します。**X**と**Y**の値は経度と緯度の回転角度を設定します。**Y**の値は、仮想球の天頂と地平に対応する90°と-90°の範囲で設定できます。

**Current Orientation：** 360度映像メディアの現在の回転角度を設定することができます。**X**と**Y**の値は経度と緯度の回転角度を設定します。この値の編集は、**Control Mode**に**Manual Orientation**を選択することで有効になります。

**Rotation Speed：** 360度映像メディアの正面方向を一定速度で回転させます。回転の角度は**X**軸または**Y**軸に沿って設定します。この定速回転はデフォルトでは無効になっています。この定速回転を有効にするには、**Control Mode**に**Rotation Speed**を選択します。

**Speed Multiplier：** 外部入力による回転制御時の感度レベル（回転角度のステップサイズの倍率）を設定します。

**Subdivisions X：** 360度映像メディアがマッピングされる仮想球の緯度方向の分割数を設定します。

**Subdivisions Y：** 360度映像メディアがマッピングされる仮想球の経度方向の分割数を設定します。

**Camera Offset Z：** 魚眼レンズカメラの位置をドームの天頂からのオフセットで設定します。

**Control Mode：** 360度映像メディアの正面方向の制御方法を選択できます。手動入力の場合は**Manual Orientation**を、外部入力による制御の場合は**Rotation Speed**を選択します。

**Camera FOV：** 魚眼レンズの視野角を設定します。

**Visible FOV：** 魚眼レンズにかけるマスキングの角度を設定します。

> **メモ：** 魚眼レンズの視野角が360°に近づくと、映像の端に乱れが現れることがあります。これを避けるためには、映像の表示範囲を制限するマスクを使用してください。
