import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getUserFromRequest } from "@/lib/auth"

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  if (path.startsWith("/admin") && !path.startsWith("/admin/login")) {
    const user = await getUserFromRequest(request)
    if (!user) {
      const response = NextResponse.redirect(new URL("/admin/login", request.url))
      response.cookies.delete("auth-session")
      return response
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*"
  ]
}
