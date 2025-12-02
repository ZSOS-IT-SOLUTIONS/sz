import React from 'react';
import { motion } from 'framer-motion';

interface PopupProps {
  message: string;
  onClose: () => void;
  position?: 'top' | 'bottom';
}

const Popup: React.FC<PopupProps> = ({ message, onClose, position = 'top' }) => {
  const variants = {
    top: {
      initial: { opacity: 0, y: -50, scale: 0.9 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -50, scale: 0.9 },
    },
    bottom: {
      initial: { opacity: 0, y: 50, scale: 0.9 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: 50, scale: 0.9 },
    },
  };

  return (
    <div
      className="popup-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: position === 'top' ? 'flex-start' : 'flex-end',
        zIndex: 2000,
        paddingTop: position === 'top' ? '20px' : '0',
        paddingBottom: position === 'bottom' ? '20px' : '0',
      }}
    >
      <motion.div
        variants={variants[position]}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{
          maxWidth: '80vw',  // Use relative width for responsiveness
          minWidth: '200px', // Minimum width to maintain shape
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // More opaque background
          backdropFilter: 'blur(24px)', // Increased blur
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1.5rem', // increased padding for better spacing and dynamic height
          fontFamily: 'Inter, sans-serif',
          color: '#111827',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          boxSizing: 'border-box',
          wordBreak: 'break-word', // ensures long words wrap inside the box
        }}
        role="banner"
        aria-live="polite"
      >
        <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.5', flex: 1, overflowWrap: 'break-word' }}>
          {message}
        </p>
        <button
          onClick={onClose}
          aria-label="Close notification"
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: '#374151',
            marginLeft: '1rem',
            alignSelf: 'center',
            lineHeight: 1,
          }}
        >
          &times;
        </button>
      </motion.div>
    </div>
  );
};

export default Popup;
