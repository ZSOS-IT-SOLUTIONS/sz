
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Team from './components/Team';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetails from './components/ServiceDetails';
import Services from './components/Services';  // Added import for Services

import FAQ from './components/FAQ';
import Support from './components/Support';
import HelpCenter from './components/HelpCenter';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import PageTransition from './components/PageTransition';
import ChatBot from './components/ChatBot';
import { AnimatePresence } from 'framer-motion';
import RequestDemo from './components/RequestDemo';
import KeyFeatureDetails from './components/KeyFeatureDetails';
import { Service } from './types';
import Popup from './components/Popup';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [showPopup, setShowPopup] = React.useState(true);

  const handleFeatureClick = (feature: string) => {
    setSelectedFeature(feature);
    setCurrentView('key-feature-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToServiceDetails = () => {
    setCurrentView('service-details');
    setSelectedFeature(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [showCareersPopup, setShowCareersPopup] = React.useState(false);

  const handleServiceDetails = (service: Service) => {
    setSelectedService(service);
    setCurrentView('service-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: string) => {
    if (page !== currentView) {
      setCurrentView(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToRequestDemo = (service: Service) => {
    setSelectedService(service);
    setCurrentView('request-demo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedService(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCareersClick = () => {
    setCurrentView('careers');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Added handler to navigate to contact form
  const handleNavigateToContact = () => {
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-white overflow-hidden">


      <Header onNavigate={handleNavigate} currentPage={currentView} onCareersClick={handleCareersClick} />

      {showPopup && currentView !== 'careers' && (
        <Popup
          message={
            "The above mentioned products are used only for clear understanding. We don't have control of the brand and are not doing direct & indirect partnerships with them. We are also not doing promoting activities for them."
          }
          onClose={closePopup}
          position="bottom"
        />
      )}

      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <PageTransition key="home">
              <Home onRequestDemo={navigateToRequestDemo} onServiceClick={handleServiceDetails} onNavigateContact={handleNavigateToContact} />
            </PageTransition>
          )}
          {currentView === 'portfolio' && (
            <PageTransition key="portfolio">
              <Portfolio />
            </PageTransition>
          )}
          {currentView === 'about' && (
            <PageTransition key="about">
              <About />
            </PageTransition>
          )}
          {currentView === 'team' && (
            <PageTransition key="team">
              <Team />
            </PageTransition>
          )}
          {currentView === 'careers' && (
            <PageTransition key="careers">
              <Careers />
            </PageTransition>
          )}
          {currentView === 'contact' && (
            <PageTransition key="contact">
              <Contact />
            </PageTransition>
          )}
          {currentView === 'services' && (
            <PageTransition key="services">
              <Services onRequestDemo={handleServiceDetails} onServiceClick={handleServiceDetails} />
            </PageTransition>
          )}
          {currentView === 'request-demo' && selectedService && (
            <PageTransition key="request-demo">
              <RequestDemo service={selectedService} onBack={handleBackToHome} onSuccess={handleNavigateToContact} />
            </PageTransition>
          )}
          {currentView === 'service-details' && selectedService && (
            <PageTransition key="service-details">
              <ServiceDetails service={selectedService} onBack={handleBackToHome} onFeatureClick={handleFeatureClick} onNavigateToContact={handleNavigateToContact} />
            </PageTransition>
          )}
          {currentView === 'key-feature-details' && selectedFeature && (
            <PageTransition key="key-feature-details">
              <KeyFeatureDetails feature={selectedFeature} onBack={handleBackToServiceDetails} />
            </PageTransition>
          )}
          {currentView === 'faq' && (
            <PageTransition key="faq">
              <FAQ />
            </PageTransition>
          )}
          {currentView === 'support' && (
            <PageTransition key="support">
              <Support />
            </PageTransition>
          )}
          {currentView === 'help-center' && (
            <PageTransition key="help-center">
              <HelpCenter />
            </PageTransition>
          )}
          {currentView === 'privacy-policy' && (
            <PageTransition key="privacy-policy">
              <PrivacyPolicy />
            </PageTransition>
          )}
          {currentView === 'terms-of-service' && (
            <PageTransition key="terms-of-service">
              <TermsOfService />
            </PageTransition>
          )}
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />

      <ChatBot />
    </div>
  );
}
export default App;
