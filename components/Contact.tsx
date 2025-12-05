import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, User, Flag, PenLine, MapPin, Linkedin, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { CONTACT_DETAILS } from '../constants';

const Contact: React.FC = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [services, setServices] = useState('');
  const [requirements, setRequirements] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ⬇ NEW STATES FOR MESSAGE UI
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    const submission_time = new Date().toLocaleString();
    emailjs.init('QZM5uygvO95eN6vFi');

    const templateParams = {
      name,
      email,
      mobile,
      whatsapp,
      services,
      requirements,
      country: 'India (भारत)',
      submission_time,
    };

    try {
      await emailjs.send('service_5vui23f', 'template_snf4lnp', templateParams);
      await emailjs.send('service_5vui23f', 'template_74jgr65', templateParams);

      setSuccessMessage("Thank you! Your request has been submitted successfully. You will receive a confirmation email shortly.");

      // reset form
      setName('');
      setEmail('');
      setMobile('');
      setWhatsapp('');
      setServices('');
      setRequirements('');

    } catch (error: any) {
      const msg = error?.text || error?.message || 'Unknown error occurred';
      setErrorMessage(`Sorry, there was an error submitting your request: ${msg}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    z: Math.random() * 200 - 100,
    delay: Math.random() * 2,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    offsetX: Math.random() * 20 - 10,
    offsetY: Math.random() * 20 - 10,
  }));

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 font-inter animate-fade-in relative overflow-hidden">

      {/* 3D Animated Background */}
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: particle.color,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              transform: `translateZ(${particle.z}px)`
            }}
            animate={{
              x: mousePosition.x * 0.5 + particle.offsetX,
              y: mousePosition.y * 0.5 + particle.offsetY,
              z: particle.z + (mousePosition.x + mousePosition.y) * 0.1,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up relative z-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-montserrat">
          We'd Love To Hear From You!
        </h1>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Know your requirement, our technical expert will schedule a call and discuss your idea in detail.
        </p>
      </div>

      {/* Contact Information + Form */}
      <div className="grid md:grid-cols-2 gap-12 mb-12">

        {/* LEFT SIDE CONTACT INFO (UNCHANGED) */}
        <div className="space-y-6 animate-slide-up-delayed relative z-10">
          <h3 className="text-2xl font-bold text-white mb-6 font-montserrat">Get In Touch</h3>
          <div className="space-y-4">
            <motion.div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700" whileHover={{ scale: 1.02 }}>
              <Phone className="text-blue-400" size={24} />
              <div>
                <p className="text-gray-300 text-sm">Phone</p>
                <p className="text-white">{CONTACT_DETAILS.phone}</p>
              </div>
            </motion.div>

            <motion.div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700" whileHover={{ scale: 1.02 }}>
              <Mail className="text-blue-400" size={24} />
              <div>
                <p className="text-gray-300 text-sm">Email</p>
                <p className="text-white">{CONTACT_DETAILS.email}</p>
              </div>
            </motion.div>

            <motion.div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700" whileHover={{ scale: 1.02 }}>
              <MapPin className="text-blue-400" size={24} />
              <div>
                <p className="text-gray-300 text-sm">Address</p>
                <p className="text-white">{CONTACT_DETAILS.address}</p>
              </div>
            </motion.div>

            <motion.div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700" whileHover={{ scale: 1.02 }}>
              <Linkedin className="text-blue-400" size={24} />
              <div>
                <p className="text-gray-300 text-sm">LinkedIn</p>
                <a href={CONTACT_DETAILS.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">Connect with us</a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE CONTACT FORM */}
        <div className="animate-slide-up-delayed relative z-10">
          <div className="bg-gray-800 rounded-lg shadow-2xl p-8 md:p-12 border border-gray-700">

            <h2 className="text-2xl font-bold text-center text-white mb-8 font-montserrat">
              Contact Us
            </h2>

            {/* SUCCESS MESSAGE UI */}
            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-700/20 border border-green-500 text-green-300 rounded-lg flex items-center space-x-3"
              >
                <CheckCircle size={22} />
                <p>{successMessage}</p>
              </motion.div>
            )}

            {/* ERROR MESSAGE UI */}
            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-700/20 border border-red-500 text-red-300 rounded-lg flex items-center space-x-3"
              >
                <XCircle size={22} />
                <p>{errorMessage}</p>
              </motion.div>
            )}

            {/* FORM STARTS */}
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group animate-fade-in-up">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-12 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                    required
                  />
                </div>

                <div className="relative group animate-fade-in-up">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail size={20} />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                    required
                  />
                </div>
              </div>

              {/* COUNTRY */}
              <div className="relative group animate-fade-in-up">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Flag size={20} />
                </div>
                <input
                  type="text"
                  value="India (भारत)"
                  className="w-full pl-12 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  disabled
                />
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group animate-fade-in-up">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Phone size={20} />
                  </div>
                  <input
                    type="tel"
                    placeholder="+91 Enter Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full pl-12 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                    required
                  />
                </div>

                <div className="relative group animate-fade-in-up">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Phone size={20} />
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter Whatsapp Number"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full pl-12 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                    required
                  />
                </div>
              </div>

              {/* SERVICE SELECT */}
              <div className="relative group animate-fade-in-up">
                <select
                  value={services}
                  onChange={(e) => setServices(e.target.value)}
                  className="w-full pl-4 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                  required
                >
                  <option value="">Select Your Services</option>
                  <option value="Custom Software Development">Custom Software Development</option>
                  <option value="AI Development">AI Development</option>
                  <option value="Web/Mobile App Development">Web/Mobile App Development</option>
                  <option value="Cryptocurrency Development">Cryptocurrency Development</option>
                  <option value="Crypto Exchange Development">Crypto Exchange Development</option>
                  <option value="Bot Development">Bot Development</option>
                  <option value="Neo Banking Development">Neo Banking Development</option>
                  <option value="Smart Contract Development">Smart Contract Development</option>
                  <option value="Web3 DApp or DeFi Development">Web3 DApp or DeFi Development</option>
                  <option value="Wallet Development">Wallet Development</option>
                  <option value="Token Development">Token Development</option>
                  <option value="Business Consulting">Business Consulting</option>
                  <option value="Startup/Enterprise Product Development">Startup/Enterprise Product Development</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div className="relative pt-2 animate-fade-in-up">
                <div className="absolute left-4 top-6 text-gray-400">
                  <PenLine size={18} />
                </div>
                <textarea
                  rows={4}
                  placeholder="Write Your Requirements.."
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white resize-none"
                  required
                ></textarea>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-gray-900 font-bold text-lg uppercase tracking-wide rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
