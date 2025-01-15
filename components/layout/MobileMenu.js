import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";

export default function MobileMenu() {
  const { state, dispatch } = useAppContext();
  const translation = state.LANG === "en" ? en : ar;
  const handleChangeLanguage = (e) => {
    dispatch({ type: "LANG", payload: e });
    window.location.reload();
  };
  const pathname = usePathname();
  const isActive = (path) => {
    return pathname === path ? "active" : "";
  };
  return (
    <>
      <div className="mobile-menu fix mb-3 mean-container custom-container">
        <div className="mean-bar">
          <Link
            href="/#nav"
            className="meanmenu-reveal"
            style={{ right: 0, left: "auto", display: "inline" }}
          >
            <span>
              <span>
                <span />
              </span>
            </span>
          </Link>
          <nav className="mean-nav">
            <ul>
              <li className={isActive("/")}>
                <Link href="/">{translation.menu.home}</Link>
              </li>
              <li className={isActive("/about-us")}>
                <Link href="/about-us">{translation.menu.who}</Link>
              </li>
              <li className={isActive("/news")}>
                <Link href="/news">{translation.menu.news}</Link>
              </li>
              {/* <li className={isActive("/articles")}>
                <Link href="/articles">{translation.menu.articles}</Link>
              </li> */}
              <li className={isActive("/tafakkur-curriculum")}><Link href="/tafakkur-curriculum">{translation.menu.thinkAnos}</Link></li>
              <li className={isActive("/our-clients")}>
                <Link href="/our-clients">{translation.menu.appliedOrgnizations}</Link>
              </li>
              <li className={isActive("/client-testimonial")}>
                <Link href="/client-testimonial">{translation.menu.successStories}</Link>
              </li>
              <li className={isActive("/tafakkur-training")}><Link href="/tafakkur-training">{translation.menu.thinkTrain}</Link></li>
              <li className={isActive("/tafakkur-publishers")}><Link href="/tafakkur-publishers">{translation.menu.thinkPublishers}</Link></li>
              <li className={isActive("/tafakkur-academy")}><Link href="/tafakkur-academy">{translation.menu.tafakkurAcademy}</Link></li>
              <li className={isActive("/contact-us")}>
                <Link href="/contact-us">{translation.menu.contactus}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
