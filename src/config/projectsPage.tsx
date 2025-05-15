import { Project } from "@/types/projects";

export const projectsData: Project[] = [
    {
      _id: "1",
      title: "Azure Heights Tower",
      location: "New York, USA",
      category: "Commercial",
      description: "A stunning 42-story commercial tower in the heart of downtown, featuring state-of-the-art sustainable design and cutting-edge technology integration.",
      imageSrc: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=1920&q=80",
      videoSrc: "",
      architect: "Morgan & Associates",
      area: "85,000 sq m",
      isFeatured: true,
      completionDate: new Date("2023-01-01"),
      features: [
        "LEED Platinum certification",
        "Smart building management system",
        "Rooftop garden and social spaces",
        "Floor-to-ceiling glass façade"
      ],
      isActive: true,
    },
    {
      _id: "2",
      title: "Crystal Pavilion",
      location: "London, UK",
      category: "Public",
      description: "An award-winning cultural center with a distinctive crystal-inspired design, housing exhibition spaces, performance venues, and community facilities.",
      imageSrc: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=1920&q=80",
      videoSrc: "",
      architect: "Foster & Williams",
      area: "32,000 sq m",
      isFeatured: true,
      completionDate: new Date("2022-01-01"),
      features: [
        "Acoustically optimized auditorium",
        "Interactive exhibition spaces",
        "Public gardens and water features",
        "Energy-efficient climate control"
      ],
      isActive: true,
    },
    {
      _id: "3",
      title: "Skyline Residences",
      location: "Dubai, UAE",
      category: "Residential",
      description: "A luxury residential complex offering panoramic city views, premium amenities, and innovative living spaces designed for modern urban lifestyles.",
      imageSrc: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&w=1920&q=80",
      videoSrc: "",
      architect: "Al Masri International",
      area: "120,000 sq m",
      isFeatured: false,
      completionDate: new Date("2024-01-01"),
      features: [
        "Infinity pool with city views",
        "Smart home technology",
        "Private fitness center",
        "Landscaped gardens and walking paths"
      ],
      isActive: true,
    },
    {
      _id: "4",
      title: "White Cube Gallery",
      location: "Tokyo, Japan",
      category: "Cultural",
      description: "A minimalist art gallery designed to showcase contemporary works in a pure, unobtrusive environment that plays with light and space.",
      imageSrc: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1920&q=80",
      videoSrc: "",
      architect: "Tanaka Design Studio",
      area: "9,800 sq m",
      isFeatured: false,
      completionDate: new Date("2021-01-01"),
      features: [
        "Specialized lighting systems",
        "Modular exhibition spaces",
        "Temperature and humidity control",
        "Multimedia installation capabilities"
      ],
      isActive: true,
    },
    {
      _id: "5",
      title: "Emerald Plaza",
      location: "Singapore",
      category: "Mixed Use",
      description: "A vibrant mixed-use development combining retail, office, and residential spaces in a sustainable vertical community.",
      imageSrc: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=1920&q=80",
      videoSrc: "",
      architect: "Lim & Partners",
      area: "95,000 sq m",
      isFeatured: false,
      completionDate: new Date("2023-01-01"),
      features: [
        "Urban farming terraces",
        "Sky bridges connecting towers",
        "Rainwater harvesting system",
        "Mixed-use commercial and residential spaces"
      ],
      isActive: true,
    }
  ];
  

  export const categories = ["All", "Commercial", "Residential", "Public", "Cultural", "Mixed Use"];