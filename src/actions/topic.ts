'use server';

import { auth } from '@/auth';
import { z } from 'zod';
const createTopicSchema = z.object({
  name: z.string().min(3, {
    message: '不小于3个字符',
  }),
  description: z.string().min(10, {
    message: '不小于10个字符',
  }),
});

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

export async function createTopic(
  prevState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const name = formData.get('name');
  const description = formData.get('description');

  const result = createTopicSchema.safeParse({
    name,
    description,
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
  return {
    errors: {},
  };
}
