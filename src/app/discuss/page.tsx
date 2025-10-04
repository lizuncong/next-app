import CreateTopicForm from '@/src/components/Client/CreateTopicForm';
import TopicList from '@/src/components/discuss/TopicList';
import PostList from '@/src/components/discuss/PostList';
import { fetchTopPosts } from '@/src/prisma/queries/post';
export default async function DiscussPage() {
  const posts = await fetchTopPosts();
  return (
    <div className="flex pt-4 gap-4">
      <div className="flex-1">
        <h1>Top Posts</h1>
        <PostList posts={posts} />
      </div>
      <div>
        <CreateTopicForm />
        <TopicList />
      </div>
    </div>
  );
}
