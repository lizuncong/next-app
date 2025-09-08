import { NextResponse } from 'next/server';

export function GET() {
  console.log('测试 SLOW 路由缓存 /api/slow');
  const startTime = Date.now();
  while (Date.now() - startTime < 10000) {}
  return NextResponse.json({
    slow: true,
    time: new Date().toLocaleTimeString(),
  });
}
