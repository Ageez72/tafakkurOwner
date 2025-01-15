"use client";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";
import ImageWrap from "../layout/ImageWrap"
import { getUrlParams } from "@/helpers";
import { useState, useEffect } from 'react'

export default function TrainingHero({ link, cover }) {
  const { state } = useAppContext();
  const translation = state.LANG === "en" ? en : ar;
  const [urlParams, setUrlParams] = useState("");

  useEffect(() => {

    const storedParams = getUrlParams();
    setUrlParams(storedParams || "");
  }, []);
  return (
    <>
      <section className="hero-section fix hero-1 bg-cover training">
        <div className="overlay"></div>
        <div className="container custom-container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7 mt-0">
              <div className="hero-content">
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  انضم لأفضل البرامج التدريبية التربوية
                  <br />
                  التي تجمع بين أصالة الإسلام وحداثة علم الدماغ والأعصاب
                </h2>
                <a href={`${link}${urlParams}`} target="_blank" className="wow fadeInUp hero-button" data-wow-delay=".4s">
                  احجز مقعدك في أقرب برنامج تدريبي
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-image wow fadeInUp" data-wow-delay=".4s">
                <ImageWrap src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/training/hero.png" alt="hero-img" ></ImageWrap>
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
