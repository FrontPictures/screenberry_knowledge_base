---
id: guide.node-reference.primary-nodes.canvas
variant_id: guide.node-reference.primary-nodes.canvas.imported-current-guide
title: ScreenberryのCanvasノード - メディアサーバーの映像出力の管理
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
    path: archive/site/content/jp/node-reference/primary-nodes/canvas.mdx
    sha256: 23802ef2c7300db36c99dc6b85377ec076743b80195026134255d7be45dbf771
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/node-reference/primary-nodes/canvas.mdx
  canonical_url: https://help.screenberry.com/jp/node-reference/primary-nodes/canvas
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 23802ef2c7300db36c99dc6b85377ec076743b80195026134255d7be45dbf771
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: ScreenberryのCanvasノード - メディアサーバーの映像出力の管理
    description: メディアサーバーの映像出力を統括するCanvasノードについて説明します。
    openGraph:
      title: Screenberry Canvas Node - メディアサーバーの映像出力の管理
      description: メディアサーバーの映像出力を統括するCanvasノードについて説明します。
translation:
  source_language: en
  source_id: guide.node-reference.primary-nodes.canvas
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../../en/reference/node-reference/primary-nodes/canvas.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/reference/node-reference/primary-nodes/canvas.yaml
  visual_information_review: not-independently-verified
---

# Canvas

**Canvas**ノードは、メインサーバーの映像出力用のOpenGLコンテキストウィンドウを作成する重要なScreenberryノードです。これはDisplayノードやPatchノードなど、すべてのScreenberryの映像出力要素が合成されるキャンバスとして機能します。

**Canvas**ノードが**Node Graph**に追加されると、このCanvasノードに関連付けられた**Display**と**Patch**を編集するための対応するウィジェットが利用可能になります。このウィジェットは、メインの**Screenberry Panel**メニューから**Window** > \[**Canvas名**]を選択してワークスペースに追加することができます。

複数の**Canvas**ノードを作成することができますが、メディアサーバーの映像出力には一度に1つだけ有効にすることができます。追加された各**Canvas**ノードには、それぞれ対応するウィジェットがあります。

詳細な情報は、このユーザーガイドの[Display Editor](../../../how-to/display-editor.md)と[Patch Editor](../../../concepts/patch-editor/patch-editor-basics.md)の章を参照してください。

> **メモ：** 任意の映像ソースノードは、直接**Canvas**ノードに接続することができます。この場合、それはCanvasの**背景画像**として機能し、自動的にCanvasのサイズに合わせられます。

**Canvas**ノードの**Settings**パネルでは、以下のコントロールと情報パラメータが提供されます：

