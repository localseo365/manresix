import React from 'react';
import { Home, Building2, Truck, Recycle, ClipboardCheck, Clock } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export function Services() {
  const services = [
    {
      icon: Home,
      title: 'Vaciado de Pisos y Viviendas',
      description: 'Servicio completo de vaciado de pisos, casas y apartamentos. Incluye desmontaje de muebles, retirada de enseres y limpieza básica del espacio. Gestión profesional de todos los elementos.'
    },
    {
      icon: Building2,
      title: 'Vaciado de Locales Comerciales',
      description: 'Especialistas en vaciado de locales comerciales, oficinas y naves industriales. Adaptamos nuestros servicios a las necesidades específicas de cada espacio comercial.'
    },
    {
      icon: Truck,
      title: 'Transporte y Logística',
      description: 'Disponemos de flota propia de vehículos adaptados para el transporte seguro de todo tipo de materiales y enseres. Servicio rápido y eficiente en toda la comarca del Bages.'
    },
    {
      icon: Recycle,
      title: 'Gestión Responsable de Residuos',
      description: 'Clasificación y gestión profesional de residuos siguiendo la normativa vigente. Compromiso con el medio ambiente mediante reciclaje y reutilización de materiales.'
    },
    {
      icon: ClipboardCheck,
      title: 'Presupuesto Gratuito',
      description: 'Evaluación detallada y presupuesto sin compromiso en menos de 24 horas. Transparencia total en precios y servicios incluidos. Sin sorpresas ni costes ocultos.'
    },
    {
      icon: Clock,
      title: 'Servicio 24/7 y Urgencias',
      description: 'Disponibilidad total para servicios urgentes de vaciado. Atención inmediata 24 horas, 7 días a la semana. Respuesta rápida para situaciones que requieren actuación inmediata.'
    }
  ];

  return (
    <section id="servicios" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Servicios Profesionales de Vaciado
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales para el vaciado de espacios en Manresa y comarca del Bages. Servicio profesional, rápido y eficiente adaptado a sus necesidades específicas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}