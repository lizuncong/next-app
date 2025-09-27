export default async function TopicShowPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  console.log('slug.....', name);
  return <div>topic详情9{name}</div>;
}
