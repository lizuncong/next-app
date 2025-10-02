import { fetchTopics } from '@/src/prisma/queries/topic';
import Link from 'next/link';
export default async function TopicList() {
  const topics = await fetchTopics();
  return (
    <div className="max-w-[260px] border border-gray-300 p-3 rounded mt-4 flex gap-3 flex-wrap">
      {topics.map(topic => (
        <div
          key={topic.id}
          className="relative bg-gray-300 px-2 py-1 rounded-full"
        >
          <Link
            className="hover:text-blue-500"
            href={`/discuss/topics/${topic.name}`}
          >
            {topic.name}
          </Link>
          <span className="absolute text-xs text-white rounded-full flex items-center justify-center size-4 bg-red-500 right-0 top-0">
            {topic._count.posts}
          </span>
        </div>
      ))}
    </div>
  );
}
