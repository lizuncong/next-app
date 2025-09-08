'use client';

import { useState } from 'react';
// 不允许通过import 直接使用服务器组件
// import UserInfo from './UserInfo';
export default function Counter({ children }: { children?: React.ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <UserInfo /> */}
      {children}
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
