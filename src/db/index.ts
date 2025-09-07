import { PrismaClient } from '../generated/prisma';

export const db = new PrismaClient();

db.snippet
  .create({
    data: {
      title: 'React',
      code: 'const React = () => <div>React</div>',
    },
  })
  .then(res => {
    console.log('创建成功。。。', res);
  });
