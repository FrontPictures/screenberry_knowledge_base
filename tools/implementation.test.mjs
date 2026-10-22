import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { validateData, verifySource, chunks, checkOrWrite } from './implementation.mjs';

const data = JSON.parse(await fs.readFile(new URL('../implementation/3.5.0-beta-build2422/facts.json', import.meta.url), 'utf8'));
const copy = () => structuredClone(data);

test('retrieval preserves every fact scope, evidence and snapshot boundary', () => {
  const records = chunks(data);
  assert.equal(records.length, data.facts.length);
  for (let i = 0; i < records.length; i++) {
    assert.equal(records[i].runtime_verified, false);
    assert.equal(records[i].product_owner_review, 'pending');
    assert.equal(records[i].snapshot_id, data.snapshot_id);
    assert.equal(records[i].boundary, data.facts[i].boundary);
    assert.deepEqual(records[i].evidence, data.facts[i].evidence);
  }
});
test('reject relabelling beta findings as 3.4 or runtime verified', () => {
  const version = copy(); version.product_version = '3.4';
  assert.throws(() => validateData(version), /Snapshot identity/);
  const runtime = copy(); runtime.runtime_verified = true;
  assert.throws(() => validateData(runtime), /verification promotion/);
  const override = copy(); override.facts[0].runtime_verified = true;
  assert.throws(() => validateData(override), /provenance cannot be overridden/);
});
test('reject missing citations, duplicate IDs, invalid ranges and escaping paths', () => {
  const absent = copy(); absent.facts[0].evidence = [];
  assert.throws(() => validateData(absent), /no evidence/);
  const duplicate = copy(); duplicate.facts.push(duplicate.facts[0]);
  assert.throws(() => validateData(duplicate), /duplicate fact/);
  const range = copy(); range.facts[0].evidence[0].line_start = 0;
  assert.throws(() => validateData(range), /invalid source range/);
  const escape = copy(); escape.facts[0].evidence[0].path = '../secret';
  assert.throws(() => validateData(escape), /unsafe source path/);
});
test('private-source checks reject changed bytes and out-of-bounds citations', async () => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'sb-source-check-'));
  try {
    const record = copy(); record.facts = [record.facts[0]];
    const text = 'first\nsecond\n';
    record.facts[0].evidence = [{ path: 'example.cpp', line_start: 1, line_end: 2,
      sha256: crypto.createHash('sha256').update(text).digest('hex') }];
    await fs.writeFile(path.join(directory, 'example.cpp'), text);
    assert.equal(await verifySource(record, directory), 1);
    record.facts[0].evidence[0].line_end = 3;
    await assert.rejects(verifySource(record, directory), /exceeds file/);
    record.facts[0].evidence[0].line_end = 2;
    await fs.writeFile(path.join(directory, 'example.cpp'), 'changed\n');
    await assert.rejects(verifySource(record, directory), /hash changed/);
  } finally {
    await fs.unlink(path.join(directory, 'example.cpp'));
    await fs.rmdir(directory);
  }
});
test('generated artifacts must match the editable facts', async () => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'sb-generated-check-'));
  try {
    await checkOrWrite(data, directory, true);
    await checkOrWrite(data, directory);
    await fs.appendFile(path.join(directory, 'projects.md'), 'stale text\n');
    await assert.rejects(checkOrWrite(data, directory), /Stale generated/);
  } finally {
    for (const name of await fs.readdir(directory)) await fs.unlink(path.join(directory, name));
    await fs.rmdir(directory);
  }
});
