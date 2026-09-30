---
id: guide.web-panel
variant_id: guide.web-panel.imported-current-guide
title: Screenberry ウェブ操作画面 - メディア再生と管理の遠隔操作
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
    path: archive/site/content/jp/web-panel.mdx
    sha256: 113b4bd29b521c413fc23ea8545506151f57459a4147ea5bf04ddd23b39d2edf
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/web-panel.mdx
  canonical_url: https://help.screenberry.com/jp/web-panel
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 113b4bd29b521c413fc23ea8545506151f57459a4147ea5bf04ddd23b39d2edf
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry ウェブ操作画面 - メディア再生と管理の遠隔操作
    description: どんなデバイスからでもHTML5を活用したウェブ操作画面を使うことができます。これにより、メディアプレーヤーにアクセスし、プレイリストを管理し、メディアアイテムの設定を遠隔編集することができます。
    openGraph:
      title: Screenberry ウェブ操作画面 - メディア再生と管理の遠隔操作
      description: どんなデバイスからでもHTML5を活用したウェブ操作画面を使うことができます。これにより、メディアプレーヤーにアクセスし、プレイリストを管理し、メディアアイテムの設定を遠隔編集することができます。
translation:
  source_language: en
  source_id: guide.web-panel
  source_revision: null
  status: alignment-unverified
  counterpart: ../../en/how-to/web-panel.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/web-panel.yaml
  visual_information_review: not-independently-verified
---

# Web操作画面

## 概要

Web操作画面は、HTML 5で動作するプラットフォーム非依存のウェブインターフェースを提供し、複数のユーザーがコンピュータ、タブレット、またはスマートフォンからウェブブラウザを介して同時にScreenberry Serverを操作できるようにします。

## Web操作画面へのアクセス

以下の手順でWeb操作画面にアクセスしてください：

1. **Node Graph**に、**WebServer**ノードを追加します。ノードのSettingsパネルで**Port**がデフォルトの8081に設定されていることを確認してください。ポート番号8081が既に使用されている場合は、別のポート番号を選択することもできます。
2. Screenberry Serverと同じPCからWeb操作画面にアクセスする場合は、ウェブブラウザでURL [http://127.0.0.1:8081](http://127.0.0.1:8081/)（または [http://localhost:8081](http://localhost:8081/)）を入力してください。無線端末や同じLAN内の別のPCなどからアクセスする場合は、Screenberry ServerのPCに関連付けられているIPアドレスのいずれかを入力することができます。例えば、URLは[http://192.168.31.218:8081](http://192.168.31.218:8081/)のようになります。

> **メモ：** Web操作画面では、Screenberryで現在作成されているメディアプレーヤー、プレイリスト、およびウィジェットにアクセスできます。

> **メモ：** Screenberryバージョン2.8.xの一部のビルドには既知の問題があり、新しく作成されたScreenberryプロジェクト&#x306E;_&#x52;esource&#x73;_&#x30D5;ォルダにWebサーバーコンポーネントがコピーされません。上記の手順を完了した後、空のページが表示される場合は、[このアーカイブ](https://help.screenberry.com/downloads/Web-Panel-Components.zip)からファイルをプロジェクト&#x306E;_&#x52;esources/webServe&#x72;_&#x30D5;ォルダに手動でコピーしてください。

## 映像の再生

Web操作画面は、Screenberryで作成された**Media Player**の映像再生とプレイリストの制御を提供します。

### プレイリストの選択

以下の手順で、目的のプレイリストにアクセスしてください：

1. 左上の**Screenberry Web Panel**メニュー(Burgmenu)ボタンをクリックし、**Media Player**を選択します。
2. 右下隅にある**Settings**(Settings Button)ボタンをクリックして、右のサイドバーを開きます。
3. ドロップダウンメニューで**Media Player**を選択します。
4. ドロップダウンメニューでプレイリストを選択します。

### 再生制御

1. &#x20;**Play Selected Item**ボタンで、選択されたメディアアイテムの再生を開始します。
2. &#x20;**Play**ボタンで、現在の再生ヘッドの位置から再生を開始します。
3. (Pause) **Pause**ボタンで、現在の再生ヘッドの位置で再生を一時停止します。
4. (Stop) **Stop**ボタンで、再生を終了します。
5. (Rew) **Previous Item**ボタンで、プレイリスト内の一つ前のメディアアイテムにジャンプします。
6. (Fwd) **Next Item**ボタンで、プレイリスト内の次のメディアアイテムにジャンプします。
7. &#x20;**Volume Control**ボタンで、**Media Player**自体の音量を調整します。

### メディアアイテムの再生

プレイリスト内のメディアアイテムを再生するには、以下のいずれかの方法を使用します：

- **Play**ボタンで、現在の再生ヘッドの位置から再生を開始します。
- プレイリストの中からメディアアイテムを選択し、**Play Selected Item**ボタンで再生を開始します。

### メディアアイテムの設定

メディアアイテムの設定にアクセスするには、メディアアイテムを選択し、右下隅にある**Settings** (Settings Button) ボタンを押してください。

以下のメディアアイテムの設定が編集可能です：

- **Title**： メディアアイテムの名前を変更します。
- **Fade In**： メディアアイテムのフェードイン時間を秒単位で定義します（前のメディアアイテムとのクロスフェード）。
- **Pause on First Frame** / **Pause on Last Frame**： メディアアイテムの再生を最初のフレームまたは最後のフレームで一時停止させるかどうかを設定します。
- **Loops**と**Infinite Loop**： メディアアイテムをループ再生させるかどうかを設定します。
- **Volume**： 選択したメディアアイテムの音量を調整します。

### プレイリストの管理

プレイリストを管理するには、右下の **Settings** (Settings Button) ボタンをクリックして、右サイドバーを開き、次にプレイリストのドロップダウンメニューをクリックします。以下の操作を行うことができます。

- 新しいプレイリストを追加するには、**Add New Playlist**ボタンをクリックします。
- プレイリストの名前を変更するには、プレイリスト名の横にある**編集**アイコン(Edit)をクリックし、表示されたダイアログボックスに新しい名前を入力してください。
- プレイリストを削除するには、プレイリスト名の横にある**ゴミ箱**アイコン(Trash)をクリックしてください。

### プレイリスト内のメディアアイテムの整理

メディアアイテムをプレイリストで整理するには、**Edit**フローティング(Edit Big)ボタンをクリックします。以下の操作を行うことができます：

- メディアアイテムを追加するには、プレイリストが空の場合は(Plus)ボタンをクリックします。特定のメディアアイテムの場合は(Plus Icon)アイコンをクリックしてから追加するメディアアイテムを選択します。開いた**Media Library**ウィジェットでメディアアイテムを選択し、**Add**(Add)ボタンを押します。
- メディアアイテムを削除するには、メディアアイテム上の(X Icon)アイコンをクリックしてください。
- メディアアイテムの順序を変更するには、メディアアイテムを希望する位置にドラッグしてください。

プレイリストの編集が終わったら、再び**Edit**フローティング(Edit Big)ボタンをクリックして編集モードを終了してください。

## ウィジェットの操作

Web操作画面では、Screenberryに追加されたウィジェットにアクセスできます。

以下の手順で、目的のウィジェットにアクセスしてください。

1. 左上隅にある**Screenberry Web Panel**ボタンをクリックし、**Widget**を選択します。
2. ドロップダウンメニューから**Widget**を選択します。
