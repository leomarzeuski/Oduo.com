import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight, UserCircle } from "phosphor-react";
import { Autoplay, Navigation } from "swiper";

import listTestimonials from "@/constants/testimonials";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-12 bg-secondary">
      <div className="container">
        <div className="mb-6 md:mb-12 flex flex-col md:flex-row items-start justify-between">
          <h2 className="text-3xl lg:text-4xl text-center font-extrabold text-white">
            O que nossos clientes dizem
          </h2>
          <div className="navigation mt-4 mx-auto md:m-0 flex items-center justify-center gap-3">
            <button className="testimonials-prevEl w-12 h-12 flex items-center justify-center border-2 border-white rounded-[50%] hover:border-primary text-white hover:text-primary">
              <ArrowLeft size={22} className="text-inherit" />
            </button>
            <button className="testimonials-nextEl w-12 h-12 flex items-center justify-center border-2 border-white rounded-[50%] hover:border-primary text-white hover:text-primary">
              <ArrowRight size={22} className="text-inherit" />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={24}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
          }}
          navigation={{
            prevEl: ".testimonials-prevEl",
            nextEl: ".testimonials-nextEl",
          }}
        >
          {listTestimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="w-full h-[300px] md:h-[250px] px-4 py-6 bg-white rounded-md shadow-sm"
            >
              <div
                className="w-10 h-10 rounded-[50%]"
                style={{
                  background: `url('${testimonial.img}') center center`,
                }}
              >
                {testimonial.img === "" && (
                  <UserCircle className="w-10 h-10 text-primary" />
                )}
              </div>
              <div className="flex gap-1 mt-4 mb-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Image
                    key={idx}
                    src="/assets/img/star.svg"
                    width="18"
                    height="18"
                    alt="star"
                  />
                ))}
              </div>
              <h3 className="mb-3 font-extrabold text-xl text-black">
                {testimonial.author}
              </h3>
              <p className="text-justify text-gray">{`"${testimonial.text}"`}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
