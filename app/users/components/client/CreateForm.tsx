"use client"

import { useRef } from 'react';
import { createUser } from "@/users/components/server/actions"

export default function CreateForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const action = createUser.bind(null);

  return (
    <form ref={formRef} action={async (formData) => {
      await action(formData);
      formRef.current?.reset();
    }}>
      <input type="text" name="name" required />
      <button type="submit">Create</button>
    </form>
  )
}
