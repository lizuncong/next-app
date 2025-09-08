import { NextResponse } from 'next/server';
export function GET() {
  console.log('测试 GET 路由缓存失效的场景 /api/time-outof-cache');
  return NextResponse.json({
    time: new Date().toLocaleTimeString(),
  });
}
