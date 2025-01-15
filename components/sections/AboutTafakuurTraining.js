import ImageSlider from "../slider/ImagesSlider";
import Image from "next/image";
export default function AboutTafakuurTraining({data}) {
    return (
        <>
            <div className="about-tafakkur-training-wrapper image-full">
                <div className="about-tafakkur-training-bg">
                    <div className="container custom-container h-100">
                        <div className="row g-4 align-items-center h-100">
                            <div className="col-lg-4 mb-4">
                                <div className="about-tafakuur-content pe-5 ps-4">
                                    <div className="about-tafakuur-logo mb-5 pb-4">
                                        <Image width={132} height={67} className="logo" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/categories/logo.png" alt="book icon" />
                                    </div>
                                    <h5 className="about-tafakuur-title mb-4">عن تفكر للتدريب</h5>
                                    <p className="about-tafakuur-desc">
                                                يقدم برامج تدريبية متطورة لبناء الإنسان، ترتكز إلى أحدث نظريات الدماغ وعلم الأعصاب، وتسند إلى علم النفس الإسلامي، لفهم وتطوير أعمق لتفكير ومشاعر وسلوك الإنسان، استفاد من البرامج التدريبية آلاف الأشخاص حول العالم.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-7 mt-0 slider-side pe-0">
                                <div className="about-tafakuur-image h-100">
                                    <ImageSlider images={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
