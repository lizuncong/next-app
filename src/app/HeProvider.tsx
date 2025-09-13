'use client';

import { HeroUIProvider } from '@heroui/react';

export default function Provider(props: { children: React.ReactNode }) {
  const { children } = props;
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
