'use client'
import { processSteps } from "@/config/servicesPage";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ProcessOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Reset animation state when section leaves viewport
  useEffect(() => {
    if (!isInView && hasAnimated) {
      setHasAnimated(false);
    }
  }, [isInView, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const itemVariants: import('framer-motion').Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const iconVariants: import('framer-motion').Variants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring" as const,
        stiffness: 300
      }
    }
  };

  const underlineVariants: import('framer-motion').Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const
      }
    },
    exit: {
      scaleX: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  const handleAnimationComplete = () => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          onAnimationComplete={handleAnimationComplete}
          className="text-center mb-16"
        >
          <h2 className="centered-section-heading">
            Our Service Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We follow a systematic approach to ensure every service we deliver meets our high standards and your expectations.
          </p>
        </motion.div>
        
        <div ref={ref}>
          <AnimatePresence>
            {isInView && (
              <motion.div
                key="process-steps"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative"
              >
                {/* Decorative elements */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2"></div>
                
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    variants={itemVariants}
                    whileHover="hover"
                    className={`relative z-10 bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:border-primary/20 transition-colors`}
                    custom={index}
                  >
                    <motion.div 
                      variants={iconVariants}
                      className="bg-gradient-to-br from-primary to-secondary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg"
                    >
                      <span className="text-white text-3xl font-bold">{step.number}</span>
                    </motion.div>
                    
                    <div className="relative">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      
                      <motion.div 
                        className="absolute -bottom-10 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left"
                        variants={underlineVariants}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}