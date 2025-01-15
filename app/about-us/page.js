"use client";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import AboutImageSlider from "@/components/slider/AboutImageSlider";
import ContactForm from "@/components/sections/ContactForm";
import Image from "next/image";

const imageArr = [
  "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/اجتماع-فريق-عمل-تفكر.jpg",
  "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/ورشة-عمل-قيادة-النساء-تفكر.jpg",
  "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/جلسة-تعاون-فريق-تفكر.jpg",
  "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/ندوة-في-قاعة-تفكر.jpg",
  "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/اجتماع-اداري-تفكر.jpg",
  "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/طلاب-في-الفصل-تفكر.jpg",
  "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/فريق-في-معرض-كتب-تفكر.jpg",
  "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/حفل-توزيع-شهادات-تفكر.jpg",
  "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/صورة-فريق-تفكر.jpg",
  "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/حفل-توقيع-كتب-تفكر.jpg",
  "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/حضور-ورشة-عمل-تفكر.jpg",
  "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/انشطة-للاطفال-تفكر.jpg",
  "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/توزيع-شهادات-ورشة-تفكر.jpg",
  "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/قراءة-للاطفال-تفكر.jpg",
  "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/حفل-اجتماع-تفكر.jpg",
  "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/ندوة-حضور-تفكر.jpg",
  "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/مدارس-نجمة-الفريد-مع-فريق-تفكر.jpg",
];

