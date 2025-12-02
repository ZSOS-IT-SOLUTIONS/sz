import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.style.transform = `translate(-50%, -50%) rotate(${Math.abs(e.clientY % 24)}deg)`;
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    // Add generic hover effects
    const addScale = () => {
        if(cursorRef.current) cursorRef.current.classList.add('scale-150');
    };
    const removeScale = () => {
        if(cursorRef.current) cursorRef.current.classList.remove('scale-150');
    };

    const buttons = document.querySelectorAll('button, a, .hover-trigger');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', addScale);
        btn.addEventListener('mouseleave', removeScale);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      buttons.forEach(btn => {
        btn.removeEventListener('mouseenter', addScale);
        btn.removeEventListener('mouseleave', removeScale);
    });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[99999] transition-transform duration-75 ease-out w-10 h-10 rounded-full bg-blue-500/30 backdrop-blur-sm border-2 border-accent shadow-[0_0_20px_rgba(70,153,249,0.5)] flex items-center justify-center mix-blend-screen"
      style={{
        willChange: 'transform, left, top',
      }}
    >
        <div className="w-2 h-2 bg-white rounded-full" />
    </div>
  );
};

export default CustomCursor;
