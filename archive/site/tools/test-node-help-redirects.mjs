import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, join, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { test } from 'node:test';
import { createNodeHelpRedirects } from '../shared/lib/node-help-redirects.mjs';

const require = createRequire(import.meta.url);
const { pathToRegexp } = require('next/dist/compiled/path-to-regexp');

test('node help uses the requested translation, otherwise English, and updates after publication', () => {
  const contentRoot = mkdtempSync(join(tmpdir(), 'screenberry-node-help-'));
  const page = (locale, path) => {
    const filename = join(contentRoot, locale, `${path}.mdx`);
    mkdirSync(join(filename, '..'), { recursive: true });
    writeFileSync(filename, '# Page\n');
  };
  try {
    page('en', 'reference/player');
    page('jp', 'reference/player');
    const legacy = [
      { source: '/nodes/Media_Player', destination: '/old-player', permanent: true },
      { source: '/nodes/Video_Capture_(V4L)', destination: '/reference/player#section', permanent: true },
      { source: '/old-player', destination: '/reference/player', permanent: true },
    ];
    const options = {
      contentRoot,
      locales: ['en', 'jp', 'es'],
      localizedDestinations: { jp: { '/reference/player#section': '/reference/player#translated-section' } },
    };
    const rules = () => createNodeHelpRedirects(legacy, options);
    const match = (url) => rules().find(({ source }) => pathToRegexp(source).test(url));

    for (const locale of ['en', 'es', 'de', 'ko', 'uk', 'zh_CN']) {
      assert.equal(match(`/${locale}/nodes/Media_Player`).destination, '/en/reference/player');
      assert.equal(match(`/${locale}/nodes/Media_Player`).permanent, false);
    }
    assert.equal(match('/nodes/Media_Player').destination, '/en/reference/player');
    for (const locale of ['ja', 'jp']) {
      assert.equal(match(`/${locale}/nodes/Media_Player`).destination, '/jp/reference/player');
      assert.equal(match(`/${locale}/nodes/Video_Capture_(V4L)`).destination, '/jp/reference/player#translated-section');
    }
    assert.equal(match('/en/nodes/Video_Capture_(V4L)').destination, '/en/reference/player#section');
    assert.equal(match('/en/nodes/Video_Capture_V4L'), undefined);
    assert.equal(match('/en/nodes/Unknown_Node'), undefined);
    assert.deepEqual(match('/old-player'), legacy[2]);

    page('es', 'reference/player');
    assert.equal(match('/es/nodes/Media_Player').destination, '/es/reference/player');
    assert.equal(match('/de/nodes/Media_Player').destination, '/en/reference/player');

    // A newly enabled website locale is accepted without changing the application's URL format.
    options.locales.push('fr');
    page('fr', 'reference/player');
    assert.equal(match('/fr/nodes/Media_Player').destination, '/fr/reference/player');

    assert.throws(() => createNodeHelpRedirects([
      { source: '/nodes/Loop', destination: '/loop' },
      { source: '/loop', destination: '/nodes/Loop' },
    ], options), /cycle/);
    assert.throws(() => createNodeHelpRedirects([
      { source: '/nodes/Missing', destination: '/missing' },
    ], options), /Missing English/);
  } finally {
    assert.equal(dirname(contentRoot), resolve(tmpdir()));
    assert.ok(basename(contentRoot).startsWith('screenberry-node-help-'));
    rmSync(contentRoot, { recursive: true, force: true });
  }
});
