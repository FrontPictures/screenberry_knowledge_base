---
id: guide.working-with-nodes.linking-nodes
variant_id: guide.working-with-nodes.linking-nodes.imported-current-guide
title: Screenberryノードグラフでのノード接続
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
    path: archive/site/content/jp/working-with-nodes/linking-nodes.mdx
    sha256: c3f6eac7421915ebdd56f0f92fcc5125a91e70f7a0fb56aa60ecfedd4d5f84ed
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/working-with-nodes/linking-nodes.mdx
  canonical_url: https://help.screenberry.com/jp/working-with-nodes/linking-nodes
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: c3f6eac7421915ebdd56f0f92fcc5125a91e70f7a0fb56aa60ecfedd4d5f84ed
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryノードグラフでのノード接続
    description: Screenberryにおける自動又は手動でのノード間の接続方法について説明します。データフローの整理、再配置、およびリンクの削除の方法を説明します。
    openGraph:
      title: Screenberryノードグラフでのノード接続
      description: Screenberryのノードグラフでノードを接続するための効率的な作業方法について説明します。
translation:
  source_language: en
  source_id: guide.working-with-nodes.linking-nodes
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/how-to/working-with-nodes/linking-nodes.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/working-with-nodes/linking-nodes.yaml
  visual_information_review: not-independently-verified
---

# ノードのリンク

## 自動的にノード間のリンクを作成する

ノード間のリンクを自動的に作成するには、1つ以上のノードを選択し、**`Ctrl`** キーを押しながら対象のノードを左クリックします。Screenberryは同じタイプのパラメータを識別してリンクを確立します。これはノードを接続する最速の方法です。

## ノード間のリンクを手動で作成する

ノードを手動で接続するには、ノードの入力または出力ピンを左クリックし、リンクをリンクさせたいノードの側にドラッグします。リンクは自動的に対象ノードの適切なピンに接続され、マウスを離すことで確定されます。

> **メモ：** リンクは同じタイプのピン間でのみ可能です。

> **メモ：** 1つのリンクに対して複数のピンが利用可能な場合があります。ターゲットノードの側にリンクをドラッグすると、すべての有効な接続を表示できます。

> **メモ：** 一つのピンへの複数のリンクを作成する場合、パラメータのタイプによって、新しいリンクが既存のリンクを置き換えるか、既存のリンクに追加されるかが異なります。

## ノード間のリンクの削除

リンクまたはノードピン（またはそのパラメータ名）を右クリックし、**Unlink \[パラメータ名]** を選択すると、リンクが削除されます。

または、ピンを **`Shift`** キーを押しながらクリックし、リンクを**ノードグラフ**の空白の領域にドラッグすることでもリンクを削除することができます。

## ノード間のリンクの並べ替え

リンク（または複数のリンク）を1つのピンから別のピンに移動するには、ピンを **`Shift`** キーを押しながらクリックし、リンク（複数のリンク）を新しいピンまたはノードにドラッグします。

## ノード間のリンクを自動的に作成する

**Node Graph**ウィジェットの空いた領域を左クリックして、すべてのノードの選択を解除します。**`Ctrl`** キーを押しながら、接続したいノードを順番に選択します。選択したノード間に適切なリンクが自動的に作成され、新しいリンクと競合する既存のリンクは削除されます。

## ノードリンクの並び替え

複数のリンクがノードの同じ入力ピンに接続されている場合、リンクが作成された順序で処理が実行されます。入力の処理順序を変更するには、入力パラメータのピンまたは名前を右クリックし、**Reorder Links for \[パラメータ名]** を選択します。表示されるダイアログボックスで、リンクの名前をドラッグしたり、名前を選択して矢印(Reorderarrows)ボタンを使用して入力を並び替えてください。

## Reroute Pin の使用方法

**Reroute Pin**は、同じタイプのパラメータのリンクを接続するために使用される専用のノードであり、複数の入力をまとめて一つの出力に接続します。これにより、データフローを整理し、ノードグラフの視覚的にわかりやすくすることができます。

**Reroute Pin**を追加するには、ノード間のリンク上で右クリックし、ドロップダウンメニューから**Reroute Pin**を選択します。

**Reroute Pin**を削除するには、これを右クリックし、ドロップダウンメニューから **Delete** を選択します（または **`Del`** キーを押します）。
