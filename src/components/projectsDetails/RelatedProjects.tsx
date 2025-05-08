'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ProjectDetails } from '@/types/projects';

interface RelatedProjectsProps {
  projects: ProjectDetails[];
  currentProjectId: string;
}

export const RelatedProjects = ({ projects, currentProjectId }: RelatedProjectsProps) => {
  const relatedProjects = projects
    .filter(p => p.id !== currentProjectId)
    .slice(0, 3);

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-muted">
      <div className="container px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-poppins">More Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
          {relatedProjects.map((project) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <AspectRatio ratio={16/9}>
                <Image 
                  src={project.imageSrc} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">{project.title}</h3>
                  <p className="text-white/90 mb-2">{project.location}</p>
                  <span className="text-primary-foreground hover:text-white font-medium inline-flex items-center">
                    View Project
                  </span>
                </div>
              </AspectRatio>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Link href="/projects">
            <Button variant="secondary" size="lg">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};