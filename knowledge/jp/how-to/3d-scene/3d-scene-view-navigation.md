---
id: guide.3d-scene.3d-scene-view-navigation
variant_id: guide.3d-scene.3d-scene-view-navigation.imported-current-guide
title: Screenberryの3Dシーンの操作画面と表示
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
    path: archive/site/content/jp/3d-scene/3d-scene-view-navigation.mdx
    sha256: 4f0e8a5fc8ad01c720ce552ee66b7f726d905faa14ced009f37f9401131c716d
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/3d-scene/3d-scene-view-navigation.mdx
  canonical_url: https://help.screenberry.com/jp/3d-scene/3d-scene-view-navigation
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 4f0e8a5fc8ad01c720ce552ee66b7f726d905faa14ced009f37f9401131c716d
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryの3Dシーンの操作画面と表示
    description: 3Dビューポート、UVビューア、カメラビューセレクター、ナビゲーションモードなど、Screenberryで3Dシーンをナビゲートし表示するためのさまざまなツールとオプションを探索します。
    openGraph:
      title: Screenberryの3Dシーンの操作画面と表示
      description: 3Dビューポート、UVビューア、カメラビューセレクター、ナビゲーションモードなど、Screenberryで3Dシーンをナビゲートし表示するためのさまざまなツールとオプションを探索します。
translation:
  source_language: en
  source_id: guide.3d-scene.3d-scene-view-navigation
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/how-to/3d-scene/3d-scene-view-navigation.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/3d-scene/3d-scene-view-navigation.yaml
  visual_information_review: not-independently-verified
---

# 3Dシーンの表示と操作画面

1. **ビューセレクター**：このツールバーには、**3D Viewport** / **UV Viewer セレクター**と**カメラビューセレクター**が含まれています。

   ##### 3D Viewport / UV Viewer セレクター

   (アイコン（説明未確認）)

   - **3D Viewport**は、3D環境がレンダリングされるインタラクティブな作業エリアです。3Dシーン内のオブジェクトの操作、選択、修正に使用されます。
   - **UV Viewer**は、選択した3DオブジェクトのUVマップ（UVマップがある場合）を確認および編集するための特殊なビューモードです。

   (アイコン（説明未確認）)

   ##### カメラビューセレクター

   (アイコン（説明未確認）)

   このドロップダウンメニューでは、事前に用意された様々な表示方法（ビュー）やカスタムカメラアングルから選択することができます：

   - **Free Camera**は、ユーザーが視点を自由に移動、回転、ズームできるデフォルトのナビゲーションツールで、3D環境の制限のない探索を可能にします。
   - **3D Camera**は、ユーザーがカスタマイズした視点から3Dシーンを捉え、カメラビューのレンダリング結果をノードグラフ内の後続のノードに配信します。
   - **Projection Mapper** ビューは、プロジェクターの視点からの可視化を提供し、投影された画像が3Dシーン内のオブジェクトにどのように適用され、相互作用するかをユーザーが確認できるようにします。
   - 標準的な正投影ビュー（カメラ）には、**Top**、**Bottom**、**Left**、**Right**、**Front**、**Back**が含まれます。

2. **ナビゲーションとビューオプションツールバー**：このツールバーには、3Dシーンの操作方法やビューポート内のナビゲーション方法を変更するツールセットが用意されています。機能には以下が含まれます：

   - (Fly Mode Icon) **フライモード**：一人称視点に似たカメラ移動を可能にし、シーン内を自由に動き回ることができます。
   - (Orbit Mode Icon) **オービットモード**：中心点を軸に回転することができ、異なる角度からの視点を提供します。
   - (Pan Mode Icon) **パンモード**：視点面に平行に視界を移動させることができます。
   - (Zoom Mode Icon) **ズームモード**：シーン内のオブジェクトに近づいたり遠ざかったりすることができます。

   さらに、このツールバーには**ビューオプション**が含まれており、背景色など3D Viewportのカスタマイズ設定を提供します。

   ナビゲーションオプションの詳細については、[ビューポートのナビゲーション](working-in-3d-scene.md#%E3%83%93%E3%83%A5%E3%83%BC%E3%83%9D%E3%83%BC%E3%83%88%E3%81%AE%E6%93%8D%E4%BD%9C) セクションを参照してください。

3. **ツールボックス**には以下が含まれます：

   - (Select Tool Icon) **選択ツール**：3Dシーン内のオブジェクトを選択するためのツールです。また、上記で説明したナビゲーションモードから切り替える際にも使用されます。
   - (Move Tool Icon) **移動ツール**：3Dシーン内で選択したオブジェクトを移動するためのツールです。
   - (Rotate Tool Icon) **回転ツール**：選択したオブジェクトを異なる軸を中心に回転させるためのツールです。
   - (Scale Tool Icon) **拡大縮小ツール**：選択したオブジェクトを異なる軸に沿って拡大縮小するためのツールです。

   選択したオブジェクトの編集には、2つのモードが利用可能です：

   - (Object Mode Icon) **オブジェクトモード**：ユーザーがオブジェクト全体の編集ができるモードです。
   - (Mesh Mode Icon) **メッシュモード**：オブジェクトのメッシュの個々の頂点を編集する機能を提供します。

4. **ビューポート**：3Dシーンが表示され、その編集作業を行う領域です。ここでオブジェクトの選択、配置、修正、カメラ設定の調整を行い、リアルタイムで結果を確認します。

5. **軸インジケーター**：3Dシーン内での空間的な方向を示すコンパスの役割を提供します。

6. **シーンインスペクター**：このペインには3Dシーン内のすべての要素がリストされ、それらの選択と管理が可能です。特定のオブジェクトが選択されると、その下のパネルにパラメータが表示されます。

7. **設定パネル**：このセクションでは、選択したオブジェクトのパラメータを表示し、その値を編集することができます。
