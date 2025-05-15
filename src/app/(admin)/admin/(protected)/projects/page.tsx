"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Building2, Edit, Loader2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

interface Project {
    _id: string
    title: string
    location: string
    category: string
    description: string
    imageSrc: string
    videoSrc?: string
    architect: string
    isFeatured: boolean
    area: string
    features: string[]
    completionDate: Date;
    isActive: boolean;
}

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
    const [projectToDelete, setProjectToDelete] = useState<string | null>(null)
    const router = useRouter()
    const { toast } = useToast()

    // Fetch projects
    const fetchProjects = async () => {
        try {
            const response = await fetch("/api/projects")
            if (!response.ok) throw new Error("Failed to fetch projects")
            const data = await response.json()
            setProjects(data)
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to load projects",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    // Delete project
    const handleDelete = async (id: string) => {
        try {
            const response = await fetch(`/api/projects/${id}`, {
                method: "DELETE",
            })

            if (!response.ok) throw new Error("Failed to delete project")

            toast({
                title: "Success",
                description: "Project deleted successfully",
            })

            // Refresh projects list
            fetchProjects()
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to delete project",
                variant: "destructive",
            })
        } finally {
            setDeleteDialogOpen(false)
            setProjectToDelete(null)
        }
    }

    // Open delete confirmation dialog
    const confirmDelete = (id: string) => {
        setProjectToDelete(id)
        setDeleteDialogOpen(true)
    }


    if (isLoading) return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Loader2 className="h-6 w-6 animate-spin" />
                    <p className="text-sm text-muted-foreground">Loading projects...</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Building2 className="h-6 w-6" />
                    <h1 className="text-2xl font-bold">Projects</h1>
                </div>
                <Button onClick={() => router.push("/admin/add-project")}>
                    Add New Project
                </Button>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Featured</TableHead>
                            <TableHead>Created At</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects.map((project) => (
                            <TableRow key={project._id}>
                                <TableCell>
                                    <div className="relative h-16 w-24">
                                        <Image
                                            src={project.imageSrc}
                                            alt={project.title}
                                            fill
                                            className="object-cover rounded-md"
                                        />
                                    </div>
                                </TableCell>
                                <TableCell className="font-medium">{project.title}</TableCell>
                                <TableCell>{project.location}</TableCell>
                                <TableCell>{project.isActive ? "Active" : "Inactive"}</TableCell>
                                <TableCell>{project.isFeatured ? "Yes" : "No"}</TableCell>
                                <TableCell>{new Date(project.completionDate).toLocaleDateString()}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => router.push(`/admin/add-project?_id=${project._id}`)}
                                        >
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => confirmDelete(project._id)}
                                        >
                                            <Trash2 className="h-4 w-4 text-red-500" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the project.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => projectToDelete && handleDelete(projectToDelete)}
                            className="bg-red-500 hover:bg-red-600"
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
