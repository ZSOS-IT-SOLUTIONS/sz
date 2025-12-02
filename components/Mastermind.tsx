import React from 'react';
import WhatsappIcon from './WhatsappIcon';

const Mastermind: React.FC = () => {
  return (
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
              >
              className="hover-trigger flex items-center gap-2 text-gray-700 dark:text-gray-200 font-bold hover:text-[#0A66C2] dark:hover:text-[#4d9be2] transition-colors"
              <img src="images/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
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
          <div className="relative w-[350px] h-[350px] flex items-center justify-center">
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
  );
};

export default Mastermind;