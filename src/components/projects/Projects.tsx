'use client';

import { Button } from "@/components/ui/button";
import { categories } from '@/config/projectsPage';
import { Project } from "@/types/projects";
import { useEffect, useState } from 'react';
import HeroSection from '../ui/hero/HeroSection';
import { FilterTabs } from './FilterTabs';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  initialCategory?: string;
}

export const Projects = ({ initialCategory = "All" }: ProjectsProps) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [isMobile, setIsMobile] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Debugging: Log the filtered projects
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => {
        const matches = project.category === activeCategory;
        return matches;
      });



      useEffect(() => {
        const fetchProjects = async () => {
          try {
            const response = await fetch("/api/projects");
            if (!response.ok) {
              throw new Error('Failed to fetch projects');
            }
            const data = await response.json();
            setProjects(data);
          } catch (error) {
    
            console.error("Error fetching projects:", error);
          } 
        };
        fetchProjects();
      }, []);


      
       

  
  return (
    <div className="bg-white">
      {/* Hero Section */}
    <HeroSection
    title="Our Projects"
    subtitle="Explore our portfolio of completed projects that showcase our expertise in construction and design."
    backgroundImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80"
    height="h-[60vh]"
    
    />
      
      {/* Filter Tabs */}
      <section className="py-6 md:py-10 border-b overflow-x-auto hide-scrollbar">
        <div className="fluid-container">
          <FilterTabs 
            categories={categories} 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="fluid-container px-4 sm:px-6 md:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-700">No projects found</h3>
              <p className="text-gray-500 mt-2">No projects match the selected category.</p>
              <Button 
                onClick={() => setActiveCategory("All")}
                className="mt-4 bg-primary hover:bg-primary/90 min-h-[44px]"
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>
      

    </div>
  );
};