import { PostWithData } from '@/src/prisma/queries/post';
import Link from 'next/link';
interface Props {
  posts: PostWithData[];
}
export default function PostList(prop: Props) {
  const { posts } = prop;
  console.log('post...', posts);
  return (
    <div className="flex flex-col gap-4 mt-4">
      {posts.map(post => {
        return (
          <Link
            key={post.id}
            href={`/discuss/topics/${post.topic.name}/posts/${post.id}`}
            className="p-2 dark:border-purple-500 cursor-pointer flex items-center gap-3 border-1 border-default-200"
          >
            {post.user.image && (
              <img
                alt=""
                className="size-10 rounded-full"
                src={post.user.image}
              />
            )}
            <div>
              <div>{post.title}</div>
              <div>{post.content}</div>
              <div className="flex justify-between">
                <span>By {post.user.name}</span>
                <span>{post._count.comments} comments</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
