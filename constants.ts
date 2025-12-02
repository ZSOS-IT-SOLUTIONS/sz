import { TechCategory, Service, Testimonial, Project, JobOpening } from './types';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About Us', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Careers', href: '#careers' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const TECH_STACK: TechCategory[] = [
  {
    id: 'web',
    label: 'WEB',
    items: [
      { name: 'HTML5', icon: 'images/html5.png' },
      { name: 'CSS3', icon: 'images/css3.png' },
      { name: 'JavaScript', icon: 'images/javascript.png' },
      { name: 'React', icon: 'images/rjs.png' },
      { name: 'Next.js', icon: 'images/nextjs.png' },
      { name: 'Node.js', icon: 'images/njs.png' },
      { name: 'Express', icon: 'images/express.png' },
      { name: 'MongoDB', icon: 'images/mongodb.png' },
    ]
  },
  {
    id: 'mobile',
    label: 'MOBILE',
    items: [
      { name: 'Android', icon: 'images/android.png' },
      { name: 'Kotlin', icon: 'images/kotlin.png' },
      { name: 'Swift', icon: 'images/swift.png' },
      { name: 'Flutter', icon: 'images/flutter.png' },
      { name: 'React Native', icon: 'images/rjs.png' },
      { name: 'Firebase', icon: 'images/firebase.png' },
    ]
  },
  {
    id: 'blockchain',
    label: 'BLOCKCHAIN',
    items: [
      { name: 'Solidity', icon: 'images/sol.png' },
      { name: 'MetaMask', icon: 'images/metamask.png' },
      { name: 'Truffle', icon: 'images/truf.png' },
      { name: 'Ganache', icon: 'images/ganache.png' },
    ]
  },
  {
    id: 'iot',
    label: 'IOT & EMBEDDED',
    items: [
      { name: 'Raspberry Pi', icon: 'images/raspberry.png' },
      { name: 'Arduino', icon: 'images/ard.png' },
      { name: 'C', icon: 'images/c.png' },
      { name: 'C++', icon: 'images/cpp.png' },
      { name: 'Python', icon: 'images/python.png' },
    ]
  },
];

const createServiceLink = (service: string) => `/contact?service=${encodeURIComponent(service)}`;

export const SERVICES: Service[] = [
  {
    label: 'Digital Marketing',
    link: '#',
    description: "Accelerate your brand's growth with data-driven digital marketing strategies. We help you reach your target audience effectively through multiple channels.",
    features: ['Search Engine Optimization (SEO)', 'Social Media Management', 'Pay-Per-Click Advertising', 'Content Marketing Strategy']
  },
  {
    label: 'UI and UX Design',
    link: '#',
    description: "Create meaningful experiences that delight users. Our design team focuses on usability, accessibility, and aesthetic appeal to build products users love.",
    features: ['User Research & Personas', 'Wireframing & Prototyping', 'Interactive Interface Design', 'Usability Testing']
  },
  {
    label: 'Graphic Design',
    link: '#',
    description: "Visual storytelling that defines your brand identity. From logos to marketing collateral, we ensure your visual presence communicates your values clearly.",
    features: ['Logo & Branding Kits', 'Marketing Materials', 'Social Media Graphics', 'Infographics & Illustrations']
  },
  {
    label: 'Web Solutions',
    link: '#',
    description: "Custom web development tailored to your business needs. We build responsive, high-performance websites and web applications using the latest technologies.",
    features: ['Custom Website Development', 'E-commerce Solutions', 'CMS Integration', 'Progressive Web Apps (PWA)']
  },
  {
    label: 'AI and ML',
    link: '#',
    description: "Unlock the power of Artificial Intelligence. We build intelligent systems that analyze data, predict trends, and automate complex tasks to give you a competitive edge.",
    features: ['Predictive Analytics', 'Natural Language Processing (NLP)', 'Computer Vision Systems', 'Custom Chatbot Development']
  },
  {
    label: 'Cybersecurity',
    link: '#',
    description: "Protect your digital assets with robust security solutions. We identify vulnerabilities and implement comprehensive strategies to safeguard your data.",
    features: ['Vulnerability Assessments', 'Network Security', 'Data Encryption', 'Security Audits & Compliance']
  },
  {
    label: 'Cloud Computing',
    link: '#',
    description: "Scalable cloud infrastructure for modern businesses. We assist with migration, management, and optimization of cloud services to ensure reliability.",
    features: ['Cloud Migration Strategy', 'AWS / Azure / Google Cloud', 'DevOps & CI/CD Pipelines', 'Serverless Architecture']
  },
  {
    label: 'Student Project',
    link: '#',
    description: "Mentorship and guidance for academic excellence. We support students in building innovative technical projects for their final year capstones.",
    features: ['Project Topic Selection', 'Technical Implementation Support', 'Documentation Assistance', 'Code Review & Optimization']
  },
  {
    label: 'Automation',
    link: '#',
    description: "Streamline operations and reduce manual effort. We implement automation tools that handle repetitive tasks, increasing efficiency and accuracy.",
    features: ['Business Process Automation', 'Robotic Process Automation (RPA)', 'Workflow Integration', 'Scripting & Tooling']
  },
  {
    label: 'PCB Building',
    link: '#',
    description: "Professional circuit board design and assembly. From schematic capture to final fabrication, we bring hardware prototypes to life.",
    features: ['Schematic Design', 'PCB Layout & Routing', 'Prototyping & Assembly', 'Component Sourcing']
  },
  {
    label: 'Blockchain',
    link: '#',
    description: "Decentralized solutions for the future. We develop secure blockchain applications, smart contracts, and integrate Web3 technologies into your business.",
    features: ['Smart Contract Development', 'DApp Creation', 'Tokenization', 'Private Blockchain Setup']
  },
];

