'use client';

import { useEffect, useRef } from 'react';

function Glass({ children, className }) {
  const element = useRef();

  useEffect(() => {
    element.current.addEventListener('mousemove', (ev) => {
      element.current.style.setProperty('--x', ev.x + 'px');
      element.current.style.setProperty('--y', ev.y + 'px');
    });
  }, [element]);

  return (
    <div ref={element} className={`glass ${className}`}>
      {children}
    </div>
  );
}

export default Glass;
