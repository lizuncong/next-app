import { NextResponse } from 'next/server';

export function GET() {
  console.log('测试 SLOW 路由缓存 /api/fast');

  return NextResponse.json({
    fast: true,
    time: new Date().toLocaleTimeString(),
  });
}
