---
id: guide.3d-scene.creating-3d-scene
variant_id: guide.3d-scene.creating-3d-scene.imported-current-guide
title: Screenberryの3Dシーンの作成 - ステップバイステップガイド
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
    path: archive/site/content/jp/3d-scene/creating-3d-scene.mdx
    sha256: eb6129aac6beae7e7f33b2b342f2efb4eed95f7031cf46cc6a7ce07758491518
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/3d-scene/creating-3d-scene.mdx
  canonical_url: https://help.screenberry.com/jp/3d-scene/creating-3d-scene
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: eb6129aac6beae7e7f33b2b342f2efb4eed95f7031cf46cc6a7ce07758491518
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryの3Dシーンの作成 - ステップバイステップガイド
    description: 3Dプリミティブ、モデル、カメラ、プロジェクションマッパーなどの重要なノードを追加し接続する詳細な手順を学びながら、Screenberryで3Dシーンを作成する方法を学びます。
    openGraph:
      title: Screenberryの3Dシーンの作成 - ステップバイステップガイド
      description: 3Dプリミティブ、モデル、カメラ、プロジェクションマッパーなどの重要なノードを追加し接続する詳細な手順を学びながら、Screenberryで3Dシーンを作成する方法を学びます。
translation:
  source_language: en
  source_id: guide.3d-scene.creating-3d-scene
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/how-to/3d-scene/creating-3d-scene.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/3d-scene/creating-3d-scene.yaml
  visual_information_review: not-independently-verified
---

# 3D シーンの作成

**3D シーン**を作成するには、以下の手順に従ってください：

1. **Node Graph**ウィジェットに移動します。
2. ノードグラフに**3D Scene**ノードを追加します。**3D Scene**ウィジェットが正しく機能するためには、**Canvas**ノードがすでにノードグラフに追加されている必要があります。
3. シーンで必要となるオブジェクトのノードを追加し、それらを**3D Scene**ノードに接続します。

これらには以下のものが含まれる可能性があります：

- **3D プリミティブ**：ボックス、球体、円柱などの基本的な幾何学的形状。
- **3D モデル**：外部ファイルからインポートされたより複雑な形状。
- **カメラ**：さまざまな視点からシーンを見るための仮想カメラ。
- **プロジェクションマッパー**：3D オブジェクトにテクスチャを投影するための仮想デバイス。

**3D Scene**ノードが追加されると、対応するウィジェットが自動的に作成されます。**3D Scene**ノードをダブルクリックするか、メインの Screenberry パネルメニューで **Window** > \[**3D Scene**] を選択してアクセスできます。

**3D シーン**に追加されたすべてのオブジェクト（ノードグラフで関連ノードを**3D Scene**ノードに接続することで追加されます）は 3D 環境に追加されます。これらのオブジェクトのリストはウィジェットの右上ペインで確認でき、リストから選択されたオブジェクトの**設定**パネルはこのペインのすぐ下にあります。
