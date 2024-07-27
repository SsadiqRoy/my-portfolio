'use client';

import { useEffect, useRef } from 'react';

function ClippedItem() {
  useEffect(() => {
    const clipArea = document.querySelector('.clip-item');

    function clip() {
      const w = window.innerWidth;
      const h = clipArea.clientHeight + 1;
      const path = `M0 ${h} Q${0.5 * w} -${h}, ${w} ${h} h-${w} Z`;

      clipArea.style.clipPath = `path('${path}')`;
    }

    clip();
    window.addEventListener('resize', () => clip());
  });

  return <div className="clip-item"></div>;
}

export default ClippedItem;
