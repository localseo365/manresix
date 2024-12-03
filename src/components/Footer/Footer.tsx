import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Truck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de contacto */}
          <div>
            <div className="flex items-center mb-6">
              <Truck className="h-8 w-8 text-[#FF6B00]" />
              <span className="ml-2 text-2xl font-bold">MANRESIX</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#FF6B00] mt-1 mr-2" />
                <p>Grup Parada, 23<br />08242 Manresa<br />Barcelona</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#FF6B00] mr-2" />
                <a href="tel:+34603380004" className="hover:text-[#FF6B00] transition-colors">
                  603 38 00 04
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#FF6B00] mr-2" />
                <a href="mailto:info@manresix.vercel.app" className="hover:text-[#FF6B00] transition-colors break-all">
                  info@manresix.vercel.app
                </a>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#inicio" className="hover:text-[#FF6B00] transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-[#FF6B00] transition-colors">Servicios</a></li>
              <li><a href="#sobre-nosotros" className="hover:text-[#FF6B00] transition-colors">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-[#FF6B00] transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Textos legales */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="/aviso-legal" className="hover:text-[#FF6B00] transition-colors">Aviso Legal</a></li>
              <li><a href="/politica-privacidad" className="hover:text-[#FF6B00] transition-colors">Política de Privacidad</a></li>
              <li><a href="/politica-cookies" className="hover:text-[#FF6B00] transition-colors">Política de Cookies</a></li>
              <li><a href="/condiciones-servicio" className="hover:text-[#FF6B00] transition-colors">Condiciones del Servicio</a></li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-[#FF6B00] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" className="hover:text-[#FF6B00] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MANRESIX. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}