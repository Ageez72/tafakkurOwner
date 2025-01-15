"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import en from "../../../locales/en.json";
import ar from "../../../locales/ar.json";
import { faSquareXTwitter, faLinkedin, faYoutube, faWhatsappSquare, faSquareFacebook, faSquareInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer1() {
  const { state } = useAppContext();
  const translation = state.LANG === "en" ? en : ar;
  const [footerData, setFooterData] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", state.LANG);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const fetchData = async () => {
      try {
        const res = await fetch(
          `${state.HTTP_URL}info`,
          requestOptions
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await res.json();
        setFooterData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [state.LANG]);
  return (
    <>
      <footer className="footer-section footer-bg">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" />
        </svg>
      </div>
        <div className="footer-widgets-wrapper">
          <div className="container custom-container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 pe-lg-5 wow fadeInUp mb-4" data-wow-delay=".3s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>عن تفكر</h3>
                  </div>
                  <div className="footer-content">
                    <p className="clamp clamp-4">
                      تفكر مؤسسة بحث وتدريب وتطوير
                      علمي تربوي تأسست عام <span className="en-txt">2008</span> في
                      الأردن، تسعى لبناء الإنسان القادر على
                      صناعة الحضارة، وتهيئة البيئات التربوية
                      اللازمة لتحقيق ذلك.

                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp mb-4" data-wow-delay=".5s">
                <div className="single-footer-widget style-margin">
                  <div className="widget-head">
                    <h3 className="opacity-0"></h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link href="/tafakkur-curriculum">
                        <i className="fa-solid fa-chevron-right" />
                        تفكر في التعليم
                      </Link>
                    </li>
                    <li>
                      <Link href="/tafakkur-training">
                        <i className="fa-solid fa-chevron-right" />
                        تفكر للتدريب
                      </Link>
                    </li>
                    <li>
                      <Link href="/tafakkur-publishers">
                        <i className="fa-solid fa-chevron-right" />
                        تفكر ناشرون
                      </Link>
                    </li>
                    <li>
                      <Link href="/tafakkur-academy">
                        <i className="fa-solid fa-chevron-right" />
                        أكاديمية تفكر
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us">
                        <i className="fa-solid fa-chevron-right" />
                        تواصل معنا
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                <div className="single-footer-widget style-margin">
                  <div className="widget-head">
                    <h3>تواصل معنا</h3>
                  </div>
                  <ul className="list-area">
                    <li className="en-txt">
                      <a href={`mailto:${footerData?.email}`} className="en-txt">
                        {footerData?.email}
                      </a>
                    </li>
                    <li className="en-txt" dir="ltr">
                      <a href={`tel:${footerData?.phone}`} className="en-txt">
                        {footerData?.phone}
                      </a>
                    </li>
                  </ul>
                  <div className="socials">
                    <a href={`https://wa.me/${footerData?.whats}`} target="_blank">
                      <FontAwesomeIcon icon={faWhatsappSquare} />
                    </a>
                    <a href={footerData?.youtube} target="_blank">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href={footerData?.linkedin} target="_blank">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href={footerData?.twitter} target="_blank">
                      <FontAwesomeIcon icon={faSquareXTwitter} />
                    </a>
                    <a href={footerData?.instagram} target="_blank">
                      <FontAwesomeIcon icon={faSquareInstagram} />
                    </a>
                    <a href={footerData?.facebook} target="_blank">
                      <FontAwesomeIcon icon={faSquareFacebook} />
                    </a>
                  </div>
                  <a className="join-tafakuur-comunity" href={`https://t.me/+${footerData?.telegram}`} target="_blank">
                    <FontAwesomeIcon icon={faTelegram} />
                    <span className="mx-2">انضم إلى مجتمع تفكر</span>
                    <i className="fa-solid fa-chevron-left"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom style-2">
          <div className="container custom-container">
            <div className="footer-wrapper text-center">
              {
                state.LANG == 'en' ? (
                  <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                    جميع الحقوق محفوظة © <span className="en-txt">{new Date().getFullYear()}</span> لمؤسسة تفكر
                  </p>
                ) : (
                  <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                    جميع الحقوق محفوظة © <span className="en-txt">{new Date().getFullYear()}</span> لمؤسسة تفكر
                  </p>
                )
              }
            </div>
          </div>
          <div onClick={scrollToTop} id="scrollUp" className="scroll-icon">
            <i className="far fa-arrow-up" />
          </div>
        </div>
      </footer>
    </>
  );
}
