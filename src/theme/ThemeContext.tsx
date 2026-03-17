import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'comensal' | 'cocina';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check local storage or system preference
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'comensal' || saved === 'cocina') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'cocina' : 'comensal';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'cocina') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'comensal' ? 'cocina' : 'comensal');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
