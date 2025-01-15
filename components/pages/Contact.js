"use client";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";
import ContactForm from '../sections/ContactForm';
import Image from "next/image";

export default function Contact() {
  const { state } = useAppContext();
  const translation = state.LANG === "en" ? en : ar;
  const [infoData, setInfoData] = useState(null);

  return (
    <>
      <section className="contact-section fix section-padding pb-0" id="contact">
        <div className="contact-wrapper-2">
          <div className="container custom-container">
            <div className="row flex-wrap-reverse g-4 align-items-">
              <div className="col-lg-9">
                <div className="contact-content">
                  <div className="section-title">
                    <h2>{translation.contact_us_title}</h2>
                  </div>
                  <ContactForm smPB={true}></ContactForm>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="contact-content mb-4">
                  <h2>العنوان</h2>
                  <p>
                    <span className="title">رقم الهاتف:</span>
                    <span className="value en-txt ms-1">0096265858378</span>
                  </p>
                  <p>
                    <span className="title">رقم الجوال:</span>
                    <span className="value en-txt ms-1">00962790317731</span>
                  </p>
                  <p>
                    <span className="title">صندوق بريد:</span>
                    <span className="value en-txt ms-1">140531</span>
                  </p>
                  <p>
                    <span className="title">الموقع:</span>
                    <span className="value ms-1">مبنى رقم <span className=" en-txt">296</span></span>
                  </p>
                  <p>
                    <span className="title">ش. الملك عبد الله الثاني</span>
                  </p>
                  <p>
                    <span className="title">عمان،  <span className="en-txt">11814</span>، الأردن</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="map-wrapper position-relative">
          <Image
          src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/contact/shape.png"
          width={85}
          height={68}
          alt="shape"
          className="shape top right ms-5"
        />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.8490094401873!2d35.8432952!3d31.9649927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca16de2267253%3A0xd81f30b3ed2a8bb8!2z2KrZgdmD2LEg2YTYqNmG2KfYoSDYp9mE2KXZhtiz2KfZhiBUYWZha2t1ciBJbnN0aXR1dGlvbg!5e0!3m2!1sen!2seg!4v1723017410699!5m2!1sen!2seg" width="100%" height="750" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
