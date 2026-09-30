---
id: guide.warping-alignment.mask
variant_id: guide.warping-alignment.mask.imported-current-guide
title: Screenberry Mask Node - 自由形状のオーバーレイ
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
    path: archive/site/content/jp/warping-alignment/mask.mdx
    sha256: 0f12965aab07330a7aca7dda13b80b2d383b4b855e211b3ec75e9f5b2175d8e7
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/warping-alignment/mask.mdx
  canonical_url: https://help.screenberry.com/jp/warping-alignment/mask
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 0f12965aab07330a7aca7dda13b80b2d383b4b855e211b3ec75e9f5b2175d8e7
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Mask Node - 自由形状のオーバーレイ
    description: Maskノードを利用して映像に上書きするための自由形状のマスクを作成し、編集する方法について説明します。
    openGraph:
      title: Screenberry Mask Node - 自由形状のオーバーレイ
      description: Maskノードを利用して映像に上書きするための自由形状のマスクを作成し、編集する方法について説明します。
translation:
  source_language: en
  source_id: guide.warping-alignment.mask
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/reference/warping-alignment/mask.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/warping-alignment/mask.yaml
  visual_information_review: not-independently-verified
---

# Mask

**Mask**ノードは、他の映像の上に自由形状の単色マスクを描くためによく利用されるPatchです。

典型的なセットアップでは、**Mask**ノードは**Solid Color**ノードから単色の画像を受け取り、結果のマスク形状を**Display**ノードまたは**Canvas**ノードに出力します。その際に、別の映像ソースノードから受け取ったの上に映像にマスクを描きます。

**Mask**ノードを使用したノードグラフの例

**Patch Editor**の**Output**パネルで、次の操作を実行して形状マスクを作成および編集します：

- **制御点を追加してパスを描画します。** Outputエリア上にカーソルを置き、**`P`** キーを押すか、右クリックしてドロップダウンメニューから **Add Point** を選択して、制御点を作成します。追加される各制御点は、前の制御点と自動的に直線で接続されます。制御点を追加して必要な形状にパスを描画します。
- **形状を完成させます。** **Output**パネル内でダブルクリックすると、描画中のパスが閉じられます。
- **直線のパスを曲線に変換します。** 制御点にカーソルを重ねたまま、次のいずれかの操作を行います：
  - **`Ctrl`** キーを押しながらマウスをドラッグすると、方向線（または接線）ハンドルが延長され、制御点の片側の曲線が調整されます。
  - **`Ctrl`** + **`Shift`** キーを押しながらマウスをドラッグすると、ペアの方向線ハンドルが延長され、制御点の両側の曲線が同時に調整されます。
- **制御点と方向線ハンドルを移動して形状を編集します。** 複数の制御点を選択すると、それらを同時にドラッグできます。制御点の位置を正確に設定するには、制御点を選択して **`Enter`** キーを押すか、制御点を右クリックしてドロップダウンメニューから **Set Position** を選択し、開いたダイアログボックスに **X** および **Y** 座標を入力します。方向線ハンドルをドラッグする際には、**`Shift`** キーを押しながらドラッグすると制御点の両側の曲線が調整できます。
- 必要であれば **パス上に追加の制御点を作成します。** パス上で **`Alt`** キーを押しながらクリックして制御点を追加します。
- **制御点を削除することもできます。** 制御点を選択して **`Del`** キーを押すか、選択された制御点を右クリックし、ドロップダウンメニューから **Delete Points** を選択することで、制御点を削除します。

**Mask**ノードには複数のマスク形状を含むことができます。これらのマスク形状を重ねて使用することもできます。

Maskノードを使用する場合は、Patchの共通操作について[Patchの編集](../../how-to/patch-editor/editing-patches.md)の章も参照してください。
