import Link from 'next/link';
import { useState, useEffect } from 'react'
import { getUrlParams } from '@/helpers';

export default function BookSeat({ sonSeat }) {
    const [urlParams, setUrlParams] = useState("");

    useEffect(() => {
        
        const storedParams = getUrlParams();
        setUrlParams(storedParams || "");
    }, []);
    return (
        <>
            <section className="book-seat-section section-padding pb-100">
                <div className="container custom-container">
                    <div className='row'>
                        <div className='col-md-6 wow fadeInUp' data-wow-delay=".5s">
                            <div className='content'>
                                {
                                    sonSeat ? (
                                        <h2>احجز مقعدك الآن في أقرب برنامج تدريبي!</h2>
                                    ) : (
                                        <h2>احجز مقعدك في أقرب دورة!</h2>
                                    )
                                }
                                <p>تواصل معنا الآن للتسجيل أو للحصول على المساعدة</p>
                            </div>
                        </div>
                        <div className='col-md-6 wow fadeInUp' data-wow-delay=".5s">
                            <div className='action-buttons text-center mt-5 mt-md-0'>
                                <Link href='https://wa.link/fgespd' target='_blank' className='hover-outlined-btn me-3'>
                                    <i className="fa-brands fa-whatsapp me-2"></i>
                                    تواصل معنا
                                </Link>
                                <Link href='https://wa.link/fgespd' target='_blank' className='hover-btn '>سجل الآن</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
