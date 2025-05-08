export interface Milestone {
    year: string;
    title: string;
    description: string;
  }
  
  export interface TeamMember {
    name: string;
    position: string;
    description: string;
    image: string; // Add this line
  }
  export interface CoreValue {
    icon: React.ReactNode;
    title: string;
    description: string;
    animationDelay?: string;
  }