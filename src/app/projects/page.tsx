// app/projects/page.tsx
'use client'
import ProjectModal from '@/components/projects/ProjectModal';
import ProjectsCTA from '@/components/projects/ProjectsCTA';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import ProjectsHero from '@/components/projects/ProjectsHero';
import { projectsData } from '@/data/projects-data';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Residential', 'Commercial', 'Hospitality'];

  // Filter projects when filter changes
  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === filter));
    }
  }, [filter]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Animation for elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = document.querySelectorAll('.slide-in');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [filteredProjects]);

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <main>
      <ProjectsHero />
      <ProjectsGrid 
        projects={filteredProjects}
        onProjectSelect={openProjectModal}
        categories={categories}
        currentFilter={filter}
        onFilterChange={setFilter}
      />
      <ProjectsCTA />
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={closeProjectModal}
        />
      )}
    </main>
  );
};

export default Projects;