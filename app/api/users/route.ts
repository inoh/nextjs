import { NextResponse } from 'next/server';

/* eslint-disable no-var */
let users = [
  {
    id: 1,
    name: "inoue"
  },
  {
    id: 2,
    name: "watanabe"
  }
]

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const { name } = await req.json()
  const newUser = { id: users.length + 1, name }
  users = [...users, newUser]
  return NextResponse.json(newUser)
}
