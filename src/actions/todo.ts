'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { z } from 'zod';
const data = ['吃饭', '睡觉', '打豆豆'];

const schema = z.string().min(5, { message: '不少于5个字符' }).max(15, {
  message: '不超过15个字符',
});
export async function getTodos() {
  return data;
}
export async function addTodo(userId: string, formData: FormData) {
  const todo = formData.get('todo') as string;
  const rawFormData = Object.fromEntries(formData);
  console.log('raw form data...', userId, rawFormData);
  data.push(todo);
  console.log('server action todo：', data);
  // revalidatePath('/server-action-todo'); // 基于路径的方式，刷新页面数据
  revalidateTag('xxx'); // 基于标签的方式，刷新页面数据
}

export async function addTodo2(
  prevState: { message: string },
  formData: FormData
) {
  const todo = formData.get('todo') as string;
  const validatedFields = schema.safeParse(todo);
  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().formErrors.toString(),
    };
  }
  data.push(todo);
  revalidatePath('/');
  return {
    ...prevState,
    message: `add ${todo} success!`,
  };
}
