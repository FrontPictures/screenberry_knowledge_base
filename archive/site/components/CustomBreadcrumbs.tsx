'use client';

import { ArrowRightIcon } from 'nextra/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useLayoutEffect, useRef } from 'react';
import { useConfig } from 'nextra-theme-docs';
import useTranslation from 'shared/lib/hooks/useTranslation';

interface CustomBreadcrumbsProps {
  homeHref: string;
}

export default function CustomBreadcrumbs({ homeHref }: CustomBreadcrumbsProps) {
  const t = useTranslation();
  const pathname = usePathname();
  const breadcrumbsRef = useRef<HTMLElement>(null);
  const { activePath } = useConfig().normalizePagesResult;

  useLayoutEffect(() => {
    const breadcrumbs = breadcrumbsRef.current;

    if (breadcrumbs) {
      breadcrumbs.scrollLeft = breadcrumbs.scrollWidth;
    }
  }, [pathname]);

  return (
    <nav
      ref={breadcrumbsRef}
      aria-label="Breadcrumb"
      className="custom-breadcrumbs flex min-w-0 w-full max-w-full items-center gap-2 overflow-x-auto text-sm leading-4 text-[rgb(107,114,128)]"
    >
      <Link
        href={homeHref}
        className="min-w-max whitespace-nowrap transition-colors hover:text-gray-700"
      >
        {t('User Guide')}
      </Link>

      {activePath.map((item, index) => {
        const nextItem = activePath[index + 1];
        const firstChildRoute = (item as { children?: Array<{ route: string }> }).children?.[0]?.route;
        const href = nextItem
          ? 'frontMatter' in item
            ? item.route
            : firstChildRoute === nextItem.route
              ? undefined
              : firstChildRoute
          : undefined;
        const isCurrentPage = !nextItem;
        const className = `min-w-max whitespace-nowrap transition-colors ${
          isCurrentPage ? 'font-medium text-black' : href ? 'hover:text-gray-700' : ''
        }`;

        return (
          <Fragment key={`${item.route}-${item.name}`}>
            <ArrowRightIcon height="14" className="shrink-0" />
            {href ? (
              <Link href={href} className={className}>
                {item.title}
              </Link>
            ) : (
              <span aria-current={isCurrentPage ? 'page' : undefined} className={className}>
                {item.title}
              </span>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
