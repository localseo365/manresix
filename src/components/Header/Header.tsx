import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Truck } from 'lucide-react';
import { NavLink } from './NavLink';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Truck className="h-8 w-8 text-[#FF6B00]" />
            <span className="ml-2 text-2xl font-bold text-white">MANRESIX</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#inicio">Inicio</NavLink>
            <NavLink href="#servicios">Servicios</NavLink>
            <NavLink href="#proceso">Proceso</NavLink>
            <NavLink href="#contacto">Contacto</NavLink>
          </nav>

          <div className="hidden md:flex items-center">
            <a href="tel:+34603380004" className="flex items-center px-4 py-2 bg-[#FF6B00] text-white rounded-lg hover:bg-[#FF6B00]/90 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              603 38 00 04
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95">
          <div className="px-4 py-4 space-y-4">
            <NavLink href="#inicio" mobile>Inicio</NavLink>
            <NavLink href="#servicios" mobile>Servicios</NavLink>
            <NavLink href="#proceso" mobile>Proceso</NavLink>
            <NavLink href="#contacto" mobile>Contacto</NavLink>
            <a href="tel:+34603380004" className="flex items-center px-4 py-2 bg-[#FF6B00] text-white rounded-lg hover:bg-[#FF6B00]/90 transition-colors w-full justify-center">
              <Phone className="h-4 w-4 mr-2" />
              603 38 00 04
            </a>
          </div>
        </div>
      )}
    </header>
  );
}