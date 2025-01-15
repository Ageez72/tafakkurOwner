"use client";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";
import { formatDate, getUrlParams } from "@/helpers";
import { useState, useEffect } from 'react'

export default function LevelHero({ data }) {
    const { state } = useAppContext();
    const translation = state.LANG === "en" ? en : ar;
    const [localStorage, setLocalStorage] = useState({});

    useEffect(() => {
        setLocalStorage(window.sessionStorage);
        console.log(window.sessionStorage);
    }, []);

    // Replace with your phone number (including country code, but without + or 00)
    const phoneNumber = '962790317731';

    // Create the WhatsApp link
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    return (
        <>
            <section className="hero-section academy-hero fix hero-1 bg-cover level" style={{backgroundImage: `url(${data?.cover_image})`}}>
                <div className="overlay"></div>
                <div className="container custom-container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-7 mt-0">
                            <div className="hero-content">
                                <h2 className="wow fadeInUp mb-2" data-wow-delay=".4s">دورة تفكر مع أنوس للأبناء</h2>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">{data?.name}</h2>
                                <div className="level-content wow fadeInUp" data-wow-delay=".4s">
                                    <h3 className="white-txt mb-4">لعمر <span className="en-txt">{data?.age}</span> سنوات</h3>
                                </div>
                                <a href={`https://zfrmz.com/o9ZSobK0CpnlzJ1K2yTR?utm_source=${localStorage?.utm_source}`} target="_blank" rel="noopener noreferrer" className="wow fadeInUp hero-button hero-hover-btn orange-btn" data-wow-delay=".4s">
                                    احجز مقعد ابنك في <span>{data?.next_date && formatDate(data?.next_date)}</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="hero-image wow fadeInUp" data-wow-delay=".4s">
                                <Image className="w-100" src={data?.image} alt="hero-img" />
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
