import Link from "next/link";
import Image from "next/image";
export default function HomeInstitutionsServices() {
    return (
        <section className='Home-institutions-services'>
            <div className="about-tafakkur-training-wrapper image-full">
                <div className="about-tafakkur-training-bg">
                    <div className="container custom-container h-100">
                        <Image
                            src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/contact/shape.png"
                            width={85}
                            height={68}
                            alt="shape"
                            className="shape"
                        />
                        <div className="row g-4 align-items-center h-100">
                            <div className="col-lg-5 mb-4">
                                <div className="about-tafakuur-content px-0 pe-lg-5 ps-lg-4">
                                    <h2 className="head-blue mb-4">خدمات المؤسسات</h2>
                                    <h3 className="head-blue mb-4 pe-lg-5">نقدم خدماتنا التربوية الفريدة للمؤسسات
                                        التعليمية في <span className='en-txt'>30</span> دولة </h3>
                                    <p className="about-tafakuur-desc mb-5">
                                        عبر <span className='en-txt'>28</span> عاماً من البحث والتطوير العلمي؛ قدمت مؤسسة تفكر منهجية تطبيقية مبتكرة من خلال برنامج تفكر لمساعدة المؤسسات التعليمية في بناء شخصية الطالب المتكاملة، بمنهجية أصيلة ومعاصرة، لتحسين وتعديل سلوكه، بناء إيمانه، وتنمية ذكاءه وإبداعه، وإعداد المعلم ليصبح مُربياً ومُعلما استراتيجياً يُوظف أحدث استراتيجيات التعليم وفق أبحاث الدماغ.
                                    </p>

                                    <Link href='/tafakkur-curriculum' className='hover-btn me-3'>
                                        المزيد عن منهاج تفكر
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-0 slider-side pe-0">
                                <div className="about-tafakuur-image h-100">
                                    <Image width={940} height={480} className='w-100 h-100 object-fit' src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/home/image1.jpg" alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
