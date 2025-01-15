"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
const swiperOptions = {
  modules: [Navigation, Autoplay],
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1300,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
};

export default function PublishersTestimonialSlider({data}) {
    // Render Swiper component only when data is available
  return (
    <>
      {data && (
      <div className="publishers-testimonial-wrapper testimonial-wrapper">
        <div className="testimonial-bg">
        <Image width={85} height={68} className="shape" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/versions/shape.png" alt="sahpe"/>
          <div className="overlay"></div>
          <div className="container custom-container">
            <div className="swiper testimonial-slider">
              <Swiper {...swiperOptions} className="swiper-wrapper wow fadeInUp" data-wow-delay=".5s">
                {data?.map((testimonial, index) => (
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
