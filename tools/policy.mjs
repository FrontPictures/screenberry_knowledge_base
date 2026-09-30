// No provider-specific dependency; fail closed when applicability is unknown.
export function version(value) {
  const match = /^(\d+)\.(\d+)(?:\.(\d+))?$/.exec(value || '');
  if (!match) throw new Error(`Unsupported version ${value}; use major.minor[.patch]. Prerelease/build policy is not yet implemented.`);
  return match.slice(1).map(n => Number(n || 0));
}
export function compare(a, b) {
  const left = version(a), right = version(b);
  for (let i = 0; i < 3; i++) if (left[i] !== right[i]) return Math.sign(left[i] - right[i]);
  return 0;
}
export function applicable(meta, target) {
  const range = meta.applies_to;
  return !!range?.from && compare(target, range.from) >= 0 && (!range.until_exclusive || compare(target, range.until_exclusive) < 0);
}
export function eligible(meta, { target, profile, releases, digest, baseline }) {
  version(target);
  if (!releases[target]) throw new Error(`Unknown target release ${target}`);
  if (!['verified-public', 'legacy-guide-3.4', 'development-preview'].includes(profile)) throw new Error(`Unknown profile ${profile}`);
  if (profile !== 'development-preview' && releases[target].status !== 'released') return false;
  if (meta.status === 'withdrawn') return false;
  if (profile === 'legacy-guide-3.4') {
    return target === '3.4' && meta.publication?.profile === profile && meta.publication?.product_version === target &&
      ['in_review', 'verified'].includes(meta.status) && !!digest && baseline?.[`${meta.variant_id}:${meta.language}`] === digest;
  }
  if (!applicable(meta, target)) return false;
  if (profile === 'development-preview') return ['draft', 'in_review', 'verified'].includes(meta.status);
  return meta.status === 'verified' && !!meta.last_verified && meta.verified_in?.length > 0 && meta.evidence?.length > 0;
}
export function assertNoOverlap(docs) {
  const groups = new Map();
  for (const doc of docs) {
    const m = doc.meta || doc;
    if (!m.applies_to?.from || m.status === 'withdrawn') continue;
    const key = `${m.id}:${m.language}`;
    const group = groups.get(key) || [];
    for (const other of group) {
      const a = m.applies_to, b = other.applies_to;
      if ((!a.until_exclusive || compare(b.from, a.until_exclusive) < 0) && (!b.until_exclusive || compare(a.from, b.until_exclusive) < 0)) throw new Error(`Overlapping variants for ${key}`);
    }
    group.push(m); groups.set(key, group);
  }
}
