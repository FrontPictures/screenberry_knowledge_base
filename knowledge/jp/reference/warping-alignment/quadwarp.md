---
id: guide.warping-alignment.quadwarp
variant_id: guide.warping-alignment.quadwarp.imported-current-guide
title: Screenberry Quad Warp Patch - キーストーン歪みの修正
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
    path: archive/site/content/jp/warping-alignment/quadwarp.mdx
    sha256: b7b5df29c4dac210fa44cb56f3f37f2f95110907de407b96dd68c33cced24f7d
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/warping-alignment/quadwarp.mdx
  canonical_url: https://help.screenberry.com/jp/warping-alignment/quadwarp
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: b7b5df29c4dac210fa44cb56f3f37f2f95110907de407b96dd68c33cced24f7d
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Quad Warp Patch - キーストーン歪みの修正
    description: Quad Warpノードを利用して、平面に斜めから映像を投映した時に生じるキーストーン歪みを補正する方法を説明します。
    openGraph:
      title: Screenberry Quad Warp Patch - キーストーン歪みの修正
      description: Quad Warpノードを利用して、平面に斜めから映像を投映した時に生じるキーストーン歪みを補正する方法を説明します。
translation:
  source_language: en
  source_id: guide.warping-alignment.quadwarp
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/reference/warping-alignment/quadwarp.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/warping-alignment/quadwarp.yaml
  visual_information_review: not-independently-verified
---

# Quad Warp

**Quad Warp**ノードは、主に映像のジオメトリ補正に使用されるPatchノードであり、平面上に斜めから映像を投映した際の歪み（_キーストーン歪み_ とも呼ばれる）を補正します。

典型的なセットアップでは、**Quad Warp**ノードは入力としてソース映像を受け取り、変形された映像を**Display**ノードまたは**Canvas**ノードに出力します。

**Quad Warp**ノードを使用したノードグラフの例

**Quad Warpノード**を使用して、映像のジオメトリとマッピングを変更するには、次の手順を**Patch Editor**で実行します。

- **Input**パネルで、メッシュの制御点のハンドルをドラッグして、マップされるソース映像の範囲を調整します。
- **Output**パネルで、メッシュの制御点のハンドルをドラッグして、映像の透視投影変換を調整して、映像をオブジェクトの形状に合わせます。

**Quad Warp**ノードを使用する場合は、Patchの共通操作について[Patchの編集](../../how-to/patch-editor/editing-patches.md)の章も参照してください。
