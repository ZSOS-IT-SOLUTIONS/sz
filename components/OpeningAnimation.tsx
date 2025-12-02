import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface OpeningAnimationProps {
  onComplete: () => void;
}

const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete }) => {
  const controls = useAnimation();

  useEffect(() => {
    async function sequence() {
      // Start with scale up and fade in
      await controls.start({
        opacity: 1,
        scale: [0.8, 1.2, 1],
        transition: { duration: 1.5, ease: 'easeInOut' },
      });
      // Fade out
      await controls.start({
        opacity: 0,
        transition: { duration: 1 },
      });
      onComplete();
    }
    sequence();
  }, [controls, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#111827', // Tailwind's gray-900
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        color: '#f3f4f6', // Tailwind's gray-100
        fontSize: '2rem',
        fontWeight: 'bold',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      Welcome to Skyzuri Technologies
    </motion.div>
  );
};

export default OpeningAnimation;
