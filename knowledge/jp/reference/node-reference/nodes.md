---
id: guide.node-reference.nodes
variant_id: guide.node-reference.nodes.imported-current-guide
title: Screenberryの全ノードの一覧
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
    path: archive/site/content/jp/node-reference/nodes.mdx
    sha256: d6fa0b43b36db9c2429cf4598c8e1a7f8fca5100073d0aa5bd1ac0d5eae678c7
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/node-reference/nodes.mdx
  canonical_url: https://help.screenberry.com/jp/node-reference/nodes
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: d6fa0b43b36db9c2429cf4598c8e1a7f8fca5100073d0aa5bd1ac0d5eae678c7
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryの全ノードの一覧
    description: Screenberryのすべてのノードについて、種類ごとに整理して説明します。
    openGraph:
      title: Screenberryの全ノードの一覧
      description: Screenberryのすべてのノードを、参照しやすいようにカテゴリ分けして網羅的にわかりやすく説明します。
translation:
  source_language: en
  source_id: guide.node-reference.nodes
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/reference/node-reference/nodes.md
presentation:
  mode: text-only
  illustrations: null
  visual_information_review: not-applicable
---

# ノードの一覧

## 3D

|                   |                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------- |
| 3D Combine        | 複数の3Dオブジェクトを1つに結合します。                                                                                         |
| 3D Model Export   | 3Dオブジェクトをファイルに保存します。                                                                                          |
| 3D Model File     | ファイルから3Dオブジェクトを読み込みます。                                                                                        |
| 3D Primitive      | プリミティブな3Dオブジェクト（**球体**、**直方体**、**円柱**、**平面**、または**ドーム**）を作成します。                                               |
| 3D Scene          | 3Dオブジェクト、カメラ、プロジェクターを追加、配置、または編集する仮想的な3D環境を作成します。主にプロジェクションマッピングに使用されます。                                      |
| Camera 3D         | 3Dシーン内の特定の視点から画像をレンダリングするカメラを設定します。                                                                           |
| Projection Mapper | シーン内の3Dオブジェクトに画像を投影します。                                                                                       |
| Transform 3D      | 3Dオブジェクトの変換行列を生成または受け取ります。複数の **Transform 3D** ノードを連結して複雑な変換を行うことができます。                                       |
| VR Camera         | 3Dシーン内の視点を提供し、HTC Viveや他のVRデバイスで表示します。ヘッドセットとジョイスティックの位置を取得し、ボタン操作イベントを処理し、ジョイスティックを使用した3Dシーンのナビゲーションを可能にします。 |

## Audio

|                     |                                                                 |
| ------------------- | --------------------------------------------------------------- |
| Audio Analyzer      | 入力オーディオ信号を処理し、オーディオスペクトルを視覚化して出力します。                            |
| Audio Channel Mixer | ミックスマトリックスを使用して、入力オーディオ信号の個々のチャンネルをリミックスしてオーディオ出力を生成します。        |
| Audio Delay         | 指定された時間の間、入力オーディオ信号を遅延させます。                                     |
| Audio In            | 指定されたオーディオデバイスからオーディオをキャプチャします。                                 |
| Audio Mixer         | 複数のオーディオ入力を組み合わせて、単一のオーディオ出力を生成します。                             |
| Audio Out           | 指定されたオーディオデバイスにオーディオを出力します。                                     |
| DTMF Generator      | ユーザー指定の音のシーケンスに基づいてデュアルトーンマルチ周波数（DTMF）信号を生成します。                 |
| Tone Generator      | 指定された周波数オーディオトーンを生成します。                                         |
| VST Effect          | ユーザーがインストールした任意のVSTプラグインをシステムに統合し、オーディオの生成と処理を制御するためのGUIを提供します。 |

## Auto Calibration

|                  |                                                                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| BlendCalibrators | 同じDisplay上で2つのCalibratorPatchノード をブレンドします。                                                                                        |
| Calibrator       | マルチプロジェクターの出力を自動的にカメラベースでキャリブレーションします。                                                                                            |
| CalibratorPatch  | 自動マルチプロジェクターキャリブレーションのためのプロジェクター１台に相当するPatchを作成します。                                                                               |
| Digital Camera   | DSLRまたはミラーレスカメラのコントロールと設定にアクセスします。                                                                                                |
| DomeSDK Loader   | Screenberry DomeSDKキャリブレーションファイルを読み込みます。                                                                                          |
| DomeSDK Saver    | Screenberry DomeSDKキャリブレーションファイルを保存します。                                                                                           |
| GenICam Camera   | キャリブレーションにGenICam互換カメラを使用します。                                                                                                     |
| Virtual Camera   | キャリブレーションプロセスをシミュレートするために使用されます（主に**Calibrator**の作業内容のデバッグに使用されます）。さらに、**3D Scene**ノードと組み合わせて複雑なマルチプロジェクターセットアップをシミュレートすることもできます。 |

