---
id: guide.media-playback.timelines.animation-and-keyframing
variant_id: guide.media-playback.timelines.animation-and-keyframing.imported-current-guide
title: Screenberryのタイムラインでマーカーを使う方法
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
    path: archive/site/content/jp/media-playback/timelines/animation-and-keyframing.mdx
    sha256: 9823d16492d553895e2728a2fdafed4aba42b4fc874e64f5c69871c87038bd30
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/media-playback/timelines/animation-and-keyframing.mdx
  canonical_url: https://help.screenberry.com/jp/media-playback/timelines/animation-and-keyframing
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 9823d16492d553895e2728a2fdafed4aba42b4fc874e64f5c69871c87038bd30
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryのタイムラインでマーカーを使う方法
    description: Screenberryのタイムラインでラベルや再生停止、ジャンプ、タイムコードマーカーを使って高度な再生制御を行う方法を説明します。
    openGraph:
      title: Screenberryのタイムラインでマーカーを使う方法
      description: Screenberryのタイムラインで様々なマーカーを使って高度な再生制御を行う方法を説明します。
translation:
  source_language: en
  source_id: guide.media-playback.timelines.animation-and-keyframing
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../../en/how-to/media-playback/timelines/animation-and-keyframing.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/media-playback/timelines/animation-and-keyframing.yaml
  visual_information_review: not-independently-verified
---

# アニメーションとキーフレーム

タイムライン上のメディアアイテムの特定のパラメータをアニメーション化することができます。これは、パラメータ値にキーフレームを割り当てることによって実現されます。キーフレームは、特定のパラメータ値が設定される時間上のポイントを示します。時間の経過に伴うパラメータ値の変化を作成するには、少なくとも2つのキーフレームを設定する必要があります。変化の開始時のパラメータ値とｍ変化の終了時の値です。その後、キーフレーム間の値の滑らかな変化、つまり補間が自動的に作成されます。

現在、次のメディアアイテムのパラメータをアニメーション化することができます：

- 変形プロパティ： **アンカーポイント**、**位置**、**拡大率**、**回転**
- 画像の**不透明度**
- **音量**

> **メモ：** 変形プロパティをアニメーション化するには、メディアアイテムの**Settings**で**Position Method**に**Custom Transformations**を選択してください。

キーフレームを追加するには、次の手順に従ってください：

1. アニメーションを付けたいパラメーターを含むタイムライン上のメディアアイテムを選択します。
2. 再生ヘッドをキーフレームを追加したい時点に移動します。
3. **Settings**パネルで、パラメーターをアニメーション化するために、その名前の隣にある菱形の(Rombus Icon)アイコンをクリックして指定します。
4. パラメータ入力欄に設定したい値を入力します。

タイムライン上のメディアアイテムにキーフレームを設定すると、菱の(Rombusi Icon)アイコンがメディアアイテムの名前の右端に表示されます。このアイコンをクリックすると、設定されたキーフレームを持つメディアアイテムのパラメータのリストが展開または折りたたまれます。

もしキーフレームがメディアアイテムの長さを超える位置に配置されている場合、パラメーターバーの対応する側にあるマークがその存在と位置を示します。

リアルタイムで再生中に再生ヘッドが動いている間に、キーフレームを設定することもできます。この場合、選択したパラメータの値が変更されると、キーフレームが自動的に再生ヘッドの現在位置に作成されます。

複数のキーフレームがパラメータに追加されると、**Settings**パネル内のパラメータ名の隣にある菱形アイコンの両側に、キーフレームのナビゲーション矢印(2arrows)が表示されます。これらの矢印を使用して、既存のキーフレームに移動し、さらなる調整を行うことができます。キーフレームが選択されると、菱形アイコンの色が青(2arrows Blue)に変わります。

また、タイムラインパネルでキーフレーム間を移動する場合は、メディアアイテムのパラメータリストを展開し、再生ヘッドを移動することで行うことができます。再生ヘッドは自動的に既存のキーフレームにスナップされます。さらに、タイムライントラック上の任意の場所で右クリックし、ドロップダウンメニューから**Jump to…** > **Next Keyframe**（または**Previous Keyframe**）を選択することで、キーフレーム間を移動することもできます。

タイムラインパネルでキーフレームを選択するには、メディアアイテムのパラメータの展開されたリスト内のアイコンをクリックします。選択されたキーフレームは黄色(Rselected Icon)でハイライト表示され、選択されていないキーフレームはグレー(Runselected Icon)のままです。**`Ctrl`** キーを押しながら対応するアイコンをクリックすることで、複数のキーフレームを一度に選択することができます。

選択されたキーフレームの位置（時間）を調整するには、タイムライントラック上の移動先にドラッグします。移動する際に、選択されたキーフレーム同士の相対的な位置関係は変わりません。

キーフレームを1つのメディアアイテムから別のメディアアイテムにコピーするには、以下の手順を実行します：

1. キーフレームをコピーしたいメディアアイテムを右クリックし、ドロップダウンメニューから**Copy**を選択します。または、メディアアイテムを選択し、**`Ctrl`** + **`C`** のキーボードショートカットを使用することもできます。
2. コピー先のメディアアイテムを右クリックし、ドロップダウンメニューから**Paste Properties**を選択するか、**`Ctrl`** + **`Shift`** + **`V`** のキーボードショートカットを使用します。
3. 表示されるダイアログボックスで、**Animation Keys**チェックボックスが選択されていることを確認します。
4. **OK**をクリックして、コピーしたキーフレームをターゲットメディアアイテムに適用します。

もしキーフレームが不要になった場合は、メディアアイテムのパラメータの展開リストでそのアイコンを右クリックし、ドロップダウンメニューから**Delete Keyframes**を選択することで簡単に削除することができます。

## データアイテムのキーフレーム化

**データアイテム**は、ノードグラフに追加されたノードの任意の浮動小数点値パラメータをアニメーション化することができます。タイムライントラックに配置し、長さを自由に設定することができます。**データアイテム**にキーフレームを設定することで、再生中にパラメータ値をダイナミックに変化させることができます。

**データアイテム**のキーフレームは、他のメディアアイテムと同様の手順で手動で設定することができます。また、レコーディング機能を使用して自動的にキーフレームを設定することもできます。この機能を有効にするには、**データアイテム**の設定で**Record**チェックボックスを選択します。有効にした場合、**データアイテム**の値パラメータに対するすべての変更は、再生時に自動的にキーフレームとして記録されます。

> **メモ：** レコーディングを終えたら、次に**データアイテム**を再生する際に、以前に設定されたキーフレームが消去されないように、**Record**チェックボックスを選択解除してレコーディング機能を無効にしてください。
