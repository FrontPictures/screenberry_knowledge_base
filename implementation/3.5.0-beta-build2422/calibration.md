<!-- Generated from facts.json by tools/implementation.mjs; edit facts.json. -->
# Calibration data and image processing

Source snapshot: **3.5.0 beta, source build 2422**. Static implementation review on 2026-10-22. Runtime verification: **not performed**. Product-owner review: **pending**. Applicability to released 3.4: **not established**.

[Evidence and use rules](README.md) · [All topics](README.md#topics)

## CODE-CAL-003

**Geometry calibration depends on Masks data**

When capture is enabled, GeometryJob reads the camera-tuning value from Masks. A negative value emits an error asking for Masks calibration first and throws GEOMETRY_FAILED. The job also loads MaskCropData for each projector and fails if a loaded CropData object is not initialized.

Scope: The camera-tuning check is conditional on capture. No projector or camera calibration was executed in this review.

Source evidence (original source is not bundled):

- `Nodes/CalibratorNodes/Jobs/GeometryJob.cpp`, lines 121–165; SHA-256 `f60bcfa91c897475f5f4ce586dc7e90c66eef13bb290c50fdc9b6337c4bca91d`.

## CODE-REVIEW-001

**GenICam image loading applies two denoise passes**

When mDenoisePar is true, GenICamCameraNode::loadImage applies ReactorWrapper::median1 twice to the loaded image. median1 samples the nine offsets in a 3 × 3 neighborhood and selects the middle value using component-wise comparisons.

Scope: This is the inspected image-loading path. It does not establish noise reduction quality for a camera or every live-preview path.

Source evidence (original source is not bundled):

- `Nodes/CaptureNodes/GenICam/GenICamCameraNode.cpp`, lines 288–305; SHA-256 `6e52bd5dc89c62e40dafd8f3218e5b4c4c7116605d3b627c679350776ed44b0d`.
- `Libs/Reactor/ReactorWrapper.cpp`, lines 1381–1424; SHA-256 `2a142ac7bff95b2ae11c91760e2f0241c0b2026c33659ad412e3a1135ba177bb`.

## CODE-REVIEW-002

**Geometry pattern filling is represented as a fraction**

The parameter currently named Geometry patterns: min filling percent is constructed with default 0.2 and range 0 to 1. ImagePixelData3::getFillingPercent returns pixel count divided by the bounding-box area (width × height). PatternsProcess requires this ratio to exceed minFillingPercent unless processOnlyMainCluster is true.

Scope: For a nonzero bounding-box area, 0.2 represents a ratio of 20%, not the number 20. This is not a recommendation to change the default or proof of behavior for a zero-area region.

Source evidence (original source is not bundled):

- `Nodes/CalibratorNodes/Calibrator.cpp`, lines 430–434; SHA-256 `3f81ecdd2179fe4db56b54bd878dbbb9c81eb057fc02c033bf5232dbdc7d3738`.
- `Nodes/CalibratorNodes/Calibrator.h`, lines 234–237; SHA-256 `3de4efb89060f50a1014aeb588dbeeb09e58b2f98dc652cd4f6a0f0cfcc3d53b`.
- `Nodes/CalibratorNodes/Jobs/GeometryJob.cpp`, lines 1084–1095; SHA-256 `f60bcfa91c897475f5f4ce586dc7e90c66eef13bb290c50fdc9b6337c4bca91d`.
- `Nodes/CalibratorNodes/Jobs/PatternsProcess.cpp`, lines 14–26; SHA-256 `2e3685b1bb2f5bbcdc4950133934d971c48271777dd840336397b139ac0f0920`.
- `Nodes/CalibratorNodes/Jobs/ImagePixelData3.cpp`, lines 201–206; SHA-256 `898fef12bad6afe58407f83df42a815a3af17ffbdf9fb9e68a72f17df0d4cf29`.
- `Nodes/CalibratorNodes/Jobs/PatternsProcess.cpp`, lines 163–174; SHA-256 `2e3685b1bb2f5bbcdc4950133934d971c48271777dd840336397b139ac0f0920`.
