---
id: guide.3d-scene.3d-scene-settings
variant_id: guide.3d-scene.3d-scene-settings.imported-current-guide
title: Screenberryの3Dシーンの設定
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
    path: archive/site/content/jp/3d-scene/3d-scene-settings.mdx
    sha256: ffd6a848b251d456533a21eab43b5284a93188bbc9e434d4245eeed79c3ec2be
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/3d-scene/3d-scene-settings.mdx
  canonical_url: https://help.screenberry.com/jp/3d-scene/3d-scene-settings
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: ffd6a848b251d456533a21eab43b5284a93188bbc9e434d4245eeed79c3ec2be
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryの3Dシーンの設定
    description: 一般設定や個々のオブジェクトパラメーターを含む、Screenberryの3Dシーンの設定方法を学びます。
    openGraph:
      title: Screenberryの3Dシーンの設定
      description: 一般設定や個々のオブジェクトパラメーターを含む、Screenberryの3Dシーンの設定方法を学びます。
translation:
  source_language: en
  source_id: guide.3d-scene.3d-scene-settings
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/reference/3d-scene/3d-scene-settings.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/3d-scene/3d-scene-settings.yaml
  visual_information_review: not-independently-verified
---

## 3D シーンの設定

Screenberry の **3D Scene** ウィジェットを使用すると、3D 環境を作成および管理できます。一般的な **3D シーン** 設定にアクセスするには、**シーンインスペクター** ペインで **3D Scene** を選択すると、対応するパネルにそのパラメータが表示されます。

> **注意**: 3D シーンに統合された各オブジェクトの設定は個別に調整されます。

**3D シーン** の設定には以下が含まれます：

### 一般設定

- **Objects**：接続された 3D オブジェクトの数を表示します。
- **Cameras**：接続された仮想カメラの数を表示します。
- **Projection Mappers**：接続されているプロジェクションマッパーの数を示します。
- **Soft Edge Blender**：ソフトエッジブレンディング機能の状態を表示します。
- **Output UV Maps**：UV マップの出力のオン/オフを切り替えます。

### Mapping Matter Import

**Mapping Matter Import Folder**：マッピングデータを含むディレクトリを指定します。

**Load Projectors as**：プロジェクションデータをカメラまたはプロジェクションマッパーのいずれかとしてロードするかを選択します。

### Free Camera 設定

- **View Mode**：カメラビューでオブジェクトを表示するための様々なオプションを提供します：
  - **Textured**：オブジェクトに適用されたすべてのテクスチャでシーンを表示します。
  - **Wireframe**：オブジェクトのジオメトリを線のメッシュとして表示し、すべてのポリゴンのエッジを表現します。
  - **Textured + Wireframe**：テクスチャとワイヤーフレームのビューを組み合わせ、テクスチャ付きオブジェクトの上にワイヤーフレームメッシュを重ねて表示します。
  - **Color**：オブジェクトを単色で表示します。色は個々のオブジェクトの設定で設定できます。
  - **Color + Wireframe**：オブジェクトを単色で表示し、その上にワイヤーフレームメッシュを重ねて表示します。
  - **Points**：オブジェクトのジオメトリの頂点（ポイント）のみを表示します。
  - **None (Projections Only)**：オブジェクトにマッピングされた **プロジェクションマッパー** からのプロジェクションのみを表示します。
- **Show Projections**：ビューポートでのプロジェクションの可視性を切り替えます。
- **Blending Mode**：テクスチャや単色のレイヤーがどのように互いにブレンドするかを制御します。
- **Field of View (FOV)**：カメラによってレンダリングされる 3D シーンの可視範囲の水平方向の範囲を指定します。
- **Depth Test** and **Back-face Culling**：これらの設定は、カメラの位置に対するオブジェクトの表面の可視性を制御します。
- **Near Distance**：カメラがオブジェクトのレンダリングを開始する最小距離を定義します。
- **Keyboard Fly Speed** and **Keyboard Orbit and Zoom Speed**：キーボード操作時のカメラの移動速度を設定します。
- **Antialiasing**：3D シーンで表示されるオブジェクトのエッジを滑らかにするアンチエイリアシング設定を切り替えます。

### Ortho Views 設定

- **位置** と **幅**：上面、底面、左側面、右側面、前面、背面などの各正投影ビューのカメラ位置と描画幅を設定します。

### Grid および Gizmo 設定

- **Camera Gizmo Size**：カメラギズモのサイズを調整します。
- **Axes Gizmo Size**：シーン内の軸を表すギズモのサイズを設定します。
- **Grid Step** and **Number of Cells**：グリッドの縮尺と複雑さを定義します。

### View 設定

- **Camera Gizmo Size** and **Transform Gizmo Size**：カメラとトランスフォームギズモのサイズを設定します。
- **Wireframe Color** and **Width**：オブジェクトの輪郭を表示するワイヤーフレームの外観を調整します。
- **Point Size**：特定の可視化モードで頂点を表すポイントのサイズを変更します。
- **Selection Line Width**：選択されたオブジェクトをハイライトするために使用される線の太さを変更します。
- **Show Grid** and **Show Camera Gizmos**：ビューポート内のグリッドとカメラギズモの可視性を切り替えます。

### 設定

- **Simulate Projection**：マッピング結果をプレビューするために、プロジェクションマッピングのリアルタイムシミュレーションを有効にします。

これらの設定を調整することで、ユーザーは 3D 環境の表示方法をカスタマイズできます。
