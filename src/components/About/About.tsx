import React from 'react';
import { Shield, Award, Clock4, ThumbsUp, Phone } from 'lucide-react';

export function About() {
  const guarantees = [
    {
      icon: Shield,
      title: 'Garantía Profesional Total',
      description: 'Servicio respaldado por seguros de responsabilidad civil y garantías profesionales. Trabajamos con todas las licencias y permisos necesarios para la gestión de residuos y transporte.'
    },
    {
      icon: Award,
      title: '15 Años de Experiencia en el Sector',
      description: 'Más de una década siendo referentes en el sector del vaciado de pisos en Manresa y la comarca del Bages. Experiencia demostrada en todo tipo de servicios de vaciado y gestión de residuos.'
    },
    {
      icon: Clock4,
      title: 'Eficiencia y Puntualidad Garantizada',
      description: 'Compromiso firme con los plazos acordados. Optimizamos recursos y tiempo para ofrecer el servicio más eficiente del mercado, respetando siempre los compromisos adquiridos.'
    },
    {
      icon: ThumbsUp,
      title: 'Máxima Satisfacción del Cliente',
      description: 'Más de 1.000 clientes satisfechos avalan nuestra profesionalidad. Referencias disponibles de trabajos realizados en toda la comarca. Valoraciones positivas y recomendaciones de clientes anteriores.'
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
            ¿Por qué elegir MANRESIX para el vaciado de su piso?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Somos la empresa líder en servicios de vaciado en Manresa, con un compromiso inquebrantable con la calidad y la satisfacción del cliente. Nuestra experiencia y profesionalidad nos avalan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((item, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-[#FF6B00]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="h-8 w-8 text-[#FF6B00]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#1A1A1A] rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Su tranquilidad es nuestra prioridad en MANRESIX
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Nos encargamos de todo el proceso de vaciado, desde la evaluación inicial hasta la limpieza final. Gestionamos toda la documentación necesaria, permisos y certificados de gestión de residuos. Servicio integral sin preocupaciones para nuestros clientes en Manresa y toda la comarca del Bages.
            </p>
            <a
              href="tel:+34603380004"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6B00] text-white rounded-lg hover:bg-[#FF6B00]/90 transition-colors text-lg font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              603 38 00 04
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}