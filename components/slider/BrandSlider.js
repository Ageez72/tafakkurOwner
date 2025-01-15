"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  // slidesPerView: 5,
  spaceBetween: 0,
  speed: 1300,
  loop: true,
  // centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1199: {
      slidesPerView: 6,
    },
    991: {
      slidesPerView: 5,
    },
    767: {
      slidesPerView: 4,
    },
    575: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

export default function BrandSlider({ data }) {  
  // Render Swiper component only when data is available  
  return (
    <>
      {data && (
      <div className="swiper brand-slider">
        <Swiper {...swiperOptions} className="swiper-wrapper align-items-center">
            {data?.map((brand) => (
              <SwiperSlide key={brand?.id}>
              <div className="brand-image text-center">
                  <Image src={brand?.logo} alt={brand?.name} />
              </div>
              <p className="text-center">{brand?.country?.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
       )} 
    </>
  );
}
