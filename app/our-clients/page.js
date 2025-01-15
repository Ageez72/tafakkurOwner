"use client";
import { useState, useEffect } from "react";
import { wrapNumbersInSpan, getYouTubeVideoID } from "@/helpers";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import BrandSlider from "@/components/slider/BrandSlider";
import CountryFilterTable from "@/components/sections/CountryFilterTable";
import VideoPopup from "@/components/elements/VideoPopup";
import AnosTestimonialSlider from "@/components/slider/AnosTestimonialSlider";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";
import Image from "next/image";

export default function TafakuurInstitutions() {
  const { state } = useAppContext();
  const translation = state.LANG === "en" ? en : ar;
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState("");
  const [limit, setLimit] = useState(20);
  const [page, setpage] = useState(1);
  const [countriesList, setCountriesList] = useState([]);
  const [institutionsData, setInstitutionsData] = useState([]);
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Accept-Language", state.LANG); // Assuming state.LANG is defined
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  useEffect(() => {
    document.title = "مدارس تطبق تفكر مع أنوس";
  });

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", state.LANG); // Assuming state.LANG is defined

    const urls = [
      `${state.HTTP_URL}schools?country_id=${country}&limit=${limit}&page=${page}`,
      `${state.HTTP_URL}countries`,
    ];

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    Promise.all(
      urls.map((url) => fetch(url, requestOptions).then((res) => res.json()))
    )
      .then((results) => {
        setInstitutionsData(results[0].data);
        setCountriesList(results[1].data);
        setLoading(false);
        setTimeout(() => {
          wrapNumbersInSpan();
        }, 100);
      })
      .catch((error) => {
        setLoading(false);
        setTimeout(() => {
          wrapNumbersInSpan();
        }, 100);
        console.error("Error:", error);
      });
  }, []);

  const handleCountryFilter = (countryId) => {
    setCountry(countryId);
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${state.HTTP_URL}schools?country_id=${countryId}&limit=${limit}&page=${page}`,
          requestOptions
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await res.json();
        setInstitutionsData(jsonData.data);
        setLoading(false);
        setTimeout(() => {
          wrapNumbersInSpan();
        }, 100);
      } catch (error) {
        setLoading(false);
        setTimeout(() => {
          wrapNumbersInSpan();
        }, 100);
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  };

  const handlePaginationFilter = (pageNumber) => {
    setpage(pageNumber);
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${state.HTTP_URL}schools?country_id=${country}&limit=${limit}&page=${pageNumber}`,
          requestOptions
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await res.json();
        setInstitutionsData(jsonData.data);
        setLoading(false);
        setTimeout(() => {
          wrapNumbersInSpan();
        }, 100);
      } catch (error) {
        setLoading(false);
        setTimeout(() => {
          wrapNumbersInSpan();
        }, 100);
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  };
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={2}
        breadcrumbTitle={"مؤسسات تعليمية رائدة تطبق منهاج تفكر مع أنوس"}
        noBreadcrumbItem={1}
        noWave={1}
        bannerBg="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/institutions/bg.jpg"
        allVersionsDesc="أكثر من 350 مؤسسة تعليمية في 24 دولة حول العالم"
        loader={loading}
      >
        <section className="tafakuur-institutions top">
          <BrandSlider data={institutionsData?.logos}></BrandSlider>
          <CountryFilterTable
            title="اختر الدولة"
            data={institutionsData?.schools?.data}
            links={institutionsData?.schools?.links}
            countries={countriesList}
            handleSubmit={handleCountryFilter}
            handlePagination={handlePaginationFilter}
          />
          <section className="course-wrapper">
            <div id="testimonials" className="section-padding">
              <div className="container custom-container">
                <h4 className="head-blue mb-5">شهادات نعتز بها</h4>
                <div className="row h-100">
                  <div className="col-12 col-lg-6 video-wrapper">
                    <div className="video-wrapper">
                      <VideoPopup
                        shapeIcon={true}
                        style={3}
                        videoId={
                          institutionsData?.videos &&
                          getYouTubeVideoID(institutionsData?.videos[0]?.video)
                        }
                      />
                      <Image
                        src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/training/testimonials.jpg"
                        width={500}
                        height={314}
                        alt="Testimonials Image"
                        className="w-100 object-fit border-radius-8"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <AnosTestimonialSlider
                      cols={1}
                      data={institutionsData?.testimonials}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="book-seat-section pb-4">
            <div className="container custom-container section-padding position-relative">
              <Image
                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/contact/shape.png"
                width={85}
                height={68}
                alt="shape"
                className="shape top"
              />
              <div className="row align-items-center">
                <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                  <div className="content">
                    <h2>طبق منهاج تفكر مع أنوس في مؤسستك التعليمية</h2>
                    <p>تواصل مع فريق الاعتماد لإجابة جميع استفساراتك</p>
                  </div>
                </div>
                <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                  <div className="action-buttons text-center mt-5 mt-md-0">
                    <Link
                      href="/contact-us"
                      target="_blank"
                      className="hover-btn me-3"
                    >
                      تواصل معنا
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Layout>
    </>
  );
}
