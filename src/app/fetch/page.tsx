const fetchImg = async () => {
  const r = await fetch('https://dog.ceo/api/breeds/image/random');
  return r.json();
};
export default async function Page() {
  const obj = await fetchImg();
  console.log('fetch page get image..', obj);
  return (
    <div>
      fetch page
      <img src={obj.message} alt="" width={300} />
    </div>
  );
}
