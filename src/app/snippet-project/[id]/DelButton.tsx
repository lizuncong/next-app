'use client';

import { deleteSnippet } from '@/src/actions/snippets';
import { startTransition } from 'react';

export default function DelButton(props: { id: string }) {
  const { id } = props;
  const handleDelte = () => {
    startTransition(async () => {
      // 用startTransition包裹一层的好处在于：能够保证删除数据的操作
      // 完事之后，再进行redirect跳转
      deleteSnippet(parseInt(id));
    });
  };
  return (
    <button onClick={handleDelte} className="text-blue-600 cursor-pointer">
      删除(第一种方式)
    </button>
  );
}
