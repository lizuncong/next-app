interface Props {
  params: Promise<{ name: string; postId: string }>;
}
export default async function PostShowPage(props: Props) {
  const { params } = props;
  const { postId, name } = await params;
  return (
    <div className="flex pt-4">
      帖子详情：{name}，{postId}
    </div>
  );
}
