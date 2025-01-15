"use client"
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import BrandSlider from "@/components/slider/BrandSlider";
import AnosTestimonialSlider from "@/components/slider/AnosTestimonialSlider";
import AnosSuccessStories from "@/components/sections/AnosSuccessStories";
import AnosManager from "@/components/sections/AnosManager";
import SupervisoryCommittee from "@/components/sections/SupervisoryCommittee";
import AnosContactExperience from "@/components/sections/AnosContactExperience";
import AnosCourses from "@/components/sections/AnosCourses";
import AnosReviewVideo from "@/components/sections/AnosReviewVideo";
import ApplyTafakuur from "@/components/sections/ApplyTafakuur";
import ApplyMenhag from "@/components/sections/ApplyMenhag";
import AnosLevelsEffects from "@/components/sections/AnosLevelsEffects";
import AnosWhyApplyMenhag from "@/components/sections/AnosWhyApplyMenhag";
import AnosHero from "@/components/sections/AnosHero";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";
import { wrapNumbersInSpan } from "@/helpers";
import Link from "next/link";

export default function page() {
    const { state } = useAppContext();
    const translation = state.LANG === "en" ? en : ar;
    const [loading, setLoading] = useState(true);
    const [anosData, setanosData] = useState([]);
    const [anosCourses, setanosCourses] = useState([]);

    useEffect(() => {
        document.title = "تفكر مع أنوس | منهاج بناء الشخصية الإبداعية والأخلاقية"
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
                const res = await fetch(`${state.HTTP_URL}annoth`, requestOptions);
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const jsonData = await res.json();
                setanosData(jsonData.data);
                setLoading(false);
                setTimeout(() => {
                    wrapNumbersInSpan()
                }, 100);
            } catch (error) {
                setLoading(false);
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
            <Layout headerStyle={1} footerStyle={1} whiteHeader={1} loader={loading}>
                <AnosHero />
                <AnosWhyApplyMenhag data={anosData?.videos} />
                <AnosLevelsEffects  data={anosData?.videos}/>
                <ApplyMenhag />
                <AnosReviewVideo data={anosData?.videos} />
                <AnosCourses data={anosData?.courses} />
                <AnosContactExperience />
                <SupervisoryCommittee />
                <AnosManager />
                <div className="tafakuur-institutions section-padding pb-0 text-center">
                    <h2 className="head-blue mb-2"><span className="en-txt">350</span> مؤسسة تعليمية في  <span className="en-txt">24</span> دولة حول العالم</h2>
                    <p>انضم إلى ثلة المؤسسات المطبقة</p>
                    <BrandSlider data={anosData?.schools} />

                    <h3 className="mb-5 pb-4 text-center">
                        <Link href="/our-clients" className="tafakuurInstitutions-link d-inline-flex align-items-center justify-content-center">
                            اطلع إلى قائمة المطبقين
                            <i className="fa-solid fa-arrow-left ms-2"></i>
                        </Link>
                    </h3>
                </div>
                <AnosSuccessStories />
                <div className="course-wrapper">
                    <div id="testimonials" className="section-padding position-relative">
                        <AnosTestimonialSlider cols={3} data={anosData?.testimonials} />
                    </div>
                </div>
                <ApplyTafakuur darkBtn={true}/>
            </Layout>
        </>
    );
}
