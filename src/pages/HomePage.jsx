import './HomePage.css';
import { HoverZones } from '../components/HoverZones';
import { LoreHoverZones } from '../components/LoreHoverZones';
import { useState, useEffect } from 'react';

export function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/Finalonec.png', '/Finalone.png', '/Finalonec.png', '/Flipped2.png', '/Flipped1.png', '/Flipped2.png'];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <title>$SOL</title>
      <link rel="icon" type="image/svg+xml" href="/Finalone.png" />
      <div className="background-container" style={{ marginLeft: '-1%' }}>
        {[...Array(25)].map((_, index) => (
          <div
            key={index}
            className="background-image"
            style={{
              backgroundImage: `url(${images[currentImage]})`,
              top: `${Math.floor(index / 5) * 20}%`,
              left: `${(index % 5) * 20}%`,
              width: '18%',
              height: '18%',
              position: 'absolute',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              margin: '1%',
              zIndex: -1
            }}
          />
        ))}
      </div>
      <div className="Webpage">
        <div className="top-bar">
          <div className="top-bar-content box-section-top">
            <div className="top-buttons">
              <button className="left">Twitter</button>
              <button className="left">Telegram</button>
              <div className="ticker-name">$SOL</div>
              <button className="right">Contract</button>
              <button className="right">Dexscreener</button>
            </div>
            <div className="contract-address">
              CA: 6ogzHhzdrQr9Pgv6hZ2MNze7UrzBMAFyBBWUYp1Fhitx
            </div>
          </div>
        </div>

        <div className="middle-section">
          <div className="middle-section-content box-section">
            <div className="headers">
              <p>About</p>
            </div>
            <div className="below-header-text">
              <p>
                $SOL represents the worst of us. Solana promised innovation, instead, it gave rise to the most toxic and racist fucks in crypto. This isn't a project. It's not financial advice. It's a coin that shows the worst parts of Solana. If you're not offended, chances are this coin was made for you.
              </p>
            </div>
          </div>
          <div className='middle-section-content box-section-SOL'>
            <div className='headers'>
              <p>This is Solana</p>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '400px',
              position: 'relative'
            }}>
              <img 
                src={images[currentImage]} 
                alt="Solana" 
                style={{
                  maxWidth: '80%',
                  maxHeight: '80%',
                  objectFit: 'contain',
                  transition: 'opacity 0.3s ease'
                }}
              />
            </div>
            <HoverZones />
          </div>
          <div className="bottom-section">
            <div className='bottom-section-content box-section-SOL'>
              <div className='headers'>
                <p>Solana Lore</p>
              </div>
              <div style={{ position: 'relative', width: '100%', height: '400px' }}>
                <LoreHoverZones />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

