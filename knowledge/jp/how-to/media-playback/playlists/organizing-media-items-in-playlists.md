---
id: guide.media-playback.playlists.organizing-media-items-in-playlists
variant_id: guide.media-playback.playlists.organizing-media-items-in-playlists.imported-current-guide
title: Screenberryのプレイリスト内メディアアイテムの整理方法
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
    path: archive/site/content/jp/media-playback/playlists/organizing-media-items-in-playlists.mdx
    sha256: 500f2fb617f87a2792634b117e4ece1e988695aa0b4f458dbc3e368c52701ecd
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/media-playback/playlists/organizing-media-items-in-playlists.mdx
  canonical_url: https://help.screenberry.com/jp/media-playback/playlists/organizing-media-items-in-playlists
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 500f2fb617f87a2792634b117e4ece1e988695aa0b4f458dbc3e368c52701ecd
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryのプレイリスト内メディアアイテムの整理方法
    description: Screenberryのプレイリスト内にメディアアイテムを追加し、名前の変更や削除、並べ替えや表示方法の変更を行う方法について説明します。
    openGraph:
      title: Screenberryのプレイリスト内メディアアイテムの整理方法
      description: Screenberryのプレイリスト内でメディアアイテムを効率的に整理する方法について説明します。
translation:
  source_language: en
  source_id: guide.media-playback.playlists.organizing-media-items-in-playlists
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../../en/how-to/media-playback/playlists/organizing-media-items-in-playlists.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/media-playback/playlists/organizing-media-items-in-playlists.yaml
  visual_information_review: not-independently-verified
---

# プレイリスト内のメディアアイテム整理

**プレイリスト**は、**Media Player**ウィジェットで再生するメディアアイテムを整理するために使用されます。複数のプレイリストをフォルダに分けて配置することができます。

## メディアアイテムをプレイリストに追加

メディアアイテムは、**Media Library**またはコンピュータの任意のフォルダ（つまり、Windowsファイルエクスプローラのフォルダ）からプレイリストに追加することができます。

**Media Library**からメディアアイテムを追加するには：

1. プレイリストの内容を**Media Player**ウィジェットで表示するには、その名前をクリックします。
2. メディアアイテムを**Media Library**からプレイリストのコンテンツエリアにドラッグアンドドロップするか、**Media Library**でメディアアイテムを選択し、この操作を実行するために**コピー**（**`Ctrl`** + **`C`**）および**貼り付け**（**`Ctrl`** + **`V`**）を使用します。

メディアアイテムを直接追加する方法：

1. プレイリストの内容を表示するために、**Media Player**ウィジェットでその名前をクリックしてください。
2. システムフォルダからファイルをドラッグアンドドロップするか、または**コピー**（**`Ctrl`** + **`C`**）および**貼り付け**（**`Ctrl`** + **`V`**）操作を使用してください。
3. 表示される**Add Media File(s)** ダイアログボックスで、アップロードされるメディアアイテムの品質（**Good Quality 4:2:2**、**Max Quality 4:2:2**、**Optimal Quality 4:2:0**）を選択し、必要に応じてリサイズするかどうか選択してから、**Add**ボタンを押してください。

> **メモ：** プレイリストにメディアアイテムが直接追加されると、**Uploaded\_on\_YYYY-MM-DD** という名前の**Media Library**フォルダに自動的に追加されます。

同じ名前のメディアアイテムが既に存在する場合、ユーザーは新しいメディアアイテムを追加するか、既存のアイテムを上書きするかの選択肢が表示されます。

## サポートされているメディア形式

現在、次のファイル形式をアップロードすることができます：

|                  |                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------- |
| 動画               | mov, avi, mp4, flv, mkv, vob, ogv, wmv, mpg, m2v, 3gp, m4v, ts, gif, m2t, m2ts, mxf |
| 静止画（または静止画シーケンス） | jpg, tga, png, bmp, tif                                                             |
| 音声               | wav, mp3, aif, wma, ogg, ac3, aac, m4a, flac, ape                                   |
| 字幕               | srt                                                                                 |
| 内部フォーマット         | RVA, EDVA, EDV, EDVI, ERVA, license                                                 |

## メディアアイテム名の変更

