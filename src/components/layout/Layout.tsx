import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500 w-full overflow-x-hidden">
      <ThemeToggle />
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Simple footer adapting to theme */}
      <footer className="py-6 text-center border-t border-light-accent4/20 dark:border-dark-accent3/20 flex flex-col sm:flex-row justify-center items-center gap-4">
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} - Rodrigo Cambray
        </p>
        <div className="flex items-center space-x-4">
          <Link to="portfolio_v1/blog" className="text-sm font-semibold hover:underline opacity-80 hover:opacity-100 dark:text-dark-accent3 text-light-accent3">
            VER BLOG
          </Link>
        </div>
      </footer>
    </div>
  );
};
