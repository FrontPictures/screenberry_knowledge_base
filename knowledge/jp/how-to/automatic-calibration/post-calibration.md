---
id: guide.automatic-calibration.post-calibration
variant_id: guide.automatic-calibration.post-calibration.imported-current-guide
title: Screenberryによる自動キャリブレーションの後補正 - 詳細調整とデータの書き出し
language: ja
kind: how-to
status: in_review
owner: unassigned
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: existing-guide
    path: archive/site/content/jp/automatic-calibration/post-calibration.mdx
    sha256: b1cc6cd819d8c005c79f5faac1d8b4aadb3fa6b91ca658fdb9e7aa10317bc57b
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/automatic-calibration/post-calibration.mdx
  canonical_url: https://help.screenberry.com/jp/automatic-calibration/post-calibration
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: b1cc6cd819d8c005c79f5faac1d8b4aadb3fa6b91ca658fdb9e7aa10317bc57b
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryによる自動キャリブレーションの後補正 - 詳細調整とデータの書き出し
    description: 自動キャリブレーションのの後補正作業について、キャリブレーション結果の微調整やほかのアプリケーションなどで利用するためのデータ書き出し方法について説明します。
    openGraph:
      title: Screenberryによる自動キャリブレーションの後補正 - 詳細調整とデータの書き出し
      description: 自動キャリブレーションの最終段階、映像の調整や活用のためのデータ書き出し方法について説明します。
translation:
  source_language: en
  source_id: guide.automatic-calibration.post-calibration
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/how-to/automatic-calibration/post-calibration.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/automatic-calibration/post-calibration.yaml
  visual_information_review: not-independently-verified
---

# キャリブレーション後の作業

## キャリブレーション後のドーム投影の調整

自動キャリブレーションの完了後、キャリブレーションカメラの位置、方向、レンズの歪みを補正するために、[Dome Transform](../../reference/warping-alignment/dometransform.md)ノードを使用してさらに調整を行う場合があります。

## キャリブレーション画像の確認

もしキャリブレーションの結果が満足できない場合や、キャリブレーション中にエラーメッセージが表示された場合、問題の特定のためにキャリブレーション画像を確認することができます。

キャリブレーションデータを確認するには、**Calibrator Wizard**ウィジェットの**Open Calibration Images Viewer**(Open Calibration Images Viewer)ボタンを押し、必要なキャリブレーション段階の写真や画像を**Select Image**ドロップダウンリストから選びます。

## キャリブレーションファイルの書き出し

キャリブレーションファイルは、**DomeSDK Saver**ノードを使用して書き出することができます。このノードは、結合されたプロジェクション映像のキャリブレーションファイルを _.sbraw_（Screenberry独自形式）および _.png_ 形式で保存します。これらのファイルは、Unreal® Engine 4、Unity®、TouchDesignerアプリケーション用に開発された **Front Pictures SDK** プラグインで使用することができます。_.sbraw_ ファイル形式には浮動小数点ピクセル値が含まれています。

> **メモ：** キャリブレーションファイルのエクスポートはScreenberryのデモバージョンでは無効になっています。
