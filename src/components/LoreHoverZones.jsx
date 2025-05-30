import React, { useState, useEffect } from 'react';
import './LoreHoverZones.css';

const loreImages = [
  '/Project Images/Ansem-Twitter.jpg',
  '/Project Images/GhsY7pWXgAEjxTL.jpeg',
  '/Project Images/GkMA6FHXcAEkdh_.jpg',
  '/Project Images/Gmkqv8DaEAAJEDi.jpeg',
  '/Project Images/Gr7BugeWEAAVvNM.jpeg',
  '/Project Images/GrQl8XWWMAAI0Jp.jpeg',
  '/Project Images/QmUUjtCErJdZRiRhpYcBp9LMaPGv8TFYjjS3YdpYZmbrS5.jpeg',
  '/Project Images/uploads1661889245117-vitalik.jpg',
  '/Project Images/Screenshot 2025-05-18 at 21.53.06.png',
  '/Project Images/Screenshot 2025-05-18 at 21.55.27.png',
  '/Project Images/Screenshot 2025-05-18 at 21.55.59.png',
  '/Project Images/Screenshot 2025-05-18 at 21.56.32.png',
  '/Project Images/Screenshot 2025-05-18 at 22.27.43.png',
  '/Project Images/Screenshot 2025-05-18 at 22.30.48.png',
  '/Project Images/Screenshot 2025-05-18 at 22.33.19.png',
  '/Project Images/Screenshot 2025-05-18 at 22.36.27.png',
  '/Project Images/Screenshot 2025-05-18 at 22.36.54.png',
  '/Project Images/Screenshot 2025-05-27 at 19.58.31.png',
  '/Project Images/Screenshot 2025-05-27 at 21.40.28.png',
  '/Project Images/Screenshot 2025-05-27 at 21.40.53.png',
  '/Project Images/Screenshot 2025-05-27 at 21.41.51.png',
  '/Project Images/Screenshot 2025-05-27 at 21.42.08.png',
  '/Project Images/Screenshot 2025-05-27 at 21.42.18.png',
  '/Project Images/Screenshot 2025-05-27 at 21.42.40.png',
  '/Project Images/Screenshot 2025-05-27 at 21.42.59.png',
  '/Project Images/Screenshot 2025-05-27 at 21.45.34.png',
  '/Project Images/Screenshot 2025-05-27 at 21.53.19.png',
  '/Project Images/Screenshot 2025-05-27 at 22.14.15.png',
  '/Project Images/Screenshot 2025-05-27 at 22.14.48.png',
  '/Project Images/Screenshot 2025-05-27 at 22.39.54.png',
  '/Project Images/Screenshot 2025-05-27 at 23.03.57.png',
  '/Project Images/Screenshot 2025-05-28 at 12.38.19.png',
  '/Project Images/Screenshot 2025-05-28 at 12.40.24.png',
  '/Project Images/gshy6yedf1ee1.png',
  '/Project Images/af08f9dcc9ec5c842c59f7334322b4f6.jpeg'
];

export function LoreHoverZones() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 400);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate random positions across the container
  const getRandomPosition = () => {
    return {
      position: 'absolute',
      top: `${Math.random() * 80 + 20}%`,
      left: `${Math.random() * 90 + 5}%`,
      transform: `translate(-50%, -50%) rotate(${Math.random() * 40 - 20}deg)`
    };
  };

  // Use fewer images on mobile
  const imagesToShow = isMobile ? loreImages.slice(0, Math.ceil(loreImages.length / 2)) : loreImages;

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
      {imagesToShow.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Solana Lore"
          style={{
            ...getRandomPosition(),
            width: isMobile ? '100px' : '150px',
            height: 'auto',
            opacity: 1,
            objectFit: 'contain',
            padding: isMobile ? '0.3rem' : '0.5rem'
          }}
        />
      ))}
    </div>
  );
} 