
export interface Project {
  _id: string
  title: string
  location: string
  category: string
  description: string
  imageSrc: string
  videoSrc?: string
  architect: string
  isFeatured: boolean
  area: string
  features: string[]
  completionDate: Date;
  isActive: boolean;
}
