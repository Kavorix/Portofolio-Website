"use client"

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Create the GlowCard component with no SSR
const GlowCard = ({ children, identifier }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const initializeGlowEffect = async () => {
      const CONTAINER = containerRef.current;
      if (!CONTAINER) return;

      const CARDS = CONTAINER.querySelectorAll(`.glow-card-${identifier}`);
      
      const CONFIG = {
        proximity: 40,
        spread: 80,
        blur: 12,
        gap: 32,
        vertical: false,
        opacity: 0,
      };

      const UPDATE = (event) => {
        if (!event) return;

        for (const CARD of CARDS) {
          const CARD_BOUNDS = CARD.getBoundingClientRect();
          
          const mouseX = event.clientX;
          const mouseY = event.clientY;
          
          const centerX = CARD_BOUNDS.left + CARD_BOUNDS.width / 2;
          const centerY = CARD_BOUNDS.top + CARD_BOUNDS.height / 2;
          const distanceX = mouseX - centerX;
          const distanceY = mouseY - centerY;
          
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          const angle = (Math.atan2(distanceY, distanceX) * 180) / Math.PI;
          
          if (distance < CONFIG.proximity) {
            CARD.style.setProperty('--distance', distance);
            CARD.style.setProperty('--angle', angle);
            CARD.style.setProperty('--opacity', 1);
          } else {
            CARD.style.setProperty('--opacity', CONFIG.opacity);
          }
        }
      };

      const RESTYLE = () => {
        CONTAINER.style.setProperty('--gap', CONFIG.gap);
        CONTAINER.style.setProperty('--blur', CONFIG.blur);
        CONTAINER.style.setProperty('--spread', CONFIG.spread);
        CONTAINER.style.setProperty(
          '--direction',
          CONFIG.vertical ? 'column' : 'row'
        );
      };

      RESTYLE();
      document.body.addEventListener('pointermove', UPDATE);

      return () => {
        document.body.removeEventListener('pointermove', UPDATE);
      };
    };

    // Only run in browser
    if (typeof window !== 'undefined') {
      initializeGlowEffect();
    }
  }, [identifier]);

  return (
    <div ref={containerRef} className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

// Export a non-SSR version of the component
export default dynamic(() => Promise.resolve(GlowCard), {
  ssr: false
});