---
id: guide.warping-alignment.overview
variant_id: guide.warping-alignment.overview.imported-current-guide
title: ScreenberryでPatchを使った映像の歪み補正
language: ja
kind: concepts
status: in_review
owner: unassigned
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: existing-guide
    path: archive/site/content/jp/warping-alignment/overview.mdx
    sha256: ed4d8276e30bb3b8d4c1ba3f80f291bb0e6f26e15611cd918f963e410018d64d
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/warping-alignment/overview.mdx
  canonical_url: https://help.screenberry.com/jp/warping-alignment/overview
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: ed4d8276e30bb3b8d4c1ba3f80f291bb0e6f26e15611cd918f963e410018d64d
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: ScreenberryでPatchを使った映像の歪み補正
    description: Screenberryによる歪み補正、変形、ブレンディングおよび投影補正の方法について説明します。
    openGraph:
      title: ScreenberryでPatchを使った映像の歪み補正
      description: Screenberryの各種Patchによる歪み補正の機能について説明します。
translation:
  source_language: en
  source_id: guide.warping-alignment.overview
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/concepts/warping-alignment/overview.md
presentation:
  mode: text-only
  illustrations: null
  visual_information_review: not-applicable
---

# 概要

Screenberryは、様々な映像補正の方法を提供しています。

- ジオメトリ補正（ワーピング）
- 変形
- ソフトエッジブレンディング
- プロジェクションの調整
- マッピング

これらは、以下で説明する「Patch（パッチ）」と呼ばれるノード群と、関連する専用ノードを利用して実現します。

> **メモ：** 以下で説明する各Patchノードに固有の機能に加えて、Patchの共通操作について[Patchの編集](../../how-to/patch-editor/editing-patches.md)の章も参照してください。
