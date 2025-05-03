// components/projects/ProjectsGrid.tsx
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

interface ProjectsGridProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
  categories: string[];
  currentFilter: string;
  onFilterChange: (category: string) => void;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  projects,
  onProjectSelect,
  categories,
  currentFilter,
  onFilterChange
}) => {
  return (
    <section className="section bg-jabal">
      <div className="container">
        <div className="flex flex-wrap justify-center mb-12 slide-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onFilterChange(category)}
              className={`px-6 py-2 mx-2 mb-3 rounded-sm transition-colors ${
                currentFilter === category
                  ? 'bg-jabal-gold text-jabal'
                  : 'bg-transparent text-white hover:bg-jabal-gold/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectSelect(project)}
              className="group relative overflow-hidden h-[300px] lg:h-[350px] rounded-sm cursor-pointer slide-in"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jabal to-transparent opacity-90"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-jabal-gold text-sm mb-1">{project.category}</span>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-jabal-muted text-sm">{project.location} | {project.year}</p>
                <div className="mt-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block text-white hover:text-jabal-gold border-b border-jabal-gold pb-1 transition-colors">
                    View Project
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-jabal-muted text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;