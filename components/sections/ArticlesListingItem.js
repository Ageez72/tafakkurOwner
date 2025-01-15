"use client";
import Link from "next/link";
import Image from "next/image";
import { getYouTubeVideoID, formatDate } from "@/helpers";

export default function ArticlesListingItem({ id, title, date, categories, cover, desc }) {
  return (
    <>
      <div className="news-item mb-5">
        <h2><Link href={`/articles/${id}`}>{title}</Link></h2>
        <div className="news-info d-flex flex-wrap mb-4 mt-3 gap-3">
          <div className="news-date">
            <i className="fa-regular fa-clock me-2"></i>
            <span>{formatDate(date)}</span>
          </div>
          {
            categories.map((category) => (
              <div className="news-date" key={category.id}>
                <i className="fa-solid fa-rectangle-list me-2"></i>
                <span>{category.name}</span>
              </div>
            ))
          }
          {/* <div className="news-date">
            <i className="fa-regular fa-eye me-2"></i>
            <span>{formatDate(date)}</span>
          </div> */}
        </div>
        <div className="row news-content">
          <div className="col-md-3">
          <Link href={`/articles/${id}`} className="col-link">
            <Image loading="eager" src={cover} alt="cover" className="w-100" />
          </Link>
          </div>
          <div className="col-md-9 mt-4 mt-md-0">
            <div className="news-desc clamp clamp-4" dangerouslySetInnerHTML={{ __html: desc }} />
            <Link className="more-news" href={`/articles/${id}`}>المزيد</Link>
          </div>
        </div>
      </div>
    </>
  );
}
