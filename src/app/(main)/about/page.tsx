
import AboutStory from "@/components/about/AboutStory";
import AboutTeam from "@/components/about/AboutTeam.tsx";
import AboutTimeline from "@/components/about/AboutTimeline.tsx";
import AboutValues from "@/components/about/AboutValues";
import HeroSection from "@/components/ui/hero/HeroSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jabal Builders",
  description: "About Jabal Builders – Crafting beautiful homes and commercial spaces.",

};


const About = () => {

  return (
    <div className="overflow-hidden">
      <HeroSection
        title="About Jabal Builders"
        subtitle="Building excellence with precision, innovation, and integrity since 2005"
        backgroundImage="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1920&q=80"
        height="h-[60vh]"
      />
      <AboutStory />
      <AboutValues />
      <AboutTimeline />
      <AboutTeam />
    </div>
  );
};

export default About;
