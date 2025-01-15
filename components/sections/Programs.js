import Link from 'next/link';
import Program from '../cards/Program';
import { useState, useEffect } from 'react'
import { getUrlParams } from '@/helpers';

function Programs({ data }) {
    const [urlParams, setUrlParams] = useState("");

    useEffect(() => {
        
        const storedParams = getUrlParams();
        setUrlParams(storedParams || "");
    }, []);
    return (
        <>
            <div className="container custom-container">
                <div className='programs-wrapper section-padding'>
                    <div className='text-center'>
                        <h2>4 برامج تدريبية أساسية لكل أم وأب ومربي</h2>
                    </div>
                    <div className='row mt-4 align-items-center'>
                        <div className='col-md-12 col-lg-3 col-xl-4 program-content wow fadeInUp ps-0 ps-md-4 ps-lg-5' data-wow-delay=".5s">
                            <h3>برامج الدبلوم التدريبية</h3>
                            <h4>أكثر من <span className='en-txt'>20</span> ساعة للبرنامج الواحد</h4>
                            <Link href="https://wa.link/fgespd" target='_blank'>تواصل معنا لحجز مقعدك في أقرب دورة <i className="fa-solid fa-chevron-left"></i></Link>
                        </div>
                        <div className='col-md-12 col-lg-9 col-xl-8 d-flex flex-wrap'>
                            <div className='col-12 col-md-6 px-2'>
                                <Program data={data && data.first_courses[0]} title={"الدبلوم التدريبي"} />
                            </div>
                            <div className='col-12 col-md-6 px-2'>
                                <Program data={data && data.first_courses[1]} title={"الدبلوم التدريبي"} />
                            </div>
                        </div>
                    </div>
                    <hr className='mt-5' />
                    <div className='row mt-4 align-items-center'>
                        <div className='col-md-12 col-lg-3 col-xl-4 program-content wow fadeInUp ps-0 ps-md-4 ps-lg-5' data-wow-delay=".5s">
                            <h3>الدورات التدريبية</h3>
                            <h4>أقل من <span className='en-txt'>20</span> ساعة للبرنامج الواحد</h4>
                            <Link href="https://wa.link/9a4i37" target='_blank'>سجل الأن و ابدأ التعلم مباشرة <i className="fa-solid fa-chevron-left"></i></Link>
                        </div>
                        <div className='col-md-12 col-lg-9 col-xl-8 d-flex flex-wrap p-0'>
                            <div className='col-12 col-md-6 px-2'>
                                <Program data={data && data.second_courses[0]} title={"الدورة التدريبية"} />
                            </div>
                            <div className='col-12 col-md-6 px-2'>
                                <Program data={data && data.second_courses[1]} title={"الدورة التدريبية"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Programs
