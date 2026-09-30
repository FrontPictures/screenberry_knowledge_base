---
id: guide.node-reference.integration-nodes.touchengine
variant_id: guide.node-reference.integration-nodes.touchengine.imported-current-guide
title: ScreenberryのTouchEngineノード - TouchDesignerプロジェクトの統合
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
    path: archive/site/content/jp/node-reference/integration-nodes/touchengine.mdx
    sha256: bbe29dca0bcc3ac32c2378bd6338fbd7b8332e3af7e4bd710b0b26b4c6eed51f
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/node-reference/integration-nodes/touchengine.mdx
  canonical_url: https://help.screenberry.com/jp/node-reference/integration-nodes/touchengine
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: bbe29dca0bcc3ac32c2378bd6338fbd7b8332e3af7e4bd710b0b26b4c6eed51f
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: ScreenberryのTouchEngineノード - TouchDesignerプロジェクトの統合
    description: ScreenberryのTouchEngineノードを使ったTouchDesignerプロジェクトの統合方法について説明します。リアルタイムかつインタラクティブなコンテンツ、データ処理などを組み込むことができます。
    openGraph:
      title: ScreenberryのTouchEngineノード - TouchDesignerプロジェクトの統合
      description: ScreenberryのTouchEngineノードを使ったTouchDesignerプロジェクトの統合方法を順を追って説明します。
translation:
  source_language: en
  source_id: guide.node-reference.integration-nodes.touchengine
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../../en/reference/node-reference/integration-nodes/touchengine.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/node-reference/integration-nodes/touchengine.yaml
  visual_information_review: not-independently-verified
---

# TouchEngine

**TouchEngine**ノードは、[TouchEngine API](https://docs.derivative.ca/TouchEngine)を使用して、TouchDesigner プロジェクトを直接 Screenberry パイプラインに統合することができます。TouchEngine から取得した映像ストリームは、テクスチャまたは合成レイヤーとして使用することができます。入力データストリームは、トラッキング座標、オブジェクトのプロパティ、DMX 値、タッチイベント、およびその他のリアルタイムデータなど、Screenberry に情報を提供するために使用することができます。

> **メモ：** TouchEngine は、TouchDesigner のインストールされたバージョンと有料ライセンスが必要です。TouchEngine を実行すると、自動的にユーザーのシステム上で使用可能な TouchDesigner アプリケーションが検出されます。

> **メモ：** TouchEngine を動作させるためには、TouchDesigner を実行する必要はありません。

TouchDesigner プロジェクトを統合可能にするためには、以下の手順を実行してください。

1. TouchDesigner プロジェクト内で、必要なタイプの _In_ オペレータと _Out_ オペレータを作成します。
2. プロジェクトをコンポーネント（.tox ファイル）として保存します。

Screenberry に TouchDesigner プロジェクトを統合するには、以下の手順を実行してください。

1. ノードグラフに**TouchEngine**ノードを追加します。
2. **TouchEngine**ノードのノード設定で、.tox ファイルを選択して読み込みます。
3. TouchDesigner プロジェクト内の _In_ オペレータと _Out_ オペレータに対応する入力と出力パラメータを追加するために、以下の手順を各パラメータに対して繰り返します。
   1. **Add Input Parameter / Add Output Parameter**ボタンを押します。
   2. TouchDesigner から追加されたパラメータの名前をコピーして貼り付けます。

> **メモ：** TouchDesigner のバージョン 2021.13610 以前では、_In_ オペレータと _Out_ オペレータの名前に&#x306F;**_input/_** と **_output/_** の接頭辞を使用する必要がありました。バージョン 2021.13610 以降では、_In_ オペレータと _Out_ オペレータの両方に **_op/_** の接頭辞を追加する必要があります。

> **メモ：** 追加した TouchEngine パラメータの**Found**情報チェックボックスが選択されていることを確認してください。それ以外の場合は、パラメータ名が対応する TouchDesigner オペレータの名前と一致しているかどうかを確認してください。

3. 追加されたパラメータのタイプを選択してください - **TOP**、**CHOP**、**DAT（テーブル）**、または**DAT（文字列）**。

現在、TouchEngine API では、TOP、CHOP、および DAT の入力および出力オペレーターがサポートされています。

- TOP は、映像の作成、合成、変更、ファイルおよびネットワークへの静止画および動画の読み書きを行うオペレーター群です。TOP はグラフィックカードの GPU 上で動作します。
- CHOP は、アニメーション、オーディオ、数学、シミュレーション、ロジック、UI 構築などに使用されるチャンネル（数値の組）に対して操作を行うオペレーター群です。
- DAT は、テキスト文字列（複数行のテキストまたはテーブル）を操作するオペレーター群です。複数行テキストはコマンドスクリプトであることが多いですが、任意の複数行テキストであることもあります。テーブルは、テキスト文字列を含むセルの行と列で構成されます。

ノードの設定に入力/出力パラメーターが追加されると、ノードに対応するピンが追加されます。これにより、必要に応じて他のノードにこのパラメーターを接続することができます。

**TouchEngine**ノードを使用したノードツリーの例です。これらのサンプルScreenberryとTouchDesignerプロジェクトは、[sample
Screenberry and TouchDesigner projects](https://screenberry.com/resources/downloads)からダウンロードできます。
