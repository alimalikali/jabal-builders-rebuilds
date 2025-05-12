'use client';

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useHydrated } from '@/hooks/useHydrated';
import { Project } from '@/types/projects';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isHydrated = useHydrated();

  const animationStyle = isHydrated ? { animationDelay: `${0.1 * (index % 3)}s` } : {};

  const id = project._id;

  return (
    <Link
      href={`/projects/${id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
      style={animationStyle}
      prefetch={false}
      data-cursor-text="View Project"
    >
      <div className="relative">
        <AspectRatio ratio={4/3} className="w-full">
          <Image 
            width={800}
            height={600}
            src={project.imageSrc} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            priority={index < 3} // Only prioritize first few images
          />
        </AspectRatio>
        <div className="absolute top-4 right-4 bg-secondary text-primary text-xs font-bold px-2 py-1 rounded">
          {project.year}
        </div>
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg sm:text-xl font-bold line-clamp-1">{project.title}</h3>
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
            {project.category}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-2">{project.location}</p>
        <p className="text-gray-700 text-sm sm:text-base line-clamp-2 sm:line-clamp-3">{project.description}</p>
        <div className="mt-3 sm:mt-4 flex justify-end">
          <div className="text-primary group-hover:text-secondary transition-colors font-medium text-sm flex items-center min-h-[44px] sm:min-h-0">
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};