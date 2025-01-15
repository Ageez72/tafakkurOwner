
"use client";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function NotFound() {
    return (
        <>

            <Layout headerStyle={1} footerStyle={2} whiteHeader={1}>
                <section className="Error-section section-padding fix">
                    <div className="container custom-container">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="error-items">
                                    <h1 className="wow fadeInUp en-txt head-blue" data-wow-delay=".8s">
                                        404
                                    </h1>
                                    <h2 className="wow fadeInUp head-blue" data-wow-delay=".8s">
                                        نعتذر.. هذه الصفحة غير موجودة!
                                    </h2>
                                    <Link href="/" className="wow fadeInUp hover-outlined-btn" data-wow-delay=".8s">
                                        العودة إلى الصفحة الرئيسية
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}