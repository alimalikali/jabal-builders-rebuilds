import mongoose, { Schema, type Document } from "mongoose"

export interface ITestimonial extends Document {
  name: string
  role: string
  content: string
  rating: number
  image: string
  bgColor: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

const TestimonialSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    content: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    image: { type: String, required: true },
    bgColor: { type: String, required: true, default: "sky" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
)

export default mongoose.models.Testimonial || mongoose.model<ITestimonial>("Testimonial", TestimonialSchema)
