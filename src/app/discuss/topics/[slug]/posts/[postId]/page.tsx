import PostDetail from '@/src/components/discuss/PostDetail';
import CreateCommentForm from '@/src/components/Client/CreateCommentForm';
import CommentList from '@/src/components/discuss/CommentList';
interface Props {
  params: Promise<{ slug: string; postId: string }>;
}
export default async function PostShowPage(props: Props) {
  const { params } = props;
  const { postId } = await params;

  return (
    <div>
      <PostDetail postId={postId} />
      <CreateCommentForm postId={postId} />
      <CommentList postId={postId} />
    </div>
  );
}
