---
id: guide.automatic-calibration.setting-up-calibration-camera
variant_id: guide.automatic-calibration.setting-up-calibration-camera.imported-current-guide
title: Screenberryによる自動キャリブレーションのためのカメラ準備
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
    path: archive/site/content/jp/automatic-calibration/setting-up-calibration-camera.mdx
    sha256: d47eed675d6a2bb4cdeee7a70f25d3804d3cd7633caf1c5eff6b5407143f70e5
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/automatic-calibration/setting-up-calibration-camera.mdx
  canonical_url: https://help.screenberry.com/jp/automatic-calibration/setting-up-calibration-camera
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: d47eed675d6a2bb4cdeee7a70f25d3804d3cd7633caf1c5eff6b5407143f70e5
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryによる自動キャリブレーションのためのカメラ準備
    description: 自動キャリブレーションのためのカメラについて、機種やレンズの選択、効率的なキャリブレーションのための設置方法などを説明します。
    openGraph:
      title: Screenberryによる自動キャリブレーションのためのカメラ準備
      description: 自動キャリブレーションのためのカメラについて、機種やレンズの選択、効率的なキャリブレーションのための設置方法などを説明します。
translation:
  source_language: en
  source_id: guide.automatic-calibration.setting-up-calibration-camera
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/how-to/automatic-calibration/setting-up-calibration-camera.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/automatic-calibration/setting-up-calibration-camera.yaml
  visual_information_review: not-independently-verified
---

# キャリブレーションカメラの設定

カメラ１台での自動キャリブレーションに必要な機器：

- **デジタルカメラ**（サポートされているカメラのリストを参照してください）
- **三脚**と**雲台**
- カメラに対応し、Screenberryサーバーに接続するのに十分な長さの**USBケーブル**
- カメラに対応している**メモリーカード**。

### Windows版のScreenberryで対応しているデジタルカメラのリスト

|       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nikon | D33, D3s, D3x, D300, D300S, D3500, **D3400**, D3300, **D3200**, **D3100**, **D3000**, D4, D40, D5, D500, D5600, D5500, D5300, **D5200**, D5100, **D5000**, D60, **D600**, **D610**, D700, D750, D7500, D7200, D7100, D7000, D80, D810, D810A, D800, D800E, D850, D90, Df, Z50, Z6, Z7                                                                                                                                                                                                                                                                      |
| Canon | EOS-1D Mark III, EOS-1D Mark IV, EOS-1D X Mark II, EOS 100D, EOS 1000D, EOS 1100D, EOS 1200D, EOS 1300D, EOS 200D, EOS 2000D, EOS 40D, EOS 450D, EOS 4000D, **EOS 5D Mark II**, EOS 5D Mark III, EOS 5D Mark IV, EOS 50D, EOS 500D, EOS 550D, EOS 6D, EOS 6D Mark II, EOS 60D, EOS 600D, EOS 7D, EOS 70D, EOS 77D, EOS 700D, EOS 760D, EOS 80D, EOS 800D, EOS 90D, EOS M, EOS M50, EOS M5, EOS M6, EOS M6 Mark II, EOS M100, EOS M200, **Rebel T3**, Rebel T5, Rebel T6, EOS R, EOS RP, PowerShot SX70 HS, PowerShot G5 X Mark II, PowerShot G7 X Mark III |
| Sony  | α7, α7 II, α7R, α7R II, α7S, α5000, α5100, αv6000, α6300, α6500, NEX-5R, NEX-5T, NEX-6, HX60, HX80, HX90, HX400, WX500, RX10 II, RX100 III, RX100 IV, RX100 V, FDR-X3000R, FDR-X1000V, HDR-AS50, HDR-AS300R, DSC-QX30, DSC-QX100                                                                                                                                                                                                                                                                                                                           |

カメラモデルのうち太字で強調されたものは、自動キャリブレーションの動作テスト済みの推奨機種です。

[Linux版のScreenberryで対応しているデジタルカメラのリスト](http://www.gphoto.org/proj/libgphoto2/support.php)

### カメラレンズの選択

プロジェクションスクリーンの形状に合わせた焦点距離のレンズを使用することをお勧めします：

1. **標準**または**広角**レンズは、通常**長方形**の**平面スクリーン**への投影に使用されます。
2. **標準**または**広角**レンズは、**カーブした長方形スクリーン**のような**非平面**への投影にも使用されます。
3. **全周魚眼**レンズは、**ドーム**や**円筒パノラマ**のような**非平面**への投影に使用されます。

### カメラの設定

カメラのポスト処理パラメーターがオフになっていることが重要です。

正しいNikon製カメラ\*の設定の例：

|                              |                                            |
| ---------------------------- | ------------------------------------------ |
| **Set Picture Control**      | SD (Standard)。Sharpeningを含むすべてのパラメータは0に設定。 |
| **Active D-Lightning**       | OFF                                        |
| **High ISO NR**              | OFF                                        |
| **Auto Distortion Control**  | OFF                                        |
| **Long Exposure NR**         | OFF                                        |
| **Automatic focus**          | OFF                                        |
| **Auto Sensitivity Control** | OFF (Nikon 3400のみ)                         |
| **White Balance**            | Cloudy                                     |

\* Nikon D5000/D5100/D5200

カメラの電源を入れた際に、日付と時刻を入力するよう促された場合は、**OK**ボタンを押してください。

カメラのモードダイアルを**Manual**(**M**)に切り替えます。

レンズフォーカスを**マニュアル**（**M**）に切り替え、**Calibration Wizard**の**Focus Grid**テストパターンを参考にして、レンズのフォーカスを手動で合わせてください。

### カメラの位置合わせ

カメラの位置合わせのガイドライン：

- カメラをしっかりと三脚に取り付け、投影範囲（スクリーン）全体を捉えるように設置します。
- カメラの三脚をドームの床面に配置し、カメラのレンズがドームの天頂を向くようにします。
- カメラの傾きがドームの傾きと一致していることを確認してください。

|             |             |
| ----------- | ----------- |
| 側面から見たカメラ位置 | 天頂から見たカメラ位置 |

- カメラがプロジェクターのレンズよりも下になるよう設置し、カメラがドームスクリーンに影を落とさないようにします。
- 撮影した写真の下部がドームの前方に、上部がドームの後方に対応するように向きを合わせます。

キャリブレーションカメラの位置をドームの上から見た図

> **メモ：** キャリブレーション作業中の動きや振動を避けるために、カメラの三脚はしっかりと安定した水平な床に設置する必要があります。

カメラを設置した後：

1. レンズキャップと光反射防止リングを取り外してください。

   (Remove Lens Cap)

2. USBケーブルを使用してカメラをScreenberryサーバーに接続します。

3. カメラのメモリーカードには、少なくとも1枚のRAW形式の写真を保存する十分な空き容量があることを確認してください。

4. カメラのバッテリーが十分に充電されていることを確認してください。電源アダプターを使用する場合は、カメラを電源コンセントに接続してください。

5. キャリブレーション作業中にスクリーンとカメラの間に障害物が入らないことを確認してください。

> **注意：** 投影された映像全体がカメラの視野内に収まるようにしてください。また、スクリーン上には影が映らないようにしてください。

### 複数カメラのキャリブレーション

Screenberryは複数のカメラを使った自動キャリブレーションも対応しています。
