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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onNavigate) {
      onNavigate(page);
    } else {
      const path = page === 'home' ? '/' : `/${page}`;
      navigate(path);
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
            <Link to="/" className="flex items-center justify-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <motion.div
                className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src="images/footer.png" alt="SkyZuri Techbridges Logo" className="w-full h-full object-cover" />
              </motion.div>
            </Link>
            <p className="mt-6 text-sm text-white leading-relaxed text-center md:text-left">
              We empower businesses to transform, grow, and lead the future with cutting-edge technology and smart digital experiences.

            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="p-2 rounded-full transition-colors hover:bg-white/10"
              >
                <img src="images/instagram.png" alt="Instagram" className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="p-2 rounded-full transition-colors hover:bg-white/10"
              >
                <img src="images/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="p-2 rounded-full transition-colors hover:bg-white/10"
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
                <li><motion.button onClick={() => handleLinkClick('home')} className="text-sm text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>Home</motion.button></li>
                <li><motion.button onClick={() => handleLinkClick('about')} className="text-sm text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>About Us</motion.button></li>
                <li><motion.button onClick={() => handleLinkClick('services')} className="text-sm text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>Services</motion.button></li>
                <li><motion.button onClick={() => handleLinkClick('portfolio')} className="text-sm text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>Portfolio</motion.button></li>
                <li><motion.button onClick={() => handleLinkClick('faq')} className="text-sm text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>FAQ</motion.button></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="min-w-[150px] text-center md:text-left">
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                <li><motion.button onClick={() => handleLinkClick('team')} className="text-sm text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>Team</motion.button></li>
                <li><motion.button onClick={() => handleLinkClick('careers')} className="text-sm text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>Careers</motion.button></li>
              </ul>
            </div>

            {/* Column 4: Support */}
            <div className="min-w-[150px] text-center md:text-left">
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-3">
                <li><motion.button onClick={() => handleLinkClick('support')} className="text-sm text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>Support</motion.button></li>
                <li><motion.button onClick={() => handleLinkClick('help-center')} className="text-sm text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>Help Center</motion.button></li>
                <li><motion.button onClick={() => handleLinkClick('privacy-policy')} className="text-sm text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>Privacy Policy</motion.button></li>
                <li><motion.button onClick={() => handleLinkClick('terms-of-service')} className="text-sm text-white" whileHover={{ scale: 1.1, color: '#00A8E8' }}>Terms of Service</motion.button></li>
              </ul>
            </div>

            {/* Column 5: Contact */}
            <div className="min-w-[150px] text-center md:text-left">
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 justify-center md:justify-start"><Phone size={16} /> <a href="tel:+919385816887" className="text-sm text-white"> +91 9385816887</a></li>
                <li className="flex items-center gap-2 justify-center md:justify-start"><Mail size={16} /> <a href="mailto:connect.skyzuri@gmail.com" className="text-sm text-white"> connect.skyzuri@gmail.com</a></li>
                <li className="flex items-center gap-2 justify-center md:justify-start"><MapPin size={16} /> <span className="text-sm text-white"> Madurai, Tamil Nadu, India</span></li>
                <li className="flex items-center gap-2 justify-center md:justify-start"><Linkedin size={16} /> <a href="https://www.linkedin.com/company/skyzuritech/" target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-[#00A8E8] transition-colors">Connect with us</a></li>
              </ul>
            </div>


          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10 text-center text-sm text-white tracking-wider">
          <div className="flex justify-center items-center gap-2">
            <motion.img
              src="images/logo.png"
              alt="SkyZuri Logo"
              className="h-5 w-5"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <p>&copy; {new Date().getFullYear()} SkyZuri Technologies. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;