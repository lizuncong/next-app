import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React, { Suspense } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import Link from 'next/link';
import NavigationEvents from '../components/NavigationEvents';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lama Dev Social Media App',
  description: 'Social media app built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} p-3 h-[100vh] overflow-auto bg-gray-100`}
      >
        <AntdRegistry>{children}</AntdRegistry>
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
      </body>
    </html>
  );
}
