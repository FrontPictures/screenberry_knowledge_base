<!-- Generated from facts.json by tools/implementation.mjs; edit facts.json. -->
# 3D scene calculations

Source snapshot: **3.5.0 beta, source build 2422**. Static implementation review on 2026-10-22. Runtime verification: **not performed**. Product-owner review: **pending**. Applicability to released 3.4: **not established**.

[Evidence and use rules](README.md) · [All topics](README.md#topics)

## CODE-3D-003

**Projector brightness calculation and mode-dependent ports**

Projector::getBrightness multiplies Brightness by Brightness Factor divided by 100 and by Stack Count. updateForSceneMode hides Source and disables its port in remapping mode; Mask uses the opposite visibility and port state. ProjectionMapper derives from ProjectorBase and removes the mask input in its constructor.

Scope: This establishes a calculation and visibility rules. It does not establish physical illuminance units, photometric accuracy or the units used by external Mapping Matter data.

Source evidence (original source is not bundled):

- `Nodes/Scene3dNodes/Projector.cpp`, lines 10–46; SHA-256 `a3dfb9bf9d917b16ed9317ee8be0eb5ee6c31903d9a205ef7aee879fb295fae6`.
- `Nodes/Scene3dNodes/Projector.cpp`, lines 63–91; SHA-256 `a3dfb9bf9d917b16ed9317ee8be0eb5ee6c31903d9a205ef7aee879fb295fae6`.
- `Nodes/Scene3dNodes/ProjectionMapper.cpp`, lines 5–10; SHA-256 `e49cb50ca55e42da5b1f3e0137af4371b854aa4d1544ef7dd4c41bcc6153c6a9`.

## CODE-REVIEW-003

**Automatic near-plane distance uses a multiplier**

Camera3D::calcNearDist returns maxDist multiplied by Near Plane Relative Distance in Automatic mode, and Manual Near Plane Distance in Manual mode. The relative-distance parameter is constructed with default 0.001 and range 0.00001 to 0.5.

Scope: For this calculation, 0.01 means 1% of the supplied maxDist. This record does not equate maxDist with the final far-plane distance in every rendering path.

Source evidence (original source is not bundled):

- `Nodes/Scene3dNodes/Camera3D.cpp`, lines 105–121; SHA-256 `fc14e31c936c720c3e89b8765189a21fbb383aa12535e89e9e6ad3d729cd1160`.
- `Nodes/Scene3dNodes/Camera3D.cpp`, lines 432–439; SHA-256 `fc14e31c936c720c3e89b8765189a21fbb383aa12535e89e9e6ad3d729cd1160`.
