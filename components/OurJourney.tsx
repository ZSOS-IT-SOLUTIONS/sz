import React from 'react';
import { JOURNEY_DATA } from '../constants';
import { motion } from 'framer-motion';

const OurJourney: React.FC = () => {
  return (
    <>
      <style>{`
        .timeline-container::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          height: 100%;
          width: 2px;
          background-color: #e5e7eb;
        }
        .timeline-item {
          position: relative;
        }
        .timeline-item.left::after {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -24px;
          width: 24px;
          height: 2px;
          background-color: #4699f9;
        }
        .timeline-item.right::after {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -24px;
          width: 24px;
          height: 2px;
          background-color: #4699f9;
        }
      `}</style>
      <div className="bg-bg-light min-h-screen pb-24">
        <section className="bg-primary py-24 px-6 text-center text-white rounded-b-[50px] mb-16 shadow-soft relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('images/careers-bg.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold font-montserrat mb-6 leading-tight">Our Journey</h1>
            <p className="text-gray-300 text-lg md:text-xl font-inter leading-relaxed">
              A timeline of our innovation, growth, and commitment to excellence since day one.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative timeline-container">
            {JOURNEY_DATA.map((item, index) => {
              const isOdd = index % 2 !== 0;
              const variants = {
                hidden: { opacity: 0, x: isOdd ? 100 : -100 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              };

              return (
                <div key={index} className={`mb-8 flex justify-between items-center w-full ${isOdd ? 'flex-row-reverse' : ''}`}>
                  <div className="w-5/12">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      variants={variants}
                      className={`w-full timeline-item ${isOdd ? 'right' : 'left'}`}
                    >
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
                        <p className="text-accent font-bold text-2xl mb-2">{item.year}</p>
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-accent transition-colors mb-4">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-accent rounded-full shadow-glow">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurJourney;
