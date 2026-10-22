<!-- Generated from facts.json by tools/implementation.mjs; edit facts.json or the renderer. -->
# Screenberry implementation reference — 3.5.0 beta, source build 2422

Source snapshot: **3.5.0 beta, source build 2422**. Static implementation review on 2026-10-22. Runtime verification: **not performed**. Product-owner review: **pending**. Applicability to released 3.4: **not established**.

This supplement contains **50 individually scoped facts in 15 topics**, citing **134 source ranges in 66 files**. It is an initial, curated publication of direct implementation findings. It does not publish the entire local research corpus, a complete node catalog, unverified guide drafts or proposed interface wording.

The existing [guide corpus](../../catalog/README.md) and its 3.4 export remain separate. No statement here establishes behavior in a released 3.4 binary. A matching version string alone does not identify the reviewed source contents.

## Evidence and use rules

Each fact was checked against the implementation rather than accepted solely from a comment, UI description or search hit. The fact text intentionally describes a specific method, calculation or control path. Its scope paragraph limits what can be concluded from that evidence. Calculated examples are identified as calculations, not runtime measurements.

The original proprietary source is **not included**. Citations give paths relative to the source root, inclusive one-based line ranges and SHA-256 hashes of the original file bytes. These are locators for authorized source holders, not broken links to files in this repository. Readers without that snapshot can inspect the explanation and provenance but cannot independently reproduce the source review from this repository alone.

Source snapshot ID: **sb-3.5.0-beta-build2422-source-2026-10-21**. The source tree has no recorded Git commit. Its inventory digest is **8638441f84bc93052a868fd48ae063f0aa7befce0f39af1a958202130fd54124**; this is a source-tree digest, not a Git revision. The digest method is recorded in [facts.json](facts.json). This review does not assert that the snapshot can be built on its own.

No Screenberry executable, hardware setup, network integration or physical output was tested. Automated repository checks verify structure, generation, citations and, when the private source is supplied, file hashes/ranges. They do not prove that English prose semantically follows from code. The static review was performed by **Codex**. No human owner or independent product approval is invented: ownership is **unassigned**, product-owner review is **pending**.

When answering, cite the fact ID and this snapshot. Use the guide corpus for released-version instructions. If a question depends on a shipping version, installation, license entitlement or observed output, obtain matching evidence before extending these claims. In particular, this supplement does not settle the source-versus-owner discrepancies about extra widget instances, chooser names or Reset Layout results; it does not publish tentative defect reports as known product defects.

## Topics

- [Architecture and source identity](architecture.md)
- [Projects, saving and recovery](projects.md)
- [Workspaces and layout synchronization](workspaces.md)
- [Node graph processing](graph.md)
- [Media playback and timeline coordinates](playback.md)
- [Media decoding and upload processing](uploads.md)
- [Display, Render Target and image formats](images.md)
- [Calibration data and image processing](calibration.md)
- [3D scene calculations](scene.md)
- [Audio processing and channel counts](audio.md)
- [TouchEngine frame processing](integration.md)
- [JSON API contracts](api.md)
- [Automation and control nodes](automation.md)
- [Frame timers](timing.md)
- [Parameter contracts](parameters.md)

## Reading, search and retrieval

- [Canonical editable facts and provenance](facts.json)
- [Self-contained retrieval records](chunks.jsonl) — each line repeats version, review status, boundaries and citations. Consumers must preserve these fields with the text.
- [Answer-check questions](questions.json) — expected facts and prohibited overclaims; these are repository checks, not executed product scenarios.
- [Repository contribution rules](../../CONTRIBUTING.md)

From the repository root:

~~~sh
pnpm implementation:search --query "workspace"
pnpm implementation:check
node tools/implementation.mjs --check --source-root /path/to/authorized/SB
~~~

Search is explicitly scoped to this snapshot and prints full matching records. It is not a search of the released guide. The standard **pnpm export** profiles continue to read only **knowledge/**; they do not automatically include this supplement. For an explicitly requested implementation corpus, consume this directory's **chunks.jsonl** with its provenance intact.

## Maintenance

Edit **facts.json** and run **pnpm implementation:build**, then **pnpm validate** and **pnpm test**. Review the generated pages and validate against the original source when available. A changed source hash must trigger re-reading; never refresh evidence hashes to silence a failure. A different snapshot requires a separate identity and a deliberate extension of the validator. Promoting a statement to customer-guide or runtime-verified status requires a separate applicability and product review; updating this supplement does not grant that status.
