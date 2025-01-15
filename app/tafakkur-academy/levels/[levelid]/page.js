"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import LevelHero from "@/components/sections/LevelHero";
import Categories from "@/components/sections/Categories";
import LevelTestimonialSlider from "@/components/slider/LevelTestimonialSlider";
import VideoPopup from "@/components/elements/VideoPopup";
import LevelVideo from "@/components/sections/LevelVideo";
import AboutLevel from "@/components/sections/AboutLevel";
import Teachers from "@/components/sections/Teachers";
import Layout from "@/components/layout/Layout";
import { useAppContext } from "@/context/AppContext";
import en from "../../../../locales/en.json";
import ar from "../../../../locales/ar.json";
import { getYouTubeVideoID, getUrlParams } from "@/helpers";
import Image from "next/image";

const levelsNumber = [
    "الأول",
    "الثاني",
    "الثالث",
    "الرابع",
    "الخامس",
    "السادس",
    "السابع"
]
export default function page({ params }) {
    const { state } = useAppContext();
    const translation = state.LANG === "en" ? en : ar;
    const [loading, setLoading] = useState(true);
    const [coursesData, setCoursesData] = useState(null);
    const levelNumber = levelsNumber[Number(params.levelid) - 1]    
    const router = useParams();
    const { levelid } = router;
    
    const [localStorage, setLocalStorage] = useState({});

    useEffect(() => {
        setLocalStorage(window.sessionStorage);
    }, []);
    
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
                const res = await fetch(`${state.HTTP_URL}level/${levelid}`, requestOptions);
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const jsonData = await res.json();
                setCoursesData(jsonData.data);
                setLoading(false)
                document.title = `أكاديمية تفكر | ${jsonData.data.level.name}`
            } catch (error) {
                setLoading(false)
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [state.LANG]);  
    // Replace with your phone number (including country code, but without + or 00)
    const phoneNumber = '962790317731';
    // Create the WhatsApp link
    const whatsappUrl = `https://wa.me/${phoneNumber}`;    
    
    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={2}
                loader={loading}
            >
                <LevelHero data={coursesData?.level}/>
                <Categories type="level" />
                <LevelVideo level={levelNumber} data={coursesData?.level} />
                <AboutLevel level={levelNumber} data={coursesData?.level} />
                <Teachers level={levelNumber} data={coursesData?.level?.teachers} />
                <div id="trainee" className="trainee-level">
                    <div className="container custom-container h-100">
                        <div className="row align-items-center h-100">
                            <div className="col-12 col-md-6 section-padding ps-3 pe-5">
                                <div className="trainee-info">
                                    <h4 className="head-blue mb-5">
                                        شاهد نموذجاً من الحصص السابقة
                                    </h4>
                                    <p>{coursesData?.level?.sample_desc}</p>
                                    <VideoPopup videoTitleIcon="fa-arrow-left-long" title={"شاهد الفيديو"} style={2} videoId={coursesData?.level?.sample_video && getYouTubeVideoID(coursesData?.level?.sample_video)} />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 h-100 image-side video-wrapper p-0">
                                <div className="overlay"></div>
                                <VideoPopup style={3} videoId={coursesData?.level?.sample_video && getYouTubeVideoID(coursesData?.level?.sample_video)} />
                                <Image className="w-100 h-100 object-fit" src={coursesData?.level?.sample_video_image} alt="course" />
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div id="cost" className="level-cost">
                    <div className="container custom-container">
                        <div className="row justify-content-between">
                            <div className="col-12 col-lg-6 mt-5 pt-4">
                                <h4 className="head-blue">احجز مقعد ابنك الآن</h4>
                                <p className="mb-4">التكلفة الموضحة هي للمستوى <span>{levelNumber}</span> (فصلين دراسيين - 8 شهور فعلية)</p>
                                <p className="black-txt mb-4">
                                    يتوفر
                                    <strong> عدد محدود من المقاعد </strong>
                                    في كل شعبة لضمان جودة الحصص وتفاعل
                                    الطلاب.
                                </p>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="wow fadeInUp  hover-outlined-btn" data-wow-delay=".4s">
                                    <i className="fa-brands fa-whatsapp me-3"></i>
                                    تواصل معنا للمساعدة
                                </a>
                            </div>
                            <div className="row col-12 col-lg-5 mt-5 mt-lg-0">
                                <div className="price-card recommend">
                                    <h4 className="head-blue">تفاعلي عبر <span className="en-txt">Zoom</span></h4>
                                    <div className="price-wrap en-txt">
                                        <span className="price">$</span>
                                        <span className="price">{coursesData?.level?.price}</span>
                                    </div>
                                    <h5 className="mb-3">*خصم خاص للإخوة</h5>
                                    <h5 className="mb-4">*يتوفر الدفع بالتقسيط</h5>
                                    <div className="card-info mb-5">
                                        <ul>
                                            <li>
                                                <span className="en-txt">64</span> حصة تفكر (تقريباً) مع معلمات الإبداع
                                            </li>
                                           <li>
                                                 كتاب للطالب
                                            </li>
                                            <li>
                                                كتيب للأهل للمستويات الثلاث الأولى
                                            </li>
                                            <li>
                                                شحن كتاب الطالب لباب المنزل في أي دولة
                                            </li>
                                              <li>
                                                شهادة رقمية عند إنهاء المستوى
                                            </li>
                                        </ul>
                                    </div>
                                    <a className="wow fadeInUp hover-btn" data-wow-delay=".4s" href={`https://zfrmz.com/o9ZSobK0CpnlzJ1K2yTR?utm_source=${localStorage?.utm_source}`}>احجز مقعد طفلك</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <LevelTestimonialSlider data={coursesData?.testimonials} />
            </Layout>
        </>
    )
}
