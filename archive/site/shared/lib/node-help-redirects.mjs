import { existsSync } from 'node:fs';
import { join } from 'node:path';

const applicationLocales = ['en', 'es', 'de', 'ja', 'ko', 'uk', 'zh_CN'];

// Node identifiers are literal application strings, not path-to-regexp patterns.
const escapePath = (path) => path.replace(/[.*+?^${}()|[\]\\:]/g, '\\$&');

export function createNodeHelpRedirects(redirects, {
  contentRoot,
  locales,
  localeAliases = { ja: 'jp' },
  localizedDestinations = {},
}) {
  const destinations = new Map(redirects.map(({ source, destination }) => [source, destination]));
  const requestedLocales = [...new Set([...applicationLocales, ...locales, ...Object.keys(localeAliases)])];
  const pageExists = (locale, destination) => {
    const path = destination.split('#')[0];
    return existsSync(join(contentRoot, locale, `${path.slice(1)}.mdx`));
  };

  function resolveDestination(destination) {
    const visited = new Set();
    while (destinations.has(destination.split('#')[0])) {
      const [path, fragment] = destination.split('#');
      if (visited.has(path)) throw new Error(`Node help redirect cycle at ${path}`);
      visited.add(path);
      const next = destinations.get(path);
      destination = fragment && !next.includes('#') ? `${next}#${fragment}` : next;
    }
    return destination;
  }

  return redirects.flatMap((redirect) => {
    if (!redirect.source.startsWith('/nodes/')) return [redirect];

    const destination = resolveDestination(redirect.destination);
    if (!pageExists('en', destination)) {
      throw new Error(`Missing English node help page: ${redirect.source} -> ${destination}`);
    }

    const groups = new Map();
    for (const requestedLocale of requestedLocales) {
      const locale = localeAliases[requestedLocale] ?? requestedLocale;
      const translatedDestination = localizedDestinations[locale]?.[destination] ?? destination;
      const hasTranslation = locales.includes(locale) && pageExists(locale, translatedDestination);
      const target = hasTranslation ? `/${locale}${translatedDestination}` : `/en${destination}`;
      if (!groups.has(target)) groups.set(target, []);
      groups.get(target).push(requestedLocale);
    }

    return [...groups].map(([target, languages]) => ({
      // An omitted locale keeps legacy /nodes/... links working in English.
      source: `/:lang(${languages.join('|')})${target === `/en${destination}` ? '?' : ''}${escapePath(redirect.source)}`,
      destination: target,
      // Do not permanently cache the fallback: a translation may be published later.
      permanent: false,
    }));
  });
}
