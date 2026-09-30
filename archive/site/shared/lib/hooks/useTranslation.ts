'use client';

import { usePathname } from 'next/navigation';
import en from 'shared/locales/en';
import jp from 'shared/locales/jp';

export default function useTranslation() {
  const pathname = usePathname() ?? '';
  const locale = pathname.split('/')[1] === 'jp' ? 'jp' : 'en';

  return (key: string): string => {
    const dictionaries: Record<string, Record<string, string>> = { en, jp };
    return dictionaries[locale][key] ?? dictionaries.en[key] ?? key;
  };
}
