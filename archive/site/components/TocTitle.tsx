'use client';

import useTranslation from 'shared/lib/hooks/useTranslation';

export default function TocTitle() {
  const t = useTranslation();

  return <>{t('On this page')}</>;
}
