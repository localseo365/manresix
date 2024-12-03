import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Servicio Profesional de Vaciado de Pisos en Manresa y Bages
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Empresa líder en vaciado de pisos, locales y naves industriales en Manresa y toda la comarca del Bages. Ofrecemos un servicio integral de vaciado, limpieza y gestión de residuos con más de 15 años de experiencia. Presupuesto sin compromiso en 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+34603380004"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6B00] text-white rounded-lg hover:bg-[#FF6B00]/90 transition-colors text-lg font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              603 38 00 04
            </a>
            <a
              href="https://wa.me/34603380004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}