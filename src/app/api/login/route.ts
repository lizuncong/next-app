import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  //   return NextResponse.json(
  //     {
  //       success: true,
  //     },
  //     {
  //       headers: {
  //         'Set-Cookie': `token=1234567890; Path=/; Max-Age=86400; HttpOnly`,
  //       },
  //     }
  //   );
  const response = NextResponse.json({
    success: true,
  });
  response.cookies.set('token', '123456789111', {
    path: '/',
    maxAge: 86400,
    httpOnly: true,
  });

  return response;
}
