"use client";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";
import CounterUp from "../elements/CounterUp";
import Image from 'next/image'

export default function Achievement2({ bg, publisher, data }) {
    const { state } = useAppContext();
    const translation = state.LANG === "en" ? en : ar;
    return (
        <>
            <section className={`achievement-section section-bg-2 ${publisher === "publishers" ? "publishers" : ""}`}>
                {bg && <div className="overlay"></div>}
                <div className="container custom-container">
                    <div className={`achievement-wrapper section-padding style-2 ${bg === "training" ? "training" : "publishers"}`}>
                        <div className="counter-area row g-4 py-4">
                            {bg === "training" && <Image width={85} height={68} className="shape" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/achievement/shape.png" alt="shape" />}
                            <div className="col-md-6 col-lg-3">
                                <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                                    <div className="content text-center">
                                        <h2 className="mb-3 en-txt"><CounterUp count={data[0].value} /></h2>
                                        <p>{data[0].title}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                                    <div className="content text-center">
                                        <h2 className="mb-3 en-txt"><CounterUp count={data[1].value} />+</h2>
                                        <p>{data[1].title}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                                    <div className="content text-center">
                                        <h2 className="mb-3 en-txt"><CounterUp count={data[2].value} />+</h2>
                                        <p>{data[2].title}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                                    <div className="content text-center">
                                        <h2 className="mb-3 en-txt"><CounterUp count={data[3].value} />+</h2>
                                        <p>{data[3].title}</p>
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
