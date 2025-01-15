"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const swiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1300,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
};

export default function ImageSlider({ images }) {
  const { state } = useAppContext();
  return (
    <>
      <div className="swiper images-slider">
        <Swiper {...swiperOptions} className="swiper-wrapper wow fadeInUp" data-wow-delay=".5s">
          {images?.map((brand, index) => (
            <SwiperSlide key={index}>
              <Image src={brand} alt="book icon" className="w-100 h-100" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
