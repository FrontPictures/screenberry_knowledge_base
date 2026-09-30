---
id: guide.warping-alignment.bezierwarp
variant_id: guide.warping-alignment.bezierwarp.imported-current-guide
title: Screenberry Bezier Warp Patch - 曲面スクリーンへの映像マッピング
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
    path: archive/site/content/jp/warping-alignment/bezierwarp.mdx
    sha256: b2dd027dc6a9d51a2dfbbec8768c9c754b7eddddb50cb05fd47b4f5a9dc9ac2c
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/warping-alignment/bezierwarp.mdx
  canonical_url: https://help.screenberry.com/jp/warping-alignment/bezierwarp
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: b2dd027dc6a9d51a2dfbbec8768c9c754b7eddddb50cb05fd47b4f5a9dc9ac2c
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Bezier Warp Patch - 曲面スクリーンへの映像マッピング
    description: Bezier Warp Patchを利用して、曲面スクリーンに精密なマッピングを行う方法を説明します。
    openGraph:
      title: Screenberry Bezier Warp Patch - 曲面スクリーンへの映像マッピング
      description: Bezier Warp Patchを利用して、曲面スクリーンに精密なマッピングを行う方法を説明します。
translation:
  source_language: en
  source_id: guide.warping-alignment.bezierwarp
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/reference/warping-alignment/bezierwarp.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/warping-alignment/bezierwarp.yaml
  visual_information_review: not-independently-verified
---

# Bezier Warp

**Bezier Warp**ノードは、ベジエ曲線に基づいた映像の変形を可能にするPatchです。主に曲面や一部が曲がった表面、その他の規則的または自由形状のオブジェクトへの投影マッピングに使用されます。

典型的なセットアップでは、**Bezier Warp**ノードは入力としてソース映像を受け取り、変形された映像を**Display**ノードまたは**Canvas**ノードに出力します。

**Bezier Warp**ノードを使用したノードグラフの例

映像のジオメトリとマッピングを変更するために、**Bezier Warp**ノードを使用して、以下の手順を**Patch Editor**で実行してください：

- **Input**パネルで、メッシュの制御点のハンドルをドラッグして、ソース映像のマッピングを調整します。
- **Output**パネルで、メッシュの制御点のハンドルをドラッグして、映像をオブジェクトの形状に合わせます。

通常、**Bezier Warp**ノードを使用して歪み補正をする場合、メッシュの角の制御ポイントを投影面の形状に合わせて設定することから始めます。その際、メッシュの密度は最小に設定しておきます。その後、制御点グリッドを段階的に細分化し、各細分化ステップでメッシュの曲線を洗練させながら、目的の歪み補正が達成されるまで作業を進めます。

**Settings**パネルで**Interpolate Inner Points**モードを選択することでも**Bezier Warp**ノードの編集を行うことができます。このモードでは、制御点グリッドの辺にあたる制御点が移動された際に、内部の制御点の座標が自動的に再計算されます。

**Bezier Warp**ノードを使用する場合は、Patchの共通操作について[Patchの編集](../../how-to/patch-editor/editing-patches.md)の章も参照してください。
