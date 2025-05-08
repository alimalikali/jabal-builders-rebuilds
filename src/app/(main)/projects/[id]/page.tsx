import { notFound } from 'next/navigation';
import { projectsData } from '@/config/projectsPage';
import { ProjectHero } from '@/components/projectsDetails/ProjectHero';
import { ProjectDetails } from '@/components/projectsDetails/ProjectDetails';
import { RelatedProjects } from '@/components/projectsDetails/RelatedProjects';

// Solution 1: Using async/await with proper typing
export default async function ProjectDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHero project={project} />
      <ProjectDetails project={project} />
      <RelatedProjects projects={projectsData} currentProjectId={project.id} />
    </>
  );
}

// Solution 2: Alternative using React's use hook (for client components)
/*
import { use } from 'react';

export default function ProjectDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(props.params);
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHero project={project} />
      <ProjectDetails project={project} />
      <RelatedProjects projects={projectsData} currentProjectId={project.id} />
    </>
  );
}
*/

// Generate static paths for SSG
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

// Optional: Generate metadata
export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const project = projectsData.find(p => p.id === id);
  return {
    title: project?.title || 'Project Not Found',
    description: project?.description,
  };
}