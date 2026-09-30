---
id: guide.warping-alignment.xgrid
variant_id: guide.warping-alignment.xgrid.imported-current-guide
title: Screenberry XGrid Patch - X字形のグリッドパターンへのマッピング
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
    path: archive/site/content/jp/warping-alignment/xgrid.mdx
    sha256: 55be5e242eaae5f1f9ae7770dcc4e29a0ada05b976411693a2a3651e2274cb23
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/warping-alignment/xgrid.mdx
  canonical_url: https://help.screenberry.com/jp/warping-alignment/xgrid
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 55be5e242eaae5f1f9ae7770dcc4e29a0ada05b976411693a2a3651e2274cb23
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry XGrid Patch - X字形のグリッドパターンへのマッピング
    description: XGridノードを利用した、 X字形のグリッドパターンの表面へのマッピング方法について説明します。
    openGraph:
      title: Screenberry XGrid Patch - X字形のグリッドパターンへのマッピング
      description: XGridノードを利用した、 X字形のグリッドパターンの表面へのマッピング方法について説明します。
translation:
  source_language: en
  source_id: guide.warping-alignment.xgrid
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/reference/warping-alignment/xgrid.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/warping-alignment/xgrid.yaml
  visual_information_review: not-independently-verified
---

# XGrid

**XGrid**ノードは、主にX字形のグリッドパターンを表面にマッピングするために使用されるPatchノードです。

典型的なセットアップでは、セットアップでは、**XGrid**ノードは入力としてソース映像を受け取り、変形された映像を**Display**ノードまたは**Canvas**ノードに出力します。

**XGrid** ノードを使用したノードグラフの例

**Patch Editor**でXGridノードを使用するには、以下の手順を実行してください：

1. **Settings**パネルの**Grid Size**に**X**と**Y**の値を入力して、メッシュグリッドを作成します。
2. **Input**パネルで、メッシュ制御点のハンドルをドラッグしてソース映像のマッピングを定義します。
3. **Output**パネルで、メッシュ制御点のハンドルをドラッグして、映像をオブジェクトの形状に合わせます。

**XGrid**ノードを使用する場合は、Patchの共通操作について[Patchの編集](../../how-to/patch-editor/editing-patches.md)の章も参照してください。
