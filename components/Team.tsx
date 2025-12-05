import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';
import { TEAM_DATA } from '../constants';

const Team: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-24 px-6 md:px-12 font-sans selection:bg-amber-500/30 selection:text-amber-200">

      {/* Decorative royal elements */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-amber-900/10 to-transparent pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <span className="inline-block py-1 px-3 rounded-full bg-amber-900/20 border border-amber-500/30 text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Leadership
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent drop-shadow-sm">
              Our Visionaries
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed mb-8">
            Meet the driving force behind SkyZuri Techbridge. Our leadership team combines global expertise with a relentless passion for innovation, dedicated to transforming complex challenges into elegant digital solutions. We believe in empowering businesses through strategic foresight, technical excellence, and a steadfast commitment to delivery. By fostering a culture of creativity and collaboration, we guide our partners toward a future of limitless growth and sustainable success.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {['Global Expertise', 'Strategic Innovation', 'Client-Centric Growth'].map((point, i) => (
              <div key={i} className="flex items-center gap-2 text-amber-200/80 bg-slate-900/50 px-4 py-2 rounded-full border border-amber-500/10">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                <span className="text-sm font-medium tracking-wide">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TEAM_DATA.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-500/20 to-indigo-500/20 rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-white/5 group-hover:border-amber-500/30 rounded-[2rem] overflow-hidden transition-colors duration-500 flex flex-col">

                {/* Image Section */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                  {member.name === 'Mohamed Murshal Ibrahim T' ? (
                    <a href="https://profilecard.skyzuri.com/" target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </a>
                  ) : (
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  {/* Gradient removed to keep full image visible */}
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1 relative z-10">

                  {/* Name & Role */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-100 mb-2 font-serif tracking-wide group-hover:text-amber-400 transition-colors">
                      {member.name === 'Mohamed Murshal Ibrahim T' ? (
                        <a href="https://profilecard.skyzuri.com/" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-amber-400 underline-offset-4">
                          {member.name}
                        </a>
                      ) : (
                        member.name
                      )}
                    </h3>
                    <p className="text-amber-500/80 font-medium text-sm uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>

                  {/* Custom Buttons */}
                  <div className="space-y-4 mt-auto">

                    {/* LinkedIn Button */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-1 pr-6 rounded-full border border-amber-500/30 bg-slate-950/50 hover:bg-slate-900 hover:border-amber-400 transition-all group/btn w-full"
                    >
                      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-slate-900 rounded-full text-[#0077b5] group-hover/btn:scale-110 transition-transform">
                        <img src="images/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col text-left min-w-0">
                        <span className="text-xs text-slate-500 uppercase tracking-wider">Connect on LinkedIn</span>
                        <span className="text-base md:text-lg font-bold text-amber-100/90 group-hover/btn:text-white transition-colors truncate">
                          {member.name}
                        </span>
                      </div>
                    </a>

                    {/* WhatsApp Button */}
                    <a
                      href={`https://wa.me/${member.phone.replace(/\s/g, '').replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-1 pr-6 rounded-full border border-amber-500/30 bg-slate-950/50 hover:bg-slate-900 hover:border-amber-400 transition-all group/btn w-full"
                    >
                      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-slate-900 rounded-full text-green-500 group-hover/btn:scale-110 transition-transform">
                        <WhatsappIcon className="w-5 h-5 fill-current" />
                      </div>
                      <div className="flex flex-col text-left min-w-0">
                        <span className="text-xs text-slate-500 uppercase tracking-wider">Chat on WhatsApp</span>
                        <span className="text-base md:text-lg font-bold text-amber-100/90 group-hover/btn:text-white transition-colors font-mono truncate">
                          {member.phone}
                        </span>
                      </div>
                    </a>

                    {/* Mail Button */}
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-4 p-1 pr-6 rounded-full border border-amber-500/30 bg-slate-950/50 hover:bg-slate-900 hover:border-amber-400 transition-all group/btn w-full"
                    >
                      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-slate-900 rounded-full text-red-500 group-hover/btn:scale-110 transition-transform">
                        <img src="images/gmail.png" alt="Mail" className="w-5 h-5" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center'); e.currentTarget.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>' }} />
                      </div>
                      <div className="flex-1 text-left min-w-0 flex flex-col justify-center">
                        <span className="text-base md:text-lg font-bold text-amber-100/90 group-hover/btn:text-white transition-colors tracking-wider">
                          Send Mail
                        </span>
                      </div>
                    </a>

                    {/* Portfolio Button */}
                    <a
                      href="https://www.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-1 pr-6 rounded-full border border-amber-500/30 bg-slate-950/50 hover:bg-slate-900 hover:border-amber-400 transition-all group/btn w-full"
                    >
                      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-slate-900 rounded-full text-purple-500 group-hover/btn:scale-110 transition-transform">
                        <Briefcase size={20} />
                      </div>
                      <div className="flex flex-col text-left min-w-0">
                        <span className="text-xs text-slate-500 uppercase tracking-wider">Explore Work</span>
                        <span className="text-base md:text-lg font-bold text-amber-100/90 group-hover/btn:text-white transition-colors truncate">
                          View Portfolio
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
