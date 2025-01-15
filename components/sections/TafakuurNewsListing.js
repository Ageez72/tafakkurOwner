import Link from 'next/link';
import Image from "next/image";
import { formatDate } from "@/helpers";

export default function TafakuurNewsListing({ data, title, noPaddingBottom }) {
    return (
        <>
            {
                data && (
                    <div className={`training-new-wrapper section-padding ${noPaddingBottom ? "pb-0" : ""}`}>
                        <div className="container custom-container">
                            <h2>{title}</h2>
                            <div className='new-list'>
                                <div className='row'>
                                    {
                                        data?.map((news) => (
                                            <div key={news.id} className='col-md-4 wow fadeInUp' data-wow-delay=".55s">
                                                <div className="card">
                                                    <Link href={`/news/${news.slug}`}>
                                                        <Image loading="eager" src={news?.image} className="card-img-top" alt="news cover image" />
                                                    </Link>
                                                    <div className="card-body">
                                                        <Link href={`/news/${news.slug}`}>
                                                            <h5 className="card-title">{news?.title}</h5>
                                                        </Link>
                                                        <h6>
                                                            <span>{news?.date && formatDate(news?.date)}</span>
                                                        </h6>
                                                        <div className="card-text line-clamp line-2" dangerouslySetInnerHTML={{__html: news?.desc}} />                                                        <Link href={`/news/${news.slug}`} className="read-more">اقرأ المزيد</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='text-center'>
                                <Link href="/news" className="view-more-news mt-5 d-inline-block hover-outlined-btn">اعرض المزيد من الأخبار</Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}


