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
  isActive: boolean
  area: string
  completionDate: Date
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
    completionDate: { type: Date, required: true },
    features: [{ type: String }],
    isActive: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export default mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema)
