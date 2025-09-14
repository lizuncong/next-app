import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React, { Suspense } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import HeProvider from './HeProvider';
import SignOutButton from '../components/SignOut';
import SignOutClient from '../components/SignOutClient';
import Link from 'next/link';
import NavigationEvents from '../components/NavigationEvents';
import { auth } from '@/auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lama Dev Social Media App',
  description: 'Social media app built with Next.js',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-[100vh] overflow-auto bg-gray-100`}
      >
        <HeProvider>
          {/* {session && (
            <header className="flex gap-3 justify-end">
              <SignOutButton />
              <SignOutClient />
            </header>
          )} */}

          <AntdRegistry>{children}</AntdRegistry>
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
        </HeProvider>
      </body>
    </html>
  );
}
