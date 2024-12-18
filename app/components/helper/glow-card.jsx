"use client"

import { useEffect, useRef } from 'react';

const GlowCard = ({ children, identifier }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if we're running in the browser
    if (typeof window === 'undefined') return;

    const CONTAINER = containerRef.current;
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
      // Skip if no event is provided
      if (!event) return;

      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();
        
        // Get the mouse position relative to the card
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        // Calculate the distance between the mouse and the card
        const centerX = CARD_BOUNDS.left + CARD_BOUNDS.width / 2;
        const centerY = CARD_BOUNDS.top + CARD_BOUNDS.height / 2;
        const distanceX = mouseX - centerX;
        const distanceY = mouseY - centerY;
        
        // Calculate the absolute distance
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        // Calculate the angle between mouse and card center
        const angle = (Math.atan2(distanceY, distanceX) * 180) / Math.PI;
        
        // Update the card's custom properties based on mouse proximity
        if (distance < CONFIG.proximity) {
          CARD.style.setProperty('--distance', distance);
          CARD.style.setProperty('--angle', angle);
          CARD.style.setProperty('--opacity', 1);
        } else {
          CARD.style.setProperty('--opacity', CONFIG.opacity);
        }
      }
    };

    // Only add event listener if we're in the browser
    if (typeof window !== 'undefined') {
      document.body.addEventListener('pointermove', UPDATE);
    }

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

    return () => {
      // Only remove event listener if we're in the browser
      if (typeof window !== 'undefined') {
        document.body.removeEventListener('pointermove', UPDATE);
      }
    };
  }, [identifier]);

  return (
    <div ref={containerRef} className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
}

export default GlowCard;