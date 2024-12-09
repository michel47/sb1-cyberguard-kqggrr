import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="bg-background-900 dark:bg-background-100 py-24 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-secondary-400 via-accent-500 to-secondary-600 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-text-200 dark:text-text-800 max-w-2xl mx-auto">
            Ready to secure your digital assets? Contact us for a free consultation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background-800 dark:bg-background-200 p-8 rounded-lg border border-background-700 dark:border-background-300">
            <form>
              <div className="mb-6">
                <label className="block text-text-200 dark:text-text-800 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-background-900 dark:bg-background-100 border border-background-700 dark:border-background-300 rounded-md px-4 py-2 text-text-100 dark:text-text-900 focus:outline-none focus:ring-2 focus:ring-secondary-500 transition-colors"
                />
              </div>
              <div className="mb-6">
                <label className="block text-text-200 dark:text-text-800 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-background-900 dark:bg-background-100 border border-background-700 dark:border-background-300 rounded-md px-4 py-2 text-text-100 dark:text-text-900 focus:outline-none focus:ring-2 focus:ring-secondary-500 transition-colors"
                />
              </div>
              <div className="mb-6">
                <label className="block text-text-200 dark:text-text-800 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-background-900 dark:bg-background-100 border border-background-700 dark:border-background-300 rounded-md px-4 py-2 text-text-100 dark:text-text-900 focus:outline-none focus:ring-2 focus:ring-secondary-500 transition-colors"
                ></textarea>
              </div>
              <button className="w-full bg-secondary-500 hover:bg-secondary-600 text-text-50 py-3 rounded-md transition-all duration-300 transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-secondary-500" />
              <div>
                <h3 className="text-text-100 dark:text-text-900 font-bold mb-1">Email</h3>
                <p className="text-text-200 dark:text-text-800">contact@cyberguard.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-accent-500" />
              <div>
                <h3 className="text-text-100 dark:text-text-900 font-bold mb-1">Phone</h3>
                <p className="text-text-200 dark:text-text-800">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-secondary-500" />
              <div>
                <h3 className="text-text-100 dark:text-text-900 font-bold mb-1">Location</h3>
                <p className="text-text-200 dark:text-text-800">
                  CyberGuard Technologies GmbH<br />
                  Cyber Street 123<br />
                  10115 Berlin<br />
                  Germany
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Linkedin className="h-6 w-6 text-accent-500" />
              <div>
                <h3 className="text-text-100 dark:text-text-900 font-bold mb-1">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/company/cyberguard" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-200 dark:text-text-800 hover:text-secondary-500 transition-colors"
                >
                  Connect with us on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}