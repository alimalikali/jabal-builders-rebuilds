"use client"

import AboutHero from '@/components/about/AboutHero';
import OfficeLocation from '@/components/about/OfficeLocation';
import OurTeam from '@/components/about/OurTeam';
import Timeline from '@/components/about/Timeline';
import VisionMission from '@/components/about/VisionMission';

const teamMembers = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    position: 'Founder & Chief Architect',
    image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Sarah Khan',
    position: 'Director of Construction',
    image: 'https://images.pexels.com/photos/3760819/pexels-photo-3760819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Mohammed Al Falasi',
    position: 'Senior Architect',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    name: 'Layla Mahmoud',
    position: 'Interior Design Lead',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];
const timelineEvents = [
  {
    year: '2010',
    title: 'Foundation',
    description: 'JABAL BUILDERS was established with a vision to create architectural masterpieces.',
  },
  {
    year: '2012',
    title: 'First Major Project',
    description: 'Completed our first landmark project, setting the standard for our future work.',
  },
  {
    year: '2015',
    title: 'Expansion',
    description: 'Expanded our services to include comprehensive construction and interior design.',
  },
  {
    year: '2018',
    title: 'International Recognition',
    description: 'Received international awards for architectural excellence and innovation.',
  },
  {
    year: '2020',
    title: 'Sustainable Initiative',
    description: 'Launched our commitment to sustainable design and construction practices.',
  },
  {
    year: '2023',
    title: 'Digital Transformation',
    description: 'Integrated advanced digital technologies into our design and construction processes.',
  },
];


const About = () => {

  return (
    <>

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

export default About;
