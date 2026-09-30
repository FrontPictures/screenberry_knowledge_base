---
id: guide.display-editor
variant_id: guide.display-editor.imported-current-guide
title: Screenberry Display Editor - 映像出力のカスタマイズ
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
    path: archive/site/content/jp/display-editor.mdx
    sha256: fc34836965c92da2bf8a424ae1b149876bd0ef2f5911b7da19fe027606fcdf8f
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/display-editor.mdx
  canonical_url: https://help.screenberry.com/jp/display-editor
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: fc34836965c92da2bf8a424ae1b149876bd0ef2f5911b7da19fe027606fcdf8f
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Display Editor - 映像出力のカスタマイズ
    description: Screenberry Display Editorを使ったメディアサーバーの出力のカスタマイズ方法を説明します。個々の映像出力の追加、設定、配置を行うことができます。
    openGraph:
      title: Screenberry Display Editor - 映像出力のカスタマイズ
      description: Screenberry Display Editorを使って、メディアサーバーの出力のカスタマイズ方法を説明します。個々の映像出力の追加、設定、配置を行うことができます。
translation:
  source_language: en
  source_id: guide.display-editor
  source_revision: null
  status: alignment-unverified
  counterpart: ../../en/how-to/display-editor.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/display-editor.yaml
  visual_information_review: not-independently-verified
---

# Display Editor

## 概要

**Display（ディスプレイ）** は、メディアサーバーの出力画面上に描画する映像ソースの解像度とピクセル座標を定義します。

ユーザーは**Display Editor**を利用して、新しい Display の追加や Display のサイズ、位置、重ね順序の設定、Display 配列の作成、Display の入れ替えのほか、Display に関する様々な設定を行うことができます。**Display Editor**は**Canvas**（または**Render Target**）ウィジェット内でアクセスできます。

基本的な映像再生のノードグラフの例と、それを**Display Editor**で表示した例：

**Media Player**ノード **(1)** は、解像度が 1240 x 768 ピクセルで、**Canvas**ノード **(3)** の(0,0)座標に配置された **Display**ノード **(2)** に映像を送信します。**Canvas**ノードは、解像度が 1960 x 1280 ピクセルのサーバー出力画面を定義しています。

**Display Editor**にアクセスするには、ワークスペースに**Canvas**（または**Render Target**）ウィジェットを追加し、ウィジェットの左上にある**Displays**タブをクリックして**Displays**表示に切り替えてください。

## Display の追加

新しい Display を追加するには、以下の手順を実行してください：

1. **Canvas**（または**Render Target**）ウィジェットを開きます。
2. ウィジェットの左上にある**Displays**タブをクリックして、**Displays**表示に切り替えます。
3. ツールバーの左上にある**Add Display**ボタンをクリックするか、**Display**ウィジェットの空白の領域を右クリックして、ドロップダウンメニューから**Add Display**を選択します。
4. 表示されたダイアログボックスに新しい Display 名を入力し、**OK**を押します。

デフォルトでは、追加された Display は**Canvas**と同じ解像度になります。

関連する**Canvas**（または**Render Target**）ノードに自動的にリンクされ、**ノードグラフ**に対応する**Display**ノードが作成されます。

逆に、**ノードグラフ**に新しい**Display**ノードを追加し、それを**Canvas**（または**RenderTarget**）ノードにリンクすることでも**Display**を構築できます。

## Display 配列の作成

ビデオカードの個々の画面出力（またはビデオデバイス）の解像度とピクセル座標に合わせた同じレイアウトの Display のセットを構築したものです。

Display 配列を作成するには、以下の手順を実行します：

1. **Canvas**（または**RenderTarget**）ウィジェットを開きます。
2. ウィジェットの左上にある**Displays**タブをクリックして、**Displays**表示に切り替えます。
3. ツールバーの左上にある**Create Display Array**ボタンをクリックするか、**Displays**表示内の空白の領域を右クリックして、ドロップダウンメニューから**Create Display Array**を選択します。
4. 表示されたダイアログボックスで、Display 配列の行（**Rows**）と列（**Columns**）の数を入力し、**Display**に接続する Patch のタイプを選択して**OK**をクリックします。

その結果、**Canvas**が等しい領域に分割された Display の配列が作成されます。Display は、左から右、上から下に向かって**Display 1**、**Display 2**、**Display 3**などと名前が付けられます。同時に、関連する**Display**ノードと関連する**Patch**ノードが**Node Graph**に追加され、リンクされます。

> **メモ：** Display 配列の作成によって、現在の Canvas に追加されているすべての Display は削除されます。

## Display 名の変更

Display の名前を変更するには、次のいずれかの方法を使用します：

- Display を右クリックし、ドロップダウンメニューから**Rename**を選択し、表示されたダイアログボックスに新しい Display の名前を入力し、**OK**をクリックします。
- Display を選択し、Display の**Settings**パネルのヘッダーで Display 名を変更します。

## Display の選択

Display を選択するには、**Display Editor**内の Display を左クリックするか、ナビゲーションツリー内の Display 名をクリックします。

**Display Editor**内の Display またはナビゲーションツリー内の Display 名を\*\*`Shift`\*\*キーを押しながらクリックすることで、複数の Display を選択することができます

複数の Display は、**Display Editor**の空白領域をマウスで左ドラッグすることで一度に選択することもできます。

