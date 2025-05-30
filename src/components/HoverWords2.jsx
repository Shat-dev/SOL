import React from 'react';
import { hoverWords2 } from '../data/hoverWords2';

export function HoverWords2() {
  // Generate random positions in a circular pattern around the center
  const getRandomPosition = (index) => {
    const angle = (index / hoverWords2.length) * 2 * Math.PI;
    const radius = 35 + Math.random() * 15; // Distance from center
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    
    return {
      position: 'absolute',
      left: `${x}%`,
      top: `${y}%`,
      transform: `translate(-50%, -50%) rotate(${Math.random() * 40 - 20}deg)`
    };
  };

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
      {hoverWords2.map((word, index) => (
        <div
          key={index}
          style={{
            ...getRandomPosition(index),
            fontSize: '1.2rem',
            color: '#2a2a2a',
            opacity: 0.75,
            whiteSpace: 'nowrap',
            fontWeight: 'bold',
            padding: '0.5rem'
          }}
        >
          {word}
        </div>
      ))}
    </div>
  );
}
