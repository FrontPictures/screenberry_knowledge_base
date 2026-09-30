import { hash, plain } from './lib.mjs';

export const bodyDigest = body => hash(body.replace(/\r\n/g, '\n').trim());
const text = value => ({ type: 'text', value });
const paragraph = value => ({ type: 'paragraph', children: [text(value)] });
export function redundantIconLabel(label, prose) {
  const normalize = value => value.toLowerCase().replaceAll('grey', 'gray').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const words = normalize(label).split(' ').filter(Boolean);
  const content = ` ${normalize(prose)} `;
  return words.length > 0 && words.every(word => content.includes(` ${word} `));
}

// Briefs are editorial instructions for a future guide, never product facts.
// Placement is valid only for the exact text body recorded in the sidecar.
export function withIllustrationBriefs(tree, body, sidecar) {
  if (!sidecar || !sidecar.figures.length) return tree;
  if (sidecar.document_body_sha256 !== bodyDigest(body)) throw new Error(`Illustration placement is stale for ${sidecar.document}; review the briefs after editing the article.`);
  const at = new Map();
  for (const figure of sidecar.figures) {
    const key = figure.placement.before_block;
    if (!Number.isInteger(key) || key < 0 || key > tree.children.length) throw new Error(`Invalid placement for ${figure.id}`);
    const entries = at.get(key) || [];
    entries.push(figure); at.set(key, entries);
  }
  const children = [];
  for (let i = 0; i <= tree.children.length; i++) {
    for (const f of at.get(i) || []) children.push({ type: 'blockquote', children: [
      paragraph(`User Guide illustration — ${f.title}`),
      paragraph(`Caption (draft): ${f.caption}`),
      paragraph(`What to show: ${f.show}`),
      paragraph(`Status: ${f.status}. Imported from existing text/alt; the original image has not been reviewed in this conversion.`)
    ] });
    if (i < tree.children.length) children.push(tree.children[i]);
  }
  return { ...tree, children };
}

export function mediaUrl(raw, docPath) {
  if (/^https?:\/\//i.test(raw)) return raw;
  const url = new URL(raw, `https://kb.local/${docPath}`);
  if (!url.pathname.startsWith('/assets/site-public/')) return null;
  return `https://help.screenberry.com/${url.pathname.slice('/assets/site-public/'.length)}${url.search}${url.hash}`;
}

export function stripImages(tree, { document, language }) {
  const figures = [], inlineLabels = [], links = [];
  const children = [];
  let section = '', removed = 0;
  function hasImage(node) { return node.type === 'image' || (node.children || []).some(hasImage); }
  function withoutImages(node) {
    if (node.type === 'image') return '';
    return node.value ?? (node.children || []).map(withoutImages).join('');
  }
  function meaningful(alt) { return !!alt?.trim() && !/^(alt text|image|image\s*\d*|img|picture)$/i.test(alt.trim()); }
  for (let blockIndex = 0; blockIndex < tree.children.length; blockIndex++) {
    const node = tree.children[blockIndex];
    if (node.type === 'heading') section = plain(node);
    const isFigureBlock = node.type === 'paragraph' && hasImage(node) && !withoutImages(node).trim();
    const context = [...tree.children.slice(Math.max(0, blockIndex - 2), blockIndex), ...tree.children.slice(blockIndex + 1, blockIndex + 2)]
      .filter(n => !['code', 'heading'].includes(n.type)).map(withoutImages).join(' ').replace(/\s+/g, ' ').trim().slice(0, 420);
    function convert(n) {
      if (n.type === 'image') {
        removed++;
        const sourceUrl = mediaUrl(n.url, document) || n.url;
        if (isFigureBlock || node.type === 'table') {
          const title = meaningful(n.alt) ? n.alt.trim() : (section || 'Illustration requiring an editorial description');
          figures.push({
            id: `${language}-${hash(document).slice(0, 10)}-${String(figures.length + 1).padStart(3, '0')}`,
            title, caption: title,
            show: context ? `${title}. Use the adjacent instructions as the content brief: ${context}` : `${title}. Confirm the exact interface, action and expected result before producing the illustration.`,
            status: 'draft-needs-review', basis: 'Existing alt text, heading and adjacent prose only; no visual inspection or new behavioral claim.',
            placement: { before_block: isFigureBlock ? children.length : children.length + 1, section },
            source_url: sourceUrl, source_alt: n.alt || '',
            text_coverage: 'not-independently-verified'
          });
          return [];
        }
        // Inline icons can encode a label/state missing from surrounding text.
        // Preserve their original accessible label, without inventing an action.
        const label = meaningful(n.alt) ? n.alt.trim() : (language === 'ja' ? 'アイコン（説明未確認）' : 'icon (description unverified)');
        const redundant = redundantIconLabel(label, withoutImages(node));
        inlineLabels.push({ source_url: sourceUrl, original_alt: n.alt || '', preserved_label: redundant ? null : label, already_described_in_prose: redundant });
        return redundant ? [] : [text(`(${label})`)];
      }
      if (n.children) n.children = n.children.flatMap(convert);
      if (['link', 'definition'].includes(n.type)) {
        const url = mediaUrl(n.url, document);
        if (url) { links.push({ original: n.url, external: url }); n.url = url; }
        if (n.type === 'link' && !n.children.length) return [];
      }
      return [n];
    }
    const converted = convert(structuredClone(node));
    if (!isFigureBlock) children.push(...converted);
  }
  return { tree: { ...tree, children }, figures, inlineLabels, links, removed };
}
