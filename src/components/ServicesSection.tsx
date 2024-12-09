import React from 'react';
import { Shield, Lock, Server, Cpu } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: <Shield className="h-12 w-12 text-secondary-500" />,
      title: "Threat Detection",
      description: "Advanced AI-powered systems to identify and neutralize cyber threats in real-time"
    },
    {
      icon: <Lock className="h-12 w-12 text-accent-500" />,
      title: "Data Encryption",
      description: "Military-grade encryption protocols to secure your sensitive information"
    },
    {
      icon: <Server className="h-12 w-12 text-secondary-500" />,
      title: "Network Security",
      description: "Comprehensive network protection against unauthorized access and attacks"
    },
    {
      icon: <Cpu className="h-12 w-12 text-accent-500" />,
      title: "System Hardening",
      description: "Robust security measures to strengthen your infrastructure against vulnerabilities"
    }
  ];

  return (
    <section id="services" className="relative bg-background-800 dark:bg-background-200 py-24 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-secondary-400 via-accent-500 to-secondary-600 bg-clip-text text-transparent mb-4">
            Our Security Services
          </h2>
          <p className="text-text-200 dark:text-text-800 max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-background-900 dark:bg-background-100 p-6 rounded-lg border border-background-700 dark:border-background-300 hover:border-secondary-500 transition-all duration-300 transform hover:scale-105">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-text-100 dark:text-text-900 mb-2">{service.title}</h3>
              <p className="text-text-200 dark:text-text-800">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}