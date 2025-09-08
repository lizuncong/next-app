'use client';
// 传统API方式实现todo list
import { useEffect, useState } from 'react';

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('提价。。。');
    const res = await fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      body: new FormData(e.currentTarget),
    });
    const { data } = await res.json();
    console.log('submit data..', data);
    setTodos(data);
  };
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await (
        await fetch('http://localhost:3000/api/todos')
      ).json();
      console.log('fetch data：', data);
      setTodos(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      todo list：
      <form onSubmit={handleSubmit}>
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
