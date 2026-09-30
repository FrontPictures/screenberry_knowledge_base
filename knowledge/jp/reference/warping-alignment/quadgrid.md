---
id: guide.warping-alignment.quadgrid
variant_id: guide.warping-alignment.quadgrid.imported-current-guide
title: Screenberry Quad Grid Patch - 階段状の表面への映像マッピング
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
    path: archive/site/content/jp/warping-alignment/quadgrid.mdx
    sha256: 6b545f90dfe8f1b9d4fb23039247d0224a88348f6f2e636214f907e2ff67baad
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/warping-alignment/quadgrid.mdx
  canonical_url: https://help.screenberry.com/jp/warping-alignment/quadgrid
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 6b545f90dfe8f1b9d4fb23039247d0224a88348f6f2e636214f907e2ff67baad
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Quad Grid Patch - 階段状の表面への映像マッピング
    description: Quad Gridノードを利用して、階段状の表面に映像を正確にマッピングする方法について説明します。
    openGraph:
      title: Screenberry Quad Grid Patch - 階段状の表面への映像マッピング
      description: Quad Gridノードを利用して、階段状の表面に映像を正確にマッピングする方法について説明します。
translation:
  source_language: en
  source_id: guide.warping-alignment.quadgrid
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/reference/warping-alignment/quadgrid.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/warping-alignment/quadgrid.yaml
  visual_information_review: not-independently-verified
---

# Quad Grid

**Quad Grid**ノードは、ユーザーが定義したメッシュグリッドの個々の面に透視投影変形を適用するPatchノードです。このPatchは、階段状のオブジェクトの表面に投影をマッピングするために開発されました。

典型的なセットアップでは、**Quad Grid**ノードは入力としてソース映像を受け取り、変形された映像を**Display**ノードまたは**Canvas**ノードに出力します。

**Quad Grid**ノードを使用したノードグラフの例

**Patch Editor**で **Quad Grid**ノードを使って透視投影変形を適用するには、以下の手順を実行します：

1. **Settings**パネルの**Grid Size**に**X**と**Y**の値を入力して、メッシュグリッドを作成します。

   典型的な設定は、水平な平面（ステップ）を持つ階段状のオブジェクトへの投影です。

   - **X**の値は2に設定します。これは1つの列のメッシュグリッドを定義するために必要な最小のキーコントロールポイントの数です。より複雑なオブジェクトへのプロジェクションマッピングの場合、この値は大きくすることもできます。
   - **Y**の値は、階段の格段の側面と上面の総数に合わせて設定します。

   階段や屏風のようなオブジェクトへの投影の場合、**X**と**Y**の値は逆になります。

|                                       |                                       |
| ------------------------------------- | ------------------------------------- |
| 横長の平面が並んだPatchの例。Grid Size: X=2, Y=10 | 縦長の平面が並んだPatchの例。Grid Size: X=10, Y=2 |

2. **Output**パネルで、各グリッド平面の制御点のハンドルをドラッグして、映像をオブジェクトの形状に合わせます。
3. メッシュグリッドの変更中に、グリッド平面が台形の形に変換された場合、平面の接合部に歪みが生じる可能性があります。これを避けるためには、**Settings**パネルの**Vertical Interpolation**または**Horizontal Interpolation**で**Linear**を選択し、透視投影変形を水平または垂直のグリッド平面に制限してください。

**Quad Grid**ノードを使用する場合は、Patchの共通操作について[Patchの編集](../../how-to/patch-editor/editing-patches.md)の章も参照してください。
