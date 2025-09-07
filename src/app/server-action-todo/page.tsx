// server action方式实现todo list

import { addTodo, getTodos } from '@/src/actions/todo';

export default async function TodoPage() {
  const todos = await getTodos();
  const userId = 'lzctest111';
  const addTodoWithOther = addTodo.bind(null, userId);
  return (
    <div>
      todo list：
      <form action={addTodoWithOther}>
        <input className="border border-red-600" type="text" name="todo" />
        <button type="submit">提交</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
