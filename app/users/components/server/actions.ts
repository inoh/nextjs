"use server"

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const API_URL = typeof window === 'undefined' ? process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000' : ''

export type UserResponse = {
  id: number
  name: string
}

export async function getUsers() {
  const res = await fetch(`${API_URL}/api/users`, {
    next: { tags: ['users'] }
  })
  const users: UserResponse[] = await res.json()
  return users
}

export async function createUser(formData: FormData) {
  const name = formData.get('name')

  const res = await fetch(`${API_URL}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name })
  })
  revalidateTag('users')
  if (!res.ok) {
    return { error: 'Failed to create user' }
  }
  redirect("/users");
}
