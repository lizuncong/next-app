// server action方式实现todo list
import { getTodos } from '@/src/actions/todo';
import SubmitForm from './SubmitForm';
export default async function TodoPage() {
  const todos = await getTodos();
  return (
    <div>
      todo list：
      <SubmitForm />
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
