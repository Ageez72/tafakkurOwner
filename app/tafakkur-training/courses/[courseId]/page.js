"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import CourseHero from "@/components/sections/CourseHero";
import VideoPopup from "@/components/elements/VideoPopup";
import CourseTestimonialSlider from "@/components/slider/CourseTestimonialSlider";
import { useAppContext } from "@/context/AppContext";
import en from "../../../../locales/en.json";
import ar from "../../../../locales/ar.json";
import { getYouTubeVideoID, formatDate, wrapNumbersInSpan, getUrlParams } from "@/helpers";
import Image from "next/image";

export default function course({ params }) {
    const [activeTab, setActiveTab] = useState("whatLearn");
    const { state } = useAppContext();
    const translation = state.LANG === "en" ? en : ar;
    const [loading, setLoading] = useState(true);
    const [courseData, setCourseData] = useState(null);
    const [urlParams, setUrlParams] = useState("");
    const router = useParams();
    const { courseId } = router;

    useEffect(() => {
        const storedParams = getUrlParams();
        setUrlParams(storedParams || "");
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "";
            const sections = [
                "whatLearn",
                "dateTime",
                "trainee",
                "goals",
                "testimonials",
                "cost",
            ];

            sections.forEach((id) => {
                const sectionElement = document.getElementById(id);
                if (sectionElement && window.scrollY >= sectionElement.offsetTop - 50) {
                    currentSection = id;
                }
            });

            setActiveTab(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
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
                const res = await fetch(`${state.HTTP_URL}course/${courseId}`, requestOptions);
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const jsonData = await res.json();
                setCourseData(jsonData.data);
                setLoading(false);
                document.title = `دورات تفكر | ${jsonData.data.course.title}`

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
    }, [state.LANG]);

    // Replace with your phone number (including country code, but without + or 00)
    const phoneNumber = '962790317731';
    // Create the WhatsApp link
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    // Handle tab click
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={2}
                loader={loading}
            >
                <CourseHero data={courseData?.course} />
                <section className="course-wrapper section-padding pb-0">
                    <div className="text-center sticky-tabs">
                        <div className="row justify-content-center course-content-tabs">
                            <p className="col-auto">
                                <a
                                    href="#whatLearn"
                                    className={activeTab === "whatLearn" ? "active" : ""}
                                    onClick={() => handleTabClick("whatLearn")}
                                >
                                    ماذا ستتعلم
                                </a>
                            </p>
                            <p className="col-auto">
                                <a
                                    href="#dateTime"
                                    className={activeTab === "dateTime" ? "active" : ""}
                                    onClick={() => handleTabClick("dateTime")}
                                >
                                    الوقت والتاريخ
                                </a>
                            </p>
                            <p className="col-auto">
                                <a
                                    href="#trainee"
                                    className={activeTab === "trainee" ? "active" : ""}
                                    onClick={() => handleTabClick("trainee")}
                                >
                                    المدرب
                                </a>
                            </p>
                            <p className="col-auto">
                                <a
                                    href="#goals"
                                    className={activeTab === "goals" ? "active" : ""}
                                    onClick={() => handleTabClick("goals")}
                                >
                                    الهدف والمحاور
                                </a>
                            </p>
                            <p className="col-auto">
                                <a
                                    href="#testimonials"
                                    className={activeTab === "testimonials" ? "active" : ""}
                                    onClick={() => handleTabClick("testimonials")}
                                >
                                    آراء المتدربين
                                </a>
                            </p>
                            <p className="col-auto">
                                <a
                                    href="#cost"
                                    className={activeTab === "cost" ? "active" : ""}
                                    onClick={() => handleTabClick("cost")}
                                >
                                    التكلفة
                                </a>
                            </p>
                        </div>
                    </div>

                    <div id="whatLearn">
                        <div className="container custom-container">
                            <h3 className="head-blue">ماذا ستتعلم معنا؟</h3>
                            <div className="learn-items list">
                                <ul>
                                    {
                                        courseData?.course?.output?.map((el, i) => (
                                            <li key={i}>{el}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="dateTime" className={`${courseData?.course?.zoom ? "" : "py-5"}`}>
                        <div className="container custom-container">
                            <div className="row align-items-center">
                                <div className={`col-12 ${courseData?.course?.zoom ? "col-md-7" : ""}`}>
                                    <h4>الوقت</h4>
                                    <div className="course-date-info">
                                        <h5>
                                            <i className="fa-solid fa-caret-left"></i>
                                            مسجلة في أي وقت
                                        </h5>
                                        <p>
                                            يمكن حضورها مسجلة في أي وقت على منصة التدريب الإلكتروني (تتاح لمدة <span className="en-txt">6</span> شهور)
                                        </p>
                                    </div>
                                    {
                                        courseData?.course?.zoom && (
                                            <div className="course-date-info">
                                                <h5>
                                                    <i className="fa-solid fa-caret-left"></i>
                                                    تفاعلي عبر <span className="en-txt ms-1">Zoom</span></h5>
                                                <p>
                                                    بشكل تفاعلي عبر <span className="en-txt ms-1">Zoom</span>
                                                    <span className="d-inline-block mx-1">{courseData?.course?.days_duration}</span>
                                                    ابتداء من
                                                    <span className="ms-1">{courseData?.course?.zoom_date && formatDate(courseData?.course.zoom_date)}</span>
                                                </p>
                                            </div>
                                        )
                                    }
                                </div>
                                {
                                    courseData?.course?.zoom && (
                                        <div className="col-12 col-md-5">
                                            <h2 className="mb-4">
                                                تبدأ الدورة التفاعلية
                                            </h2>
                                            <h2>
                                                القادمة بتاريخ
                                                <span className="ms-1">{courseData?.course?.zoom_date && formatDate(courseData?.course.zoom_date)}</span>
                                            </h2>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div id="trainee">
                        <div className="container custom-container h-100">
                            <div className="row align-items-center h-100">
                                <div className="col-12 col-md-6 section-padding ps-3 pe-5">
                                    <h4>المدرب</h4>
                                    <div className="trainee-info">
                                        <h5>
                                            <i className="fa-solid fa-caret-left me-3"></i>
                                            {courseData?.course.author_name}
                                        </h5>
                                        <div className="desc" dangerouslySetInnerHTML={{ __html: courseData?.course.author_info }} />
                                        <VideoPopup videoTitleIcon="fa-arrow-left-long" title={courseData?.course?.hours_count >= 20 ? "شاهد جانب من الدبلوم التدريبي" : "شاهد جانب من الدورة التدريبية"} style={2} videoId={courseData?.course.url && getYouTubeVideoID(courseData?.course.url)} />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 h-100 image-side video-wrapper p-0">
                                    <VideoPopup style={3} videoId={courseData?.course.url && getYouTubeVideoID(courseData?.course.url)} />
                                    <Image className="w-100 h-100 object-fit" src={`${courseData?.course.author_image || "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/training/course.jpg"}`} alt="course" />
                                    <Image width={85} height={68} src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/achievement/shape.png" className="shape" alt="shape" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="goals" className="section-padding">
                        <div className="container custom-container">
                            <h4 className="head-blue">هدف البرنامج</h4>
                            <div dangerouslySetInnerHTML={{ __html: courseData?.course.goals }} />
                            <h4 className="head-blue mt-4">المحاور</h4>
                            <div dangerouslySetInnerHTML={{ __html: courseData?.course.agenda }} />
                        </div>
                    </div>
                    <div id="testimonials" className="section-padding">
                        <div className="container custom-container">
                            <div className="row h-100">
                                <div className="col-12 col-md-6 video-wrapper">
                                    <h4>آراء المتدربين </h4>
                                    <div className="video-wrapper">
                                        <VideoPopup style={3} videoId={courseData?.video && getYouTubeVideoID(courseData?.course?.opinion_video)} />
                                        <Image className="w-100 object-fit border-radius-8" src={courseData?.course?.opinion_video_image} alt="course" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <CourseTestimonialSlider data={courseData?.testimonials} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="cost">
                        <div className="container custom-container">
                            <div className={`row ${courseData?.course?.zoom ? "" : "gap-4"}`}>
                                <div className={`col-12 ${courseData?.course?.zoom ? "col-lg-4" : "col-lg-5"} mt-5 pt-4`}>
                                    <h4 className="head-blue">التكلفة</h4>
                                    <p className="mb-4">
                                        تشمل الأسعار حضور <span className="en-txt">{courseData?.course?.hours_count}</span>  ساعة تدريبية (<span className="en-txt">{courseData?.course?.sessions_count}</span> محاضرة) إما بشكل تفاعلي مع المدرب أو مسجلة على منصة التدريب الإلكتروني
                                        بالإضافة إلى الميزات الموضحة.
                                    </p>
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="wow fadeInUp  hover-outlined-btn" data-wow-delay=".4s">
                                        <i className="fa-brands fa-whatsapp me-3"></i>
                                        تواصل معنا للمساعدة
                                    </a>
                                </div>
                                <div className={`row col-12 ${courseData?.course?.zoom ? "col-lg-8" : "col-lg-5"} mt-5 mt-lg-0`}>
                                    <div className={`col-12 ${courseData?.course?.zoom ? "col-md-6" : ""}`}>
                                        <div className="price-card">
                                            <h4 className="head-blue">مسجل</h4>
                                            <div className="price-wrap en-txt mb-4">
                                                {courseData?.course.live_price && (
                                                    <>
                                                        <span className="discount">$</span>
                                                        <span className="discount">{courseData?.course.live_price}</span>
                                                    </>
                                                )}
                                                {courseData?.course.live_price_discount && (
                                                    <>
                                                        <span className="ms-2"></span>
                                                        <span className="price">$</span>
                                                        <span className="price">{courseData?.course.live_price_discount}</span>
                                                    </>
                                                )}
                                            </div>
                                            <div className="card-info mb-5" dangerouslySetInnerHTML={{ __html: courseData?.course.live_benefits }} />
                                            <a className="wow fadeInUp hover-btn" data-wow-delay=".4s" href={`${courseData?.course.recorded_url}${urlParams}`}>ابدأ الآن</a>
                                        </div>
                                    </div>
                                    {
                                        courseData?.course?.zoom && (
                                            <div className="col-12 col-md-6 mt-5 mt-md-0">
                                                <div className="price-card recommend">
                                                    <h4 className="head-blue">تفاعلي عبر <span className="en-txt">Zoom</span></h4>
                                                    <div className="price-wrap en-txt mb-4">
                                                        {courseData?.course.zoom_price_discount && (
                                                            <>
                                                                <span className="discount">$</span>
                                                                <span className="discount">{courseData?.course.zoom_price_discount}</span>
                                                            </>
                                                        )}
                                                        {courseData?.course.zoom_price && (
                                                            <>
                                                                <span className="ms-2"></span>
                                                                <span className="price">$</span>
                                                                <span className="price">{courseData?.course.zoom_price}</span>
                                                            </>
                                                        )}
                                                    </div>
                                                    <h5 className="mb-3">* خصم {courseData?.course?.discount && <span className="en-txt">{courseData?.course?.discount}%</span>} إضافي عند الدفع مبكراً</h5>
                                                    <div className="card-info mb-5" dangerouslySetInnerHTML={{ __html: courseData?.course.zoom_benefits }} />
                                                    <a className="wow fadeInUp hover-btn" data-wow-delay=".4s" href={`${courseData?.course.live_url}${urlParams}`}>احجز مقعدك</a>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
