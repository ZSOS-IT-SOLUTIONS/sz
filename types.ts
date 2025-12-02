export interface TechItem {
  name: string;
  icon: string;
}

export interface TechCategory {
  id: string;
  label: string;
  items: TechItem[];
}

export interface Service {
  label: string;
  link: string;
  description: string;
  features: string[];
  googleFormLink?: string;
  image?: string;
}

export interface Testimonial {
  text: string;
  author?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  linkedinUrl?: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  applyLink: string;
}

export interface AboutData {
  founder: {
    name: string;
    role: string;
    image: string;
    message: string;
  };
  certifications: {
    name: string;
    image: string;
  }[];
  collaborations: {
    name: string;
    logo: string;
  }[];
  centered_collaborations: {
    name: string;
    logo: string;
  }[];
  vision: string;
  mission: string;
}
