import { GalleryItemType } from "@/types/gallery";
import { TestimonialType } from "@/types/testimonials";
import { ServiceType } from "@/types/services";
import { Building, Hammer, LayoutGrid, Wrench } from "lucide-react";



export const approachSteps = [
    {
      id: 1,
      title: "Discovery",
      description: "We begin by understanding your vision, requirements, and constraints through comprehensive consultation and site analysis.",
      icon: "🔍",
      color: "bg-amber-500",
      lightColor: "bg-amber-100",
      textColor: "text-amber-900",
    },
    {
      id: 2,
      title: "Planning",
      description: "Our team develops detailed designs, project timelines, resource allocation plans, and budget estimates for your approval.",
      icon: "📋",
      color: "bg-sky-500",
      lightColor: "bg-sky-100",
      textColor: "text-sky-900"
    },
    {
      id: 3,
      title: "Execution",
      description: "We implement the approved plans with skilled craftsmanship, quality materials, and rigorous project management to ensure excellence.",
      icon: "🛠️",
      color: "bg-emerald-500",
      lightColor: "bg-emerald-100",
      textColor: "text-emerald-900"
    },
    {
      id: 4,
      title: "Delivery",
      description: "We complete final inspections, address any adjustments, and deliver your project with comprehensive documentation and support.",
      icon: "🏆",
      color: "bg-purple-500",
      lightColor: "bg-purple-100",
      textColor: "text-purple-900"
    }
  ];

export const galleryItems: GalleryItemType[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=1920&q=80",
    title: "Azure Heights Tower",
    location: "New York, USA",
    category: "Commercial"
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=1920&q=80",
    title: "Crystal Pavilion",
    location: "London, UK", 
    category: "Public"
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&w=1920&q=80",
    title: "Skyline Residences",
    location: "Dubai, UAE",
    category: "Residential"
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1920&q=80",
    title: "White Cube Gallery",
    location: "Tokyo, Japan",
    category: "Cultural"
  },
  {
    id: "5",
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=1920&q=80",
    title: "Emerald Plaza",
    location: "Singapore",
    category: "Mixed Use"
  }
];

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

export const showcaseImages = [
    {
      url: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80",
      title: "Downtown Skyscraper"
    },
    {
      url: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80",
      title: "Minimalist Structure"
    },
    {
      url: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80",
      title: "Wavy Facade Building" 
    },
    {
      url: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=800&q=80",
      title: "Modern Blue Tower"
    }
  ];

export const testimonials: TestimonialType[] = [
  {
    id: "1",
    name: "Michael Robinson",
    role: "CEO, TechCorp Inc.",
    content: "Jabal Builders transformed our office space into something truly magnificent. Their attention to detail and commitment to quality is unmatched. The project was delivered on time and within budget.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    bgColor: "amber"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Property Developer",
    content: "We hired Jabal Builders for our residential complex project, and they exceeded our expectations in every way. Their team was professional, responsive, and delivered exceptional quality work.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    bgColor: "emerald"
  },
  {
    id: "3",
    name: "David Chen",
    role: "Real Estate Investor",
    content: "From concept to completion, Jabal Builders guided us through the entire construction process with expertise and professionalism. The final result was beyond our wildest expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    bgColor: "sky"
  },
  {
    id: "4",
    name: "Amina Khalid",
    role: "Interior Designer",
    content: "As an interior designer, I've worked with many construction firms, but Jabal Builders stands out for their precision and attention to detail. They understand design intent and execute flawlessly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?auto=format&fit=crop&w=200&q=80",
    bgColor: "purple"
  },
  {
    id: "5",
    name: "James Wilson",
    role: "Hotel Chain Director",
    content: "Our hotel renovation project required precise timing and minimal disruption. Jabal Builders managed it perfectly, maintaining our operations while delivering stunning results.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    bgColor: "pink"
  }
];
