'use client';
import { addSnippet } from '@/src/actions/snippets';
import { useFormState } from 'react-dom';
import { Button } from '@heroui/react';

const initState = {
  message: '',
};
export default function Page() {
  const [state, formAction] = useFormState(addSnippet, initState);
  return (
    <form action={formAction}>
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
      {state.message && (
        <div className="my-4 text-red-500">{state.message}</div>
      )}
      <Button className="px-2 py-1 bg-blue-400" type="submit">
        添加
      </Button>
    </form>
  );
}
