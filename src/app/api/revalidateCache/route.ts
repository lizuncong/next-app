// /api/revalidateCache?path=/   => 校验 / 路径的缓存
// /api/revalidateCache?path=/api/cache   => 校验/api/cache路径的缓存
// /api/revalidateCache?tag=xxxx   => 校验 xxx 标记的缓存

import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path');
  const tag = request.nextUrl.searchParams.get('tag');

  if (path) {
    revalidatePath(path);
    return NextResponse.json({
      revalidated: true,
      time: new Date().toISOString(),
    });
  }

  if (tag) {
    revalidateTag(tag);
    return NextResponse.json({
      revalidated: true,
      time: new Date().toISOString(),
    });
  }

  return NextResponse.json({
    revalidated: false,
    time: Date.now(),
  });
}
