import React from 'react';
import { Phone, ClipboardList, Truck, Recycle, CheckCircle } from 'lucide-react';
import { ProcessStep } from './ProcessStep';

export function Process() {
  const steps = [
    {
      icon: Phone,
      title: 'Contacto Inicial',
      description: 'Ponte en contacto con nosotros por teléfono o WhatsApp. Te atenderemos de inmediato para conocer tus necesidades específicas.'
    },
    {
      icon: ClipboardList,
      title: 'Evaluación Gratuita',
      description: 'Realizamos una visita al inmueble para evaluar el trabajo y proporcionarte un presupuesto detallado sin compromiso.'
    },
    {
      icon: Truck,
      title: 'Planificación y Ejecución',
      description: 'Acordamos fecha y hora para el servicio. Nuestro equipo profesional realiza el vaciado de forma rápida y eficiente.'
    },
    {
      icon: Recycle,
      title: 'Clasificación y Gestión',
      description: 'Clasificamos todos los elementos retirados para su correcta gestión, priorizando el reciclaje y la reutilización.'
    },
    {
      icon: CheckCircle,
      title: 'Limpieza y Verificación',
      description: 'Realizamos una limpieza básica del espacio y verificamos junto al cliente que todo esté según lo acordado.'
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un servicio profesional y transparente en cada paso del proceso
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={index + 1}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            ¿Necesitas un servicio de vaciado profesional?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1A1A1A] text-[#1A1A1A] rounded-lg hover:bg-[#1A1A1A] hover:text-white transition-colors text-lg font-semibold"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}