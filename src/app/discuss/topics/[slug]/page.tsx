import CreatePostForm from '@/src/components/Client/CreatePostForm';
export default async function TopicShowPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="flex pt-4">
      <div className="flex-1">
        <h1 className="text-xl font-bold">{slug}</h1>
      </div>
      <div>
        <CreatePostForm name={slug} />
      </div>
    </div>
  );
}
