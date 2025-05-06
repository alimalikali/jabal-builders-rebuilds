"use client"

import AboutHero from '@/components/about/AboutHero';
import OfficeLocation from '@/components/about/OfficeLocation';
import OurTeam from '@/components/about/OurTeam';
import Timeline from '@/components/about/Timeline';
import VisionMission from '@/components/about/VisionMission';
import useScrollAnimation from '@/components/ui/useScrollAnimation';
import { teamMembers, timelineEvents } from '@/data/about-data';
import Head from 'next/head';

const AboutClient = () => {
  useScrollAnimation();

  return (
    <>
    <Head>
      <title>About | Jabal Builders</title>
      <meta name="description" content="Learn about our company, our team, and our commitment to excellence." />
    </Head>
      <main>
        <AboutHero />
        <VisionMission />
        <OurTeam teamMembers={teamMembers} />
        <Timeline timelineEvents={timelineEvents} />
        <OfficeLocation />
        
      </main>

    </> 
  );
};

export default AboutClient;
