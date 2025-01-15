import Link from "next/link";
import Image from "next/image";

export default function AcademyLevels({ data }) {
  const storeSlugsHandler = (id, slug) => {
    localStorage.setItem("level-id", id);
    localStorage.setItem("level-slug", slug);
  };

  return (
    <section className="academy-levels section-padding">
      <div className="container custom-container">
        <h2 className="head-blue mb-2">تعرف أكثر إلى المستويات </h2>
        <p className="custom-title">اختر العمر الذي يناسب ابنك</p>
        <div className="row justify-content-between align-items-center mt-4">
          <div className="col-12 col-lg-6">
            <button
              className="w-100"
              onClick={() => storeSlugsHandler(data && data[0]?.id)}
            >
              <Link
                className="level-link level-1 wow fadeInUp"
                data-wow-delay=".75s"
                href={`tafakkur-academy/levels/${data && data[0]?.slug}`}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="d-flex align-items-center white-txt">
                    <span>{data && data[0]?.name}</span>
                    <i className="fa-solid fa-arrow-left ms-2"></i>
                  </h4>
                  <span className="for-age">
                    لعمر <span className="en-txt">6</span> سنوات
                  </span>
                </div>
              </Link>
            </button>
            <button
              className="w-100"
              onClick={() => storeSlugsHandler(data && data[1]?.id)}
            >
              <Link
                className="level-link level-2 wow fadeInUp"
                data-wow-delay=".75s"
                href={`tafakkur-academy/levels/${data && data[1]?.slug}`}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="d-flex align-items-center white-txt">
                    <span>{data && data[1]?.name}</span>
                    <i className="fa-solid fa-arrow-left ms-2"></i>
                  </h4>
                  <span className="for-age">
                    لعمر <span className="en-txt">7</span> سنوات
                  </span>
                </div>
              </Link>
            </button>
            <button
              className="w-100"
              onClick={() => storeSlugsHandler(data && data[2]?.id)}
            >
              <Link
                className="level-link level-3 wow fadeInUp"
                data-wow-delay=".75s"
                href={`tafakkur-academy/levels/${data && data[2]?.slug}`}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="d-flex align-items-center white-txt">
                    <span>{data && data[2]?.name}</span>
                    <i className="fa-solid fa-arrow-left ms-2"></i>
                  </h4>
                  <span className="for-age">
                    لعمر <span className="en-txt">8</span> سنوات
                  </span>
                </div>
              </Link>
            </button>
            <button
              className="w-100"
              onClick={() => storeSlugsHandler(data && data[3]?.id)}
            >
              <Link
                className="level-link level-4 wow fadeInUp"
                data-wow-delay=".75s"
                href={`tafakkur-academy/levels/${data && data[3]?.slug}`}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="d-flex align-items-center white-txt">
                    <span>{data && data[3]?.name}</span>
                    <i className="fa-solid fa-arrow-left ms-2"></i>
                  </h4>
                  <span className="for-age">
                    لعمر <span className="en-txt">9 - 11</span> سنوات
                  </span>
                </div>
              </Link>
            </button>
            <button
              className="w-100"
              onClick={() => storeSlugsHandler(data && data[4]?.id)}
            >
              <Link
                className="level-link level-5 wow fadeInUp"
                data-wow-delay=".75s"
                href={`tafakkur-academy/levels/${data && data[4]?.slug}`}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="d-flex align-items-center white-txt">
                    <span>{data && data[4]?.name}</span>
                    <i className="fa-solid fa-arrow-left ms-2"></i>
                  </h4>
                  <span className="for-age">
                    للأعمار <span className="en-txt">12 - 13</span> سنوات
                  </span>
                </div>
              </Link>
            </button>
          </div>
          <div className="col-12 col-lg-5 imgs-side">
            <div className="d-sm-flex align-items-center">
              <div className="h-100 one-img mb-sm-0 mb-4">
                <Image
                  src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/tafakkurAcademy/level3.png"
                  alt="level image"
                  width={200}
                  height={300}
                  className="border-radius-8"
                />
              </div>
              <div className="ms-sm-4">
                <div className="two-imgs mb-4">
                  <Image
                    src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/tafakkurAcademy/level4.png"
                    alt="level image"
                    width={225}
                    height={245}
                    className="border-radius-8"
                  />
                </div>
                <div className="two-imgs">
                  <Image
                    src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/tafakkurAcademy/level5.png"
                    alt="level image"
                    width={225}
                    height={245}
                    className="border-radius-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
