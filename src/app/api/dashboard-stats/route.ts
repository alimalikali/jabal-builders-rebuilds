import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongoose"
import Project from "@/models/project"
import Testimonial from "@/models/testimonial"

export async function GET() {
  await dbConnect()

  // Total projects
  const projects = await Project.find({})
  const totalProjects = projects.length
  const featuredProjects = projects.filter((p: any) => p.isFeatured).length

  // Testimonials
  const testimonials = await Testimonial.find({})
  const totalTestimonials = testimonials.length

  // Projects over time (by month)
  const projectsOverTime: { month: string, count: number }[] = []
  const monthMap: Record<string, number> = {}
  projects.forEach((p: any) => {
    const date = new Date(p.completionDate)
    const month = date.toLocaleString('default', { month: 'short', year: '2-digit' })
    monthMap[month] = (monthMap[month] || 0) + 1
  })
  Object.entries(monthMap).forEach(([month, count]) => {
    projectsOverTime.push({ month, count })
  })
  projectsOverTime.sort((a, b) => new Date(`1 ${a.month}`) > new Date(`1 ${b.month}`) ? 1 : -1)

  // Category distribution
  const categoryMap: Record<string, number> = {}
  projects.forEach((p: any) => {
    categoryMap[p.category] = (categoryMap[p.category] || 0) + 1
  })
  const categoryDistribution = Object.entries(categoryMap).map(([category, value]) => ({ category, value }))

  return NextResponse.json({
    stats: {
      projects: totalProjects,
      featured: featuredProjects,
      testimonials: totalTestimonials,
    },
    projectsOverTime,
    categoryDistribution,
  })
} 