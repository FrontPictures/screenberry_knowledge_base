---
id: guide.working-with-nodes.node-parameters-and-settings
variant_id: guide.working-with-nodes.node-parameters-and-settings.imported-current-guide
title: Screenberryのノードパラメータとその設定
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
    path: archive/site/content/jp/working-with-nodes/node-parameters-and-settings.mdx
    sha256: 411bdf4ed7c32570fb2c1ddf12cfdaaae95683a0316dbc65f34441367a25c95b
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/working-with-nodes/node-parameters-and-settings.mdx
  canonical_url: https://help.screenberry.com/jp/working-with-nodes/node-parameters-and-settings
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 411bdf4ed7c32570fb2c1ddf12cfdaaae95683a0316dbc65f34441367a25c95b
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryのノードパラメータとその設定
    description: 様々なノードのパラメータについて、その編集やノードの表示設定の変更方法を説明します。
    openGraph:
      title: Screenberryのノードパラメータとその設定
      description: 様々なノードのパラメータについて、その編集やノードの表示設定の変更方法を説明します。
translation:
  source_language: en
  source_id: guide.working-with-nodes.node-parameters-and-settings
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/reference/working-with-nodes/node-parameters-and-settings.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/working-with-nodes/node-parameters-and-settings.yaml
  visual_information_review: not-independently-verified
---

# ノードのパラメータと設定

## ノードのパラメータ（ピン）

ノードピンは、ノードのパラメータをグラフィカルに表現したものです。

**データ**（灰色のピン (Grey Pin)）パラメータには、単純なデータ（数値、文字列、タイムコード）またはScreenberryの内部リソース（例： 画像）へのポインタが含まれています。

**スマートリンク**（水色のピン (Blue Pin)）は、リンクされたノード間の通信を確立します。

**アクション**（オレンジのピン (Orange Pin)）は、1つの入力に複数のリンクを作成することができます。その結果として、すべての入力値に対して論理OR（いずれか一つでも有効であれば有効）の結果が入力されます。

**メッセージ**（ピンク色のピン (Pink Pin)）もまた、1 つの入力に対して複数のリンクを作成することができます。こちらは、すべての入力がキューイングされ順番に処理されます。

## ノードの設定

ノードを選択すると、そのノードのパラメータを編集するための**Settings**パネルが表示されます。

**Settings**パネルでのノードパラメータ値が変更されると、パラメータ値フィールドの隣にある(Redoarrow 1)ボタンによって示されます。このボタンをクリックすると、デフォルトのパラメータ値に戻ります。

### 複数選択されたノードの設定

複数のノードが選択されている場合、**Settings**パネルにはすべての選択されたノードに共通するパラメータのみが表示され、編集することができます。さらに、選択範囲内の各タイプのノードの数に関する情報が**Settings**パネルの上部に表示されます。このボタンをクリックすると、そのタイプのノードのみを選択することができます。

## ノードの個々のパラメータの非表示/表示

パラメータを非表示にするには、パラメータ名を右クリックし、ドロップダウンメニューから**Hide**を選択します。非表示のパラメータを表示するには、**Hidden Parameters**欄で**Show**をクリックします。非表示状態のパラメータはイタリックで表示されます。パラメータを非表示解除するには、パラメータ名を右クリックし、ドロップダウンメニューから**Show**を選択します。非表示パラメータを表示しないようにするには、**Hidden Parameters**欄で**Hide**をクリックします。

> **メモ：** 一部のノードのより使用頻度の低い、より高度なパラメータはデフォルトで非表示になっています。

## ノードのピンの表示/非表示

**Settings**パネルでは、パラメータ名の左側にあるドットを左クリックすると、ノード上の対応するパラメータピンの表示と非表示を切り替えることができます。青いドット(Blue Dot)はパラメータピンが表示されていることを示し、灰色のドット(Grey Dot)は非表示を示します。

パラメータピンに設定されたリンクが非表示になった場合、このリンクは有効なままで、薄い線で表示されます。
