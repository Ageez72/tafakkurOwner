import Image from "next/image";
import Link from "next/link";
const imageArr = ["https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/categories/image1.jpg", "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/categories/image2.jpg", "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/categories/image3.jpg", "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/categories/image4.jpg"]
export default function AnosSuccessStories() {
    return (
        <>
            <div className="success-stories-wrapper pt-3 image-full">
                <div className="about-tafakkur-training-bg">
                    <div className="container custom-container h-100">
                        <div className="row g-4 align-items-center h-100">
                            <div className="col-lg-4 mb-4">
                                <div className="about-tafakuur-content pe-4 pe-lg-3 pe-xl-5 ps-0">
                                    <h2 className="head-blue mb-4">قصص نجاح</h2>
                                    <p className="about-tafakuur-desc">
                                        اطلع إلى تجارب الإدارات والمعلمين والطلاب
                                        وأهاليهم في تطبيق منهاج تفكر في
                                        مختلف الدول.
                                    </p>
                                    <Link className="hover-btn me-3 d-inline-flex align-items-center mt-5" href="/client-testimonial">
                                        <i className="fa-solid fa-video me-2"></i>
                                        اطلع إلى تجارب المطبقين
                                        <i className="fa-solid fa-arrow-left ms-2"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8 mt-0 pe-0">
                            <div className="slider-side">
                                <div className="about-tafakuur-image h-100">
                                    <Image width={933} height={313} className="w-100 h-100 object-fit" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/story.jpg" alt="success story" />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
