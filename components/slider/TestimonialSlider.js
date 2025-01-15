import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1300,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    clickable: true,
  },
};

export default function TestimonialSlider({data}) {

 return (
    <>
      {data && (
      <div className="testimonial-wrapper section-padding">
        <div className="testimonial-bg">
          <div className="overlay"></div>
          <div className="container custom-container">
            <div className="swiper testimonial-slider pb-80">
              <Swiper {...swiperOptions} className="swiper-wrapper wow fadeInUp" data-wow-delay=".5s">
                 {data.map((testimonial,) => (
                   <SwiperSlide key={testimonial.id}>
                    <div className="testimonial-content">
                       <div className="testimonial-message" dangerouslySetInnerHTML={{ __html: testimonial.body}}/>
                       <p className="testimonial-person-name">{testimonial.author_name}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button-next wow fadeInUp" data-wow-delay=".5s"></div>
              <div className="swiper-button-prev wow fadeInUp" data-wow-delay=".5s"></div>
            </div>
          </div>
        </div>
        <div className="container custom-container">
          <div className="total-students-wrapper pt-5">
            <div className="row align-items-center">
              <div className="col-md-6 d-flex justify-content-center align-items-center flex-wrap ps-md-5 mb-3 mb-md-0 wow fadeInUp" data-wow-delay=".5s">
                <h3>500+</h3>
                <h4 className="ms-3">متدرب سنوياً</h4>
              </div>
              <div className="col-md-6 text-center wow fadeInUp" data-wow-delay=".5s">
                <p>بحوث علمية عبر <span className="en-txt">27</span> عاماً وخبرات عملية
                  واقعية تحقق لك أفضل نتائج التدريب!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
}
