import test from 'node:test';
import assert from 'node:assert/strict';
import { parser, plain, visit } from './lib.mjs';
import { stripImages, bodyDigest, withIllustrationBriefs } from './illustrations.mjs';
const md = await parser();
const context = { document: 'knowledge/en/reference/example.md', language: 'en' };
test('standalone image becomes an optional brief, prose and code remain', () => {
  const source = '# Settings\n\nChange the value.\n\n![Settings panel](../../../assets/site-public/images/settings.gif)\n\n```json\n{"x": 1}\n```\n';
  const result = stripImages(md.parse(source), context);
  assert.equal(result.removed, 1);
  assert.equal(result.figures.length, 1);
  assert.equal(result.figures[0].placement.before_block, 2);
  assert.equal(result.figures[0].source_url, 'https://help.screenberry.com/images/settings.gif');
  assert.match(md.stringify(result.tree), /Change the value\./);
  assert.match(md.stringify(result.tree), /\{"x": 1\}/);
  visit(result.tree, n => assert.notEqual(n.type, 'image'));
});
test('inline icons retain meaningful labels but do not duplicate existing prose', () => {
  const result = stripImages(md.parse('A gray pin ![Grey Pin](../../../assets/site-public/images/pin.png) carries data. Click ![Reset](../../../assets/site-public/images/reset.png).'), context);
  assert.equal(result.figures.length, 0);
  assert.doesNotMatch(plain(result.tree), /Grey Pin/);
  assert.match(plain(result.tree), /\(Reset\)/);
});
test('table diagrams become briefs and downloadable files stay external links', () => {
  const source = '| Mode | Diagram |\n| --- | --- |\n| Fit | ![Fit](../../../assets/site-public/images/fit.png) |\n\n[Example](../../../assets/site-public/downloads/example.zip)\n';
  const result = stripImages(md.parse(source), context);
  assert.equal(result.figures.length, 1);
  assert.equal(result.figures[0].placement.before_block, 1);
  assert.match(md.stringify(result.tree), /https:\/\/help.screenberry.com\/downloads\/example.zip/);
});
test('guide view inserts title, caption and instructions without mutating knowledge', () => {
  const tree = md.parse('# A\n\nBehavior.\n');
  const body = md.stringify(tree);
  const sidecar = { document: context.document, document_body_sha256: bodyDigest(body), figures: [{ id: 'f1', title: 'Panel', caption: 'Configured panel', show: 'The selected value', status: 'draft-needs-review', placement: { before_block: 2 } }] };
  const guide = withIllustrationBriefs(tree, body, sidecar);
  assert.match(md.stringify(guide), /Caption \(draft\): Configured panel/);
  assert.match(md.stringify(guide), /What to show: The selected value/);
  assert.doesNotMatch(md.stringify(tree), /Caption/);
  assert.throws(() => withIllustrationBriefs(tree, body + 'Changed.', sidecar), /stale/);
  assert.throws(() => withIllustrationBriefs(tree, body, { ...sidecar, figures: [{ ...sidecar.figures[0], placement: { before_block: 100 } }] }), /Invalid placement/);
});
