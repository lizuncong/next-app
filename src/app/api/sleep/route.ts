import { NextResponse } from 'next/server';

export async function GET() {
  console.log('测试 SLEEP 路由缓存 /api/sleep');
  await new Promise(resolve => setTimeout(resolve, 10 * 1000));
  return NextResponse.json({
    slow: true,
    time: new Date().toLocaleTimeString(),
  });
}
