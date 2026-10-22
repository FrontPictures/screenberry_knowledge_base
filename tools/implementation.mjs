import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const repository = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const snapshotDirectory = 'implementation/3.5.0-beta-build2422';
const titles = {
  architecture: 'Architecture and source identity', projects: 'Projects, saving and recovery',
  workspaces: 'Workspaces and layout synchronization', graph: 'Node graph processing',
  playback: 'Media playback and timeline coordinates', uploads: 'Media decoding and upload processing',
  images: 'Display, Render Target and image formats', calibration: 'Calibration data and image processing',
  scene: '3D scene calculations', audio: 'Audio processing and channel counts',
  integration: 'TouchEngine frame processing', api: 'JSON API contracts',
  automation: 'Automation and control nodes', timing: 'Frame timers', parameters: 'Parameter contracts',
};
const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
function requireCondition(ok, message) { if (!ok) throw new Error(message); }
const safePath = value => typeof value === 'string' && /^[A-Za-z0-9_./ -]+$/.test(value)
  && !value.startsWith('/') && !value.split('/').some(p => !p || p === '.' || p === '..');

export function validateData(data) {
  requireCondition(data.schema_version === 1, 'Unsupported implementation schema');
  requireCondition(data.snapshot_id === 'sb-3.5.0-beta-build2422-source-2026-10-21'
    && data.product_version === '3.5.0' && data.prerelease === 'beta'
    && data.source_build_number === 2422 && data.source_git_commit === null,
  'Snapshot identity changed: add a separately reviewed snapshot instead of relabelling this one');
  requireCondition(/^[a-f0-9]{64}$/.test(data.source_tree_sha256), 'Missing source-tree digest');
  requireCondition(data.runtime_verified === false && data.evidence_status === 'source-confirmed'
    && data.product_owner_review === 'pending', 'Unsupported verification promotion');
  for (const key of ['review_method', 'reviewed_by', 'reviewed_on', 'owner', 'applicability', 'source_access', 'source_tree_digest_method']) {
    requireCondition(typeof data[key] === 'string' && data[key].trim(), `Missing ${key}`);
  }
  requireCondition(/^\d{4}-\d{2}-\d{2}$/.test(data.reviewed_on), 'Invalid review date');
  requireCondition(data.language === 'en', 'Implementation supplement is English');
  requireCondition(Array.isArray(data.facts) && data.facts.length > 0, 'No facts');
  const ids = new Set(), fileHashes = new Map();
  for (const fact of data.facts) {
    const factKeys = new Set(['id', 'topic', 'title', 'text', 'boundary', 'evidence']);
    requireCondition(Object.keys(fact).every(key => factKeys.has(key)), `${fact.id}: unsupported fact field; provenance cannot be overridden`);
    requireCondition(/^CODE-[A-Z0-9]+-\d{3}$/.test(fact.id) && !ids.has(fact.id), `Invalid/duplicate fact ID: ${fact.id}`);
    ids.add(fact.id);
    requireCondition(Object.hasOwn(titles, fact.topic), `Unknown topic: ${fact.topic}`);
    for (const field of ['title', 'text', 'boundary']) requireCondition(typeof fact[field] === 'string' && fact[field].trim(), `${fact.id}: missing ${field}`);
    requireCondition(Array.isArray(fact.evidence) && fact.evidence.length > 0, `${fact.id}: no evidence`);
    for (const e of fact.evidence) {
      requireCondition(Object.keys(e).every(key => ['path', 'line_start', 'line_end', 'sha256'].includes(key)), `${fact.id}: unsupported evidence field`);
      requireCondition(safePath(e.path), `${fact.id}: unsafe source path`);
      requireCondition(Number.isInteger(e.line_start) && Number.isInteger(e.line_end) && e.line_start > 0 && e.line_end >= e.line_start, `${fact.id}: invalid source range`);
      requireCondition(/^[a-f0-9]{64}$/.test(e.sha256), `${fact.id}: invalid source hash`);
      requireCondition(!fileHashes.has(e.path) || fileHashes.get(e.path) === e.sha256, `${fact.id}: inconsistent file hash`);
      fileHashes.set(e.path, e.sha256);
    }
  }
  return { facts: ids.size, topics: new Set(data.facts.map(f => f.topic)).size, source_files: fileHashes.size,
    source_ranges: data.facts.reduce((n, f) => n + f.evidence.length, 0) };
}

