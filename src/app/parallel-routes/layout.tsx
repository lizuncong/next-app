import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Follow lzc studying Next.js',
  description: '11',
};

export default function RootLayout({
  children,
  team,
  analytics,
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex justify-center p-6 gap-6 text-blue-500">
        <Link href="/parallel-routes">Parallel Routes</Link>
        <Link href="/parallel-routes/visitors">Visitors</Link>
      </div>
      <div className="flex gap-6">
        {team}
        {analytics}
      </div>
      {children}
    </div>
  );
}
