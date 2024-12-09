import React from 'react';
import { ChevronRight } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background-900 dark:bg-background-100 pt-16 transition-colors duration-200">
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary-400 via-accent-500 to-secondary-600 bg-clip-text text-transparent">
            Secure Your Digital Future
          </h1>
          <p className="text-xl text-text-200 dark:text-text-800 mb-8 max-w-2xl mx-auto">
            Advanced cybersecurity solutions protecting your business from evolving digital threats
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-secondary-500 hover:bg-secondary-600 text-text-50 px-8 py-3 rounded-md font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
              Get Protected
              <ChevronRight size={20} />
            </button>
            <button className="border-2 border-accent-500 text-accent-400 hover:text-accent-300 px-8 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-900 dark:from-background-100 to-transparent"></div>
    </div>
  );
}