---
id: guide.organizing-media.managing-media-items
variant_id: guide.organizing-media.managing-media-items.imported-current-guide
title: Screenberryのメディアアイテム操作 - 追加、削除、検索方法について
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
    path: archive/site/content/jp/organizing-media/managing-media-items.mdx
    sha256: 826cbe66b6149aeb7e32909c12071cd7deb40b2d848753d6b7336b63d15f7192
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/organizing-media/managing-media-items.mdx
  canonical_url: https://help.screenberry.com/jp/organizing-media/managing-media-items
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 826cbe66b6149aeb7e32909c12071cd7deb40b2d848753d6b7336b63d15f7192
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryのメディアアイテム操作 - 追加、削除、検索方法について
    description: ScreenberryのMedia Library内でメディアアイテムを追加、削除および検索する方法について説明します。
    openGraph:
      title: Screenberryのメディアアイテム操作 - 追加、削除、検索方法について
      description: ScreenberryのMedia Library内でメディアアイテムを追加、削除および検索する方法について説明します。
translation:
  source_language: en
  source_id: guide.organizing-media.managing-media-items
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/how-to/organizing-media/managing-media-items.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/organizing-media/managing-media-items.yaml
  visual_information_review: not-independently-verified
---

# メディアアイテムの操作

## メディアファイルの追加

サーバーにメディアファイルを追加するには、次のいずれかの方法を実行します。

- **Media Library**フォルダを選択し、フォルダツリーエリアの下部にある**Add Media**(Plus)ボタンを押します。
- ファイルを既存の**Media Library**フォルダにドラッグアンドドロップします。
- ファイルを既存の**Media Player**ウィジェットのプレイリストにドラッグアンドドロップします。

表示された**Add Media File(s)** ダイアログボックスで、必要に応じてメディアアイテムの解像度を変更したり品質を変更したりしてから、**Add**ボタンを押してください。

同じ名前のメディアファイルが既に存在する場合、新しいメディアファイルを追加するか既存のファイルを上書きするかを選択するオプションが表示されます。

現在サポートされているファイル形式の一覧：

|          |                                                                                     |
| -------- | ----------------------------------------------------------------------------------- |
| 動画       | mov, avi, mp4, flv, mkv, vob, ogv, wmv, mpg, m2v, 3gp, m4v, ts, gif, m2t, m2ts, mxf |
| 静止画      | jpg, tga, png, bmp, tif                                                             |
| オーディオ    | wav, mp3, aif, wma, ogg, ac3, aac, m4a, flac, ape                                   |
| 字幕       | srt                                                                                 |
| 内部フォーマット | RVA, EDVA, EDV, EDVI, ERVA, license                                                 |

> **メモ：** 一度に複数のファイルをアップロードおよび変換し、プロセスが  **Interrupt** ボタンで中止された場合、アップロードされたが変換されていないファイルは自動的にサーバーから削除され、すでにアップロードおよび変換されたファイルは**Media Library**に追加されます。

> **メモ：** アップロードされたファイルは、ネイティブのScreenberryコンテナ形式 \*.rva に変換されます。

> **メモ：** メディアファイルがScreenberryサーバーに直接アップロードされた場合（共有フォルダやFTPを使用した場合）、**Refresh**(Reload)ボタンを押してそれらを**Media Library**で表示します。

## メディアアイテムの削除

メディアアイテムを削除するには、フォルダコンテンツエリアでメディアアイテム（複数のメディアアイテムの選択）を右クリックし、**Remove Item from Media Library**を選択するか、**`Shift`** + **`Del`** を押します。

## メディアアイテムの整理

もし、**Media Library**で**Media**フォルダが選択されている場合、すべてのフォルダの内容が表示され、メディアアイテムをフォルダ間でドラッグアンドドロップすることができます。

## メディアアイテムの検索

特定のメディアアイテムを検索するには、**Media Library**の検索ボックスに名前の一部を入力してください。その結果、検索条件に一致する名前やユーザー定義のラベルを持つメディアアイテムのみがコンテンツエリアに表示されます。**Media**フォルダが選択されている場合、検索はすべてのフォルダで実行されます。
