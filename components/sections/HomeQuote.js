import React from 'react'
import Image from 'next/image'
export default function HomeQuote() {
    return (
        <section className='home-quote section-padding'>
            <div className='container custom-container position-relative'>
                <Image
                    src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/contact/shape.png"
                    width={85}
                    height={68}
                    alt="shape"
                    className="shape top right"
                />
                <div className='row home-quote-row'>
                    <div className='col-12 col-lg-6'>
                        <h2 className='white-txt'>
                            <q>
                                إن تربية وبناء الإنسان الأخلاقي المبدع هو واجب لتحقيق النهضة، ولن ننجح إلا إذا خرجنا من التخبط والعشوائية وامتلكنا الأسس العلمية والتطبيقية لتربية هذه الشخصية
                            </q>
                        </h2>
                        <div className='mt-5 white-txt d-flex align-items-center gap-2 justify-content-end'>
                            <Image width={130} height={38} className="signature" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/home/maha-arabic-signature.png" alt="maha arabic signature" />
                            <span>،</span>
                            <span className='en-txt'>2008</span>
                        </div>
                        <p className='white-txt text-end'>مؤسس ومدير تنفيذي</p>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <Image width={460} height={460} className="maha" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/home/maha.png" alt="مها شحاده" />
                    </div>
                </div>
            </div>
        </section>
    )
}
