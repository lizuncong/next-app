interface Props {
  params: Promise<{ slug: string; postId: string }>;
}
export default async function PostShowPage(props: Props) {
  const { params } = props;
  const { postId, slug } = await params;
  return (
    <div className="flex pt-4">
      帖子详情：{slug}，{postId}
    </div>
  );
}
