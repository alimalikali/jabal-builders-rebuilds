import { z } from "zod"

export const projectSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  location: z.string().min(3, { message: "Location is required" }),
  category: z.enum(["Commercial", "Residential", "Public", "Cultural", "Mixed Use"], { message: "Category is required" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  imageSrc: z.string().url({ message: "Valid image URL is required" }),
  videoSrc: z.string().url({ message: "Valid video URL is required" }).optional().or(z.literal("")),
  architect: z.string().min(3, { message: "Architect name is required" }),
  area: z.coerce.number().positive({ message: "Area must be a positive number" }),
  features: z.array(z.string()).min(1, { message: "At least one feature is required" }),
  isFeatured: z.boolean().optional(),
  completionDate: z.date(),
  isActive: z.boolean().optional(),
})

export const testimonialSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  role: z.string().min(2, { message: "Role is required" }),
  content: z.string().min(10, { message: "Content must be at least 10 characters" }),
  rating: z.coerce.number().min(1).max(5, { message: "Rating must be between 1 and 5" }),
  image: z.string().url({ message: "Valid image URL is required" }),
  bgColor: z.enum(["amber", "sky", "purple", "pink", "emerald"], {
    message: "Valid hex color code is required",
  }),
  isActive: z.boolean().optional(),
})

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(8, { message: "Invalid password" }),
})

export type ProjectFormValues = z.infer<typeof projectSchema>
export type TestimonialFormValues = z.infer<typeof testimonialSchema>
export type LoginFormValues = z.infer<typeof loginSchema>
