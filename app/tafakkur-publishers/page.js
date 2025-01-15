"use client";
import { useState, useEffect } from "react";
import PublishersHero from "@/components/sections/PublishersHero";
import Categories from "@/components/sections/Categories";
import Achievement from "@/components/sections/Achievement";
import PublishersTestimonialSlider from "@/components/slider/PublishersTestimonialSlider";
import TafakuurNewsListing from "@/components/sections/TafakuurNewsListing";
import AboutPublishers from "@/components/sections/AboutPublishers";
import VersionCard from "@/components/sections/VersionCard";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import ContactForm from "@/components/sections/ContactForm";
import Layout from "@/components/layout/Layout";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";
import { wrapNumbersInSpan } from "@/helpers";
import Image from "next/image";

const achievementsData = [
    {
        title: "إصدار",
        value: 60
    },
    {
        title: "مشاركة في معارض الكتاب",
        value: 25
    },
    {
        title: "وكيل وموزع",
        value: 30
    },
    {
        title: "أسرة مستفيدة",
        value: 75000
    },
]

export default function publishers() {
    const { state } = useAppContext();
    const translation = state.LANG === "en" ? en : ar;
    const [loading, setLoading] = useState(true);
    const [publishersData, setPublishersData] = useState([]);
    const [newsData, setNewsData] = useState([]);
    const [limit, setLimit] = useState(3);
    const [type, setType] = useState("publisher");
    useEffect(() => {
        document.title = "تفكر ناشرون | إصدارات تنمي الشخصية الإبداعية والأخلاقية"
      })
    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Accept-Language", state.LANG); // Assuming state.LANG is defined

        const urls = [
            `${state.HTTP_URL}publishers`,
            `${state.HTTP_URL}news?limit=${limit}&type=${type}`,
        ];

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        Promise.all(urls.map(url => fetch(url, requestOptions).then(res => res.json())))
            .then(results => {
                setPublishersData(results[0].data);
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

    }, [state.LANG])
    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={2}
                loader={loading}
            >
                <PublishersHero data={publishersData?.recent_book} />
                <Categories type="publishers" />
                <AboutPublishers />
                <UpcomingEvents data={publishersData?.upcoming_book} />
                {
                    publishersData?.categories?.map((version, i) => (
                        <VersionCard key={version.id} data={version} index={i === 0 ? 1 : null} />
                    ))
                }
                <Achievement publisher="publishers" data={achievementsData} />
                <PublishersTestimonialSlider data={publishersData?.testimonials} />
                <TafakuurNewsListing title="مستجدات تفكر ناشرون" data={newsData.data} />
                <div className="publisher-contact">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12 col-md-3 col-md-4 img-side d-none d-lg-block position-relative">
                                <Image
                                    src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/versions/boy.png"
                                    alt="boy"
                                    fill={true}
                                /> 
                            </div>
                            <div className="col-12 col-md-3 col-md-8">
                                <h2 className="head-blue mb-4">تواصل معنا</h2>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
