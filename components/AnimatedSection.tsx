
import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id, className = '' }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section 
      ref={ref} 
      id={id} 
      className={`min-h-screen py-20 md:py-32 transition-all duration-500 ${isVisible ? 'section-visible' : 'section-hidden'} ${className}`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
