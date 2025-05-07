import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FeaturedProjectType } from "@/app/types/projects";
import { useHydrated } from "@/app/hooks/useHydrated";
import Image from "next/image";

interface ProjectCardProps {
  project: FeaturedProjectType;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {

  const isMounted = useHydrated();

  return (
    <div className={`group relative overflow-hidden rounded-lg shadow-lg reveal ${isMounted ? 'active' : ''}`} style={{ animationDelay: `${0.1 * index}s` }}>
      <Image
        width={1000}
        height={1000}
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-64 aspect-auto object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-white/90 mb-4">{project.description}</p>
        <Link href={`/projects/${project.id}`} className="text-secondary hover:text-white font-medium inline-flex items-center">
          View Project <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
