import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Building2, CheckCircle2, Users } from "lucide-react"

export default function Admin() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Logo Section */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8">
              <Image
                src="/assets/images/logo/logo-01.png"
                alt="Jabar Builder Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Building Dreams Into Reality
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Jabar Builder is a premier construction company with a reputation for excellence and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
