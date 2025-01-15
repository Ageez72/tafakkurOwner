"use client";
import Link from "next/link";
import Image from "next/image";

export default function VersionCard({ data, index }) {
    console.log(data);
    return (
        <div className={`version-card-wrapper wow fadeInUp ${index ? "push-to-top" : ''}`} data-wow-delay=".5s">
            <div className="container custom-container">
                <h2 className="head-blue mb-4">{data?.name}</h2>
                <div className="version-cover">
                    <Image className="w-100" src={data?.image} alt="test" />
                </div>
                <div className="row align-items-center">
                    <div className="col-12 col-lg-9">
                        <div className="line-height-p mt-3" dangerouslySetInnerHTML={{ __html: data?.desc }} />
                    </div>
                    <div className="col-12 col-lg-3 mt-5 mt-lg-0 text-center">
                        {/* <button onClick={storeSlugsHandler}> */}
                            <Link className="hover-btn" href={`/tafakkur-publishers/categories/${data?.slug}`}>اطلع إلى السلسلة</Link>
                        {/* </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
