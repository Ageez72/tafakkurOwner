import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";
export default function Menu() {
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
        <li>
          <Link href="/" style={{ pointerEvents: "none" }}>{translation.menu.orgnizationsServices}<i className="fas fa-angle-down ps-1"></i></Link>
          <ul className="submenu">
            <li><Link href="/tafakkur-curriculum">{translation.menu.thinkAnos}</Link></li>
            <li>
              <Link href="/our-clients">{translation.menu.appliedOrgnizations}</Link>
            </li>
            <li>
              <Link href="/client-testimonial">{translation.menu.successStories}</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/" style={{ pointerEvents: "none" }}>{translation.menu.familyServices}<i className="fas fa-angle-down ps-1"></i></Link>
          <ul className="submenu">
            <li><Link href="/tafakkur-training">{translation.menu.thinkTrain}</Link></li>
            <li><Link href="/tafakkur-publishers">{translation.menu.thinkPublishers}</Link></li>
            <li><Link href="/tafakkur-academy">{translation.menu.tafakkurAcademy}</Link></li>
          </ul>
        </li>
        <li className={isActive("/contact-us")}>
          <Link href="/contact-us">{translation.menu.contactus}</Link>
        </li>
      </ul>
    </>
  );
}
