import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from './src/db';
import authConfig from './auth.config';
const res = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
});
// console.log('res..', res);
// prisma edge runtime兼容问题可以看文档：https://authjs.dev/guides/edge-compatibility
export const { handlers, signIn, signOut, auth } = res;
