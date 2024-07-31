import { useEffect } from 'react';

export function useScrollIntoView(element) {
  useEffect(() => {
    function observerCallback(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio <= 0.1) {
          element.current.style.opacity = '0';
          element.current.style.top = '4rem';
        }

        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          element.current.style.opacity = '1';
          element.current.style.top = '0';
        }
      });
    }
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
      // threshold: [0.01, 0.5],
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(element.current);
  }, [element]);

  return true;
}
