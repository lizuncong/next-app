import Link from 'next/link';

const Homepage = () => {
  return (
    <div className="flex flex-col">
      <div>首页</div>
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
      </div>
    </div>
  );
};

export default Homepage;
