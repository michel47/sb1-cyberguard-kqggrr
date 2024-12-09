import React from 'react';

export function StatsSection() {
  const stats = [
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Monitoring" },
    { number: "500+", label: "Clients Protected" },
    { number: "0", label: "Security Breaches" }
  ];

  return (
    <section className="bg-background-900 dark:bg-background-100 py-24 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-secondary-400 via-accent-500 to-secondary-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-text-200 dark:text-text-800">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}