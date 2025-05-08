"use client"  
import { useIsMobile } from "@/hooks/use-mobile";
import { ServiceType } from "@/types/services";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden h-full w-full
        border border-gray-100 hover:border-gray-200 relative group"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Gradient background that moves on hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
      />
      
      <div className="relative z-10 p-5 sm:p-6 md:p-8"> 
        <motion.div 
          className={`${service.iconBg} ${service.iconColor} p-3 sm:p-4 rounded-lg w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mb-4 sm:mb-6`}
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {service.icon}
        </motion.div>
        
        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-poppins group-hover:text-primary transition-colors duration-300">{service.title}</h3>
        <p className="text-gray-600 mb-4 sm:mb-6 line-clamp-3 text-sm sm:text-base">{service.description}</p>
        
        <Link href="/services" className="inline-flex items-center text-primary hover:text-secondary font-medium group text-sm sm:text-base">
          <span>Learn More</span> 
          <motion.span 
            className="ml-1 inline-flex"
            initial={isMobile ? {} : { x: 0 }}
            whileHover={isMobile ? {} : { x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ArrowRight size={isMobile ? 14 : 16} />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
