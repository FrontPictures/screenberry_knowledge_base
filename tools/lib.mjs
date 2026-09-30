import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const posix = p => p.split(path.sep).join('/');
export const hash = value => crypto.createHash('sha256').update(value).digest('hex');
export async function walk(dir, options = {}) {
  const out = [];
  for (const item of (await fs.readdir(dir, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name, 'en'))) {
    if (options.skip?.includes(item.name)) continue;
    const p = path.join(dir, item.name);
    if (item.isSymbolicLink()) throw new Error(`Unexpected symlink: ${p}`);
    if (item.isDirectory()) out.push(...await walk(p, options));
    else out.push(p);
  }
  return out;
}
export async function write(p, text) {
  await fs.mkdir(path.dirname(p), { recursive: true });
  await fs.writeFile(p, text);
}
export const json = (p, data) => write(p, JSON.stringify(data, null, 2) + '\n');
export async function dependency(name) {
  try { return await import(name); } catch (error) {
    if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error;
    // Migration-only fallback to the source checkout's existing pnpm packages.
    // A standalone clone uses its own `pnpm install --frozen-lockfile` instead.
    const source = process.env.SCREENBERRY_SOURCE_ROOT || path.resolve(root, '../..');
    const store = path.join(source, 'node_modules/.pnpm');
    const entries = await fs.readdir(store).catch(() => []);
    const entry = entries.find(x => x.startsWith(name.replace('/', '+') + '@'));
    if (!entry) throw new Error(`Install dependencies: pnpm install --frozen-lockfile (missing ${name})`);
    const dir = path.join(store, entry, 'node_modules', name);
    const pkg = JSON.parse(await fs.readFile(path.join(dir, 'package.json'), 'utf8'));
    return import(pathToFileURL(path.join(dir, typeof pkg.exports === 'string' ? pkg.exports : pkg.main || 'index.js')).href);
  }
}
export const { default: YAML } = await dependency('yaml');
export function splitDocument(text) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(text);
  if (!match) throw new Error('Missing YAML frontmatter');
  return { meta: YAML.parse(match[1]), body: text.slice(match[0].length) };
}
export const formatDocument = (meta, body) => `---\n${YAML.stringify(meta, { lineWidth: 0 })}---\n\n${body.trim()}\n`;
export function cleanMarkdown(text) {
  let fence = null;
  return text.split('\n').map(line => {
    const match = /^\s*(`{3,}|~{3,})/.exec(line);
    if (match && (!fence || (match[1][0] === fence[0] && match[1].length >= fence.length))) {
      fence = fence ? null : match[1]; return line.trimEnd();
    }
    return fence ? line : line.replace(/[\t ]+$/, '');
  }).join('\n');
}
export async function documents() {
  const files = (await walk(path.join(root, 'knowledge'))).filter(p => p.endsWith('.md') && !p.endsWith('README.md'));
  return Promise.all(files.map(async p => ({ path: posix(path.relative(root, p)), ...splitDocument(await fs.readFile(p, 'utf8')) })));
}
export async function parser(mdx = false) {
  const { unified } = await dependency('unified');
  const { default: parse } = await dependency('remark-parse');
  const { default: gfm } = await dependency('remark-gfm');
  const { default: stringify } = await dependency('remark-stringify');
  const processor = unified().use(parse).use(gfm).use(stringify, { bullet: '-', emphasis: '_', fences: true });
  if (mdx) processor.use((await dependency('remark-mdx')).default);
  return processor;
}
export function visit(node, fn) { fn(node); for (const child of node.children || []) visit(child, fn); }
export function plain(node) {
  if (node.type === 'image') return node.alt || '';
  return node.value ?? (node.children || []).map(plain).join('');
}
export function contained(base, relative) {
  const resolved = path.resolve(base, relative);
  if (resolved !== base && !resolved.startsWith(base + path.sep)) throw new Error(`Path escapes root: ${relative}`);
  return resolved;
}
