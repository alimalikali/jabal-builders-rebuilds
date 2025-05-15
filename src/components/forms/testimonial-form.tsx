"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { testimonialSchema, type TestimonialFormValues } from "@/lib/validators"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@radix-ui/react-switch"

interface TestimonialFormProps {
  id?: string | null
}

export function TestimonialForm({ id }: TestimonialFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const isEditing = !!id
  const form = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      name: "",
      role: "",
      content: "",
      rating: 5,
      image: "",
      bgColor: "amber",
      isActive: true,
    },
  })

    // Fetch project data if editing
    useEffect(() => {
      if (isEditing) {
        const fetchTestimonial = async () => {
          try {
            const response = await fetch(`/api/testimonials/${id}`)
            if (!response.ok) throw new Error("Failed to fetch testimonial")
            const data = await response.json()
            form.reset(data)
          } catch (error) {
            toast({
              title: "Error",
              description: "Failed to load testimonial data",
              variant: "destructive",
            })
            router.push("/admin/testimonials")
          }
        }
        fetchTestimonial()
      }
    }, [id, form, router, toast, isEditing])

  async function onSubmit(data: TestimonialFormValues) {
    setIsLoading(true)

    try {
      const url = isEditing ? `/api/testimonials/${id}` : "/api/testimonials"
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
        throw new Error(result.error || "Failed to create testimonial")
      }

      toast({
        title: isEditing ? "Testimonial updated" : "Testimonial created",
        description: `Your testimonial has been ${isEditing ? "updated" : "created"} successfully`,
      })

      router.push("/admin/testimonials")
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Client Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className="placeholder:text-gray-300" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Client Role</FormLabel>
                <FormControl>
                  <Input placeholder="CEO, XYZ Company" {...field} className="placeholder:text-gray-300" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number.parseInt(value))}
                  value={field.value.toString()}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a rating" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">1 Star</SelectItem>
                    <SelectItem value="2">2 Stars</SelectItem>
                    <SelectItem value="3">3 Stars</SelectItem>
                    <SelectItem value="4">4 Stars</SelectItem>
                    <SelectItem value="5">5 Stars</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Client Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com/image.jpg" {...field} className="placeholder:text-gray-300" />
                </FormControl>
                <FormDescription>Profile image of the client</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="bgColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Background Color</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a background color" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="amber">Amber</SelectItem>
                    <SelectItem value="sky">Sky</SelectItem>
                    <SelectItem value="purple">Purple</SelectItem>
                    <SelectItem value="pink">Pink</SelectItem>
                    <SelectItem value="emerald">Emerald</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>Background color of the testimonial card</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Testimonial Content</FormLabel>
              <FormControl>
                <Textarea placeholder="Write the client's testimonial here..." className="min-h-32 placeholder:text-gray-300" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isActive"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Active</FormLabel>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
              <FormDescription>Toggle to activate or deactivate the testimonial</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? (isEditing ? "Updating..." : "Creating...") : (isEditing ? "Update Testimonial" : "Create Testimonial")}
        </Button>
      </form>
    </Form>
  )
}