## Automation

|                     |                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------- |
| Action Delay        | 指定された期間だけトリガーの実行を遅らせます。                                                               |
| Action Toggle       | オンとオフのトリガーを交互に実行し、入力トリガーを受け取るたびに出力ブールパラメーターの値を変更します。                                  |
| Content Sync        | 共有フォルダからターゲットフォルダーへのメディアアイテムの自動変換と更新を行います。                                            |
| Event Filter        | 指定された基準に基づいて受信したトリガーをフィルタリングします。                                                      |
| Event Scheduler     | 指定した時間や日付（毎時、毎日、毎月など）にトリガーの実行をスケジュールします。                                              |
| Gate                | オンとオフのトリガーの実行に応じて、指定されたタイプのリンクを接続または切断します。                                            |
| Media Player Action | トリガーを受け取った際に選択した **Media Player** の指定された再生制御を実行します。                                   |
| On Item Started     | 指定されたメディアアイテムの再生開始時にトリガーを実行します。                                                       |
| On Startup          | Screenberryの起動時にトリガーを実行します。                                                           |
| Play Item           | 指定されたメディアアイテムの再生を開始します。                                                               |
| Playlist Randomizer | ソースプレイリストのメディアアイテムをおおよそ同じ回数含んだ指定された数の新しいプレイリストを作成します。ただし、これらのメディアアイテムを連続して2回以上配置しません。 |
| Preset              | 事前に定義された値のセット間を切り替えることができます。                                                          |
| Script              | JavaScript コードを実行します。                                                                 |
| System Exec         | 外部プロセスを実行します。                                                                         |
| Ticker              | 指定されたフレーム数ごとに実行されるトリガーを作成します。                                                         |

## Communication

|                    |                                                                                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| Art-Net Receiver   | イーサネットネットワーク上のArt-Netパケット（DMX）を受信します。                                                                 |
| Art-Net Sender     | イーサネットネットワーク上のArt-Netパケット（DMX）を送信します。                                                                 |
| HTTP Listener      | HTTPリクエストを受信し、それらを受け取った場合には設定されたコマンドに基づいてトリガーを実行するか、Screenberry Control Protocolを使用してHTTPリクエストを処理します。 |
| HTTP Request       | HTTPリクエストを送信します。                                                                                      |
| MIDI Controller    | MIDIデバイスからの入力を処理します。                                                                                  |
| MIDI In            | 単一のデバイスからMIDI入力を受信し、複数のMIDIコントローラーにMIDIメッセージのルーティングを可能にします。                                           |
| MIDI Out           | MIDIメッセージを送信します。                                                                                      |
| MIDI Player        | 読み込まれたMIDIファイルを処理し、個々のチャンネルのMIDIメッセージを出力します。                                                          |
| MQTT Client        | TCPを介してMQTT（Message Queuing Telemetry Transport）ブローカーに接続します。                                          |
| OSC Listener       | OSCパケットを受信し、それらを受け取った場合には設定されたコマンドに基づいてトリガーを実行するか、Screenberry Control Protocolを使用してOSCパケットを処理します。     |
| OSC Sender         | UDPを使用してOSCパケットを送信します。                                                                                |
| Serial Port Input  | シリアルポートからパケットを受信し、それらを受け取った場合には設定されたコマンドに基づいてトリガーを実行するか、Screenberry Control Protocolを使用してパケットを処理します。  |
| Serial Port Output | シリアルポートを介してメッセージを送信します。                                                                               |
| TCP Listener       | TCP/IP接続を待ち受け、設定されたコマンドに基づいてメッセージを処理するか、Screenberry Control Protocolを使用します。                           |
| TCP Sender         | TCP/IPを介して単純なコマンドを送信し、応答を読み取ります。                                                                      |
| UDP Listener       | UDPパケットを受信し、それらを受け取った場合には設定されたコマンドに基づいてトリガーを実行するか、Screenberry Control Protocolを使用してUDPパケットを処理します。     |
| UDP Sender         | UDPパケットを送信します。                                                                                        |
| Wake on LAN        | Wake-on-LANパケットを送信します。                                                                                |
| Web Server         | ウェブサーバーを実行し、ウェブページのホスティングと処理を可能にします。デフォルトのページは、ウェブブラウザを介してScreenberryを制御するためのウェブパネルです。                |

