import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-white mb-10 font-montserrat">
          Testimonials
        </h2>
        
        <div className="grid gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-card-dark p-8 rounded-[25px] shadow-soft hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 text-center italic text-lg text-gray-700 dark:text-gray-300 relative overflow-hidden"
            >
              <span className="absolute top-2 left-4 text-6xl text-accent opacity-20 font-serif leading-none">"</span>
              {t.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
