import { db } from '@/src/db/index';
import { sleep } from '@/src/lib';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import DelButton from './DelButton';
import { deleteSnippet } from '@/src/actions/snippets';
export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  await sleep(10000);
  const res = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });
  if (!res) {
    return notFound();
  }
  const deleteSnippetWithId = deleteSnippet.bind(null, +id);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3>{res?.title}详情</h3>
        <div className="text-blue-600 cursor-pointer flex-wrap flex items-center gap-4">
          <Link href={`/snippet-project/${res?.id}/edit`}>编辑</Link>
          <form action={deleteSnippetWithId}>
            <button>
              删除(第二种方式，form表单的方式，推荐这种写法，因为即使禁用js，也一样可以提交)
            </button>
          </form>
          <DelButton id={id} />
        </div>
      </div>
      <pre className="p-3 border border-teal-500 rounded bg-gray-200">
        <code>{res?.code}</code>
      </pre>
    </div>
  );
}