## Device Control

|                                  |                                                                     |
| -------------------------------- | ------------------------------------------------------------------- |
| Barco Control                    | 様々なBarco製プロジェクターに対してIPベースの制御を行います。                                  |
| PJLink                           | PJLinkプロトコルを介してプロジェクターを制御します。                                       |
| Projectors Control (Serial Port) | シリアルポートを介してプロジェクターを制御します。                                           |
| Samsung MDC Protocol             | Multiple Display Control（MDC）プロトコルを介してSamsungディスプレイを制御します。          |
| Serial Relay Input               | シリアルポートのRxおよびTxラインの短絡を検出します。                                        |
| SerialPPM                        | Front Pictures社製のUSBtoPPMデバイス（仮想シリアルポート経由）を使用して、浮動小数点数をPPM信号に変換します。 |

## Fulldome

|                                                          |                                                                       |
| -------------------------------------------------------- | --------------------------------------------------------------------- |
| [Dome Transform](../warping-alignment/dometransform.md)  | キャリブレーションカメラの位置、向き、およびレンズの歪みを補償するために、ドームマスター映像に対して歪み補正を行います。          |
| Fisheye Lens Correction                                  | 物理魚眼レンズの測定モデルをもとにわずかな偏差を補償して、正確な等距離魚眼映像に修正します。                        |
| Fisheye Remap                                            | ソースの魚眼またはVR 360度映像を全周魚眼映像に変換し、キャリブレーションカメラの位置、向き、およびレンズの歪みの調整を可能にします。 |
| [LatLong to Dome](../warping-alignment/latlongtodome.md) | VR 360度画像を仮想球体にマッピングし、ドームスクリーン上で表示するための補正を行います。                       |
| [Planar to Dome](../warping-alignment/planartodome.md)   | 平面映像を仮想の平面または曲面にマッピングし、ドームスクリーン上で表示するための補正を行います。                      |
| Spherical Mirror Warp                                    | １台のプロジェクターと球面ミラーを使用してドームスクリーンに投影するために、ソースのドームマスター映像の歪み補正を行います。        |

## General

|                                                |                                                                                                             |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [Canvas](primary-nodes/canvas.md)              | OpenGLのコンテキストを持つメディアサーバーの映像表示ウィンドウを作成します。                                                                   |
| Comment Area                                   | コメントまたは注釈を含むノードグラフ内のブロックを作成します。さらに、コメントボックス内に配置されたノードはそれに接続され、一体として移動することができるため、ノードグラフを視覚的に整理する簡単な方法を提供します。 |
| [Display](primary-nodes/display.md)            | Canvasに配置できる表示エリアを作成します。                                                                                    |
| Group                                          | ノードのグループを階層化し、入力と出力パラメーターを転送するコンテナを作成します。                                                                   |
| [Render Target](primary-nodes/rendertarget.md) | 非表示の内部バッファに映像をレンダリングします。                                                                                    |
| Server Control                                 | メディアサーバーとScreenberryアプリケーションの制御方法を提供し、システム情報を表示します。                                                         |
| Shared Group                                   | ノードのグループを階層化し、プロジェクト間で共有できるコンテナを作成します。                                                                      |
| System Info                                    | パフォーマンスカウンター（CPU使用率、GPU使用率、フレームレート、ディスク読み取り速度など）を計算し表示します。                                                  |

## Human Interface Devices

|                      |                                                      |
| -------------------- | ---------------------------------------------------- |
| Joystick             | ジョイスティックのイベント処理を提供します。                               |
| Keyboard             | 指定されたキーボードのイベントを監視し、それに基づいてトリガを実行します。                |
| Mouse                | マウスのイベント処理を提供します。                                    |
| Presentation Clicker | プレゼンテーションクリッカーの入力イベントを転送（および必要に応じてリマップ）またはシミュレートします。 |

