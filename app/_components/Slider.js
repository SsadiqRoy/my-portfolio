'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const SliderContext = createContext();

//

function Slider({ children }) {
  const [current, setCurrent] = useState(0);
  const [scrollItems, setScrollItems] = useState(0);

  const value = { current, setCurrent, scrollItems, setScrollItems };
  return <SliderContext.Provider value={value}>{children}</SliderContext.Provider>;
}

function useSliderCtx() {
  const context = useContext(SliderContext);

  return context;
}

export default Slider;

/*






*/

export function SliderItems({ children }) {
  const { current, setScrollItems } = useSliderCtx();
  const sliderElement = useRef();

  const coverPercent = 0.95; // percent of item to be hidden
  const gap = 10; // 1rem

  useEffect(() => {
    const children = Array.from(sliderElement.current.children);

    setScrollItems(children.length);

    children.forEach((c) => {
      const itemWidth = c.clientWidth;
      const parentWidth = sliderElement.current.clientWidth;
      const lastItem = children.length - 1;
      const secondItem = 1;

      let transform = '0px';
      if (current === secondItem) transform = `calc(-95% - 0.5rem)`;

      if (current > secondItem && current < lastItem) {
        const coveredItems = current - 1;
        const coveredItemsSpace = coveredItems * itemWidth;
        const coveredGaps = coveredItems * gap;
        const partlyCoveredItemSpace = coverPercent * itemWidth + 0.5 * gap;

        const movement = coveredItemsSpace + coveredGaps + partlyCoveredItemSpace;
        transform = `-${movement}px`;
      }

      if (current === lastItem) {
        const totalItems = children.length;
        const totalGaps = current * gap;
        const totalItemsSpace = totalItems * itemWidth;

        const movement = totalItemsSpace + totalGaps - parentWidth;
        transform = `-${movement}px`;
      }

      c.style.transform = `translateX(${transform})`;
    });
  }, [current, setScrollItems]);

  return (
    <div className="slider" ref={sliderElement}>
      {children}
    </div>
  );
}

export function SliderIndicator() {
  const { current, scrollItems, setCurrent } = useSliderCtx();

  const prev = current === 0 ? 0 : current - 1;
  const next = current === scrollItems - 1 ? current : current + 1;

  return (
    <div className="slider-indicators">
      <div className="slider-arrow" onClick={() => setCurrent(prev)}>
        <FaArrowLeft />
      </div>

      <div className="slider-balls">
        {Array.from({ length: scrollItems }).map((_, i) => {
          return <span key={i} onClick={() => setCurrent(i)} className={current === i ? 'active' : ''}></span>;
        })}
      </div>

      <div className="slider-arrow" onClick={() => setCurrent(next)}>
        <FaArrowRight />
      </div>
    </div>
  );
}

export function SliderItem({ image, name, hours }) {
  return (
    <div className="slider-item">
      <div className="slider-item_image">
        <img src={`certs/${image}.jpg`} alt={name} />
      </div>
      <div className="slider-item_description">
        <span>{name}</span>
        <span>{hours} hrs</span>
      </div>
    </div>
  );
}
