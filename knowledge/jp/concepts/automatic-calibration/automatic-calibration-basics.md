---
id: guide.automatic-calibration.automatic-calibration-basics
variant_id: guide.automatic-calibration.automatic-calibration-basics.imported-current-guide
title: Screenberryによる自動キャリブレーション - マルチプロジェクションの準備
language: ja
kind: concepts
status: in_review
owner: unassigned
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: existing-guide
    path: archive/site/content/jp/automatic-calibration/automatic-calibration-basics.mdx
    sha256: 5576ea1e3e3c420826ce451ec0d4d0c41f51992399d143a72aaa41564c982ea3
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/automatic-calibration/automatic-calibration-basics.mdx
  canonical_url: https://help.screenberry.com/jp/automatic-calibration/automatic-calibration-basics
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 5576ea1e3e3c420826ce451ec0d4d0c41f51992399d143a72aaa41564c982ea3
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryによる自動キャリブレーション - マルチプロジェクションの準備
    description: 複数台のプロジェクターを使った自動キャリブレーションの準備について、特にドームや円柱パノラマのような曲面スクリーンへの投影を想定して説明します。
    openGraph:
      title: Screenberryによる複数プロジェクターの自動キャリブレーションの準備
      description: 複雑な形状のスクリーンへの複数台プロジェクターによる投影の自動キャリブレーションの準備について説明します。
translation:
  source_language: en
  source_id: guide.automatic-calibration.automatic-calibration-basics
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/concepts/automatic-calibration/automatic-calibration-basics.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/concepts/automatic-calibration/automatic-calibration-basics.yaml
  visual_information_review: not-independently-verified
---

# 自動キャリブレーションの基本

## 概要

複数のプロジェクターを使用したセットアップでは、自動キャリブレーション（または自動調整）が推奨されています。これにより、複数の投影映像を一つのシームレスな映像に結合することができます。この技術は、ドームや円筒パノラマのような非平面のスクリーンに最適です。また、平面スクリーンのセットアップにおいても、映像の歪み補正（ワーピング）とブレンディングの調整作業を高速化し、補正精度を向上させることができます。

Screenbrerryでは、手動および自動キャリブレーションの両方を個別に行うことも、組み合わせて行うこともできます。

## 自動キャリブレーションのためのノードグラフの作成

自動キャリブレーションのためのノードグラフを作成するには、以下の手順に従ってください：

1. **Node Graph**ウィジェットに、**Canvas**ノードを追加します。
2. ワークスペースに**Canvas Editor**ウィジェットを追加し、**View Mode**ドロップダウンメニューで**Displays**が選択されていることを確認します。
3. **Canvas Editor**で**Create Display Array**ボタンを押します。表示されるダイアログボックスで、セットアップのプロジェクターの数\*に対応したディスプレイグリッドを生成するために、**Rows**と**Columns**の数を入力し、**Patch Type**に**CalibratorPatch**を選択して**OK**を押します。これにより、ノードグラフには、**Calibrator**ノードに接続された**CalibratorPatch**ノード、さらにそれらが**Display**ノードを介して**Canvas**ノードに接続されたノードツリーが生成されます。
4. ノードグラフに**Media Player**ノード（または他のソース映像ノード）を追加し、その**Image**出力ピンを**Calibrator**ノードの**Source**入力ピンに接続します。
5. ノードグラフに**Cameraノード**を追加し、次のように設定します：
   - **Camera**出力ピンを**Calibrator**ノードの**Camera**入力ピンに接続します。
   - **Image**出力ピンを**Calibrator**ノードの**Camera Image**入力ピンに接続します。

\* Display配列の数とレイアウトは、GPUドライバーの設定とトポロジーに合わせる必要があります。

_典型的なプロジェクター4台投影のキャリブレーション用ノードグラフの作成_
