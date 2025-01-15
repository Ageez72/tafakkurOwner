import Link from "next/link";

export default function OnePageNav() {
  return (
    <>
      <ul>
        <li>
          <Link href="#about">Home 2</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#service">Services</Link>
        </li>
        <li>
          <Link href="#project">Projects</Link>
        </li>
        <li>
          <Link href="#team">Affiliates</Link>
        </li>
        <li>
          <Link href="#blog">Announcements</Link>
        </li>
        <li>
          <Link href="#blog">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}
