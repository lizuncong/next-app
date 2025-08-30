'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
export default function Container({ photo }: { photo: any }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="fixed flex items-center justify-center left-0 right-0 top-0 bottom-0 bg-gray-500/80"
    >
      <Image
        src={photo.img}
        height={400}
        alt=""
        className="rounded-lg"
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
}
