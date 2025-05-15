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

interface Testimonial {
    _id: string
    name: string
    role: string
    content: string
    rating: number
    image: string
    bgColor: string
    isActive: boolean
}

export default function ProjectsPage() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
    const [testimonialToDelete, setTestimonialToDelete] = useState<string | null>(null)
    const router = useRouter()
    const { toast } = useToast()

    // Fetch projects
    const fetchProjects = async () => {
        try {
            const response = await fetch("/api/testimonials")
            if (!response.ok) throw new Error("Failed to fetch testimonials")
            const data = await response.json()
            setTestimonials(data)
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to load testimonials",
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
            const response = await fetch(`/api/testimonials/${id}`, {
                method: "DELETE",
            })

            if (!response.ok) throw new Error("Failed to delete testimonial")

            toast({
                title: "Success",
                description: "Testimonial deleted successfully",
            })

            // Refresh projects list
            fetchProjects()
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to delete testimonial",
                variant: "destructive",
            })
        } finally {
            setDeleteDialogOpen(false)
            setTestimonialToDelete(null)
        }
    }

    // Open delete confirmation dialog
    const confirmDelete = (id: string) => {
        setTestimonialToDelete(id)
        setDeleteDialogOpen(true)
    }

    if (isLoading) return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Loader2 className="h-6 w-6 animate-spin" />
                    <p className="text-sm text-muted-foreground">Loading testimonials...</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Building2 className="h-6 w-6" />
                    <h1 className="text-2xl font-bold">Testimonials</h1>
                </div>
                <Button onClick={() => router.push("/admin/add-testimonial")}>
                    Add New Testimonial
                </Button>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Content</TableHead>
                            <TableHead>Rating</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {testimonials.map((testimonial) => (
                            <TableRow key={testimonial._id}>
                                <TableCell>
                                    <div className="relative h-16 w-16">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </TableCell>
                                <TableCell className="font-medium">{testimonial.name}</TableCell>
                                <TableCell>{testimonial.role}</TableCell>
                                <TableCell>{testimonial.content.slice(0, 50)}...</TableCell>
                                <TableCell>{testimonial.rating}</TableCell>
                                <TableCell>{testimonial.isActive ? "Active" : "Inactive"}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => router.push(`/admin/add-testimonial?_id=${testimonial._id}`)}
                                        >
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => confirmDelete(testimonial._id)}
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
                            This action cannot be undone. This will permanently delete the testimonial.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => testimonialToDelete && handleDelete(testimonialToDelete)}
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
