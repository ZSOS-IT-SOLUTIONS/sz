import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
  const termsSections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all visitors, users, and others who access or use our services.',
      icon: '📋',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.',
      icon: '🔑',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      title: 'Service Description',
      content: 'Our services include web development, mobile applications, AI solutions, blockchain technology, and various digital transformation services as described on our platform.',
      icon: '⚙️',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'User Responsibilities',
      content: 'Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. You agree to use our services only for lawful purposes.',
      icon: '👤',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Disclaimer',
      content: 'The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation.',
      icon: '⚠️',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Limitations',
      content: 'In no event shall we or our suppliers be liable for any damages arising out of the use or inability to use our materials, even if we have been notified of the possibility of such damage.',
      icon: '🚫',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const headlineVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-100 dark:from-gray-900 dark:via-orange-900 dark:to-red-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"
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
            className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"
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

        {/* Header Section */}
        <motion.div
          className="text-center mb-16 relative z-10"
          initial="hidden"
          animate="visible"
          variants={headlineVariants}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.2
            }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-3xl">📜</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Terms of Service
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Understand our agreement and the guidelines for using SkyZuri Techbridge services with clarity and transparency.
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center space-x-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </motion.div>
        </motion.div>

        {/* Terms Sections Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {termsSections.map((section, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className="relative h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Floating Icon */}
                <motion.div
                  className="relative z-10 mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${section.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                    <span className="text-2xl">{section.icon}</span>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {section.content}
                  </p>
                </motion.div>

                {/* Hover Effect Border */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${section.gradient} rounded-b-3xl`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />

                {/* Subtle Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${section.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TermsOfService;