export const TESTIMONIALS: Testimonial[] = [
  { text: "ZSOS delivers scalable solutions and rapid execution. Great partner for enterprise transformation!" },
  { text: "We loved their UX design and technical expertise. Highly recommended for digital projects." },
];

export const PORTFOLIO_PROJECTS: Project[] = [
    {
        id: '1',
        title: "Lanka Greenovation",
        category: "Web Application",
        description: "A Full finshshed e-commerece site for Biotech Productus",
        image: "images/lkg.png",
        link: "#",
        linkedinUrl: "https://www.linkedin.com/"
    },
    {
        id: '2',
        title: "Trabook",
        category: "Web Application",
        description: "A Full finshshed e-commerece site for Travel and Tourism",
        image: "images/hg.png",
        link: "#",
        linkedinUrl: "https://www.linkedin.com/"
    },
    {
        id: '3',
        title: "Background Remover",
        category: "AI & ML",
        description: "Photo background removal tool ",
        image: "images/project-iot.jpg",
        link: "#",
        linkedinUrl: "https://www.linkedin.com/"
    },
    {
        id: '4',
        title: "Heritage",
        category: "3D & Web Developement",
        description: "A Full designed 3d website about Taj Mahal with a Explanation in multiple Languages and a 3d explanation",
        image: "images/hg.png",
        link: "#",
        linkedinUrl: "https://www.linkedin.com/"
    },
    {
        id: '5',
        title: "EduLearn Platform",
        category: "Mobile App",
        description: "Gamified learning experience for K-12 students, increasing engagement by 40% through interactive modules.",
        image: "images/project-edulearn.jpg",
        link: "#",
        linkedinUrl: "https://www.linkedin.com/"
    },
    {
        id: '6',
        title: "AutoLogistics CRM",
        category: "Automation",
        description: "Automated logistics management system reducing dispatch times by 60% using intelligent route planning.",
        image: "images/project-logistics.jpg",
        link: "#",
        linkedinUrl: "https://www.linkedin.com/"
    }
];

export const REVOLUTION_STORY = {
    title: "Our Revolution",
    subtitle: "Pioneering the Future Since 2020",
    content: "SkyZuri Techbrides began as a bold idea in a small garage: to democratize access to enterprise-grade technology. What started as a student initiative has revolutionized into a powerhouse of innovation. We challenged the status quo, bridging the gap between complex emerging tech and practical business solutions. Today, we stand at the forefront of the digital revolution, empowering startups and Fortune 500s alike to rewrite their destiny through code.",
    stats: [
        { label: "Years of Innovation", value: "5+" },
        { label: "Projects Delivered", value: "150+" },
        { label: "Global Partners", value: "20+" }
    ]
};

export const ABOUT_DATA = {
  founder: {
    name: 'Mohamed Murshal Ibrahim',
    role: 'CEO, Skyzuri Solutions',
    image: 'images/ibrh.png',
    message: 'Our mission is to empower organizations through advanced, secure, and scalable technologies. We strive to deliver excellence in AI, Cloud, Blockchain, Cybersecurity, and Software Engineering, enabling businesses to innovate with confidence. Skyzuri is dedicated to transforming ideas into impactful digital solutions that accelerate progress and shape the future.'
  },
  certifications: [
    { name: "MSME Registered", image: "images/msme.png" },
    { name: "Udyam Registration", image: "images/udyam.png" },
    { name: "Startup India", image: "images/stn.png" },
  ],
  collaborations: [
    
  ],
  centered_collaborations: [
    { name: "ZSOS IT SOLUTIONS ", logo: "images/zsoslogo.jpg" },
    { name: "Innovate Solutions", logo: "images/ader.jpg" },
  ],
  vision: `To be a global leader in digital innovation, shaping a smarter, more connected world where technology drives opportunity, security, and limitless growth. Skyzuri envisions a future where businesses thrive with intelligent, adaptive, and sustainable digital ecosystems.`,
  mission: `Our mission is to empower organizations through advanced, secure, and scalable technologies.
 We strive to deliver excellence in AI, Cloud, Blockchain, Cybersecurity, and Software Engineering, enabling businesses to innovate with confidence.
 Skyzuri is dedicated to transforming ideas into impactful digital solutions that accelerate progress and shape the future.`
};

