"use client";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const swiperOptions = {
  modules: [Autoplay,Navigation],
  // slidesPerView: 4,
  spaceBetween: 20,
  speed: 1300,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
};

export default function AboutImageSlider({ images }) {
  const { state } = useAppContext();
  const [data, setData] = useState(null);

  return (
    <>
      {/* {data && data.data && ( */}
      <div className="swiper images-slider">
        <Swiper {...swiperOptions} className="swiper-wrapper wow fadeInUp" data-wow-delay=".5s">
          {images.map((brand, index) => (
            <SwiperSlide key={index}>
              <Image src={brand} alt="book icon" className="w-100 h-100" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next wow fadeInUp" data-wow-delay=".5s"></div>
        <div className="swiper-button-prev wow fadeInUp" data-wow-delay=".5s"></div>
      </div>
      {/* )}*/}
    </>
  );
}
