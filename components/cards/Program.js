import Link from "next/link";
import Image from "next/image";

function Program({ data, title }) {
    console.log(data);
    
    const storeSlugsHandler = ()=> {
        localStorage.setItem("course-id", data?.id);
        localStorage.setItem("course-slug", data?.slug);
    }
    return (
        <div className='program-wrapper mt-5 wow fadeInUp' data-wow-delay=".5s">
            <button onClick={storeSlugsHandler}>
                <Link href={`tafakkur-training/courses/${data?.slug}`}>
                    <div className="card">
                        <div className='program-cover'>
                            <Image loading="eager" src={data?.cover_image} className="card-img-top" alt="program cover" />
                            <div className='overlay'></div>
                            <div className='auther'>
                                <Image src={data?.author_image} alt={data?.author_name} />
                                <span>{data?.author_name}</span>
                            </div>
                        </div>
                        <div className="card-body py-3 px-lg-3 px-xl-4">
                            <h6 className="card-category">{title}</h6>
                            <h5 className="card-title">{data?.title}</h5>
                            <p>
                                {
                                    data?.hint
                                }
                            </p>
                            <hr />
                            <div className='program-details row'>
                                <div className='col-4'>
                                    <div className='total-sessions d-flex align-items-center'>
                                        <Image width={15} height={12.5} src='https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/program/chalkboard-user.png' alt='total sessions' />
                                        <p>
                                            <span className="en-txt">{data?.sessions_count}</span>
                                            محاضرات</p>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='total-hours d-flex align-items-center'>
                                        <Image width={15} height={12.5} src='https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/program/clock.png' alt='total hours' />
                                        <p>
                                            <span className="en-txt">{data?.hours_count}</span>
                                            ساعة</p>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='total-students d-flex align-items-center'>
                                        <Image width={15} height={12.5} src='https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/program/users.png' alt='total students' />
                                        <p>
                                            <span className="en-txt me-1">{data?.trainees_count}</span>
                                            متدرب</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </button>
        </div>
    )
}

export default Program
