import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { email, password } = body ?? {};

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    // TODO: replace with real credential validation.
    // For now, accept any non-empty email/password to enable UI flows.

    const res = NextResponse.json({ message: 'Signed in' });
    // Issue a simple mock token; replace with a real JWT later.
    const token = `mock.${Buffer.from(email).toString('base64url')}`;
    res.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return res;
  } catch (e) {
    return NextResponse.json({ message: 'Unexpected error' }, { status: 500 });
  }
}
