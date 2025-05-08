import { notFound } from 'next/navigation';
import { projectsData } from '@/config/projectsPage';
import { ProjectHero } from '@/components/projectsDetails/ProjectHero';
import { ProjectDetails } from '@/components/projectsDetails/ProjectDetails';
import { RelatedProjects } from '@/components/projectsDetails/RelatedProjects';

type tParams = Promise<{ id: string[] }>;


export default async function ProjectDetailPage({ params }: { params: tParams }) {
  // Make the component async
  const { id }: { id: string[] } = await params;
  const project = projectsData.find(p => p.id === id[1]);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <ProjectHero project={project} />
      <ProjectDetails project={project} />
      <RelatedProjects projects={projectsData} currentProjectId={project.id} />
    </>
  );
}