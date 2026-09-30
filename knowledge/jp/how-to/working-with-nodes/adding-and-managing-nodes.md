---
id: guide.working-with-nodes.adding-and-managing-nodes
variant_id: guide.working-with-nodes.adding-and-managing-nodes.imported-current-guide
title: Screenberryにおけるノードの追加および編集方法
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
    path: archive/site/content/jp/working-with-nodes/adding-and-managing-nodes.mdx
    sha256: 334ae0800f75b5142d49dea1c064e386e8ef57049331f24e1edf111a3a9db7a5
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/working-with-nodes/adding-and-managing-nodes.mdx
  canonical_url: https://help.screenberry.com/jp/working-with-nodes/adding-and-managing-nodes
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 334ae0800f75b5142d49dea1c064e386e8ef57049331f24e1edf111a3a9db7a5
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryにおけるノードの追加および編集方法
    description: ノードの選択、移動、グループ編集の方法について説明します。
    openGraph:
      title: Screenberryにおけるノードの追加、移動および編集方法
      description: ノードの選択、移動、グループ編集の方法について説明します。
translation:
  source_language: en
  source_id: guide.working-with-nodes.adding-and-managing-nodes
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/how-to/working-with-nodes/adding-and-managing-nodes.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/working-with-nodes/adding-and-managing-nodes.yaml
  visual_information_review: not-independently-verified
---

# ノードの追加と管理

## ノードの追加

ノードを追加するには、**Node Graph**ウィジェットの空白の領域で右クリックして、**Add Node**ドロップダウンメニューを開き、次のいずれかの操作を行います：

- メニューの上部にある**Search**ボックスにノード名を入力し、ドロップダウンリストから選択するか、必要なノードがリストの最上部にある場合は**Enter**キーを押します。
- **Categoty**または**Tag**でノードを選択します。
- **Recently Added Nodes**リストからノードを選択します。

ノードは**ノードグラフ**内の、**Add Node**メニューが呼び出された場所に追加されます。

**ノードの分類**

便宜上、利用可能なすべてのノードはカテゴリごとにグループ化され、1つ以上のタグが割り当てられています。ノードの選択は、**カテゴリ**または**タグ**のいずれかを使って行うことができます。

> **メモ：** 新しい**Display**または**Patch**が**Display Editor**または**Patch Editor**で作成されると、**Display**および**Patch**タイプのノードも自動的にノードグラフに作成され追加されます。

## ノードの選択

ノードを選択するには、**ノードグラフ**内でノードを左クリックします。

複数のノードを選択するには、**Shift** キーを押しながら **ノードグラフ**上のノードをクリックするか、左クリックして選択枠をドラッグします。

右から左にドラッグすると、四角形の選択枠に触れるすべてのノードが選択されます。

もし左から右へドラッグすると、四角形の選択範囲内のノードのみが選択されます。この機能は、複雑なノードツリーの一部であるノードを選択する際に便利です。

ノードをダブルクリックすると、そのノードに接続されているすべてのノードが選択されます。

また、同じタイプの複数のノードを選択する方法については、[複数選択されたノードの設定](../../reference/working-with-nodes/node-parameters-and-settings.md#%E8%A4%87%E6%95%B0%E9%81%B8%E6%8A%9E%E3%81%95%E3%82%8C%E3%81%9F%E3%83%8E%E3%83%BC%E3%83%89%E3%81%AE%E8%A8%AD%E5%AE%9A)を参照してください。

## ノードの移動

ノードを移動するには、ノードを左クリックしてドラッグします。複数のノードが選択されている場合、選択した任意のノードをクリックしてドラッグすると、全体が移動します。

## ノードのコピー、貼り付け、切り取り操作

**ノードグラフ**でノードをコピーまたは貼り付けするには、次のいずれかの方法を使用します。

- ノード（または選択した複数のノード）を右クリックし、ドロップダウンメニューから**Copy**または**Cut**を選択し、その後**Paste**を選択します。
- キーボードショートカットを使用します： コピーするには **`Ctrl`** + **`C`**、切り取るには **`Ctrl`** + **`X`**、貼り付けるには **`Ctrl`** + **`V`** を押します。

> **メモ：** Screenberry プロジェクト内のノードは、他のプロジェクトにコピーして貼り付けることができます。

## ノードの削除

ノードまたは選択した複数のノードを削除するには、ノード（またはグループ）を右クリックし、ドロップダウンメニューから**Delete**を選択するか、**`Del`** ボタンを押します。ノードを削除すると、それに接続されたリンクも削除されます。

## ノードの名前変更

ノードの名前を変更するには、そのノードを右クリックして、ドロップダウンメニューから**Rename**を選択し、表示されたダイアログボックスに新しい名前を入力します。

## ノードのサイズ変更

ノードのサイズを変更するには、そのノードを選択し、四隅のいずれかをドラッグします（マウスオーバー時に表示されます）。

## ノードのグループ化

ノードツリーのレイアウトを視覚的に簡素化し、より整理されたものにするために、一部のノードをグループ化してまとめることができます。これを行うには、選択したノードのグループを右クリックし、ドロップダウンメニューから**Group Nodes**を選択します（または **`G`** キーを押します）。そして、表示されたダイアログボックスに作成されたグループの名前を入力します。選択したノードは、現在リンクされている入力および出力パラメータと一致する入力および出力パラメータピンを持つ専用の**Group**ノードに結合されます。

**Group**ノードに含まれるノードを表示および編集するには、それを右クリックし、ドロップダウンメニューから **Edit \[グループ名]** を選択するか、**Group**ノードをダブルクリックします。

(Grouping Nodes)!

異なる**Group**ノードの内容とメインのノードツリーを切り替えるには、**Node Graph**ウィジェットのナビゲーションバーにあるグループ名のボタンをクリックします（ここで**Root**はメインのノードツリーを示しています）。

**Group**ノードにまとめられたノードを解体するには、**Group**ノードを右クリックし、ドロップダウンメニューから**Ungroup**を選択します（または **`U`** キーを押します）。
