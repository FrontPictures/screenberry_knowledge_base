import type { Metadata } from 'next';
import { generateStaticParamsFor, importPage } from 'nextra/pages';
import { useMDXComponents as getMDXComponents } from '../../../mdx-components';

const siteUrl = 'https://help.screenberry.com';

export const generateStaticParams = generateStaticParamsFor('mdxPath');

interface PageProps {
  params: Promise<{
    lang: string;
    mdxPath?: string[];
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, mdxPath } = await params;
  const { metadata } = await importPage(mdxPath, lang);
  const path = mdxPath?.filter(Boolean).join('/');
  const canonical = `${siteUrl}/${lang}${path ? `/${path}` : ''}`;
  const image = '/images/base/default-opengraph-image.png';

  return {
    ...metadata,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      title: metadata.title,
      description: metadata.description ?? undefined,
      url: canonical,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary',
      images: [image],
    },
  };
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props: PageProps) {
  const params = await props.params;
  const result = await importPage(params.mdxPath, params.lang);
  const { default: MDXContent, toc, metadata, sourceCode } = result;

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
