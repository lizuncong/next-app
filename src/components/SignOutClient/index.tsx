'use client';

import { signOut } from 'next-auth/react';
export default function SignOutClient() {
  return (
    <button onClick={() => signOut()}>客户端组件退出登录用法：Sign Out</button>
  );
}
