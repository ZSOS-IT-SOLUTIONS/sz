import React, { useState } from 'react';
import Popup from './Popup';

const Careers: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <div style={isPopupOpen ? { filter: 'blur(8px)', '-webkit-filter': 'blur(8px)' } : {}}>
        <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', color: '#333' }}>
            Careers at Skyzuri
          </h1>
          <p style={{ fontSize: '1.25rem', textAlign: 'center', color: '#666', marginTop: '1rem' }}>
            Join our mission to build the future. We're looking for passionate individuals.
          </p>
        </div>
      </div>

      {isPopupOpen && (
        <Popup
          message="Currently there are no openings in our company"
          onClose={handleClosePopup}
          position="top"
        />
      )}
    </div>
  );
};

export default Careers;