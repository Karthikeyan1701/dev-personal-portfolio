import React, { useEffect, useState, useRef } from 'react';

const FadeIn = ({ children, delay = 0, duration = 500, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
      const element = elementRef.current;

      const observer = new IntersectionObserver(
        ([entry]) => {
          // Trigger animation when element enters viewport
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        {
          threshold: threshold,
          rootMargin: '0px 0px -50px 0px'  // Trigger slightly before element is fully visible
        }
      );

      if (element) {
        observer.observe(element);
      }

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
  }, [threshold, isVisible]);

  return (
    <div
        ref={elementRef}
        className={isVisible ? 'animate-fadeIn' : 'opacity-0'}
        style={{
          animationDelay: isVisible ? `${delay}ms` : '0ms',
          animationDuration: `${duration}ms`,
          animationFillMode: 'both'
        }}
    >
        {children}
    </div>
  )
};

export default FadeIn;