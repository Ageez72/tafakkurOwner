"use client";
import { useState, useEffect, Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Filter from "@/components/sections/Filter";
import Shipping from "@/components/sections/Shipping";
import Image from 'next/image';
import Link from 'next/link';
import { useAppContext } from "@/context/AppContext";
import en from "../../../locales/en.json";
import ar from "../../../locales/ar.json";
import { useSearchParams } from 'next/navigation';


export default function VersionsListing() {
    const { state } = useAppContext();
    const translation = state.LANG === "en" ? en : ar;
    const [loading, setLoading] = useState(true);
    const [booksData, setBooksData] = useState([]);
    const [agesData, setAgessData] = useState([]);
    const [versionsData, setVersionsData] = useState([]);
    const [localStorage, setLocalStorage] = useState({});

    useEffect(() => {
        setLocalStorage(window.sessionStorage);
        console.log(window.sessionStorage.utm_source);
    }, []);
    
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", state.LANG); // Assuming state.LANG is defined

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    useEffect(() => {
        document.title = "إصدارات تفكر | إصدارات تنمي الشخصية الإبداعية والأخلاقية"
    })
    useEffect(() => {
        const urls = [
            `${state.HTTP_URL}books`,
            `${state.HTTP_URL}ages`,
            `${state.HTTP_URL}book-categories`,
        ];

        Promise.all(urls.map(url => fetch(url, requestOptions).then(res => res.json())))
            .then(results => {
                setBooksData(results[0].data);
                setAgessData(results[1].data);
                setVersionsData(results[2].data);
                setLoading(false)

                const urlParams = new URLSearchParams(window.location.search);
                const version = urlParams.get('version');
                const ageFromParam = urlParams.get('age_from');
                const ageToParam = urlParams.get('age_to');
                
                if (version || ageFromParam || ageToParam) {
                    handleFilters(ageFromParam, ageToParam, version || "");
                }  
            })
            .catch(error => {
                setLoading(false)
                console.error('Error:', error)
            });

    }, [state.LANG])
    
    // useEffect(() => {
    //     const urlParams = new URLSearchParams(window.location.search);

    //     const version = urlParams.get('version');
    //     const ageFromParam = urlParams.get('age_from');
    //     const ageToParam = urlParams.get('age_to');
        
    //     if(versionsData.length > 0) {
    //         if (version || ageFromParam || ageToParam) {
    //             handleFilters(ageFromParam, ageToParam, version);
    //         }  
    //     }
    // },[versionsData])

    const handleFilters = (age_from, age_to, version) => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const res = await fetch(`${state.HTTP_URL}books?age_from=${age_from}&age_to=${age_to}&category=${version}`, requestOptions);
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const jsonData = await res.json();
                setBooksData(jsonData.data);
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }

    const getCategorySlug = (book) => {
        for (let i = 0; i < versionsData.length; i++) {
            const element = versionsData[i];
            if (element.id === book.category.id) {
                return element.slug
            }
        }
    }

    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={2}
                breadcrumbTitle={"جميع الإصدارات"}
                bannerBg="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/versions/bg.jpg"
                versionsBtn="احصل على الإصدارات الآن"
                allVersionsDesc="اختر من مجموعة الإصدارات الواسعة التي تلبي احتياجات أبنائك! "
                btnRoute={`https://forms.zohopublic.com/tafakkur/form/Untitled5/formperma/xbumF0HBgyi7ZpN5ZWjsHpn9jR5OODt5RsJ3RoTY5IA?utm_source=${localStorage?.utm_source}`}
                loader={loading}
            >
                <section className="version-details section-padding pb-0">
                    <div className="container custom-container">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Filter title="صنف حسب العمر والسلسلة" fieldsNumber={2} ages={agesData} versions={versionsData} handleSubmit={handleFilters} />
                        </Suspense>
                        <div className='all-versions-items'>
                            <div className='row'>
                                {
                                    booksData?.map((book) => (
                                        <div className='item-col col-md-6 col-lg-4 col-xl-3 col-12 mb-4' key={book.id}>
                                            <Link href={`/tafakkur-publishers/categories/${getCategorySlug(book)}/products/${book.slug}`}>
                                                <Image
                                                    width={285}
                                                    height={260}
                                                    className="w-100 h-100 object-fit"
                                                    src={book.image}
                                                    alt={book.name}
                                                    layout="responsive"
                                                    loading="lazy"
                                                />
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                    <div className="shipping-bg">
                        <div className="container custom-container">
                            <Shipping versionsTitles={true} />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