export default function WhoWeAre() {
  useEffect(() => {
    document.title = "عن تفكر";
  });
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={2}
        breadcrumbTitle={"عن تفكر"}
        bannerBg="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/about-bg.jpg"
        shapeImg={true}
      >
        <section className="about-section section-padding pb-0">
          <div className="container custom-container">
            <div className="row justify-content-evenly align-items-center">
              <div className="col-12 col-sm-8 col-lg-5 row align-items-center">
                <div className="col-6">
                  <Image
                    src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/1.jpg"
                    width={200}
                    height={235}
                    className="sm-image mb-4"
                    alt="About Image"
                  />
                  <Image
                    src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/3.jpg"
                    width={200}
                    height={235}
                    className="sm-image"
                    alt="About Image"
                  />
                </div>
                <div className="col-6">
                  <Image
                    src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/2.jpg"
                    width={200}
                    height={235}
                    className="sm-image"
                    alt="About Image"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-5 mt-lg-0 mt-5">
                <h2 className="head-blue mb-3">عن تفكر</h2>
                <p>
                  تفكر مؤسسة بحث وتدريب وتطوير علمي تربوي تأسست عام{" "}
                  <span className="en-txt">2008</span> في الأردن، تسعى لبناء
                  الإنسان الأخلاقي المبدع القادر على صناعة الحضارة وتحقيق
                  النهضة، وإعداد المحاضن التربوية اللازمة لتحقيق ذلك.
                </p>
                <a
                  className="wow fadeInUp d-inline-block hover-btn mt-3"
                  href="/contact-us"
                >
                  <i className="fa-regular fa-envelope me-3"></i>
                  اتصل بنا
                </a>
              </div>
            </div>
            <div className="row vision-wrapper">
              <div className="col-12 col-md-6">
                <div className="vision-card">
                  <h3 className="mb-4 head-blue">رؤيتنا</h3>
                  <p>
                    أن نكون المؤسسة العلمية الرائدة التي تقدم رؤية منهجية علمية
                    تطبيقية متكاملة للمؤسسات التعليمية والأسر لتنجح في تربية
                    أبنائها ليكونوا مبدعين وأخلاقيين، قادرين على القيام بدورهم
                    المستقبلي في نهضة أوطانهم.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-0">
                <div className="vision-card">
                  <h3 className="mb-4 head-blue">رسالتنا</h3>
                  <p>
                    نساهم في تطوير الواقع التربوي من خلال تقديم البحوث والبرامج
                    التطبيقية والتدريبية المبتكرة لتربية الشخصية الإبداعية
                    الأخلاقية.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-slider">
              <AboutImageSlider images={imageArr} />
            </div>
          </div>
          <div className="about-accordion">
            <div className="container custom-container">
              <h2 className="head-blue mb-3">مجالات العمل</h2>
            </div>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item research">
                <div className="container custom-container">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      البحث العلمي
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        يبحث القسم في الدراسات التحليلية وتطوير الرؤى التي تسعى
                        إلى وضع حلول تعمل على مواجهة التحديات والمشكلات التي
                        يعاني منها الواقع التربوي العربي والإسلامي، ويعمل على
                        ربط النظرية بالتطبيق، والإفادة من البحوث العلمية من أجل
                        تطوير الميدان التربوي، وتزويده عملياً بوسائل تساعده على
                        النهوض باعتباره أصلاً في ارتقاء الأمة.
                      </p>
                      <p>
                        يجري فريق البحث العلمي البحوث والدراسات النظرية
                        والتجريبية المتخصصة في مجال بناء الشخصية المتكاملة،
                        وتعليم التفكر وتنمية الإبداع والذكاء، وبناء تقدير الذات،
                        وتطوير السلوك الأخلاقي، بإشراك عشرات المؤسسات العلمية في
                        مختلف الدول، وبالتعاون مع الكوادر التعليمية التي تتعامل
                        مباشرة مع الطفل داخل المؤسسة التعليمية، حيث تبدأ عينات
                        الدراسة من <span className="en-txt">50</span> طالب
                        وطالبة وتصل إلى <span className="en-txt">8500</span>{" "}
                        طالب وطالبة في بعض الدراسات.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item training">
                <div className="container custom-container">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      التدريب والتطوير
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        يقوم هذا القسم بتنظيم البرامج التدريبية على المستوى
                        المحلي والدولي، لنشر ثقافة بناء الشخصية المتكاملة،
                        وتعليم عبادة التفكر وتنمية الإبداع والذكاء، وبناء
                        الأخلاق وتقدير الذات، كما يهدف إلى إعداد مشرفين معتمدين
                        لبرنامج التفكر، يشكلون نواة التطوير في المؤسسة
                        التعليمية، ويعملون كقادة ميدانين، لمساعدة المؤسسة
                        التعليمية في تحقيق الرؤية التطويرية التي تطمح إليها في
                        التقدم نحو نموذج المدرسة الإبداعية الأخلاقية، كما يؤهل
                        المربين من أمهات وآباء لبناء شخصية الطفل وتفكيره وذكاءه
                        بشكل متكامل، وبناء العلاقة الإيجابية معه وضبط سلوكه وفق
                        أبحاث الدماغ والسنة النبوية المطهرة.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item certified">
                <div className="container custom-container">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      برامج الاعتماد وشهادات الجودة
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        يسعى قسم برامج الاعتماد وشهادات الجودة إلى رفع مستوى
                        الكفاءة والتميز في المؤسسات التعليمية من خلال تطوير
                        وتطبيق معايير دقيقة تتوافق مع أفضل الممارسات العالمية.
                        يهدف القسم إلى تحسين جودة التعليم وضمان تحقيق النتائج
                        المرجوة عبر تقديم الإرشاد والدعم اللازمين للمؤسسات
                        التعليمية للوصول إلى أعلى مستويات الجودة والاعتماد
                        الأكاديمي. يعمل الفريق على تطوير العملية التعليمية بشكل
                        شامل ومستدام، إيماناً بأن التعليم هو الأساس لتحقيق
                        التنمية المستدامة. يركز القسم على دعم وتطوير المؤسسات
                        التعليمية بما يعود بالنفع على الأجيال القادمة، ويعزز من
                        قدرتها على مواجهة التحديات وتحقيق التميز.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item publish">
                <div className="container custom-container">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      التأليف والنشر والتوزيع
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        يبحث القسم في الدراسات التحليلية وتطوير الرؤى التي تسعى
                        إلى وضع حلول تعمل على مواجهة التحديات والمشكلات التي
                        يعاني منها الواقع التربوي العربي والإسلامي، ويعمل على
                        ربط النظرية بالتطبيق، والإفادة من البحوث العلمية من أجل
                        تطوير الميدان التربوي، وتزويده عملياً بوسائل تساعده على
                        النهوض باعتباره أصلاً في ارتقاء الأمة.
                      </p>
                      <p>
                        كما يعمل القسم من خلال خبراء أكاديمين مختصين، على ترجمة
                        مناهج التفكر والبرامج العلمية والتدريبية، إلى لغات أخرى
                        أجنبية، من أجل الاستفادة منها في الدول غير الناطقة
                        باللغة العربية، وكذلك يعمل على ترجمة الكتب التربوية
                        الأجنبية إلى اللغة العربية لمساعدة الميدان التربوي على
                        التطور والارتقاء.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="president section-padding pb-0">
            <div className="container custom-container">
              <h2 className="head-blue mb-5 president-title">
                كلمة رئيس المجلس العربي لرعاية الموهوبين
                <em className="ms-2">- سابقاً</em>
              </h2>
              <div className="row flex-wrap pt-4">
                <div className="col-auto president-image">
                  <Image
                    src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/about/president.jpg"
                    width={250}
                    height={250}
                    alt="president"
                  />
                </div>
                <div className="col ps-lg-5 ps-2">
                  <p>
                    بعد مراجعة مسيرة أكثر من أربعة عقود ونصف من العمل التربوي
                    كمعلم لجميع المواد الدراسية في جميع المراحل الدراسية بدءاً
                    من الأول الأساسي ، وكمتعلم في خمس دول عربية بالإضافة
                    للولايات المتحدة الأمريكية ، وكمدرب في مجالات الموهبة
                    والتفكير والإبداع في معظم الدول العربية.
                  </p>
                  <p>
                    أستطيع القول وبكل ثقة أنّ بارقة أمل قد برزت بوضوح في مناهج
                    مركز التفكّر لمواجهة أكبر وأخطر المشكلات التي تعاني منها
                    النظم التعليمية (ولا أقول التربوية) العربية ألا وهي التدريس
                    الأصمّ لمحتوى الكتب المدرسية والتركيز على الدرجات أو
                    العلامات التي يحصل عليها الطلبة في الاختبارات التقليدية
                    المدرسية والعامة ، وهو تعليم وصفه المفكر البرازيلي باولو
                    فيريري بثلاث كلمات : اكتساب، واختزان، واسترجاع على ورقة
                    إجابة أسئلة الاختبارات.
                  </p>
                  <p>
                    واسمحوا لي أن أشير إلى شطب معايير التعلم العاطفي الاجتماعي
                    التي يجب أن تكون أساساً لا يجوز إهماله في مناهجنا وممارساتنا
                    داخل الفصول وخارجها، وما يترتب على ذلك من اللجوء إلى العنف
                    بدلاً من الحوار واحترام الرأي الآخر في مدارسنا وجامعاتنا
                    وقرانا وبوادينا في جميع القطاعات. وقد رصدت هذه الظاهرة على
                    مدى خمس سنوات في معظم الدول العربية التي زرتها ، الأمر الذي
                    دفعني للشروع في تأليف كتاب الذكاء العاطفي والتعلم الاجتماعي
                    العاطفي.
                  </p>
                  <p className="mt-3">
                    لقد أثمرت جهود مخلصة ومؤمنة بالرسالة الصحيحة للتربية
                    والتعليم بعد أكثر من عشرين سنة من العمل الجادّ عن إنجاز
                    مستويات مناهج التفكّر التي تبنتها مدارس مستنيرة في عشرات
                    الدول العربية والأجنبية بعد أن تبيّن لها أنّ أيّ خبير مطّلع
                    لا يملك إلّا أن يسجّل بأحرف من ذهب ما تنفرد به هذه المناهج
                    حسب أفضل المعايير الدولية للمناهج.
                  </p>
                  <h3 className="head-blue mt-5">
                    الأستاذ الدكتور فتحي جروان رحمه الله
                  </h3>
                  <p>
                    مدير مؤسس لمدارس اليوبيل ،رئيس المجلس العربي لرعاية
                    الموهوبين وعميد المراكز العلمية ورئيس قسم علم النفس والإرشاد
                    والتربية الخاصة بجامعة عمان للدراسات العليا سابقاً
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-wrapper">
            <div className="container custom-container shape-wrapper">
              <Image
                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/contact/shape.png"
                width={85}
                height={68}
                alt="shape"
              />
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <h2>تواصل معنا</h2>
                  <ContactForm noPaddingBottom="1"></ContactForm>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
