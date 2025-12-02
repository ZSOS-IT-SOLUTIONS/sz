import React from 'react';
import Hero from './Hero';
// Removed CompanyDescription import
import TechStack from './TechStack';
import Services from './Services';

interface HomeProps {
  onRequestDemo: (service: import('../types').Service) => void;
  onServiceClick?: (service: import('../types').Service) => void;
  onNavigateContact: () => void;
}

const Home: React.FC<HomeProps> = ({ onRequestDemo, onServiceClick, onNavigateContact }) => {
  return (
    <div className="animate-fade-in">
      <Hero onNavigateContact={onNavigateContact} />
      {/* Removed CompanyDescription component */}
      <TechStack />
      <Services onRequestDemo={onRequestDemo} onServiceClick={onServiceClick} />
    </div>
  );
};

export default Home;
