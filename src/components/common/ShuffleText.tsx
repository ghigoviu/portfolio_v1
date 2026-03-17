import React, { useState, useEffect, useRef } from 'react';

interface ShuffleTextProps {
  text: string;
  className?: string;
}

export const ShuffleText: React.FC<ShuffleTextProps> = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<number | null>(null);
  // Characters used for the shuffle effect
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

  const startShuffle = () => {
    let iteration = 0;
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    
    intervalRef.current = window.setInterval(() => {
      setDisplayText(
        text.split('')
          .map((letter, index) => {
            if (index < iteration) return text[index];
            if (letter === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      if (iteration >= text.length) {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 3;
    }, 30);
  };

  const stopShuffle = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  useEffect(() => {
    // Reset display text if the text prop changes (e.g. translation changes)
    setDisplayText(text);
  }, [text]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      className={className}
      onMouseEnter={startShuffle}
      onMouseLeave={stopShuffle}
    >
      {displayText}
    </span>
  );
};
