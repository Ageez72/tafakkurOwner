"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ImageWrap from "../../components/layout/ImageWrap";
import VideoPopup from "../elements/VideoPopup";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";
import { getYouTubeVideoID, getUrlParams } from "@/helpers";

export default function AcademyHero({data}) {
    const { state } = useAppContext();
    const translation = state.LANG === "en" ? en : ar;
    const [infoData, setInfoData] = useState(null);
    const [localStorage, setLocalStorage] = useState({});

    useEffect(() => {
        setLocalStorage(window.sessionStorage);
        console.log(window.sessionStorage);
    }, []);

    // Replace with your phone number (including country code, but without + or 00)
    const phoneNumber = '962790399912';

    // Create the WhatsApp link
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    return (
        <>
            <section className="hero-section fix hero-1 bg-cover academy">
                <div className="overlay"></div>
                <div className="container custom-container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-7 mt-0">
                            <div className="hero-content">
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">استثمر في السنوات الحرجة لبناء
                                    <br />
                                    شخصية ولدك بشكل متكامل</h2>
                                <div className="academy-content wow fadeInUp" data-wow-delay=".4s">
                                    <p className="white-txt mb-1">دورات تفكر مع أنوس للأبناء دورات  تربوية تفاعلية</p>
                                    <p className="white-txt mb-1">
                                        <i className="fa-solid fa-chevron-left me-2"></i>
                                        مكونة من <span className="en-txt">5</span> مستويات
                                    </p>
                                    <p className="white-txt mb-4">
                                        <i className="fa-solid fa-chevron-left me-2"></i>
                                        كل مستوى مدته <span className="en-txt">8</span> شهور (حصتين أسبوعياً)
                                    </p>
                                </div>
                                <a href={`https://zfrmz.com/o9ZSobK0CpnlzJ1K2yTR?utm_source=${localStorage?.utm_source}`} target="_blank" rel="noopener noreferrer" className="wow fadeInUp hero-button orange-btn" data-wow-delay=".4s">
                                    احجز مقعد ابنك في دورة يناير <span className="en-txt">2025</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-auto reviews-video-wrapper acadenmy-hero-video">
                            <div className="hero-image wow fadeInUp video-wrapper" data-wow-delay=".4s">
                                <VideoPopup style={3} videoId={data && getYouTubeVideoID(data[0]?.video)} />
                                <ImageWrap src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/tafakkurAcademy/hero-img.png" w="300" h="300" alt="hero-img" ></ImageWrap>
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
        </>
    );
}
