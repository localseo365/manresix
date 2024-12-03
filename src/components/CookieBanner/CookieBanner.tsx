import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] text-white p-4 shadow-lg z-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm">
              Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación. Si continúa navegando, consideramos que acepta su uso. Puede obtener más información en nuestra{' '}
              <a href="/politica-cookies" className="text-[#FF6B00] hover:underline">
                política de cookies
              </a>
              .
            </p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button
              onClick={acceptCookies}
              className="flex-1 md:flex-none px-6 py-2 bg-[#FF6B00] text-white rounded-lg hover:bg-[#FF6B00]/90 transition-colors whitespace-nowrap"
            >
              Aceptar cookies
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Cerrar aviso de cookies"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}