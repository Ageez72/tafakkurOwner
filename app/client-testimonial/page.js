"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import EffectsAndResults from "@/components/sections/EffectsAndResults";
import { useAppContext } from "@/context/AppContext";
import { wrapNumbersInSpan } from "@/helpers";


export default function SaidAboutUs() {
    const { state } = useAppContext();
    // const translation = state.LANG === "en" ? en : ar;
    const [loading, setLoading] = useState(true);
    const [saidData, setSaidData] = useState(null);
    useEffect(()=>{
        document.title = "آراء حول تفكر مع أنوس | شهادات نجاح"
    })
    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Accept-Language", state.LANG);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };

        const fetchData = async () => {
            try {
                const res = await fetch(`${state.HTTP_URL}testimonials/about`, requestOptions);
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const jsonData = await res.json();
                setSaidData(jsonData.data);
                setLoading(false)
                setTimeout(() => {
                    wrapNumbersInSpan()
                }, 100);
            } catch (error) {
                setLoading(false)
                setTimeout(() => {
                    wrapNumbersInSpan()
                }, 100);
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [state.LANG]);

    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={2}
                breadcrumbTitle={"قصص نجاح وتميز في تطبيق منهاج تفكر مع أنوس"}
                noBreadcrumbItem={1}
                noWave={1}
                bannerBg="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/said-aboutus.jpg"
                allVersionsDesc=" في المؤسسات التعليمية حول العالم"
                bigSubTitle= {true}
                loader={loading}
            >
                <section className="said-about-us">
                    {
                        saidData?.map((el)=>(
                            <EffectsAndResults key={el.id} title={el.author_name} desc={el.body} videoId={el.video} image={el.author_image} />
                        ))
                    }
                    <section className="book-seat-section section-padding pb-100">
                        <div className="container custom-container">
                            <div className='content text-center wow fadeInUp mb-4' data-wow-delay=".5s">
                                <h2>طبق منهاج تفكر مع أنوس في مؤسستك</h2>
                                <p>تواصل مع فريق الاعتماد لإجابة جميع استفساراتك</p>
                            </div>

                            <div className='action-buttons text-center mt-5 mt-md-0 wow fadeInUp' data-wow-delay=".5s">
                                <Link href='https://wa.link/zab3la' target='_blank' className='hover-btn me-3'>
                                    تواصل مع فريق الاعتماد
                                </Link>
                            </div>
                        </div>
                    </section>
                </section>
            </Layout>
        </>
    )
}
