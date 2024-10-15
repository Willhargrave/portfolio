import { useState, useEffect, useRef } from 'react';

const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver(([entry]) => {
          setIsVisible(entry.isIntersecting);
        }, options)
      : null;

    if (currentRef && observer) {
      observer.observe(currentRef);

      return () => {
        observer.unobserve(currentRef);
      };
    }
    setIsVisible(true);
    return () => {};
  }, [options]);

  return [domRef, isVisible];
};

export default useScrollAnimation;