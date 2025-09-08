import img1 from './assets/n14.jpg';
import img2 from './assets/n15.jpg';
import img3 from './assets/build-14.jpg';
import img4 from './assets/get.jpg';
import img5 from './assets/outofcache.jpg';
import img6 from './assets/1.jpg';
import img7 from './assets/2.jpg';
import img8 from './assets/3.jpg';
import img9 from './assets/4.jpg';
import img10 from './assets/5.jpg';

import Image from 'next/image';
export default function Page() {
  return (
    <div>
      <div className="font-bold text-2xl mb-3">Route Handlers</div>
      <div>Route Handlers 即后端API路由</div>
      <div className="flex flex-col mt-6 gap-3">
        在Next14版本中，默认情况下，当将GET方法与Response对象一起使用时，会缓存路由处理程序
        <Image src={img1} className="w-full h-auto" alt="" />
        而在Next 15中，默认情况下，路由处理程序不会缓存
        <Image src={img2} className="w-full h-auto" alt="" />
      </div>

      <div className="mt-8 font-bold text-2xl mb-3">Next 14</div>
      <div>
        以Next 14为例，我们在api下新建一个time路由，
        <Image src={img4} className="w-full h-auto" alt="" />
        如果是本地开发环境(npm run dev)，调用http://192.168.1.102:3000/api/time
        会发现每次都会返回最新的时间。
        <div className="mt-2 flex flex-col gap-3">
          如果是在生产环境(先npm run build执行打包，再执行npm
          start启动服务)打包构建，如下面的图所示，会发现在构建时，会输出api/time接口的打印日志。
          然后/api/time前面有个圈圈，这个圈表示路由/api/time是一个静态的内容，也就是说/api/time的返回结果其实在
          打包构建的时候已经确定了，而不是在后续请求的时候才确定，后续每一次请求也不会再走/api/time的处理程序，也就是GET不会
          再重新执行。
          <Image src={img3} className="w-full h-auto" alt="" />
          实际上，next14的路由缓存的条件是非常严格的，在大部分情况下，缓存会失效。比如满足以下条件时，缓存会失效。
          <Image src={img5} className="w-full h-auto" alt="" />
          <Image src={img6} className="w-full h-auto" alt="" />
          <Image src={img7} className="w-full h-auto" alt="" />
          <Image src={img8} className="w-full h-auto" alt="" />
          <Image src={img9} className="w-full h-auto" alt="" />
          <Image src={img10} className="w-full h-auto" alt="" />
        </div>
      </div>
    </div>
  );
}
