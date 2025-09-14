'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from 'antd';

const Homepage = () => {
  const router = useRouter();
  const handlerLogout = async () => {
    const r = await fetch('/api/logout', {
      method: 'DELETE',
    });
    const res = await r.json();
    if (res.success) {
      router.push('/login');
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <span>首页</span>
        {/* <Button type="primary" onClick={handlerLogout}>
          退出登录
        </Button> */}
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <Link href="/parallel-routes" className="text-blue-500">
          平行路由 DEMO
        </Link>
        <Link href="/intercepting-routes" className="text-blue-500">
          拦截路由 DEMO
        </Link>
        <Link href="/route-handler" className="text-blue-500">
          Route Handler DEMO
        </Link>
        <Link href="/middleware" className="text-blue-500">
          Middleware DEMO
        </Link>
        <Link
          href="https://www.builder.io/blog/why-react-server-components"
          className="text-blue-500"
        >
          为什么使用服务端组件
        </Link>
        <Link
          href="https://www.builder.io/blog/nextjs-react-server-components"
          className="text-blue-500"
        >
          关于 React 服务器组件的 5 个误解
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
