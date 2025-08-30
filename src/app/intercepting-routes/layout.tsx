import type { Metadata } from 'next';
import React from 'react';

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div id="interception">
      {children}
      {modal}
    </div>
  );
}
