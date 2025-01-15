import CounterUp from "../elements/CounterUp"

export default function HomeAchievement() {
    return (
        <>
            <section className='home-achievement section-padding'>
                <div className="container custom-container">
                    <h2 className="text-center mb-5">على مدار  <span className="en-txt">15</span> عاماً</h2>
                    <div className="achievement-wrapper style-2">
                        <div className="counter-area row g-4 py-4">
                            <div className="col-md-6 col-lg-3 pb-2 pb-lg-5">
                                <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                                    <div className="content text-center">
                                        <h2 className="mb-3 en-txt"><CounterUp count={35} /></h2>
                                        <p>دولة</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 pb-2 pb-lg-5">
                                <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                                    <div className="content text-center">
                                        <h2 className="mb-3 en-txt"><CounterUp count={500} />+</h2>
                                        <p>مؤسسة مستفيدة</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 pb-2 pb-lg-5">
                                <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                                    <div className="content text-center">
                                        <h2 className="mb-3 en-txt"><CounterUp count={300} />+</h2>
                                        <p>مشرف تفكر</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 pb-2 pb-lg-5">
                                <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                                    <div className="content text-center">
                                        <h2 className="mb-3 en-txt"><CounterUp count={3900} />+</h2>
                                        <p>معلم تفكر </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 pb-2 pb-lg-5">
                                <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                                    <div className="content text-center">
                                        <h2 className="mb-3 en-txt"><CounterUp count={320000} />+</h2>
                                        <p>طالب مستفيد</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 pb-2 pb-lg-5">
                                <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                                    <div className="content text-center">
                                        <h2 className="mb-3 en-txt"><CounterUp count={60} />+</h2>
                                        <p>إصدار</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 pb-2 pb-lg-5">
                                <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                                    <div className="content text-center">
                                        <h2 className="mb-3 en-txt"><CounterUp count={15000} />+</h2>
                                        <p>متدرب</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 pb-2 pb-lg-5">
                                <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                                    <div className="content text-center">
                                        <h2 className="mb-3 en-txt"><CounterUp count={95} />+</h2>
                                        <p>ورشة تدريبية</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
