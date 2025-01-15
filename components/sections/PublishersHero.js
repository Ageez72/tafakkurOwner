"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";
import VideoPopup from "../elements/VideoPopup";
import ImageWrap from "../layout/ImageWrap"

export default function PublishersHero({ data }) {
    const { state } = useAppContext();
    const translation = state.LANG === "en" ? en : ar;
    const [infoData, setInfoData] = useState(null);

    // Replace with your phone number (including country code, but without + or 00)
    const phoneNumber = '962790727220';

    // Create the WhatsApp link
    const whatsappUrl = `https://wa.me/${phoneNumber}`;    
    return (
        <>
            <section className="hero-section fix hero-1 bg-cover publishers">
                <div className="overlay"></div>
                <div className="container custom-container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-7 mt-0">
                            <div className="hero-content">
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                                    <span className="d-inline-block">أحدث الإصدارات من </span>
                                    <span className="ms-2 d-inline-block">{data?.category?.name}</span>
                                </h2>
                                <Link className="view-info wow fadeInUp d-flex align-items-center" data-wow-delay=".4s" href={`/tafakkur-publishers/categories/${data?.category.slug}/products/${data?.slug}`}>
                                    اطلع إلى التفاصيل
                                    <i className="fa-solid fa-arrow-left ms-2"></i></Link>

                                <Link href="/tafakkur-publishers/products" className="wow fadeInUp hero-button hero-hover-btn-outline me-3" data-wow-delay=".4s">
                                    اطلع على جميع الإصدارات
                                </Link>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="wow fadeInUp hero-button" data-wow-delay=".4s">
                                    <i className="fa-brands fa-whatsapp me-3"></i>
                                    استفسر الآن
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="hero-image wow fadeInUp" data-wow-delay=".4s">
                                <Image width={300} height={245} src={data?.image} alt="hero-img" />
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