## Image Processing

|                       |                                                                            |
| --------------------- | -------------------------------------------------------------------------- |
| Alpha Mask            | 入力映像のアルファチャンネルとして映像の赤チャンネル（最初のチャンネル）を使用します。                                |
| Chroma Key            | 入力映像からクロマキーカラー（緑）を除去します。                                                   |
| Color Correction      | RGBチャンネル、カーブ補正、**Hue**、**Saturation**、**Lightness** の設定によって入力映像の色属調整を行います。 |
| Extract Channel       | 入力映像から指定された単一のチャンネルを抽出します。                                                 |
| FX Stack              | 入力映像にISF（Interactive Shader Format）エフェクトのシーケンスを適用します。                      |
| GLSL Shader           | GLSLシェーダーを作成します。                                                           |
| Image Blending        | 標準のブレンディングモードを使用して2つの入力映像をブレンドします。                                         |
| Image Buffer          | 指定された数の入力映像フレームをバッファに蓄積し、遅延効果や一時的な映像保持に使用します。                              |
| Image Saver           | 入力映像をファイルに保存します。                                                           |
| Image Split           | 指定されたグリッドに基づいて入力映像を均等なサイズの領域にスライスします。                                      |
| Invert                | 入力映像の色を反転させます。                                                             |
| Lighten               | 入力映像を明るくするフィルタを適用します。                                                      |
| LUT                   | ルックアップテーブルを入力映像に適用します。                                                     |
| Maximal               | 最適化された最大フィルタを入力映像に適用します。                                                   |
| Merge to Stereoscopic | 2つの入力映像を結合するか、ステレオフレームパック映像を変換して立体視映像を作成します。                               |
| Multi-GPU Image       | シングルGPUから複数のGPUに映像をコピーし、TouchEngineなどの一部のアプリケーションでのシングルGPU映像処理の制限を回避します。   |
| Multiply              | 2つの入力映像を乗算します。                                                             |
| Threshold             | 入力映像に閾値フィルタを適用します。                                                         |
| UV Remap              | 入力映像にUV変換を適用します。                                                           |

## Math

