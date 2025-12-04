import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import LinkedInIcon from './LinkedInIcon';
import InstagramIcon from './InstagramIcon';
import YouTubeIcon from './YouTubeIcon';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navigate = useNavigate();

  const handleLinkClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };



  return (
    <motion.footer
      className="bg-gray-900 text-white pt-16 pb-8"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-10">

          {/* Column 1: Brand and Social */}
          <div className="flex-1 min-w-[250px] md:max-w-[350px] flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center justify-center cursor-pointer">
                <motion.div
                    className="w-100 h-100 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <img src="images/artboard 10.png" alt="SkyZuri Techbridges Logo" className="w-full h-full object-cover" />
                </motion.div>
            </Link>
            <p className="mt-6 text-base text-white leading-relaxed text-center md:text-left">
                We empower businesses to transform, grow, and lead the future with cutting-edge technology and smart digital experiences.

            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
                <motion.a
                    href="https://instagram.com/skyzuri.official"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-xl"
                >
                    <img src="images/instagram.png" alt="Instagram" className="w-6 h-6" />
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/company/skyzuri-techbridge"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-xl"
                >
                    <img src="images/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                </motion.a>
                <motion.a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-xl"
                >
                    <img src="images/youtube.png" alt="YouTube" className="w-6 h-6" />
                </motion.a>
            </div>
          </div>

          {/* Link Columns */}
          <div className="flex-grow flex flex-wrap justify-center md:justify-end gap-10">
            {/* Column 2: Quick Links */}
            <div className="min-w-[150px] text-center md:text-left">
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><motion.button onClick={() => navigate('/')} className="text-base text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>Home</motion.button></li>
                <li><motion.button onClick={() => navigate('/about')} className="text-base text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>About Us</motion.button></li>
                <li><motion.button onClick={() => navigate('/services')} className="text-base text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>Services</motion.button></li>
                <li><motion.button onClick={() => navigate('/portfolio')} className="text-base text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>Portfolio</motion.button></li>
                <li><motion.button onClick={() => handleLinkClick('faq')} className="text-base text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>FAQ</motion.button></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="min-w-[150px] text-center md:text-left">
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                <li><motion.button onClick={() => navigate('/team')} className="text-base text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>Team</motion.button></li>
                <li><motion.button onClick={() => navigate('/careers')} className="text-base text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>Careers</motion.button></li>
              </ul>
            </div>

            {/* Column 4: Support */}
            <div className="min-w-[150px] text-center md:text-left">
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-3">
                <li><motion.button onClick={() => handleLinkClick('/header')} className="text-base text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>Support</motion.button></li>
                <li><motion.button onClick={() => handleLinkClick('help-center')} className="text-base text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>Help Center</motion.button></li>
                <li><motion.button onClick={() => handleLinkClick('privacy-policy')} className="text-base text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>Privacy Policy</motion.button></li>
                <li><motion.button onClick={() => handleLinkClick('terms-of-service')} className="text-base text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>Terms of Service</motion.button></li>
              </ul>
            </div>

            {/* Column 5: Contact */}
            <div className="min-w-[150px] text-center md:text-left">
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-3">
                <li><motion.div initial={{ color: 'white' }} whileHover={{ scale: 1.1, color: '#00A8E8' }} className="flex items-center gap-2"><Phone size={16} /> <a href="https://wa.me/919385816887?text=Hello SkyZuri Techbridge. I would like to make an enquiry." target="_blank" className="text-base"> +91 9385816887</a></motion.div></li>
                <li><motion.div initial={{ color: 'white' }} whileHover={{ scale: 1.1, color: '#00A8E8' }} className="flex items-center gap-2"><Mail size={16} /> <a href="mailto:connect.skyzuri@outlook.com" className="text-base"> connect.skyzuri@outlook.com</a></motion.div></li>
                <li><motion.div initial={{ color: 'white' }} whileHover={{ scale: 1.1, color: '#00A8E8' }} className="flex items-center gap-2"><MapPin size={16} /> <span className="text-base"> Madurai, Tamil Nadu, India</span></motion.div></li>
                <li><motion.div initial={{ color: 'white' }} whileHover={{ scale: 1.1, color: '#00A8E8' }} className="flex items-center gap-2"><Linkedin size={16} /> <a href="https://www.linkedin.com/company/skyzuri-techbridge" target="_blank" rel="noopener noreferrer" className="text-base">Connect with us</a></motion.div></li>
              </ul>
            </div>


          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10 text-center text-base text-white tracking-wider">
          <div className="flex justify-center items-center gap-2">
            <motion.img
              src="images/logo.png"
              alt="SkyZuri Logo"
              className="h-5 w-5"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <p>&copy; {new Date().getFullYear()} <motion.button onClick={() => navigate('/hero')} className="text-white hover:text-blue-400 transition-colors" whileHover={{ scale: 1.05 }}>SkyZuri Techbridge.</motion.button> All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;