---
id: guide.warping-alignment.rectangle
variant_id: guide.warping-alignment.rectangle.imported-current-guide
title: Screenberry Rectangle Patch - 平面映像の調整
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
    path: archive/site/content/jp/warping-alignment/rectangle.mdx
    sha256: 7ff43e80ba813fb6e33313e138a1977580fa4bd7a13e316d85bb9391da8da14a
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/warping-alignment/rectangle.mdx
  canonical_url: https://help.screenberry.com/jp/warping-alignment/rectangle
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 7ff43e80ba813fb6e33313e138a1977580fa4bd7a13e316d85bb9391da8da14a
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Rectangle Patch - 平面映像の調整
    description: Rectangleノードを利用して、平面映像の大きさや位置を調整する方法を説明します。
    openGraph:
      title: Screenberry Rectangle Patch - 平面映像の調整
      description: Rectangleノードを利用して、平面映像の大きさや位置を調整する方法を説明します。
translation:
  source_language: en
  source_id: guide.warping-alignment.rectangle
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/reference/warping-alignment/rectangle.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/warping-alignment/rectangle.yaml
  visual_information_review: not-independently-verified
---

# Rectangle

**Rectangle**ノードは、平面の矩形ベースの変更を適用するためのPatchであり、主に _LED_ などの矩形のスクリーン上で映像をスケーリング、整列、配置するために使用されます。また、複数のメディアソースを1つの画面上で組み合わせてピクチャインピクチャ効果を作成するためにも使用されます。典型的なセットアップでは、**Rectangle**ノードは入力としてソース映像を受け取り、変形された映像を**Display**ノードまたは**Canvas**ノードに出力します。

**Rectangle**ノードを使用したノードグラフの例

**Patch Editor**の**Rectangle**ノードを使用して、映像のジオメトリとマッピングを変更するには、次の手順を実行します：

- **Input**パネルで、メッシュの制御点のハンドルをドラッグして、マッピングされるソース映像のスケール、アスペクト比、および範囲を変更します。
- **Output**パネルで、メッシュの制御点のハンドルをドラッグして、映像のスケール、アスペクト比、およびオフセットを調整して、映像をオブジェクトの形状に合わせます。

**Rectangle**ノードで制御点を編集する際、追加の斜めスマートガイドが表示されます。

- **Input**パネルでは、**Output**パネルで定義された映像のアスペクト比が表示されます。
- **Output**パネルでは、現在の**Input**パネルで定義されている映像のアスペクト比が表示されます。

**Rectangle**ノードを使用する場合は、Patchの共通操作について[Patchの編集](../../how-to/patch-editor/editing-patches.md)の章も参照してください。
