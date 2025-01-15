import VideoPopup from "../elements/VideoPopup";
import { getYouTubeVideoID, getUrlParams } from "@/helpers";
import { useState, useEffect } from 'react';
import Image from "next/image";

export default function AboutAcademy({data}) {
    const [urlParams, setUrlParams] = useState("");
    
    useEffect(() => {
        
        const storedParams = getUrlParams();
        setUrlParams(storedParams || "");
    }, []);
    return (
        <div className="about-publishers academy">
            <div className="container custom-container">
                <div className="row align-items-center about-publishers-content">
                    <div className="col-12 col-md-2 text-center mb-lg-0 mb-4">
                        <Image loading="eager" width={145} height={85} className="w-100 max-150" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/tafakkurAcademy/orange-logo.png" alt="logo-color" />
                    </div>
                    <div className="col-12 col-md-10 ps-5 text-side">
                        <h3 className="mb-3">عن أكاديمية تفكر </h3>
                        <p>
                            منصة لتدريس منهاج تفكر للأبناء عن بعد ، ليستفيدوا أينما كانوا من عمق المنهاج في بناء شخصيتهم الإبداعية الأخلاقية، وبناء إيمانهم من خلال التفكر في آثار أسماء الله الحسنى لغرس محبة الله، للأعمار <span className="en-txt">6 - 14</span> سنة.
                        </p>
                    </div>
                </div>
            </div>
            <div className="section-padding  academy-list-review">
                <div className="container custom-container">
                    <h2 className="head-blue mb-4">لماذا ينضم أكثر من <span className="en-txt">500</span> طالب سنوياً لدورات تفكر مع أنوس للأبناء؟</h2>
                    <p className="custom-title mb-5">يعمل البرنامج في مستوياته الخمس على.. </p>
                    <div className="row">
                        <ul className="academy-list list col-12 col-md-6">
                            <li>بناء الإيمان بالحب والعلاقة الإيجابية بين الطفل وربه من خلال عبادة التفكر و أسماء الله الحسنى.</li>
                            <li>تعزيز الأصالة والهوية الإسلامية وفخر الانتماء لها</li>
                            <li>تنمية الثقة بالنفس وقوة الشخصية والمرونة النفسية</li>
                            <li>تطوير سلوك الطالب وإقباله على القيام بالطاعات</li>
                            <li>اكتشاف وتنمية ذكاءات الطالب المرتفعة</li>
                        </ul>
                        <ul className="academy-list list col-12 col-md-6">
                            <li>تنمية إبداع الطالب وموهبته</li>
                            <li>تقوية اللغة العربية - لغة القرآن الكريم</li>
                            <li>فهم المشاعر والقدرة على التعبير عنها</li>
                            <li>التفكير المنطقي والقدرة على المشكلات</li>
                            <li>القدرة على الابتكار </li>
                            <li>التحصين من المثلية والإلحاد</li>
                        </ul>
                    </div>
                    <div className="reviews-video-wrapper">
                        <div className="video-wrapper m-auto mt-5">
                            <div className="overlay"></div>
                            <VideoPopup style={3} videoId={data && getYouTubeVideoID(data[1]?.video)} ></VideoPopup>
                            <Image className="w-100 h-100 object-fit" src={data && data[1]?.image} alt="reviews" />
                        </div>
                        <div className="parents-said mt-4">
                            <div className="row">
                                <div className="col-md-6 col-12 mb-3">
                                    <h2 className="head-blue">ماذا يقول أهالي الطلاب</h2>
                                    <h2 className="head-blue">عن البرنامج؟</h2>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="review-desc">
                                        <p>
                                            شاهد آراءً مسجلة لعدد من أهالي
                                        </p>
                                        <p>
                                            الطلاب المسجلين في دوراتنا السابقة
                                        </p>
                                        <a href={`https://zfrmz.com/o9ZSobK0CpnlzJ1K2yTR?utm_source=${localStorage?.getItem("utm_source") || ''}`} className="book-seat-btn d-block mt-2">
                                            احجز مقعداً لابنك الآن
                                            <i className="fa-solid fa-caret-left ms-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
