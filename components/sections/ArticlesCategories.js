"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";


export default function ArticlesCategories({newsId}) {
    const [ArticlesCategoriesList, setArticlesCategoriesList] = useState([]);
    const { state } = useAppContext();
    const translation = state.LANG === "en" ? en : ar;

    useEffect(() => {
        fetchData();
    }, [state.LANG]);
    
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
            const res = await fetch(`${state.HTTP_URL}articles-categories`, requestOptions);
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            const jsonData = await res.json();
            setArticlesCategoriesList(jsonData.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <ul>
            {
                ArticlesCategoriesList?.map((cat) => (
                    <li className={Number(newsId) === cat.id ? "active": ""} key={cat.id}><Link href={`/articles-category/${cat.id}`}>{cat.name}</Link></li>
                ))
            }
        </ul>
    )
}