右から左にドラッグすると、矩形の選択範囲に接触するすべての Display が選択されます。

左から右へのドラッグ操作の場合、長方形の範囲内にある表示物のみが選択されます。

## Display の表示位置とサイズ

**Display Editor**で Display を移動するには、Display を左クリックしてドラッグします。複数の Display が選択されている場合、選択された Display のグループ全体が移動します。

デフォルトでは、自動スナップオプションが有効になっています。Display の位置を変更すると、その境界線は他の既存の Display や Canvas の境界線にスナップします。一時的にスナップを無効にするには、**`Shift`** キーを押しながら Display をドラッグします。

Display の位置を変更する別の方法は、**Display Editor**で Display を選択するか、ナビゲーションツリーで Display 名を選択し、**Settings**パネルの**Position**パラメータの**X**と**Y**の値を変更することです。

また、**Settings**パネルで表示のサイズも調整できます。**Size**パラメータの**W**と**H**の値を変更してください。

## Display のコピーと貼り付け

**Display Editor**で Display をコピーして貼り付けするには、次のいずれかの方法を使用します：

- Display（または選択した複数の Display）を右クリックし、ドロップダウンメニューから**Copy**または**Cut**を選択し、その後**Paste**を選択します。
- キーボードショートカットを使用します： **`Ctrl`** + **`C`** でコピー、**`Ctrl`** + **`X`** で切り取り、**`Ctrl`** + **`V`** で貼り付けします。

## Display の削除

Display を削除するには、次のいずれかの方法を使用します。

- Display を右クリックし、ドロップダウンメニューから**Delete**を選択します（または **`Del`** キーを押します）。
- **ノードグラフ**内の対応する**Display**ノードを削除します。

## Display の無効化

**ノードグラフ**（詳細は[ノードの状態](../concepts/working-with-nodes/node-basics.md#%E3%83%8E%E3%83%BC%E3%83%89%E3%81%AE%E7%8A%B6%E6%85%8B)を参照）で**Display**ノードを無効化すると、**Display Editor**内の対応する Display も無効化されます。ノードが無効化されていることを示すため、Display には取り消し線が描かれます。

## Display の入れ替え

Display を入れ替えるには、左上のツールバーにある**Swap Displays**タブをクリックするか、**Displays**表示の空白の領域を右クリックし、ドロップダウンメニューから**Swap Displays**を選択します。次に、以下の手順を実行します。

1. **Swap**欄のドロップダウンメニューから Display を選択します。リスト内の次の Display に移動するには、**Skip**ボタンまたは **`Enter`** キーを押します。
2. 選択した Display が表示されたら、**With**欄に入れ替える Display の名前を入力し、**Apply**ボタンを押します。

> **メモ：** この手順はセットアップ中に特に役立ちます。サーバーに映像表示デバイスを接続する際に、順序を気にする必要はありません。後で**Swap Displays**機能を使用して簡単に並びを変更できます。

## Display の重ね順序を変更する

Display の重ね順序を変更するには、**Display Editor**で Display を右クリックし、ドロップダウンメニューから次のいずれかを選択します。

- **Arrange** > **Bring To Front**は、Display を最前面に移動します。
- **Arrange** > **Bring Forward**は、Display を重ね順の一つ上に移動します。
- **Arrange** > **Send Backward**は、Display を重ね順の一つ下に移動します。
- **Arrange** > **Send To Back**は、Display を最背面に移動します。

また、Display の重ね順序は、**ノードグラフ**内の**Display**ノードと**Canvas**ノードを接続するリンクの並べ替えによっても変更できます（詳細は[ノードリンクの並べ替え](working-with-nodes/linking-nodes.md#%E3%83%8E%E3%83%BC%E3%83%89%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%AE%E4%B8%A6%E3%81%B3%E6%9B%BF%E3%81%88)を参照してください）。

Display は、**Display**ノードが**Canvas**ノードにリンクされる順序に基づいて上から下に積み重ねられます。つまり、後続のノードリンクを持つ Display がそれらの Display の上に重なって表示されます。

## Display のテストパターンを表示する

Display にテストパターンを表示するには、**Settings**パネルで、**Test Pattern**ドロップダウンから次のいずれかを選択します： **Display 名**、**数字**、**グリッド**、**カラーバー**、または**グラデーション**。

## Display 出力映像の回転

1 つ以上のプロジェクターやディスプレイパネルが縦向きや上下逆さまに配置されている場合、該当する Display 出力映像の向きが変更できると便利です。これにより、デバイスを物理的に動かすことなく、画面上の操作で修正を行うことができます。

Display の出力映像を回転させるには、**Settings**パネルにアクセスして、**Rotate Degree**ドロップダウンの中から次のいずれかを選択してください： **0°**、**90° 時計回り**、**90° 反時計回り**、または**180°**。

## Display Editor でのズームとパン

**Display Editor**で特定のエリアをズームインおよびズームアウトするには、マウスカーソルをそのエリアに重ね、マウスのスクロールホイールを使用します。または、右上隅にあるズーム(Zoom Icon)ボタンをクリックしてマウスを移動させることで拡大率を変更することもできます。

ビューをパンするには、マウスの左ボタンを押しながらドラッグするか、右上隅にあるパン(Pan Icon)ボタンをクリックし、マウスを移動させてください。
