import { useState, useEffect } from 'react'
import { getUrlParams } from '@/helpers';
import Image from 'next/image';

export default function AnosManager() {
    const [urlParams, setUrlParams] = useState("");
    
    useEffect(() => {
        
        const storedParams = getUrlParams();
        setUrlParams(storedParams || "");
    }, []);
    return (
        <section className='home-quote anos-manager pt-5'>
            <div className='container custom-container position-relative'>
                <div className='row align-items-center'>
                    <div className='col-12 col-lg-6'>
                        <h3 className='white-txt'>
                            تعرف إلى مبتكرة منهاج تفكر!
                        </h3>
                        <div className='mb-5 mt-3'>
                            <Image width={130} height={38} className="signature" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/home/maha-arabic-signature.png" alt="maha arabic signature" />
                        </div>
                        <p className='white-txt'>خبيرة بناء الشخصية وفق أبحاث الدماغ ومبتكرة نموذج التفكر التعليمي
                        </p>
                        <p className='white-txt'>
                            حاصلة على عدة جوائز عالمية ولها أكثر من 65 إصدار باللغتين العربية والإنجليزية
                        </p>
                        <div className='mb-5 mt-3 img-logos'>
                            <Image width={100} height={99} src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/جائزة-مها-شحادة-كندا.png" alt="جائزة مها شحادة كندا" />
                            <Image width={100} height={99} className="ms-3" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/الجوائز-مها-شحاده.png" alt="جائزة مها شحادة" />
                        </div>
                        <p className='white-txt mb-4'>
                            <a href={`https://mahashehadeh.com${urlParams}`} target='_blank' className='d-inline-flex align-items-center white-txt'>
                                الموقع الرسمي للأستاذة مها شحاده
                                <i className="fa-solid fa-arrow-left ms-2"></i>
                            </a>
                        </p>
                    </div>
                    <div className='col-12 col-lg-6 text-center'>
                        <Image width={400} height={400} className="maha-img" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/home/maha.png" alt="مها شحاده" />
                    </div>
                </div>
            </div>
        </section>
    )
}
