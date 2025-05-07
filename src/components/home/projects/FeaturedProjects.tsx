"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/config/projects";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="centered-section-heading">Featured Projects</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Explore our portfolio of completed projects that demonstrate our commitment to quality, innovation, and excellence in construction.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
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
    </section>
  );
};

export default FeaturedProjects;
