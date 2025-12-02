
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface KeyFeatureDetailsProps {
  feature: string;
  onBack: () => void;
}

const featureContent: { [key: string]: { description: string; image?: string } } = {
  'SEO': {
    description: 'Our SEO strategies improve your website’s visibility on search engines, driving organic traffic and increasing your online presence. We focus on keyword research, on-page optimization, and link building to achieve the best results.',
    image: '/images/dm.png'
  },
  'Content Marketing': {
    description: 'We create and distribute valuable, relevant, and consistent content to attract and retain a clearly defined audience. Our services include blog posts, articles, videos, and social media content.',
    image: '/images/gd.png'
  },
  'Social Media': {
    description: 'Our social media experts manage your social media profiles, create engaging content, and run targeted campaigns to grow your audience and build brand loyalty.',
    image: '/images/instagram.png'
  },
  'Wireframes': {
    description: 'We create detailed wireframes to outline the structure and functionality of your website or application. This helps in visualizing the user flow and ensuring a seamless user experience.',
    image: '/images/uiux.png'
  },
  'UI/UX Prototyping': {
    description: 'We build interactive prototypes that allow you to test and refine your product before development. This iterative process helps in identifying potential issues and making necessary improvements.',
    image: '/images/uiux.png'
  },
  'User Testing': {
    description: 'We conduct thorough user testing to gather feedback on your product’s usability and design. This helps in creating a user-centric product that meets the needs of your target audience.',
    image: '/images/uiux.png'
  },
  'Branding': {
    description: 'We develop a strong and consistent brand identity that reflects your company’s values and resonates with your target audience. Our services include logo design, brand guidelines, and marketing materials.',
    image: '/images/logo.png'
  },
  'Print Design': {
    description: 'We create professional and eye-catching print materials, including brochures, flyers, and business cards, to effectively communicate your message and promote your brand.',
    image: '/images/gd.png'
  },
  'Illustrations': {
    description: 'Our talented illustrators create custom illustrations that add a unique and creative touch to your website, marketing materials, and other brand assets.',
    image: '/images/gd.png'
  },
  'E-commerce': {
    description: 'We build robust and scalable e-commerce solutions that provide a seamless shopping experience for your customers. Our services include custom design, payment gateway integration, and inventory management.',
    image: '/images/wd.jpg'
  },
  'CMS': {
    description: 'We develop custom ContentManagement Systems (CMS) that allow you to easily manage and update your website’s content without any technical knowledge.',
    image: '/images/wd.jpg'
  },
  'Custom Development': {
    description: 'We provide custom web development services to build tailored solutions that meet your specific business needs. Our team has expertise in a wide range of technologies and frameworks.',
    image: '/images/wd.jpg'
  },
  'Predictive Analytics': {
    description: 'We use machine learning algorithms to analyze historical data and make predictions about future outcomes. This helps in making data-driven decisions and improving business performance.',
    image: '/images/aiml.jpg'
  },
  'Chatbots': {
    description: 'We develop intelligent chatbots that can handle customer queries, provide support, and automate various business processes, improving efficiency and customer satisfaction.',
    image: '/images/aiml.jpg'
  },
  'Automation': {
    description: 'We provide automation solutions to streamline your business processes, reduce manual effort, and increase productivity. Our services include process automation, scripting, and tools integration.',
    image: '/images/at.png'
  },
  'Vulnerability Assessment': {
    description: 'We conduct thorough vulnerability assessments to identify security weaknesses in your systems and applications. This helps in proactively addressing potential threats and protecting your digital assets.',
    image: '/images/cysec.jpg'
  },
  'Penetration Testing': {
    description: 'Our ethical hackers perform penetration testing to simulate real-world attacks and identify security vulnerabilities that could be exploited by malicious actors.',
    image: '/images/cysec.jpg'
  },
  'Incident Response': {
    description: 'We provide incident response services to help you effectively respond to and recover from security breaches. Our team is available 24/7 to assist you in case of an emergency.',
    image: '/images/cysec.jpg'
  },
  'AWS': {
    description: 'We offer a wide range of services for Amazon Web Services (AWS), including cloud migration, infrastructure management, and application development, to help you leverage the power of the cloud.',
    image: '/images/cc.jpg'
  },
  'Azure': {
    description: 'Our Azure experts provide services for Microsoft’s cloud platform, including cloud strategy, implementation, and management, to help you build and run your applications in the cloud.',
    image: '/images/cc.jpg'
  },
  'Google Cloud': {
    description: 'We provide services for Google Cloud Platform (GCP), including cloud architecture, data analytics, and machine learning, to help you innovate and scale your business.',
    image: '/images/cc.jpg'
  },
  'Guidance': {
    description: 'We provide expert guidance and mentorship to students for their academic projects. Our team of experienced professionals helps them in every step of the project, from ideation to implementation.',
    image: '/images/sp.jpg'
  },
  'Implementation': {
    description: 'We assist students in implementing their project ideas by providing technical support and resources. Our goal is to help them build a successful project that meets their academic requirements.',
    image: '/images/sp.jpg'
  },
  'Presentation': {
    description: 'We help students in preparing and delivering a compelling presentation for their project. Our experts provide feedback and guidance on how to effectively communicate their project’s value and impact.',
    image: '/images/sp.jpg'
  },
  'Process Automation': {
    description: 'We help businesses automate their repetitive and time-consuming tasks, freeing up employees to focus on more strategic initiatives. Our solutions are designed to improve efficiency and reduce operational costs.',
    image: '/images/at.png'
  },
  'Scripting': {
    description: 'We develop custom scripts to automate various tasks and processes, from simple data entry to complex system integrations. Our scripts are reliable, efficient, and tailored to your specific needs.',
    image: '/images/at.png'
  },
  'Tools Integration': {
    description: 'We integrate various tools and systems to create a seamless workflow and improve collaboration across your organization. Our solutions help in breaking down data silos and improving overall productivity.',
    image: '/images/at.png'
  },
  'PCB Design': {
    description: 'We offer professional PCB design services for a wide range of applications. Our experienced designers use the latest tools and technologies to create high-quality and reliable PCBs.',
    image: '/images/pcb.jpg'
  },
  'Prototyping': {
    description: 'We provide quick-turnaround PCB prototyping services to help you test and validate your design before mass production. Our state-of-the-art facility ensures high-quality prototypes at an affordable price.',
    image: '/images/pcb.jpg'
  },
  'Testing': {
    description: 'We conduct rigorous testing of PCBs to ensure they meet the required quality standards and specifications. Our testing services include functional testing, in-circuit testing, and environmental testing.',
    image: '/images/pcb.jpg'
  },
  'Smart Contracts': {
    description: 'We develop secure and reliable smart contracts for various blockchain platforms. Our smart contracts are designed to automate business processes, reduce costs, and increase transparency.',
    image: '/images/bc.jpg'
  },
  'DApps': {
    description: 'We build decentralized applications (DApps) that run on a peer-to-peer network of computers, providing a secure and transparent alternative to traditional applications.',
    image: '/images/bc.jpg'
  },
  'Cryptocurrency': {
    description: 'We provide a wide range of services for cryptocurrencies, including wallet development, exchange integration, and ICO/STO development, to help you navigate the complex world of digital currencies.',
    image: '/images/bc.jpg'
  },
};

const KeyFeatureDetails: React.FC<KeyFeatureDetailsProps> = ({ feature, onBack }) => {
  const content = featureContent[feature];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-lg mt-12 font-inter">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-gray-800 mb-6 px-3 py-1 rounded-full border border-gray-300 transition hover:shadow-md"
      >
        <ArrowLeft size={18} />
        <span>Back to Service Details</span>
      </button>

      {content?.image && (
        <div className="mb-8">
          <img
            src={content.image}
            alt={`${feature} image`}
            className="w-full h-64 object-cover rounded-2xl shadow-md"
          />
        </div>
      )}

      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#4699f9] to-[#6bc4ff] bg-clip-text text-transparent mb-6 font-montserrat">
          {feature}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {content?.description || `Detailed content for ${feature} will be displayed here.`}
        </p>
      </div>
    </div>
  );
};

export default KeyFeatureDetails;
