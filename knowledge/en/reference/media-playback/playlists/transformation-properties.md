---
id: guide.media-playback.playlists.transformation-properties
variant_id: guide.media-playback.playlists.transformation-properties.imported-current-guide
title: Screenberry Media Player - A Guide to Transformation Properties
language: en
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
    path: archive/site/content/en/media-playback/playlists/transformation-properties.mdx
    sha256: 3fcb0a805551517857cf30aeaf9955da54938f8b875ab6f827dfa2fd00c9c77b
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/media-playback/playlists/transformation-properties.mdx
  canonical_url: https://help.screenberry.com/en/media-playback/playlists/transformation-properties
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 3fcb0a805551517857cf30aeaf9955da54938f8b875ab6f827dfa2fd00c9c77b
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Media Player - A Guide to Transformation Properties
    description: Discover how to control the position, anchor point, scale, and rotation of media items in Screenberry’s Media Player using Custom Transformation and fitting methods.
    openGraph:
      title: Understanding Transformation Properties in Screenberry Media Player
      description: Learn how to adjust position, scale, anchor point, and rotation of media items in Screenberry Media Player using transformation presets and custom controls.
presentation:
  mode: text-only
  illustrations: illustrations/en/reference/media-playback/playlists/transformation-properties.yaml
  visual_information_review: not-independently-verified
---

# Transformation Properties

Each media item in the **Media Player** has transformation properties that define how it is displayed within the **Media Player** canvas (output image). These include **Position Method**, **Anchor Point**, **Position**, **Scale**, and **Rotation**.

Adjusting these properties allows you to precisely control the media item’s placement, size, and orientation.

## Position Method Presets

When using transformation presets other than **Custom Transformation**, Screenberry automatically adjusts how a media item fits within the **Media Player** canvas based on the selected mode:

- **Stretch**<br>
  Resizes the media item to fill the entire **Media Player** canvas without preserving its aspect ratio. This can distort the image if the media and canvas have different aspect ratios.

- **Fit to Width**<br>
  Scales the media item to match the width of the **Media Player** canvas while preserving its aspect ratio. If the scaled image is shorter than the canvas, uncovered areas remain above and below it; if it is taller, the top and bottom are cropped.

- **Fit to Height**<br>
  Scales the media item to match the height of the **Media Player** canvas while preserving its aspect ratio. If the scaled image is narrower than the canvas, uncovered areas remain on the sides; if it is wider, the sides are cropped.

- **Fit All**<br>
  Scales the media item to fit entirely within the **Media Player** canvas while preserving its aspect ratio. Depending on the aspect ratios, uncovered areas may remain on the sides or above and below the image.

- **Fill All (Crop)**<br>
  Scales the media item to fill the entire **Media Player** canvas while preserving its aspect ratio. Any parts extending beyond the canvas are cropped.

> **Note:** Uncovered areas show the output background and can be transparent when **Transparent Background** is enabled. This applies to **Fit to Width**, **Fit to Height**, and **Fit All**.

These presets provide quick alignment when manual adjustments are not required. For precise control of **Anchor Point**, **Position**, **Scale**, and **Rotation**, including [animation via keyframes](../../../how-to/media-playback/timelines/animation-and-keyframing.md), select **Custom Transformation**.

## Custom Transformation

Selecting **Custom Transformation** gives you full control over the media item’s **anchor point**, **position**, **scale**, and **rotation**. This method is essential when precise layout or animated transformations are required.

### Anchor Point Reposition

The **anchor point** is the internal reference within the media item used for **scaling**, **rotation**, and **positioning**. The **Anchor Point Reposition** control lets you quickly align the anchor point to standard locations within the media item, such as:

- **Center**
- **Corners** (top-left, bottom-right, etc.)
- **Edges** (top-center, middle-left, etc.)

When you click one of the **Anchor Point Reposition** preset buttons, only the anchor point moves inside the media item. The media item itself remains in the same position on the **Media Player** canvas.

### Manual Anchor Point Adjustment

While the **Anchor Point Reposition** presets snap the anchor to predefined locations, the **Anchor Point** fields let you set its position anywhere relative to the center of the media item by entering exact **X** and **Y** values.

- (0.0 px, 0.0 px) represents the center of the media item.

- **Positive values** move the anchor point **right** or **down**; **negative values** move it **left** or **up**.

When you adjust the anchor point manually, the media item shifts to keep the anchor fixed in the same location on the **Media Player** canvas. This lets you place the pivot exactly where you want transformations (like scaling or rotation) to originate.

### Position Adjustment

The **Position** parameter sets the entire media item, along with its anchor point, relative to the **Media Player** canvas.

- (0.0 px, 0.0 px) places the anchor point at the center of the canvas.

- **Positive values** move the media item **right** or **down**; **negative values** move it **left** or **up**.

When you adjust the **Position**, the media item shifts as a whole, preserving the relationship between its content and anchor point.

### Using Position Alignment Buttons

You can also use the **Position Alignment Buttons** to snap the anchor point to standard positions on the **Media Player** canvas, such as **top-center**, **middle-right**, or **bottom-left**.

> **Note:** These buttons are especially useful during layout setup for quickly aligning media items.

### Scale

The **Scale** parameter changes the size of the media item as a percentage of its original dimensions.

- Use **Scale X** and **Scale Y** to resize the item horizontally and vertically.

- Enable **Link Scale** to preserve the aspect ratio — changing one value updates the other proportionally.

- Entering a **negative value** flips the media along the corresponding axis (horizontal or vertical).

- All scaling operations are performed **relative to the current anchor point**, which defines the pivot for the transformation.

### Rotation

The **Rotation** parameter turns around the media item's current anchor point.

- Enter a value in **degrees**.

- **Positive values** rotate the item **clockwise**.

- **Negative values** rotate it **counterclockwise**.

Like scaling, rotation is centered around the anchor point, allowing you to control exactly where the rotation originates.

### How Anchor Point and Position Work Together

The **Anchor Point** and **Position** properties are closely connected, but affect the media in different ways:

- When you use an **Anchor Point Reposition** preset, only the **anchor point** moves **inside the media item**. The media item itself **remains in the same position** on the **Media Player** output.

- When you change the **Anchor Point** values manually, the media item **shifts** to keep the anchor fixed in its current output position.

- When you change the **Position**, the **media item and its anchor point** move **together** on the **Media Player** output.

- Using a **Position** preset places the anchor point at a predefined location on the **Media Player** output and updates the **Position** values accordingly.

#### Example

Let’s walk through a typical transformation flow:

1. Your media item is centered by default, with the anchor point at its center.

2. You click the **top-center Anchor Point Reposition** preset.\
   → The anchor point moves to the top edge of the media item. The media item remains in the same position on the screen. The **Anchor Point Y** value updates to reflect the new internal pivot.

3. You manually adjust the **Anchor Point Y** value.\
   → The media item shifts vertically to keep the anchor point fixed in its screen location. The **Position** values remain unchanged.

4. You click the **top-center Anchor Point preset** again.\
   → The anchor snaps back to the top edge of the media.

5. You click the **top-right Position Alignment** button.\
   → The anchor point moves to the top-right corner of the **Media Player** canvas, and the media item shifts to keep the anchor aligned within the media frame.

## Mini Display

The mini display next to the transformation controls provides real-time visual feedback for:

- **Anchor Point** location

- **Position**

- **Scale**

- **Rotation**

It helps you understand how transformations affect the relationship between the media item and the **Media Player** canvas, making alignment and layout easier to manage.