export const TEAM_DATA = [
  {
    name: 'Mohamed Murshal Ibrahim',
    role: 'CEO, Skyzuri Solutions',
    image: 'images/ibrh.png',
    email: 'info@skyzuritechbrides.com',
    phone: '9385816887'
  },
  {
    name: 'Madan',
    role: 'Lead Developer',
    image: 'images/madan.png',
    email: 'ahmed.khan@example.com',
    phone: '9876543210'
  },
  {
    name: 'Nimal',
    role: 'UI/UX Designer',
    image: 'images/nimal.png',
    email: 'sarah.design@example.com',
    phone: '9876543211'
  },
];

export const CAREER_OPENINGS: JobOpening[] = [
  {
    id: '1',
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are looking for an experienced developer to lead our frontend initiatives using React, TypeScript, and modern web technologies.',
    requirements: [
      '5+ years of experience with React and modern JavaScript',
      'Strong understanding of UI/UX principles',
      'Experience with state management and performance optimization'
    ],
    applyLink: 'https://docs.google.com/forms/u/0/'
  },
  {
    id: '2',
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'Join our growth team to drive brand awareness and lead generation through creative digital campaigns.',
    requirements: [
      'Proven experience in SEO/SEM and social media marketing',
      'Ability to analyze data and optimize campaigns',
      'Strong content creation skills'
    ],
    applyLink: 'https://docs.google.com/forms/u/0/'
  },
  {
    id: '3',
    title: 'Blockchain Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Contract',
    description: 'Help us build decentralized applications and smart contracts for our fintech clients.',
    requirements: [
      'Experience with Solidity and Ethereum',
      'Understanding of DeFi protocols',
      'Familiarity with Web3.js or Ethers.js'
    ],
    applyLink: 'https://docs.google.com/forms/u/0/'
  },
  {
    id: '4',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'On-site',
    type: 'Full-time',
    description: 'Craft beautiful and intuitive user interfaces for web and mobile applications.',
    requirements: [
      'Portfolio showcasing web and mobile design projects',
      'Proficiency in Figma and Adobe Creative Suite',
      'Strong understanding of user-centered design'
    ],
    applyLink: 'https://docs.google.com/forms/u/0/'
  }
];

export const CONTACT_DETAILS = {
  phone: "+91 9385816887",
  email: "connect.skyzuri@gmail.com",
  address: "Madurai, Tamil Nadu, India", 
  linkedin: "https://www.linkedin.com/in/mohamedmurshalibrahim"
};

export const CONTACT_FORM_SERVICES = [
  "Custom Software Development",
  "AI Development",
  "Web/Mobile App Development",
  "Cryptocurrency Development",
  "Crypto Exchange Development",
  "Bot Development",
  "Neo Banking Development",
  "Smart Contract Development",
  "Web3 DApp or DeFi Development",
  "Wallet Development",
  "Token Development",
  "Business Consulting",
  "Startup/Enterprise Product Development",
  "Others"
];

export const JOURNEY_DATA = [
  {
    year: '2020',
    title: 'The Genesis',
    description: 'SkyZuri Techbridges was born from a vision to bridge the gap between ideas and reality through technology. Our journey started in a small room with a passionate team of two.',
  },
  {
    year: '2021',
    title: 'First Breakthrough',
    description: 'We launched our first major project, a cloud-based ERP system for a local manufacturing company. This marked our entry into the world of enterprise solutions.',
  },
  {
    year: '2022',
    title: 'Expanding Horizons',
    description: 'Our team grew to 10+ members, and we expanded our services to include AI and Machine Learning. We started working with international clients.',
  },
  {
    year: '2023',
    title: 'Innovation and Recognition',
    description: 'We received our first award for innovation in AI. Our proprietary chatbot framework was adopted by several leading e-commerce platforms.',
  },
  {
    year: '2024',
    title: 'Scaling New Heights',
    description: 'With a team of 50+ professionals, we moved into a new state-of-the-art office. We also launched our own B2B SaaS product.',
  },
  {
    year: 'Present',
    title: 'The Future is Now',
    description: 'We continue to push the boundaries of technology, with a focus on sustainable and ethical AI. Our goal is to empower businesses to thrive in the digital age.',
  },
];