import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services/Services';
import { Process } from './components/Process/Process';
import { ImageCarousel } from './components/ImageCarousel/ImageCarousel';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { WhatsAppButton } from './components/WhatsAppButton/WhatsAppButton';
import { CookieBanner } from './components/CookieBanner/CookieBanner';
import { BackToTop } from './components/BackToTop/BackToTop';
import { SEO } from './components/SEO/SEO';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Header />
      <Hero />
      <Services />
      <Process />
      <ImageCarousel />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
      <BackToTop />
    </div>
  );
}

export default App;