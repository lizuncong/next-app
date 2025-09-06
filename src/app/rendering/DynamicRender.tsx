// import { cookies } from 'next/headers';

export default async function Page() {
  console.log('Dynamic Rendering============');
  //   const cookieStore = cookies(); // 动态API
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    // cache: 'no-cache', // 未缓存的数据，打开这个会导致缓存失效，走动态渲染
  });
  console.log('res=====', res);
  return <div>Dynamic Rendering：{new Date().toLocaleTimeString()}</div>;
}
