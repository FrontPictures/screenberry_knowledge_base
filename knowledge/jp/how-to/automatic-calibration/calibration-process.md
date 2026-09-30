---
id: guide.automatic-calibration.calibration-process
variant_id: guide.automatic-calibration.calibration-process.imported-current-guide
title: Screenberryによる自動キャリブレーションの流れ
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
    path: archive/site/content/jp/automatic-calibration/calibration-process.mdx
    sha256: a64a79b53c8a52c002d8a64d7874af56ced4f2b534d0abc7799315b0dc71e90c
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/automatic-calibration/calibration-process.mdx
  canonical_url: https://help.screenberry.com/jp/automatic-calibration/calibration-process
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: a64a79b53c8a52c002d8a64d7874af56ced4f2b534d0abc7799315b0dc71e90c
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberryによる自動キャリブレーションの流れ
    description: 自動キャリブレーションの工程について、プリセットの選択やプロジェクター・カメラの準備、投影エリアの調整方法やキャリブレーションの各段階について説明します。
    openGraph:
      title: Screenberryによる自動キャリブレーションの流れ
      description: 自動キャリブレーションの工程について、準備から実行まで順を追って説明します。
translation:
  source_language: en
  source_id: guide.automatic-calibration.calibration-process
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../en/how-to/automatic-calibration/calibration-process.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/automatic-calibration/calibration-process.yaml
  visual_information_review: not-independently-verified
---

# キャリブレーション作業

## 自動キャリブレーションのプリセット

**Calibrator Wizard**ウィジェット（**Window** > **Calibrator Wizard**）には、3つのキャリブレーションのプリセットがあります：

- **Geometry**キャリブレーションは、_歪み補正_　および　_エッジブレンド_　を行います。通常、プロジェクターごとに約30秒かかり、**Mask**、**Geometry**、**Blend**のキャリブレーション段階が含まれます。
- **Geometry+Intensity**キャリブレーションは、_歪み補正_、_エッジブレンド_、および _黒と白のレベル補正_ を提供します。通常、プロジェクターごとに約1.5分かかり、**Mask**、**Geometry**、**Blend**、**Intensity**のキャリブレーション段階が含まれます。
- **Geometry+Intensity+Gamma**キャリブレーションは、すべての**標準**キャリブレーション機能に加えて、ブレンド内の画像の色の均一性を確保するための _ガンマ補正_ を行います。通常、約15〜30分かかり、**Mask**、**Geometry**、**Blend**、**Color**、**Intensity**のキャリブレーション段階が含まれます。

> **メモ：** 最初の**Geometry+Intensity**および**Geometry+Intensity+Gamma**のキャリブレーションは、カメラの黒レベル補正キャリブレーションのために遅いシャッタースピードでの撮影が必要なため、より長い時間がかかる場合があります。

> **メモ：** **Gamma Correction** のキャリブレーション段階が完了すると、ガンマ補正マップはLUTテーブルに保存され、以降の **Geometry** と **Geometry+Intensity** のキャリブレーションにも適用されます。

> **Note:**
>
> **メモ：** **Geometry+Intensity+Gamma** プリセットは、Brilliant Colorが有効なDLPシングルチッププロジェクターを使用している場合にのみ必要です。このキャリブレーションは、初期設定時または以下のいずれかの場合に必要です：
>
> - プロジェクターランプが長時間使用された後に交換された場合。
> - プロジェクター間のブレンドに目立つ色ズレが現れた場合。
> - プロジェクターのカラーモード（プレゼンテーション（ゲーム、PC）、シネマ、sRGB など）が変更された場合。

## プロジェクターとカメラの位置の確認

キャリブレーションプリセットが選択されると、Screenberryが自動的にテスト写真を撮影します。

カメラが接続されていないか正常に動作していない場合は、**エラー**メッセージが表示されます。

テスト写真に基づいて、必要に応じて以下の調整を行います：

- カメラの回転と傾きの修正
- 投影される映像の重なり具合を変えるためのプロジェクターの位置調整
- カメラの位置とフォーカスの修正

調整が完了したら、**Retake Photo**(Retake Photo Button)ボタンを押して再度テスト写真を撮影し、必要に応じてさらに調整を行ってください。この手順を繰り返し、カメラと投影レイアウトが要件に合うようにセットアップしてください。

## キャリブレーション投影エリアの定義

投影エリアの外にあるオブジェクト（光源、トラスなど）は光を反射または放射することがあり、その結果、キャリブレーションの幾何学的歪みや黒レベル補正、明るさのバランスに影響を与える可能性があります。そのため、投影エリアを正確に定義することが重要です。指定されたエリア内のものはキャリブレーションされ、外側のものは無視されます。

**Calibration Area**ドロップダウンメニューを開いて、3つの画面エリア設定モードのうち1つを選択してください：

- **Automatic**： キャリブレーションパターンを使用して、**Calibrator Wiard**が投影エリアの境界を自動的に識別します。
- **Manual**（おすすめ）： このモードでは、ユーザーが投影エリアのより正確な境界形状を手動で定義することができます。これによって、プロジェクションでカバーすべきでない望ましくない領域を除外することができ、キャリブレーションの品質が大幅に向上します。

