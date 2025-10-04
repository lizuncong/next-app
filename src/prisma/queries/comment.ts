import { prisma } from '@/src/db';
import { Comment } from '@/src/generated/prisma';

export type CommentWithUser = {
  user: { name: string | null; image: string | null };
} & Comment;

export function fetchCommentsByPostId(
  postId: string
): Promise<CommentWithUser[]> {
  return prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
}
