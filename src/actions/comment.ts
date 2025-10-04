'use server';

import { auth } from '@/auth';
import { z } from 'zod';
import { prisma } from '../db';
const createCommentSchema = z.object({
  content: z.string().min(3, {
    message: '不小于3个字符',
  }),
});

export interface CreateCommentFormState {
  errors: {
    content?: string[];
    _form?: string[];
  };
}

export async function createComment(
  { postId }: { postId: string },
  prevState: CreateCommentFormState,
  formData: FormData
): Promise<CreateCommentFormState> {
  const content = formData.get('content');

  const result = createCommentSchema.safeParse({
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

  try {
    await prisma.comment.create({
      data: {
        content: result.data.content,
        userId: session.user.id,
        postId,
        // parentId: '',
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
}
