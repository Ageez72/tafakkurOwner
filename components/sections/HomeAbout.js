import React from 'react'
import Link from 'next/link';
import VideoPopup from '../elements/VideoPopup';
import { getYouTubeVideoID } from "@/helpers";

export default function HomeAbout({data}) {
    return (
        <section className='home-about'>
            <div className='container custom-container'>
                <div className='section-padding'>
                    <h3 className='head-blue mb-4'>مؤسسة تفكر</h3>
                    <h2 className='head-blue mb-4'>لإعداد الإنسان الأخلاقي المبدع الذي ينهض بوطنه ومجتمعه</h2>
                    <p>تمكن المحاضن التربوية من بناء الشخصية الإبداعية الأخلاقية القادرة على التطوير وتحقيق النهضة عبر تقديم حلول علمية تطبيقية  تشمل البرامج التدريبية والمناهج والإصدارات ومنصات التعليم وعقد شراكات عمل مع المؤسسات المعنية.</p>
                    <div className='action-buttons mt-5'>
                        <Link href='/about-us' className='hover-btn me-3'>
                            المزيد عن تفكر
                        </Link>
                        <Link href='/contact-us' target='_blank' className='hover-outlined-btn '>انضم لشركائنا</Link>
                    </div>
                </div>
            </div>
            <div className='about-history section-padding text-center'>
                <h2 className='mb-4'>
                    <span className='en-txt'>15+ </span>
                    <span>عاماً على التأسيس</span>
                </h2>
                <p className='mb-5 w-md-50 px-3'>نسعى من خلال مؤسسة تفكر للأخذ بيد المؤسسات التعليمية والأسر للنجاح في تنمية إبداع الإنسان والارتقاء بسلوكه وفق أحدث نظريات وأبحاث الدماغ.</p>
                <VideoPopup shapeIcon={true} color={"fff"} style={3} videoId={data?.videos[0].video && getYouTubeVideoID(data?.videos[0].video)} />
            </div>
        </section>
    )
}
