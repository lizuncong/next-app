import { fetchCommentsByPostId } from '@/src/prisma/queries/comment';
import CommentItem from './CommentItem';
interface Props {
  postId: string;
}
export default async function CommentList({ postId }: Props) {
  let comments = await fetchCommentsByPostId(postId);
  comments = comments.filter(item => !item.parentId);
  return (
    <div className="mt-6">
      <div className="mb-3">总共 20 条评论</div>
      {comments.map(item => {
        return <CommentItem key={item.id} comment={item} />;
      })}
    </div>
  );
}
