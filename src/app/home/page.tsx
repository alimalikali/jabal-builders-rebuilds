import CompanyIntro from "@/components/home/CompanyIntro";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'JABAL BUILDERS | Premium Contractors & Architects',
  description: 'We design and build exquisite spaces that inspire. Discover our premium architectural and construction services.',
};


export default function MainHomePage() {
  return (
    <main>
      <Hero />
      <Partners />
      <CompanyIntro />
      <Services />
      <Projects  />
      <Testimonials />
      <CTA/>
    </main>
  )
}