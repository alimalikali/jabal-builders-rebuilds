"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Building2, Home, LogOut, MessageSquare, PlusCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export function AdminSidebar() {
  const pathname = usePathname()
  const { toast } = useToast()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        toast({
          title: "Logged out successfully",
          description: "You have been logged out of your account",
        })
        router.push("/admin/login")
      } else {
        throw new Error("Logout failed")
      }
    } catch (error) {
      toast({
        title: "Logout failed",
        description: "There was a problem logging out",
        variant: "destructive",
      })
    }
  }

  const navItems = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: Home,
    },
    {
      title: "Projects",
      href: "/admin/projects",
      icon: Building2,
    },
    {
      title: "Add Project",
      href: "/admin/add-project",
      icon: PlusCircle,
    },
    {
      title: "Testimonials",
      href: "/admin/testimonials",
      icon: MessageSquare,
    },
    {
      title: "Add Testimonial",
      href: "/admin/add-testimonial",
      icon: PlusCircle,
    },
  ]

  return (
    <div className="flex flex-col max-h-full border-r bg-muted/40">
      <div className="p-6">
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <Building2 className="h-6 w-6" />
          <span className="font-bold text-xl">Jabar Admin</span>
        </Link>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn("w-full justify-start", pathname === item.href && "font-medium")}
                >
                  <item.icon className="mr-2 h-5 w-5" />
                  {item.title}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  )
}
