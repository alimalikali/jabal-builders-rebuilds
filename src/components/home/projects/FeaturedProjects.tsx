"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projectsData } from "@/config/projectsPage";
import ProjectCard from "./ProjectCard";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { useEffect } from "react";
import { useState } from "react";
import { Project } from "@/types/projects";
import { useToast } from "@/components/ui/use-toast";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          console.error('API Error:', response.status, response.statusText);
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        // Use mock data as fallback
        setProjects(projectsData);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="centered-section-heading">Loading Projects...</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[1, 2, 3].map((index) => (
              <div key={index} className="w-full h-[200px] bg-gray-200 animate-pulse rounded-lg"></div>
            ))}
          </div>
          <div className="text-center mt-12 mx-auto">
            <Button className="bg-primary hover:bg-primary/90">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <AnimatedSection animation="slide-up" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="centered-section-heading">Featured Projects</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Explore our portfolio of completed projects that demonstrate our commitment to quality, innovation, and excellence in construction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(project => project.isFeatured && project.isActive).map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <Button className="bg-primary hover:bg-primary/90">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FeaturedProjects;
