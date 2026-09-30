---
id: guide.working-with-nodes.navigation-and-monitoring
variant_id: guide.working-with-nodes.navigation-and-monitoring.imported-current-guide
title: Screenberryのノードグラフ - 操作方法、表示設定およびカラー設定
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
    path: archive/site/content/jp/working-with-nodes/navigation-and-monitoring.mdx
    sha256: 2f7f01c3eeb6424db59914feea5375dccc131cefaf4f6e3582c7f68903d1cac4
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/working-with-nodes/navigation-and-monitoring.mdx
  canonical_url: https://help.screenberry.com/jp/working-with-nodes/navigation-and-monitoring
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 2f7f01c3eeb6424db59914feea5375dccc131cefaf4f6e3582c7f68903d1cac4
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryのノードグラフ - 操作方法、表示設定およびカラー設定
    description: Screenberryのノードグラフについて、操作方法や表示設定の方法を説明します。自動レイアウト、ズームやパン操作、カラー設定やノードの検索方法も説明します。
    openGraph:
      title: Screenberryのノードグラフ - 操作方法、表示設定およびカラー設定
      description: Screenberryのノードグラフについて、操作方法や表示設定の方法を説明します。自動レイアウト、ズームやパン操作、カラー設定やノードの検索方法も説明します。
translation:
  source_language: en
  source_id: guide.working-with-nodes.navigation-and-monitoring
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/how-to/working-with-nodes/navigation-and-monitoring.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/working-with-nodes/navigation-and-monitoring.yaml
  visual_information_review: not-independently-verified
---

# ノードグラフの操作と監視

## ノードの自動配置

**ノードグラフ**内のノードを整列するには、ノードを右クリックしてドロップダウンメニューから**Auto-Layout Nodes**を選択します（または **`L`** キーを押します）。ノードが選択されていない場合、**Auto-Layout Nodes**を使用すると、ノードツリー全体が整列されます。

## ノードの表示に合わせる

**ノードグラフ**内で 1 つまたは複数の選択されたノードを中心に最適に表示するには、ノードを右クリックしてドロップダウンメニューから**Fit to View**を選択します（または **`A`** キーを押します）。ノードが選択されていない場合は、**Fit to View**機能を使用するとノードツリー全体が表示されます。

## ノードサイズの変更

ノードのサイズを変更するには、ノードを選択し、マウスオーバー時に表示される四隅のコーナーハンドルのいずれかをドラッグしてください。

## ノードグラフのズームとパン

**ノードグラフ**の特定のエリアをズームインおよびズームアウトするには、マウスカーソルをその場所に移動し、マウスのスクロールホイールを使用します。または、右上隅の虫眼鏡(Zoom Button)ボタンをクリックし、マウスを移動して拡大率を変更します。

ビューをパンするには、次のいずれかを行います：

- マウスのスクロールホイールボタンを押したままにするか、マウスを移動する際に **`Alt`** キーを押します。
- 右上隅の十字矢印(Pan Button)ボタンをクリックし、マウスを移動します。

## ナビゲーターパネルの使用方法

**ナビゲーター**パネル（**Node Graph**ウィジェットの左下隅に位置）は、ノードグラフのサムネイル表示です。**ナビゲーター**パネル内の灰色の枠は、ウィジェットで現在表示されている領域に対応する俯瞰表示エリアです。

**ナビゲーター**パネル内の灰色の枠をドラッグすることで、ノードグラフ内を素早く移動できます。

**ナビゲーター**パネル上でマウスのスクロールホイールを使用することで、ノードグラフを拡大・縮小できます。

**ナビゲーター**パネルを右クリックすると、標準モードと拡大モードの表示モードを切り替えることができます。

**Node Graph**ウィジェットの空白の領域を右クリックし、**Minimap**チェックボックスを有効/無効にして（または **`Ctrl`** + **`M`** を押す）、**ナビゲーター**パネルの表示/非表示を切り替えることができます。

## ノードの色分け

色分けは、さまざまなタイプのノードを示すために使用されます。

以下の色の組み合わせはデフォルトで設定されており、**Preferences > Nodes Color Settings** で変更することができます。

- **コピー＆ペーストの方法：**
  1. **Media Library**、別の**Media Player**のプレイリスト、またはタイムラインで選択したメディアアイテムを選択します。
  2. 右クリックしてドロップダウンメニューから**Copy**を選択するか、**`Ctrl`** + **`C`** のキーボードショートカットを使用してこれらのアイテムをコピーします。
  3. コピーしたメディアアイテムのシーケンスの開始グリッドセルを選択し、そこにアイテムを貼り付けます。これは右クリックしてドロップダウンメニューから**Paste**を選択するか、**`Ctrl`** + **`V`** のショートカットを使用して行うこともできます。

色分けは、**Node Type**、**Category**、および**Tag**に基づいています。

新しいカスタム**カラーテーマ**を作成するには、(Plus Button)ボタンを押して、異な&#x308B;_&#x31;6 進数カラ&#x30FC;_&#x5024;を各 Type、Category、および Tag に割り当てます。

**Type**の色設定は**Category**の色設定よりも優先され、**Category**の色設定は**Tag**の色設定よりも優先されます。ノードの色が割り当てられる際に、これらのグループのいずれにも色が設定されていない場合、ノードの色はグレーのままです。

ノードのカラースキームを切り替えるには、**Color Theme**のドロップダウンリストでプロファイルを選択してください。

選択された**カラーテーマ**は(X Button)ボタンを押して削除することができます。

## ノードの検索

プロジェクトに追加された特定のノードを検索するには、虫眼鏡(Search Button)ボタン（**Node Graph**ウィジェットの左上隅にあります）をクリックしてください。または **`Ctrl`** + **`F`** を押し、開いた検索フィールドにノード名の一部を入力してください。一致するノードがリストに表示されます。リスト内のノード名をクリックしてノードグラフで選択します。

もし検索条件に一致するノードが複数ある場合、**`F3`** を押すと、選択が結果リストの次のノードに切り替わります。

## ツールチップを使用してノードパラメータを監視する

ノードパラメータ名（またはピン）の上にマウスを移動すると、リンクに流れるデータを含むパラメータのプロパティが表示される情報ツールチップが開きます（表示可能な場合）。この機能は、デバッグ中に特に便利であり、ノードの**Settings**パネルを参照する必要なく、関連する情報に素早くアクセスできます。
