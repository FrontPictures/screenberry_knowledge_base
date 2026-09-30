---
id: guide.media-playback.matrix-based-playlists.overview
variant_id: guide.media-playback.matrix-based-playlists.overview.imported-current-guide
title: Screenberryのマトリックス型プレイリスト - メディアアイテムの同期再生
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
    path: archive/site/content/jp/media-playback/matrix-based-playlists/overview.mdx
    sha256: adead322e1ab6c728e8733b36c973d47765bbcb733ec1245185d8f12631b8600
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/media-playback/matrix-based-playlists/overview.mdx
  canonical_url: https://help.screenberry.com/jp/media-playback/matrix-based-playlists/overview
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: adead322e1ab6c728e8733b36c973d47765bbcb733ec1245185d8f12631b8600
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryのマトリックス型プレイリスト - メディアアイテムの同期再生
    description: Screenberryのマトリックス型プレイリストを使った、複数のメディアアイテムを複数の映像出力に対してフレキシブルに同期再生する方法を説明します。
    openGraph:
      title: Screenberryのマトリックス型プレイリスト - メディアアイテムの同期再生
      description: Screenberryのマトリックス型プレイリストを使った、複数のメディアアイテムを複数の映像出力に対してフレキシブルに同期再生する方法を説明します。
translation:
  source_language: en
  source_id: guide.media-playback.matrix-based-playlists.overview
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../../en/concepts/media-playback/matrix-based-playlists/overview.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/concepts/media-playback/matrix-based-playlists/overview.yaml
  visual_information_review: not-independently-verified
---

# マトリックス型プレイリストの概要

Screenberry のマトリックス型プレイリストは、グリッド状のインターフェースを通じてメディアの再生を管理および制御する便利な方法を提供します。この機能により、ユーザーは複数のメディアシーケンスの再生を調整し、それぞれの映像出力を同期させることができます。この機能は、複数のビジュアルレイヤーをまたいだリアルタイムのビデオミキシングや、複数の映像出力に対して同時に複数のメディアを再生する必要があるダイナミックなメディアプレゼンテーションに特に有益です。

## マトリクス型プレイリストの画面構成

1. **ナビゲーションパネル：** **Media Player**で利用可能なプレイリストとタイムラインを表示します。
2. **ステータスバー：** 現在開いているプレイリストに関する情報を提供します。アイテムの総数や選択されたアイテムの詳細などが表示されます。
3. **表示オプション：** メディアアイテムのサムネイルのカスタマイズが可能で、サイズや向きの調整ができます。
4. **マトリックス行：** 連続再生のために配置されたメディアアイテムが含まれています。行ヘッダにはその行の専用の再生制御コントロールが表示されます。各行は指定された映像出力に割り当てることができます。
5. **マトリックス列：** メディアアイテムをセットとして整理し、異なる映像出力での同時再生を可能にします。
6. **再生制御バー：** マトリックス型プレイリストに対する一般的な再生制御インターフェースを提供します。**Play Selected**、**Play**、**Pause**、**Stop**、**Play Next**、**Play Previous**のボタンがあります。さらに、**Lock/Unlock Playback Controls**トグルボタンと**Reveal Active Item**ボタンも備えています。
7. **シークバー：** 現在の再生位置を視覚的に示し、シークバーハンドルをクリックまたはドラッグすることでメディアアイテム内を素早くナビゲートすることができます。また、メディアアイテムの設定を調整するための追加の操作方法も提供されています。
8. **時間表示：** 現在選択されているメディアアイテムの再生時間情報を表示します。
9. **音量調整：** **Media Player**の全体的なオーディオ出力の音量を調整することができます（[音量調整](../../../reference/media-playback/media-player/media-player-global-settings.md#%E9%9F%B3%E9%87%8F%E8%AA%BF%E6%95%B4)の章を参照してください）。
10. **色調補正：** **Media Player**自身の色調補正を可能にします（[色調補正](../../../reference/media-playback/media-player/media-player-global-settings.md#%E8%89%B2%E8%AA%BF%E8%A3%9C%E6%AD%A3)の章を参照してください）。
