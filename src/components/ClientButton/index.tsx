'use client';
import { addTodo } from '@/src/actions/todo';

export default function ClientButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      className="border p-1 ml-2"
      onClick={() => {
        const formData = new FormData();
        formData.append('todo', '1233');
        addTodo('text111', formData);
      }}
    >
      {children}
    </button>
  );
}
