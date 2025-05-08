"use client"
import { motion } from "framer-motion";

const GalleryTitle = () => {


  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="text-center mb-12 sm:mb-16"
    >
      <h2 className={`centered-section-heading `}>Our Signature Projects</h2>
      <p className={`text-center text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 `}>
        Explore our portfolio of exceptional architectural projects that showcase our commitment to innovation, quality, and design excellence.
      </p>
    </motion.div>
  );
};

export default GalleryTitle;
