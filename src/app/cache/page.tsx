import { headers } from 'next/headers';

const fetchImg = async () => {
  const r = await fetch('https://dog.ceo/api/breeds/image/random');
  return r.json();
};

export default async function Page() {
  await headers();
  const obj = await fetchImg();
  const obj1 = await fetchImg();
  const obj2 = await fetchImg();
  console.log('cache....');
  return (
    <div>
      <img src={obj.message} alt="" width={200} />
      <img src={obj1.message} alt="" width={200} />
      <img src={obj2.message} alt="" width={200} />
    </div>
  );
}
