"use client";
import "/public/assets/css/bootstrap.min.css";
import "/public/assets/css/all.min.css";
import "/public/assets/css/animate.css";
import "/public/assets/css/magnific-popup.css";
import "/public/assets/css/meanmenu.css";
import "/public/assets/css/swiper-bundle.min.css";
import "/public/assets/css/nice-select.css";
import "/public/assets/css/main.css";
import { useEffect, useState } from "react";
import Script from "next/script";
import Head from "next/head";
import AppProvider from "@/context/AppContext";
import { metadata } from "./siteMetadata";
import { Kumbh_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

const GA_TRACKING_ID = "G-47NQDNDEYD";

const kumbh = Kumbh_Sans({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const [lang, setLang] = useState("ar");
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    if (!window.location.href.includes("search-results")) {
      if (
        typeof window !== "undefined" &&
        typeof window.sessionStorage !== "undefined"
      ) {
        if (!sessionStorage.getItem("urlParams")) {
          const queryString = window.location.search;
          sessionStorage.setItem("urlParams", queryString);
        }
      }
    }
    if (typeof window !== "undefined" && typeof window.sessionStorage !== "undefined") {
      setPageName(sessionStorage.getItem("pageName"));
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", GA_TRACKING_ID, { page_path: url });
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("popstate", () => handleRouteChange(window.location.pathname));
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("popstate", () => handleRouteChange(window.location.pathname));
      }
    };
  }, []);

  // Function to get URL parameters
  function getQueryParams() {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      const urlParams = new URLSearchParams(window?.location.search);
      return urlParams;
    }
  }

  // Check if the user came from Facebook.etc using utm_source=facebook
  const params = getQueryParams();
  const utmSource = params?.get('utm_source');

  if (utmSource) {
    if(typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      sessionStorage?.setItem('utm_source', utmSource);
    }
  } else {
    if(typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined'){
      // sessionStorage?.removeItem('utm_source');
    }
  }

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="icon"
          href="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/nav/tIcon.png"
          type="image/x-icon"
          sizes="16x16"
        />
      </Head>
      <body className={`${kumbh.className}`}>
    <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-47NQDNDEYD"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-47NQDNDEYD');
          `}
        </Script>
        <AppProvider>{children}</AppProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
