import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Mohamed Murshal Ibrahim T',
      position:'Founder & Chief Executive Officer, SkyZuri Techbridge',
      email: 'connect.murshal@gmail.com',
      phone: '+91 9385816887',
      image: 'images/ibrh.png',
      linkedin: ' https://www.linkedin.com/in/mohamedmurshalibrahim',
    },
    {
      name: 'Madhanagopal N S',
      position:'Chief Technology Officer, SkyZuri Techbridge',
      email: 'madhanns2005@gmail.com',
      phone: '+91 9342545418',
      image: 'images/madan.png',
      linkedin: 'https://www.linkedin.com/in/n-s-madhanagopal-123990285',
    },
    {
      name: 'Nimalan S',
      position:'Managing Director, SkyZuri Techbridge',
      email: 'nimalsoma1973@gmail.com ',
      phone: '+91 9843982348',
      image: 'images/nimal.png',
      linkedin: 'https://www.linkedin.com/in/nimalan-s-b538002bb/',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Team
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="rounded-xl p-1 bg-gradient-to-br from-blue-500 to-pink-500 shadow-xl hover:shadow-pink-500/30 transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="bg-white rounded-lg h-full flex flex-col">
                <div className="w-full h-80 bg-gray-100">
                  <img src={member.image} alt={member.name} className="w-full h-full object-contain" />
                </div>
                <div className="p-6 flex flex-col flex-1 text-center">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                        <p className="text-pink-500 font-semibold mb-3">{member.position}</p>
                        <div className="text-gray-600 mt-4 space-y-2">
                            <div className="flex items-center gap-2">
                                <Mail size={16} className="text-pink-500"/>
                                <a href={`mailto:${member.email}`} className="hover:text-pink-500 transition-colors">{member.email}</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={16} className="text-blue-500" />
                                <a href={`https://wa.me/${member.phone.replace(/\s/g, '').replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">{member.phone}</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-auto flex items-center justify-center gap-4">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 transition-colors">
                            <img src="images/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                        </a>
                        <a href={`https://wa.me/${member.phone.replace(/\s/g, '').replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors">
                            <WhatsappIcon className="w-8 h-8" />
                        </a>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
