import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500 w-full overflow-x-hidden">
      <ThemeToggle />
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Simple footer adapting to theme */}
      <footer className="py-6 text-center border-t border-light-accent4/20 dark:border-dark-accent3/20">
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} - Rodrigo Cambray
        </p>
      </footer>
    </div>
  );
};
