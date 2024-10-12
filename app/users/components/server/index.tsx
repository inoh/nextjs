"use server"

import { getUsers } from "@/users/components/server/actions";
import UserProvider from '@/users/components/client/UserProvider';

async function User({ name }: { name: string }) {
  return <li>{name}</li>
}

export default async function Users() {
  const users = await getUsers()

  return (
    <UserProvider users={users}>
      <ul>
        {users.map((user) => <User key={user.id} name={user.name}/>)}
      </ul>
    </UserProvider>
  );
}
