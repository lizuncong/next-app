'use server';

import { redirect } from 'next/navigation';
import { db } from '../db/index';

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  redirect('/snippet-project');
}

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  redirect(`/snippet-project/${id}`);
}
