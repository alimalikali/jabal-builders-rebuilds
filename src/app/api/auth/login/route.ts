import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongoose"
import User from "@/models/user"
import { createSession } from "@/lib/auth"
import { loginSchema } from "@/lib/validators"

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const body = await request.json()

    // Validate input
    const result = loginSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json({ error: "Invalid input", details: result.error.format() }, { status: 400 })
    }

    const { email, password } = result.data

    // Find user by email
    const user = await User.findOne({ email })

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Compare password
    if (user.password !== password) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }


    // Create JWT token
    const session = await createSession(user)

    // Set cookie
    const response = NextResponse.json(
      { success: true, user: { id: user._id, name: user.name, email: user.email } },
      { status: 200 },
    )

    response.cookies.set({
      name: "auth-session",
      value: JSON.stringify(session),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    })

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
