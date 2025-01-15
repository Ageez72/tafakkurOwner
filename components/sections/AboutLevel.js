import VideoPopup from "../elements/VideoPopup"
import { formatDate } from "@/helpers";
import { getYouTubeVideoID } from "@/helpers";
import Image from "next/image";

export default function AboutLevel({ data, level }) {

    return (
        <div className="about-publishers academy">
            <div className="section-padding academy-list-review pb-0">
                <div className="container custom-container position-relative pb-80">
                    <Image width={85} height={68} className="shape right" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/tafakkurAcademy/shape.png" alt="shape" />
                    <h2 className="head-blue mb-4">تفاصيل الوقت والمكان</h2>
                    <p className="black-txt mb-5">ابتداءً من <span>{data?.next_date && formatDate(data?.next_date )}</span> ولمدة ثمانية أشهر بمعدّل حصتين أسبوعياً
                        عن بعد عبر <span className="en-txt">Zoom</span> في الأوقات التالية</p>
                    <div className="row">
                        <ul className="academy-list list arrow-bullet col-12 col-md-6">
                            {
                                data?.schedule?.map((item, i) => (
                                    <li key={i} className="test">
                                        <i className="fa-solid fa-caret-left"></i>
                                        <span>{item}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className="academy-list list no-bulltes col-12 col-md-6">
                            <li className="black-txt">ملاحظات</li>
                            <li>الحصص بتوقيت مكة المكرمة</li>
                            <li>مدة الحصة الواحدة <span className="en-txt">45 - 50</span> دقيقة</li>
                            <li>اختيار الشعبة يكون أثناء تعبئة نموذج التسجيل</li>
                        </ul>
                    </div>
                    <div className="reviews-video-wrapper">
                        <div className="video-wrapper m-auto mt-5">
                            {/* <div className="overlay"></div> */}
                            <VideoPopup style={3} videoId={data?.study_video && getYouTubeVideoID(data?.study_video)}></VideoPopup>
                            <Image className="w-100 h-100 object-fit" src={data?.study_video_image} alt="reviews" />
                        </div>
                        <div className="parents-said mt-4">
                            <div className="row">
                                <div className="col-md-6 col-12 mb-3">
                                    <h2 className="head-blue">ماذا يقول أهالي طلاب المستوى<span className="d-inline-block mx-1">{level}</span>عن البرنامج؟</h2>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="review-desc">
                                        <p>
                                            شاهد آراءً مسجلة لعدد من أهالي
                                            الطلاب المسجلين في دوراتنا السابقة
                                        </p>
                                        <span className="book-seat-btn d-block mt-2">
                                            <VideoPopup videoTitleIcon="fa-caret-left" title={"شاهد الفيديو"} style={2} videoId={data?.study_video && getYouTubeVideoID(data?.study_video)} />
                                        </span>
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
