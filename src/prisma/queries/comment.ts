import { prisma } from '@/src/db';
import { Comment } from '@/src/generated/prisma';
import { cache } from 'react';

export type CommentWithUser = {
  user: { name: string | null; image: string | null };
} & Comment;

export const fetchCommentsByPostId = cache(
  (postId: string): Promise<CommentWithUser[]> => {
    console.log('查询评论列表.......', postId);
    return prisma.comment.findMany({
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
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
);
