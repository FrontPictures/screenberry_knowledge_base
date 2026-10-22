<!-- Generated from facts.json by tools/implementation.mjs; edit facts.json. -->
# Display, Render Target and image formats

Source snapshot: **3.5.0 beta, source build 2422**. Static implementation review on 2026-10-22. Runtime verification: **not performed**. Product-owner review: **pending**. Applicability to released 3.4: **not established**.

[Evidence and use rules](README.md) · [All topics](README.md#topics)

## CODE-RENDER-002

**Display position and orientation participate in drawing**

DisplayNode declares Patches and Background Image inputs, a size and position in pixels, an orientation and a Display output. Its draw function checks initialization, chooses an offset depending on whether it is drawing to an image, constructs an orientation transform and determines whether scissoring is needed from the size, offset and stereo mode.

Scope: This is the composition implementation. It does not identify operating-system monitor placement or confirm stereo hardware support.

Source evidence (original source is not bundled):

- `Nodes/MainNodes/Display.cpp`, lines 18–66; SHA-256 `2af071157a75cb835b1e3767be91aa63ff28b686aa2e7198a5b5fb5b1abb93c4`.
- `Nodes/MainNodes/Display.cpp`, lines 82–102; SHA-256 `2af071157a75cb835b1e3767be91aa63ff28b686aa2e7198a5b5fb5b1abb93c4`.
- `Nodes/MainNodes/Display.cpp`, lines 131–175; SHA-256 `2af071157a75cb835b1e3767be91aa63ff28b686aa2e7198a5b5fb5b1abb93c4`.

## CODE-RENDER-003

**Render Target reacts to format and content changes**

RenderTarget declares size, channel count, channel bit depth, stereo mode, MSAA and color/depth-buffer controls. doProcess calls doInit when the listed format controls, external Image Format inputs or licensing state change. In the normal rendering branch it returns early when both processNeedRender and mImageChanged are false.

Scope: The source describes when this node redraws; it is not a measurement of GPU load or a general guarantee that every static graph consumes no rendering time.

Source evidence (original source is not bundled):

- `Nodes/MainNodes/RenderTarget.cpp`, lines 17–75; SHA-256 `01e246aa3b4bb63f1c2f7bb120855628dd2603c7a159dcd746a5e6d871815c6e`.
- `Nodes/MainNodes/RenderTarget.cpp`, lines 126–178; SHA-256 `01e246aa3b4bb63f1c2f7bb120855628dd2603c7a159dcd746a5e6d871815c6e`.

## CODE-VISUAL-001

**Image Format reports properties of its input**

ImageFormat has an Image input and outputs Image Size, Number of Channels, Bits per Channel and Stereoscopic. updateOutputs reads those properties from the input image. A changed input calls doInit; a missing image sets No Image input and deinitializes the node.

Scope: This implementation reports image properties. It does not resize the input or convert its bit depth or color space.

Source evidence (original source is not bundled):

- `Nodes/ImageNodes/ImageFormat.cpp`, lines 8–52; SHA-256 `bb3e3e6586cf0d72802d32766adf616e21a47caf754094e234b2a96d84c8e606`.

## CODE-VISUAL-004

**Image-memory calculation is per buffer**

reImageFormat uses one byte per channel for uint8, two for float16 and four for float32/depth32f, multiplied by the multisample count when applicable. rowSize includes width, channel count and alignment; rgb10a2 has a separate four-byte-per-pixel branch. For uncompressed data memorySize is rowSize times height. At alignment 1 without MSAA, a 3840 × 2160 four-channel buffer is 33,177,600 bytes for uint8 or 132,710,400 bytes for float32.

Scope: The examples are arithmetic from the source formula, not measured GPU allocation. They exclude other buffers and driver overhead.

Source evidence (original source is not bundled):

- `Libs/Reactor/reImageFormat.cpp`, lines 74–96; SHA-256 `114d740c870afb77f44932bf4a9468ece2cef0953b2843f2c567fceb06190448`.
- `Libs/Reactor/reImageFormat.cpp`, lines 98–124; SHA-256 `114d740c870afb77f44932bf4a9468ece2cef0953b2843f2c567fceb06190448`.
- `Libs/Reactor/reImageFormat.cpp`, lines 7–11; SHA-256 `114d740c870afb77f44932bf4a9468ece2cef0953b2843f2c567fceb06190448`.
