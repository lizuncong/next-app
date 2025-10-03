'use server';

import { auth } from '@/auth';
import { z } from 'zod';
import { db, prisma } from '../db';
import { Post, Topic } from '../generated/prisma';
import { redirect } from 'next/navigation';
import { sleep } from '../lib';
const createPostSchema = z.object({
  title: z.string().min(3, {
    message: '不小于3个字符',
  }),
  content: z.string().min(10, {
    message: '不小于10个字符',
  }),
});

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export async function createPost(
  name: string,
  prevState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const title = formData.get('title');
  const content = formData.get('content');

  const result = createPostSchema.safeParse({
    title,
    content,
  });
  if (!result.success) {
    console.log('result...', result.error.flatten().fieldErrors);
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ['先登录，兄弟'],
      },
    };
  }
  const topic = await prisma.topic.findFirst({
    where: {
      name,
    },
  });
  if (!topic) {
    return {
      errors: {
        _form: ['topic没找到'],
      },
    };
  }
  let post: Post;
  try {
    post = await prisma.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id,
        topicId: topic.id,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ['something went wrong'],
        },
      };
    }
  }
  redirect(`/discuss/${topic.name}/posts/${post.id}`);
}
