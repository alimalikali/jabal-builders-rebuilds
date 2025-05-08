
export interface FeaturedProjectType {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}


export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  imageSrc: string;
  year: number;
}

export interface ProjectDetails {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  imageSrc: string;
  videoSrc?: string;
  architect: string;
  completionDate: string;
  area: string;
  features: string[];
}