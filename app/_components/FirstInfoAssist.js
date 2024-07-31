'use client';

import { useRef } from 'react';
import { useScrollIntoView } from '../_hooks/hooks';

export function Akwaaba({ children }) {
  const element = useRef();
  useScrollIntoView(element);

  return (
    <div className="akwaaba" ref={element}>
      {children}
    </div>
  );
}

export function WhatIDo({ children }) {
  const element = useRef();
  useScrollIntoView(element);

  return (
    <div className="what-i-do" ref={element}>
      {children}
    </div>
  );
}
