import './HomePage.css';
import { HoverZones } from '../components/HoverZones';
import { useState, useEffect } from 'react';

export function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/Finalone.png', '/Finalonec.png'];
  const flippedImages = ['/Flipped1.png', '/Flipped2.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <title>Sol trader</title>
      <link rel="icon" type="image/svg+xml" href="/y2k-favicon.svg" />
      <div className="background-container">
        {[...Array(30)].map((_, index) => {
          const row = Math.floor(index / 6);
          const isFlippedRow = row % 2 === 1;
          const currentImages = isFlippedRow ? flippedImages : images;
          
          return (
            <div
              key={index}
              className="background-image"
              style={{
                backgroundImage: `url(${currentImages[currentImage]})`,
                top: `${Math.floor(index / 6) * 20}%`,
                left: `${(index % 6) * 16.66}%`,
                width: '15%',
                height: '18%',
                position: 'absolute',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                margin: '1%',
                zIndex: -1
              }}
            />
          );
        })}
      </div>
      <div className="Webpage">
        <div className="top-bar">
          <div className="top-bar-content box-section-top">
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

        <div className="middle-section">
          <div className="middle-section-content box-section">
            <div className="headers">
              <p>About</p>
            </div>
            <div className="below-header-text">
              <p>
              Built on the very chain that gave rise to some of the most toxic, bigoted, and unhinged characters in crypto, $SOL is pure satire—a tokenized middle finger to the racist degenerates polluting the Solana ecosystem. Solana promised innovation; instead, it delivered a front-row seat to chaos. This isn't a project. It's not financial advice. It's a mirror—held up to the worst parts of a hilariously broken community. If you're offended, chances are, this was made for you.
              </p>
            </div>
          </div>
          <div className='middle-section-content box-section-SOL'>
            <div className='headers'>
              <p>This is Solana</p>
            </div>
            <HoverZones />
          </div>
        </div>
        <div className="bottom-section">
          <div className='bottom-section-content box-section-SOL'></div>
        </div>
      </div>
    </>
  );
}

