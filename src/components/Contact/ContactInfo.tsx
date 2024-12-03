import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
          Información de contacto
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="h-6 w-6 text-[#FF6B00] flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium">Dirección</p>
              <p className="text-gray-600">Grup Parada, 23<br />08242 Manresa<br />Barcelona</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="h-6 w-6 text-[#FF6B00] flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium">Teléfono</p>
              <a 
                href="tel:+34603380004" 
                className="text-gray-600 hover:text-[#FF6B00] transition-colors"
              >
                603 38 00 04
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="h-6 w-6 text-[#FF6B00] flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium">Email</p>
              <a 
                href="mailto:info@manresix.vercel.app" 
                className="text-gray-600 hover:text-[#FF6B00] transition-colors"
              >
                info@manresix.vercel.app
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-6 w-6 text-[#FF6B00] flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium">Horario</p>
              <p className="text-gray-600">Lunes a Domingo<br />24 horas</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
          Servicio urgente
        </h3>
        <p className="text-gray-600 mb-4">
          ¿Necesitas un vaciado urgente? Contacta con nosotros ahora mismo:
        </p>
        <div className="flex flex-col gap-3">
          <a
            href="tel:+34603380004"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#FF6B00] text-white rounded-lg hover:bg-[#FF6B00]/90 transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            Llamar ahora
          </a>
          <a
            href="https://wa.me/34603380004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#1A1A1A] text-[#1A1A1A] rounded-lg hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}