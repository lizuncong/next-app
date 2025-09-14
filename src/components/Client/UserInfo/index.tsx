'use client';

import { useSession } from 'next-auth/react';

export default function UserInfoClient() {
  const { data: session } = useSession();
  if (!session?.user) {
    return <div>用户未登录</div>;
  }
  return (
    <div>
      <div>演示客户端组件获取用户登录信息的用法：</div>
      <div>{JSON.stringify(session.user)}</div>
      <img src={session.user.image} className="size-10" alt="" />
    </div>
  );
}
