import { NextRequest, NextResponse } from 'next/server';

const data = ['吃饭', '睡觉', '打豆豆'];

export async function GET() {
  return NextResponse.json({ data });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const todo = formData.get('todo') as string;
  data.push(todo);
  return NextResponse.json({ data });
}
