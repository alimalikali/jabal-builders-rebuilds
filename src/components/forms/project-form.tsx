"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { projectSchema, type ProjectFormValues } from "@/lib/validators"
import { zodResolver } from "@hookform/resolvers/zod"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Plus, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Switch } from "../ui/switch"

interface ProjectFormProps {
  id?: string | null
}

export function ProjectForm({ id }: ProjectFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [featureInput, setFeatureInput] = useState("")
  const router = useRouter()
  const { toast } = useToast()
  const isEditing = !!id

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      location: "",
      category: "Commercial",
      description: "",
      imageSrc: "",
      videoSrc: "",
      architect: "",
      area: 10000,
      features: [],
      completionDate: new Date(),
      isFeatured: false,
      isActive: true,
    },
  })

  // Fetch project data if editing
  useEffect(() => {
    if (isEditing) {
      const fetchProject = async () => {
        try {
          const response = await fetch(`/api/projects/${id}`)
          if (!response.ok) throw new Error("Failed to fetch project")
          const data = await response.json()
          form.reset(data)
        } catch (error) {
          toast({
            title: "Error",
            description: "Failed to load project data",
            variant: "destructive",
          })
          router.push("/admin/projects")
        }
      }
      fetchProject()
    }
  }, [id, form, router, toast, isEditing])

  const features = form.watch("features")

  const addFeature = () => {
    if (featureInput.trim() && !features.includes(featureInput.trim())) {
      form.setValue("features", [...features, featureInput.trim()])
      setFeatureInput("")
    }
  }

  const removeFeature = (feature: string) => {
    form.setValue(
      "features",
      features.filter((f) => f !== feature),
    )
  }

  async function onSubmit(data: ProjectFormValues) {
    setIsLoading(true)
    try {
      const url = isEditing ? `/api/projects/${id}` : "/api/projects"
      const method = isEditing ? "PATCH" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || `Failed to ${isEditing ? "update" : "create"} project`)
      }

      toast({
        title: isEditing ? "Project updated" : "Project created",
        description: `Your project has been ${isEditing ? "updated" : "created"} successfully`,
      })

      router.push("/admin/projects")
      router.refresh()
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Title</FormLabel>
                <FormControl>
                  <Input placeholder="Modern Office Building" {...field} className="placeholder:text-gray-300" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="New York, NY" {...field} className="placeholder:text-gray-300" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormItem>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                    </FormItem>
                    <SelectContent>
                      <SelectItem value="Commercial">Commercial</SelectItem>
                      <SelectItem value="Residential">Residential</SelectItem>
                      <SelectItem value="Public">Public</SelectItem>
                      <SelectItem value="Cultural">Cultural</SelectItem>
                      <SelectItem value="Mixed Use">Mixed Use</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="architect"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Architect</FormLabel>
                <FormControl>
                  <Input placeholder="John Smith" {...field} className="placeholder:text-gray-300" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="completionDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Completion Date</FormLabel>
                <FormControl>
                  {/* <Input
                    type="date"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    value={field.value}
                  /> */}
                  {/* <Calendar
                    selected={field.value}
                    onSelect={(e) => field.onChange(e)}
                  /> */}

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-white shadow-lg z-50 border rounded-md"
                      side="bottom"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        className="rounded-md border shadow w-fit"
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="area"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Area (sq ft)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageSrc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com/image.jpg" {...field} className="placeholder:text-gray-300" />
                </FormControl>
                <FormDescription>Main image for the project</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="videoSrc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Video URL (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com/video.mp4" {...field} className="placeholder:text-gray-300" />
                </FormControl>
                <FormDescription>Optional video for the project</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe the project in detail..." className="min-h-32 placeholder:text-gray-300 " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="features"
          render={() => (
            <FormItem>
              <FormLabel>Features</FormLabel>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Add a feature"
                  value={featureInput}
                  onChange={(e) => setFeatureInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      addFeature()
                    }
                  }}
                  className="placeholder:text-gray-300"
                />
                <Button type="button" onClick={addFeature} size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {features.length > 0 ? (
                  features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="gap-1">
                      {feature}
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-4 w-4 p-0 hover:bg-transparent"
                        onClick={() => removeFeature(feature)}
                      >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Remove {feature}</span>
                      </Button>
                    </Badge>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">No features added yet</p>
                )}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isFeatured"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 max-w-xl">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Featured Project</FormLabel>
                <FormDescription>
                  Featured projects will be highlighted on the homepage
                </FormDescription>
              </div>
              <FormControl>
                <div className="flex items-center gap-2 w-[80px]">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-primary w-full"
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="isActive"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 max-w-xl">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Active Project</FormLabel>
                <FormDescription>
                  Active project will be shown 
                </FormDescription>
              </div>
              <FormControl>
                <div className="flex items-center gap-2 w-[80px]">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-primary w-full"
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? (isEditing ? "Updating..." : "Creating...") : (isEditing ? "Update Project" : "Create Project")}
        </Button>
      </form>
    </Form>
  )
}
