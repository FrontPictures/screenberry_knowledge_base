---
id: guide.media-playback.timelines.timeline-view
variant_id: guide.media-playback.timelines.timeline-view.imported-current-guide
title: Screenberryのタイムラインの表示設定とナビゲーション
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
    path: archive/site/content/jp/media-playback/timelines/timeline-view.mdx
    sha256: e6c337ed712f49d0e848209d6d2da1a72c59611fb4501ac8b257c276eb35870c
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/media-playback/timelines/timeline-view.mdx
  canonical_url: https://help.screenberry.com/jp/media-playback/timelines/timeline-view
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: e6c337ed712f49d0e848209d6d2da1a72c59611fb4501ac8b257c276eb35870c
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryのタイムラインの表示設定とナビゲーション
    description: Screenberryのタイムラインについて、再生制御や各種設定方法を説明します。
    openGraph:
      title: Screenberryのタイムラインの表示設定とナビゲーション
      description: Screenberryのタイムラインについて、再生制御や各種設定方法を説明します。
translation:
  source_language: en
  source_id: guide.media-playback.timelines.timeline-view
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../../en/reference/media-playback/timelines/timeline-view.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/media-playback/timelines/timeline-view.yaml
  visual_information_review: not-independently-verified
---

# タイムライン表示と操作

**Timeline**パネルは、メディアの整理と再生管理のためのさまざまなツールとオプションを提供しています。これには以下のものが含まれます：

1. **現在の再生時間：** タイムライン上の現在の再生位置を表示します。
2. **ガイド位置表示：** タイムライン上のガイドの時間位置を表示します。
3. **トップツールバー：** タイムライントラックの追加、さまざまな種類のマーカーの挿入、Timeline表示のズーム操作のためのツールが含まれています。
4. **サイドツールバー：** **カミソリ**(Razor Icon)ツールと**移動**(Move Icon)ツールのセレクタ、再生位置スナップを切り替える**Playhead Snapping**(Playheadsnap Icon)スイッチ、メディアアイテムのスナッピングを制御する**Snap On/Off**(Snap Icon)スイッチ、タイムラインの**設定機能**が含まれています。
5. **トラック：** タイムライン上でメディアアイテムを整理してレイヤー化します。
6. **タイム目盛り：** 正確なメディアの整列のための時間目盛りを表示します。
7. **再生ヘッド：** タイムライン上の現在の再生位置を示します。
8. **ガイド：** タイムライン上の特定の時間位置を参照用に表示します。
9. **メディアアイテム：** タイムライントラック内に配置された個々のメディアアイテムです。
10. **再生制御バー：** 再生制御に使用する**Play Selected Item**、**Play**(Play1)、**Pause**、**Stop**(Stop)ボタンが含まれています。さらに、**再生制御のロック/ロック解除**(Lock)トグルボタンと、アクティブなアイテムを表示する**Reveal Active Item**(Reveal Icon)ボタンも含まれています。
11. **Media Playerの音量制御：** Media Playerの出力音量を調整します（詳細は[音量調整](../media-player/media-player-global-settings.md#%E9%9F%B3%E9%87%8F%E8%AA%BF%E6%95%B4)を参照）。
12. **Media Playerの色調補正：** Media Playerの映像出力の色調を調整します（詳細は[色調補正](../media-player/media-player-global-settings.md#%E8%89%B2%E8%AA%BF%E8%A3%9C%E6%AD%A3)を参照）。

## タイムライン上の再生位置の変更

以下のいずれかの方法で、タイムライン上で再生位置を変更します。

- 再生位置ヘッドを移動したいタイムライン上の時間目盛りをクリックします。
- タイムライン上の再生ヘッドをドラッグします。再生ヘッドをメディアアイテムの境界やマーカーにスナップさせたい場合は、サイドツールバーの**Playhead Snapping**(Playheadsnap Icon)スイッチを有効にします。
- 矢印キーを使用します。**`右矢印`** キーまたは **`左矢印`** キーを押して、再生ヘッドを次のフレームまたは前のフレームに移動します。**`上矢印`** キーまたは **`下矢印`** キーを押して、次のメディアアイテムの境界やマーカーに移動します。
- **`K`** キーまたは **`J`** キーを押して、再生ヘッドを次のキーフレームまたは前のキーフレームに移動します。
- **`Home`** キーまたは **`End`** キーを押して、再生ヘッドをタイムラインの先頭または終端に移動します。

## タイムラインのズームイン/アウト

タイムラインのズームインまたはズームアウトするには、以下のいずれかの方法を使用します。

- マウスカーソルをタイムライン上に置き、マウスのスクロールホイールを使用して、マウスカーソルの位置に基づいてズームインまたはズームアウトします。
- 再生ヘッドの位置に基づいて、プラスキー **`+`** を押してズームインし、マイナスキー **`-`** を押してズームアウトします。
- トップツールバーの(Zoomplus Icon)または(Zoomminus Icon)ボタンをクリックして、再生ヘッドの位置に基づいてズームインまたはズームアウトします。
- トップツールバーの(Zoomfit Icon)ボタンをクリックするか、**`\`**（バックスラッシュ）キーを押して、タイムライン全体を表示するためにズームアウトします。
- トップツールバーの(Zoomframe Icon)ボタンをクリックするか、**`Shift`** + **`\`**（バックスラッシュ）キーを押して、フレーム単位までズームインします。

## タイムラインの水平移動

タイムラインの一部が表示されていない場合、タイムラインウィジェットの下部にあるスクロールバーをドラッグすることで水平に移動することができます。
