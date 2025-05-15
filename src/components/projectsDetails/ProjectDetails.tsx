'use client';

import { Button } from '@/components/ui/button';
import { Project } from '@/types/projects';
import Link from 'next/link';

interface ProjectDetailsProps {
  project: Project;
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 font-poppins">Project Overview</h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>
            
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-poppins">Features</h3>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2 text-lg">✓</span>
                  <span className="text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-muted p-6 sm:p-8 rounded-lg shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 font-poppins border-b pb-2">Project Details</h3>
            
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-muted-foreground text-sm">COMPLETION</p>
                <p className="font-medium">{new Date(project.completionDate).getFullYear()}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">CATEGORY</p>
                <p className="font-medium">{project.category}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">ARCHITECT</p>
                <p className="font-medium">{project.architect}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">LOCATION</p>
                <p className="font-medium">{project.location}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">AREA</p>
                <p className="font-medium">{project.area}</p>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8">
              <Link href="/contact">
                <Button className="w-full" size="lg">
                  Request Similar Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};