'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      计数器：{count}
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}
