"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import AnosExperienceSlider from "../slider/AnosExperienceSlider";

export default function AnosContactExperience() {
    const [localStorage, setLocalStorage] = useState({});

    useEffect(() => {
        setLocalStorage(window.localStorage);
        console.log(window.localStorage);
    }, []);
    
    return (
        <section className="anos-contact-experience">
            <div className="anos-contact py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-7 col-12 my-4">
                            <h2 className="white-txt ps-5">
                                تواصل معنا الآن لتدريب كوادرك التعليمية على أحدث الاستراتيجيات
                                التعليمية والتربوية
                            </h2>
                        </div>
                        <div className="col-md-5 col-12 text-center">
                            <Link className="hover-outlined-btn white-btn" href="https://wa.link/ifr9ma">تواصل معنا</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="anos-experience section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <h2 className="head-blue mb-3">
                                بخبرة علمية عميقة تزيد عن <span className="en-txt">10</span> سنوات
                            </h2>
                            <h3 className="mb-4">
                                يتابع قسم التطوير والدعم الفني في تفكر تطبيق
                                المنهاج في جميع الدول المطبقة حول العالم
                            </h3>
                            <p className="mb-3">
                                يقدم القسم التأهيل والدعم المستمر للمؤسسات المطبقة من خلال الزيارات الميدانية واللقاءات التفاعلية عن بعد والبريد الإلكتروني ومجموعات المحادثة، ليطور أداء المشرفين والمعلمين في تطبيق منهاج تفكر، والكشف عن الموهوبين المبدعين والكشف عن أنواع الذكاء المرتفع لدى الطلاب، وتحقيق الأهداف الوجدانية ، وتقييم النتاجات الروحية والنفسية والأخلاقية، وتهيئة البيئة الإيجابية وازالة التوتر.
                            </p>
                            <p>
                                <a className="d-inline-flex align-items-center" href={`https://forms.zohopublic.com/tafakkur/form/Untitled19/formperma/ZwPaVDv5Ld5kLqH7iN28BBABGeQ4CqON5AF5LrFYrY4?utm_source=${localStorage?.utm_source}`}>
                                    <i className="fa-solid fa-download me-2"></i>
                                    حمل البروشور التعريفي
                                </a>
                            </p>
                        </div>
                        <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                            <AnosExperienceSlider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
