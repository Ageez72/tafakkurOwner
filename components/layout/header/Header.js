"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Menu from "../Menu";
import { useAppContext } from "@/context/AppContext";
import en from "../../../locales/en.json";
import ar from "../../../locales/ar.json";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Header({ scroll, handleOffCanvas, whiteHeader }) {
  const { state } = useAppContext();
  const translation = state.LANG === "en" ? en : ar;
  const [infoData, setInfoData] = useState(null);
  const [searchBar, setSearchBar] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const pathname = usePathname();
  const router = useRouter(); // useRouter for navigation

  // Check if the URL contains "/news/" followed by a number
  const newsIdMatch = pathname.match(/\/news\/(\d+)/);

  const searchBarHandler = () => {
    setSearchBar(!searchBar);
    document.querySelector('.search-form input').focus()
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (searchInput.trim()) {
      router.push(`/search-results?query=${encodeURIComponent(searchInput)}`); // navigate to /search/{input value}
    }
  };
  const handleMobileMenu = () => {
    setSearchBar(false);
    handleOffCanvas()
  }
  return (
    <>
      <header className={`${whiteHeader ? "white-header" : ""}`}>
        <div
          id="header-sticky"
          className={`header-1 ${scroll ? "sticky" : ""} ${searchBar ? "search-bg" : ""
            }`}
        >
          <div className={`container ${!newsIdMatch ? "custom-container" : ""}`}>
            <div className="mega-menu-wrapper">
              <div className="header-main style-2">
                <div className="header-left">
                  <div className="logo">
                    {whiteHeader ? (
                      <Link href="/" className="header-logo">
                        <Image
                          width={85}
                          height={52}
                          src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/nav/logo-color.png"
                          alt="logo-img"
                        />
                      </Link>
                    ) : (
                      <Link href="/" className="header-logo">
                        {
                          scroll ? (
                            <Image
                              width={85}
                              height={52}
                              src={`https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/nav/logo-color.png`}
                              alt="logo-img"
                            />
                          ) : (
                            <Image
                              width={85}
                              height={52}
                              src={`https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/nav/logo.png`}
                              alt="logo-img"
                            />
                          )
                        }
                      </Link>
                    )}
                  </div>
                </div>
                <div className="header-right">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <Menu />
                      </nav>
                    </div>
                  </div>
                  <div className="header__hamburger d-lg-none my-auto">
                    <div className="sidebar__toggle" onClick={handleMobileMenu}>
                      <i className="fas fa-bars" />
                    </div>
                  </div>
                </div>
                <div className="tafakuur-controls">
                  <span onClick={searchBarHandler}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                </div>
              </div>
              <div
                className={`search-input d-flex align-items-center ${searchBar ? "active" : ""
                  }`}
              >
                <form className="search-form" onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    placeholder="ابحث في  موقع تفكر"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                  <button type="submit" className="search-button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
