import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Team from './Team';
import Careers from './Careers';
import Contact from './Contact';
import Services from './Services';
import RequestDemo from './RequestDemo';
import ServiceDetails from './ServiceDetails';
import KeyFeatureDetails from './KeyFeatureDetails';
import FAQ from './FAQ';
import Support from './Support';
import HelpCenter from './HelpCenter';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import Header from './Header';
import Footer from './Footer';
import ChatBot from './ChatBot';
import Popup from './Popup';
import { AnimatePresence } from 'framer-motion';
import { Service } from '../types';

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = React.useState<Service | null>(null);
  const [selectedFeature, setSelectedFeature] = React.useState<string | null>(null);
  const [showPopup, setShowPopup] = React.useState(true);
  const [showCareersPopup, setShowCareersPopup] = React.useState(false);

  const handleFeatureClick = (feature: string) => {
    setSelectedFeature(feature);
  };

  const handleBackToServiceDetails = () => {
    setSelectedFeature(null);
  };

  const handleServiceDetails = (service: Service) => {
    setSelectedService(service);
  };

  const navigateToRequestDemo = (service: Service) => {
    setSelectedService(service);
    navigate('/request-demo');
  };

  const handleBackToHome = () => {
    setSelectedService(null);
    navigate('/');
  };

  const handleCareersClick = () => {
    setShowCareersPopup(true);
    navigate('/careers');
  };

  const handleNavigateToContact = () => {
    navigate('/contact');
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-white overflow-hidden">
      <Header onCareersClick={handleCareersClick} />

      {showPopup && (
        <Popup
          message={
            "The above mentioned products are used only for clear understanding. We don't have control of the brand and are not doing direct & indirect partnerships with them. We are also not doing promoting activities for them."
          }
          onClose={closePopup}
          position="bottom"
        />
      )}

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home onRequestDemo={navigateToRequestDemo} onServiceClick={handleServiceDetails} onNavigateContact={handleNavigateToContact} />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services onRequestDemo={handleServiceDetails} onServiceClick={handleServiceDetails} />} />
          <Route path="/request-demo" element={selectedService ? <RequestDemo service={selectedService} onBack={handleBackToHome} onSuccess={handleNavigateToContact} /> : <Navigate to="/" />} />
          <Route path="/service-details" element={selectedService ? <ServiceDetails service={selectedService} onBack={handleBackToHome} onFeatureClick={handleFeatureClick} onNavigateToContact={handleNavigateToContact} /> : <Navigate to="/" />} />
          <Route path="/key-feature-details" element={selectedFeature ? <KeyFeatureDetails feature={selectedFeature} onBack={handleBackToServiceDetails} /> : <Navigate to="/" />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/support" element={<Support />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <Footer />

      <ChatBot />
    </div>
  );
};

const AppRouter: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default AppRouter;
