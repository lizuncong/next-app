import { db } from '@/src/db/index';
import { sleep } from '@/src/lib';
import { notFound } from 'next/navigation';
import EditForm from './EditForm';
export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  await sleep(3000);
  const res = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });
  if (!res) {
    return notFound();
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3>编辑：{res?.title}</h3>
      </div>
      <EditForm snippet={res} />
    </div>
  );
}
