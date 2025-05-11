import mongoose, { Schema, type Document } from "mongoose"

export interface IProject extends Document {
  title: string
  location: string
  category: string
  description: string
  imageSrc: string
  videoSrc?: string
  architect: string
  completionDate: Date
  area: number
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
    completionDate: { type: Date, required: true },
    area: { type: Number, required: true },
    features: [{ type: String }],
  },
  { timestamps: true },
)

export default mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema)
