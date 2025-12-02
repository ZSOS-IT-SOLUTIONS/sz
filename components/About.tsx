import React from 'react';
import { ABOUT_DATA } from '../constants';
import { Award } from 'lucide-react';
import LinkedInIcon from './LinkedInIcon';
import WhatsappIcon from './WhatsappIcon';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in bg-bg-light min-h-screen pb-20">
      
      {/* Header Section */}
      <section className="bg-primary py-20 px-6 text-center text-white rounded-b-[40px] mb-16 shadow-soft">
        <h1 className="text-4xl md:text-5xl font-extrabold font-montserrat mb-4">About Us</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto font-inter">
          Get to know the visionaries and the milestones that define Skyzuri Technologies.
        </p>
      </section>

      <div className="container mx-auto px-4 max-w-6xl space-y-24">
        
        {/* Vision & Mission Section */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-montserrat text-center">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-accent">Vision</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{ABOUT_DATA.vision}</p>
            </div>
            <div className="flex flex-col p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-accent">Mission</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{ABOUT_DATA.mission}</p>
            </div>
          </div>
        </section>

        {/* Mastermind Section */}
        <section id="team" className="py-16 px-4 md:px-8 bg-white dark:bg-card-dark transition-colors duration-300">
          <div className="max-w-[1100px] mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-24 p-8 rounded-[40px] border border-gray-100 dark:border-gray-700 shadow-xl bg-gradient-to-br from-white to-purple-50/50 dark:from-card-dark dark:to-gray-900">
            
            {/* Text Column */}
            <div className="flex-1 text-center md:text-left min-w-[200px]">
              <h2 className="text-4xl md:text-5xl font-bold text-[#6a44c9] dark:text-[#a78bfa] mb-6 font-montserrat leading-tight whitespace-nowrap">
                The Mastermind Behind Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-medium text-lg">
                With years of experience leading ventures in various industries, we guide
                businesses through digital transformation. We deliver Blockchain, AI, custom
                software, and banking solutions, supporting startups and enterprises with
                secure, advanced technology and skilled teams for lasting impact.
              </p>
              <p className="text-slate-800 dark:text-white font-semibold text-lg mb-8">
                Let's discuss and build the future together!
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover-trigger flex items-center gap-2 text-gray-700 dark:text-gray-200 font-bold hover:text-[#0A66C2] dark:hover:text-[#4d9be2] transition-colors"
                >
                  <LinkedInIcon className="w-6 h-6 text-[#0A66C2]" />
                  <span>Ibrahim</span>
                </a>
                
                <a 
                  href="tel:+919385816887" 
                  className="hover-trigger flex items-center gap-2 text-gray-700 dark:text-gray-200 font-bold hover:text-green-600 transition-colors"
                >
                  <WhatsappIcon className="w-6 h-6 text-[#25D366]" />
                  <span>9385816887</span>
                </a>
              </div>
            </div>

            {/* Image Column */}
            <div className="flex flex-col items-center shrink-0 md:ml-16">
              <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] flex items-center justify-center">
                {/* Image */}
                <img 
                  src="images/skz.png"
                  alt="Ibrahim - CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center mt-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-montserrat">Ibrahim</h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium">CEO, Skyzuri Solutions</p>
              </div>
            </div>

          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 justify-center bg-green-50 text-green-600 px-4 py-2 rounded-full font-bold text-sm mb-4">
              <Award size={18} />
              <span>RECOGNITION</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-montserrat">Accreditations & Certifications</h2>
            <p className="text-gray-500 mt-3">Verified excellence and compliance with national standards.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {ABOUT_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-transparent hover:border-accent/20 w-64">
                <div className="h-48 mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="w-full h-full object-contain opacity-90 group-hover:scale-110 transition-transform duration-500 group-hover:opacity-100"
                  />
                </div>
                <h4 className="font-bold text-gray-800 group-hover:text-accent transition-colors">{cert.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Collaborators Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-montserrat">Our Collaborators</h2>
            <p className="text-gray-500 mt-3">Trusted partners in innovation and collaboration.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {ABOUT_DATA.centered_collaborations.map((collab, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-transparent hover:border-accent/20 w-64">
                <div className="h-48 mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                  <img
                    src={collab.logo}
                    alt={collab.name}
                    className="w-full h-full object-contain opacity-90 hover:scale-110 transition-transform duration-500 hover:opacity-100"
                  />
                </div>
                <h4 className="font-bold text-gray-800 hover:text-accent transition-colors">{collab.name}</h4>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 