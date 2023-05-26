import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <ul className={styles.container}>
        <div className={styles.navSections}>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#education">Education</Link>
          <Link href="#about">About me</Link>
        </div>
      </ul>
    </>
  );
}