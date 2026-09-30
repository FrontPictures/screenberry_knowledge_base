---
id: guide.automatic-calibration.calibration-process
variant_id: guide.automatic-calibration.calibration-process.imported-current-guide
title: Screenberry Calibration Process - A Detailed Step-by-Step Overview
language: en
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
    path: archive/site/content/en/automatic-calibration/calibration-process.mdx
    sha256: 4a571a6d9dcd8a0835de55568c381166294af50cfd79ffc4b7abd7f1d2546a89
    scope: Imported text; not independent product verification
aliases: []
related: []
publication:
  profile: legacy-guide-3.4
  product_version: "3.4"
  basis: Snapshot of existing current guide; applicability not independently verified
  role: guide
source:
  path: content/en/automatic-calibration/calibration-process.mdx
  canonical_url: https://help.screenberry.com/en/automatic-calibration/calibration-process
  git_commit: 8acf5a3a7526c3013fc44f1dba0b25f88343e745
  sha256: 4a571a6d9dcd8a0835de55568c381166294af50cfd79ffc4b7abd7f1d2546a89
  imported_at: 2026-09-30T14:15:19.585Z
  frontmatter:
    title: Screenberry Calibration Process - A Detailed Step-by-Step Overview
    description: Understand the Screenberry automatic calibration process, including calibration presets, projector and camera setup, defining projection areas, and the stages of calibration.
    openGraph:
      title: The Complete Calibration Process in Screenberry Explained
      description: Step-by-step overview of the entire calibration process in Screenberry, from setup to execution.
presentation:
  mode: text-only
  illustrations: illustrations/en/how-to/automatic-calibration/calibration-process.yaml
  visual_information_review: not-independently-verified
---

# Calibration Process

## Automatic Calibration Presets

The **Calibrator Wizard** widget (**Window** > **Calibrator Wizard)** offers three calibration presets:

- **Geometry** calibration provides _geometry alignment_ and _edge blending_. It normally takes about 30 seconds per projector and includes the **Masks**, **Geometry,** and **Blends** calibration stages.
- **Geometry + Intensity** calibration provides _geometry alignment,_ _edge blending,_ and _black and white level compensation._ It normally takes about 1.5 minutes per projector and includes the **Masks**, **Geometry,** **Blends,** and **Intensity** calibration stages.
- **Geometry + Intensity + Gamma** calibration has all the **Standard** calibration features with the addition of _gamma correction_ to ensure image color uniformity within blends. It usually takes about 15-30 minutes and includes the **Masks**, **Geometry,** **Blends, Colors,** and **Intensity** calibration stages.

> **Note:** The initial **Geometry + Intensity** and **Geometry + Intensity + Gamma** calibration may take longer as more pictures at a slow shutter speed should be taken for automatic adjustment of the camera for black calibration.

> **Note:** Once the **Gamma Correction** calibration stage is completed, the gamma correction maps are stored in the LUT tables and applied every time that the **Geometry** and **Geometry + Intensity** calibrations are run.

> **Note:** The **Geometry + Intensity + Gamma** preset is required only if you are using DLP single-chip projectors with Brilliant Color enabled. This calibration is required for the initial setup, or in any of the following cases:
>
> - After the projector lamps have been replaced following extensive use.
> - When visible color shifts in the blends between projections become apparent.
> - After the projector color mode (Presentation (Game, PC), Cinema, sRGB, etc.) had been changed.

## Checking Projectors and Camera Positioning

When the calibration preset is selected, the system automatically takes a test photo.

If the camera is not connected or not functioning properly, an **Error** message will appear.

Based on the test photo, adjustments can be made, if necessary, to:

- Camera rotation and tilt.
- The positioning of projectors to change how projected images overlap.
- The positioning and focus of the camera.

After adjustments are made, press the **Retake Photo** button  to take another test photo. Make further adjustments if necessary. Repeat these steps until the camera and projection layout are set up as required.

## Defining the Calibration Projection Area

The objects outside the projection area (light sources, trusses, etc) can reflect or emit light and, thus affect the calibration results — distorting calibration geometry or influencing black level compensation and brightness balance. Therefore, it is important to precisely define the projection area — anything inside the specified area is calibrated while everything outside is ignored.

