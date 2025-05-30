import React, { useState, useEffect } from 'react';
import { hoverWords2 } from '../data/hoverWords2';

export function HoverWords2() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 400);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate truly random positions across the entire container
  const getRandomPosition = () => {
    return {
      position: 'absolute',
      // Generate random top and left positions within a safe range (e.g., 5% to 95%)
      top: `${Math.random() * 90 + 5}%`,
      left: `${Math.random() * 90 + 5}%`,
      // Random rotation
      transform: `translate(-50%, -50%) rotate(${Math.random() * 40 - 20}deg)`
    };
  };

  // Use fewer words on mobile
  const wordsToShow = isMobile ? hoverWords2.slice(0, Math.ceil(hoverWords2.length / 2)) : hoverWords2;

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
      {wordsToShow.map((word, index) => (
        <div
          key={index}
          style={{
            ...getRandomPosition(), // Use a new random position for each word
            fontSize: isMobile ? '1rem' : '1.5rem',
            color: '#2a2a2a',
            opacity: 0.75,
            whiteSpace: 'nowrap',
            fontWeight: 'bold',
            padding: isMobile ? '0.3rem' : '0.5rem'
          }}
        >
          {word}
        </div>
      ))}
    </div>
  );
}
