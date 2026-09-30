---
id: guide.node-reference.primary-nodes.display
variant_id: guide.node-reference.primary-nodes.display.imported-current-guide
title: ScreenberryのDisplayノード - 映像の表示場所の定義
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
    path: archive/site/content/jp/node-reference/primary-nodes/display.mdx
    sha256: ef73239d8a343367e3a53163085e48b479d5e786976081e88f51d4aac4c88180
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/node-reference/primary-nodes/display.mdx
  canonical_url: https://help.screenberry.com/jp/node-reference/primary-nodes/display
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: ef73239d8a343367e3a53163085e48b479d5e786976081e88f51d4aac4c88180
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: ScreenberryのDisplayノード - 映像の表示場所の定義
    description: Displayノードによる個別の映像表示範囲やパラメータ設定方法を説明します。
    openGraph:
      title: ScreenberryのDisplayノード - 映像の表示場所の定義
      description: Displayノードによる個別の映像表示範囲やパラメータ設定方法を説明します。
translation:
  source_language: en
  source_id: guide.node-reference.primary-nodes.display
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../../en/reference/node-reference/primary-nodes/display.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/node-reference/primary-nodes/display.yaml
  visual_information_review: not-independently-verified
---

# Display

**Display**ノードは、Screenberry サーバーの映像出力に配置できる個々の表示領域を定義します。複数の**Display**ノードを**Canvas**ノードまたは **Render Target**ノード（オフスクリーンレンダリング用）に接続することができます。

**Display**ノードは、接続された映像ソースや Patch ノードからメディアコンテンツを受信します。

**Display**ノードが**Canvas**（または**Render Target**）ノードに接続されると、このノードは対応する**Canvas**（または**Render Target**）**Editor**ウィジェットで編集可能になります。表示の編集に関する詳細は、[Display Editor](../../../how-to/display-editor.md)の章を参照してください。

**Display**ノードの**Settings**パネルでは、以下の制御と情報パラメータが提供されています。

|                     |                                                                                                                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Patches             | **Display**ノードに接続されている**Patch**ノードの数を表示します。                                                                                                                                                                                                                                                |
| Image               | **Display**ノードに接続された映像ソースに関する情報を表示します。                                                                                                                                                                                                                                                     |
| Size                | Display の幅と高さをピクセル単位で設定します。                                                                                                                                                                                                                                                                |
| Position            | Display の左上隅の位置をサーバーの映像出力の左上隅に対して相対的に設定します。                                                                                                                                                                                                                                                |
| Test Pattern        | Display に表示するテストパターンを選択できます（**Label**、**Grid**、**Color Bars**、または **Gradient**）。詳細はこちらを参照してください： [Display のテストパターンを表示する](../../../how-to/display-editor.md#display-%E3%81%AE%E3%83%86%E3%82%B9%E3%83%88%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E3%82%92%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B). |
| _Stereoscopic_      |                                                                                                                                                                                                                                                                                            |
| Enable Stereoscopic | **Display**への立体視映像のレンダリングを有効化します。                                                                                                                                                                                                                                                          |
| Stereoscopic Mode   | 立体視映像の方式を選択できます： **Side-by-side**、**Top/Bottom**、または**Frame Sequential**のいずれかを指定します。                                                                                                                                                                                                       |
| Swap Left-Right     | サイドバイサイドの立体視映像で左目と右目の映像位置を入れ替えます。                                                                                                                                                                                                                                                          |
| _Output Parameters_ |                                                                                                                                                                                                                                                                                            |
| Display             | **Display**ノードが**Canvas**または**Render Target**ノードに接続されているかどうかを示します。                                                                                                                                                                                                                         |
| DomeSDKDisplay      | **Display**ノードが**DomeSDK Saver**ノードに接続されているかどうかを示します。                                                                                                                                                                                                                                      |

> **メモ：** **Display**ノードは、**DomeSDK Saver**ノードにも接続することができ、マルチプロジェクションドームのセットアップで個別のプロジェクターのキャリブレーションデータを書き出すすることができます。これを実現するためには、**DomeSDK Display**の出力パラメーターピンを有効にする必要があります。
