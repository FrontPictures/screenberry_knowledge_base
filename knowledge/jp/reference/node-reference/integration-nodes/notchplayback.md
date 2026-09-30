---
id: guide.node-reference.integration-nodes.notchplayback
variant_id: guide.node-reference.integration-nodes.notchplayback.imported-current-guide
title: ScreenberryのNotch Playbackノード - Notchブロックの再生制御
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
    path: archive/site/content/jp/node-reference/integration-nodes/notchplayback.mdx
    sha256: 49b2faf5b7b4562f46b57050e088745b63613d4da5a8a7d659f4152a424d4af1
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/node-reference/integration-nodes/notchplayback.mdx
  canonical_url: https://help.screenberry.com/jp/node-reference/integration-nodes/notchplayback
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 49b2faf5b7b4562f46b57050e088745b63613d4da5a8a7d659f4152a424d4af1
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: ScreenberryのNotch Playbackノード - Notchブロックの再生制御
    description: Screenberry内でNotchブロックを再生制御する方法や、パラメータ管理、VRAMの利用方法、レイヤーの扱い方について説明します。
    openGraph:
      title: ScreenberryのNotch Playbackノード - Notchブロックの再生制御
      description: Screenberry内でNotchブロックを再生制御する方法や、パラメータ管理、VRAMの利用方法、レイヤーの扱い方について説明します。
translation:
  source_language: en
  source_id: guide.node-reference.integration-nodes.notchplayback
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../../en/reference/node-reference/integration-nodes/notchplayback.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/node-reference/integration-nodes/notchplayback.yaml
  visual_information_review: not-independently-verified
---

# Notch Playback

**Notch Playback**ノードはNotchプロジェクトのNotchブロックをScreenberryプロジェクト内に読み込みます。Notchプロジェクトで公開されたパラメータの制御、およびNotchブロックの再生は、**Notch Playback**ノードを通じて行います。

通常、**Notch Playback**は再生されたNotchブロックの映像を**Display**または**Canvas**ノードに出力します。

Screenberryは、次のタイプのNotch公開パラメータをサポートしています：

- int
- float
- string（Unicode文字も含む）
- color
- texture（複数のテクスチャも含む）
- enum
- posquat
- cameraparams

Notchブロックを読み込むと、Screenberryは以下の動作を行います。

- ブロックで設定されたパラメータ範囲制限を維持します。
- "Readable"とマークされた公開パラメータの値を使用できるようにします。
- VRAMからブロックレイヤーを破棄するための高度なビデオメモリ管理を提供します。
- ブロックの作成者情報を表示します。

**Notch Playback**ノードの**Settings**パネルでは、以下のコントロールとパラメータが提供されます。

**Filename：**  Screenberryサーバーディレクトリから指定されたNotchブロック（.dfxdll）ファイルをインポートします。

**Block Active：**  このチェックボックスを選択/選択解除して、Notchブロックの有効化/無効化を切り替えます。

**Reload Block：**  更新された場合にNotchブロックを再読み込みするためにこのボタンを押します。

**Block Version**、**Block Creators：**  Notchブロックの情報を提供します。

**Size X, Y：**  Notchブロックの再生解像度を設定します。

**VRAM Usage：**  現在のVRAM使用状況を表示します。

**Purge VRAM Pool：**  現在のNotchブロックレイヤーに使用されていないVRAMを破棄するためにこのボタンを押します。

**Notch Layer：**  利用可能なレイヤーのうちの1つを選択します。

Notch Blockレイヤーが**Settings**パネルで選択されると、**Notch Playback**ノードは以下の動作をします：

- このレイヤーの再生に切り替わります。
- 各レイヤーオブジェクトごとに**Settings**パネルに別のセクションを作成します。このセクションには公開されたパラメータが表示されます。
- レイヤー内のすべての公開されたパラメータに対してカスタムパラメータを生成します。

また、以下の操作を行うために、ノードグラフには様々なノードが**Notch Playback**ノードに接続できます：

- テクスチャ/映像をNotchブロックに渡す。
- Notchブロックの公開されたパラメータの値を渡す。
- Notchブロックからテクスチャ/映像を渡す。
- Notchブロックから読み取り可能なパラメータを渡す。

> **メモ：** **Notch Playback**ノードを使用するには、完全な [Notch Playback License](https://www.notch.one/products/notch-playback/) が必要であり、NotchドングルをScreenberryサーバーに接続する必要があります。
