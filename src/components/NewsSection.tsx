import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    date: '2024-03-15',
    title: 'New AI-Powered Threat Detection System Released',
    excerpt: 'Our latest cybersecurity solution leverages advanced AI to identify and neutralize threats in real-time.',
    category: 'Product Update'
  },
  {
    date: '2024-03-10',
    title: 'CyberGuard Recognized as Industry Leader',
    excerpt: 'Leading security firms acknowledge CyberGuard\'s innovative approach to cybersecurity.',
    category: 'Company News'
  },
  {
    date: '2024-03-05',
    title: 'Protecting Against Emerging Cyber Threats',
    excerpt: 'Learn about the latest cybersecurity threats and how to protect your organization.',
    category: 'Security Advisory'
  }
];

export function NewsSection() {
  return (
    <section id="news" className="bg-background-800 dark:bg-background-200 py-24 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-secondary-400 via-accent-500 to-secondary-600 bg-clip-text text-transparent mb-4">
            Latest News
          </h2>
          <p className="text-text-200 dark:text-text-800 max-w-2xl mx-auto">
            Stay updated with the latest cybersecurity news and company updates
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-background-900 dark:bg-background-100 rounded-lg overflow-hidden border border-background-700 dark:border-background-300 hover:border-secondary-500 transition-all duration-300 transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center gap-2 text-text-300 dark:text-text-700 mb-4">
                  <Calendar size={16} className="text-secondary-500" />
                  <span className="text-sm">{item.date}</span>
                  <span className="text-xs px-2 py-1 bg-accent-500 text-text-50 rounded-full ml-auto">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-100 dark:text-text-900 mb-3">{item.title}</h3>
                <p className="text-text-200 dark:text-text-800 mb-4">{item.excerpt}</p>
                <button className="text-secondary-400 hover:text-secondary-500 flex items-center gap-2 transition-colors">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}