Open the **Calibration Area** dropdown menu to select one of three screen area setting modes:

- **Automatic**. Using the calibration patterns, the **Calibration Wizard** identifies the borders of the projection area automatically.
- **Manual** (recommended). In this mode, a user can manually define a more precise bounding shape for the projection area. This approach significantly improves calibration quality by excluding undesired areas that should not be covered by the projection.

  To adjust the mask, do the following:

  - In **Bounding Box** mode, scale the mask by dragging the handles.
  - In **Circular** mode, apply fine adjustments to the mask by dragging the handles on the curve. You can switch to this mode by selecting the **Bounding Box Off** checkbox.

    |                       |                   |
    | --------------------- | ----------------- |
    | **Bounding Box** mode | **Circular** mode |

For more adjustment precision, zoom and pan the view by using the mouse scroll wheel (scrolling it to zoom, and holding it to pan) or by clicking the **Zoom** (Zoom Icon) and **Pan** (Pan Icon) buttons in the top right corner and moving the mouse.

To reset the mask to its default state, press the **Reset Calibration Area** button.

> **Note:** The mask settings defined by the user are saved automatically, and loaded during the next calibration session.

- **Full Camera Frame**. In this mode, the **Calibration Wizard** automatically recognizes the entire photo frame as a projection area and positions the content to fit within the borders of the test photo.

## Running Calibration

Once the calibration projection area is defined, press the **Start (Selected Calibration Preset)** button  to start the calibration. During calibration, the **Calibrator Wizard** displays the calibration progress bar, the current calibration stage, and photos of the calibration patterns projected on the screen.

The calibration process can be interrupted by pressing the **Abort** button. The **Abort** button stays active during calibration and deactivates once the calibration process is finished successfully.

Press the **Finish** button  when the calibration process is completed. The **Finish** button is inactive during the calibration process and activates when calibration is completed.

> **Important:** To achieve the best calibration results, during the calibration process:
>
> - No object or person should obstruct the projectors’ light beams. If during the calibration the presence of personnel is required, they must remain below the projection line and out of camera view range.
> - No light sources should be present in the dome. Lamps, monitors, phone screens, etc. should be turned off or, at the very least, set to minimum brightness.

## Stages of Automatic Calibration

1. During the **Masks** stage, a series of black and white line patterns are generated to define a projection area for each projector.

   | (Mask1)                      | (Mask2)        |
   | ---------------------------- | -------------- |
   | Black and white line pattern | Resulting mask |

2. During the **Geometry** stage, a series of blob patterns is projected to generate the displacement maps for each projector.

   | (Geometry1)            | (Geometry2)                         |
   | ---------------------- | ----------------------------------- |
   | Geometry pattern blobs | Generated geometry displacement map |

3. The **Blends** stage is used to generate brightness gradients for each projector to enable a smooth and even transition for the overlapping areas between projections.

   | (Blend1)               | (Blend2)               |
   | ---------------------- | ---------------------- |
   | Projector #1 blend map | Projector #2 blend map |

4. The **Gamma Correction** stage is used to compensate for visible color/brightness shifts caused by non-linear gamma distortions that can occur when color modes with “boosted gamma” (like Brilliant Color) are set on DLP single-chip projectors. A series of color patterns are projected, and as a result, a Look Up Table (LUT) for a specific projector model is generated.

   (Colors)

   Example of color patterns used for Gamma Correction

   > **Note:** The **Gamma Correction** calibration stage is required for the initial setup, after projector lamp replacements, or following extensive use, when visible color/brightness shifts in the blends between projections become apparent, which can be checked by using the **Red**, **Green**, **Blue** test patterns.

5. The **Intensity** stage is used to adjust the brightness in low (dark) and high (bright) intensity ranges to equalize the brightness levels between projections.

   | (Int1)                          | (Int2)                         |
   | ------------------------------- | ------------------------------ |
   | Before Black Level Compensation | After Black Level Compensation |

   | (Int3)                    | (Int4)                   |
   | ------------------------- | ------------------------ |
   | Before Brightness Balance | After Brightness Balance |
