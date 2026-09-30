---
id: guide.media-playback.matrix-based-playlists.configuration-of-media-player-outputs
variant_id: guide.media-playback.matrix-based-playlists.configuration-of-media-player-outputs.imported-current-guide
title: ScreenberryのMedia Playerの出力設定 - 設定および管理方法
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
    path: archive/site/content/jp/media-playback/matrix-based-playlists/configuration-of-media-player-outputs.mdx
    sha256: ae696e2d5a362aec8f8ae2a9dfbffa51620b1c0047ee37376b30e0e0aeecc05e
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/jp/media-playback/matrix-based-playlists/configuration-of-media-player-outputs.mdx
  canonical_url: https://help.screenberry.com/jp/media-playback/matrix-based-playlists/configuration-of-media-player-outputs
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: ae696e2d5a362aec8f8ae2a9dfbffa51620b1c0047ee37376b30e0e0aeecc05e
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: ScreenberryのMedia Playerの出力設定 - 設定および管理方法
    description: ScreenberryのMedia Playerで複数の映像出力を設定する方法について説明します。映像の出力数や解像度を設定し、映像表示ノードに接続することで出力設定を行います。
    openGraph:
      title: ScreenberryのMedia Playerの出力設定 - 設定および管理方法
      description: Screenberryで複数の映像出力を設定し管理する方法を順を追って説明します。
translation:
  source_language: en
  source_id: guide.media-playback.matrix-based-playlists.configuration-of-media-player-outputs
  source_revision: null
  status: alignment-unverified
  counterpart: ../../../../en/how-to/media-playback/matrix-based-playlists/configuration-of-media-player-outputs.md
presentation:
  mode: text-only
  illustrations: illustrations/jp/how-to/media-playback/matrix-based-playlists/configuration-of-media-player-outputs.yaml
  visual_information_review: not-independently-verified
---

# Media Playerの出力設定

マトリックス型プレイリストの各行は、プレイリスト内の個々の映像出力に対応しています。**Media Player**ノードはデフォルトで映像出力を１つだけ持つように設定されているため、プレイリストのアクティブな行の数に合わせて追加の映像出力を手動で設定する必要があります。以下の手順に従ってください：

1. **Node Graph**ウィジェットに移動します。
2. マトリックス型プレイリストに対応する**Media Player**ノードを選択して、その設定パネルを開きます。
3. ノードの設定で、**Number of Video Outputs**をマトリックス型プレイリストの操作行数に合わせて設定します。これにより、デフォルトの**Image**出力ピンに加えて、**Image 2**、**Image 3**などの新しい出力ピンが作成されます。
4. さらに、各映像出力の解像度を設定するために、対応するパラメータ（**Image Size**、**Image Size 2**、**Image Size 3**など）を変更することで、必要な解像度に設定することができます。
5. 最後に、出力ピン（**Image**、**Image 2**、**Image 3**など）からリンクを作成し、すべての映像出力のノードグラフ内のルーティングを作成します。これらは通常、各個別の出力に対して表示の設定をさらにカスタマイズするために、対応する**Display**ノードにリンクされます。

これらの手順を完了することで、マトリック型プレイリストの各行に対応する映像出力が**Media Player**ノードに設定され、同期した映像出力が行われます。具体的には、**Output 1**行は**Image**出力ピンに、**Output 2**行は**Image 2**出力ピンに出力されます。
