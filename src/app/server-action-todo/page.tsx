// server action方式实现todo list
import SubmitButton from '@/src/components/SubmitButton';
import { addTodo, getTodos } from '@/src/actions/todo';
import ClientButton from '@/src/components/ClientButton';
export default async function TodoPage() {
  const todos = await getTodos();
  const userId = 'lzctest111';
  const addTodoWithOther = addTodo.bind(null, userId);
  return (
    <div>
      todo list：
      <form action={addTodoWithOther}>
        <input className="border border-red-600" type="text" name="todo" />
        <SubmitButton />
      </form>
      <ClientButton>新增一项</ClientButton>
      <ul>
        {todos.map(todo => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
