import Image from 'next/image'
export default function ApplyMenhag() {
    return (
        <section className='apply-menhag'>
            <div className="container section-padding position-relative">
                <Image width={85} height={68} className="shape top" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/shape.png" alt="shape" />
                <h2 className='head-blue text-center mb-5'>
                    طبق منهاج تفكر في مؤسستك واحصل على
                </h2>
                <div className='row justify-content-center gap-4'>
                    <div className='col-side'>
                        <span className="side-icon">
                            <i className="fa-solid fa-book"></i>
                        </span>
                        <h3>كتب الطالب</h3>
                        <p>خمس مستويات متسلسلة</p>
                    </div>
                    <div className='col-side'>
                        <span className="side-icon">
                            <i className="fa-solid fa-bag-shopping"></i>
                        </span>
                        <h3>حقائب معلم</h3>
                        <p>لكل مستوى حقيبة مختلفة</p>
                    </div>
                    <div className='col-side'>
                        <span className="side-icon">
                            {/* <i className="fa-solid fa-person-chalkboard"></i> */}
                            <i className="fa-solid fa-chalkboard-user"></i>
                        </span>
                        <h3>تدريب للمعلمين</h3>
                        <p>برامج تستند لعلم الأعصاب</p>
                    </div>
                </div>
                <div className='row justify-content-center gap-4 mt-4'>
                    <div className='col-side'>
                        <span className="side-icon">
                            <i className="fa-solid fa-chart-simple"></i>
                        </span>
                        <h3>معايير لتقييم الأداء</h3>
                        <p>معايير علمية لمعلم الإبداع</p>
                    </div>
                    <div className='col-side'>
                        <span className="side-icon">
                            <i className="fa-solid fa-headset"></i>
                        </span>
                        <h3>متابعة مستمرة  مختصين</h3>
                        <p>إشراف من قبل مؤسسة تفكر</p>
                    </div>
                    <div className='col-side'>
                        <span className="side-icon">
                            <i className="fa-solid fa-photo-film"></i>
                        </span>
                        <h3>موقع تعليم إلكتروني</h3>
                        <p>لدعم الحصص بالصوت والصورة</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
