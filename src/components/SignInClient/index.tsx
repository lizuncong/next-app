'use client';
import { signIn } from 'next-auth/react';

export default function SignInClient() {
  return (
    <button onClick={() => signIn('github', { redirectTo: '/' })}>
      客户端组件登录用法：Signin with GitHub
    </button>
  );
}
