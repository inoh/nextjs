import CreateForm from "@/users/components/client/CreateForm"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Users</h1>
      {children}
      <CreateForm />
    </div>
  );
}
