"use client"
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useHydrated } from "@/hooks/useHydrated";
import { Project } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isHydrated = useHydrated();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 * index);
    return () => clearTimeout(timer);
  }, [index]);
  const id = project._id;

  return (
    <Link href={`/projects/${id}`}>
      <div
        className={`group relative overflow-hidden rounded-lg shadow-lg reveal ${
          isVisible && isHydrated ? "active" : ""
        }`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <AspectRatio ratio={16 / 9}>
          <Image
            src={project.imageSrc}
            width={1000}
            height={1000}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm opacity-90">{project.location}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
