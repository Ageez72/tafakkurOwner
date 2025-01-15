"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Offcanvas({ isOffCanvas, handleOffCanvas }) {
  return (
    <>
      <div className="fix-area">
        <div
          className={`offcanvas__info d-md-block d-lg-none ${isOffCanvas ? "info-open" : ""
            }`}
        >
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="">
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay d-md-block d-lg-none ${isOffCanvas ? "overlay-open" : ""
          }`}
        onClick={handleOffCanvas}
      />
    </>
  );
}
