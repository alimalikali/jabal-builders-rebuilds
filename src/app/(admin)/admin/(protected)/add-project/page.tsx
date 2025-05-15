"use client"

import { useSearchParams } from "next/navigation"
import { ProjectForm } from "@/components/forms/project-form"

export default function AddProjectPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get("_id")
  const isEditing = !!id

  return (
    <div className="space-y-6 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {isEditing ? "Edit Project" : "Add New Project"}
        </h1>
        <p className="text-muted-foreground">
          {isEditing 
            ? "Update the project details below" 
            : "Create a new construction project to showcase on the website"}
        </p>
      </div>

      <div className="border rounded-lg p-6">
        <ProjectForm id={id} />
      </div>
    </div>
  )
}
