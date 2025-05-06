"use client"
import CompanyIntro from "@/components/home/CompanyIntro";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import useScrollAnimation from "@/components/ui/useScrollAnimation";
import Head from "next/head";




export default function HomeClient() {
  useScrollAnimation();
  return (
    <>
      <Head>
        <title>Home | Jabal Builders</title>
        <meta name="description" content="Welcome to Jabal Builders — building beautiful homes and commercial spaces." />
      </Head>
      <main>
        <Hero />
        <Partners />
        <CompanyIntro />
        <Services />
        <Projects />
        <Testimonials />
        <CTA />
      </main>
    </>

  )
}