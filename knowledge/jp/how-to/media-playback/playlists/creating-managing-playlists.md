---
id: guide.media-playback.playlists.creating-managing-playlists
variant_id: guide.media-playback.playlists.creating-managing-playlists.imported-current-guide
title: Screenberryのプレイリスト - 作成、管理及び設定方法
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
    path: archive/site/content/jp/media-playback/playlists/creating-managing-playlists.mdx
    sha256: 96da38f6748f362c2117751e6a4adfc4d06f64a116adeb5fe8097c58a5e4419a
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/media-playback/playlists/creating-managing-playlists.mdx
  canonical_url: https://help.screenberry.com/jp/media-playback/playlists/creating-managing-playlists
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 96da38f6748f362c2117751e6a4adfc4d06f64a116adeb5fe8097c58a5e4419a
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryのプレイリスト - 作成、管理及び設定方法
    description: Sceenberryのプレイリストについて、作成方法や編集方法を説明します。再生制御やイベントマッピングなどの高度な機能についても説明します。
    openGraph:
      title: Screenberryのプレイリストの作成および管理方法
      description: Sceenberryのプレイリストについて、作成方法や編集方法を説明します。再生制御やイベントマッピングなどの高度な機能についても説明します。
translation:
  source_language: en
  source_id: guide.media-playback.playlists.creating-managing-playlists
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../../en/how-to/media-playback/playlists/creating-managing-playlists.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/media-playback/playlists/creating-managing-playlists.yaml
  visual_information_review: not-independently-verified
---

# プレイリストの作成と編集

**プレイリスト**は、**Media Player**ウィジェットで再生するためにメディアアイテムを整理するために使用されます。フォルダを使用してプレイリストを整理することもできます。

## プレイリストの追加

新しいプレイリストを作成するには、**ナビゲーションパネル**の空白のエリアで右クリックするか、下部のツールバーの**Add**(Add)ボタンをクリックし、ドロップダウンメニューから**Add Playlist**を選択します。

既存のフォルダに新しいプレイリストを追加するには、フォルダを選択し、下部ツールバーの**Add**(Add)ボタンをクリックするか、フォルダ名を右クリックしてドロップダウンメニューから**Add Playlist**を選択してください。

フォルダの内容を表示/非表示にするには、フォルダアイコンの隣にある矢印アイコンを押してください。

## プレイリスト名の変更

プレイリストを作成する際は、説明的な名前を付けると簡単に探し出すことができます。プレイリストの名前を変更するには、プレイリストを右クリックし、ドロップダウンメニューから **Rename** を選択し、表示されるダイアログボックスに新しい名前を入力してください。

## プレイリストの削除

プレイリストを削除するには、その名前を右クリックしてドロップダウンメニューから**Delete**を選択するか、名前を選択して**ナビゲーションパネル**の下部ツールバーにある**Delete**(Trash)ボタンをクリックします。

## プレイリストの整理

プレイリストとタイムラインのリスト内を移動するには、**`↑`** または **`↓`** の矢印キーを使用してください。フォルダのコンテンツを展開または折りたたむには、フォルダアイコンの隣にある矢印アイコンをクリックしてください。

プレイリスト、タイムライン、およびフォルダの順序を変更するには、名前を右クリックし、ドロップダウンメニューから**上に移動**（**`Ctrl`** + **`↑`**）または**下に移動**（**`Ctrl`** + **`↓`**）を選択するか、それらをリストにドラッグアンドドロップしてください。プレイリストは、フォルダの名前またはそのコンテンツの上にドラッグすることで、フォルダ内に移動することができます。

## プレイリストの設定と状態表示

1. **ロックとアンロック：** 誤操作を防ぐためにプレイリストをロックすることができます。ロックされたプレイリストは編集できませんが、アンロックすることでまた編集できるようになります。
2. **プレゼンテーションクリッカーによる再生制御：** プレイリストの再生はプレゼンテーションクリッカーで制御することができます。このトグルを使用して、この機能を有効または無効にすることができます。詳細については、[プレゼンテーションクリッカーによるプレイリストの再生制御](playlists-playback.md#%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AB%E3%83%BC%E3%81%A7%E3%81%AE%E5%86%8D%E7%94%9F%E5%88%B6%E5%BE%A1) を参照してください。
3. **MIDI/キーボードイベントのマッピング：** プレイリスト内の各メディアアイテムは、MIDI/キーボードイベントで再生を開始するようにマッピングすることができます。このトグルを使用して、プレイリストのMIDI/キーボードイベントの受信または無視の状態を切り替えることができます。詳細については、[メディアアイテムをMIDI/キーボードイベントにマッピングする](../../../reference/media-playback/playlists/media-item-properties.md#%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E3%82%92midi%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%AB%E3%83%9E%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%81%99%E3%82%8B) を参照してください。
4. **タイムコードの受信：** このトグルを使用して、プレイリストのタイムコードの受信または無視の状態を切り替えることができます。
5. **メディアアイテムの数：** 現在プレイリストに追加されているメディアアイテムの数が表示されます。

### プレイリストの状態表示

プレイリストが現在再生中、一時停止中、または停止中の場合、対応するアイコンがプレイリスト名の横に表示されます。現在アクティブなプレイリストがフォルダの一部であり、フォルダの内容が折りたたまれている場合、これらのアイコンはフォルダアイコンに置き換えられます。
