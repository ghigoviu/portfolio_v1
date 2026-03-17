import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../theme/ThemeContext';
import { Moon, Sun, Languages } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const isDark = theme === 'cocina';

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center space-x-3 bg-white/30 dark:bg-black/30 backdrop-blur-md p-2 rounded-full border border-light-text/10 dark:border-dark-text/10 shadow-lg">
      <button
        onClick={toggleLanguage}
        className="p-2 rounded-full hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary transition-colors group"
        aria-label="Toggle Language"
      >
        <Languages className="w-5 h-5 text-light-text dark:text-dark-text group-hover:scale-110 transition-transform" />
      </button>
      
      <div className="w-px h-6 bg-light-text/20 dark:bg-dark-text/20" />
      
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary transition-colors group"
        aria-label="Toggle Theme"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-dark-accent2 group-hover:rotate-45 transition-transform" />
        ) : (
          <Moon className="w-5 h-5 text-light-accent1 group-hover:-rotate-12 transition-transform" />
        )}
      </button>
    </div>
  );
};
