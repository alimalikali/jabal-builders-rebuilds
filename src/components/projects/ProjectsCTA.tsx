// components/projects/ProjectsCTA.tsx
import React from 'react';
import Image from 'next/image';

const ProjectsCTA = () => {
  return (
    <section className="section bg-jabal-light">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="slide-in">
            <span className="inline-block text-jabal-gold mb-4 tracking-wider text-sm">START A PROJECT</span>
            <h2 className="section-title mb-6">Let's Create Your Next Landmark</h2>
            <p className="text-jabal-muted mb-8">
              Whether you have a specific vision or need expert guidance, our team is ready to collaborate on your next architectural project. From concept to completion, we'll turn your ideas into stunning reality.
            </p>
            <a
              href="/contact"
              className="px-6 py-3 bg-jabal-gold text-white hover:bg-jabal-copper transition-colors rounded-sm inline-block"
            >
              Get in Touch
            </a>
          </div>

          <div className="slide-in">
            <Image
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3"
              alt="Architectural Design"
              width={1000}
              height={1000}
              className="w-full h-[400px] object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCTA;