import { db } from '@/src/db/index';
import { sleep } from '@/src/lib';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  await sleep(10000);
  const res = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });
  if (!res) {
    return notFound();
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3>{res?.title}详情</h3>
        <div className="text-blue-600">
          <Link className="mr-4" href={`/snippet-project/${res?.id}/edit`}>
            编辑
          </Link>
          <button>删除</button>
        </div>
      </div>
      <pre className="p-3 border border-teal-500 rounded bg-gray-200">
        <code>{res?.code}</code>
      </pre>
    </div>
  );
}
