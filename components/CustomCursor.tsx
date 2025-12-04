import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.style.transform = `translate(-50%, -50%)`;
      }
    };

    const addScale = () => {
      if(cursorRef.current) cursorRef.current.classList.add('scale-150');
    };

    const removeScale = () => {
      if(cursorRef.current) cursorRef.current.classList.remove('scale-150');
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', () => setIsVisible(true));
    document.addEventListener('mouseleave', () => setIsVisible(false));

    // Add scale on hover for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea, select');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addScale);
      el.addEventListener('mouseleave', removeScale);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', () => setIsVisible(true));
      document.removeEventListener('mouseleave', () => setIsVisible(false));
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addScale);
        el.removeEventListener('mouseleave', removeScale);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[99999] transition-transform duration-75 ease-out"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <img
        src="images/cursor.png"
        alt="Custom Cursor"
        className="w-6 h-6"
        style={{ filter: 'drop-shadow(0 0 5px rgba(70, 153, 249, 0.5))' }}
      />
    </div>
  );
};

export default CustomCursor;
