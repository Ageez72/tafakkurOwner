"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Pagination, Autoplay],
    // slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    // centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: true,
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
    },
};

export default function VersionTestimonialSlider({ data, noPadding }) {
    // Render Swiper component only when data is available
    return (
        <>
            {data && (
                <div className="version-testimonial-slider">
                    <div className="testimonial-bg">
                        <div className="container custom-container">
                            <div className={`swiper testimonial-slider ${noPadding ? '' : 'pb-80'}`}>
                                <Swiper {...swiperOptions} className="swiper-wrapper wow fadeInUp" data-wow-delay=".5s">
                                    {data.map((testimonial) => (
                                        <SwiperSlide key={testimonial?.id}>
                                            <div className="testimonial-content text-center">
                                                <div className="content-wrapper">
                                                    <div className="quote-icon mb-2"><i className="fa-solid fa-quote-left"></i></div>
                                                    <div className="testimonial-message" dangerouslySetInnerHTML={{ __html: testimonial?.body }} />
                                                    <div className="stars">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                    </div>
                                                </div>
                                                <p className="testimonial-person-name">{testimonial?.author_name}</p>
                                                <p className="testimonial-person-position">{testimonial?.author_position}</p>
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
