import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Head, Search } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Layout, LocaleSwitch, Navbar } from 'nextra-theme-docs';
import type { ReactNode } from 'react';
import AppProviders from 'components/AppProviders';
import CustomBreadcrumbs from 'components/CustomBreadcrumbs';
import CustomFooter from 'components/Footer';
import Header from 'components/Header';
import Timestamp from 'components/Timestamp';
import TocTitle from 'components/TocTitle';
import { fonts } from 'components/fonts';
import 'shared/styles/global.css';

const locales = ['en', 'jp'] as const;

export const metadata: Metadata = {
  metadataBase: new URL('https://help.screenberry.com'),
  title: {
    default: 'Screenberry User Guide',
    template: '%s – Screenberry User Guide',
  },
  icons: {
    icon: '/images/base/favicon.ico',
  },
  openGraph: {
    type: 'website',
    images: ['/images/base/default-opengraph-image.png'],
  },
  twitter: {
    card: 'summary',
  },
};

interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{
    lang: string;
  }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { lang } = await params;

  if (!locales.includes(lang as (typeof locales)[number])) {
    notFound();
  }

  const navbar = (
    <Navbar
      key="navbar"
      className="breadcrumbs-navbar"
      logo={<CustomBreadcrumbs homeHref={`/${lang}`} />}
      logoLink={false}
    >
      <LocaleSwitch />
    </Navbar>
  );

  return (
    <html lang={lang === 'jp' ? 'ja' : 'en'} dir="ltr" className={fonts.variable} suppressHydrationWarning>
      <Head backgroundColor={{ light: '#fff', dark: '#fff' }} />
      <body className="font-america">
        <GoogleTagManager gtmId="GTM-K8GJ935" />
        <AppProviders>
          <Header />
          <Layout
            navbar={navbar}
            footer={<CustomFooter key="footer" />}
            pageMap={await getPageMap(`/${lang}`)}
            i18n={[
              { locale: 'en', name: 'English' },
              { locale: 'jp', name: '日本語' },
            ]}
            search={<Search placeholder="Search documentation..." />}
            nextThemes={{ defaultTheme: 'light' }}
            darkMode={false}
            copyPageButton={false}
            lastUpdated={<Timestamp />}
            sidebar={{ defaultMenuCollapseLevel: 1 }}
            toc={{ title: <TocTitle /> }}
            feedback={{ content: null }}
            editLink={null}
          >
            {children}
          </Layout>
        </AppProviders>
      </body>
    </html>
  );
}
