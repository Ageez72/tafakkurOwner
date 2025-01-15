"use client"
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { useAppContext } from "@/context/AppContext";
import en from "../../../../../../locales/en.json";
import ar from "../../../../../../locales/ar.json";
import VideoPopup from "@/components/elements/VideoPopup";
import Shipping from "@/components/sections/Shipping";
import { getYouTubeVideoID } from "@/helpers";
import VersionTestimonialSlider from "@/components/slider/VersionTestimonialSlider";

export default function ReviewDetails() {
    const { state } = useAppContext();
    const translation = state.LANG === "en" ? en : ar;
    const router = useParams();
    const { productid, categoryid} = router;
    
    const [bookDetails, setBookDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    // const productid = localStorage.getItem("product-id")
    // const categoryid = localStorage.getItem("category-id")
    // const categorySlug = localStorage.getItem("category-slug")
    const [localStorage, setLocalStorage] = useState({});

    useEffect(() => {
        setLocalStorage(window.sessionStorage);
        console.log(window.sessionStorage);
    }, []);
    
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", state.LANG); // Assuming state.LANG is defined

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    const fetchData = async () => {
        try {
            const res = await fetch(`${state.HTTP_URL}book/${productid}`, requestOptions);
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            const jsonData = await res.json();
            setBookDetails(jsonData.data);
            setLoading(false)
            document.title = `تفكر ناشرون | ${jsonData.data.name}`
        } catch (error) {
            setLoading(false)
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={2}
                parentrumb={bookDetails?.category?.name}
                parentrumbRoute={`tafakkur-publishers/categories/${categoryid}`}
                breadcrumbTitle={bookDetails?.name}
                versionsBtn="احصل على الإصدارات الآن"
                btnRoute={`https://forms.zohopublic.com/tafakkur/form/Untitled5/formperma/xbumF0HBgyi7ZpN5ZWjsHpn9jR5OODt5RsJ3RoTY5IA?utm_source=${localStorage?.utm_source}`}
                bannerBg={bookDetails?.cover_image || "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/versions/detailsCover.jpg"}
                loader={loading}
            >
                <section className="version-details section-padding pb-180">
                    <div className="container custom-container">
                        <div className="row align-items-start">
                            <div className="col-md-5 sticky-section">
                                {
                                    bookDetails?.images?.map((image) => (
                                        <div className="book-wrapper mb-4">
                                            <Image loading="lazy" className="w-100 border-radius-8" src={image?.image} alt={bookDetails?.name} />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="col-md-7 ps-md-5">
                                <div className="version-details-box">
                                    <h3 className="mb-4">تفاصيل الإصدار</h3>
                                    <p>
                                        <span className="title">المؤلف:</span>
                                        <span className="info">{bookDetails?.author}</span>
                                    </p>
                                    <p>
                                        <span className="title">الرسام:</span>
                                        <span className="info">{bookDetails?.painter}</span>
                                    </p>
                                    <p>
                                        <span className="title">الناشر:</span>
                                        <span className="info">{bookDetails?.publisher}</span>
                                    </p>
                                    <p>
                                        <span className="title">اللغة:</span>
                                        <span className="info">{bookDetails?.language}</span>
                                    </p>
                                    <p>
                                        <span className="title">السلسلة:</span>
                                        <span className="info">{bookDetails?.category?.name}</span>
                                    </p>
                                    <p>
                                        <span className="title">العمر:</span>
                                        <span className="info en-text">{bookDetails?.age_from} - {bookDetails?.age_to}</span>
                                    </p>
                                    <p>
                                        <span className="title">الأبعاد:</span>
                                        <span className="info en-text">{bookDetails?.size} </span>
                                        <span className="info">سنتيميتر</span>
                                    </p>
                                    <p>
                                        <span className="title">الوزن:</span>
                                        <span className="info en-text">{bookDetails?.weight} </span>
                                        <span className="info">كيلوجرام</span>
                                    </p>
                                    <p>
                                        <span className="title">عدد الصفحات:</span>
                                        <span className="info en-text">{bookDetails?.pages_count}</span>
                                    </p>
                                </div>
                                <div className="about-version">
                                    <h4>عن الإصدار:</h4>
                                    <div dangerouslySetInnerHTML={{ __html: bookDetails?.desc }} />
                                    {
                                        bookDetails?.video && (
                                            <div className="video-wrapper mt-5">
                                                <Image loading="lazy" className="w-100 border-radius-15" src={bookDetails?.video_image && bookDetails?.video_image} alt="Version poster image" />
                                                <VideoPopup style={3} videoId={bookDetails?.video && getYouTubeVideoID(bookDetails?.video)} />
                                            </div>
                                        )
                                    }

                                    <div className="tags-wrapper mt-5">
                                        <p>
                                            <span className="title">الوسوم: </span>
                                            <span>
                                                {
                                                    bookDetails?.tags
                                                    // bookDetails?.tags?.map((tag, i) => (
                                                    //     <span key={i}>{tag}{i !== bookDetails.tags.length - 1 && ", "}</span>
                                                    // ))
                                                }
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {bookDetails?.testimonials?.length ? <VersionTestimonialSlider noPadding={true} data={bookDetails?.testimonials}></VersionTestimonialSlider> : ""}
                        
                    </div>
                    
                </section>
                <div className="shipping-bg">
                        <div className="container custom-container">
                            <Shipping versionsTitles={true}/>
                        </div>
                    </div>
            </Layout>
        </>
    )
}
