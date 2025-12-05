import React, { useEffect } from 'react';
import { Service } from '../types';
import { X, CheckCircle, ArrowRight, ArrowLeft, Sparkles, Zap, Shield, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceDetailsProps {
  service: Service;
  onBack: () => void;
  onFeatureClick?: (feature: string) => void;
  onNavigateToContact?: () => void;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service, onBack, onFeatureClick, onNavigateToContact }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
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

  // Dynamic gradient based on service name length (just to add variety, or stick to a theme)
  // For a "colorful" feel, we can use a vibrant gradient map or random/hash based.
  // Let's stick to a premium blue/purple/pink theme that fits the brand "SkyZuri".
  const bgGradient = "bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950";

  return (
    <motion.div
      className={`min-h-screen ${bgGradient} py-20 px-6 font-sans relative overflow-hidden`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Abstract Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-[120px] -z-10 animate-pulse-slow delay-1000" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.button
          variants={itemVariants}
          onClick={onBack}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent mb-8 px-5 py-2.5 rounded-full bg-white/50 dark:bg-black/30 backdrop-blur-md border border-white/20 shadow-sm transition-all"
        >
          <ArrowLeft size={18} />
          <span className="font-semibold">Back to Services</span>
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left: Text Content */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-sm font-bold tracking-wide uppercase mb-6">
              <Zap size={16} className="fill-current" />
              <span>Premium Service</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight font-montserrat">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
                {service.label}
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10 text-justify">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigateToContact && onNavigateToContact()}
                className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/30 transition-all group"
              >
                <span>Get Started Now</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, translateY: -2, backgroundColor: 'rgba(255,255,255,0.8)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const featuresSection = document.getElementById('features-section');
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex items-center gap-2 bg-white/60 dark:bg-white/10 text-slate-700 dark:text-white px-8 py-4 rounded-xl font-bold border border-white/20 backdrop-blur-sm hover:shadow-md transition-all"
              >
                <span>View Features</span>
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Image/Visual */}
          <motion.div
            variants={itemVariants}
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-[40px] rotate-3 opacity-20 blur-xl"></div>
            {service.image ? (
              <motion.img
                layoutId={`service-image-${service.label}`}
                src={service.image}
                alt={service.label}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-[40px] shadow-2xl relative z-10"
              />
            ) : (
              <div className="w-full h-[400px] md:h-[500px] bg-slate-200 dark:bg-slate-800 rounded-[40px] shadow-2xl relative z-10 flex items-center justify-center">
                <span className="text-slate-400">No Image Available</span>
              </div>
            )}

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl z-20 border border-slate-100 dark:border-slate-700 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  <Shield size={20} />
                </div>
                <span className="font-bold text-slate-800 dark:text-white text-sm">Trusted Choice</span>
              </div>
              <div className="h-1 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full w-[90%] bg-green-500 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div id="features-section" className="pt-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-montserrat">Why Choose This Service?</h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              We deliver comprehensive solutions tailored to your specific needs, ensuring maximum impact and value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                custom={idx}
                whileHover={{ scale: 1.01, translateY: -5 }}
                onClick={() => onFeatureClick && onFeatureClick(feature)}
                className="group bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-32 bg-blue-50 dark:bg-blue-900/20 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors"></div>

                <div className="relative z-10 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 leading-tight">{feature}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Everything you need to succeed with top-tier quality and support.</p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight size={20} className="text-blue-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <motion.div
          variants={itemVariants}
          className="mt-24 relative rounded-[3rem] overflow-hidden bg-slate-900 text-white p-12 md:p-20 text-center"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute -top-[50%] -left-[20%] w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-[50%] -right-[20%] w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[100px]"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-montserrat">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 mb-10">
              Let's collaborate to bring your vision to life with our expert {service.label} solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigateToContact && onNavigateToContact()}
              className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ServiceDetails;
