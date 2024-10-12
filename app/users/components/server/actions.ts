"use server"

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export type UserResponse = {
  id: number
  name: string
}

export async function getUsers() {
  const res = await fetch('http://web:3000/api/users', {
    next: { tags: ['users'] }
  })
  const users: UserResponse[] = await res.json()
  return users
}

export async function createUser(formData: FormData) {
  const name = formData.get('name')

  const res = await fetch('http://web:3000/api/users', {
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
