import { useState, useEffect } from "react";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Preloader from "@/components/elements/Preloader";
import { wrapNumbersInSpan } from "@/helpers";

const swiperOptions = {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: true,
    },
};

export default function HomeHeroSlider({ data }) {
    const [backgroundImage, setBackgroundImage] = useState("");
    const [imagesArray, setImagesArray] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loader, setLoader] = useState(true);

    // Preload images
    const preloadImages = (images) => {
        const promises = images.map((src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
            });
        });
        return Promise.all(promises);
    };

    useEffect(() => {
        setLoader(true);
        
        if (data && data.testimonials?.length > 0) {
            const images = data.testimonials.map((item) => item.author_image);
            setImagesArray(images);

            // Preload images before updating state
            preloadImages(images)
                .then(() => {
                    wrapNumbersInSpan()
                    setImagesLoaded(true);
                    setBackgroundImage(images[0]); // Set initial background
                    setLoader(false);
                })
                .catch((error) => {
                    console.error("Failed to preload images", error);
                });
        }
    }, [data]);

    const handleSlideChange = (swiper) => {
        const currentSlide = swiper.realIndex;
        setCurrentIndex(currentSlide);
        setBackgroundImage(imagesArray[currentSlide]);
    };

    return (
        <>
            {loader && <Preloader />}
            {data && imagesLoaded && (
                <>
                    {/* Render background images */}
                    {imagesArray.map((img, i) => (
                        <div
                            key={i}
                            className={`hompage-image ${i === currentIndex ? "show" : "hide"}`}
                            style={{
                                backgroundImage: `url(${img})`,
                                display: i === currentIndex ? "block" : "none",
                            }}
                        ></div>
                    ))}

                    <div className="home-hero-slider-wrapper fix hero-1 section-padding pb-0">
                        <div className="testimonial-bg">
                            <div className="container custom-container">
                                <div className="swiper testimonial-slider">
                                    <Swiper
                                        {...swiperOptions}
                                        className="swiper-wrapper wow fadeInUp pb-140 mb-3"
                                        data-wow-delay=".5s"
                                        onSlideChange={handleSlideChange}
                                    >
                                        {data.testimonials.map((testimonial) => (
                                            <SwiperSlide key={testimonial.id}>
                                                <div className="testimonial-content">
                                                    <h2 className="white-txt mb-4">{testimonial.video}</h2>
                                                    <div
                                                        className="testimonial-message white-txt"
                                                        dangerouslySetInnerHTML={{ __html: testimonial.body }}
                                                    />
                                                    <Link
                                                        href={`${testimonial.author_position}`}
                                                        className="white-txt d-flex align-items-center mt-5"
                                                    >
                                                        <span>{testimonial.author_name}</span>
                                                        <i className="fa-solid fa-arrow-left-long ms-2"></i>
                                                    </Link>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
