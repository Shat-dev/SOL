import { hoverWords } from '../data/hoverWords';

export function HoverZones() {
  // Function to generate random position
  const getRandomPosition = () => {
    return {
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 90 + 0}%`
    };
  };

  return (
    <>
      {hoverWords.map((word, index) => {
        const position = getRandomPosition();
        return (
          <div 
            key={index} 
            className='hover-zone'
            style={{
              top: position.top,
              left: position.left
            }}
          >
            <span className='hover-word'>{word}</span>
          </div>
        );
      })}
    </>
  );
} 