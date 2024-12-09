import React, { useState } from 'react';
import { Shield, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-background-900/80 dark:bg-background-100/80 backdrop-blur-md fixed w-full z-50 border-b border-background-700/50 dark:border-background-300/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-secondary-500" />
            <span className="text-xl font-bold text-secondary-500">
              CyberGuard
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-text-100 hover:text-secondary-500 transition-colors">Services</a>
            <a href="#news" className="text-text-100 hover:text-secondary-500 transition-colors">News</a>
            <a href="#blog" className="text-text-100 hover:text-secondary-500 transition-colors">Blog</a>
            <a href="#about" className="text-text-100 hover:text-secondary-500 transition-colors">About</a>
            <a href="#contact" className="text-text-100 hover:text-secondary-500 transition-colors">Contact</a>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-background-800/50 dark:hover:bg-background-200/50 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-secondary-500" />
              ) : (
                <Moon className="h-5 w-5 text-secondary-500" />
              )}
            </button>
            <button className="bg-secondary-500/90 hover:bg-secondary-600 text-text-50 px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden p-2" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-secondary-500" />
            ) : (
              <Menu className="h-6 w-6 text-secondary-500" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background-900/95 dark:bg-background-100/95 backdrop-blur-md border-b border-background-700/50 dark:border-background-300/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#services" className="block px-3 py-2 text-text-100 hover:text-secondary-500">Services</a>
            <a href="#news" className="block px-3 py-2 text-text-100 hover:text-secondary-500">News</a>
            <a href="#blog" className="block px-3 py-2 text-text-100 hover:text-secondary-500">Blog</a>
            <a href="#about" className="block px-3 py-2 text-text-100 hover:text-secondary-500">About</a>
            <a href="#contact" className="block px-3 py-2 text-text-100 hover:text-secondary-500">Contact</a>
            <button className="w-full text-left px-3 py-2 bg-secondary-500/90 hover:bg-secondary-600 text-text-50 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}