import React from 'react';
import { Linkedin, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background-900 dark:bg-background-100 border-t border-background-700 dark:border-background-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-secondary-500" />
              <span className="text-xl font-bold text-secondary-500">CyberGuard</span>
            </div>
            <p className="text-text-200 dark:text-text-800">
              Protecting your digital assets with next-generation cybersecurity solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-100 dark:text-text-900 mb-4">Company</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-text-200 dark:text-text-800 hover:text-secondary-500 transition-colors">About</a>
              <a href="#services" className="block text-text-200 dark:text-text-800 hover:text-secondary-500 transition-colors">Services</a>
              <a href="#news" className="block text-text-200 dark:text-text-800 hover:text-secondary-500 transition-colors">News</a>
              <a href="#contact" className="block text-text-200 dark:text-text-800 hover:text-secondary-500 transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-100 dark:text-text-900 mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="/privacy" className="block text-text-200 dark:text-text-800 hover:text-secondary-500 transition-colors">Privacy Policy</a>
              <a href="/terms" className="block text-text-200 dark:text-text-800 hover:text-secondary-500 transition-colors">Terms of Service</a>
              <a href="/impressum" className="block text-text-200 dark:text-text-800 hover:text-secondary-500 transition-colors">Impressum</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-100 dark:text-text-900 mb-4">Connect</h3>
            <a 
              href="https://linkedin.com/company/cyberguard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-200 dark:text-text-800 hover:text-secondary-500 transition-colors"
            >
              <Linkedin size={20} />
              Follow us on LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-background-700 dark:border-background-300">
          <p className="text-center text-text-200 dark:text-text-800">
            © {new Date().getFullYear()} CyberGuard Technologies GmbH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}