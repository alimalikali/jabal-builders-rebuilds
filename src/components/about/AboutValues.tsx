'use client';

import { coreValues } from '@/config/about';
import { motion, useInView, Variants } from 'framer-motion';
import React, { useRef } from 'react';

const AboutValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item: Variants = {
    hidden: { y: 50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  };

  const hoverCard: Variants = {
    rest: { 
      scale: 1,
      boxShadow: "0px 0px 20px rgba(0,0,0,0.1)"
    },
    hover: { 
      scale: 1.03,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <section className="py-28 bg-gradient-to-b from-muted to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="centered-section-heading">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do, from how we interact with our clients to how we complete each project.
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {coreValues.map((value, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="h-full"
            >
              <motion.div
                variants={hoverCard}
                className="bg-white p-8 rounded-xl h-full flex flex-col border border-gray-100 overflow-hidden relative"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div 
                  className="bg-gradient-to-br from-primary to-secondary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.4, type: "spring" }}
                >
                  <div className="text-white text-3xl">
                    {value.icon}
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 font-poppins text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {value.description}
                </p>
                <motion.div 
                  className="mt-6 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.6, duration: 0.8 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutValues;