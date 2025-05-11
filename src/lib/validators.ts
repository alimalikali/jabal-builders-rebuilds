import { z } from "zod"

export const projectSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  location: z.string().min(3, { message: "Location is required" }),
  category: z.string().min(2, { message: "Category is required" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  imageSrc: z.string().url({ message: "Valid image URL is required" }),
  videoSrc: z.string().url({ message: "Valid video URL is required" }).optional().or(z.literal("")),
  architect: z.string().min(3, { message: "Architect name is required" }),
  completionDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Valid date is required",
  }),
  area: z.coerce.number().positive({ message: "Area must be a positive number" }),
  features: z.array(z.string()).min(1, { message: "At least one feature is required" }),
})

export const testimonialSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  role: z.string().min(2, { message: "Role is required" }),
  content: z.string().min(10, { message: "Content must be at least 10 characters" }),
  rating: z.coerce.number().min(1).max(5, { message: "Rating must be between 1 and 5" }),
  image: z.string().url({ message: "Valid image URL is required" }),
  accentColor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
    message: "Valid hex color code is required",
  }),
  bgColor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
    message: "Valid hex color code is required",
  }),
})

export const loginSchema = z.object({
  email: z.string().email({ message: "Valid email is required" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

export type ProjectFormValues = z.infer<typeof projectSchema>
export type TestimonialFormValues = z.infer<typeof testimonialSchema>
export type LoginFormValues = z.infer<typeof loginSchema>
