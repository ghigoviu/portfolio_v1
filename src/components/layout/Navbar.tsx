import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../theme/ThemeContext';
import { Moon, Sun, Languages } from 'lucide-react'; // Temporary icons until Lordicon is fully set up

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const isDark = theme === 'cocina';

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-light-bg/80 dark:bg-dark-bg/80 border-b border-light-accent4/20 dark:border-dark-accent3/20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Brand / Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-playfair dark:font-bebas text-2xl font-bold text-light-heading dark:text-dark-heading tracking-tight dark:tracking-widest transition-all duration-500">
              RC<span className="text-light-accent3 dark:text-dark-accent1">.</span>
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary transition-colors"
              aria-label="Toggle Language"
            >
              <Languages className="w-5 h-5 text-light-text dark:text-dark-text" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-dark-accent2" />
              ) : (
                <Moon className="w-5 h-5 text-light-accent1" />
              )}
            </button>
            
            <div className="hidden md:flex flex-col text-xs text-right opacity-60">
              <span className="font-medium">{t(`theme.${theme}`)}</span>
              <span className="uppercase text-[10px] tracking-wider">{i18n.language}</span>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};
