import Link from 'next/link';
import Image from 'next/image';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
const Homepage = () => {
  return (
    <div className="flex flex-col mt-6 gap-6 p-6 bg-gray-200 rounded-2xl">
      <div className="font-bold text-2xl mb-3">平行路由使用方法演示</div>
      <div>
        默认情况下，当我们访问
        <Link href="/parallel-routes" className="text-blue-500">
          /parallel-routes
        </Link>
        并且点击Visitor导航时，页面可以正常显示：
        <Image src={img1} objectFit="" alt="" className="my-2" />
        但如果在
        <Link href="/parallel-routes/visitors" className="text-blue-500">
          /parallel-routes/visitors
        </Link>
        页面直接刷新，就会404，如下图所示
        <Image src={img2} objectFit="" alt="" className="my-2" />
        这是因为通过点击Link跳到visitor页面时，Layout会复用其他模块。而当我们直接刷新整个/parallel-routes/visitors页面时，Next.js不仅会去@analytics目录下寻找visitors/page.tsx，也会去
        @team目录以及app/parallel-routes目录下寻找visitors/page.tsx，只要有一个没有找到就会导致404。
        解决这个问题，只需要在@team以及parallel-routes目录下创建default.tsx文件即可
      </div>
    </div>
  );
};

export default Homepage;
