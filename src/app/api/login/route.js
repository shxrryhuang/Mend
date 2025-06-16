import { NextResponse } from 'next/server';

const fakeUser = {
  email: "test@example.com",
  password: "password123",
};

export async function POST(req) {
  const { email, password } = await req.json();
  if (email === fakeUser.email && password === fakeUser.password) {
    return NextResponse.json({ id: 1, email });
  }
  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}