|                   |                                                                                                                |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| Add Float         | 複数の浮動小数点数の入力を加算し、計算結果を出力します。                                                                                   |
| Add Int           | 複数の整数の入力を加算し、計算結果を整数として出力します。                                                                                  |
| Add IVec2         | 複数の IVec2 の成分を加算し、合計された成分を持つ新しい IVec2 を出力します。                                                                  |
| Add Vec2          | 複数の Vec2 の成分を加算し、合計された成分を持つ新しい Vec2 を出力します。                                                                    |
| Add Vec3          | 複数の Vec3 の成分を加算し、合計された成分を持つ新しい Vec3 を出力します。                                                                    |
| Add Vec4          | 複数の Vec4 の成分を加算し、合計された成分を持つ新しい Vec4 を出力します。                                                                    |
| Compare Float     | 2つの浮動小数点数を比較し、ブール値の結果と比較状態が変化したときにトリガーを出力します。                                                                  |
| Divide Float      | 第1の浮動小数点数の入力を第2の浮動小数点数の入力で除算し、計算結果を出力します。                                                                      |
| Divide Int        | 第1の整数の入力を第2の整数の入力で除算し、計算結果を整数として出力します。                                                                         |
| Divide IVec2      | 第1の IVec2 の成分を第2の IVec2 の成分で除算し、計算結果を新しい IVec2 として出力します。                                                       |
| Divide Vec2       | 第1の Vec2 の成分を第2の Vec2 の成分で除算し、計算結果を新しい Vec2 として出力します。                                                          |
| Divide Vec3       | 第1の Vec3 の成分を第2の Vec3 の成分で除算し、計算結果を新しい Vec3 として出力します。                                                          |
| Divide Vec4       | 第1の Vec4 の成分を第2の Vec4 の成分で除算し、計算結果を新しい Vec4 として出力します。                                                          |
| Easing Function   | 入力値にイージング関数を適用し、範囲\[0, 1]内で変化する値を出力します。                                                                        |
| Expression        | 与えた数式を計算し、計算結果を出力します。計算には数式ツールキットライブラリ（ExprTk）を使用します。                                                          |
| Float In Range    | 入力の浮動小数点数が指定された最小値と最大値の範囲内にあるかどうかを識別し、範囲内になったときと範囲外になったときにトリガーを出力します。                                          |
| Float Mix         | 2つの浮動小数点数を指定された値で内分した値を出力します。                                                                                  |
| Line Graph        | 指定された時間またはフレーム数にわたる入力値に基づいてグラフをプロットします。                                                                        |
| Logic Operation   | 指定された論理演算をブール値の入力に適用します。                                                                                       |
| Max Float         | 複数の浮動小数点数の入力の中で、最大の値を出力します。                                                                                    |
| Max Int           | 複数の整数の入力の中で最大の値を整数として出力します。                                                                                    |
| Max IVec2         | 複数の IVec2 の入力の中で成分ごとに最大値を決定し、最大の成分を持つ新しい IVec2 を出力します。                                                         |
| Max Vec2          | 複数の Vec2 の入力の中で成分ごとに最大値を決定し、最大の成分を持つ新しい Vec2 を出力します。                                                           |
| Max Vec3          | 複数の Vec3 の入力の中で成分ごとに最大値を決定し、最大の成分を持つ新しい Vec3 を出力します。                                                           |
| Max Vec4          | 複数の Vec4 の入力の中で成分ごとに最大値を決定し、最大の成分を持つ新しい Vec4 を出力します。                                                           |
| Min Float         | 複数の浮動小数点数の入力の中で、最小の値を出力します。                                                                                    |
| Min Int           | 複数の整数の入力の中で最小の値を整数として出力します。                                                                                    |
| Min IVec2         | 複数の IVec2 の入力の中で成分ごとに最小値を決定し、最小の成分を持つ新しい IVec2 を出力します。                                                         |
| Min Vec2          | 複数の Vec2 の入力の中で成分ごとに最小値を決定し、最小の成分を持つ新しい Vec2 を出力します。                                                           |
| Min Vec3          | 複数の Vec3 の入力の中で成分ごとに最小値を決定し、最小の成分を持つ新しい Vec3 を出力します。                                                           |
| Min Vec4          | 複数の Vec4 の入力の中で成分ごとに最小値を決定し、最小の成分を持つ新しい Vec4 を出力します。                                                           |
| Multiply Float    | 複数の浮動小数点数の入力を乗算し、計算結果を出力します。                                                                                   |
| Multiply Int      | 複数の整数の入力を乗算し、計算結果を整数として出力します。                                                                                  |
| Multiply IVec2    | 複数の IVec2 の成分を乗算し、乗算された成分を持つ新しい IVec2 を出力します。                                                                  |
| Multiply Vec2     | 複数の Vec2 の成分を乗算し、乗算された成分を持つ新しい Vec2 を出力します。                                                                    |
| Multiply Vec3     | 複数の Vec3 の成分を乗算し、乗算された成分を持つ新しい Vec3 を出力します。                                                                    |
| Multiply Vec4     | 複数の Vec4 の成分を乗算し、乗算された成分を持つ新しい Vec4 を出力します。                                                                    |
| PID Controller    | PID（比例積分微分）コントローラーを提供します。                                                                                      |
| Simulated System  | 慣性システムの出力をシミュレートします。                                                                                           |
| Smooth Transition | 指定された時間をかけて入力値の間で滑らかに変化させた値を出力します。                                                                             |
| Subtract Float    | 第2の浮動小数点数の入力を第1の浮動小数点数から減算し、計算結果の浮動小数点差を出力します。                                                                 |
| Subtract Int      | 第2の整数の入力を第1の整数から減算し、計算結果の整数差を出力します。                                                                            |
| Subtract IVec2    | 第2の IVec2 の入力を第1の IVec2 から減算し、計算結果の IVec2 を出力します。                                                              |
| Subtract Vec2     | 第2の Vec2 の入力を第1の Vec2 から減算し、計算結果の Vec2 を出力します。                                                                 |
| Subtract Vec3     | 第2の Vec3 の入力を第1の Vec3 から減算し、計算結果の Vec3 を出力します。                                                                 |
| Subtract Vec4     | 第2の Vec4 の入力を第1の Vec4 から減算し、計算結果の Vec4 を出力します。                                                                 |
| Threshold Float   | 入力値が指定されたしきい値を通過する際に、上昇または下降エッジに対応するトリガーを実行します。入力値がしきい値を超えたときに _true_ のブール値を、しきい値より小さいときに _false_ のブール値を出力します。 |
| Vec2 Mix          | 2つの Vex2 値を指定された値で内分した値を出力します。                                                                                 |
| Vec3 Mix          | 2つの Vex3 値を指定された値で内分した値を出力します。                                                                                 |
| Vec4 Mix          | 2つの Vex4 値を指定された値で内分した値を出力します。                                                                                 |

