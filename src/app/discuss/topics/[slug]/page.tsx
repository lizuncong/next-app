import CreatePostForm from '@/src/components/Client/CreatePostForm';
import PostList from '@/src/components/discuss/PostList';
import { fetchPostsByTopicName } from '@/src/prisma/queries/post';
export default async function TopicShowPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await fetchPostsByTopicName(slug);
  return (
    <div className="flex pt-4 gap-4">
      <div className="flex-1">
        <h1 className="text-xl font-bold">{slug}</h1>
        <PostList posts={posts} />
      </div>
      <div>
        <CreatePostForm name={slug} />
      </div>
    </div>
  );
}
