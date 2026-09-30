export const getLocalizedHref = (href: string, pathname: string) => {
  if (!href.startsWith('/')) return href;

  const locale = pathname.startsWith('/jp') ? 'jp' : 'en';
  return href === '/' ? `/${locale}` : `/${locale}${href}`;
};
