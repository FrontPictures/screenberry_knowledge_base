import fs from 'node:fs/promises';
import path from 'node:path';
import { root, documents, walk, parser, dependency, visit, plain, hash, json, contained, YAML } from './lib.mjs';
import { version, compare, assertNoOverlap } from './policy.mjs';
import { bodyDigest, withIllustrationBriefs } from './illustrations.mjs';
const docs = await documents();
const md = await parser();
const { default: Slugger } = await dependency('github-slugger');
const errors = [], warnings = [];
const fail = message => errors.push(message);
const schema = JSON.parse(await fs.readFile(path.join(root, 'schemas/document.schema.json'), 'utf8'));
const illustrationSchema = JSON.parse(await fs.readFile(path.join(root, 'schemas/illustration.schema.json'), 'utf8'));
// Validates the JSON Schema vocabulary used by this repository's schemas.
// Deliberately rejects unknown validation keywords rather than ignoring them.
function check(data, spec, location) {
  const supported = new Set(['$schema', '$id', 'title', 'description', 'type', 'required', 'properties', 'items', 'enum', 'const', 'pattern', 'minLength', 'minItems', 'additionalProperties']);
  for (const key of Object.keys(spec)) if (!supported.has(key)) throw new Error(`Unsupported schema keyword ${key}; extend validator before extending schemas`);
  const type = data === null ? 'null' : Array.isArray(data) ? 'array' : typeof data;
  if (spec.type && ![spec.type].flat().includes(type) && !(spec.type === 'integer' && Number.isInteger(data))) return fail(`${location}: expected ${spec.type}, got ${type}`);
  if (spec.enum && !spec.enum.includes(data)) fail(`${location}: invalid enum value ${data}`);
  if ('const' in spec && data !== spec.const) fail(`${location}: incorrect constant`);
  if (typeof data === 'string' && ((spec.pattern && !new RegExp(spec.pattern).test(data)) || (spec.minLength && data.length < spec.minLength))) fail(`${location}: invalid string`);
  if (Array.isArray(data)) {
    if (spec.minItems && data.length < spec.minItems) fail(`${location}: too few items`);
    if (spec.items) data.forEach((value, i) => check(value, spec.items, `${location}[${i}]`));
  }
  if (type === 'object') {
    for (const key of spec.required || []) if (!(key in data)) fail(`${location}: missing ${key}`);
    for (const [key, value] of Object.entries(data)) {
      if (spec.properties?.[key]) check(value, spec.properties[key], `${location}.${key}`);
      else if (spec.additionalProperties === false) fail(`${location}: unknown property ${key}`);
    }
  }
}
const index = new Map(), variants = new Set();
let illustrationBriefs = 0;
for (const doc of docs) {
  const m = doc.meta;
  check(m, schema, doc.path);
  if (!doc.body.trim()) fail(`${doc.path}: empty body`);
  if (m.applies_to?.from) version(m.applies_to.from);
  if (m.applies_to?.until_exclusive && (!m.applies_to.from || compare(m.applies_to.from, m.applies_to.until_exclusive) >= 0)) fail(`${doc.path}: invalid applicability interval`);
  if (m.status === 'verified' && (!m.last_verified || !m.verified_in.length || !m.evidence.length || m.owner === 'unassigned')) fail(`${doc.path}: verified requires owner, evidence, version and verification date`);
  const key = `${m.variant_id}:${m.language}`;
  if (variants.has(key)) fail(`Duplicate variant ${key}`);
  variants.add(key);
  const tree = md.parse(doc.body), slugger = new Slugger(), anchors = new Set();
  visit(tree, n => { if (n.type === 'heading') anchors.add(slugger.slug(plain(n))); });
  index.set(doc.path, { tree, anchors });
  if (m.presentation?.mode !== 'text-only') fail(`${doc.path}: text-only presentation is required`);
  visit(tree, n => {
    if (n.type === 'image' || (n.type === 'html' && /<(img|video|audio|iframe)\b/i.test(n.value))) fail(`${doc.path}: embedded media is not allowed`);
  });
  if (m.presentation?.illustrations) {
    const sidecar = YAML.parse(await fs.readFile(contained(root, m.presentation.illustrations), 'utf8'));
    check(sidecar, illustrationSchema, m.presentation.illustrations);
    if (sidecar.document !== doc.path || sidecar.document_id !== m.id) fail(`${doc.path}: mismatched illustration document`);
    if (sidecar.document_body_sha256 !== bodyDigest(doc.body)) fail(`${doc.path}: stale illustration placement`);
    for (const f of sidecar.figures || []) {
      for (const key of ['id', 'title', 'caption', 'show', 'status']) if (!f[key]) fail(`${doc.path}: incomplete illustration brief ${key}`);
    }
    try { withIllustrationBriefs(tree, doc.body, sidecar); } catch (e) { fail(e.message); }
    illustrationBriefs += sidecar.figures?.length || 0;
  }
  for (const evidence of m.evidence) {
    if (evidence.path) {
      const bytes = await fs.readFile(contained(root, evidence.path)).catch(() => null);
      if (!bytes || (evidence.sha256 && hash(bytes) !== evidence.sha256)) fail(`${doc.path}: invalid evidence ${evidence.path}`);
    }
  }
}
try { assertNoOverlap(docs); } catch (e) { fail(e.message); }
let localLinks = 0, images = 0;
for (const doc of docs) {
  const nodes = [];
  visit(index.get(doc.path).tree, n => { if (['image', 'link', 'definition'].includes(n.type)) nodes.push(n); });
  for (const node of nodes) {
    if (node.type === 'image') images++;
    if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(node.url)) continue;
    const url = new URL(node.url, `https://kb.local/${doc.path}`);
    const destination = decodeURIComponent(url.pathname.slice(1));
    localLinks++;
    const resolved = contained(root, destination);
    if (!await fs.stat(resolved).catch(() => null)) { fail(`${doc.path}: missing link ${node.url}`); continue; }
    if (url.hash && index.has(destination) && !index.get(destination).anchors.has(decodeURIComponent(url.hash.slice(1)))) warnings.push({ type: 'source-anchor-needs-review', source: doc.path, target: node.url });
  }
}
// Check README/category/catalog links as well, not just the imported corpus.
for (const file of (await walk(root, { skip: ['node_modules', 'archive', 'dist', '.restored-site'] })).filter(p => p.endsWith('.md') && !index.has(path.relative(root, p).split(path.sep).join('/')))) {
  const nodes = []; visit(md.parse(await fs.readFile(file, 'utf8')), n => { if (n.type === 'link') nodes.push(n); });
  for (const node of nodes) {
    if (/^(?:[a-z][a-z0-9+.-]*:|#)/i.test(node.url)) continue;
    const destination = path.resolve(path.dirname(file), decodeURIComponent(node.url.split(/[?#]/)[0]));
    if (!await fs.stat(destination).catch(() => null)) fail(`${path.relative(root, file)}: missing link ${node.url}`);
  }
}
const sourceMap = JSON.parse(await fs.readFile(path.join(root, 'catalog/source-map.json'), 'utf8'));
if (sourceMap.length !== docs.length) fail('Source mapping and document counts differ');
for (const entry of sourceMap) if (!index.has(entry.path)) fail(`Missing migrated document ${entry.path}`);
const manifest = JSON.parse(await fs.readFile(path.join(root, 'archive/source-manifest.json'), 'utf8'));
for (const file of await walk(root, { skip: ['node_modules', 'dist', '.restored-site'] })) {
  if (/\.(gif|png|jpe?g|webp|avif|mp4|mov|webm|mp3|wav|zip|woff2?|ttf|otf)$/i.test(file)) fail(`Binary resource in text-only repository: ${path.relative(root, file)}`);
}
for (const file of manifest.files) {
  const bytes = await fs.readFile(contained(root, file.stored));
  if (bytes.length !== file.bytes || hash(bytes) !== file.sha256) fail(`Archive hash mismatch ${file.stored}`);
}
const evalSchema = JSON.parse(await fs.readFile(path.join(root, 'schemas/eval.schema.json'), 'utf8'));
for (const line of (await fs.readFile(path.join(root, 'evals/questions.jsonl'), 'utf8')).trim().split('\n').filter(Boolean)) {
  const record = JSON.parse(line); check(record, evalSchema, `eval:${record.id}`);
  for (const id of record.source_ids) if (!docs.some(d => d.meta.id === id)) fail(`Eval ${record.id}: unknown source ID ${id}`);
}
const entitySchema = JSON.parse(await fs.readFile(path.join(root, 'schemas/entity.schema.json'), 'utf8'));
for (const file of (await walk(path.join(root, 'entities'))).filter(p => /\.(json|yaml)$/.test(p))) check(YAML.parse(await fs.readFile(file, 'utf8')), entitySchema, file);
const releases = YAML.parse(await fs.readFile(path.join(root, 'releases.yaml'), 'utf8'));
check(releases, JSON.parse(await fs.readFile(path.join(root, 'schemas/releases.schema.json'), 'utf8')), 'releases.yaml');
if (releases.releases[releases.default_public_version]?.status !== 'released') fail('Default public release must be released');
const report = { documents: docs.length, local_links_checked: localLinks, image_references: images, illustration_briefs: illustrationBriefs, archived_files_hashed: manifest.files.length, errors, warnings, product_runtime_verified: false, external_urls_verified: false };
await json(path.join(root, 'catalog/validation-report.json'), report);
console.log(JSON.stringify(report, null, 2));
if (errors.length) process.exitCode = 1;
