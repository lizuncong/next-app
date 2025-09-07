'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

const data = ['吃饭', '睡觉', '打豆豆'];

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