|                                  |                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Image Size                       | 出力ウィンドウの幅と高さをピクセル単位で設定します。                                                                                                                                                                                                                                                                                                                     |
| Position                         | 出力ウィンドウの左上隅の位置を、GPUデバイスの左上隅に対して相対的に設定します。                                                                                                                                                                                                                                                                                                      |
| Fullscreen                       | 出力ウィンドウを現在の出力デバイスの画面サイズに最大化します。                                                                                                                                                                                                                                                                                                                |
| Window Frame                     | 出力ウィンドウにボーダーやタイトルバー、閉じるボタンなどのウィンドウインターフェース要素を追加します。                                                                                                                                                                                                                                                                                            |
| Disable Windows Explorer         | タスクバーやその他のデスクトップアイテムなど、Windowsのユーザーインターフェース要素をすべて無効化します。                                                                                                                                                                                                                                                                                       |
| Quad-buffered Stereo             | Quadroグラフィックスカードでフレームシーケンシャルな120fpsの立体視出力を有効にします。VSync Intervalは、60fpsのコンテンツには2、30fpsのコンテンツには4に設定する必要があります。                                                                                                                                                                                                                                    |
| VSync                            | OpenGLコンテキストで垂直同期を有効にします。                                                                                                                                                                                                                                                                                                                      |
| VSync Interval                   | OpenGLコンテキストの垂直同期の間隔を設定します。                                                                                                                                                                                                                                                                                                                    |
| Multisample Anti-Aliasing (MSAA) | レンダリングされたPatchのエッジの見た目を改善します（滑らかにします）。このアンチエイリアシング設定は、**Canvas**または**Display**に直接レンダリングされるPatchにのみ影響します。                                                                                                                                                                                                                                       |
| Always on Top                    | 出力ウィンドウが他のインターフェースウィンドウの上に常に表示されるように指定します。                                                                                                                                                                                                                                                                                                     |
| Raise Window                     | 出力ウィンドウを他のインターフェースウィンドウの上に移動します。                                                                                                                                                                                                                                                                                                               |
| OpenGL Version                   | OpenGLのソフトウェアバージョンを指定します。このパラメータはデフォルトでAutoに設定されており、現在のOpenGLのソフトウェアバージョンを自動的に検出します。                                                                                                                                                                                                                                                           |
| Renderer                         | 使用中のグラフィックスカードに関する情報を表示します。                                                                                                                                                                                                                                                                                                                    |
| Current OpenGL Version           | 現在のOpenGLのソフトウェアバージョンに関する情報を表示します。                                                                                                                                                                                                                                                                                                             |
| Displays                         | **Canvas**ノードに接続された**Display**ノードの数を表示します。                                                                                                                                                                                                                                                                                                     |
| Patches                          | **Canvas**ノードに接続された**Patch**ノードの数を表示します。                                                                                                                                                                                                                                                                                                       |
| Background Image                 | **Canvas**ノードに接続された背景画像ソースの情報を表示します。                                                                                                                                                                                                                                                                                                           |
| _FPS Measuring_                  |                                                                                                                                                                                                                                                                                                                                                |
| Warm Up Frames                   | OpenGLコンテキストのフレームレートを測定する前に再生する追加フレーム数を設定します。                                                                                                                                                                                                                                                                                                  |
| Measuring Time                   | OpenGLコンテキストのフレームレートを測定するための時間間隔を設定します。                                                                                                                                                                                                                                                                                                        |
| System Frame Rate                | 現在のシステムのフレームレートを表示します。                                                                                                                                                                                                                                                                                                                         |
| Actual Frame Rate                | 実際のOpenGLコンテキストのフレームレートを表示します。                                                                                                                                                                                                                                                                                                                 |
| Target Frame Rate                | 設定された目標フレームレートを表示します。                                                                                                                                                                                                                                                                                                                          |
| VSync Status                     | OpenGLコンテキストの垂直同期が有効かどうかを表示します。                                                                                                                                                                                                                                                                                                                |
| _Performance Profiling_          |                                                                                                                                                                                                                                                                                                                                                |
| Log Frame Drops                  | FrameProfilerがLAGメッセージを出力するためのしきい値として、_frameTime_ \* _LagMultiplier_ を設定します。                                                                                                                                                                                                                                                                   |
| Log Frame Stats                  | フレームの統計情報をログに記録するかどうかを設定します。                                                                                                                                                                                                                                                                                                                   |
| Frame Stats Interval             | フレームの統計情報のログ出力間隔を設定します。                                                                                                                                                                                                                                                                                                                        |
| _Advanced Parameters_            |                                                                                                                                                                                                                                                                                                                                                |
| Force glFinish() Use             | _glFinish()_ を使用するように指定します。                                                                                                                                                                                                                                                                                                                    |
| Using glFinish()                 | _glFinish()_ が使用されていることを表示します。                                                                                                                                                                                                                                                                                                                 |
| Async Transfer Threads           | テクスチャ転送のための非同期のOpenGLコンテキストスレッドの数を定義します。このパラメータが効果を発揮するには、**Canvas**に映像ストリームを送信するノード（例： **MediaPlayer**、**DeckLinkInput**、**DeltacastCapture**、**Vision、NDIIn**など）で、**Texture Upload**モードの**Async Short**または**Async Long**オプションを選択する必要があります。ほとんどの場合、1または2つのスレッドが十分です。7つの非同期コピーエンジンを持つ新しいNVIDIA RTXカードの場合、より多くのスレッドを使用することでパフォーマンスが向上する場合があります。 |
| Additional Buffers for Upload    | 追加のOpenGLバッファオブジェクトの数を設定します。                                                                                                                                                                                                                                                                                                                   |
