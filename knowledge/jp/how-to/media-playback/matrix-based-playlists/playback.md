---
id: guide.media-playback.matrix-based-playlists.playback
variant_id: guide.media-playback.matrix-based-playlists.playback.imported-current-guide
title: Screenberryのマトリックス型プレイリストによる映像再生
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
    path: archive/site/content/jp/media-playback/matrix-based-playlists/playback.mdx
    sha256: e6ce757d8f4d643f154f1b553db2523fe26d97ff2c069422adf5caa41dffaa61
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/media-playback/matrix-based-playlists/playback.mdx
  canonical_url: https://help.screenberry.com/jp/media-playback/matrix-based-playlists/playback
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: e6ce757d8f4d643f154f1b553db2523fe26d97ff2c069422adf5caa41dffaa61
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryのマトリックス型プレイリストによる映像再生
    description: Screenberryにおけるマトリックスベースのプレイリスト再生について、行、列、および個別のメディアアイテムの再生方法を説明します。
    openGraph:
      title: Screenberryのマトリックス型プレイリストによる映像再生
      description: Screenberryにおけるマトリックスベースのプレイリスト再生について、行、列、および個別のメディアアイテムの再生方法を説明します。
translation:
  source_language: en
  source_id: guide.media-playback.matrix-based-playlists.playback
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../../en/how-to/media-playback/matrix-based-playlists/playback.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/media-playback/matrix-based-playlists/playback.yaml
  visual_information_review: not-independently-verified
---

## 概要

マトリックス型プレイリスト内の各行は独立して動作し、個別に再生制御が可能です。映像再生の流れは以下の通りです：

メディアアイテムの再生が完了すると、その行の次のメディアアイテムの再生が自動的に開始されます。このシーケンスは、特定のメディアアイテムがループ設定されていない限り続きます。デフォルトでは、再生が行の最後のメディアアイテムに到達した場合、その行の最初のメディアアイテムに巻き戻ります。

## 個々のメディアアイテムの再生

マトリックス型プレイリスト内で個々のメディアアイテムの再生を開始するには、次のいずれかの方法を使用します。

- マトリックスグリッドで 1 つまたは複数のアイテムを選択し、**Play Selected Item**  ボタンをクリックします。ひとつの行内で複数のメディアアイテムが選択されている場合、その行の再生は選択されたアイテムのシーケンスの最初のアイテムから開始されます。
- 代わりに、**`Alt`** キーを押しながら（カーソルがメディアアイテム上にあるとオレンジ色の再生シンボル (Altplay) に変わります）、マトリックスグリッド内のメディアアイテムをクリックします。
- 以前に一時停止されたメディアアイテムの再生を再開するには、**Play**ボタン (Play1) をクリックします。再生は、一時停止された位置から再開されます。

再生を一時停止するには、**Pause**  ボタンをクリックします。この操作により、再生中のメディアアイテムの最後に再生されたフレームで一時停止され、これらのフレームが出力され続けます。

再生を完全に停止するには、**Stop**  ボタンをクリックします。

## 行ごとの再生

特定の行内のメディアアイテムの再生を開始するためには、いくつかの方法があります。

- その行のヘッダにある**Play** (Play1) ボタンをクリックします。初回再生の場合、または前に**Stop** (Stop) ボタンが使用された場合、再生はその行で最初に利用可能なメディアアイテムから開始されます。以前に一時停止された場合は、一時停止した位置から再開されます。
- 行内の特定のメディアアイテムから再生を開始するには、そのアイテムを選択し、その行のヘッダにある**Play Selected Item** (Play) ボタンをクリックします。
- **`Alt`** キーを押しながら、行内のメディアアイテムをクリックします。

特定の行の再生を一時停止するには、その行のヘッダにある**Pause** (Pause) ボタンをクリックします。この操作により、映像再生は現在再生中のメディアアイテムの最後に再生されたフレームで一時停止し、そのフレームが出力され続けます。

特定の行の再生を停止するには、その行のヘッダにある**Stop** (Stop) ボタンをクリックします。再生が停止し、再生開始位置がその行の最初のメディアアイテムの先頭にリセットされます。

行ヘッダの**Play Previous** (Prev) ボタンと**Play Next**  ボタンを使用すると、特定の行内のメディアアイテムを順次再生することができます：

- **Play Previous：** 再生を前のメディアアイテムに戻します。
- **Play Next：** 再生を次のメディアアイテムに進めます。

## 列ごとの再生

特定の列内のすべてのメディアアイテムを同時に再生するには、次の手順を実行します。

- 列のヘッダーを右クリックし、ドロップダウンメニューから**Play Column**を選択します。
- **`Alt`** キーを押しながら列のヘッダーをクリックします。

再生を一時停止または停止するには、プレイリストの再生制御バーにある**Pause** (Pause) ボタンまたは**Stop** (Stop) ボタンを使用します。これは、個々のメディアアイテムの再生を制御する場合と同じように使用できます。

さらに、プレイリストの再生制御バーの**Play Previous** (Prev) ボタンと**Play Next**  ボタンを使用して、列ごとの順次再生操作を行うことができます。

- **Play Previous：** 前の列の再生に移動します。これは、現在再生中のメディアアイテムを最も上位のアクティブな行で特定し、そのアイテムの直前の列の再生を開始することで実現されます。
- **Play Next：** 次の列の再生に進みます。これは、現在再生中のメディアアイテムを最も上位のアクティブな行で特定し、そのアイテムの直後の列の再生を開始することで実現されます。

## その他の再生制御機能

再生制御バーには、以下の機能も用意されています。

**Lock/Unlock Playback Controls**トグルボタン ： マトリックス型プレイリストの再生状態が意図せず変更されるのを防ぎます。このトグルボタンをアクティブにすると、**Play Selected**、**Play**、**Pause**、**Stop**などの再生制御ボタンがすべて操作できなくなります。これらの操作を再度行う場合は、トグルボタンを再度クリックしてください。

**Reveal Active Item**ボタン (Reveal Icon)： 現在再生中のメディアアイテムを素早く見つけることができます。このボタンをクリックすると、アクティブなプレイリストに表示が切り替わり、現在再生中のメディアアイテムに自動的にスクロールし、ハイライト表示されます。

## 状態表示

マトリックス型プレイリストが再生、一時停止、または停止されている場合、**ナビゲーション**パネルのプレイリスト名の隣にある対応するアイコンに現在の状態が表示されます。現在アクティブなプレイリストが折りたたまれたフォルダ内にある場合、これらのアイコンはフォルダアイコンを置き換えます。

## 再生の優先度

マトリックス型プレイリストでは、再生に関連するすべての新しいユーザーの操作は、前の操作よりも優先されます。例えば、列の再生が開始され、その後ひとつの行が一時停止される場合、このより新しい操作が優先され、その行の再生が一時停止されます。
