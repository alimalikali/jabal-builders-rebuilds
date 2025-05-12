import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongoose"
import Testimonial from "@/models/testimonial"
import { getSession } from "@/lib/auth"
import { testimonialSchema } from "@/lib/validators"

export async function GET() {
  try {
    await dbConnect()

    const testimonials = await Testimonial.find({}).sort({ createdAt: -1 })

    return NextResponse.json(testimonials, { status: 200 })
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    // Verify authentication
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()

    // Validate input
    const result = testimonialSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json({ error: "Invalid input", details: result.error.format() }, { status: 400 })
    }

    // Create new testimonial
    const testimonial = new Testimonial(result.data)

    await testimonial.save()

    return NextResponse.json(testimonial, { status: 201 })
  } catch (error) {
    console.error("Error creating testimonial:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