export async function verifySource(data, sourceRoot) {
  validateData(data);
  const root = await fs.realpath(sourceRoot);
  const cache = new Map();
  for (const fact of data.facts) for (const e of fact.evidence) {
    if (!cache.has(e.path)) {
      const resolved = await fs.realpath(path.join(root, e.path));
      const relative = path.relative(root, resolved);
      requireCondition(relative && !relative.startsWith('..') && !path.isAbsolute(relative), `Source escapes root: ${e.path}`);
      const bytes = await fs.readFile(resolved);
      cache.set(e.path, { sha256: sha256(bytes), lines: bytes.toString('utf8').trimEnd().split(/\r?\n/).length });
    }
    const file = cache.get(e.path);
    requireCondition(file.sha256 === e.sha256, `Source hash changed: ${e.path}; review required`);
    requireCondition(e.line_end <= file.lines, `Source range exceeds file: ${e.path}`);
  }
  return cache.size;
}

export function chunks(data) {
  validateData(data);
  const { facts, ...provenance } = data;
  return facts.map(fact => ({ ...provenance, ...fact,
    path: `${snapshotDirectory}/${fact.topic}.md#${fact.id.toLowerCase()}` }));
}

export function renderedFiles(data) {
  const counts = validateData(data);
  const outputs = new Map();
  const intro = `Source snapshot: **3.5.0 beta, source build 2422**. Static implementation review on ${data.reviewed_on}. `
    + 'Runtime verification: **not performed**. Product-owner review: **pending**. Applicability to released 3.4: **not established**.\n';
  for (const [topic, title] of Object.entries(titles)) {
    const facts = data.facts.filter(f => f.topic === topic);
    if (!facts.length) continue;
    let text = `<!-- Generated from facts.json by tools/implementation.mjs; edit facts.json. -->\n# ${title}\n\n${intro}\n`
      + '[Evidence and use rules](README.md) · [All topics](README.md#topics)\n';
    for (const fact of facts) {
      text += `\n## ${fact.id}\n\n**${fact.title}**\n\n${fact.text}\n\nScope: ${fact.boundary}\n\nSource evidence (original source is not bundled):\n\n`;
      for (const e of fact.evidence) text += `- \`${e.path}\`, lines ${e.line_start}–${e.line_end}; SHA-256 \`${e.sha256}\`.\n`;
    }
    outputs.set(`${topic}.md`, text);
  }
  outputs.set('README.md', `<!-- Generated from facts.json by tools/implementation.mjs; edit facts.json or the renderer. -->
# Screenberry implementation reference — 3.5.0 beta, source build 2422

${intro}
This supplement contains **${counts.facts} individually scoped facts in ${counts.topics} topics**, citing **${counts.source_ranges} source ranges in ${counts.source_files} files**. It is an initial, curated publication of direct implementation findings. It does not publish the entire local research corpus, a complete node catalog, unverified guide drafts or proposed interface wording.

The existing [guide corpus](../../catalog/README.md) and its 3.4 export remain separate. No statement here establishes behavior in a released 3.4 binary. A matching version string alone does not identify the reviewed source contents.

## Evidence and use rules

Each fact was checked against the implementation rather than accepted solely from a comment, UI description or search hit. The fact text intentionally describes a specific method, calculation or control path. Its scope paragraph limits what can be concluded from that evidence. Calculated examples are identified as calculations, not runtime measurements.

The original proprietary source is **not included**. Citations give paths relative to the source root, inclusive one-based line ranges and SHA-256 hashes of the original file bytes. These are locators for authorized source holders, not broken links to files in this repository. Readers without that snapshot can inspect the explanation and provenance but cannot independently reproduce the source review from this repository alone.

Source snapshot ID: **${data.snapshot_id}**. The source tree has no recorded Git commit. Its inventory digest is **${data.source_tree_sha256}**; this is a source-tree digest, not a Git revision. The digest method is recorded in [facts.json](facts.json). This review does not assert that the snapshot can be built on its own.

No Screenberry executable, hardware setup, network integration or physical output was tested. Automated repository checks verify structure, generation, citations and, when the private source is supplied, file hashes/ranges. They do not prove that English prose semantically follows from code. The static review was performed by **${data.reviewed_by}**. No human owner or independent product approval is invented: ownership is **${data.owner}**, product-owner review is **${data.product_owner_review}**.

When answering, cite the fact ID and this snapshot. Use the guide corpus for released-version instructions. If a question depends on a shipping version, installation, license entitlement or observed output, obtain matching evidence before extending these claims. In particular, this supplement does not settle the source-versus-owner discrepancies about extra widget instances, chooser names or Reset Layout results; it does not publish tentative defect reports as known product defects.

## Topics

${Object.entries(titles).filter(([t]) => data.facts.some(f => f.topic === t)).map(([topic, title]) => `- [${title}](${topic}.md)`).join('\n')}

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
`);
  outputs.set('chunks.jsonl', chunks(data).map(c => JSON.stringify(c)).join('\n') + '\n');
  return outputs;
}

