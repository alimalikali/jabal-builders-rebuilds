import { TestimonialForm } from "@/components/forms/testimonial-form"

export default function AddTestimonialPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add New Testimonial</h1>
        <p className="text-muted-foreground">Create a new client testimonial to display on the website</p>
      </div>

      <div className="border rounded-lg p-6">
        <TestimonialForm />
      </div>
    </div>
  )
}
