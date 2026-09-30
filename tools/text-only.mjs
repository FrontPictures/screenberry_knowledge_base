// Authorized representation migration. It does not grant product verification.
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { root, documents, parser, visit, plain, hash, write, json, formatDocument, cleanMarkdown, YAML } from './lib.mjs';
import { stripImages, bodyDigest } from './illustrations.mjs';

export async function convertToTextOnly({ initializeBaseline = false } = {}) {
  const md = await parser();
  const baselinePath = path.join(root, 'catalog/legacy-baseline.json');
  const oldBaseline = JSON.parse(await fs.readFile(baselinePath, 'utf8').catch(() => '{}'));
  const nextBaseline = { ...oldBaseline };
  const audit = [];
  const allDocs = await documents();
  for (const doc of allDocs) {
    if (doc.meta.presentation?.mode === 'text-only') continue;
    const before = await fs.readFile(path.join(root, doc.path), 'utf8');
    const tree = md.parse(doc.body);
    const codeBefore = [], headingsBefore = [];
    visit(tree, n => { if (['code', 'inlineCode'].includes(n.type)) codeBefore.push(n.value); if (n.type === 'heading') headingsBefore.push(plain(n)); });
    const converted = stripImages(tree, { document: doc.path, language: doc.meta.language });
    const body = cleanMarkdown(md.stringify(converted.tree));
    const roundtrip = md.parse(body), codeAfter = [], headingsAfter = [];
    visit(roundtrip, n => { if (['code', 'inlineCode'].includes(n.type)) codeAfter.push(n.value); if (n.type === 'heading') headingsAfter.push(plain(n)); });
    if (JSON.stringify(codeBefore) !== JSON.stringify(codeAfter)) throw new Error(`Code changed in ${doc.path}`);
    if (JSON.stringify(headingsBefore) !== JSON.stringify(headingsAfter)) throw new Error(`Heading changed in ${doc.path}`);
    if (plain(converted.tree).replace(/\s+/g, '') !== plain(roundtrip).replace(/\s+/g, '')) throw new Error(`Text roundtrip mismatch in ${doc.path}`);
    const briefPath = `illustrations/${doc.path.slice('knowledge/'.length).replace(/\.md$/, '.yaml')}`;
    doc.meta.presentation = { mode: 'text-only', illustrations: converted.figures.length ? briefPath : null, visual_information_review: converted.removed ? 'not-independently-verified' : 'not-applicable' };
    if (converted.figures.length) await write(path.join(root, briefPath), YAML.stringify({
      schema_version: 1, document: doc.path, document_id: doc.meta.id, language: doc.meta.language,
      document_body_sha256: bodyDigest(body), figures: converted.figures
    }, { lineWidth: 0 }));
    const after = formatDocument(doc.meta, body);
    await write(path.join(root, doc.path), after);
    const key = `${doc.meta.variant_id}:${doc.meta.language}`;
    const wasBaseline = oldBaseline[key] === hash(before);
    if (wasBaseline || initializeBaseline) nextBaseline[key] = hash(after);
    audit.push({ document: doc.path, before_sha256: hash(before), after_sha256: hash(after),
      removed_images: converted.removed, guide_briefs: converted.figures.length,
      inline_labels: converted.inlineLabels, externalized_links: converted.links,
      code_fragments_preserved: codeAfter.length, headings_preserved: headingsAfter.length,
      text_roundtrip: true, legacy_baseline_carried_forward: wasBaseline || initializeBaseline });
  }
  if (!audit.length) { console.log('Already text-only; no documents or baselines changed.'); return; }
  await json(path.join(root, 'archive/presentation-migrations/before-text-only-baseline.json'), oldBaseline);
  await json(baselinePath, nextBaseline);
  await json(path.join(root, 'catalog/text-only-conversion.json'), { schema_version: 1, reason: 'User requested text-only knowledge; illustrations reserved for User Guide briefs.',
    documents: audit.length, removed_images: audit.reduce((n, x) => n + x.removed_images, 0),
    guide_briefs: audit.reduce((n, x) => n + x.guide_briefs, 0),
    visual_inspection_performed: false, entries: audit });
  console.log(JSON.stringify({ converted_documents: audit.length, removed_images: audit.reduce((n, x) => n + x.removed_images, 0), guide_briefs: audit.reduce((n, x) => n + x.guide_briefs, 0) }));
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) await convertToTextOnly();