**Media Library**でメディアアイテムの名前を変更する方法には2つあります。メディアアイテムの名前を変更すると、すべての既存のプレイリストでその名前が一斉に変更されます。

特定のプレイリスト内のメディアアイテムの名前を変更するには、右クリックしてドロップダウンメニューから**Settings**を選択し、**Title**欄に新しい名前を入力してください。

> **メモ：** 現在、既存の **Media Player** ウィジェットのいずれかで再生中のメディアアイテムは、名前を変更することができません。

## メディアアイテムの削除

プレイリストからメディアアイテムまたは複数のメディアアイテムを削除するには、それらを右クリックしてドロップダウンメニューから**Delete**を選択するか、**`Del`** キーを押してください。

既存のすべてのプレイリスト方メディアアイテムを削除する場合は、**Media Library**からメディアアイテムを削除します。プレイリスト内のメディアアイテムまたは複数のメディアアイテムを右クリックし、ドロップダウンメニューから**Remove Item from Media Library**を選択するか、**`Shift`** + **`Del`** キーを押してください。

メディアアイテムが**Medial Library**から削除され、再生ができなくなったことを示すために、既存のプレイリスト内のすべての該当メディアアイテムのサムネイルに取り消し線が引かれます。同じ名前のメディアアイテムが後で**Media Library**に追加されると、同名のメディアアイテムのすべてのサムネイルがアクティブな状態に戻り、再び**Media Player**のプレイリストで再生可能になります。

## メディアアイテムの整理

メディアアイテムは、ドラッグアンドドロップや**コピー**（**`Ctrl`** + **`C`**）、**切り取り**（**`Ctrl`** + **`X`**）、**貼り付け**（**`Ctrl`** + **`V`**）コマンドを使用して整理することができます。

- 同じプレイリスト内でメディアアイテムの再生順序を変更することができます。
- 同じ**Media Player**ウィジェットの異なるプレイリスト間でコピーや移動ができます。
- 異なる**Media Player**ウィジェットのプレイリスト間でもコピーや移動ができます。

メディアアイテムがプレイリスト間でコピーまたは移動されると、再生設定が保持されます。

さらに、テキストエディタにメディアアイテムのデータと再生設定を **コピー**（**`Ctrl`** + **`C`**）および **貼り付け**（**`Ctrl`** + **`V`**）することもできます。

プレイリスト内のメディアアイテムを視覚的に識別しやすくするために、カラータグを割り当てることができます。プレイリスト内の一つまたは複数のメディアアイテムを選択し、右クリックして表示されるドロップダウンメニュー内の**Set Color Tag**サブメニューから、タグの色を選択してください。

## メディアアイテムの並べ替え

メディアアイテムは、プレイリスト内で選択したアイテムを右クリックし、ドロップダウンメニューから**Sort By**サブメニューを選択することで並べ替えができます。**フレーム数**、**名前**、**タイトル**、**カラータグ**、そして**シャッフル**など、いくつかの並べ替え方法があります。

## メディアアイテムのサムネイル

プレイリストのコンテンツエリアの右上にあるサムネイルサイズスライダーとオプションメニューを使用して、メディアアイテムのサムネイルの表示方法を調整することができます。

サムネイルのサイズを変更するには、サムネイルサイズスライダーをドラッグします。

クリックすることでアクセスできるサムネイルメニュー(Eye)は、以下のオプションを提供しています：

- サムネイルの表示方法には3つの異なるタイプがあります：
  - **正方形** (T Square)、1 x 1（デフォルト）
  - **横** (T Wide)、ランドスケープ向けの2 x 1
  - **縦** (T Tall)、ポートレート向けの1 x 2
- サムネイル画像の引き延ばし方法も選択できます。**Aspect Fit**チェックボックスが選択されている場合（デフォルト）、中央に配置されたサムネイル画像は自動的にクロップされ、短い寸法に合わせてサムネイルの枠が埋められます。**Aspect Fit**チェックボックスが選択されていない場合、サムネイル画像は長い寸法に合わせて自動的にサムネイルの枠にフィットします。
- メディアアイテムのタイトル（名前）の表示/非表示は、**Hide Titles**チェックボックスで切り替えることができます。
