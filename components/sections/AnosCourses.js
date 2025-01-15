import Link from 'next/link';
import Image from 'next/image';

export default function AnosCourses({data}) {    
    const storeSlugsHandler = (id, slug)=> {
        localStorage.setItem("course-id", id);
        localStorage.setItem("course-slug", slug);
    }
    return (
        <section className='anos-courses section-padding'>
            <h2 className='head-blue text-center mb-2'>الدورات التأهيلية للكوادر التعليمية التي تطبق المنهاج</h2>
            <p className='text-center'>تدريب مُتطور واستراتيجيات تطبيقية ممتعة</p>
            <div className='container'>
                <div className='row justify-content-center gap-5 gap-md-0 gap-lg-4 mt-5'>
                    {
                        data?.map((course)=>(
                            <div className='col-12 col-md-6 col-lg-5 col-xl-4 course-container' key={course.id}>
                                <button onClick={() => storeSlugsHandler(course.id, course.slug)}>
                                    <Link href={`tafakkur-training/courses/${course.slug}`}>
                                    <div className="card">
                                        <div className='program-cover position-relative'>
                                            <Image loading="eager" src={`${course?.cover_image && course?.cover_image}`} className="card-img-top" alt="course 1" />
                                            <div className='overlay'></div>
                                        </div>    
                                        <div className="card-body">
                                            <h3 className="card-title mb-2">{course?.title}</h3>
                                            <p className="card-text">{course?.desc}</p>
                                            <p className="card-text">{course?.hint}</p>
                                            <p className='mt-2'>
                                                <Link href={`tafakkur-training/courses/${course.id}`} className="d-inline-flex align-items-center">
                                                    اطلع إلى التفاصيل
                                                    <i className="fa-solid fa-arrow-left ms-2"></i>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    </Link>
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
