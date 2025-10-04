import {
  CommentWithUser,
  fetchCommentsByPostId,
} from '@/src/prisma/queries/comment';
import Image from 'next/image';
import CreateCommentForm from '../../Client/CreateCommentForm';
interface Props {
  comment: CommentWithUser;
}
export default async function CommentItem(props: Props) {
  const { comment } = props;
  const comments = await fetchCommentsByPostId(comment.postId);
  return (
    <div className="flex mb-3 gap-2 border border-gray-300 p-3 rounded-md">
      <Image
        alt=""
        src={comment.user.image!}
        width={40}
        height={40}
        className="size-10 rounded-full"
      />
      <div className="flex-1">
        <div className="mb-2">{comment.user.name}</div>
        <div className="flex gap-1 justify-between">
          {comment.content}
          <span className="text-gray-500">
            {comment.createdAt.toLocaleDateString()}
            <span className="ml-1">
              {comment.createdAt.toLocaleTimeString()}
            </span>
          </span>
        </div>
        <CreateCommentForm postId={comment.postId} parentId={comment.id} />
        {comments
          .filter(item => item.parentId === comment.id)
          .map(item => {
            return <CommentItem key={item.id} comment={item} />;
          })}
      </div>
    </div>
  );
}
