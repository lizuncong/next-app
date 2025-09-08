'use client';

import { addTodo2 } from '@/src/actions/todo';
import ClientButton from '@/src/components/ClientButton';
import SubmitButton from '@/src/components/SubmitButton';
import { useFormState } from 'react-dom';

const initialState = {
  message: '',
};
export default function SubmitForm() {
  const [state, formAction] = useFormState(addTodo2, initialState);
  return (
    <div>
      <form action={formAction}>
        <input
          required
          className="border border-red-600"
          type="text"
          name="todo"
        />
        <SubmitButton />
      </form>
      <ClientButton>新增一项</ClientButton>
      {state.message}
    </div>
  );
}
