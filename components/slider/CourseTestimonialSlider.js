"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const swiperOptions = {
    modules: [Autoplay, Pagination],
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

export default function CourseTestimonialSlider({ data }) {
    return (
        <>
            {data && data.length > 0 && (
                <div className="version-testimonial-slider">
                    <div className="testimonial-bg">
                        <div className="container custom-container">
                            <div className="swiper testimonial-slider">
                                <Swiper {...swiperOptions} className="swiper-wrapper wow fadeInUp" data-wow-delay=".5s">
                                    {data.map((side) => (
                                        <SwiperSlide key={side.id}>
                                            <div className="testimonial-content text-center">
                                                <div className="content-wrapper">
                                                    <p className="testimonial-message">
                                                        <span className="quote-icon left-icon"><i className="fa-solid fa-quote-left"></i></span>
                                                        <span className="d-block" dangerouslySetInnerHTML={{ __html: side.body }}/>
                                                        <span className="quote-icon right-icon"><i className="fa-solid fa-quote-right"></i></span>
                                                    </p>
                                                    <div className="stars mb-3">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                    </div>
                                                </div>
                                                <Image className="person-img mb-3" src={side.author_image} alt={side.author_name} />
                                                <p className="testimonial-person-name">{side.author_name}</p>
                                                <p className="testimonial-person-position">{side.author_position}</p>
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
