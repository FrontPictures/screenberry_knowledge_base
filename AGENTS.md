# Working with Screenberry knowledge

- Read README.md, releases.yaml and catalog/README.md first.
- Keep knowledge text-only. Screenshots supplied by the user are evidence for understanding; describe observed labels, states, actions and results in prose. Do not store image/GIF binaries by default.
- If prose explains the behavior sufficiently, omit the image and any illustration task. Do not infer hidden behavior from a static screenshot.
- Illustrations belong only to User Guide preparation: store optional title, caption, what-to-show and placement in illustrations/. Exclude these editorial drafts from factual retrieval.
- Imported illustration briefs were derived from text and alt labels, not from visual inspection. They are optional and require review; never claim their visual content has been fully captured.
- Default public product version is 3.4; 3.5 is development. Never infer applicability from file modification dates.
- Search knowledge/ only for answers. archive/ preserves evidence and site source, not a second active corpus.
- Imported in_review records are not runtime-verified. Use the explicit legacy-guide-3.4 profile for existing-guide questions and disclose this evidence level.
- Do not use historical release notes as current behavior without version context. Keep legal content separate from product instructions.
- Cite the document, section, product version and source URL when answering. Ask when missing version or environment changes the answer.
- Preserve all English and Japanese content. Japanese language code is ja, directory/URL segment remains jp.
- For new facts require evidence, owner, explicit applicability and review. Unknown facts remain questions.
- Do not invent parameters, defaults, limitations, translations or verification dates.
- Do not edit archive/ or automatically reset catalog/legacy-baseline.json to admit changed content.
- The approved text-only representation migration re-bound the legacy baseline once, with before/after hashes in catalog/text-only-conversion.json. Routine edits still require review.
- Run pnpm validate and pnpm test after changes. Verify Markdown links and code examples.
- Source snapshot .env files and private .local materials are intentionally excluded.
