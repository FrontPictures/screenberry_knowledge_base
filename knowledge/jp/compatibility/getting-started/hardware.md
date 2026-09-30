---
id: guide.getting-started.hardware
variant_id: guide.getting-started.hardware.imported-current-guide
title: Screenberryのハードウェア要件及び最適化方法
language: ja
kind: compatibility
status: in_review
owner: unassigned
applies_to:
  from: null
  until_exclusive: null
verified_in: []
last_verified: null
evidence:
  - type: existing-guide
    path: archive/site/content/jp/getting-started/hardware.mdx
    sha256: bc8db877f997b504340ebf394394563e91cc6b01b548b6843311f199d9ff0ce4
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/getting-started/hardware.mdx
  canonical_url: https://help.screenberry.com/jp/getting-started/hardware
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: bc8db877f997b504340ebf394394563e91cc6b01b548b6843311f199d9ff0ce4
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryのハードウェア要件及び最適化方法
    description: Screenberryを理想的なパフォーマンスで活用するためのハードウェア要件、システム仕様やグラフィックス設定、映像や音声出力の設定などについて説明します。
    openGraph:
      title: Screenberryのハードウェア要件及び最適化方法
      description: Screenberryでベストパフォーマンスを出すためのハードウェア要件と設定方法を説明します。
translation:
  source_language: en
  source_id: guide.getting-started.hardware
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/compatibility/getting-started/hardware.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/compatibility/getting-started/hardware.yaml
  visual_information_review: not-independently-verified
---

# ハードウェア要件

|       | 最低要件                                                    | 最適要件                                      |
| ----- | ------------------------------------------------------- | ----------------------------------------- |
| OS    | Windows® 10 最新のサービスパックを搭載した64ビット版                       | Windows® 10 最新のサービスパックを搭載した64ビット版         |
| プロセッサ | Intel® Core™ / AMD™ デュアルコアプロセッサ                         | Intel® Core™ / AMD™ クアッドコアプロセッサ           |
| ビデオ   | NVIDIA® GeForce® / AMD™ Radeon™ 2 GB VRAM OpenGL 3.3 対応 | NVIDIA® GeForce® / AMD™ Radeon™ 6 GB VRAM |
| メモリ   | 8 GB RAM                                                | 16 GB RAM                                 |
| 入力    | キーボードとマウス                                               | キーボードとスクロールホイール付きのマルチボタンマウス               |

> **注意：** 最適なハードウェア仕様は、現在のシステムセットアップの要件によって決まります。これには、映像出力および映像入力デバイスの数、出力解像度などが含まれます。要件が高いほど、最適なパフォーマンスを維持するためにハードウェアへの要求も高くなります。

## ライセンスドングル

Screenberry Serverを実行するにはライセンスドングルが必要であり、Media Serverコンピュータの利用可能なUSBポートに挿入する必要があります。

_ライセンスドングル_

> **Note:**
>
> **重要：** ライセンスドングルなしでScreenberry Serverを使用することもできます。ただしこの場合、Screenberryはデモモードで動作します。デモモードでは、サーバーの映像出力ウィンドウにロゴが表示されます。

## ネットワーク

操作用端末はEthernet経由でメディアサーバーに接続する必要があります。Wi-Fiネットワーク接続も可能ですが、推奨はされません。

## グラフィックスカード

メディアサーバーの映像出力を可能にするには、OpenGL 3.3をサポートするグラフィックスカードが必要です。

### グラフィックスカードの設定

マルチディスプレイのセットアップでは、一部のグラフィックスカードは複数のディスプレイに渡って出力映像を展開することができます。この機能はすべてのグラフィックスカードではサポートされておらず、メーカーによって異なる名前が付けられています。詳細については、各メーカーのドキュメントやウェブサイトを参照してください。

| **メーカー** | **製品**   | **機能名**   |
| -------- | -------- | --------- |
| Nvidia   | GeForce  |           |
| Quadro   | Surround |           |
| Mosaic   |          |           |
| AMD      | Radeon   | Eyefinity |

最適なパフォーマンスを得るために、以下のグラフィックスカードの設定を使用してください：

- **電源管理**を**最大パフォーマンス**に設定してください。
- **映像出力のダイナミックレンジ**を**フル**に設定してください。

## 出力デバイス

Screenberryはプロジェクター、LCD、LED、プラズマディスプレイ、その他グラフィックスカードでサポートされる様々な映像表示デバイスに映像を出力することができます。映像表示デバイスは、グラフィックスカードに直接接続するか、ビデオウォールコントローラ（グラフィックス拡張デバイス）を介して接続することができます。出力デバイスの数は、ハードウェアの能力と構成によって異なります。

## オーディオ出力

メディアサーバーは、MADIおよびDante® インターフェースを介して最大64チャンネルのマルチチャンネルオーディオ構成をサポートし、ASIO、WASAPI、およびWINMMプロトコルを使用してモノラル、ステレオ、5.1、または7.1の出力を選択することができます。

## 映像入力デバイス

Screenberryは映像入力デバイスとしてDatapath Vision、Blackmagic DeckLink、Deltacast、Magewellなどのキャプチャカードをサポートしています。

## ハードウェアドライバ

グラフィックスカードおよびキャプチャカードには、各メーカーが提供するソフトウェアドライバが必要です。

## メディアサーバーの最適化

### 自動更新の無効化

Windowsはバックグラウンドで自動的に更新をダウンロードおよびインストールします。システムを最新の状態に保つことは推奨されますが、自動更新はScreenberryのパフォーマンスに干渉する可能性があり、再生の問題を引き起こすことがあります。自動更新はWindowsの設定で簡単に無効にすることができます。
Windows 10の場合（バージョンによって変わる場合があります）：

1. **コントロールパネル** > **更新とセキュリティ** > **サービス**に移動します。
2. **Windows Update**を検索します。
3. サービスの名前を右クリックし、**プロパティ**をクリックします。
4. **起動の種類**のドロップダウンリストで**無効**を選択します。

> **注意：** 自動更新が無効にされると、Windowsは更新をダウンロードおよびインストールしなくなります。セキュリティ上の理由から、定期的に更新を再有効化し、利用可能なシステム更新を手動でインストールすることをお勧めします。

### 自動通知の無効化

Windowsの通知表示は、特に本番上映中に表示されることは望ましくありません。Windows 10で通知をオフにするには（バージョンによって変わる場合があります）：

1. **スタートメニュー** > **設定** > **システム**をクリックします。
2. **通知とアクション**を選択します。
3. 通知をオフにします。
