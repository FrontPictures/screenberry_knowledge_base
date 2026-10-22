<!-- Generated from facts.json by tools/implementation.mjs; edit facts.json. -->
# Architecture and source identity

Source snapshot: **3.5.0 beta, source build 2422**. Static implementation review on 2026-10-22. Runtime verification: **not performed**. Product-owner review: **pending**. Applicability to released 3.4: **not established**.

[Evidence and use rules](README.md) · [All topics](README.md#topics)

## CODE-ARCH-001

**Source version and build choices**

The root CMake project declares version 3.5.0 and sets VERSION_IS_BETA to TRUE. It defines separate build options for Server, Panel, Configurator, Benchmark and Media Encoder, and requests C++20. The source build-number file contains 2422.

Scope: These are source declarations. They do not identify an installed executable or establish which optional components were shipped.

Source evidence (original source is not bundled):

- `CMakeLists.txt`, lines 3–12; SHA-256 `367cc0b1e269430839d1cd494c177f1702050059047b217fd3cb01eddca09ed2`.
- `CMakeLists.txt`, lines 29–40; SHA-256 `367cc0b1e269430839d1cd494c177f1702050059047b217fd3cb01eddca09ed2`.
- `CMakeLists.txt`, lines 53–78; SHA-256 `367cc0b1e269430839d1cd494c177f1702050059047b217fd3cb01eddca09ed2`.
- `CMakeLists.txt`, lines 93–93; SHA-256 `367cc0b1e269430839d1cd494c177f1702050059047b217fd3cb01eddca09ed2`.
- `Libs/Version/build_number.txt`, lines 1–1; SHA-256 `f7d804610280c772ae1d527b1d252a3454ae9bf58d9c0cfcfd28104e3bfddbd3`.
