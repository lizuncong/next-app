import { db } from '@/src/db/index';
import { redirect } from 'next/navigation';

export default async function Page() {
  const addSnippet = async (formData: FormData) => {
    'use server';
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;
    const res = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    redirect('/snippet-project');
    console.log('创建成功：', res);
  };
  return (
    <form action={addSnippet}>
      <h3>添加Snippet</h3>
      <div className="mb-2 mt-3 flex items-center">
        <label htmlFor="title">Title</label>
        <input
          name="title"
          className="p-1 ml-2 flex-1 rounded border"
          type="text"
          id="title"
        />
      </div>
      <div className="mb-2 mt-3 flex items-center">
        <label htmlFor="code">Code</label>
        <input
          name="code"
          className="p-1 ml-2 flex-1 rounded border"
          type="text"
          id="code"
        />
      </div>
      <button className="px-2 py-1 bg-blue-400" type="submit">
        添加
      </button>
    </form>
  );
}
