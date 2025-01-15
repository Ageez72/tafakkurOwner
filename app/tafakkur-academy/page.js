"use client";
import { useState, useEffect } from "react";
import AcademyHero from "@/components/sections/AcademyHero";
import Categories from "@/components/sections/Categories";
import AcademyTestimonialSlider from "@/components/slider/AcademyTestimonialSlider";
import TafakuurNewsListing from "@/components/sections/TafakuurNewsListing";
import AboutAcademy from "@/components/sections/AboutAcademy";
import AcademyLevels from "@/components/sections/AcademyLevels";
import Layout from "@/components/layout/Layout";
import BookSeat from "@/components/sections/BookSeat";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";

export default function tafakkurAcademy() {
    const { state } = useAppContext();
    const translation = state.LANG === "en" ? en : ar;
    const [loading, setLoading] = useState(true);
    const [academyTestimonialsData, setAcademyTestimonialsData] = useState([]);
    const [newsData, setNewsData] = useState([]);
    const [limit, setLimit] = useState(3);
    const [type, setType] = useState("academy");
    useEffect(() => {
        document.title = "أكاديمية تفكر | منهاج تفكر مع انوس عن بعد"
      })
    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Accept-Language", state.LANG); // Assuming state.LANG is defined

        const urls = [
            `${state.HTTP_URL}testimonials/academy`,
            `${state.HTTP_URL}news?limit=${limit}&type=${type}`,
        ];

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        Promise.all(urls.map(url => fetch(url, requestOptions).then(res => res.json())))
            .then(results => {
                setAcademyTestimonialsData(results[0].data);
                setNewsData(results[1].data);
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                console.error('Error:', error)
            });

    }, [state.LANG])
    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={2}
                loader={loading}
            >
                <AcademyHero data={academyTestimonialsData?.videos} />
                <Categories type="academy" />
                <AboutAcademy data={academyTestimonialsData?.videos}/>
                <AcademyLevels data={academyTestimonialsData?.levels}/>
                <TafakuurNewsListing title="مستجدات أكاديمية تفكر" data={newsData.data} />
                <AcademyTestimonialSlider data={academyTestimonialsData}/>
                <BookSeat />
            </Layout>
        </>
    )
}
