import React, { useEffect, useRef, useState } from 'react';
import { Player } from '@lordicon/react';
import { useTheme } from '../../theme/ThemeContext';

export type LordIconItem = {
  light: any; // The JSON import
  dark: any;
};

interface LordIconProps {
  icon: LordIconItem;
  size?: number;
  colors?: {
    primary?: string;
    secondary?: string;
  };
  trigger?: 'hover' | 'loop' | 'morph' | 'click' | 'in';
}

export const LordIcon: React.FC<LordIconProps> = ({ 
  icon, 
  size = 64, 
  trigger = 'hover'
}) => {
  const { theme } = useTheme();
  const playerRef = useRef<Player>(null);
  
  const [iconData, setIconData] = useState<any>(null);

  useEffect(() => {
    let active = true;
    
    const loadIcon = async () => {
      const target = theme === 'comensal' ? icon.light : icon.dark;
      
      if (typeof target === 'string') {
        try {
          const res = await fetch(target);
          if (!res.ok) throw new Error('Network error');
          const data = await res.json();
          if (active) setIconData(data);
        } catch (err) {
          console.error('Error fetching Lordicon data:', err);
          if (active) setIconData(null);
        }
      } else {
        if (active) setIconData(target);
      }
    };

    loadIcon();
    
    return () => { active = false; };
  }, [theme, icon.light, icon.dark]);

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      playerRef.current?.playFromBeginning();
    }
  };

  if (!iconData) return <div style={{ width: size, height: size }} />;

  return (
    <div 
      onMouseEnter={handleMouseEnter} 
      style={{ width: size, height: size, display: 'inline-block' }}
      className="transition-transform duration-300 hover:scale-110"
    >
      <Player
        ref={playerRef}
        icon={iconData}
        size={size}
        // state="in"
        onComplete={() => {
           if (trigger === 'loop') playerRef.current?.playFromBeginning();
        }}
      />
    </div>
  );
};
