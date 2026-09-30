import fs from 'node:fs/promises';
import path from 'node:path';
import { root, documents, parser, visit, plain, hash, json, write, YAML } from './lib.mjs';
import { eligible, assertNoOverlap } from './policy.mjs';
import { withIllustrationBriefs } from './illustrations.mjs';
const args = process.argv.slice(2);
const option = (name, fallback) => args.includes(name) ? args[args.indexOf(name) + 1] : fallback;
const config = YAML.parse(await fs.readFile(path.join(root, 'releases.yaml'), 'utf8'));
const target = option('--version', config.default_public_version);
const profile = option('--profile', 'verified-public');
const view = option('--view', 'knowledge');
if (!['knowledge', 'user-guide'].includes(view)) throw new Error('View must be knowledge or user-guide');
const baseline = JSON.parse(await fs.readFile(path.join(root, 'catalog/legacy-baseline.json'), 'utf8'));
const docs = await documents();
assertNoOverlap(docs);
const selected = [];
for (const doc of docs) {
  const text = await fs.readFile(path.join(root, doc.path), 'utf8');
  if (eligible(doc.meta, { target, profile, releases: config.releases, digest: hash(text), baseline })) selected.push({ ...doc, text, sha256: hash(text) });
}
const output = path.join(root, 'dist', `${profile}-${target}-${view}`);
// Fail rather than leaving withdrawn/stale files in an existing export directory.
if (await fs.stat(output).catch(() => null)) throw new Error(`Output already exists: ${output}. Move it aside before exporting a fresh snapshot.`);
const selectedPaths = new Set(selected.map(d => d.path));
const allDocs = new Map(docs.map(d => [d.path, d]));
const md = await parser();
const chunks = [];
let excludedLinks = 0;
for (const doc of selected) {
  const knowledgeTree = md.parse(doc.body);
  let sidecar = null;
  if (view === 'user-guide' && doc.meta.presentation?.illustrations) sidecar = YAML.parse(await fs.readFile(path.join(root, doc.meta.presentation.illustrations), 'utf8'));
  const tree = view === 'user-guide' ? withIllustrationBriefs(knowledgeTree, doc.body, sidecar) : knowledgeTree;
  visit(tree, node => {
    if (!['image', 'link', 'definition'].includes(node.type) || /^(?:[a-z][a-z0-9+.-]*:|#)/i.test(node.url)) return;
    const url = new URL(node.url, `https://kb.local/${doc.path}`);
    const destination = decodeURIComponent(url.pathname.slice(1));
    if (destination.startsWith('assets/')) throw new Error(`Local binary resource is not allowed in text-only export: ${doc.path}`);
    if (allDocs.has(destination) && !selectedPaths.has(destination)) {
      // Do not route through an unfiltered canonical site to excluded knowledge.
      throw new Error(`${doc.path} links to excluded knowledge ${destination}; resolve the cross-version link before publishing.`);
    }
  });
  const exported = (await import('./lib.mjs')).formatDocument(doc.meta, md.stringify(tree));
  doc.export_sha256 = hash(exported);
  await write(path.join(output, doc.path), exported);
  const stack = []; let section = [];
  function flush() {
    if (!section.length) return;
    const text = md.stringify({ type: 'root', children: section });
    chunks.push({ id: `${doc.meta.variant_id}:${doc.meta.language}:${chunks.length}`, document_id: doc.meta.id, path: doc.path, title: doc.meta.title, headings: [...stack], language: doc.meta.language, product_version: target, profile, verification_status: doc.meta.status, role: doc.meta.publication?.role || 'guide', source_url: doc.meta.source?.canonical_url || null, sha256: hash(text), text });
    section = [];
  }
  // Retrieval chunks always contain knowledge only, even in a guide draft.
  for (const node of knowledgeTree.children) {
    if (node.type === 'heading') { flush(); stack.length = node.depth - 1; stack[node.depth - 1] = plain(node); }
    section.push(node);
  }
  flush();
}
const sourceManifest = JSON.parse(await fs.readFile(path.join(root, 'archive/source-manifest.json'), 'utf8'));
await write(path.join(output, 'chunks.jsonl'), chunks.map(x => JSON.stringify(x)).join('\n') + '\n');
await json(path.join(output, 'catalog.json'), selected.map(d => ({ ...d.meta, path: d.path, source_sha256: d.sha256, sha256: d.export_sha256 })));
await write(path.join(output, 'llms.txt'), `# Screenberry knowledge — ${target}\n\nProfile: ${profile}. Cite verification status. Historical release notes are not current behavior.\n\n## Documents\n\n${selected.map(d => `- [${d.meta.title}](${d.path})`).join('\n')}\n`);
await json(path.join(output, 'manifest.json'), { schema_version: 1, product_version: target, profile, view, source_snapshot_commit: sourceManifest.source_revision, corpus_sha256: hash(selected.map(d => d.path + ':' + d.export_sha256).join('\n')), documents: selected.length, chunks: chunks.length, assets: 0, excluded_links: excludedLinks, documents_manifest: selected.map(d => ({ path: d.path, sha256: d.export_sha256 })) });
console.log(JSON.stringify({ output, documents: selected.length, chunks: chunks.length, excluded_links: excludedLinks }));
