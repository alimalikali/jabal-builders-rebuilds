'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/home-data';



const Projects = () => {



  return (
    <section className="section bg-jabal">
      <div className="container">
        {/* Section heading */}
        <div  className="slide-in flex flex-col md:flex-row justify-between items-center md:items-end mb-12  slide-in">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="section-main-title md:text-left text-center">OUR PROJECTS</span>
            <h2 className="section-title mb-2 md:text-left text-center">
              Featured <span className="gold-gradient">Works</span>
            </h2>
            <p className=" section-subtitle md:text-left text-center">
              Explore our diverse portfolio of innovative architectural designs and construction projects.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="/projects">
              <Button variant="outline" className='hover:bg-jabal-muted hover:text-jabal hover:shadow-[0_0_15px_rgba(203,141,79,0.5)] hover:-translate-y-0.5'>
                View All Projects
              </Button>
            </Link>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 slide-in">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden h-[350px] md:h-[400px] rounded-sm"
            >
              {/* Image */}
              <Image
                width={1770}
                height={1080}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-jabal to-transparent opacity-80"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <span className="text-jabal-gold text-sm mb-2">{project.category}</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{project.title}</h3>
                <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href="/projects"
                    className="inline-block mt-2 text-white hover:text-jabal-gold border-b border-jabal-gold pb-1 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
