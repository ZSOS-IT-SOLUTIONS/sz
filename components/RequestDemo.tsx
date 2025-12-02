import React from 'react';
import { Service } from '../types';
import { CheckCircle, ArrowRight, Clock, Users, Star, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface RequestDemoProps {
  service: Service;
  onBack: () => void;
  onSuccess?: (service: Service) => void;
}

const RequestDemo: React.FC<RequestDemoProps> = ({ service, onBack, onSuccess }) => {
  const handleApplyClick = () => {
    if (onSuccess) {
      onSuccess(service);
    }
  };

  const benefits = [
    {
      icon: '⚡',
      title: 'Fast Implementation',
      description: 'Quick setup and deployment within days'
    },
    {
      icon: '🎯',
      title: 'Customized Solution',
      description: 'Tailored to your specific business needs'
    },
    {
      icon: '🛡️',
      title: 'Expert Support',
      description: '24/7 technical assistance and guidance'
    },
    {
      icon: '📈',
      title: 'Scalable Growth',
      description: 'Easily scale as your business expands'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Submit Request',
      description: 'Fill out our simple form with your requirements'
    },
    {
      step: '02',
      title: 'Consultation Call',
      description: 'Discuss your needs with our technical experts'
    },
    {
      step: '03',
      title: 'Custom Demo',
      description: 'Receive a personalized demonstration'
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Get started with your solution'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>

        {/* Back Button */}
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white mb-8 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 transition-all duration-300 hover:shadow-md relative z-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={18} />
          <span>Back to Services</span>
        </motion.button>

        {/* Header Section */}
        <motion.div
          className="text-center mb-12 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Request Demo
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience the power of {service.label} with a personalized demonstration
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 relative z-10">
          {/* Service Image and Info */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Service Image */}
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl overflow-hidden shadow-2xl">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.label}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    🚀
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>

            {/* Service Details */}
            <motion.div
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {service.label}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {service.description}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h3>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Benefits and Process */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Benefits */}
            <motion.div
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Star className="text-yellow-500" />
                Why Choose Our Demo?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="text-2xl mb-2">{benefit.icon}</div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Process Steps */}
            <motion.div
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Clock className="text-blue-500" />
                Demo Process
              </h3>
              <div className="space-y-4">
                {processSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{step.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 text-white shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6 opacity-90">Click below to contact us and discuss your personalized demo requirements.</p>
                <motion.button
                  onClick={handleApplyClick}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Contact Us Now</span>
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">150+</div>
              <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
            </motion.div>
            <motion.div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-3xl mb-2">👥</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Happy Clients</div>
            </motion.div>
            <motion.div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">5+</div>
              <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RequestDemo;
