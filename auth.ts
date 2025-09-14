import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from './src/db';
import authConfig from './auth.config';
const res = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
});
console.log('res..', res);
export const { handlers, signIn, signOut, auth } = res;
