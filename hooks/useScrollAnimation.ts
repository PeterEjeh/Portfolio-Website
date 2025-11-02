
import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options?: IntersectionObserverInit) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // We can unobserve after it's visible to avoid re-triggering
        if (elementRef.current) {
            observer.unobserve(elementRef.current);
        }
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  // A generic way to assign ref to any element type
  const refCallback = (node: HTMLElement | null) => {
    elementRef.current = node;
  };

  return [refCallback, isVisible] as const;
};
