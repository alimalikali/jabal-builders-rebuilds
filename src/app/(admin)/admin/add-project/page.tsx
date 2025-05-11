import { ProjectForm } from "@/components/forms/project-form"

export default function AddProjectPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add New Project</h1>
        <p className="text-muted-foreground">Create a new construction project to showcase on the website</p>
      </div>

      <div className="border rounded-lg p-6">
        <ProjectForm />
      </div>
    </div>
  )
}