export async function checkOrWrite(data, directory, write = false) {
  const outputs = renderedFiles(data);
  for (const [name, content] of outputs) {
    if (write) await fs.writeFile(path.join(directory, name), content);
    else requireCondition(await fs.readFile(path.join(directory, name), 'utf8').catch(() => null) === content, `Stale generated implementation file: ${name}`);
  }
  const allowed = new Set(['facts.json', 'questions.json', ...outputs.keys()]);
  for (const name of await fs.readdir(directory)) requireCondition(allowed.has(name), `Unregistered implementation file: ${name}`);
}

async function main(args) {
  const directory = path.join(repository, snapshotDirectory);
  const data = JSON.parse(await fs.readFile(path.join(directory, 'facts.json'), 'utf8'));
  const counts = validateData(data);
  if (args.includes('--query')) {
    const query = args[args.indexOf('--query') + 1];
    requireCondition(query && !query.startsWith('--'), '--query requires a nonempty search string');
    const terms = query.toLowerCase().split(/\s+/);
    const result = chunks(data).filter(f => terms.every(t => JSON.stringify(f).toLowerCase().includes(t)));
    console.log(JSON.stringify({ query, snapshot: data.snapshot_id, matches: result }, null, 2));
    return;
  }
  requireCondition(args.includes('--write') || args.includes('--check'), 'Choose --check, --write or --query');
  requireCondition(!(args.includes('--write') && args.includes('--check')), 'Choose either --check or --write');
  await checkOrWrite(data, directory, args.includes('--write'));
  const questions = JSON.parse(await fs.readFile(path.join(directory, 'questions.json'), 'utf8'));
  const seen = new Set(), ids = new Set(data.facts.map(f => f.id));
  for (const q of questions) {
    requireCondition(q.id && !seen.has(q.id) && q.question && q.must_not_claim && q.expected_fact_ids?.length, 'Invalid answer-check question');
    seen.add(q.id);
    for (const id of q.expected_fact_ids) requireCondition(ids.has(id), `Unknown question fact: ${id}`);
  }
  let sourceFilesChecked = 0;
  if (args.includes('--source-root')) {
    const sourceRoot = args[args.indexOf('--source-root') + 1];
    requireCondition(sourceRoot && !sourceRoot.startsWith('--'), 'Missing --source-root value');
    sourceFilesChecked = await verifySource(data, sourceRoot);
  }
  console.log(JSON.stringify({ ...counts, answer_questions: questions.length, original_source_files_hashed: sourceFilesChecked,
    generated_files: 'current', product_runtime_verified: false }));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main(process.argv.slice(2));
}
