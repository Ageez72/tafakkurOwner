import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

export default function HomeFamilyServices() {
    return (
        <section className='home-family-services section-padding pb-0'>
            <div className='container'>
                <h2 className='head-blue mb-4'>خدمات الأسرة</h2>
                <p>نؤهل أفراد الأسرة؛ والدين وأبناء، عبر برامج تدريبية متنوعة وإصدارات فريدة ومنصات تعليمية ومحاضرات تفاعلية؛ ليساهموا كأفراد أخلاقيين ومبدعين في إحداث الأثر الإيجابي في الوطن والمجتمع.</p>
            </div>
            <div className='container-fluid'>
                <div className='row mt-5'>
                    <div className='col-12 col-lg-4 px-0 blue'>
                        <div className='cover position-relative'>
                            <div className='overlay op30'></div>
                            <Image width={635} height={250} className='w-100 h-100 object-fit' src='https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/home/image2.jpg' alt='image' />
                        </div>
                        <div className='content blue'>
                            <Image width={300} height={150} className='logo' src='https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/home/logo-blue.png' alt='image' />
                            <div className='desc'>
                                <p className='mb-4'>
                                    يقدم برامج تدريبية متطورة لبناء الإنسان، ترتكز إلى أحدث نظريات الدماغ وعلم الأعصاب، وتسند إلى علم النفس الإسلامي، لفهم وتطوير أعمق لتفكير ومشاعر وسلوك الإنسان، استفاد من البرامج التدريبية آلاف الأشخاص حول العالم.
                                </p>
                                <Link href="/tafakkur-training" className='d-inline-flex align-items-center hover-outlined-btn white-btn'>
                                    اطلع على البرامج التدريبية
                                    <i className="fa-solid fa-arrow-left-long ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-lg-4 px-0 green'>
                        <div className='cover position-relative'>
                            <div className='overlay op30'></div>
                            <Image width={635} height={250} className='w-100 h-100 object-fit' src='https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/home/image3.jpg' alt='image' />
                        </div>
                        <div className='content green'>
                            <Image width={300} height={150} className='logo' src='https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/home/logo-green.png' alt='image' />
                            <div className='desc'>
                                <p className='mb-4'>
                              يقدم تفكر ناشرون أكثر من ‎60‏ إصدار لمساعدة الأطفال واليافعين في بناء شخصيتهم ليكونوا مفكرين 
 مبدعين، يشعرون بقيمتهم ومتوازنين، مؤمنين محبين لله، إيجابيين وأخلاقيين، جميع الإصدارات ترتكز إلى 
 أحدث نظريات وأبحاث الدماغ.  </p>
                                <Link href="/tafakkur-publishers" className='d-inline-flex align-items-center hover-outlined-btn white-btn'>
                                    اطلع على الإصدارات
                                    <i className="fa-solid fa-arrow-left-long ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-lg-4 px-0 orange'>
                        <div className='cover position-relative'>
                            <div className='overlay op30'></div>
                            <Image width={635} height={250} className='w-100 h-100 object-fit' src='https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/home/image4.jpg' alt='image' />
                        </div>
                        <div className='content orange'>
                            <Image width={300} height={150} className='logo' src='https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/home/logo-orange.png' alt='image' />
                            <div className='desc'>
                                <p className='mb-4'>
                                     منصة لتدريس منهاج تفكر للأبناء عن بعد ، ليستفيدوا أينما كانوا من عمق المنهاج في بناء شخصيتهم الإبداعية الأخلاقية، وبناء إيمانهم من خلال التفكر في آثار أسماء الله الحسنى لغرس محبة الله، للأعمار 6-14 سنة.
                                </p>
                                <Link href="/tafakkur-academy" className='d-inline-flex align-items-center hover-outlined-btn white-btn'>
                                    سجل أبناءك في دورات تفكر
                                    <i className="fa-solid fa-arrow-left-long ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
