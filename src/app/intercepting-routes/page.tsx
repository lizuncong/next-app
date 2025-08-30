import Link from 'next/link';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpeg';
import Image from 'next/image';
export const imgData = [
  {
    name: '张三',
    id: '1',
    img: img1,
    price: 4,
  },
  {
    name: '李四',
    id: '2',
    img: img2,
    price: 19,
  },
  {
    name: '王五',
    id: '3',
    img: img3,
    price: 35,
  },
];
export default function page() {
  return (
    <div>
      <div className="font-bold text-2xl mb-3">拦截路由</div>
      <div>
        拦截路由相比弹窗的好处就是，可以直接把链接分享给别人，别人打开就是一个页面。可以点击下面的图片，弹窗查看。
        然后直接刷新页面
      </div>
      <div className="flex gap-3 mt-4">
        {imgData.map(img => {
          return (
            <div key={img.id}>
              <Link
                className="size-[200px] flex flex-col  bg-gray-200 rounded-2xl"
                href={`/intercepting-routes/photos/${img.id}`}
              >
                <Image
                  src={img.img}
                  alt={img.name}
                  className="size-full object-cover rounded-lg"
                />
              </Link>
              <div className="text-gray-600 mt-2">
                {img.name}
                <span className="ml-1 text-gray-400">${img.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
