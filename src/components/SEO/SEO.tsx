import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SEO() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MANRESIX",
    "legalName": "MANRESIX Servicios de Vaciado",
    "description": "Empresa profesional de vaciado de pisos en Manresa y comarca del Bages. Servicio integral 24/7 de vaciado, limpieza y gestión de residuos.",
    "image": "https://images.unsplash.com/photo-1578269174936-2709b6aeb913",
    "logo": "https://manresix.vercel.app/logo.png",
    "url": "https://manresix.vercel.app",
    "telephone": "+34603380004",
    "email": "info@manresix.vercel.app",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Grup Parada, 23",
      "addressLocality": "Manresa",
      "postalCode": "08242",
      "addressRegion": "Barcelona",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.7289,
      "longitude": 1.8267
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.7289,
        "longitude": 1.8267
      },
      "geoRadius": "50000"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://facebook.com/manresix",
      "https://instagram.com/manresix"
    ],
    "priceRange": "€€",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Vaciado",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vaciado de Pisos",
            "description": "Servicio profesional de vaciado de pisos y viviendas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vaciado de Locales",
            "description": "Vaciado de locales comerciales y naves industriales"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gestión de Residuos",
            "description": "Servicio de gestión y reciclaje de residuos"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  const keywords = [
    "vaciado de pisos Manresa",
    "vaciado de locales Bages",
    "empresa vaciado Manresa",
    "limpieza pisos Manresa",
    "gestión residuos Barcelona",
    "vaciado urgente Manresa",
    "servicio vaciado 24 horas",
    "vaciado industrial Bages",
    "recogida muebles Manresa",
    "desalojo pisos Barcelona",
    "empresa vaciado pisos Catalunya",
    "vaciado herencias Manresa",
    "limpieza locales comerciales Bages",
    "retirada muebles Manresa",
    "empresa desalojo Manresa"
  ].join(", ");

  return (
    <Helmet>
      <html lang="es" />
      <title>MANRESIX | Vaciado de Pisos en Manresa y Comarca del Bages 24/7 | Servicio Profesional</title>
      <meta name="description" content="Empresa líder en vaciado de pisos en Manresa y comarca del Bages. Servicio profesional 24/7, presupuesto en 24h. Especialistas en vaciado de pisos, locales y naves industriales. Gestión integral de residuos. ¡Llámanos al 603 38 00 04!" />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MANRESIX" />
      <meta property="og:title" content="MANRESIX | Vaciado de Pisos en Manresa | Servicio 24/7" />
      <meta property="og:description" content="Servicio profesional de vaciado de pisos 24/7 en Manresa y comarca del Bages. Presupuesto sin compromiso en 24h. ¡Contacta ahora!" />
      <meta property="og:image" content="https://images.unsplash.com/photo-1578269174936-2709b6aeb913" />
      <meta property="og:url" content="https://manresix.vercel.app" />
      <meta property="og:locale" content="es_ES" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MANRESIX | Vaciado de Pisos en Manresa" />
      <meta name="twitter:description" content="Servicio profesional de vaciado de pisos 24/7 en Manresa y comarca del Bages. ¡Presupuesto sin compromiso en 24h!" />
      <meta name="twitter:image" content="https://images.unsplash.com/photo-1578269174936-2709b6aeb913" />
      
      {/* Geo tags */}
      <meta name="geo.region" content="ES-CT" />
      <meta name="geo.placename" content="Manresa" />
      <meta name="geo.position" content="41.7289;1.8267" />
      <meta name="ICBM" content="41.7289, 1.8267" />
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="MANRESIX" />
      <meta name="language" content="es" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="local" />
      <meta name="coverage" content="Barcelona" />
      <meta name="theme-color" content="#FF6B00" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://manresix.vercel.app" />
    </Helmet>
  );
}