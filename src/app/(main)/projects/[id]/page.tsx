import { ProjectHero } from '@/components/projectsDetails/ProjectHero';
import { ProjectDetails } from '@/components/projectsDetails/ProjectDetails';
import { notFound } from 'next/navigation';

export default async function ProjectDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  try {

    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/projects/${params.id}`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      notFound();
    }

    const project = await response.json();

    if (!project || !project._id) {
      notFound();
    }

    return (
      <>
        <ProjectHero project={project} />
        <ProjectDetails project={project} />
      </>
    );
  } catch (error) {
    console.error('Page: Error in ProjectDetailPage:', error);
    notFound();
  }
}
export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  try {
    console.log('Metadata: Fetching project with ID:', params.id);

    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/projects/${params.id}`, {
      next: { revalidate: 3600 }
    });

    console.log('Metadata: API Response status:', response.status);

    // Handle API errors
    if (!response.ok) {
      console.error('Metadata: API Error:', response.status, response.statusText);
      return {
        title: 'Project Not Found',
        description: 'The requested project could not be found.',
      };
    }

    const project = await response.json();
    console.log('Metadata: Project data received:', project ? 'Yes' : 'No');

    // Validate project data
    if (!project || !project._id) {
      console.error('Metadata: Invalid project data:', project);
      return {
        title: 'Project Not Found',
        description: 'The requested project could not be found.',
      };
    }

    return {
      title: project.title,
      description: project.description,
      openGraph: {
        title: project.title,
        description: project.description,
        images: project.images?.[0] ? [project.images[0]] : [],
      },
    };
  } catch (error) {
    console.error('Metadata: Error in generateMetadata:', error);
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }
}