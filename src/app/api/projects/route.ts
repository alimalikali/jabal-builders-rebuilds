import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongoose"
import Project from "@/models/project"
import { getSession } from "@/lib/auth"
import { projectSchema } from "@/lib/validators"

export async function GET() {
  try {
    await dbConnect()

    const projects = await Project.find({}).sort({ createdAt: -1 })

    return NextResponse.json(projects, { status: 200 })
  } catch (error) {
    console.error("Error fetching projects:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
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
    const result = projectSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json({ error: "Invalid input", details: result.error.format() }, { status: 400 })
    }

    // Create new project
    const project = new Project({
      ...result.data,
      completionDate: new Date(result.data.completionDate),
    })

    await project.save()

    return NextResponse.json(project, { status: 201 })
  } catch (error) {
    console.error("Error creating project:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
