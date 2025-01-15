"use client";
import { useState, useEffect } from "react";
import TrainingHero from "@/components/sections/TrainingHero";
import Categories from "@/components/sections/Categories";
import AboutTafakuurTraining from "@/components/sections/AboutTafakuurTraining";
import Achievement from "@/components/sections/Achievement";
import Programs from "@/components/sections/Programs";
import TestimonialSlider from "@/components/slider/TestimonialSlider";
import TafakuurNewsListing from "@/components/sections/TafakuurNewsListing";
import BookSeat from "@/components/sections/BookSeat";
import Layout from "@/components/layout/Layout";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";
import { wrapNumbersInSpan } from "@/helpers";

const achievementsData = [
    {
        title: "دولة",
        value: 35
    },
    {
        title: "ورشة تدريبية",
        value: 95
    },
    {
        title: "متدرب ",
        value: 15000
    },
    {
        title: "ساعة تدريبية ",
        value: 1360
    },
]
export default function tafakuurTraining() {
    const { state } = useAppContext();
    const translation = state.LANG === "en" ? en : ar;
    const [loading, setLoading] = useState(true);
    const [coursesData, setCoursesData] = useState(null);
    const [newsData, setNewsData] = useState([]);
    const [limit, setLimit] = useState(3);
    const [type, setType] = useState("training");

    useEffect(() => {
        document.title = "تفكر للتدريب | برامج التدريب من تفكر"
      })

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Accept-Language", state.LANG); // Assuming state.LANG is defined

        const urls = [
            `${state.HTTP_URL}courses`,
            `${state.HTTP_URL}news?limit=${limit}&type=${type}`,
        ];

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        Promise.all(urls.map(url => fetch(url, requestOptions).then(res => res.json())))
            .then(results => {
                setCoursesData(results[0].data);
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
            <Layout
                headerStyle={1}
                footerStyle={2}
                loader={loading}
            >
                <TrainingHero link={coursesData?.course_link} />
                <Categories type="training" />
                <AboutTafakuurTraining data={coursesData?.sliders} />
                <Achievement bg="training" data={achievementsData} />
                <Programs data={coursesData} />
                <TestimonialSlider data={coursesData?.testimonials}/>
                <TafakuurNewsListing title="مستجدات تفكر للتدريب" data={newsData.data} />
                <BookSeat />
            </Layout>
        </>
    );
}
