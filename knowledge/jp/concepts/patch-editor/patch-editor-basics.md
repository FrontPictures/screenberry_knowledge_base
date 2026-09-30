---
id: guide.patch-editor.patch-editor-basics
variant_id: guide.patch-editor.patch-editor-basics.imported-current-guide
title: Screenberry Patch Editorによる映像の変形補正
language: ja
kind: concepts
status: in_review
owner: unassigned
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: existing-guide
    path: archive/site/content/jp/patch-editor/patch-editor-basics.mdx
    sha256: df6dd49b66371c51a2444514900ea0b4c73b308b8b4a7485d8b7765bcde10abb
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/patch-editor/patch-editor-basics.mdx
  canonical_url: https://help.screenberry.com/jp/patch-editor/patch-editor-basics
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: df6dd49b66371c51a2444514900ea0b4c73b308b8b4a7485d8b7765bcde10abb
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Patch Editorによる映像の変形補正
    description: ScreenberryのPatch Editorの操作方法やPatchの編集、表示モードやカスタイマイズ方法について説明します。
    openGraph:
      title: Screenberry Patch Editorによる映像の変形補正
      description: ScreenberryのPatch Editorの操作方法やPatchの編集、表示モードやカスタイマイズ方法について説明します。
translation:
  source_language: en
  source_id: guide.patch-editor.patch-editor-basics
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/concepts/patch-editor/patch-editor-basics.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/concepts/patch-editor/patch-editor-basics.yaml
  visual_information_review: not-independently-verified
---

# Patch Editorの基本

## 概要

**Patch**ノード（または**パッチ**）とは、**Rectangle**、**Bezier Warp**、**Quad Warp**などのノード（[Patchノードの一覧](../../reference/node-reference/nodes.md#warp-and-transform)の章を参照してください）のことで、さまざまな種類の映像\*の歪み補正（ジオメトリ補正、ワーピング）、変形、配置、およびマッピングを行うために使用します。Patchを扱うために**Patch Editor**が**Canvas**（または**Render Target**）ウィジェットに統合されており、詳細な調整方法が用意されています。\*\* また、Patchに関するほとんどの操作は、**サーバー** に接続されたキーボードから直接行うこともできます。

\* 「映像」という用語は、静的または動的なメディア（つまり動画）を指します。

\*\* **Patch Editor**にアクセスするには、ワークスペースに**Canvas**（または**Render Target**）ウィジェットを追加し、次にウィジェットの左上にある**Patch**タブをクリックして**Patch**表示に切り替えます。

## Patch Editor の画面構成

**Patch Editor**の画面構成：（1）表示モードバー、（2）2つのパートに分割された作業エリア：（A）**Input**パネルと（B）**Output**パネル、（3）ナビゲーションツリー、（4）**Settings**パネル。

## 表示モード

作業エリアには4つの表示モードがあります。対応するボタンをクリックして切り替えることができます。

(Vm1) **Input**パネルのみを表示します。

(Vm2) **Output**パネルのみを表示します。

(Vm3) **Input**と**Output**両方のパネルを**縦方向**に分割して表示します。

(Vm4) **Input**と**Output**両方のパネルを**横方向**に分割して表示します。

## 表示オプション

さらに、**Input**パネルと**Output**パネルの外観は、**View Options**パネルを使用してカスタマイズすることができます。このパネルは、パネルの右上隅にあるボタンをクリックすることで開くことができます。

**View Options**パネルでは、以下の要素の表示または非表示を設定することができます：

- **Rulers：** PatchやDisplayの位置やサイズを正確に配置するための目印です。
- **Labels：** PatchやDisplayの名前を表示します。
- **Coordinates：** Patchの制御点の位置座標を表示します。
- **Live Image：** 現在の映像出力のプレビューがリアルタイムに更新されます。
- **Reference Image：** 制御点のより正確な位置決めのための背景として使用される参照イメージです。

## 表示エリアのズームとパン

**Patch Editor**の**Input**または**Output**パネルの特定のエリアをズームインおよびズームアウトするには、マウスカーソルをその領域に置き、マウスのスクロールホイールを使用します。または、パネルの右上隅にあるズーム(Zoom Icon)ボタンをクリックし、マウスを移動して拡大率を変更します。

表示エリアをパンするには、左マウスボタンを押したままマウスを移動するか、パネルの右上隅にあるパン(Pan Icon)ボタンをクリックし、マウスを移動します。
