import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Cybersecurity",
    abstract: "Explore how artificial intelligence is revolutionizing the cybersecurity landscape, from threat detection to automated response systems.",
    author: "Dr. Sarah Chen",
    readTime: "5 min read",
    date: "2024-03-20",
    slug: "future-ai-cybersecurity"
  },
  {
    id: 2,
    title: "Zero Trust Architecture: A Complete Guide",
    abstract: "Understanding the principles and implementation of Zero Trust security models in modern enterprise environments.",
    author: "Michael Rodriguez",
    readTime: "8 min read",
    date: "2024-03-18",
    slug: "zero-trust-architecture-guide"
  },
  {
    id: 3,
    title: "Blockchain Security Best Practices",
    abstract: "Essential security considerations and best practices for blockchain implementations in enterprise systems.",
    author: "Alex Thompson",
    readTime: "6 min read",
    date: "2024-03-15",
    slug: "blockchain-security-practices"
  }
];

export function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  return (
    <section id="blog" className="bg-background-900 dark:bg-background-100 py-24 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-secondary-400 via-accent-500 to-secondary-600 bg-clip-text text-transparent mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-text-200 dark:text-text-800 max-w-2xl mx-auto">
            Expert insights and analysis on cybersecurity trends and technologies
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {blogPosts.map((post) => (
                <div 
                  key={post.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-background-800 dark:bg-background-200 rounded-lg p-8 border border-background-700 dark:border-background-300">
                    <div className="flex items-center gap-2 text-text-300 dark:text-text-700 mb-4">
                      <Clock size={16} className="text-secondary-500" />
                      <span className="text-sm">{post.readTime}</span>
                      <span className="text-sm ml-4">{post.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-text-100 dark:text-text-900 mb-4">
                      {post.title}
                    </h3>
                    <p className="text-text-200 dark:text-text-800 mb-6">
                      {post.abstract}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-text-300 dark:text-text-700">
                        By {post.author}
                      </span>
                      <a 
                        href={`/blog/${post.slug}`}
                        className="text-secondary-500 hover:text-secondary-400 font-semibold transition-colors"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background-900/80 dark:bg-background-100/80 backdrop-blur-sm text-text-100 p-2 rounded-full border border-background-700/50 dark:border-background-300/50 hover:bg-secondary-500/20"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background-900/80 dark:bg-background-100/80 backdrop-blur-sm text-text-100 p-2 rounded-full border border-background-700/50 dark:border-background-300/50 hover:bg-secondary-500/20"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-secondary-500' 
                    : 'bg-background-700 dark:bg-background-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}