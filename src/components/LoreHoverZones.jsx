import { useState } from 'react';
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
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const totalPositions = 50; // 5 rows × 10 columns
  <img src={`${import.meta.env.BASE_URL}images/pic.png`} />


  return (
    <div className="lore-container">
      {[...Array(totalPositions)].map((_, index) => {
        const imageIndex = index % loreImages.length;
        return (
          <div 
            key={index} 
            className='lore-hover-zone'
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              top: `${Math.floor(index / 10) * 20}%`,
              left: `${(index % 10) * 10}%`
            }}
          >
            {hoveredIndex === index && (
              <img 
                src={loreImages[imageIndex]} 
                alt="Solana Lore" 
                className='lore-hover-image'
              />
            )}
          </div>
        );
      })}
    </div>
  );
} 