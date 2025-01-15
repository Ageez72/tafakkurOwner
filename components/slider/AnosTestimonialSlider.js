"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function AnosTestimonialSlider({ cols, data }) {
    const swiperOptions = {
        modules: [Pagination, Autoplay],
        // slidesPerGroup: 3,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        // centeredSlides: true,
        autoplay: {
            delay: 4000,
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
                slidesPerView: cols,
            },
        },
    };
    // Render Swiper component only when data is available
    return (
        <>
            {data && (
                <div className="version-testimonial-slider">
                    <div className="testimonial-bg">
                        <div className="container custom-container">
                            <div className="swiper testimonial-slider">
                                <Swiper {...swiperOptions} className="swiper-wrapper wow fadeInUp pt-0" data-wow-delay=".5s">
                                    {data.map((testimonial) => (
                                        <SwiperSlide key={testimonial.id}>
                                            <div className="testimonial-content text-center">
                                                <div className="content-wrapper">
                                                    <div className={`testimonial-message ${cols === 3 ? "" : "pt-0"}`}>
                                                        <span className="quote-icon left-icon"><i className="fa-solid fa-quote-left"></i></span>
                                                        <p dangerouslySetInnerHTML={{ __html: testimonial.body}} />
                                                        <span className="quote-icon right-icon"><i className="fa-solid fa-quote-right"></i></span>
                                                    </div>
                                                    <div className="stars mb-3">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                    </div>
                                                </div>
                                                <p className="testimonial-person-name">{testimonial.author_name} </p>
                                                <p className="testimonial-person-position">{testimonial.author_position}</p>
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
