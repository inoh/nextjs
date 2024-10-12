"use client"

import { createContext, ReactNode } from 'react';
import { UserResponse } from "@/users/components/server/actions";

const UsersContext = createContext([] as UserResponse[]);

interface UsersPorps {
  users: UserResponse[];
  children: ReactNode;
}
export default function UserProvider(props: UsersPorps) {
  return (
    <UsersContext.Provider value={props.users}>
      {props.children}
    </UsersContext.Provider>
  );
}
