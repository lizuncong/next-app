import { NextResponse } from 'next/server';
import db from '@/src/lowdb';
interface IParams {
  params: Promise<{ id: string }>;
}

// DELETE => /api/articles/:id
export async function DELETE(request: Request, { params }: IParams) {
  //...
  const { id } = await params;
  let idx = -1;
  await db.update(({ posts }) => {
    idx = posts.findIndex(post => post.id === id);
    if (idx > -1) {
      posts.splice(idx, 1);
    }
  });
  if (idx === -1) {
    return NextResponse.json({ code: -1, message: '数据不存在！' });
  }
  return NextResponse.json({ code: 0, message: '删除成功！' });
}

// PATCH => /api/articles/:id
export async function PATCH(request: Request, { params }: IParams) {
  //...
  const data = await request.json();
  const { id } = await params;
  let idx = -1;

  await db.update(({ posts }) => {
    idx = posts.findIndex(post => post.id === id);
    if (idx > -1) {
      posts[idx] = {
        ...posts[idx],
        ...data,
        updateTime: new Date().toLocaleString(),
      };
    }
  });
  if (idx === -1) {
    return NextResponse.json({ code: -1, message: '数据不存在！' });
  }
  return NextResponse.json({
    code: 0,
    message: '修改成功！',
    data: db.data.posts[idx],
  });
}

// GET => /api/articles/:id
export async function GET(request: Request, { params }: IParams) {
  //...
  const { id } = await params;
  const post = db.data.posts.find(post => post.id === id);
  if (!post) {
    return NextResponse.json({ code: -1, message: '数据不存在！' });
  }
  return NextResponse.json({
    code: 0,
    message: '查找成功！',
    data: post,
  });
}
