import React, { useState } from 'react';
import { TECH_STACK } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TECH_STACK[0].id);

  const activeCategory = TECH_STACK.find((c) => c.id === activeTab) || TECH_STACK[0];

  return (
    <section id="technologies" className="py-20 bg-gradient-to-b from-[#f8faff] via-[#fff] to-[#f8faff] font-inter">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4"
          >
            Tech Stack We Employ
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Use our extensive technological knowledge to bring your spectacular ideas to life.
          </motion.p>
        </div>

        {/* Tech Grid Area - Fixed height to prevent layout shift */}
        <div className="min-h-[400px] mb-12">
            <motion.div 
                layout
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
            >
            <AnimatePresence mode="popLayout">
                {activeCategory.items.map((item, index) => (
                    <motion.div 
                        key={`${activeCategory.id}-${item.name}`}
                        initial={{ opacity: 0, scale: 0.5, rotate: -30, y: 30 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, rotate: 30, y: -30 }}
                        transition={{ 
                          type: 'spring', 
                          stiffness: 300, 
                          damping: 20, 
                          delay: index * 0.07 
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 10, 
                          boxShadow: "0 10px 30px #b7d4f8b9", 
                          transition: { type: 'spring', stiffness: 400, damping: 10 }
                        }}
                        className="group bg-white/80 backdrop-blur-sm border border-white/30 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-md cursor-default"
                    >
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                        <img 
                            src={item.icon} 
                            alt={item.name} 
                            className="w-full h-full object-contain filter drop-shadow-md group-hover:drop-shadow-xl transition-all"
                        />
                    </div>
                    <span className="font-bold text-gray-800 text-sm md:text-base">
                        {item.name}
                    </span>
                    </motion.div>
                ))}
            </AnimatePresence>
            </motion.div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 border-t border-gray-200 pt-8 relative">
          {TECH_STACK.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative px-6 py-3 font-semibold text-sm md:text-base transition-colors duration-300 focus:outline-none"
              style={{
                color: activeTab === tab.id ? '#6a44c9' : '#6b7280',
              }}
            >
              {activeTab === tab.id && (
                  <motion.div 
                    layoutId="tab-background"
                    className="absolute inset-0 bg-purple-50 rounded-xl"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                  />
              )}
              <motion.span
                style={{ position: 'relative', zIndex: 10 }}
                initial={{ y: 0, opacity: 1 }}
                animate={activeTab === tab.id ? { y: -5, opacity: 1 } : { y: 0, opacity: 0.7 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {tab.label}
              </motion.span>
              {activeTab === tab.id && (
                <motion.span 
                  className="absolute -bottom-1 left-0 right-0 mx-auto w-12 h-1 rounded-full bg-purple-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{ originX: 0.5 }}
                />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
