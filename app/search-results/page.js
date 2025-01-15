"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/navigation";
import ContactForm from "@/components/sections/ContactForm";
import Pagination from "@/components/sections/Pagination";
import { formatDate } from "@/helpers";
import { useAppContext } from "@/context/AppContext";
import { wrapNumbersInSpan } from "@/helpers";
import Image from "next/image";

export default function search() {
  const { state } = useAppContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);

  // Fetch data function
  const fetchData = async (term) => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", state.LANG);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const res = await fetch(
        `${state.HTTP_URL}search?search=${term}&limit=${limit}&page=${page}`,
        requestOptions
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await res.json();
      setSearchResults(jsonData.data);
      setTimeout(() => {
        wrapNumbersInSpan();
      }, 100);
      setLoading(false);
    } catch (error) {
      setTimeout(() => {
        wrapNumbersInSpan();
      }, 100);
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  // Initial data fetch
  useEffect(() => {
    const params = new URLSearchParams(window.location.search); // Get the URL parameters
    const query = params.get("query"); // Retrieve the 'query' parameter from the URL
    if (query) {
      setSearchTerm(query); // Set the query value to the searchTerm state
      fetchData(query); // Fetch data based on the initial query
    } else {
      setLoading(false); // If no query, stop loading
    }
  }, [state.LANG, page]); // Fetch when language changes

  // Handle form submission
  const handleSearchSubmit = (e) => {
    setPage(1);
    e.preventDefault(); // prevent page reload
    if (searchTerm.trim() !== "") {
      const newUrl = `/search-results?query=${encodeURIComponent(searchTerm)}`;
      router.push(newUrl); // Navigate to the search page with the query
      fetchData(searchTerm); // Fetch data based on the new search term
    }
  };

  const handleClearSearchSubmit = () => {
    router.replace(`/search-results`); // Clear URL query
    setSearchTerm(""); // Clear the search term
    setSearchResults(""); // Clear results
  };

  useEffect(() => {
    document.title = "تفكر | نتائج البحث";
  });

  return (
    <Layout headerStyle={1} footerStyle={1} whiteHeader={1} loader={loading}>
      <section className="search-results section-padding pb-0">
        <div className="container custom-container">
          <h1 className="head-blue">نتائج البحث</h1>
          <p className="mt-4 mb-2">ابحث</p>
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="ابحث في  موقع تفكر"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="button"
              className="search-button"
              onClick={handleClearSearchSubmit}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
          </form>

          <div className="search-results-wrapper mt-5">
            {searchResults?.data?.length > 0 ? (
              searchResults?.data?.map((res, i) => (
                <div className="news news-section" key={i}>
                  <div className="news-item mb-5">
                    <div className="row news-content">
                      <div className="col-12 col-lg-3 search-img-wrapper">
                        <Image
                          src={res.image}
                          alt={res.title}
                          className="w-100 h-100 object-fit"
                        />
                      </div>
                      <div className="col-12 col-lg-9 mt-4 mt-lg-0">
                        {res.type === "news" && (
                          <>
                            <div className="news-date news d-inline-block mb-2">
                              <span>أخبار</span>
                            </div>
                            <h2>
                              <Link href={`/news/${res.slug}`}>
                                {res.title || res.name}
                              </Link>
                            </h2>
                            <div className="news-info d-flex flex-wrap mb-4 mt-3 gap-3">
                              <div className="news-date">
                                <i className="fa-regular fa-calendar me-2"></i>
                                <span>{formatDate("12 ديسمبر 2023")}</span>
                              </div>
                            </div>
                            <div
                              className="clamp clamp-2"
                              dangerouslySetInnerHTML={{
                                __html: res.desc,
                              }}
                            />
                            <Link href={`/news/${res.slug}`}>المزيد</Link>
                          </>
                        )}
                        {res.type === "course" && (
                          <>
                            <div className="news-date course d-inline-block mb-2">
                              <span>دورة</span>
                            </div>
                            <h2>
                              <Link
                                href={`tafakkur-training/courses/${res.slug}`}
                              >
                                {res.title || res.name}
                              </Link>
                            </h2>
                            <p>{res.desc}</p>
                            <Link
                              href={`tafakkur-training/courses/${res.slug}`}
                            >
                              المزيد
                            </Link>
                          </>
                        )}
                        {res.type === "book" && (
                          <>
                            <div className="news-date book d-inline-block mb-2">
                              <span>كتاب</span>
                            </div>
                            <h2>
                              <Link
                                href={`/tafakkur-publishers/categories/${res.category.slug}/products/${res.slug}`}
                              >
                                {res.title || res.name}
                              </Link>
                            </h2>
                            <p
                              className="clamp clamp-2 mt-4"
                              dangerouslySetInnerHTML={{ __html: res.desc }}
                            />
                            <Link
                              href={`/tafakkur-publishers/categories/${res.category.slug}/products/${res.slug}`}
                            >
                              المزيد
                            </Link>
                          </>
                        )}
                        {res.type === "book_category" && (
                          <>
                            <div className="news-date book-category d-inline-block mb-2">
                              <span>سلسة</span>
                            </div>
                            <h2>
                              <Link
                                href={`/tafakkur-publishers/categories/${res.slug}`}
                              >
                                {res.title || res.name}
                              </Link>
                            </h2>
                          </>
                        )}
                        {res.type === "level" && (
                          <>
                            <div className="news-date book-category d-inline-block mb-2">
                              <span>مستوى</span>
                            </div>
                            <h2>
                              <Link
                                href={`/tafakkur-publishers/categories/${res.slug}`}
                              >
                                {res.title || res.name}
                              </Link>
                            </h2>
                            <p
                              className="clamp clamp-2 mt-4"
                              dangerouslySetInnerHTML={{ __html: res.desc }}
                            />
                            <Link href={`/tafakkur-academy/levels/${res.slug}`}>
                              المزيد
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h3 className="no-results mt-5">لا يوجد نتائج لهذا البحث!</h3>
            )}
            <Pagination
              links={searchResults?.links}
              handlePagination={(num) => setPage(num)}
            />
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
            <div className="row">
              <div className="col-lg-9">
                <h2>تواصل معنا</h2>
                <ContactForm noPaddingBottom="1"></ContactForm>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
