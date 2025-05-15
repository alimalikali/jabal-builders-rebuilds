"use client"

import { useSearchParams } from "next/navigation"
import { TestimonialForm } from "@/components/forms/testimonial-form"

export default function AddTestimonialPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get("_id")
  const isEditing = !!id

  return (
    <div className="space-y-6 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {isEditing ? "Edit Testimonial" : "Add New Testimonial"}
        </h1>
        <p className="text-muted-foreground">
          {isEditing 
            ? "Update the testimonial details below" 
            : "Create a new testimonial to showcase on the website"}
        </p>
      </div>

      <div className="border rounded-lg p-6">
        <TestimonialForm id={id} />
      </div>
    </div>
  )
}
