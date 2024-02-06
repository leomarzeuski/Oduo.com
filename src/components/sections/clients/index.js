import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Image from "next/image";
import { useRef } from "react";

export default function Clients() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section id="clientes" className="py-10 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-extrabold text-white mb-10">
          Nossos clientes
        </h2>

        <Swiper
          className="clients__swiper"
          style={{ padding: '10px' }}
          modules={[Autoplay, Navigation]}
          speed={800}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{ prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            720: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1366: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {Array.from({ length: 12 }).map((_, idx) => (
            <SwiperSlide
              key={idx}
              className="flex items-center justify-center bg-white rounded-lg shadow-lg"
              style={{ width: '180px', height: '100px', }}
            >
              <Image
                src={`/assets/img/cliente_logo_${idx + 1}.png`}
                layout="fill"
                objectFit="contain"
                alt={`cliente logo ${idx + 1}`}
              />
            </SwiperSlide>

          ))}

          <div ref={navigationPrevRef} className="swiper-button-prev"></div>
          <div ref={navigationNextRef} className="swiper-button-next"></div>
        </Swiper>
      </div>
    </section>
  );
}
