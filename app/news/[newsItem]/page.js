"use client";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { useAppContext } from "@/context/AppContext";
import en from "../../../locales/en.json";
import ar from "../../../locales/ar.json";
import ContactForm from "@/components/sections/ContactForm";
import NewsCategories from "@/components/sections/NewsCategories";
import { formatDate } from "@/helpers";
import Image from "next/image";

export default function newsPage({ params }) {
    const { state } = useAppContext();
    const translation = state.LANG === "en" ? en : ar;
    const [newsDetails, setNewsDetails] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, [state.LANG]);

    const fetchData = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Accept-Language", state.LANG);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };
        try {
            const res = await fetch(`${state.HTTP_URL}news/${params.newsItem}`, requestOptions);
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            const jsonData = await res.json();
            setNewsDetails(jsonData.data);
            document.title = `أخبار تفكر | ${jsonData.data.title}`
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={1}
                whiteHeader={1}
                loader={loading}
            >
                <section className="news-details-section fix pt-4 news-section white-background-section pt-5 mt-5">
                    <div className="container">
                        <div className="news-details-wrapper">
                            <div className="row">
                                <div className="col-lg-9">
                                    <h2>{newsDetails?.title}</h2>

                                    <div className="news-info d-flex flex-wrap mb-4 mt-3 gap-3">
                                        <div className="news-date">
                                            <i className="fa-regular fa-calendar me-2"></i>
                                            <span>
                                                {newsDetails?.date && formatDate(newsDetails?.date)}
                                            </span>
                                        </div>
                                        {
                                            newsDetails?.categories?.map((category) => (
                                                <div className="news-date" key={category.id}>
                                                    <i className="fa-solid fa-list-tree me-2"></i>
                                                    <span>{category.name}</span>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className="details-content">
                                        <div className="news-image mb-5" style={{ backgroundImage: ` url(${newsDetails?.image})` }}>
                                            <Image loading="eager" className="w-100 border-radius-8" src={newsDetails?.image} alt="news cover" />
                                        </div>
                                        <div className="news-desc description" dangerouslySetInnerHTML={{ __html: newsDetails?.desc }} />
                                    </div>
                                    <div className="news-tags">
                                        {
                                            newsDetails?.tags
                                            // newsDetails?.tags?.map((tag, i)=> (
                                            //     <span key={i}>{tag}</span>
                                            // ))
                                        }
                                    </div>
                                </div>
                                <div className="col-lg-3 ps-5 news-sectors d-none d-lg-block">
                                    <h3 className="mb-3">تصنيفات</h3>
                                    <ul>
                                        <NewsCategories />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-wrapper">
                        <div className="container custom-container shape-wrapper">
                            <Image
                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/contact/shape.png"
                                width={85}
                                height={68}
                                alt="shape"
                            />
                            <div className="row">
                                <div className="col-lg-9">
                                    <h2>تواصل معنا</h2>
                                    <ContactForm noPaddingBottom={true}></ContactForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}