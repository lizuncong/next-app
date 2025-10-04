import { prisma } from '@/src/db';
import { Post } from '@/src/generated/prisma';

export type PostWithData = {
  user: {
    name: string | null;
    image?: string | null;
  };
  topic: {
    name: string;
  };
  _count: {
    comments: number;
  };
} & Post;

export function fetchPostsByTopicName(name: string): Promise<PostWithData[]> {
  return prisma.post.findMany({
    where: {
      topic: {
        name,
      },
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
      topic: {
        select: {
          name: true,
        },
      },
      _count: {
        select: {
          comments: true,
        },
      },
    },
  });
}

export function fetchTopPosts(): Promise<PostWithData[]> {
  return prisma.post.findMany({
    orderBy: [
      {
        comments: {
          _count: 'desc',
        },
      },
    ],
    take: 5,
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
      topic: {
        select: {
          name: true,
        },
      },
      _count: {
        select: {
          comments: true,
        },
      },
    },
  });
}

export function fetchPostsBySearchKey(searchKey: string) {
  return prisma.post.findMany({
    where: {
      OR: [
        {
          content: {
            contains: searchKey,
          },
        },
        {
          title: {
            contains: searchKey,
          },
        },
      ],
    },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
      topic: {
        select: {
          name: true,
        },
      },
      _count: {
        select: {
          comments: true,
        },
      },
    },
  });
}
