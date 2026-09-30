import test from 'node:test';
import assert from 'node:assert/strict';
import { compare, applicable, eligible, assertNoOverlap } from './policy.mjs';
const releases = { '3.4': { status: 'released' }, '3.5': { status: 'development' } };
const doc = { id: 'fixture', language: 'en', variant_id: 'fixture.v35', status: 'verified', applies_to: { from: '3.5', until_exclusive: null }, verified_in: ['3.5'], last_verified: '2026-09-30', evidence: [{}] };
test('numeric versions: 3.10 is later than 3.9, patch boundary respected', () => {
  assert.equal(compare('3.10', '3.9'), 1);
  assert.equal(compare('3.4', '3.4.0'), 0);
  assert.equal(applicable({ applies_to: { from: '3.4.2', until_exclusive: '3.5' } }, '3.4.1'), false);
  assert.throws(() => compare('3.5-beta', '3.4'));
});
test('verified 3.5 knowledge cannot enter public 3.4 or unreleased public 3.5', () => {
  for (const target of ['3.4', '3.5']) assert.equal(eligible(doc, { target, releases, profile: 'verified-public' }), false);
  assert.equal(eligible(doc, { target: '3.5', releases, profile: 'development-preview' }), true);
});
test('old and new behavior meet at exclusive boundary without overlap', () => {
  const old = { ...doc, applies_to: { from: '3.4', until_exclusive: '3.5' } };
  assert.equal(applicable(old, '3.4'), true);
  assert.equal(applicable(old, '3.5'), false);
  assert.doesNotThrow(() => assertNoOverlap([old, doc]));
  assert.throws(() => assertNoOverlap([{ ...old, applies_to: { from: '3.4', until_exclusive: null } }, doc]));
});
test('unknown applicability, drafts and withdrawn content fail public selection', () => {
  for (const m of [{ ...doc, applies_to: { from: null } }, { ...doc, status: 'draft' }, { ...doc, status: 'withdrawn' }]) {
    assert.equal(eligible(m, { target: '3.4', releases, profile: 'verified-public' }), false);
  }
});
test('legacy migration exception requires exact version and unchanged content hash', () => {
  const legacy = { ...doc, status: 'in_review', applies_to: { from: null }, publication: { profile: 'legacy-guide-3.4', product_version: '3.4' } };
  const options = { target: '3.4', releases, profile: 'legacy-guide-3.4', baseline: { 'fixture.v35:en': 'original' }, digest: 'original' };
  assert.equal(eligible(legacy, options), true);
  assert.equal(eligible(legacy, { ...options, digest: 'changed' }), false);
  assert.equal(eligible(legacy, { ...options, target: '3.5' }), false);
  assert.equal(eligible(legacy, { ...options, baseline: {} }), false);
});
