// One-time, lossless source snapshot and semantic MDX -> Markdown migration.
// Usage: node tools/migrate-site.mjs <source-checkout>
// Refuses to overwrite a completed migration; edit canonical knowledge afterwards.
import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { root, posix, walk, write, json, hash, YAML, splitDocument, formatDocument, parser, visit, plain, cleanMarkdown } from './lib.mjs';
import { convertToTextOnly } from './text-only.mjs';

const source = path.resolve(process.argv[2] || path.join(root, '../..'));
const manifestPath = path.join(root, 'archive/source-manifest.json');
if (await fs.stat(manifestPath).catch(() => null)) throw new Error('Completed migration exists; refusing to overwrite canonical content.');
const mdx = await parser(true);
const markdown = await parser();
const { default: Slugger } = await (await import('./lib.mjs')).dependency('github-slugger');
const importedAt = new Date().toISOString();
const revision = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: source, encoding: 'utf8' }).trim();
const dirty = execFileSync('git', ['status', '--porcelain', '--untracked-files=normal'], { cwd: source, encoding: 'utf8' }).trim().split('\n').filter(Boolean);
const contentFiles = (await walk(path.join(source, 'content'))).filter(p => p.endsWith('.mdx'));
const issues = [];
const mapping = [];
const categories = ['concepts', 'reference', 'how-to', 'tutorials', 'troubleshooting', 'known-issues', 'compatibility', 'releases', 'glossary'];
function classify(slug) {
  if (['privacy-policy', 'terms-and-conditions'].includes(slug)) return 'reference';
  if (slug.startsWith('whats-new/')) return 'releases';
  if (['getting-started/hardware', 'getting-started/platform-compatibility'].includes(slug)) return 'compatibility';
  if (slug === 'getting-started/first-project') return 'tutorials';
  if (slug === 'index' || /(?:overview|basics)$/.test(slug)) return 'concepts';
  if (/^(node-reference|warping-alignment)\//.test(slug) || /(?:properties|settings|timeline-view|screenberry-json-api|licensing)$/.test(slug)) return 'reference';
  return 'how-to';
}
for (const p of contentFiles) {
  const rel = posix(path.relative(path.join(source, 'content'), p));
  const [locale, ...segments] = rel.split('/');
  const slug = segments.join('/').replace(/\.mdx$/, '');
  const kind = classify(slug);
  mapping.push({ source: `content/${rel}`, path: `knowledge/${locale}/${kind}/${slug}.md`, locale, language: locale === 'jp' ? 'ja' : 'en', slug, kind, id: `guide.${slug.replaceAll('/', '.')}`, route: `/${locale}${slug === 'index' ? '' : '/' + slug}` });
}
const routes = new Map(mapping.map(x => [x.route, x]));
const redirectsText = await fs.readFile(path.join(source, 'next.config.mjs'), 'utf8');
const redirects = [...redirectsText.matchAll(/source:\s*['"]([^'"]+)['"],\s*destination:\s*['"]([^'"]+)['"]/g)].map(m => [m[1], m[2]]);
const fingerprints = [];
const conversions = [];
const assets = (await walk(path.join(source, 'public'))).filter(p => !posix(path.relative(path.join(source, 'public'), p)).startsWith('_pagefind/'));
const assetPaths = new Set(assets.map(p => '/' + posix(path.relative(path.join(source, 'public'), p))));
function relative(from, to) { return posix(path.relative(path.dirname(path.join(root, from)), path.join(root, to))); }
function normalizeRoute(route, locale) {
  route = route.replace(/\.(mdx?|html)$/, '').replace(/\/$/, '').replace(/\/index$/, '');
  if (!/^\/(en|jp)(\/|$)/.test(route)) route = `/${locale}${route === '/' ? '' : route}`;
  return route;
}
function targetRoute(raw, entry) {
  const url = new URL(raw, `https://help.screenberry.com${entry.route}`);
  const route = normalizeRoute(decodeURIComponent(url.pathname), entry.locale);
  if (routes.has(route)) return { target: routes.get(route), hash: url.hash, search: url.search };
  for (const [from, to] of redirects) {
    const expanded = from.replace('/:lang(en|jp)', `/${entry.locale}`);
    if (normalizeRoute(expanded, entry.locale) !== route) continue;
    const dest = new URL(to.replace('/:lang', `/${entry.locale}`), 'https://help.screenberry.com');
    const key = normalizeRoute(dest.pathname, entry.locale);
    if (routes.has(key)) return { target: routes.get(key), hash: url.hash || dest.hash, search: url.search };
  }
  // Directory links in this guide commonly resolve to their overview page.
  for (const suffix of ['/overview', '/media-player-overview', '/nodes']) {
    if (routes.has(route + suffix)) return { target: routes.get(route + suffix), hash: url.hash, search: url.search };
  }
  return null;
}
function rewrite(raw, entry, image = false) {
  if (raw.startsWith('#')) return raw;
  if (/^(mailto:|tel:|data:)/.test(raw)) return raw;
  if (!/^(https?:|\/)/.test(raw)) {
    const fileRelative = posix(path.relative(path.join(source, 'public'), path.resolve(source, path.dirname(entry.source), decodeURIComponent(raw.split(/[?#]/)[0]))));
    if (!fileRelative.startsWith('..') && assetPaths.has('/' + fileRelative)) return relative(entry.path, 'assets/site-public/' + fileRelative);
  }
  let url;
  try { url = new URL(raw, `https://help.screenberry.com${entry.route}`); } catch { throw new Error(`Invalid URL ${raw}`); }
  if (url.hostname !== 'help.screenberry.com') return raw;
  const pathname = decodeURIComponent(url.pathname);
  if (assetPaths.has(pathname)) return relative(entry.path, 'assets/site-public' + pathname) + url.search + url.hash;
  const found = targetRoute(raw, entry);
  if (found) {
    const aliases = { '#ControlwithPresentationClicker': '#playback-control-with-presentation-clicker', '#MappingMediaItem': '#mapping-a-media-item-to-a-midikeyboard-event' };
    return relative(entry.path, found.target.path) + found.search + (aliases[found.hash] || found.hash);
  }
  issues.push({ type: image ? 'missing-source-asset' : 'unresolved-source-link', source: entry.source, target: raw, retained_url: url.href });
  return url.href;
}
const textNode = value => ({ type: 'text', value });
const paragraph = children => ({ type: 'paragraph', children });
function normalizeBlocks(node) {
  if (node.children) node.children = node.children.flatMap(normalizeBlocks);
  if (node.type !== 'paragraph') return [node];
  const blockTypes = new Set(['heading', 'paragraph', 'blockquote', 'list', 'table', 'code']);
  if (!node.children.some(n => blockTypes.has(n.type))) return [node];
  const out = []; let inline = [];
  function flush() { if (plain({ children: inline }).trim()) out.push(paragraph(inline)); inline = []; }
  for (const child of node.children) {
    if (blockTypes.has(child.type)) { flush(); out.push(child); } else inline.push(child);
  }
  flush(); return out;
}
function attrs(node) { return Object.fromEntries((node.attributes || []).filter(a => a.type === 'mdxJsxAttribute').map(a => [a.name, a.value])); }
function phrasing(children) {
  return children.flatMap(n => n.type === 'paragraph' ? n.children : [n]);
}
function transform(node, entry, log) {
  if (node.type === 'mdxjsEsm') {
    if (!/^import\s+[\s\S]*?from\s+['"](?:nextra\/components|components\/legal\/(?:PrivacyPolicy|TermsAndConditions))['"];?\s*$/.test(node.value)) throw new Error(`Unknown MDX import in ${entry.source}: ${node.value}`);
    log.imports_removed++;
    return [];
  }
  if (node.type === 'mdxFlowExpression' || node.type === 'mdxTextExpression') {
    if (/^\/\*[\s\S]*\*\/$/.test(node.value.trim())) {
      issues.push({ type: 'editorial-comment-preserved-in-archive', source: entry.source, comment: node.value });
      return [];
    }
    if (/^['"]\s*['"]$/.test(node.value)) return [textNode(' ')];
    throw new Error(`Unknown expression in ${entry.source}: ${node.value}`);
  }
  if (node.children) node.children = node.children.flatMap(n => transform(n, entry, log));
  if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
    const a = attrs(node);
    const children = node.children || [];
    if (node.name === null || ['div', 'small'].includes(node.name)) { log.wrappers_removed++; return children; }
    if (node.name === 'img') {
      if (typeof a.src !== 'string') throw new Error(`Dynamic image in ${entry.source}`);
      const img = { type: 'image', url: rewrite(a.src, entry, true), alt: typeof a.alt === 'string' ? a.alt : '', title: null };
      if (!img.alt || /^(alt text|image)$/i.test(img.alt)) issues.push({ type: 'source-alt-needs-review', source: entry.source, target: a.src });
      log.images_converted++;
      return node.type === 'mdxJsxFlowElement' ? [paragraph([img])] : [img];
    }
    if (node.name === 'br') return node.type === 'mdxJsxFlowElement' ? [paragraph([{ type: 'html', value: '<br>' }])] : [{ type: 'html', value: '<br>' }];
    if (node.name === 'Callout') {
      log.callouts_converted++;
      const label = a.type === 'warning' ? 'Warning' : a.type === 'error' ? 'Important' : 'Note';
      if (!/^(Note|Warning|Important|注意|注)/i.test(plain({ children }).trim())) children.unshift(paragraph([{ type: 'strong', children: [textNode(label + ':')] }]));
      return [{ type: 'blockquote', children }];
    }
    if (['PrivacyPolicy', 'TermsAndConditions'].includes(node.name)) return structuredClone(legal[node.name]).children.flatMap(n => transform(n, entry, log));
    if (/^h[1-6]$/.test(node.name)) return [{ type: 'heading', depth: Number(node.name[1]), children: phrasing(children) }];
    if (node.name === 'p') return [paragraph(phrasing(children))];
    if (node.name === 'address') return children;
    if (node.name === 'li') return [{ type: 'listItem', spread: false, children: [paragraph(phrasing(children))] }];
    if (node.name === 'ul' || node.name === 'ol') return [{ type: 'list', ordered: node.name === 'ol', start: node.name === 'ol' ? 1 : null, spread: false, children: phrasing(children).filter(n => n.type === 'listItem') }];
    if (node.name === 'a') return [{ type: 'link', url: a.href.replace(/^mailto:\s+/, 'mailto:'), children: phrasing(children) }];
    throw new Error(`Unknown JSX element ${node.name} in ${entry.source}`);
  }
  if (['image', 'link', 'definition'].includes(node.type)) node.url = rewrite(node.url, entry, node.type === 'image');
  return [node];
}
const legal = {};
for (const name of ['PrivacyPolicy', 'TermsAndConditions']) {
  const text = await fs.readFile(path.join(source, `components/legal/${name}.tsx`), 'utf8');
  const fragment = text.slice(text.indexOf('<>'), text.lastIndexOf('</>') + 3);
  if (!fragment) throw new Error(`Cannot extract ${name}`);
  // JSX indentation is insignificant in the static legal components.
  legal[name] = mdx.parse(fragment.replace(/\r?\n\s*/g, ' '));
}
for (const entry of mapping) {
  const original = await fs.readFile(path.join(source, entry.source));
  const { meta: frontmatter, body } = splitDocument(original.toString('utf8'));
  const originalTree = mdx.parse(body);
  const originalHeadings = [];
  const originalCode = [];
  visit(originalTree, node => { if (node.type === 'heading') originalHeadings.push(plain(node)); if (node.type === 'code' || node.type === 'inlineCode') originalCode.push(node.value); });
  const log = { source: entry.source, images_converted: 0, callouts_converted: 0, wrappers_removed: 0, imports_removed: 0 };
  const tree = normalizeBlocks(transform(structuredClone(originalTree), entry, log)[0])[0];
  visit(tree, node => {
    if (['paragraph', 'heading', 'tableCell'].includes(node.type)) {
      if (node.children[0]?.type === 'text') node.children[0].value = node.children[0].value.trimStart();
      if (node.children.at(-1)?.type === 'text') node.children.at(-1).value = node.children.at(-1).value.trimEnd();
    }
  });
  const output = cleanMarkdown(markdown.stringify(tree));
  const roundtrip = markdown.parse(output);
  const headings = [];
  const codes = [];
  visit(roundtrip, node => { if (node.type === 'heading') headings.push(plain(node)); if (node.type === 'code' || node.type === 'inlineCode') codes.push(node.value); });
  if (JSON.stringify(originalCode) !== JSON.stringify(codes)) throw new Error(`Code changed in ${entry.source}`);
  if (!['privacy-policy', 'terms-and-conditions'].includes(entry.slug) && JSON.stringify(originalHeadings) !== JSON.stringify(headings)) throw new Error(`Headings changed in ${entry.source}`);
  // Markdown block/list layout normalizes indentation. Compare all non-whitespace
  // characters; code and headings are additionally compared exactly above.
  const contentBefore = plain(tree).replace(/\s+/g, '');
  const contentAfter = plain(roundtrip).replace(/\s+/g, '');
  if (contentBefore !== contentAfter) {
    let at = 0; while (contentBefore[at] === contentAfter[at]) at++;
    throw new Error(`Semantic roundtrip mismatch in ${entry.source} at ${at}: ${JSON.stringify(contentBefore.slice(Math.max(0, at - 60), at + 150))} vs ${JSON.stringify(contentAfter.slice(Math.max(0, at - 60), at + 150))}`);
  }
  const peer = mapping.find(x => x.slug === entry.slug && x.locale !== entry.locale);
  const meta = {
    id: entry.id, variant_id: `${entry.id}.imported-current-guide`, title: frontmatter.title,
    language: entry.language, kind: entry.kind === 'releases' ? 'release-notes' : entry.kind,
    status: 'in_review', owner: 'unassigned',
    applies_to: { from: null, until_exclusive: null }, verified_in: [], last_verified: null,
    evidence: [{ type: 'existing-guide', path: `archive/site/${entry.source}`, sha256: hash(original), scope: 'Imported text; not independent product verification' }],
    aliases: [], related: [],
    publication: { profile: 'legacy-guide-3.4', product_version: '3.4', basis: 'Snapshot of existing current guide; applicability not independently verified', role: entry.kind === 'releases' ? 'historical' : ['privacy-policy', 'terms-and-conditions'].includes(entry.slug) ? 'legal' : 'guide' },
    source: { path: entry.source, canonical_url: `https://help.screenberry.com${entry.route}`, git_commit: revision, sha256: hash(original), imported_at: importedAt, frontmatter },
    translation: entry.locale === 'jp' ? { source_language: 'en', source_id: peer?.id || null, source_revision: null, status: 'alignment-unverified', counterpart: peer ? relative(entry.path, peer.path) : null } : undefined,
  };
  if (entry.kind === 'releases') meta.describes_release = entry.slug.match(/release-notes-(.*)$/)?.[1].replaceAll('-', '.') || 'historical-multiple';
  if (['privacy-policy', 'terms-and-conditions'].includes(entry.slug)) {
    meta.content_language = 'en';
    const component = `components/legal/${entry.slug === 'privacy-policy' ? 'PrivacyPolicy' : 'TermsAndConditions'}.tsx`;
    meta.evidence.push({ type: 'existing-guide-component', path: `archive/site/${component}`, sha256: hash(await fs.readFile(path.join(source, component))), scope: 'Static legal page body expanded during migration' });
  }
  await write(path.join(root, entry.path), formatDocument(meta, output));
  const anchors = new Slugger();
  entry.headings = headings.map(h => ({ title: h, anchor: anchors.slug(h) }));
  conversions.push({ ...log, headings_preserved: originalHeadings.length, code_fragments_preserved: codes.length, semantic_roundtrip: true });
}
// Archive all authored site sources plus current content; no secrets, dependencies or caches.
const tracked = execFileSync('git', ['ls-files', '-z'], { cwd: source, encoding: 'utf8' }).split('\0').filter(Boolean);
const authoredRoots = ['app/', 'components/', 'content/', 'elements/', 'shared/', 'patches/', 'tools/', 'docs/'];
const allowedRoot = new Set(['.gitignore', '.prettierrc.json', 'AGENTS.md', 'README.md', 'mdx-components.tsx', 'next-env.d.ts', 'next-sitemap.config.js', 'next.config.mjs', 'package.json', 'pnpm-lock.yaml', 'pnpm-workspace.yaml', 'proxy.ts', 'tailwind.config.js', 'tsconfig.json', 'vercel.json', 'postcss.config.js']);
const snapshotPaths = new Set(tracked.filter(p => allowedRoot.has(p) || authoredRoots.some(prefix => p.startsWith(prefix))));
for (const p of await walk(path.join(source, 'content'))) snapshotPaths.add(posix(path.relative(source, p)));
snapshotPaths.add('docs/screenberry-knowledge-base-proposal.md');
for (const p of [...snapshotPaths].sort()) {
  const bytes = await fs.readFile(path.join(source, p));
  await write(path.join(root, 'archive/site', p), bytes);
  fingerprints.push({ source: p, stored: `archive/site/${p}`, bytes: bytes.length, sha256: hash(bytes) });
}
const externalResources = [];
for (const p of assets) {
  const rel = posix(path.relative(path.join(source, 'public'), p));
  const bytes = await fs.readFile(p);
  externalResources.push({ source: `public/${rel}`, url: `https://help.screenberry.com/${rel}`, bytes: bytes.length, sha256: hash(bytes) });
}
for (const locale of ['en', 'jp']) {
  for (const category of categories) {
    const entries = mapping.filter(x => x.locale === locale && classify(x.slug) === category);
    await write(path.join(root, `knowledge/${locale}/${category}/README.md`), `# ${category}\n\n${entries.length ? entries.map(x => `- [${x.slug}](${posix(path.relative(`knowledge/${locale}/${category}`, x.path))})`).join('\n') : 'No standalone source articles in this category yet. Add verified material using CONTRIBUTING.md; no content has been invented to populate this directory.'}\n`);
  }
}
await json(path.join(root, 'catalog/source-map.json'), mapping);
await json(path.join(root, 'catalog/migration-issues.json'), issues);
await json(path.join(root, 'catalog/conversion-report.json'), conversions);
await json(path.join(root, 'catalog/locale-parity.json'), {
  en_only: mapping.filter(x => x.locale === 'en' && !mapping.some(y => y.locale === 'jp' && y.id === x.id)).map(x => x.id),
  jp_only: mapping.filter(x => x.locale === 'jp' && !mapping.some(y => y.locale === 'en' && y.id === x.id)).map(x => x.id),
  translation_alignment: 'Not verified during migration; existing content preserved without translation.'
});
await json(manifestPath, {
  schema_version: 1, imported_at: importedAt, source_revision: revision,
  source_state: 'local-working-tree', working_tree_changes: dirty,
  documents: mapping.length, locales: Object.fromEntries(['en', 'jp'].map(locale => [locale, mapping.filter(x => x.locale === locale).length])),
  exclusions: ['.env and other environment files', '.git history', '.local private notes', 'node_modules', '.next', '.pnpm-store', 'public/_pagefind generated search', 'untracked package-lock.json', 'codegraph.json generated analysis', '*.tsbuildinfo'],
  public_assets_storage: 'Not bundled. Text-only repository; external resource provenance is in catalog/external-resources.json.',
  restoration: 'source-only',
  files: fingerprints
});
await json(path.join(root, 'catalog/external-resources.json'), externalResources);
await convertToTextOnly({ initializeBaseline: true });
console.log(JSON.stringify({ documents: mapping.length, assets: assets.length, source_files: snapshotPaths.size, bytes: fingerprints.reduce((n, x) => n + x.bytes, 0), issues: issues.length }, null, 2));
