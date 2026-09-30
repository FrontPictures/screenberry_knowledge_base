'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  date?: Date;
}

const timestampConstants: Record<string, string> = {
  '/whats-new/release-notes-3-2-0': '08/01/2023',
  '/whats-new/release-notes-3-1-0': '03/24/2023',
  '/whats-new/release-notes-3-0-0': '07/08/2022',
  '/whats-new/release-notes-2-9-0': '09/30/2021',
  '/whats-new/release-notes-2-8-0': '05/06/2021',
  '/whats-new/release-notes-2-7-0': '10/17/2020',
  '/whats-new/release-notes-2-6-0': '04/14/2020',
};

export default function Timestamp({ date }: Props) {
  const pathname = usePathname() ?? '';
  const locale = pathname.startsWith('/jp') ? 'ja' : 'en';
  const route = pathname.replace(/^\/(?:en|jp)/, '') || '/';
  const displayDate = timestampConstants[route] ? new Date(timestampConstants[route]) : date;

  useEffect(() => {
    const timestamp = document.querySelector('.last-update-article');
    const article = document.querySelector('article > main');

    if (timestamp && article) {
      article.prepend(timestamp);
    }
  }, [displayDate]);

  if (!displayDate) {
    return null;
  }

  return (
    <p className="last-update-article absolute -top-6 right-4 text-right text-xs text-gray-500 sm:right-6 dark:text-gray-400">
      Last updated on{' '}
      <time dateTime={displayDate.toISOString()} suppressHydrationWarning>
        {displayDate.toLocaleDateString(locale, {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </time>
    </p>
  );
}
