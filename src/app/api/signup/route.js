import { NextResponse } from 'next/server';

// temporary in-memory store
let users = [];

export async function POST(req) {
  const { email, password } = await req.json();

  const exists = users.find(user => user.email === email);
  if (exists) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }

  users.push({ email, password });
  return NextResponse.json({ success: true });
}
