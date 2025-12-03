import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  onNavigateContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateContact }) => {
  return (
    <section id="hero" className="relative min-h-[420px] rounded-b-[45px] bg-gradient-to-br from-[#eaf2fe] via-[#dae2f7] to-[#eaf2fe] px-6 py-12 md:px-16 lg:px-24 mb-16 shadow-soft flex flex-col-reverse md:flex-row items-center justify-between gap-10 overflow-hidden">
      
      {/* Text Content */}
      <div className="max-w-xl z-10 text-center md:text-left">
        <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight font-montserrat"
        >
          The Technology Engine Behind Tomorrow's Winners
        </motion.h1>
        
        <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-lg text-gray-600 mb-8 font-inter"
        >
          Skyzuri is a forward-thinking digital innovation company specializing in AI, Cloud Computing, Blockchain, Cybersecurity, and Custom Software Development. We help businesses, startups, and enterprise clients navigate digital transformation with secure, scalable, and intelligent solutions.
 <br className="hidden md:block"/>
          
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          onClick={onNavigateContact}
          className="bg-accent text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg shadow-blue-500/30"
        >
          Get Started
        </motion.button>
      </div>

      {/* Hero Image: rotating 3-image carousel with loader and crossfade */}
      <motion.div
        initial={{ opacity: 0, x: 50, rotate: 10 }}
        animate={{ opacity: 1, x: 0, rotate: 3 }}
        whileHover={{ rotate: 0 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl z-10 flex justify-center"
      >
        <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
          {/* image stack */}
          <ImageCarousel />
        </div>
      </motion.div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;

// --- ImageCarousel subcomponent ---
const ImageCarousel: React.FC = () => {
  const images = [
    'images/sk.jpg',
    'images/sk2.png',
    'images/sk3.png',
  ];

  // fallback: if an image isn't available, the existing `images/sk.jpg` will be used by browser (no crash)
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(() => images.map(() => false));
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef<number | null>(null);

  // Preload images
  useEffect(() => {
    images.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoaded(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
        // if the loaded image is the current one, hide loader
        if (i === index) setIsLoading(false);
      };
      img.onerror = () => {
        // mark as loaded even on error to avoid permanent spinner
        setLoaded(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
        if (i === index) setIsLoading(false);
      };
    });
    // start auto-advance
    intervalRef.current = window.setInterval(() => {
      setIndex(i => (i + 1) % images.length);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // when index changes, ensure loading state reflects whether that image is preloaded
  useEffect(() => {
    setIsLoading(!loaded[index]);
  }, [index, loaded]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        {images.map((src, i) => (
          i === index ? (
            <motion.img
              key={src + i}
              src={src}
              alt={`Hero ${i + 1}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              onLoad={() => {
                setLoaded(prev => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
                setIsLoading(false);
              }}
              className="absolute inset-0 m-auto w-[90%] h-[90%] object-cover rounded-2xl"
            />
          ) : null
        ))}
      </AnimatePresence>

      {/* Loader overlay while current image is loading */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-4 border-t-accent border-gray-200 animate-spin" />
            <div className="text-sm text-gray-600">Loading image...</div>
          </div>
        </div>
      )}
    </div>
  );
};