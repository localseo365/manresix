import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  'https://i.ytimg.com/vi/ztyG78-brI4/hq720_2.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAAlAADIQj0AgKJD8AEB-AG2CIACgA-KAgwIABABGGUgWChIMA8=&rs=AOn4CLD0cbYXzL3c-q6Y36jaROLsYDPMEA',
  'https://s2.dmcdn.net/v/VNt8D1bI98rR5QJXK/x480',
  'https://vaciado-pisos-manresa.pages.dev/images/pic01.jpg',
  'https://i.ytimg.com/vi/Il08tEe2CMI/hq720_2.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAAlAADIQj0AgKJD8AEB-AG2CIACgA-KAgwIABABGGUgZShlMA8=&rs=AOn4CLAybAZq9pq59K9QQGguQ9xHWuP5HQ',
  'https://cdn.wallapop.com/images/10420/hm/k9/__/c10420p1065821356/i5217773914.jpg?pictureSize=W640',
  'https://vaciamos.es-mad-1.linodeobjects.com/granollers/img/vaciado-pisos-gratis-8.jpg',
  'https://quiles.sos-ch-dk-2.exo.io/barcelona/img/Vaciado%20de%20pisos%20en%20Vacarisses-668.jpg'
];

export function ImageCarousel() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
            Nuestros Trabajos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Algunos ejemplos de nuestros servicios de vaciado de pisos en Manresa y comarca
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={image}
                    alt={`Trabajo de vaciado ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}