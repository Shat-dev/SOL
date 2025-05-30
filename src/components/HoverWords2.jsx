import React from 'react';
import { hoverWords2 } from '../data/hoverWords2';

export function HoverWords2() {
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

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
      {hoverWords2.map((word, index) => (
        <div
          key={index}
          style={{
            ...getRandomPosition(), // Use a new random position for each word
            fontSize: '1.5rem',
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