## Media Sources

|                                                      |                                                                                                |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Gradient                                             | 指定された色でUVグラデーションまたはグラデーション画像を生成します。UVグラデーションは3Dノード（**Camera 3D**、**UV Remap**）と一緒に使用することができます。 |
| Image File                                           | ファイルから画像を読み込みます。                                                                               |
| [Media Player](primary-nodes/mediaplayer.md)         | プレイリストまたはタイムラインの再生を制御するメディアプレーヤーを作成します。                                                        |
| [Notch Playback](integration-nodes/notchplayback.md) | **Notch**ブロックを再生します。                                                                           |
| Solid Color                                          | 単色の画像を生成します。                                                                                   |
| Test Pattern                                         | 手動キャリブレーションに利用できるグリッドパターン画像を生成します。                                                             |
| Text Image                                           | ユーザーが定義した書式に従ってテキストをレンダリングします。                                                                 |
| [TouchEngine](integration-nodes/touchengine.md)      | ファイルから読み込まれたTouchEngineの .tox コンテナを再生します。                                                      |
| Web View                                             | 指定されたウェブページをレンダリングします。                                                                         |

## Timecode

|                  |                                                            |
| ---------------- | ---------------------------------------------------------- |
| LTC Decoder      | オーディオストリームからSMPTEリニアタイムコード（LTC）データを抽出します。                  |
| LTC Encoder      | SMPTE リニアタイムコード（LTC）オーディオストリームとしてエンコードされた内部タイムコードを出力します。   |
| MTC Decoder      | **MIDI In**ノードから受信したメッセージから MIDIタイムコードをデコードします。            |
| Timecode Display | 現在のタイムコード値の映像をレンダリングします。Tmecode Displayは別のウィジェットとして追加できます。 |
| Timecode Events  | 受信したタイムコードで指定されたキューポイントに到達したときにトリガーを実行します。                 |
| Timecode         | ノードと外部アプリケーションの処理を同期するための参照時刻を提供するタイムコードを生成します。            |

## Tracking

|               |                                                                                       |
| ------------- | ------------------------------------------------------------------------------------- |
| Accumulator   | ブロブトラッキングのために指定されたフレーム数を蓄積し、マスクを作成します。                                                |
| BlobTracker   | 入力映像内のブロブの位置を検出します。                                                                   |
| FreeD Tracker | FreeDプロトコルをサポートするデバイスからのカメラトラッキングデータを受信します。                                           |
| LiDAR         | LiDARデバイスからの距離データを受信します。                                                              |
| Mo-Sys F4     | Mo-Sys F4プロトコルをサポートするデバイスからのカメラトラッキングデータを受信します。                                       |
| RTTrP Tracker | BlackTraxデバイスなど、Real Time Tracking Protocol（RTTrP）をサポートするデバイスからのトラッキングモーションデータを受信します。 |

## User Controls

|              |                                                                              |
| ------------ | ---------------------------------------------------------------------------- |
| Button       | ボタンをクリックした時にトリガーを実行するボタンコントロールを作成します。                                        |
| Checkbox     | チェックボックスの状態変更時にオンとオフのトリガーを実行し、チェックボックスの状態に対応するブール値を出力するチェックボックスコントロールを作成します。 |
| Color Picker | 選択された色のVec3値を出力するカラーピッカーコントロールを作成します。利便性のために、カラーピッカーにはカラーの16進数値が表示されます。      |
| Combo Box    | 指定されたノードのパラメータを選択するコンボボックスコントロールを作成します。                                      |
| Float        | 倍精度浮動小数点数の入力フィールドを作成します。                                                     |
| GUI Panel    | ビジュアルエディタを使用してカスタマイズできるパネルレイアウトにユーザーインターフェイスコントロールを追加、配置、または変更することができます。     |
| Int          | 整数値の入力フィールドを作成します。                                                           |
| Label        | ユーザーコントロールのレイアウトにラベルを作成します。                                                  |
| Slider       | スライダーコントロールを作成します。                                                           |
| Switch       | ノードグラフのリンクを切り替えるためのコントロールを作成します。                                             |
| Text Value   | テキストフィールドまたはテキストエリアコントロールを作成します。                                             |

