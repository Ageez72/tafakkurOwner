import Image from 'next/image';
import VideoPopup from "../elements/VideoPopup";
import { getYouTubeVideoID } from "@/helpers";
import { useEffect, useState } from 'react';

export default function AnosLevelsEffects({ data }) {
    const [localStorage, setLocalStorage] = useState({});

    useEffect(() => {
        setLocalStorage(window.localStorage);
        console.log(window.localStorage);
    }, []);

    return (
        <section className="anos-levels-effects">
            <div className="bg-color">
                <div className="container">
                    <h2 className="head-blue text-center mb-2">خمس مستويات متسلسلة متراكمة للأعمار <span className="en-txt">5 - 12</span> سنة</h2>
                    <p className="text-center">
                        تطبق من خلال حصص تعليمية مستقلة من قبل معلمي المدارس والمراكز المطبقة
                    </p>
                    <div className="anos-levels">
                        <div className="row justify-content-center mt-5">
                            <div className="col-12 col-md-6 col-lg-4 my-3 col-wrapper">
                                <div className="level-side">
                                    <div className="card-avatar">
                                        <Image fill={true} src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/1.jpg" alt="avatar image" />                                    </div>
                                    <div className="card-hover-cover">
                                        <h3 className="white-txt">المستوى الأول</h3>
                                        <h3 className="white-txt my-3">أنا إنسان مميز</h3>
                                        <p className="white-txt">
                                            للفئة العمرية
                                            <span className="en-txt mx-2">5-6</span>
                                            سنوات
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 my-3 col-wrapper">
                                <div className="level-side">
                                    <div className="card-avatar">
                                        <Image fill={true} src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/2.jpg" alt="avatar image" />                                    </div>
                                    <div className="card-hover-cover">
                                        <h3 className="white-txt">المستوى الثاني</h3>
                                        <h3 className="white-txt my-3">أنا أحبكم</h3>
                                        <p className="white-txt">للفئة العمرية <span className="en-txt">7</span> سنوات </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 my-3 col-wrapper">
                                <div className="level-side">
                                    <div className="card-avatar">
                                        <Image fill={true} src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/3.jpg" alt="avatar image" />
                                    </div>
                                    <div className="card-hover-cover">
                                        <h3 className="white-txt">المستوى الثالث</h3>
                                        <h3 className="white-txt my-3">جمال الاختلاف</h3>
                                        <p className="white-txt">للفئة العمرية <span className="en-txt">8</span> سنوات </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 my-3 col-wrapper">
                                <div className="level-side">
                                    <div className="card-avatar">
                                        <Image fill={true} src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/4.jpg" alt="avatar image" />
                                    </div>
                                    <div className="card-hover-cover">
                                        <h3 className="white-txt">المستوى الرابع</h3>
                                        <h3 className="white-txt my-3">أفكاري ومشاعري</h3>
                                        <p className="white-txt">للفئة العمرية <span className="en-txt">9</span> سنوات</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 my-3 col-wrapper">
                                <div className="level-side">
                                    <div className="card-avatar">
                                        <Image fill={true} src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/5.jpg" alt="avatar image" />
                                    </div>
                                    <div className="card-hover-cover">
                                        <h3 className="white-txt">المستوى الخامس</h3>
                                        <h3 className="white-txt my-3">قوتي الذهنية</h3>
                                        <p className="white-txt">للفئة العمرية <span className="en-txt">10</span> سنوات</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 my-3 col-wrapper">
                                <div className="level-side">
                                    <div className="card-avatar">
                                        <Image fill={true} src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/تفكر-مع-انوس-انجليزي.png" alt="avatar image" />
                                    </div>
                                    <div className="card-hover-cover">
                                        <h3 className="white-txt">المستويات الخمس</h3>
                                        <h3 className="white-txt my-3">باللغة الإنجليزية</h3>
                                        <p className="white-txt">متاحة الآن</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="levels-available pt-5">
                            <div className="row align-items-end">
                                <div className="col-12 col-md-6 titles">
                                    <h2 className="head-blue mb-2">متوفر الآن بالعربية والإنجليزية!</h2>
                                    <p>طبّق منهاج تفكر مع أنوس في مؤسستك الآن</p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="action-buttons d-flex align-items-center justify-content-center flex-wrap">
                                        <a className="hover-outlined-btn d-inline-block py-1 me-3 mt-3"  href={`https://forms.zohopublic.com/tafakkur/form/Untitled19/formperma/ZwPaVDv5Ld5kLqH7iN28BBABGeQ4CqON5AF5LrFYrY4?utm_source=${localStorage?.utm_source}`}>
                                            <i className="fa-solid fa-download me-2"></i>
                                            حمل البروشور التعريفي
                                        </a>
                                        <a className="hover-btn d-inline-block py-1 mt-3" href="https://wa.link/zab3la">
                                            استفسر عن التطبيق
                                        </a>
                                    </div>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="anos-effects">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-4 col-xl-3 ps-md-5 img-side">
                            <div className="wow fadeInUp video-wrapper text-center" data-wow-delay=".4s">
                                <VideoPopup shapeIcon={true} style={3} videoId={data && data[1]?.video && getYouTubeVideoID(data[1].video)} />
                                <Image width={235} height={300} src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/effects.jpg" alt="avatar image" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 col-xl-9 ps-3 ps-md-5">
                            <p> نضمن لك ظهور التغيرات الإيجابية منذ العام الأول في التطبيق بإذن الله</p>
                            <h2 className="head-blue mt-3 mb-4">ما التغيرات الإيجابية التي ستظهر
                                على طلابك؟</h2>
                            <a className="hover-outlined-btn me-3 mt-3" href="/client-testimonial">
                                <i className="fa-solid fa-video me-2"></i>
                                    اطلع إلى تجارب المطبقين
                                <i className="fa-solid fa-arrow-left ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
