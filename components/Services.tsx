
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  return (
    <AnimatedSection id="services">
      <h2 className="text-3xl font-bold text-center mb-16 text-[#ccd6f6]">
        <span className="text-[#64ffda] mr-2">03.</span>What I Offer
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service) => (
          <div 
            key={service.title} 
            className="bg-[#112240] p-8 rounded-lg shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20"
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-xl font-bold mb-4 text-[#ccd6f6]">{service.title}</h3>
            <p className="text-[#8892b0]">{service.description}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Services;
