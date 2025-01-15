"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function AnosExperienceSlider({ cols }) {

    const swiperOptions = {
        modules: [Pagination, Autoplay],
        slidesPerGroup: 1,
        slidesPerView: 1,
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
    };
    // Render Swiper component only when data is available
    return (
        <>
            {/* {data && data.data && ( */}
            <div className="anos-experience-slider">
                <div className="overlay"></div>
                <div className="container custom-container">
                    <div className="swiper testimonial-slider">
                        <Swiper {...swiperOptions} className="swiper-wrapper wow fadeInUp pb-5" data-wow-delay=".5s">
                            {/* {data.data.map((brand, index) => ( */}
                            <SwiperSlide>
                                <div className="testimonial-content text-center">
                                    <Image width={500} height={300} className="exp-img mb-2" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/قسم-التطوير-قيم-1.jpg" alt="exp 1" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-content text-center">
                                    <Image width={500} height={300} className="exp-img mb-2" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/قسم-التطوير-قيم-2.jpg" alt="exp 1" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-content text-center">
                                    <Image width={500} height={300} className="exp-img mb-2" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/قسم-التطوير-قيم-3.jpg" alt="exp 1" />
                                </div>
                            </SwiperSlide>
                                <SwiperSlide>
                                <div className="testimonial-content text-center">
                                    <Image width={500} height={300} className="exp-img mb-2" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/قسم-التطوير-قيم-4.jpg" alt="exp 1" />
                                </div>
                            </SwiperSlide>
                                <SwiperSlide>
                                <div className="testimonial-content text-center">
                                    <Image width={500} height={300} className="exp-img mb-2" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/قسم-التطوير-قيم-5.jpg" alt="exp 1" />
                                </div>
                            </SwiperSlide>
                                <SwiperSlide>
                                <div className="testimonial-content text-center">
                                    <Image width={500} height={300} className="exp-img mb-2" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/قسم-التطوير-قيم-6.jpg" alt="exp 1" />
                                </div>
                            </SwiperSlide>
                                <SwiperSlide>
                                <div className="testimonial-content text-center">
                                    <Image width={500} height={300} className="exp-img mb-2" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/قسم-التطوير-قيم-7.jpg" alt="exp 1" />
                                </div>
                            </SwiperSlide>
                                <SwiperSlide>
                                <div className="testimonial-content text-center">
                                    <Image width={500} height={300} className="exp-img mb-2" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/قسم-التطوير-قيم-8.jpg" alt="exp 1" />
                                </div>
                            </SwiperSlide>
                                <SwiperSlide>
                                <div className="testimonial-content text-center">
                                    <Image width={500} height={300} className="exp-img mb-2" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/قسم-التطوير-قيم-9.jpg" alt="exp 1" />
                                </div>
                            </SwiperSlide>
        
                            {/* ))} */}
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* )}*/}
        </>
    );
}
