---
id: guide.warping-alignment.ledstripesmapper
variant_id: guide.warping-alignment.ledstripesmapper.imported-current-guide
title: Screenberry LED Stripes Mapper - 映像コンテンツのLEDディスプレイへのマッピング
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
    path: archive/site/content/jp/warping-alignment/ledstripesmapper.mdx
    sha256: b396a696c5bf599fec8672f02b657a4048a761441b958475e8865d640c5d4060
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/warping-alignment/ledstripesmapper.mdx
  canonical_url: https://help.screenberry.com/jp/warping-alignment/ledstripesmapper
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: b396a696c5bf599fec8672f02b657a4048a761441b958475e8865d640c5d4060
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry LED Stripes Mapper - 映像コンテンツのLEDディスプレイへのマッピング
    description: Discover LED Stripes Mapperノードを利用して、映像メディアを様々なLEDコントローラーが対応するLEDディスプレイの線形フォーマットに変換する方法を説明します。
    openGraph:
      title: Screenberry LED Stripes Mapper - 映像コンテンツのLEDディスプレイへのマッピング
      description: LED Stripes Mapperノードを利用して、映像メディアを様々なLEDコントローラーが対応するLEDディスプレイの線形フォーマットに変換する方法を説明します。
translation:
  source_language: en
  source_id: guide.warping-alignment.ledstripesmapper
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/reference/warping-alignment/ledstripesmapper.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/warping-alignment/ledstripesmapper.yaml
  visual_information_review: not-independently-verified
---

# LED Stripes Mapper

**LED Stripes Mapper**ノードは、映像メディアコンテンツを直線状にリマップするための Patch です。通常、このノードは信号を LED ストライプコントローラに出力するために使用されます。映像を入力として受け取る照明デバイスの制御にも使用することができます。

典型的なセットアップでは、**LED Stripes Mapper**ノードは入力としてソース映像を受け取り、変形された映像を**Display**ノードまたは**Canvas**ノードに出力します。

**LED Stripes Mapper**ノードを使用したノードグラフの例

映像メディアコンテンツを直線状にリマップするには、以下の手順を実行してください：

1. **Node Graph**ウィジェットで、**Media Player**、**LED Stripes Mapper**、および**Canvas** ノードを追加し、それぞれを **`Ctrl`** キーを押しながらクリックして接続して、ノードツリーを作成します。
2. **Media Player** ウィジェットに切り替えて、リマップしたいメディアコンテンツを **Media Player** のプレイリストに追加し、再生を開始して Patch 作業中に映像を参照できるように準備します。

3) **Patch Editor**に切り替え、Patch リストで**LED Stripes Mapper**を選択します。

4. **LED Stripes Mapper**の**Settings**パネルで：

   - **Source Line Width**欄で、ソース映像の幅をピクセル単位で設定してください。
   - **Target Image Size**、**Offset X**および**Y**、出力の**ライン幅（Line Width）**、**間隔（Spacing）** の欄にそれぞれ値を入力してください（LED ストライプまたはライティングコントローラーの仕様を参照してこれらの値を設定してください）。
   - **Number of Polylines**欄に値を入力し、各ポリラインの **分割数（Segments）** と **全長**（**Total Length**、ピクセル単位）\*\* を入力してください（例えば、5つに分割されて、各部分が128ピクセルである場合、全長は 5 x 128 = 640 ピクセルとなります）。

5) **Input**パネルで、右クリックしてドロップダウンメニューから**Show Live Image**を選択し、その後、制御点をポリラインの端点上にドラッグしてポリラインを1つずつマッピングしてください。

**LED Stripes Mapper**によるメディアサーバーからの映像出力の例
