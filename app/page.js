"use client";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import en from "../locales/en.json";
import ar from "../locales/ar.json";
import Layout from "@/components/layout/Layout";
import HomeHero from "@/components/sections/HomeHero";
import HomeAbout from "@/components/sections/HomeAbout";
import HomeInstitutionsServices from "@/components/sections/HomeInstitutionsServices";
import HomeFamilyServices from "@/components/sections/HomeFamilyServices";
import HomeAchievement from "@/components/sections/HomeAchievement";
import HomeQuote from "@/components/sections/HomeQuote";
import TafakuurNewsListing from "@/components/sections/TafakuurNewsListing";
import ContactForm from "@/components/sections/ContactForm";
import { wrapNumbersInSpan } from "@/helpers";
import Image from 'next/image'

export default function page() {
  const { state } = useAppContext();
  const translation = state.LANG === "en" ? en : ar;
  const [newsData, setNewsData] = useState(null);
  const [heroTestimonials, setHeroTestimonials] = useState(null);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "تفكر | Tafakkur"
  })
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", state.LANG); // Assuming state.LANG is defined

    const urls = [
      `${state.HTTP_URL}testimonials/home`,
      `${state.HTTP_URL}news?limit=${limit}`,
    ];

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    Promise.all(urls.map(url => fetch(url, requestOptions).then(res => res.json())))
      .then(results => {
        setHeroTestimonials(results[0].data);
        setNewsData(results[1].data);
        setLoading(false);
        setTimeout(() => {
          wrapNumbersInSpan();
        }, 100);
      })
      .catch(error => {
        setLoading(false);
        setTimeout(() => {
          wrapNumbersInSpan();
        }, 100);
        console.error('Error:', error)
      });

  }, [])


  return (
    <>
      <Layout headerStyle={1} footerStyle={1} loader={loading}>
        <HomeHero data={heroTestimonials} />
        <HomeAbout data={heroTestimonials} />
        <HomeInstitutionsServices />
        <HomeFamilyServices />
        <HomeAchievement />
        <HomeQuote />
        <TafakuurNewsListing title="آخر الأخبار" noPaddingBottom={1} data={newsData?.data} />
        <div className="contact-wrapper">
          <div className="container custom-container shape-wrapper">
            <Image
              src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/contact/shape.png"
              width={85}
              height={68}
              alt="shape"
            />
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <h2>تواصل معنا</h2>
                <ContactForm noPaddingBottom="1"></ContactForm>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
