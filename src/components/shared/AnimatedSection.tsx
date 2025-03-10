"use client"
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'; 
import { useEffect } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  animation = "fadeIn",
  delay = 0.1 
}: AnimatedSectionProps) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Dynamic import for WOW
      import('wowjs').then((WOW) => {
        const wow = new WOW.WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true,
          live: false
        });
        wow.init();
      });
    }
  }, []);

  return (
    <div
      ref={elementRef}
      className={`wow animated ${animation} ${className}`}
      data-wow-delay={`${delay}s`}
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;