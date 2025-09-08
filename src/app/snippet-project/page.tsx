import { db } from '@/src/db/index';
import Link from 'next/link';

export default async function Page() {
  const snippets = await db.snippet.findMany();
  console.log('snippets...', snippets);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="mb-3"> Snippet 列表</h1>
      <Link className="text-blue-600" href="/snippet-project/new">
        添加Snippet
      </Link>
      {snippets.map(snippet => {
        return (
          <Link
            key={snippet.id}
            className="flex bg-white rounded py-2 px-4 justify-between"
            href={`/snippet-project/${snippet.id}`}
          >
            <span>{snippet.title}</span>
            <span> view</span>
          </Link>
        );
      })}
    </div>
  );
}