## Utility

|                     |                                                                              |
| ------------------- | ---------------------------------------------------------------------------- |
| Action to Bool      | オントリガーが実行されると出力のブールパラメータの値を _true_ に設定し、オフトリガーが実行されると _false_ に設定します。        |
| Action to Float     | オンとオフのトリガーをそれぞれ1.0と0.0の浮動小数点数に変換します。                                         |
| Bool to Action      | 入力のブールパラメータの値が変更されると、オンとオフのトリガーを実行します。                                       |
| Bool to Float       | ブール値を浮動小数点数に変換します（ _true_ を1.0に、_false_ を0.0に）。                              |
| Bool to Int         | ブール値を整数に変換します（ _true_ を1、_false_ を0に）。                                       |
| CHOP Input          | **TouchEngine**ノードで使用するカスタムCHOPパラメータを作成します。                                  |
| CHOP Output         | **TouchEngine**ノードからCHOPパラメータを出力します。                                         |
| Combo to Int        | コンボボックスで選択された値のインデックス番号に対応する整数を出力します。                                        |
| Euler to Quaternion | オイラー回転角をクォータニオンに変換します。                                                       |
| Float Array Split   | 浮動小数点数配列から浮動小数点数を抽出します。                                                      |
| Float Array         | 浮動小数点数から浮動小数点数配列を作成します。                                                      |
| Float Matrix Split  | 浮動小数点数行列から浮動小数点数を抽出します。                                                      |
| Float Matrix        | 浮動小数点数から浮動首数点数行列を作成します。                                                      |
| Float to Action     | 入力の浮動小数点数の値が0に変更されるとオフトリガーを実行し、0から他の値に変更されるとオントリガーを実行します。                    |
| Float to Bool       | 入力の浮動小数点数の値がゼロに変更されるとブール値を _false_ に変更します。ゼロから他の値に変更されるとブール値を _true_ に変更します。 |
| Float to Int        | 浮動小数点数を整数に変換します。                                                             |
| Float to Timecode   | 浮動小数点数をタイムコード値に変換します。                                                        |
| Image Format        | 映像のフォーマット情報を抽出します。解像度、チャンネル数、チャンネルあたりのビット数、立体視形式かどうかを含みます。                   |
| Int Array Split     | 整数配列から整数を抽出します。                                                              |
| Int Array           | 整数から整数配列を作成します。                                                              |
| Int to Bool         | 入力の整数がゼロと等しい場合、ブール値の _false_ を出力し、それ以外の値の場合は _true_ を出力します。                  |
| Int to Combo        | 整数をインデックス番号に変換し、リンクされたコンボボックスの選択に使用できるように出力します。                              |
| Int to Float        | 整数を浮動小数点数に変換します。                                                             |
| IVec2 Split         | IVec2値を2つの整数に変換します。                                                          |
| IVec2               | 2つの整数をIVec2値に変換します。                                                          |
| Mat4 Split          | Mat4値を4つのVec4値に変換します。                                                        |
| Mat4                | 4つのVec4値をMat4値（4x4行列）に変換します。                                                 |
| Matrix Decompose    | 変換行列を位置、スケール、回転、スキュー、透視の値に分解します。                                             |
| Quaternion to Euler | クォータニオンをオイラー回転角に変換します。                                                       |
| String Array Split  | 文字列配列から文字列を抽出します。                                                            |
| String Array        | 文字列配列から文字列を抽出します。                                                            |
| String Table Split  | 文字列行列から文字列を抽出します。                                                            |
| String Table        | 文字列から文字列行列を作成します。                                                            |
| Timecode to Float   | タイムコード値を浮動小数点数に変換します。                                                        |
| Vec2 Array Split    | Vec2配列からVec2値を抽出します。                                                         |
| Vec2 Array          | Vec2値からVec2配列を作成します。                                                         |
| Vec2 Split          | Vec2値を2つの浮動小数点数に変換します。                                                       |
| Vec2                | 2つの浮動小数点数をVec2値に変換します。                                                       |
| Vec3 Array Split    | Vec3配列からVec3値を抽出します。                                                         |
| Vec3 Array          | Vec3値からVec3配列を作成します。                                                         |
| Vec3 Split          | Vec3値を3つの浮動小数点数に変換します。                                                       |
| Vec3                | 3つの浮動小数点数をVec3値に変換します。                                                       |
| Vec4 Split          | Vec4値を4つの浮動小数点数に変換します。                                                       |
| Vec4                | 4つの浮動小数点数をVec4値に変換します。                                                       |

