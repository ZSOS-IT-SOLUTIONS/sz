import React from 'react';
import { Service } from '../types';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesProps {
  onRequestDemo: (service: Service) => void;
  onServiceClick?: (service: Service) => void;
}

const headlineVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const Services: React.FC<ServicesProps> = ({ onRequestDemo, onServiceClick }) => {
  const handleServiceClick = (service: Service) => {
    if (onServiceClick) {
      onServiceClick(service);
    }
  };

  return (
    <section className="py-16 bg-card-light dark:bg-card-dark rounded-xl shadow-soft max-w-8xl mx-auto px-6">
      {/* Top headline section - full width, centered */}
      <motion.div className="mb-12 text-center" initial="hidden" animate="visible" variants={headlineVariants}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-primary dark:text-white">
          Utilize
          <span className="block">the Technology with</span>
          <span className="block">SkyZuri Techbridge</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">Explore our wide range of programs and embark on a journey to craft your future with excellence.</p>
      </motion.div>

      {/* Bottom grid of service cards - full width */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" variants={containerVariants} initial="hidden" animate="visible">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.label}
            onClick={() => handleServiceClick(service)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full rounded-3xl overflow-hidden bg-black/5 dark:bg-white/5 shadow-lg focus:outline-none cursor-pointer"
          >
            {/* Image area */}
            <div className="w-full h-52 md:h-64 bg-gray-100 dark:bg-gray-800">
              {service.image ? (
                <img src={service.image} alt={service.label} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
              )}
            </div>

            {/* Content area */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{service.label}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">{service.description}</p>
              <div className="flex justify-end mt-4">
                <ArrowRight size={20} className="text-gray-400 dark:text-gray-500" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
