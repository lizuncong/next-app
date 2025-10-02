import { prisma } from '@/src/db';

export const fetchTopics = async () => {
  return prisma.topic.findMany({
    include: {
      _count: {
        select: {
          posts: true,
        },
      },
    },
  });
};
