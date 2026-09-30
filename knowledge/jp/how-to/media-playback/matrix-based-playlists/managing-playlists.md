---
id: guide.media-playback.matrix-based-playlists.managing-playlists
variant_id: guide.media-playback.matrix-based-playlists.managing-playlists.imported-current-guide
title: Screenberryのマトリックス型プレイリスト - 作成、編集および設定方法
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
    path: archive/site/content/jp/media-playback/matrix-based-playlists/managing-playlists.mdx
    sha256: c517f490c93310056c8025ab82c68fa181e74b68c909a43a1920293732ded35a
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/media-playback/matrix-based-playlists/managing-playlists.mdx
  canonical_url: https://help.screenberry.com/jp/media-playback/matrix-based-playlists/managing-playlists
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: c517f490c93310056c8025ab82c68fa181e74b68c909a43a1920293732ded35a
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryのマトリックス型プレイリスト - 作成、編集および設定方法
    description: Screenberryでマトリックス型プレイリストを作成し、名前の変更や編集を行う方法について説明します。
    openGraph:
      title: Screenberryのマトリックス型プレイリスト - 作成および管理方法
      description: Screenberryでマトリックス型プレイリストを作成し、名前の変更や編集を行う方法について説明します。
translation:
  source_language: en
  source_id: guide.media-playback.matrix-based-playlists.managing-playlists
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../../en/how-to/media-playback/matrix-based-playlists/managing-playlists.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/media-playback/matrix-based-playlists/managing-playlists.yaml
  visual_information_review: not-independently-verified
---

# マトリックス型プレイリストの管理

## プレイリストの作成

新しいマトリックス型プレイリストを作成するには、**ナビゲーションパネル**内の空白の領域で右クリックするか、その下部ツールバーの**Add** (Add) ボタンをクリックし、ドロップダウンメニューから**Add Matrix Playlist**を選択します。

既存のフォルダ内にプレイリストを作成するには、フォルダを右クリックするか、選択して**Add**をクリックし、**Add Matrix Playlist**を選択します。フォルダの内容の表示/非表示を切り替えるには、そのフォルダの隣にある矢印アイコンをクリックします。

作成されたマトリックス型プレイリストは、**Matrix1**、**Matrix2**などと順番に名前が付けられます。

## プレイリスト名の変更

プレイリストの名前を変更するには、その名前を右クリックし、ドロップダウンメニューから**Rename**を選択し、表示されるダイアログボックスに新しい名前を入力してください。

## プレイリストの削除

プレイリストを削除するには、その名前を右クリックし、ドロップダウンメニューから**Delete**を選択するか、プレイリストを選択し、**ナビゲーションパネル**の下部ツールバーにある**Delete** (Trash) ボタンを押してください。

## マトリックス型プレイリストの整理

**ナビゲーションパネル**で、プレイリスト、タイムライン、フォルダのリストを移動するには、**`Up`** と **`Down`** の矢印キーを使用します。矢印アイコンをクリックしてフォルダを展開または折りたたむこともできます。

ナビゲーションパネル内でプレイリストまたはタイムラインの順序を変更するには、移動したいプレイリストまたはタイムラインの名前を右クリックし、ドロップダウンメニューから**Move Up**（**`Ctrl`** + **`Up`**）または**Move Down**（**`Ctrl`** + **`Down`**）を選択するか、リスト内の新しい位置にドラッグします。プレイリストをフォルダに配置するには、そのフォルダの名前の上にドラッグするか、現在のフォルダ内にドラッグします。

## プレイリストの設定と状態表示

プレイリスト名の横には、設定のためのトグルボタンがあり、現在のプレイリストの状態を表示しています：

1. **Locking**： プレイリストをロックすることで、意図しない変更を防ぎます。ロックされたプレイリストは編集できず、ロック解除することで再び編集できるようになります。
2. **Playback Control with Presentation Clicker**： プレゼンテーションクリッカーを使用したプレイリストの制御を有効化または無効化します。詳細については、[プレゼンテーションクリッカーによるプレイリスト再生制御](../playlists/playlists-playback.md#%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AB%E3%83%BC%E3%81%A7%E3%81%AE%E5%86%8D%E7%94%9F%E5%88%B6%E5%BE%A1)の章を参照してください。
3. **Event Mapping**： プレイリスト内のメディアアイテムは、MIDI/キーボード入力などのさまざまなイベントを通じて再生を開始することができます。このトグルボタンを使用して、プレイリストがそのようなイベントを監視するかどうかを切り替えることができます。詳細については、[メディアアイテムをイベントにマッピングする](../../../reference/media-playback/playlists/media-item-properties.md#%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E3%82%92midi%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%AB%E3%83%9E%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%81%99%E3%82%8B) の章を参照してください。
4. **Listening to the Timecode**： このトグルボタンを使用して、プレイリストがタイムコードを受信するか無視するかを設定します。
5. **Number of Media Items**： プレイリスト内の現在のメディアアイテムの数を表示します。

### 再生状態の表示

プレイリスト名の横には、現在の状態（再生中、一時停止、停止）を表示するアイコンが表示されています。プレイリストが折りたたまれたフォルダ内にある場合、これらのアイコンはフォルダアイコンの代わりに表示されます。
