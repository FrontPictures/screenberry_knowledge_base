---
id: guide.media-playback.playlists.playlists-playback
variant_id: guide.media-playback.playlists.playlists-playback.imported-current-guide
title: Screenberryのプレイリストの再生制御
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
    path: archive/site/content/jp/media-playback/playlists/playlists-playback.mdx
    sha256: 1da56429e4868421c88bd1b26057209a63ee58930c336c6b66fb227a999a398c
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/media-playback/playlists/playlists-playback.mdx
  canonical_url: https://help.screenberry.com/jp/media-playback/playlists/playlists-playback
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 1da56429e4868421c88bd1b26057209a63ee58930c336c6b66fb227a999a398c
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryのプレイリストの再生制御
    description: Screenberryのプレイリストの再生制御方法について説明します。
    openGraph:
      title: Screenberryのプレイリストの再生制御
      description: Screenberryのプレイリストの再生制御方法について説明します。
translation:
  source_language: en
  source_id: guide.media-playback.playlists.playlists-playback
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../../en/how-to/media-playback/playlists/playlists-playback.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/media-playback/playlists/playlists-playback.yaml
  visual_information_review: not-independently-verified
---

# プレイリストの再生

**Media Player**ウィジェットの下部には、いくつかの標準的な再生制御コントロールが並んでいます。

> **メモ：** **Media Player**ウィジェットの下部に表示されている再生制御コントロールは、現在アクティブなメディアアイテムに関連しています。同時に、アクティブなプレイリストを再生しながら、他のプレイリストを開いて編集することもできます。アクティブなプレイリストに切り替える必要がある場合は、プレイリストツリーまたはプレイリストエリアを右クリックして**Reveal Active Item**を選択するか、**`A`** キーを押してください。

## プレイリストの再生制御コントロール

