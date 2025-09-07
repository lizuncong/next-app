import Link from 'next/link';
import React from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <nav>
          <Link href="/router-cache/news">新闻</Link>
          <Link href="/router-cache/sports">体育</Link>
        </nav>
      </div>
      {children}
    </div>
  );
}
