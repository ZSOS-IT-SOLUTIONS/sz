import React from 'react';
import { Service } from '../types';
import { X, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface ServiceDetailsProps {
  service: Service;
  onBack: () => void;
  onFeatureClick?: (feature: string) => void;
  onNavigateToContact?: () => void;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service, onBack, onFeatureClick, onNavigateToContact }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-lg mt-12 font-inter">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-gray-800 mb-6 px-3 py-1 rounded-full border border-gray-300 transition hover:shadow-md"
      >
        <ArrowLeft size={18} />
        <span>Back</span>
      </button>

      {service.image && (
        <div className="mb-8">
          <img
            src={service.image}
            alt={`${service.label} image`}
            className="w-full h-64 object-cover rounded-2xl shadow-md"
          />
        </div>
      )}

      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#4699f9] to-[#6bc4ff] bg-clip-text text-transparent mb-6 font-montserrat">
          {service.label}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 font-montserrat">Key Features</h2>
          <ul className="space-y-4">
            {service.features.map((feature, idx) => (
              <li 
                key={idx} 
                onClick={() => onFeatureClick && onFeatureClick(feature)}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition cursor-pointer"
              >
                <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-to-br from-[#4699f9]/5 to-[#6bc4ff]/5 rounded-3xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 font-montserrat">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Experience the full power of {service.label.toLowerCase()}. Request a personalized demo or consultation today.
          </p>
          <button
            onClick={() => onNavigateToContact && onNavigateToContact()}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#4699f9] to-[#6bc4ff] hover:from-[#3a8ae6] hover:to-[#5ab3f5] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Contact Us</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-500 text-lg">
          Discover how {service.label} can transform your business. Let's build something extraordinary together.
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
