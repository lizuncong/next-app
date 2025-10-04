import { prisma } from '@/src/db';
import { notFound } from 'next/navigation';

interface Props {
  postId: string;
}
export default async function PostDetail(props: Props) {
  const { postId } = props;
  const post = await prisma.post.findFirst({
    where: { id: postId },
  });
  if (!post) {
    notFound();
  }
  return (
    <div className="flex pt-4 flex-col mb-6">
      <h1 className="text-2xl font-bold mb-6">{post.title}</h1>
      <div>{post.content}</div>
    </div>
  );
}
