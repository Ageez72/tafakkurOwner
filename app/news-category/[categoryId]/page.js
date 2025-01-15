"use client";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import en from "../../../locales/en.json";
import ar from "../../../locales/ar.json";
import Layout from "@/components/layout/Layout";
import NewsItem from "@/components/sections/NewsListingItem";
import NewsCategories from "@/components/sections/NewsCategories";
import Pagination from "@/components/sections/Pagination";

export default function page({ params }) {
    const { state } = useAppContext();
    const translation = state.LANG === "en" ? en : ar;
    const [newsData, setNewsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(params.categoryId);
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        document.title = "تفكر | آخر الأخبار"
    })

    useEffect(() => {
        fetchData()
    }, [state.LANG, category, page]);


    const fetchData = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Accept-Language", state.LANG);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };
        try {
            const res = await fetch(`${state.HTTP_URL}news?limit=${limit}&category=${category}&page=${page}`, requestOptions);
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            const jsonData = await res.json();
            setNewsData(jsonData.data);
            setLoading(false)

        } catch (error) {
            setLoading(false)

            console.error("Error fetching data:", error);
        }
    };

    return (
        <Layout
            headerStyle={1}
            footerStyle={2}
            breadcrumbTitle={"أخبار تفكر"}
            bannerBg="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/news/cover.jpg"
            loader={loading}
        >
            <section className='news-section fix section-padding' id='news'>
                <div className='container custom-container'>
                    <div className="row">
                        <div className="col-lg-9">
                            {
                                newsData?.data.map((news) => (
                                    <Fragment key={news.id}>
                                        <NewsItem id={news.slug} title={news.title} date={news.date} categories={news.categories} cover={news.image} desc={news.desc} />
                                    </Fragment>
                                ))
                            }

                            {!newsData?.data?.length && <h3>لا يوجد نتائج</h3>}
                        </div>
                        <div className="col-md-3 ps-5 news-sectors d-none d-lg-block">
                            <h3 className="mb-3">تصنيفات</h3>
                            <NewsCategories newsId={params.categoryId} />
                        </div>
                    </div>
                    <Pagination links={newsData?.links} handlePagination={(num) => setPage(num)} />
                </div>
            </section>
        </Layout>
    )
}
