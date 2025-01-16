"use client"
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import Filter from "@/components/sections/Filter";
import Shipping from "@/components/sections/Shipping";
import VersionTestimonialSlider from "@/components/slider/VersionTestimonialSlider";
import Link from 'next/link';
import Image from 'next/image';
import { useAppContext } from "@/context/AppContext";
import en from "../../../../locales/en.json";
import ar from "../../../../locales/ar.json";

export default function Version() {
    const router = useParams();
    const searchParams = useSearchParams();
    const { categoryid } = router;
    const { state } = useAppContext();
    const translation = state.LANG === "en" ? en : ar;
    const [loading, setLoading] = useState(true);
    const [versionDetails, setVersionDetails] = useState([]);
    const [agesData, setAgesData] = useState([]);
    // const categoryid = localStorage.getItem("category-id");
    // const categorySlug = localStorage.getItem("category-slug");
    const [localStorage, setLocalStorage] = useState({});

    useEffect(() => {
        setLocalStorage(window.sessionStorage);
        console.log(window.sessionStorage);
    }, []);

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", state.LANG); // Assuming state.LANG is defined

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    useEffect(() => {
        const urls = [
            `${state.HTTP_URL}category/${categoryid}`,
            `${state.HTTP_URL}ages`,
        ];

        Promise.all(urls.map(url => fetch(url, requestOptions).then(res => res.json())))
            .then(results => {
                setVersionDetails(results[0].data);
                setAgesData(results[1].data);
                setLoading(false)
                document.title = `تفكر ناشرون | ${results[0].data.category.name}`
                
                // const searchParams = new URLSearchParams(window.location.search);
                const ageFromParam = searchParams.get('age_from') || 1;
                const ageToParam = searchParams.get('age_to') || "";
                
                if (versionDetails?.category?.id && ageFromParam && ageToParam) {
                    handleFilters(ageFromParam, ageToParam);
                }
            })
            .catch(error => {
                setLoading(false)
                console.error('Error:', error)
            });

    }, [state.LANG, versionDetails?.category?.id])


    const handleFilters = (age_from, age_to) => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const res = await fetch(`${state.HTTP_URL}books?age_from=${age_from}&age_to=${age_to}&category=${versionDetails?.category?.id}`, requestOptions);
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const jsonData = await res.json();
                versionDetails.books = jsonData.data;
                setVersionDetails(versionDetails);
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }

    const storeSlugsHandler = (cat, prod)=> {
        localStorage.setItem("category-id", cat)
        localStorage.setItem("product-id", prod)
    }

    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={2}
                breadcrumbTitle={versionDetails?.category?.name}
                parentrumb="جميع الإصدارات"
                parentrumbRoute="tafakkur-publishers/products"
                bannerBg={versionDetails?.category?.image}
                versionsBtn="احصل على الإصدارات الآن"
                allVersionsDesc={versionDetails?.category?.hint || ""}
                btnRoute={`https://forms.zohopublic.com/tafakkur/form/Untitled5/formperma/xbumF0HBgyi7ZpN5ZWjsHpn9jR5OODt5RsJ3RoTY5IA?utm_source=${localStorage?.utm_source}`}
                loader={loading}
            >
                <section className="version-details section-padding pb-0">
                    <div className="container custom-container">
                        <Filter title="صنف حسب العمر" fieldsNumber={1} ages={agesData} versions={[]} handleSubmit={handleFilters} />

                        <div className='all-versions-items'>

                            <h2 className="mb-4">عن السلسلة:</h2>
                            <div className="line-height-p mb-5" dangerouslySetInnerHTML={{ __html: versionDetails?.category?.desc }} />
                            <div className='row'>
                                {
                                    versionDetails?.books?.map((book) => (
                                        <div className='col-md-6 col-lg-3 col-12 mb-4' key={book.id}>
                                            {/* <button onClick={()=> storeSlugsHandler(categoryid, book.id)}> */}
                                            <Link href={`/tafakkur-publishers/categories/${categoryid}/products/${book.slug}`}>
                                                <Image className="w-100 h-100 object-fit" src={book.image} alt={book.name} />
                                            </Link>
                                            {/* </button> */}
                                        </div>
                                    ))
                                }
                                {
                                    !versionDetails?.books?.length && (
                                        <h2 className="text-center head-blue">
                                            لا توجد نتائج
                                        </h2>
                                    )
                                }
                            </div>

                           {versionDetails?.testimonials?.length ? <VersionTestimonialSlider data={versionDetails?.testimonials}></VersionTestimonialSlider> : ""}
                        </div>

                    </div>
                    <div className="shipping-bg">
                        <div className="container custom-container">
                            <Shipping />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
