import { notFound } from 'next/navigation';
import Image from 'next/image';
import { imgData } from '../../data';

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo = imgData.find(item => item.id === id);
  if (!photo) {
    return notFound();
  }
  return (
    <div className="container mx-auto pt-8">
      <Image src={photo.img} height={400} alt=""></Image>
      <div className="border-2 border-dashed mt-6 p-3">
        <h1 className="mb-2">{photo.name}</h1>
        <p>查看图片详情页</p>
      </div>
    </div>
  );
}
