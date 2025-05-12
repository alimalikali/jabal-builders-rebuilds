import mongoose, { Schema, type Document } from "mongoose"

export interface IProject extends Document {
  title: string
  location: string
  category: string
  description: string
  imageSrc: string
  videoSrc?: string
  architect: string
  isFeatured: boolean
  area: string
  year: number
  features: string[]
  createdAt: Date
  updatedAt: Date
}

const ProjectSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    imageSrc: { type: String, required: true },
    videoSrc: { type: String },
    architect: { type: String, required: true },
    area: { type: String, required: true },
    year: { type: Number, required: true },
    features: [{ type: String }],
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
)

// Add index for better query performance
ProjectSchema.index({ _id: 1 });

export default mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema)
