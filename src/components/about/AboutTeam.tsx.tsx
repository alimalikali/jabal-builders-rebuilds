'use client';

import React from 'react';
import Image from 'next/image';
import { teamMembers } from '@/config/about';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const AboutTeam = () => {
  return (
    <section className="py-24  relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-4xl font-extrabold text-primary mb-4 tracking-tight">
          Our Leadership Team
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
          Meet the experts who lead our company with vision, innovation, and impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
                <p className="text-secondary/80 text-sm font-medium mb-2">{member.position}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

  </section>
  );
};

export default AboutTeam;
