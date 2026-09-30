'use client';

import { Provider } from 'jotai';
import type { PropsWithChildren } from 'react';

export default function AppProviders({ children }: PropsWithChildren) {
  return <Provider>{children}</Provider>;
}