マスクを調整するには、以下の手順を実行します：

- **Bounding Box**モードでは、ハンドルをドラッグしてマスクの大きさを調整します。
- **Circular**モードでは、カーブ上のハンドルをドラッグしてマスクの形状を微調整します。このモードに切り替えるには、**Bounding Box Off**チェックボックス(Bounding Box Off Checkbox)を選択します。

  | (Bounding Box Mode) | (Circular Mode) |
  | ------------------- | --------------- |
  | **Bounding Box**モード | **Circular**モード |

より正確な調整をするには、マウスのスクロールホイールを使用して表示エリアを拡大縮小したり、移動したりします（ズームするにはスクロールし、パンするには押し続けます）。または、右上隅にある**Zoom**(Zoom Icon)ボタンと**Pan**(Pan Icon)ボタンをクリックしてマウスをドラッグすることでも操作できます。

マスクをデフォルトの状態にリセットするには、**Reset Calibration Area**(Reset Calibration Area Button)ボタンを押します。

> **メモ：** ユーザーによって定義されたマスク設定は自動的に保存され、次回のキャリブレーションセッションで読み込まれます。

- **Full Camera Frame**：このモードでは、**Calibrator Wizard**が自動的に撮影された写真全体を投影領域と認識し、コンテンツをこの枠内に収まるように配置します。

## キャリブレーションの実行

キャリブレーション投影エリアを定義できたら、**Start \[キャリブレーションプリセット]**(Start Button)ボタンを押してキャリブレーションを開始します。キャリブレーションの作業中は、**Calibrator Wizard**がキャリブレーションの進行状況バー、現在のキャリブレーション段階、およびスクリーンに投影されたキャリブレーションパターンの写真を表示します。

キャリブレーション作業は、**Abort**(Abort Button)ボタンを押すことで中断できます。**Abort**ボタンはキャリブレーション中はアクティブな状態であり、キャリブレーション作業が正常に完了すると非アクティブになります。

キャリブレーション作業が完了したら、**Finish**(Finish Button)ボタンを押してください。**Finish**ボタンはキャリブレーション作業中は非アクティブであり、キャリブレーションが完了するとアクティブになります。

> **Note:**
>
> **重要：** 正確なキャリブレーション結果を得るために、キャリブレーション作業中は以下の点に留意してください：
>
> - プロジェクターの投影を遮る物体や人物が存在しないようにしてください。もしキャリブレーション中に人員が必要な場合は、投影されている範囲よりも低い高さで、カメラの視野範囲外にとどまっている必要があります。
> - ドーム内には余計な光源が存在しないようにしてください。ランプ、モニター、携帯電話の画面などはオフにするか、最低限の明るさに設定してください。

## 自動キャリブレーションの段階

1. **Mask**の段階では、各プロジェクターの投影領域を判別するために、黒と白の線のパターンが投影されます。

   | (Mask1)    | (Mask2) |
   | ---------- | ------- |
   | 黒と白の線のパターン | 結果のマスク  |

2. **Geometry**の段階では、各プロジェクターの変形マップを生成するために、一連の点群パターンが投影されます。

   | (Geometry1)  | (Geometry2)       |
   | ------------ | ----------------- |
   | ジオメトリの点群パターン | 生成されたジオメトリーの変形マップ |

3. **Blend**の段階では、各プロジェクターの輝度のグラデーションを生成して、投影の重なる領域でのスムーズで均一な輝度に調整します。

   | (Blend1)          | (Blend2)          |
   | ----------------- | ----------------- |
   | プロジェクター＃1のブレンドマップ | プロジェクター＃2のブレンドマップ |

4. **Gamma Correction**の段階では、DLPシングルチッププロジェクターで、ブリリアントカラーなどの強調されたガンマを設定した場合に生じる非線形のガンマ歪みによる色や輝度の変化を補正します。一連の色パターンが投影され、使用しているプロジェクターモデル用のルックアップテーブル（LUT）が生成されます。

   (Colors)

   ガンマ補正に使用される色のパターンの例

   > **メモ：** **ガンマ補正**のキャリブレーション段階は、初期セットアップ、プロジェクターランプの交換後、または長期使用の結果、投影間のブレンドに目立つ色/明るさの違いが生じてきた場合に必要です。これは、**赤**、**緑**、**青**のテストパターンを使用して確認できます。

5. **Intensity**の段階では、プロジェクター間の輝度の違いを均等化するために、低輝度（暗い）および高輝度（明るい）範囲でのピクセル単位の輝度ムラの調整のために使用されます。

   | (Int1)     | (Int2)     |
   | ---------- | ---------- |
   | 黒レベル補正の適用前 | 黒レベル補正の適用後 |

   | (Int3)     | (Int4)     |
   | ---------- | ---------- |
   | 白レベル補正の適用前 | 白レベル補正の適用後 |
