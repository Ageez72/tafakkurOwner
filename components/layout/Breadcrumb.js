import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";
import Image from "next/image";

export default function Breadcrumb({
  breadcrumbTitle,
  bannerBg,
  parentrumb,
  parentrumbRoute,
  versionsBtn,
  btnRoute,
  allVersionsDesc,
  noBreadcrumbItem,
  noWave,
  bigSubTitle,
  shapeImg
}) {
  const { state } = useAppContext();
  const translation = state.LANG === "en" ? en : ar;
  const bgImage = bannerBg
    ? `url(${bannerBg})`
    : 'url("assets/img/breadcrumb.jpg")';
  return (
    <>
      <div
        className={`breadcrumb-wrapper bg-cover ${shapeImg && "shape-img"}`}
        style={{ backgroundImage: bgImage }}
        parentrumb={parentrumb}
      >
        {shapeImg && (
          <Image
          src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/contact/shape.png"
          width={85}
          height={68}
          alt="shape"
          className="shape"
        />
        )}
        <div className="overlay"></div>
        <div className="container custom-container">
          <div className="page-heading">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              {breadcrumbTitle}
            </h2>
            {bigSubTitle ? (
              allVersionsDesc && (
                <h2 className="all-versions wow fadeInUp mt-4">{allVersionsDesc}</h2>
              )
            ) : (
              allVersionsDesc && (
                <h4 className="all-versions-desc wow fadeInUp mt-4">{allVersionsDesc}</h4>
              )
            )}
            {versionsBtn && (
              <Link href={btnRoute} className="text-white d-inline-block py-3 mt-4 hover-btn position-relative wow fadeInUp">{versionsBtn}</Link>
            )}
            {
              !noBreadcrumbItem && (
                <ul className="breadcrumb-items" data-wow-delay=".5s">
                  <li>
                    <Link href="/">{translation.home}</Link>
                  </li>
                  {parentrumb && (
                    <>
                      <li>
                        <i className="fas fa-chevron-left" />
                      </li>
                      <li>
                        <Link
                          href={`/${parentrumbRoute}`}
                          className="text-capitalize"
                        >
                          {parentrumb}
                        </Link>
                      </li>
                    </>
                  )}
                  <li>
                    <i className="fas fa-chevron-left" />
                  </li>
                  <li>{breadcrumbTitle}</li>
                </ul>
              )
            }
          </div>
        </div>
        {
          !noWave && (
            <div className="wave-wrapper">
              <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path></svg>
            </div>
          )
        }
      </div>
    </>
  );
}
