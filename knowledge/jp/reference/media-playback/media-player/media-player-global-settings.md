---
id: guide.media-playback.media-player.media-player-global-settings
variant_id: guide.media-playback.media-player.media-player-global-settings.imported-current-guide
title: ScreenberryのMedia Playerによる色調補正と音量制御
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
    path: archive/site/content/jp/media-playback/media-player/media-player-global-settings.mdx
    sha256: 3b10ef845b0532a3e356b335dff7302d5500c718afba5d6f1781400186c5adb0
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/media-playback/media-player/media-player-global-settings.mdx
  canonical_url: https://help.screenberry.com/jp/media-playback/media-player/media-player-global-settings
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 3b10ef845b0532a3e356b335dff7302d5500c718afba5d6f1781400186c5adb0
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: ScreenberryのMedia Playerによる色調補正と音量制御
    description: ScreenberryのMedia Playerで色調補正と音量制御を共通設定する方法を説明します。
    openGraph:
      title: ScreenberryのMedia Playerによる色調補正と音量制御
      description: ScreenberryのMedia Playerで色調補正と音量制御を共通設定する方法を説明します。
translation:
  source_language: en
  source_id: guide.media-playback.media-player.media-player-global-settings
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../../en/reference/media-playback/media-player/media-player-global-settings.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/media-playback/media-player/media-player-global-settings.yaml
  visual_information_review: not-independently-verified
---

# Media Playerの全体設定

## 色調補正

**Media Player**の出力用の色調補正コントロールにアクセスするには、**Media Player**ウィジェットの右下にある**Color Correction**(Colorcorrection)ボタンをクリックします。

> **メモ：** 色調補正は個々のメディアアイテムにも適用することができ、それらは**Media Player**の出力に適用されるものと組み合わされます。

### Color Correctionコントロール

#### チャンネルセレクター

色調補正は、すべてのチャンネルに同時に適用するか、個別&#x306B;_&#x52;ed_、_Green_、また&#x306F;_&#x42;lu&#x65;_&#x30C1;ャンネルに適用することができます。 **チャンネルセレクター**を使用して、調整したいチャンネルを選択します。

#### カーブによる調整

カーブを使用して映像の色調調整をするには：

- 制御点を作成するために曲線上をクリックします。
- 制御点をドラッグするか、**X**と**Y**の入力欄に値を入力して、座標を変更します。

制御点をダブルクリックして削除します。

#### 色相、彩度、明度スライダー

映像の **色相（Hue）**、**彩度（Saturation）**、および **明度（Lightness）** を調整するには、対応するスライダーをドラッグするか、対応する入力欄に値を入力します。

#### デフォルトの色調の復元

デフォルトの色調に戻すには、**Reset**ボタンを押します。

#### 色調補正設定の保存

色調補正設定をJSON（.cc）形式ファイルに保存するには、**Save**ボタンをクリックします。

#### 保存された色補正設定の適用

以前に保存されたJSON (\*.cc) 形式の色調補正設定を読み込むには、**Load**ボタンをクリックします。

## 音量調整

**Media Player**のオーディオ出力の音量を調整するには、**Media Player**ウィジェットの右下にある**Volume**(Volume)ボタンをクリックし、スライダーをドラッグして音量レベルを設定します。

個々のメディアアイテムのオーディオ音量も調整することができ、これらの変更は**Media Player**のオーディオ出力と音調設定と組み合わされます。
