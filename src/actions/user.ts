'use server';
import * as auth from '@/auth';

export async function signIn() {
  return await auth.signIn('github');
}

export async function signOut() {
  const res = await auth.signOut();
  return res;
}
