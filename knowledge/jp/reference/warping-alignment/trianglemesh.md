---
id: guide.warping-alignment.trianglemesh
variant_id: guide.warping-alignment.trianglemesh.imported-current-guide
title: Screenberry Triangle Mesh Patch - 三角ポリゴンメッシュによる映像変形
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
    path: archive/site/content/jp/warping-alignment/trianglemesh.mdx
    sha256: a792673f9f3a77317e6843721456384efef927b3b1a242795b1ca7f5bdfda431
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/warping-alignment/trianglemesh.mdx
  canonical_url: https://help.screenberry.com/jp/warping-alignment/trianglemesh
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: a792673f9f3a77317e6843721456384efef927b3b1a242795b1ca7f5bdfda431
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Triangle Mesh Patch - 三角ポリゴンメッシュによる映像変形
    description: Triangle Meshノードを利用した、複雑な多角形形状への三角ポリゴンメッシュによる映像マッピングの方法について説明します。
    openGraph:
      title: Screenberry Triangle Mesh Patch - 三角ポリゴンメッシュによる映像変形
      description: Triangle Meshノードを利用した、複雑な多角形形状への三角ポリゴンメッシュによる映像マッピングの方法について説明します。
translation:
  source_language: en
  source_id: guide.warping-alignment.trianglemesh
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/reference/warping-alignment/trianglemesh.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/warping-alignment/trianglemesh.yaml
  visual_information_review: not-independently-verified
---

# Triangle Mesh

**Triangle Mesh**ノードは、主に三角形の形状で構成されたオブジェクトの表面に投影マッピングするために使用されるPatchノードです。

典型的なセットアップでは、セットアップでは、**Triangle Mesh**ノードは入力としてソース映像を受け取り、変形された映像を**Display**ノードまたは**Canvas**ノードに出力します。

**Triangle Mesh**ノードを使用したノードグラフの例

三角メッシュ変形を適用するためには:

1. 以下の手順に従って、三角メッシュを作成し編集します：
   - **制御点の追加**。レイアウトエリアにマウスカーソルを置き、**`P`** キーを押すか、右クリックしてドロップダウンメニューから **Add Point** を選択して制御点を作成します。
   - **制御点を三角メッシュの面として接続**。制御点を選択して **`T`** キーを押すか、選択した制御点を右クリックしてドロップダウンメニューから **Create Triangles** を選択して、選択した制御点を接続します。制御点が選択されていない場合、**`T`** キーを押すとすべての既存の制御点が接続されます。
   - **制御点の削除**。制御点を選択して **`Del`** キーを押すか、選択した制御点を右クリックし、ドロップダウンメニューから **Delete points** を選択して、それらの制御点を削除します。

2) **Output**パネルで、メッシュの制御点のハンドルをドラッグして、映像をオブジェクトの形状に合わせます。
3) **Input**パネルで、メッシュの制御点のハンドルをドラッグして、個々のメッシュ三角形に対するソース映像のマッピングを定義します。

**Triangle Mesh**ノードを使用する場合は、Patchの共通操作について[Patchの編集](../../how-to/patch-editor/editing-patches.md)の章も参照してください。
