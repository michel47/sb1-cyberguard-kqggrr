import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { StatsSection } from './components/StatsSection';
import { NewsSection } from './components/NewsSection';
import { BlogCarousel } from './components/BlogCarousel';
import { BlogPost } from './components/BlogPost';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <NewsSection />
        <BlogCarousel />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background-950 dark:bg-background-50 text-text-50 dark:text-text-950 transition-colors duration-200">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}