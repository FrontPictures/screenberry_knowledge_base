---
id: guide.media-playback.timelines.creating-managing-timelines
variant_id: guide.media-playback.timelines.creating-managing-timelines.imported-current-guide
title: Screenberryのタイムラインの作成及び管理
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
    path: archive/site/content/jp/media-playback/timelines/creating-managing-timelines.mdx
    sha256: c4fb90e13e4e5d0a7dcf1c1c5d5244c4bd38f07e9c04598f3aef8541056fb685
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/media-playback/timelines/creating-managing-timelines.mdx
  canonical_url: https://help.screenberry.com/jp/media-playback/timelines/creating-managing-timelines
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: c4fb90e13e4e5d0a7dcf1c1c5d5244c4bd38f07e9c04598f3aef8541056fb685
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryのタイムラインの作成及び管理
    description: Screenberryでタイムラインの作成や編集を行う方法や、再生制御のための設定方法を説明します。
    openGraph:
      title: Screenberryのタイムラインの作成及び管理
      description: Screenberryでタイムラインの作成や編集を行う方法や、再生制御のための設定方法を説明します。
translation:
  source_language: en
  source_id: guide.media-playback.timelines.creating-managing-timelines
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../../en/how-to/media-playback/timelines/creating-managing-timelines.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/media-playback/timelines/creating-managing-timelines.yaml
  visual_information_review: not-independently-verified
---

# タイムラインの作成と編集

## 概要

**Media Player**ウィジェットは、タイムライン上でメディアアイテムを組み立てて再生することができます。必要に応じて複数のタイムラインを作成し、フォルダに整理することもできます。

## タイムラインの追加

新しいタイムラインを作成するには、**Playlist and Timeline List**パネルの空白の領域を右クリックするか、下部のツールバーの**Add**(Add)ボタンをクリックして、ドロップダウンメニューから**Add Timeline**を選択します。

既存のフォルダ内にタイムラインを作成するには、フォルダを右クリックするか、選択して下部のツールバーの**Add**(Add)ボタンをクリックし、ドロップダウンメニューから**Add Timeline**を選択します。

フォルダの内容を表示または非表示にするには、フォルダ(Addfolder)アイコンの隣にある矢印アイコンをクリックしてください。

## タイムライン名の変更

タイムラインを作成する際には、識別しやすいように具体的な名前を付けると便利です。タイムラインの名前を変更するには、名前を右クリックし、ドロップダウンメニューから**Rename**を選択し、表示されたダイアログボックスに新しい名前を入力してください。

## タイムラインの削除

タイムラインを削除するには、タイムラインの名前を右クリックしてドロップダウンメニューから**Delete**を選択するか、選択してから**Playlist and Timeline List**パネルの下部ツールバーの**Delete**(Trash)ボタンをクリックします。

## タイムラインの整理

**Playlist and Timeline List**パネルで、**`上`** と **`下`** の矢印キーで選択するか、マウスで直接クリックすることでタイムラインを選択することができます。フォルダの内容を展開または折りたたむには、フォルダ名の横にある矢印アイコンをクリックしてください。

プレイリスト、タイムライン、またはフォルダの順序を変更するには、名前を右クリックし、ドロップダウンメニューから**Move Up**（**`Ctrl`** + **`上`**）または**Move Down**（**`Ctrl`** + **`下`**）を選択するか、リスト内でドラッグアンドドロップします。タイムラインをフォルダに移動するには、そのフォルダの名前の上またはフォルダの中にドラッグします。

## タイムラインの設定と状態表示

タイムライン設定のトグルボタンは、**Playlist and Timeline List**パネルのタイムライン名の横にあります。これらのトグルボタンは、現在のタイムラインの状態も示しています。

1. **ロック：** タイムラインの誤操作を防ぐために、ロックすることができます。ロックされたタイムラインは編集できず、ロック解除することで再び編集できるようになります。
2. **タイムコードの送信：** このトグルボタンのオン/オフによって、タイムラインがタイムコードを送信するかどうかを切り替えます。
3. **イベントマッピング：** タイムライン内のメディアアイテムは、MIDI/キーボードイベントなどの異なるイベントにマッピングされ、再生をトリガーとすることができます。このトグルボタンにより、これらのイベントを受信または無視するよう切り替えることができます。詳細については、[メディアアイテムのイベントへのマッピング](../../../reference/media-playback/playlists/media-item-properties.md#%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E3%82%92midi%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%AB%E3%83%9E%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%81%99%E3%82%8B)の章を参照してください。
4. **タイムコードの受信：** このトグルボタンのオン/オフによって、タイムコードを受信または無視するよう切り替えることができます。
5. **メディアアイテムの数：** タイムラインに追加されたメディアアイテムの現在の数が表示されます。

### 再生状態の表示

タイムライン名の隣に配置されているアイコンは、現在のタイムラインの再生、一時停止、停止の状態を示しています。タイムラインが折りたたまれたフォルダに含まれている場合、これらのインジケーターがフォルダアイコンと置き換わります。

## フレームレート （FPS）

タイムラインのフレームレートを変更するには、タイムライン名を右クリックし、ドロップダウンメニューから**Preferences**を選択するか、タイムラインのサイドツールバーの歯車アイコンをクリックします。次に、開いた**Timeline Preferences**ダイアログボックスで、**Timeline FPS**ドロップダウンリストから希望するフレームレート値を選択してください。

> **メモ：** 上記のトグルボタンは、タイムラインの名前を右クリックし、ドロップダウンメニューから**Preferences**を選択してアクセスできるタイムラインの設定で調整することもできます。
