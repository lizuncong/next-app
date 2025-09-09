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

export const addSnippet = async (
  prevState: { message: string },
  formData: FormData
) => {
  const title = formData.get('title') as string;
  const code = formData.get('code') as string;
  if (code === '模拟error') {
    throw new Error('模拟抛出错误');
  }
  if (title?.length < 3) {
    return {
      ...prevState,
      message: 'title不能少于3个字符',
    };
  }
  if (code?.length < 10) {
    return {
      ...prevState,
      message: 'code不能少于10个字符',
    };
  }

  const res = await db.snippet.create({
    data: {
      title,
      code,
    },
  });
  redirect('/snippet-project');
};

// 通过try catch捕获错误

export const addSnippet2 = async (
  prevState: { message: string },
  formData: FormData
) => {
  try {
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;
    if (code === '模拟error') {
      throw new Error('模拟抛出错误');
    }
    if (title?.length < 3) {
      return {
        ...prevState,
        message: 'title不能少于3个字符',
      };
    }
    if (code?.length < 10) {
      return {
        ...prevState,
        message: 'code不能少于10个字符',
      };
    }

    const res = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    redirect('/snippet-project');
  } catch (err) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    }
    return {
      message: 'something went wrong',
    };
  }
};
