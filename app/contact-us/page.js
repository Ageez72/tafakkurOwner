"use client";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Contact from "@/components/pages/Contact";
export default function page() {
    useEffect(()=>{
        document.title = "تفكر | تواصل معنا"
    })
    return (
        <Layout
            headerStyle={1}
            footerStyle={2}
            breadcrumbTitle={"تواصل معنا"}
            bannerBg="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/contact/cover.jpg"
        >
            <Contact />
        </Layout>
    )
}
