import React, { useState, useEffect, useRef, useCallback } from 'react';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&_';

interface ShuffleTextProps {
  text: string;
  className?: string;
}

export const ShuffleText: React.FC<ShuffleTextProps> = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<number | null>(null);
  const startShuffle = useCallback(() => {
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
  }, [text]);

  const stopShuffle = useCallback(() => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    setDisplayText(text);
  }, [text]);

  useEffect(() => {
    // Start shuffle on mount or when the text prop changes
    startShuffle();
  }, [startShuffle]);

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
