
import { ServiceType } from "@/app/types/services";
import { Building, Hammer, LayoutGrid, Wrench } from "lucide-react";

export const services: ServiceType[] = [
  {
    id: 1,
    icon: <Building className="h-10 w-10" />,
    title: "Commercial Construction",
    description: "Building state-of-the-art commercial spaces that combine functionality, aesthetics, and sustainability.",
    color: "from-amber-500/20 to-amber-500/5",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
  },
  {
    id: 2,
    icon: <Wrench className="h-10 w-10" />,
    title: "Residential Construction",
    description: "Creating dream homes with personalized designs, quality materials, and expert craftsmanship.",
    color: "from-emerald-500/20 to-emerald-500/5",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    id: 3,
    icon: <Hammer className="h-10 w-10" />,
    title: "Renovation & Remodeling",
    description: "Transforming existing spaces with modern upgrades, structural improvements, and innovative designs.",
    color: "from-sky-500/20 to-sky-500/5",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-600",
  },
  {
    id: 4,
    icon: <LayoutGrid className="h-10 w-10" />,
    title: "Architecture & Design",
    description: "Expert architectural services that blend creativity with practicality to create stunning, functional spaces.",
    color: "from-purple-500/20 to-purple-500/5",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
  }
];
