---
id: guide.node-reference.primary-nodes.rendertarget
variant_id: guide.node-reference.primary-nodes.rendertarget.imported-current-guide
title: ScreenberryのRender Targetノード - オフスクリーン映像描画
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
    path: archive/site/content/jp/node-reference/primary-nodes/rendertarget.mdx
    sha256: fc97ff18184010d2b923477e6e2c4e4e09a4cbcd1d704ec89f9fe7f2bab8c325
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/node-reference/primary-nodes/rendertarget.mdx
  canonical_url: https://help.screenberry.com/jp/node-reference/primary-nodes/rendertarget
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: fc97ff18184010d2b923477e6e2c4e4e09a4cbcd1d704ec89f9fe7f2bab8c325
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: ScreenberryのRender Targetノード - オフスクリーン映像描画
    description: Screenberryのオフスクリーン映像描画機能について説明します。
    openGraph:
      title: ScreenberryのRender Targetノード - オフスクリーン映像描画
      description: Screenberryのオフスクリーン映像描画機能について説明します。
translation:
  source_language: en
  source_id: guide.node-reference.primary-nodes.rendertarget
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../../en/reference/node-reference/primary-nodes/rendertarget.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/node-reference/primary-nodes/rendertarget.yaml
  visual_information_review: not-independently-verified
---

# Render Target

**Render Target**ノードは、**Canvas**ノードと同じ機能を持っていますが、オフスクリーンの映像レンダリングに使用されます。

**Render Target**ノードは、映像の歪み補正処理の中間結果を扱うためによく使用されます。

**Render Target**ノードが**ノードグラフ**に追加されると、**Render Target**ノードに接続された**Display**と**Patch**を編集するための対応するウィジェットが利用可能になります。このウィジェットは、メインの**Screenberry Panel**メニューから**Window** > \[**Render Target名**] を選択することでワークスペースに追加することができます。DisplayとPatchの編集に関する詳細については、このユーザーガイドの[Display Editor](../../../how-to/display-editor.md)および[Patch Editor](../../../concepts/patch-editor/patch-editor-basics.md)の章を参照してください。

ノードを**Video Preview**ノードに接続することで、**Render Target**で生成された映像をプレビューすることができます。**Video Preview**ノードには、ワークスペースに追加することができるウィジェットがあります。

**Render Target**ノードの**Settings**パネルでは、以下の制御および情報パラメータが提供されます。

|                                  |                                                                                                               |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Image Size                       | オフスクリーン映像のレンダリングを有効化/無効化します。                                                                                  |
| Number of Channels               | レンダリングされる映像のチャンネル数を設定します。                                                                                     |
| Bits per Channel                 | レンダリングされる映像のカラーデプスを設定します。                                                                                     |
| Stereoscopic                     | 立体視を有効化/無効化します。                                                                                               |
| Multisample Anti-Aliasing (MSAA) | レンダリングされたPatchの周辺の画質を向上させます（より滑らかにします）。このアンチエイリアシングオプションは、**Canvas**または**Display**に直接レンダリングされるPatchにのみ影響します。  |
| Color Buffer                     | カラーバッファの使用を有効化します。                                                                                            |
| Depth Buffer                     | デプスバッファの使用を有効化します。                                                                                            |
| Displays                         | **Render Target**ノードに接続された**Display**ノードの数を表示します。                                                             |
| Patches                          | **Render Target**ノードに接続された**Patch**ノードの数を表示します。                                                               |
| Background Image                 | **Canvas**ノードに接続されたバックグラウンド映像に関する情報を表示します。                                                                    |
| Image Wrap Mode                  | テクスチャの端から外の描画方法を選択します。**Clamp to Edge**が選択された場合、外側は端のピクセルの色が広がります。**Clamp to Border**では、指定したボーダーカラー（黒）が広がります。 |
| Image Format                     | 外部映像からピクセル形式を変換します。このパラメータのピンはデフォルトで非表示になっており、映像を接続するために有効にする必要があります。                                         |
| Use External Image Format        | **Image Format**パラメータに接続された外部映像の解像度とピクセル形式を使用します。                                                             |
| Image                            | レンダリングされた映像を出力します。                                                                                            |
