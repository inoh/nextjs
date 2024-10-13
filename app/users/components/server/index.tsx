"use server"

import { getUsers } from "@/users/components/server/actions";

async function User({ name }: { name: string }) {
  return <li>{name}</li>
}

export default async function Users() {
  const users = await getUsers()

  return (
    <ul>
      {users.map((user) => <User key={user.id} name={user.name} />)}
    </ul>
  )
}