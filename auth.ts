import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
const res = NextAuth({
  providers: [Github],
});
console.log('res..', res);
export const { handlers, signIn, signOut, auth } = res;
