"use client";
import Link from "next/link";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState, useEffect } from "react";

const swiperOptions = {
  modules: [Autoplay, EffectFade],
  effect: "fade", // Ensure fade effect is enabled
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1300,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: false,
  },
};

export default function AnosHero() {
  const [localStorage, setLocalStorage] = useState({});

  useEffect(() => {
      setLocalStorage(window.localStorage);
      console.log(window.localStorage);
  }, []);

  const handleSlideChange = (swiper) => {
    setTimeout(() => {
      // Add animation to active slide's .txt-side elements
      const ElementsRight = document.querySelectorAll(
        ".swiper-slide-active .txt-side-right"
      );
      const elementsBottom = document.querySelectorAll(
        ".swiper-slide-active .txt-side-bottom"
      );

      ElementsRight.forEach((el) => {
        el.classList.add("hero-animate");
      });

      elementsBottom.forEach((el) => {
        el.classList.add("hero-animate-bottom");
      });
    }, 1000);
  };

  return (
    <>
      <div className="anos-hero-slider-wrapper fix hero-1 section-padding square-swiper-pagination">
        <div className="testimonial-bg">
          <div className="container custom-container">
            <div className="swiper testimonial-slider">
              <Swiper
                {...swiperOptions}
                className="swiper-wrapper wow fadeInUp"
                data-wow-delay=".5s"
                onSlideChange={handleSlideChange} // Attach slide change handler here
              >
                <SwiperSlide>
                  <div className="testimonial-content">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-6 mb-4">
                        <Image width={170} height={43}
                          className="title-image"
                          src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/title.jpg"
                          alt="avatar image"
                        />
                        <h3>منهاج متكامل لبناء شخصية طلابك يحقق لك..</h3>
                        <h2 className="head-blue mt-3 mb-4">
                          نقلة نوعية في سلوك الطلاب
                        </h2>

                        <Link
                          href={`https://forms.zohopublic.com/tafakkur/form/Untitled19/formperma/ZwPaVDv5Ld5kLqH7iN28BBABGeQ4CqON5AF5LrFYrY4?utm_source=${localStorage?.utm_source}`}
                          className="hover-btn d-inline-flex align-items-center"
                        >
                          طبق في مؤسستك
                        </Link>
                      </div>
                      <div className="col-12 col-lg-6 left-side">
                        <div className="row flex-nowrap align-items-center top-side">
                          <div className="col-3 txt-side txt-side-right">
                            <h5>
                              <Image
                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide1/تعديل-السلوك-في-منهاج-تفكر-مع-انوس.png"
                                width={200}
                                height={125}
                                alt="تعديل السلوك في منهاج تفكر مع انوس"
                                className="w-100 h-100 object-fit border-radius-8"
                              />
                            </h5>
                          </div>
                          <div className="col-9 img-side">
                            <Image
                              src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide1/طفل-تفكر-في-الصف.jpg"
                              width={350}
                              height={225}
                              alt="طفل تفكر في الصف"
                              className="w-100 object-fit border-radius-8"
                            />
                          </div>
                        </div>
                        <div className="row align-items-center bottom-side mt-4">
                          <div className="col-6 img-side">
                            <Image
                              src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide1/اطفال-تفكر-مدرسة-اناث.jpg"
                              width={350}
                              height={225}
                              alt="اطفال تفكر مدرسة اناث"
                              className="w-100 object-fit border-radius-8"
                            />
                          </div>
                          <div className="col-6 txt-side txt-side-bottom">
                            <h5>
                              <Image
                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide1/تحسين-اساءة-السلوك-منهاج-تفكر-مع-انوس.png"
                                width={200}
                                height={110}
                                alt="تحسين اساءة السلوك منهاج تفكر مع انوس"
                                className="w-100 h-100"
                              />
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-content">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-6 mb-4">
                        <Image width={170} height={43}
                          className="title-image"
                          src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/title.jpg"
                          alt="avatar image"
                        />
                        <h3>منهاج متكامل لبناء شخصية طلابك يحقق لك..</h3>
                        <h2 className="head-blue mt-3 mb-4">
                          تنمية مهارات التفكير الإبداعي والناقد والكشف عن الموهوبين
                        </h2>
                        <Link
                          href={`https://forms.zohopublic.com/tafakkur/form/Untitled19/formperma/ZwPaVDv5Ld5kLqH7iN28BBABGeQ4CqON5AF5LrFYrY4?utm_source=${localStorage?.utm_source}`}
                          className="hover-btn d-inline-flex align-items-center"
                        >
                          طبق في مؤسستك
                        </Link>
                      </div>
                      <div className="col-12 col-lg-6 left-side">
                        <div className="row flex-nowrap align-items-center top-side">
                          <div className="col-3 txt-side txt-side-right">
                            <h5>
                              <Image
                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide2/ارتفاع-نسب-مهارات-الابداع-في-منهاج-تفكر-مع-انوس.png"
                                width={350}
                                height={225}
                                alt="ارتفاع نسب مهارات الابداع في منهاج تفكر مع انوس"
                                className="w-100 h-100 object-fit border-radius-8"
                              />
                            </h5>
                          </div>
                          <div className="col-9 img-side">
                            <Image
                              src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide2/طفلة-في-نشاط-تفكر-مع-انوس.png"
                              width={352}
                              height={223}
                              alt="طفلة في نشاط تفكر مع انوس"
                              className="w-100 object-fit border-radius-8"
                            />
                          </div>
                        </div>
                        <div className="row align-items-center bottom-side mt-4">
                          <div className="col-6 img-side">
                            <Image
                              src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide2/طفل-السعودية-تفكر-مع-انوس.png"
                              width={350}
                              height={225}
                              alt="طفل السعودية تفكر مع انوس"
                              className="w-100 object-fit border-radius-8"
                            />
                          </div>
                          <div className="col-6 txt-side txt-side-bottom">
                            <h5>
                              <Image
                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide2/برنامج-رعاية-الموهوبين-المبدعين.png"
                                width={228}
                                height={145}
                                alt="برنامج رعاية الموهوبين المبدعين"
                                className="w-100 h-100"
                              />
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-content">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-6 mb-4">
                        <Image width={170} height={43}
                          className="title-image"
                          src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/title.jpg"
                          alt="avatar image"
                        />
                        <h3>منهاج متكامل لبناء شخصية طلابك يحقق لك..</h3>
                        <h2 className="head-blue mt-3 mb-4">
                          تنمية ذكاءات الطلاب المتعددة والكشف عن الذكاءات 
                        </h2>
                        <Link
                          href={`https://forms.zohopublic.com/tafakkur/form/Untitled19/formperma/ZwPaVDv5Ld5kLqH7iN28BBABGeQ4CqON5AF5LrFYrY4?utm_source=${localStorage?.utm_source}`}
                          className="hover-btn d-inline-flex align-items-center"
                        >
                          طبق في مؤسستك
                        </Link>
                      </div>
                      <div className="col-12 col-lg-6 left-side">
                        <div className="row flex-nowrap align-items-center top-side">
                          <div className="col-3 txt-side txt-side-right">
                            <h5>
                              <Image
                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide3/تنمية-الذكاء-في-منهاج-تفكر-مع-انوس.png"
                                width={352}
                                height={56}
                                alt="تنمية الذكاء في منهاج تفكر مع انوس"
                                className="w-100 h-100 object-fit border-radius-8"
                              />
                            </h5>
                          </div>
                          <div className="col-9 img-side">
                            <Image
                              src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide3/دليل-المعلم-منهاج-تفكر-مع-انوس.png"
                              width={352}
                              height={223}
                              alt="دليل المعلم منهاج تفكر مع انوس"
                              className="w-100 object-fit border-radius-8"
                            />
                          </div>
                        </div>
                        <div className="row align-items-center bottom-side mt-4">
                          <div className="col-6 img-side">
                            <Image
                              src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide3/تدريب-تفكر-مع-انوس-اونلاين.png"
                              width={350}
                              height={225}
                              alt="تدريب تفكر مع انوس اونلاين"
                              className="w-100 object-fit border-radius-8"
                            />
                          </div>
                          <div className="col-6 txt-side txt-side-bottom">
                            <h5>
                              <Image
                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide3/تدريب-المعلمين-على-كشف-الذكاءات.png"
                                width={228}
                                height={145}
                                alt="تدريب المعلمين على كشف الذكاءات"
                                className="w-100 h-100"
                              />
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-content">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-6 mb-4">
                        <Image width={170} height={43}
                          className="title-image"
                          src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/title.jpg"
                          alt="avatar image"
                        />
                        <h3>منهاج متكامل لبناء شخصية طلابك يحقق لك..</h3>
                        <h2 className="head-blue mt-3 mb-4">
                          بيئة مدرسية إيجابية يحبها الطلاب ويرغب بها الأهل
                        </h2>
                        <Link
                          href={`https://forms.zohopublic.com/tafakkur/form/Untitled19/formperma/ZwPaVDv5Ld5kLqH7iN28BBABGeQ4CqON5AF5LrFYrY4?utm_source=${localStorage?.utm_source}`}
                          className="hover-btn d-inline-flex align-items-center"
                        >
                          طبق في مؤسستك
                        </Link>
                      </div>
                      <div className="col-12 col-lg-6 left-side">
                        <div className="row flex-nowrap align-items-center top-side">
                          <div className="col-3 txt-side txt-side-right">
                            <h5>
                              <Image
                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide4/بيئة-صفية-خالية-من-التنمر.png"
                                width={352}
                                height={56}
                                alt="بيئة صفية خالية من التنمر"
                                className="w-100 h-100 object-fit border-radius-8"
                              />
                            </h5>
                          </div>
                          <div className="col-9 img-side">
                            <Image
                              src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide4/اطفال-في-الصف-منهاج-تفكر-مع-انوس.jpg"
                              width={352}
                              height={223}
                              alt="اطفال في الصف منهاج تفكر مع انوس"
                              className="w-100 object-fit border-radius-8"
                            />
                          </div>
                        </div>
                        <div className="row align-items-center bottom-side mt-4">
                          <div className="col-6 img-side">
                            <Image
                              src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide4/كتاب-معايير-التميز-منهاج-تفكر-مع-انوس.png"
                              width={350}
                              height={225}
                              alt="كتاب معايير التميز منهاج تفكر مع انوس"
                              className="w-100 object-fit border-radius-8"
                            />
                          </div>
                          <div className="col-6 txt-side txt-side-bottom">
                            <h5>
                              <Image
                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide4/معايير-اداء-معلم-الابداع.png"
                                width={228}
                                height={145}
                                alt="معايير اداء معلم الابداع"
                                className="w-100 h-100"
                              />
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-content">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-6 mb-4">
                        <Image width={170} height={43}
                          className="title-image"
                          src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/title.jpg"
                          alt="avatar image"
                        />
                        <h3>منهاج متكامل لبناء شخصية طلابك يحقق لك..</h3>
                        <h2 className="head-blue mt-3 mb-4">
تطور في أداء المعلم وفق أحدث استراتيجيات التعلم المتناغم مع الدماغ 
                        </h2>
                        <Link
                          href={`https://forms.zohopublic.com/tafakkur/form/Untitled19/formperma/ZwPaVDv5Ld5kLqH7iN28BBABGeQ4CqON5AF5LrFYrY4?utm_source=${localStorage?.utm_source}`}
                          className="hover-btn d-inline-flex align-items-center">
                          طبق في مؤسستك
                        </Link>
                      </div>
                      <div className="col-12 col-lg-6 left-side">
                        <div className="row flex-nowrap align-items-center top-side">
                          <div className="col-3 txt-side txt-side-right">
                            <h5>
                              <Image
                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide5/تعلم-طويل-المدى-تفكر-مع-انوس.png"
                                width={352}
                                height={56}
                                alt="تعلم طويل المدى تفكر مع انوس"
                                className="w-100 h-100 object-fit border-radius-8"
                              />
                            </h5>
                          </div>
                          <div className="col-9 img-side">
                            <Image
                              src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide5/اطفال-تفكر-مع-انوس-في-الصف.png"
                              width={352}
                              height={223}
                              alt="اطفال تفكر مع انوس في الصف"
                              className="w-100 object-fit border-radius-8"
                            />
                          </div>
                        </div>
                        <div className="row align-items-center bottom-side mt-4">
                          <div className="col-6 img-side">
                            <Image
                              src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide5/اطفال-تفكر-مع-انوس-في-الطبيعة.png"
                              width={350}
                              height={225}
                              alt="اطفال تفكر مع انوس في الطبيعة"
                              className="w-100 object-fit border-radius-8"
                            />
                          </div>
                          <div className="col-6 txt-side txt-side-bottom">
                            <h5>
                              <Image
                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide5/تعلم-ممتع-في-منهاج-تفكر-مع-انوس.png"
                                width={228}
                                height={145}
                                alt="تعلم ممتع في منهاج تفكر مع انوس"
                                className="w-100 h-100"
                              />
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-content">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-6 mb-4">
                        <Image width={170} height={43}
                          className="title-image"
                          src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/title.jpg"
                          alt="avatar image"
                        />
                        <h3>منهاج متكامل لبناء شخصية طلابك يحقق لك..</h3>
                        <h2 className="head-blue mt-3 mb-4">
                          تعزيز الرسالة لدى الكوادر التعليمية                     
                       </h2>
                        <Link
                          href={`https://forms.zohopublic.com/tafakkur/form/Untitled19/formperma/ZwPaVDv5Ld5kLqH7iN28BBABGeQ4CqON5AF5LrFYrY4?utm_source=${localStorage?.utm_source}`}
                          className="hover-btn d-inline-flex align-items-center"
                        >
                          طبق في مؤسستك
                        </Link>
                      </div>
                      <div className="col-12 col-lg-6 left-side">
                        <div className="row flex-nowrap align-items-center top-side">
                          <div className="col-3 txt-side txt-side-right">
                            <h5>
                              <Image
                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide6/برنامج-تطوير-وتعزيز-انتماء-المعلمين.png"
                                width={352}
                                height={56}
                                alt="برنامج تطوير وتعزيز انتماء المعلمين"
                                className="w-100 h-100 object-fit border-radius-8"
                              />
                            </h5>
                          </div>
                          <div className="col-9 img-side">
                            <Image
                              src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide6/فريق-الدعم-الفني-تفكر-مع-انوس.png"
                              width={352}
                              height={223}
                              alt="فريق الدعم الفني تفكر مع انوس"
                              className="w-100 object-fit border-radius-8"
                            />
                          </div>
                        </div>
                        <div className="row align-items-center bottom-side mt-4">
                          <div className="col-6 img-side">
                            <Image
                              src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide6/معلمة-تفكر-مع-انوس-في-الفصل.png"
                              width={350}
                              height={225}
                              alt="معلمة تفكر مع انوس في الفصل"
                              className="w-100 object-fit border-radius-8"
                            />
                          </div>
                          <div className="col-6 txt-side txt-side-bottom">
                            <h5>
                              <Image
                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide6/برنامج-تطوير-المعلين-تفكر-مع-انوس.png"
                                width={228}
                                height={145}
                                alt="برنامج تطوير المعلين تفكر مع انوس"
                                className="w-100 h-100"
                              />
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
