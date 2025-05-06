
import ProjectsClient from "@/components/projects/Index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Jabal Builders",
  description: "Explore our portfolio of completed projects.",
};

export default function Projects() {
  return <ProjectsClient />;
}


