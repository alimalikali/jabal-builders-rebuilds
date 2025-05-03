// components/projects/ProjectModal.tsx
import React from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-jabal/90 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-jabal-light max-w-4xl w-full rounded-sm">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white hover:text-jabal-gold transition-colors z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-[300px] md:h-auto">
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <span className="inline-block text-jabal-gold mb-2 text-sm">{project.category}</span>
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-jabal-muted">Location</p>
                <p className="text-white">{project.location}</p>
              </div>
              <div>
                <p className="text-jabal-muted">Year</p>
                <p className="text-white">{project.year}</p>
              </div>
              <div>
                <p className="text-jabal-muted">Project Description</p>
                <p className="text-white">
                  This project showcases our commitment to innovative design and quality construction.
                  The architecture harmonizes with its environment while meeting the functional requirements
                  of its purpose.
                </p>
              </div>
            </div>

            <a
              href="#"
              className="inline-block text-jabal-gold hover:text-jabal-copper transition-colors"
            >
              View Full Case Study
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;