## Video Streaming

|                            |                                                        |
| -------------------------- | ------------------------------------------------------ |
| Datapath Capture           | Datapath製のVisionキャプチャカードからの映像入力を出力します。                 |
| DeckLink Capture           | Blackmagic Design製のDeckLinkキャプチャカードからの映像および音声入力を出力します。 |
| DeckLink Output            | Blackmagic Design製のDeckLinkデバイスに映像を出力します。              |
| Deltacast Capture          | Deltacast製のキャプチャカードからの映像入力を出力します。                      |
| GenICam Capture            | GenICam準拠のカメラからの映像入力を実装します。                            |
| Magewell Capture           | Magewell製のキャプチャカードからの映像および音声入力を出力します。                  |
| NDI In                     | NDI互換デバイスからの映像および音声ストリームを出力します。                        |
| NDI Out                    | 映像および音声をNDIストリームとして出力します。                              |
| Point Grey Camera          | Point Grey製のカメラからの映像入力を出力します。                          |
| RTMP Server                | RTMPプロトコルの映像および音声ストリームを出力します。                          |
| RTSP Player                | リモートソースから受信したRTSPプロトコルの映像および音声ストリームを出力します。             |
| Spout In                   | Spout対応アプリケーションからのリアルタイム映像を出力します。                      |
| Spout Out                  | リアルタイム映像をSpout対応アプリケーションに送信します。                        |
| Video Capture (DirectShow) | DirectShow API（Windows）をサポートするデバイスからの映像入力を出力します。       |
| Video Capture (V4L)        | V4L API（Linux）をサポートするデバイスからの映像入力を出力します。                |
| Video Preview              | 指定したサイズのウィンドウで映像のプレビューを表示します。                          |

## Warp and Transform

|                                                                |                                                                               |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Bezier Warp](../warping-alignment/bezierwarp.md)              | ベジエ曲線を使用して画像を歪ませることで、曲面または部分的に曲がった表面に投影をマッピングします。                             |
| [LED Stripes Mapper](../warping-alignment/ledstripesmapper.md) | 映像コンテンツをLEDストリップコントローラーに出力するために、ライン状に再マッピングします。                               |
| Lens Distortion                                                | レンズの歪み補正を適用し、CameraとCalibratorノードと組み合わせて、非魚眼レンズを使用してパノラマをキャリブレーションするために使用します。 |
| [Mask](../warping-alignment/mask.md)                           | マスクとして適用できる自由形状のベクターシェイプを作成します。                                               |
| [Patch Replicator](../warping-alignment/patchreplicator.md)    | Patchのインスタンスを作成し、指定した方法で配置します。                                                |
| [Quad Grid](../warping-alignment/quadgrid.md)                  | メッシュグリッドの個々の面に透視変形を適用します。                                                     |
| [Quad Warp](../warping-alignment/quadwarp.md)                  | 映像に透視変形を適用し、例えば平面に対して斜めから投影した場合の歪みを補正します（k－ナー補正、台形補正とも呼ばれます）。                 |
| [Rectangle](../warping-alignment/rectangle.md)                 | 映像に四角形形状の移動/スケール変換を適用します。                                                     |
| Shape                                                          | 指定されたポイントを中心に、シンプルな変形（**アフィン**、**類似性**、または**剛体**）を使用して映像を歪ませます。               |
| [Soft Edge Blender](../warping-alignment/softedgeblender.md)   | 2つ以上の重なり合う映像の輝度を均一化するブレンディングマップを生成します。                                        |
| [Transform 2D](../warping-alignment/transform2d.md)            | Patch用の変換行列を生成します。                                                            |
| [Triangle Mesh](../warping-alignment/trianglemesh.md)          | 三角形メッシュに基づいて映像を歪ませます。例えば、三角形の形状で構成されたオブジェクトに投影をマッピングするために使用します。               |
| [XGrid](../warping-alignment/xgrid.md)                         | 3Dピラミッドのような繰り返しのあるオブジェクトにマッピングするために映像を歪ませます。                                  |
