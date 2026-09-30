---
id: guide.media-playback.media-player.media-player-overview
variant_id: guide.media-playback.media-player.media-player-overview.imported-current-guide
title: ScreenberryのMedia Playerによる再生制御
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
    path: archive/site/content/jp/media-playback/media-player/media-player-overview.mdx
    sha256: 23396ae336e5c29957599b8449a24ba2a8d8216bd40fb57695b56cbe9239b96f
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/media-playback/media-player/media-player-overview.mdx
  canonical_url: https://help.screenberry.com/jp/media-playback/media-player/media-player-overview
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 23396ae336e5c29957599b8449a24ba2a8d8216bd40fb57695b56cbe9239b96f
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: ScreenberryのMedia Playerによる再生制御
    description: ScreenberryのMedia Playerによる映像再生、プレイリストやタイムラインの管理やイベントマッピングによる映像再生の自動化について説明します。
    openGraph:
      title: ScreenberryのMedia Playerによる再生制御
      description: ScreenberryのMedia Playerによる映像再生、プレイリストやタイムラインの管理やイベントマッピングによる映像再生の自動化について説明します。
translation:
  source_language: en
  source_id: guide.media-playback.media-player.media-player-overview
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../../en/concepts/media-playback/media-player/media-player-overview.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/concepts/media-playback/media-player/media-player-overview.yaml
  visual_information_review: not-independently-verified
---

# Media Playerの概要

**Media Player**（メディアプレーヤー）は、メディアファイルの再生、プレイリストとタイムラインの管理、タイムコード操作、色調補正、音量調整を提供します。

Screenberryでは、複数のメディアプレーヤーを作成することができます。各メディアプレーヤーはプレイリストとタイムラインを含むことができます。

DisplayとPatchを使うことで、メディアプレーヤーは出力画面上で異なるサイズ、位置、形状で映像を重ねることができます。

メディアプレーヤーの再生は自動化することができます。そのためにメディアプレーヤー自体だけでなく、それぞれのプレイリスト、タイムライン、メディアアイテムなども、MIDI / キーボード / IPイベント、スクリプト、DMXコマンドなどによって手動または自動的にトリガーを受信することができます。

_**Media Player**の画面構成： 1 – ナビゲーションパネル、2 – 現在のプレイリストまたはタイムラインのコンテンツエリア、3 – 再生制御と設定のためのコントロールバー。_

## Media Player ウィジェット

**Media Player**ノードが**Node Graph**に追加されると、対応する**Media Player**ウィジェットがアクセス可能になります。このウィジェットをワークスペースに追加するには、**Screenberry Panel** のメインメニューから **Window** > \[**Media Player名**] を選択してください。

> **メモ：** 複数の**Media Player**ノードを作成することができます。追加された各**MediaPlayer**ノードには、独自の**Media Player**ウィジェットが用意されます。

## プレイリスト、タイムライン、およびフォルダ

メディア再生のために、メディアアイテムは**プレイリスト**に追加することも、**タイムライン**内に配置することもできます。

さらに、複数のプレイリストとタイムラインはフォルダで整理することもできます。新しいフォルダを作成するには、**ナビゲーションパネル**の空白のエリアを右クリックし、ドロップダウンメニューから**Add Folder**を選択するか、**ナビゲーションパネル**の下部ツールバーの**Add Folder**(Addfolder)ボタンをクリックしてください。

> **メモ：** デフォルトでは、新しい**Media Player**ウィジェットには空の**Playlist**が1つ作成されます。このプレイリストには、メディアアイテムを**Media Library**からドラッグ＆ドロップするか、直接システムフォルダから追加することができます。プレイリストへのメディアアイテムの追加については、[メディアアイテムをプレイリストに追加](../../../how-to/media-playback/playlists/organizing-media-items-in-playlists.md#%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E3%82%92%E3%83%97%E3%83%AC%E3%82%A4%E3%83%AA%E3%82%B9%E3%83%88%E3%81%AB%E8%BF%BD%E5%8A%A0)の章を参照してください。
