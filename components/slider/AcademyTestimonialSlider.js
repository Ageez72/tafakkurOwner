"use client";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppContext } from "@/context/AppContext";
import Image from 'next/image'
// import "swiper/swiper-bundle.min.css";

const swiperOptions = {
  modules: [Navigation, Autoplay],
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1300,
  loop: true,
  centeredSlides: false,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  threshold: 5,
};

export default function AcademyTestimonialSlider({ data }) {  
  // Render Swiper component only when data is available
  return (
    <>
      {data && (
        <div className="academy-testimonial-wrapper testimonial-wrapper">
          <div className="testimonial-bg">
            <Image width={85} height={68} className="shape" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/tafakkurAcademy/shape.png" alt="shape" />
            <div className="container custom-container">
              <div className="swiper testimonial-slider">
                <Swiper {...swiperOptions} className="swiper-wrapper wow fadeInUp" data-wow-delay=".5s">
                  {data?.testimonials?.map((testimonial, index) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="testimonial-content">
                        <div className="testimonial-message" dangerouslySetInnerHTML={{ __html: testimonial?.body }} />
                        <p className="testimonial-person-name">{testimonial?.author_name}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
