---
id: guide.patch-editor.adding-and-managing-patches
variant_id: guide.patch-editor.adding-and-managing-patches.imported-current-guide
title: Screenberry Patchの追加と削除
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
    path: archive/site/content/jp/patch-editor/adding-and-managing-patches.mdx
    sha256: 40825dd55043b3a80ae06ca1018bfa766896b0259a30e30cf82c0688f991af51
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/patch-editor/adding-and-managing-patches.mdx
  canonical_url: https://help.screenberry.com/jp/patch-editor/adding-and-managing-patches
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 40825dd55043b3a80ae06ca1018bfa766896b0259a30e30cf82c0688f991af51
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Patchの追加と削除
    description: ScreenberryでPatchを追加や削除する方法について説明します。
    openGraph:
      title: Screenberry Patchの追加と削除
      description: ScreenberryでPatchを追加や削除する方法について説明します。
translation:
  source_language: en
  source_id: guide.patch-editor.adding-and-managing-patches
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/how-to/patch-editor/adding-and-managing-patches.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/patch-editor/adding-and-managing-patches.yaml
  visual_information_review: not-independently-verified
---

# Patchの追加と管理

## Patchの追加

Patchノードは**ノードグラフ**に追加されます（詳細は[ノードの追加](../working-with-nodes/adding-and-managing-nodes.md#%E3%83%8E%E3%83%BC%E3%83%89%E3%81%AE%E8%BF%BD%E5%8A%A0)を参照）。

通常のセットアップでは、Patchノードの入力はソース映像となるノードに接続され、その出力は**Display**ノードまたは**Canvas**ノードに接続されます。

**Bezier Warp**ノードは**Media Player**ノードから映像入力を受け取り、**Canvas**ノードに映像出力を送ります。

## Patchの削除

Patchを削除するには、**Canvas**ウィジェットを開き、次のいずれかの操作を行います：

- **Input**パネルまたは**Output**パネルのいずれかの制御点を右クリックし、ドロップダウンメニューから**Delete** **Patches**を選択します。
- ナビゲーションツリーのPatchをクリックし、ドロップダウンメニューから**Delete Patch**を選択します。

または、**ノードグラフ** で関連するPatchノードを削除することもできます。
