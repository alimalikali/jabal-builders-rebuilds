import { cookies } from "next/headers"
import type { NextRequest } from "next/server"
import type { IUser } from "@/models/user"

interface UserSession {
  id: string
  email: string
  name: string
  role: string
}

export async function createSession(user: Partial<IUser>): Promise<UserSession> {
  const session: UserSession = {
    id: user._id?.toString() || '',
    email: user.email || '',
    name: user.name || '',
    role: user.role || 'user',
  }
  return session
}

export async function getSession(): Promise<UserSession | null> {
  const cookieStore = await cookies()
  const sessionData = cookieStore.get("auth-session")?.value

  if (!sessionData) return null

  try {
    return JSON.parse(sessionData) as UserSession
  } catch (error) {
    return null
  }
}

export async function getUserFromRequest(request: NextRequest): Promise<UserSession | null> {
  const sessionData = request.cookies.get("auth-session")?.value

  if (!sessionData) return null

  try {
    return JSON.parse(sessionData) as UserSession
  } catch (error) {
    return null
  }
}
