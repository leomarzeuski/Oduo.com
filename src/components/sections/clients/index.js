import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import Image from "next/image";

export default function Clients() {
  return (
    <section id="clientes" className="py-10 bg-secondary">
      <div className="container">
        <h2 className="text-3xl text-center font-extrabold text-white">
          Nossos clientes
        </h2>
        <Swiper
          className="clients__swiper mt-10 px-2"
          modules={[Autoplay, Navigation]}
          speed={600}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            720: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
            1366: {
              slidesPerView: 4,
              spaceBetween: 48,
            },
          }}
        >
          {Array.from({ length: 12 }).map((_, idx) => (
            <SwiperSlide
              key={idx}
              className="w-full h-[140px] lg:h-[180px] flex items-center justify-center bg-white rounded-md"
            >
              <Image
                className="h-[80px] object-contain"
                src={`/assets/img/cliente_logo_${idx + 1}.png`}
                width={180}
                height={100}
                alt={`cliente logo ${idx + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
