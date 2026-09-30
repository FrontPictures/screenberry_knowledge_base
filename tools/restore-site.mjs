import fs from 'node:fs/promises';
import path from 'node:path';
import { root, contained, write, hash } from './lib.mjs';
const manifest = JSON.parse(await fs.readFile(path.join(root, 'archive/source-manifest.json'), 'utf8'));
const target = path.join(root, '.restored-site');
if (await fs.stat(target).catch(() => null)) throw new Error('.restored-site already exists; refusing to overwrite. Move it aside before restoring again.');
for (const file of manifest.files) {
  const bytes = await fs.readFile(contained(root, file.stored));
  if (hash(bytes) !== file.sha256) throw new Error(`Archive hash mismatch: ${file.stored}`);
  await write(contained(target, file.source), bytes);
}
console.log(`Restored ${manifest.files.length} source files to ${target}. This text-only archive excludes public resources and environment files. It is not a standalone runnable copy of the original site; obtain those resources separately before building.`);
