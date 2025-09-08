import { NextResponse } from 'next/server';

export function GET() {
  console.log('测试 GET 路由缓存 /api/time');

  return NextResponse.json({
    time: new Date().toLocaleTimeString(),
  });
}
