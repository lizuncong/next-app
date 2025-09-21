import React, { Suspense } from 'react';
import Header from '@/src/components/discuss/Header';
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[100vh] overflow-hidden flex items-center flex-col">
      <Header />
      <div className="flex-1 max-w-[1024px] px-6 w-full">{children}</div>
    </div>
  );
}
