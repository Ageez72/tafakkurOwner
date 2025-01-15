"use client";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";
import { useState, useEffect } from 'react'
import { getUrlParams } from '@/helpers';

export default function CourseHero({ data }) {
    const { state } = useAppContext();
    const translation = state.LANG === "en" ? en : ar;
    const [urlParams, setUrlParams] = useState("");
    
    useEffect(() => {
        
        const storedParams = getUrlParams();
        setUrlParams(storedParams || "");
    }, []);
    return (
        <>
            {
                data && (
                    <section className="hero-section fix hero-1 bg-cover course-hero" style={data?.cover || data?.cover_image && { backgroundImage: `url(${data?.cover ? cover : data?.cover_image})` }}>
                        <div className="overlay"></div>
                        <div className="container custom-container">
                            <div className="row g-4 align-items-center">
                                <div className="col-lg-12 mt-0 text-center">
                                    <div className="hero-content">
                                        <h4 className="wow fadeInUp" data-wow-delay=".4s">
                                            {
                                                data?.hours_count >= 20 ? "الدبلوم التدريبي" : "الدورة التدريبية"
                                            }
                                        </h4>
                                        <h2 className="wow fadeInUp" data-wow-delay=".4s">{data?.title}</h2>
                                        <h3 className="wow fadeInUp mb-3" data-wow-delay=".4s">{data?.desc}</h3>
                                        <p className="mb-3 wow fadeInUp" data-wow-delay=".4s">
                                            {data?.hint}
                                        </p>
                                        {data?.main_url && <Link href={`${data?.main_url}${urlParams}`} className="wow fadeInUp hero-button me-3" data-wow-delay=".4s">
                                            انضم الآن
                                        </Link>}
                                        <div className="row justify-content-center mt-5 course-info">
                                            <div className="col-auto">
                                                <p>
                                                    <i className="fa-solid fa-chalkboard-user"></i>
                                                    <span className="en-txt mx-2">{data?.sessions_count}</span>
                                                    <span>محاضرات</span>
                                                </p>
                                            </div>
                                            <div className="col-auto mx-3">
                                                <p>
                                                    <i className="fa-regular fa-clock"></i>
                                                    <span className="en-txt mx-2">{data?.hours_count}</span>
                                                    <span>ساعة</span>
                                                </p>
                                            </div>
                                            <div className="col-auto">
                                                <p>
                                                    <i className="fa-solid fa-users"></i>
                                                    <span className="en-txt mx-2">{data?.trainees_count}</span>
                                                    <span>متدرب</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wave-wrapper">
                            <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </section>
                )
            }
        </>
    );
}