1. **シークバー**は再生の進行状況を表示し、メディアアイテムに対する追加の再生制御と設定を提供します。
2. &#x20;**Play Selected Item**ボタンは、選択したメディアアイテムの再生を開始します。
3. (Play1) **Play**ボタンは、現在の再生位置から再生を開始します。
4. (Pause) **Pause**ボタンは、現在の再生位置で再生を一時停止します。
5. (Stop) **Stop**ボタンは、再生を終了します。
6. (Prev) **Previous Item**ボタンはプレイリスト内の前のメディアアイテムにジャンプします。
7. &#x20;**Next Item**ボタンはプレイリスト内の次のメディアアイテムにジャンプします。
8. (Lock) **Lock**ボタンは、誤った操作を防ぐために再生制御コントロールを操作できなくします。
9. **メディアアイテムの全長**と**現在の再生時間（またはフレーム番号）情報**を表示します。
10. **Volume Control**ボタンは**Media Player**の出力の全体的な音量を調整します（[音量制御](../../../reference/media-playback/media-player/media-player-global-settings.md#%E9%9F%B3%E9%87%8F%E8%AA%BF%E6%95%B4)を参照）。
11. **Color Correction**ボタンは**Media Player**の出力全体の色調補正を制御します（[色調補正](../../../reference/media-playback/media-player/media-player-global-settings.md#%E8%89%B2%E8%AA%BF%E8%A3%9C%E6%AD%A3)を参照）。
12. **プレイリスト名**を表示します。
13. **メディアアイテム名**を表示します。
14. プレイリスト内の**メディアアイテム数**と、**アクティブなメディアアイテムの通し番号**を表示します。
15. 現在再生中の**メディアアイテムの全長**を表示します。
16. **タイムコード情報**を表示します。
17. **Timecode Controlメニュー**は**Media Player**に対するタイムコード制御へのアクセスを提供します。

プレイリストの再生制御コントロールには2つの表示モード（通常と狭い）があり、**Media Player**ウィジェットの幅に応じて自動的に切り替わります。

### シークバー

Screenberryでは、シークバーは現在アクティブなメディアアイテムの再生情報を表示します。

1. **再生ヘッド**は再生の進行状況を示します。ユーザーは再生ヘッドをドラッグして再生位置を変更することができます。再生はその位置にあるフレームから続行されます。
2. **再生時間表示**はメディアアイテムの再生時間（またはフレーム番号）情報を表示します。
3. **開始点**スライダーの位置は再生の最初のフレームを定義します。
4. **終了点**スライダーの位置は再生の最後のフレームを定義します。
5. **時間目盛り**は時間のスケールを表示します。
6. **オーディオピーク**はメディアアイテムのアクティブなオーディオトラック（存在する場合）の波形を表示します。

シークバーを右クリックすると関連するコンテキストメニューが表示されます：

- **Jump to Frame**は、再生ヘッドを指定されたフレームの位置に変更します。
- **Set In Point**は、現在のカーソル位置に再生の最初のフレームを設定します。
- **Set Out Point**は、現在のカーソル位置に再生の最後のフレームを設定します。
- **Reset In/Out Point**は、メディアアイテムの再生範囲の設定をデフォルトの状態にリセットします。
- **Tag Frame**は、現在のカーソル位置のフレームにタグを割り当てます。
- **Jump To Tagged Frame**は、現在タグ付けされているフレームのリストを表示し、選択したタグ付きフレームに再生ヘッドを移動することができます。
- **Split at Frame (frame番号)** は、現在の再生ヘッドの位置を基準にメディアアイテムを2つのメディアアイテム（インスタンス）に分割します。最初のメディアアイテムは、開始から選択したフレームまでの期間を再生し、2番目のメディアアイテムは、選択したフレームから終了までの期間を再生します。
- **Show Trimmed / Show Full Duration**は、全体の長さと範囲設定された部分の期間の表示モードを切り替えます。
- **Show Time Ruler / Hide Time Ruler**は、時間目盛りの表示モードを切り替えます。

> **メモ：** デフォルトでは、シークバーを左クリックすると再生ヘッドがクリック位置に移動します。このオプションは、**Preference** > **General**で**Mouse Seek Control**のチェックボックスを解除することで無効にすることができます。

### 再生時間表示の切り替え

**再生時間表示**を右クリックすると、3つの異なる表示モードの切り替えが可能です。

1. 現在の再生時間/メディアアイテムの全長 (hh:mm:ss)。(Dd1)
2. 現在のフレーム数/メディアアイテムの全フレーム数。(Dd2)
3. メディアアイテムの残り再生時間 (hh:mm:ss)。(Dd3)

もし**終了点**が設定されている場合、全ての3つの表示モードで記号 **}** が再生時間表示に追加され、再生時間（またはフレーム数）はメディアアイテムの終わりではなく**終了点**まで計算されます。(Dds)

## メディアアイテムの再生

プレイリスト内のメディアアイテムを再生するには、以下のいずれかの方法を使用します：

- 再生ヘッドの現在位置から再生を開始するには、**Play**(Play1)ボタンを押します。
- プレイリストでメディアアイテムを選択し、**Play Selected Item**ボタンを押します。
- **`Alt`** キーを押しながら（マウスポインタはオレンジ色の**再生**(Altplay)シンボルに変わります）、プレイリスト内のメディアアイテムをクリックします。

最後の2つのオプションは、指定したメディアアイテムに再生を即座に切り替える必要がある場合によく使用されます。

プレイリスト内のメディアアイテムは、左から右へ、上から下へ順番に再生されます。再生ヘッドがプレイリスト内の最後のメディアアイテムの最後のフレームに到達すると、再生位置はプレイリスト内の最初のメディアアイテムの最初のフレームに移動します。

ユーザーが明示的に**Stop**または**Pause**のコマンドを発行しない限り、再生は続行されます。

- **Pause**(Pause)ボタンを押すことで再生を一時停止します。再生ヘッドは現在再生されているメディアアイテムの最後のフレームにとどまります。最後のフレームは出力され続けます。
- **Stop**(Stop)ボタンを押すことで再生を停止します。再生ヘッドはプレイリスト内の最初のメディアアイテムの最初のフレームに戻ります。

再生中、ユーザーはメディアアイテムを追加および削除したり、プレイリスト内およびプレイリスト間で移動やコピーによって順序を変更したりすることができます。現在再生中のアイテムを削除しようとすると、警告が表示され、アイテムの削除によって再生が停止します。

## 現在再生中のメディアアイテムの表示

現在再生中のアイテムは、プレイリストツリーやプレイリストエリアを右クリックし、**Reveal Active Item**を選択するか、**`A`** キーを押すことで素早く見つけることができます。

## メディアアイテムのループグループ

メディアアイテムのグループをループ再生するには、プレイリストで複数のメディアアイテムの選択して右クリックし、ドロップダウンメニューから**Loop Through Selected Items**を選択するか、**`Shift`** + **`L`** キーを押します。

ループグループが作成されると、ループの開始と終了を示す特別な**Loop Start**アイテムと**Loop End**アイテムが、グループのメディアアイテムの前後に追加されます。これらのアイテムをプレイリスト内で移動して、ループグループに含めるメディアアイテムの数を増減させることができます。

## プレゼンテーションクリッカーでの再生制御

_プレゼンテーションクリッカー（リモコン）_

プレゼンテーションクリッカーを使用すると、Screenberryを使ってプレゼンテーションを便利に行うことができます。これにより、プレゼンターは遠隔でプレイリストの再生を制御することができます。プレゼンテーションクリッカーの**Next（右矢印）** または**Previous（左矢印）** ボタンを押すと、プレゼンテーションはそれぞれ次のメディアアイテムに進み、再生が開始されます。

プレゼンテーションクリッカーを使用したScreenberryの再生制御機能を行うには、**Preferences** > **General**を開き、**Presentation Clicker**のチェックボックスを選択してください。

また、プレイリストの方でもプレゼンテーションクリッカーによる再生制御を有効化必要があります。[プレイリストの設定 - プレゼンテーションクリッカーによる再生制御](creating-managing-playlists.md#%E3%83%97%E3%83%AC%E3%82%A4%E3%83%AA%E3%82%B9%E3%83%88%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%81%A8%E7%8A%B6%E6%85%8B%E8%A1%A8%E7%A4%BA)を参照してください。

> **メモ：** プレゼンテーションクリッカーのUSBトランスミッター/レシーバーはサーバーのUSBポートまたは操作用端末に取り付けるすることができます。操作用端末に取り付けられている場合、プレゼンテーションクリッカーを使用するためには、**Screenberry Panel**ウィンドウがフォーカスされている必要があります。

詳細な機能については、プレゼンテーションクリッカーのデバイスマニュアルを参照してください。
