'use server';
import { redirect } from 'next/navigation';
import { prisma } from '../db';
import { revalidatePath } from 'next/cache';

export async function searchAction(formData: FormData) {
  const searchKey = formData.get('searchKey');
  if (!searchKey) {
    redirect('/discuss');
  }
  redirect(`/discuss/search?searchkey=${searchKey}`);
}
