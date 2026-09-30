---
id: guide.working-with-nodes.node-basics
variant_id: guide.working-with-nodes.node-basics.imported-current-guide
title: Screenberryのノードグラフ
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
    path: archive/site/content/jp/working-with-nodes/node-basics.mdx
    sha256: fe8bad87c067e7030af3a0238b745a8190619f159692f781430cd77fdee28ebd
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/working-with-nodes/node-basics.mdx
  canonical_url: https://help.screenberry.com/jp/working-with-nodes/node-basics
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: fe8bad87c067e7030af3a0238b745a8190619f159692f781430cd77fdee28ebd
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryのノードグラフ
    description: Screenberryにおけるノードベースのプロジェクトの作成方法について説明します。ノードの構成、ノードグラフ、実行順、データフロー、ノードの状態表示について説明します。
    openGraph:
      title: Screenberryのノードグラフ
      description: Screenberryにおけるノードベースのプロジェクトの基本を説明します。ノード構造やノードグラフの機能について説明します。
translation:
  source_language: en
  source_id: guide.working-with-nodes.node-basics
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/concepts/working-with-nodes/node-basics.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/concepts/working-with-nodes/node-basics.yaml
  visual_information_review: not-independently-verified
---

# ノードの基本

## 概要

ノードは、Screenberryでプロジェクトを作成するために使用される基本的な単位です。

すべてのノードには固有の機能がありますが、いずれも操作は共通で、シンプルかつ直感的に扱うことができます。

Screenberryでのプロジェクト作成は、ノードの追加/リンクと、ノードパラメータの変更の繰り返しです。これは、**Screenberry Panel**の**Node Graph**ウィジェットで行います。

## ノードの構造

**ノードヘッダー**は、次の情報を提供します：

- 実行順番（左上の数字）。
- ノードの名前（またはラベル）。
- ノード状態のインジケーター（ノードヘッダーの右側のカラーバー）。詳細は、[ノードの状態](#ノードの状態)を参照してください。

**ノードボディ**には、入力パラメータの名前（左側）と出力パラメータの名前（右側）が含まれています。ノードが選択されると、そのパラメータが**Settings**パネルに表示されます。

## ノードグラフの構造とデータフロー

**ノードグラフ**は、ノードを追加してリンクさせることで作成されます。データは、ノードの右側の出力ピンと左側の入力ピンの間のリンクを通じて左から右へと流れます。**ノードグラフ**は、レンダリングされたビデオ、画像、およびオーディオの結果を示すデータフローとプロセスを視覚的に表現しています。

_ノードグラフの例_

ノード間のリンクはグレーの線で表示されます。選択されたノードへのリンクは緑でハイライトされます。データが送信されている場合（例えば、タイムコードが送信されている場合）、リンクはアニメーション表示されます。

## ノードの実行順序

ノードの実行順序は、ノード間のリンクとノードの実行順序番号に基づいて自動的に決定されます。

## ノードの状態

ノードは、インジケータで表示される次の3つの状態のいずれかになることがあります：

- (Status Enabled) 有効化されている状態（緑）
- (Status Disabled) 無効化されている状態（灰色）
- (Status Notactive) 有効化されているが、アクティブではない状態（赤）

ノードを無効化または有効化するには、ノードを右クリックし、ドロップダウンメニューで**Enabled**のチェックボックスを選択/非選択してください。
