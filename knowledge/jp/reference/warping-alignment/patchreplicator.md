---
id: guide.warping-alignment.patchreplicator
variant_id: guide.warping-alignment.patchreplicator.imported-current-guide
title: Screenberry Patch Replicator - Patchの複製と配置
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
    path: archive/site/content/jp/warping-alignment/patchreplicator.mdx
    sha256: f2501f0a9d9af3a96f2eabe0eee63bc3645e05b95b70551c4b13834c001c6fc8
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/warping-alignment/patchreplicator.mdx
  canonical_url: https://help.screenberry.com/jp/warping-alignment/patchreplicator
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: f2501f0a9d9af3a96f2eabe0eee63bc3645e05b95b70551c4b13834c001c6fc8
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Patch Replicator - Patchの複製と配置
    description: Patch Replicatorノードを利用して、並列配置、放射状配置、鏡像配置などの方法でPatchを複製し分散配置する方法を説明します。
    openGraph:
      title: Screenberry Patch Replicator - Patchの複製と配置
      description: Patch Replicatorノードを利用して、並列配置、放射状配置、鏡像配置などの方法でPatchを複製し分散配置する方法を説明します。
translation:
  source_language: en
  source_id: guide.warping-alignment.patchreplicator
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/reference/warping-alignment/patchreplicator.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/warping-alignment/patchreplicator.yaml
  visual_information_review: not-independently-verified
---

# Patch Replicator

**Patch Replicator** ノードは、ユーザーが定義したルールに従って、Patchのインスタンスを複製し配置するPatchです。

> **メモ：** **Patch Replicator** ノードは、Patchノードからの映像入力のみを受け取ることができます。

**Patch Replicator** ノードを使用したノードグラフの例

**Patch Replicator** ノードには、**長方形配置（Rectangular Array）**、**放射状配置（Radial Array）**、および **鏡像配置（Mirror）** の3つの複製タイプがあります。これらは**Settings**パネルの **Mode** から選択できます。各タイプにはそれぞれ固有の設定が用意されています。

## 長方形配置（Rectangular Array）の複製

この複製を使用すると、作成するインスタンスの数とX軸および/またはY軸に沿ったオフセットを定義することができます。

**Settings**パネルの**Mode**に**Rectangular Array**を選択すると、次の複製パラメータが利用可能になります：

- **X Count** および **Y Count** には、X軸およびY軸に沿って作成するインスタンスの数を設定します。
- **X Offset** および **Y Offset** には、出力領域全体に対するインスタンス間のオフセットを設定します。

## 放射状配置（Radial Array）の複製

この複製を使用すると、出力領域（**Canvas**）の中心に対して、インスタンスの数と配置を円状に定義することができます。放射状の複製の最も一般的な使用例は、一つの画像のコピーをドームの天頂を中心に放射状に配置することです。

**Settings**パネルの **Mode** に **Radial Array** を選択すると、次の複製パラメータが利用可能になります：

- **Count** には、作成するインスタンスの数を設定します。
- **Angle** には、は回転角度を設定します。
- **Method** には、インスタンスの分布方法を決定します。**Between** が選択された場合、作成される各インスタンス間の角度は**Angle**の値と等しくなります。**Total** の選択肢は、**Angle** で指定された範囲内で均等な角度でインスタンスが配置されます。
- **Keep Aspect Ratio** には、アスペクト比を維持してインスタンスを作成するかどうかを設定します。

## 鏡像配置（Mirror）の複製

この複製を使用すると、映像のX軸またはY軸に沿った鏡像のインスタンスを作成することができます。

**Settings**パネルの **Mode** に **Mirror** を選択し、**Direction** に **Horizontal** または **Vertical** を選択して、鏡像のできる方向を設定します。

**Patch Replicator** ノードを使用する場合は、Patchの共通操作について[Patchの編集](../../how-to/patch-editor/editing-patches.md)の章も参照してください。
