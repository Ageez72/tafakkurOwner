"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";

export default function Categories({ type }) {
  const { state } = useAppContext();
  const translation = state.LANG === "en" ? en : ar;
  return (
    <>
      <section className="categories-section fix section-padding pb-0" id="Categories">
        <div className="container custom-container">
          <div className={`categories-wrapper ${type === "training" ? "training" : type === "academy" ? "academy" : type === "level" ? "level" : "publishers"}`}>
            <div className="row g-4">
              {
                type === "training" && <>
                  <div className="col-lg-3 col-md-6 text-center wow fadeInUp" data-wow-delay=".45s">
                    <div className="category-icon mb-4">
                      <i className="fa-solid fa-book"></i>
                    </div>
                    <h3 className="category-title mb-1">مادة علمية</h3>
                    <p className="category-desc">ملزمة خاصة بكل برنامج</p>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center wow fadeInUp" data-wow-delay=".55s">
                    <div className="category-icon mb-4">
                      <i className="fa-solid fa-message"></i>
                    </div>
                    <h3 className="category-title mb-1">تطبيقات عملية</h3>
                    <p className="category-desc">مئات المواقف والأمثلة</p>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center wow fadeInUp" data-wow-delay=".65s">
                    <div className="category-icon mb-4">
                      <i className="fa-solid fa-laptop"></i>
                    </div>
                    <h3 className="category-title mb-1">منصة إلكترونية</h3>
                    <p className="category-desc">حساب خاص لكل متدرب</p>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center wow fadeInUp" data-wow-delay=".75s">
                    <div className="category-icon mb-4">
                      <i className="fa-solid fa-file-certificate"></i>
                    </div>
                    <h3 className="category-title mb-1">شهادة معتمدة</h3>
                    <p className="category-desc">تدعم مسيرتك المهنية</p>
                  </div>
                </>
              }
              {
                type === "publishers" && <>
                  <div className="col-lg-3 col-md-6 text-center wow fadeInUp" data-wow-delay=".45s">
                    <div className="category-icon mb-4">
                      <i className="fa-solid fa-book"></i>
                    </div>
                    <h3 className="category-title mb-1">إصدارات تربوية</h3>
                    <p className="category-desc">تبني الإيمان وتقدير الذات والإبداع</p>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center wow fadeInUp" data-wow-delay=".55s">
                    <div className="category-icon mb-4">
                      <i className="fa-solid fa-microscope"></i>
                    </div>
                    <h3 className="category-title mb-1">أسس علمية</h3>
                    <p className="category-desc">ترتكز إلى أبحاث الدماغ</p>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center wow fadeInUp" data-wow-delay=".65s">
                    <div className="category-icon mb-4">
                      <i className="fa-solid fa-certificate"></i>
                    </div>
                    <h3 className="category-title mb-1">جودة عالمية</h3>
                    <p className="category-desc">في الرسم والمحتوى والطباعة</p>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center wow fadeInUp" data-wow-delay=".75s">
                    <div className="category-icon mb-4">
                      <i className="fa-solid fa-truck-fast"></i>
                    </div>
                    <h3 className="category-title mb-1">شحن دولي</h3>
                    <p className="category-desc">يصل إلى باب منزلك</p>
                  </div>
                </>
              }
              {
                type === "academy" && <>
                  <div className="col-lg-4 col-md-6 text-center wow fadeInUp" data-wow-delay=".45s">
                    <div className="category-icon mb-4">
                      <i className="fa-solid fa-laptop"></i>
                    </div>
                    <h3 className="category-title mb-1">
                      <span className="en-txt">64</span>
                      <span className="mx-2">حصة تفاعلية
                        <br />
                        عبر تطبيق</span>
                      <span className="en-txt">Zoom</span>
                    </h3>
                  </div>
                  <div className="col-lg-4 col-md-6 text-center wow fadeInUp" data-wow-delay=".55s">
                    <div className="category-icon mb-4">
                      <i className="fa-solid fa-book"></i>
                    </div>
                    <h3 className="category-title mb-1">
                      كتاب للطالب

                    </h3>
                    <h3 className="category-title mb-1">
                      حسب المستوى
                    </h3>
                  </div>
                  <div className="col-lg-4 col-md-6 text-center wow fadeInUp" data-wow-delay=".65s">
                    <div className="category-icon mb-4">
                      <i className="fa-solid fa-certificate"></i>
                    </div>
                    <h3 className="category-title mb-1">
                      شهادة مشاركة
                      <br />
                      عند إنهاء المستوى
                    </h3>
                  </div>
                </>
              }
              {
                type === "level" && <>
                  <div className="col-lg-4 col-md-6 text-center wow fadeInUp" data-wow-delay=".45s">
                    <div className="category-icon mb-4">
                      <i className="fa-solid fa-laptop"></i>
                    </div>
                    <h3 className="category-title mb-1">
                      <span className="en-txt">64</span>
                      <span className="mx-2">حصة تفاعلية
                        <br />
                        عبر تطبيق</span>
                      <span className="en-txt">Zoom</span>
                    </h3>
                  </div>
                  <div className="col-lg-4 col-md-6 text-center wow fadeInUp" data-wow-delay=".55s">
                    <div className="category-icon mb-4">
                      <i className="fa-solid fa-book"></i>
                    </div>
                    <h3 className="category-title mb-1">
                      كتاب للطالب
                    </h3>
                    <h3 className="category-title mb-1">
                      حسب المستوى
                    </h3>
                  </div>
                  <div className="col-lg-4 col-md-6 text-center wow fadeInUp" data-wow-delay=".65s">
                    <div className="category-icon mb-4">
                      <i className="fa-solid fa-certificate"></i>
                    </div>
                    <h3 className="category-title mb-1">
                      شهادة مشاركة
                      <br />
                      عند إنهاء المستوى
                    </h3>
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
