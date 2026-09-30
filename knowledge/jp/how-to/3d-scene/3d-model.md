---
id: guide.3d-scene.3d-model
variant_id: guide.3d-scene.3d-model.imported-current-guide
title: Screenberry 3Dシーンにおける3Dモデルの追加と管理
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
    path: archive/site/content/jp/3d-scene/3d-model.mdx
    sha256: 855e4670f3e1e12e1bdb2b99b81c56c45ea2150cb693a081442f7be89032e481
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/3d-scene/3d-model.mdx
  canonical_url: https://help.screenberry.com/jp/3d-scene/3d-model
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 855e4670f3e1e12e1bdb2b99b81c56c45ea2150cb693a081442f7be89032e481
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry 3Dシーンにおける3Dモデルの追加と管理
    description: Screenberryの3Dシーンで3Dモデルを追加、設定、管理する方法を学びます。モデルのインポートや設定の調整も含まれます。
    openGraph:
      title: Screenberry 3Dシーンにおける3Dモデルの追加と管理
      description: Screenberryの3Dシーンで3Dモデルを追加、設定、管理する方法を学びます。モデルのインポートや設定の調整も含まれます。
translation:
  source_language: en
  source_id: guide.3d-scene.3d-model
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/how-to/3d-scene/3d-model.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/3d-scene/3d-model.yaml
  visual_information_review: not-independently-verified
---

## 3D モデル

## 3D モデルの追加

3D モデルは **3D Model File** ノードを使用して 3D シーンに追加できます。

3D モデルを追加するには、以下の手順に従ってください：

1. **Node Graph** ウィジェットに移動します。
2. **3D Model File** ノードをノードグラフに追加します。
3. **3D Model File** ノードの設定で、**Filename** パラメータを使用して目的の 3D モデルファイルを選択します。
4. **3D Model File** ノードの **Object** 出力パラメータを **3D Scene** ノードの **Object** 入力パラメータに接続します。
5. **3D Scene** ウィジェットに切り替えて、3D シーンツールを使用するか **3D Model File** の設定内で 3D モデルの位置とサイズをさらに調整します。

**3D Model File** の設定には以下が含まれます：

##### 一般設定

- **Filename**：3D モデルファイルへのパスを表示します。

##### Baked Texture

- **Render Baked Texture**：このオプションを切り替えて、ベイクテクスチャのレンダリングを有効または無効にします。
- **Baked Texture Size**：ベイクテクスチャの解像度を設定します。幅（**X**）と高さ（**Y**）の値を指定します。例えば、フル HD の場合は 1920x1080 です。
- **Baked Texture Bits per Channel**：テクスチャの色深度を選択します。オプションには **8 ビット** と **32 ビット（浮動小数点）** があります。
- **Baked Texture Wrap Mode**：テクスチャラッピングに使用する方法を選択します。オプションには **Clamp to Edge**（ピクセルの最後の行または列をエッジまで引き伸ばし、繰り返しを防ぐ）と **Repeat Edge Pixels**（テクスチャが元の境界を超えた場合にテクスチャのエッジピクセルを拡張する）があります。

##### その他のパラメータ

- **Current UV Set**：3D モデルにテクスチャを適用する方法を決定する UV セットを選択します。
- **Color**：テクスチャなしでプレビューする際の 3D モデルの表面色を選択します。
- **Merge Points**：近接する頂点やポイントを結合して、3D モデルの複雑さを軽減します。
- **Transform Matrix**：スケール、回転、位置を含む変換コントロールにアクセスします。
- **Transform Order**：スケール、回転、移動などの変換が適用される順序を選択します。
- **Scale**：**X**、**Y**、**Z** 軸に沿ってプリミティブのサイズを調整します。
- **Rotation Order**：軸周りの回転が適用される順序を指定します。例えば、**Y（ヘッディング）**、**X（ピッチ）**、**Z（バンク）** などです。
- **Rotation**：**X**、**Y**、**Z** 軸周りの回転角度を設定して、3D 空間内で 3D モデルの向きを決定します。
- **Position**：**X**、**Y**、**Z** 軸の座標を入力して、3D 空間内の 3D モデルの位置を設定します。
- **Projection Mapping**：3D モデルの表面への投影テクスチャの適用を有効または無効にします。
- **Source Model Orientation**：シーンに読み込まれた際のモデルの初期方向を指定します。オプションには **Y 上** と **Z 上** があります。
- **Show Subobjects**：モデルの個々のサブパーツの表示を切り替えます。
- **Resources Folder**：3D モデルのデータが保存されるリソースフォルダへのパスを指定します。

## 3D モデルの保存

**3D Model Export** ノードを使用して、3D モデルや 3D プリミティブの現在の状態を書き出すことができます。

3D モデルを書き出すには、以下の手順に従ってください：

1. **Node Graph** ウィジェットに移動します。
2. **3D Model Export** ノードをノードグラフに追加します。
3. **3D Model File** ノードおよび/または **3D Primitive** ノードの **Object** 出力パラメータを、**3D Model Export** ノードの **Source Object** 入力パラメータに接続します。
4. **3D Model Export** ノードの設定で、**Filename** パラメータに 3D モデルファイルのパスと名前を入力し、**Save File** ボタンをクリックします。
