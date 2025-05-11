import { getSession } from "@/lib/auth"

export async function AdminHeader() {
  const session = await getSession()

  return (
    <header className="border-b bg-background">
      <div className="flex h-16 items-center px-6">
        <div className="ml-auto flex items-center gap-4">
          <div className="text-sm">
            Welcome, <span className="font-medium">{session?.name}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
