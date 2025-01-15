"use client";
import { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";
import Offcanvas from "./Offcanvas";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Preloader from "@/components/elements/Preloader";

export default function Layout({
  headerStyle,
  footerStyle,
  onePageNav,
  breadcrumbTitle,
  bannerBg,
  parentrumb,
  parentrumbRoute,
  versionsBtn,
  btnRoute,
  allVersionsDesc,
  children,
  whiteHeader,
  noBreadcrumbItem, noWave,
  loader,
  bigSubTitle,
  shapeImg
}) {
  const [scroll, setScroll] = useState(0);

  const [isOffCanvas, setOffCanvas] = useState(false);
  const handleOffCanvas = () => setOffCanvas(!isOffCanvas);

  const [isSearch, setSearch] = useState(false);
  const handleSearch = () => setSearch(!isSearch);

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);
  return (
    <>
      {loader && <Preloader />}
      <Offcanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />

      {headerStyle == 1 ? (
        <Header
          scroll={scroll}
          onePageNav={onePageNav}
          isOffCanvas={isOffCanvas}
          handleOffCanvas={handleOffCanvas}
          isSearch={isSearch}
          handleSearch={handleSearch}
          whiteHeader={whiteHeader}
        />
      ) : null}

      {breadcrumbTitle && (
        <Breadcrumb
          breadcrumbTitle={breadcrumbTitle}
          bannerBg={bannerBg}
          parentrumb={parentrumb}
          parentrumbRoute={parentrumbRoute}
          versionsBtn={versionsBtn}
          btnRoute={btnRoute}
          allVersionsDesc={allVersionsDesc}
          bigSubTitle={bigSubTitle}
          noBreadcrumbItem={noBreadcrumbItem}
          noWave={noWave}
          shapeImg={shapeImg}
        />
      )}

      {children}

      {footerStyle && <Footer />}
    </>
  );
}
