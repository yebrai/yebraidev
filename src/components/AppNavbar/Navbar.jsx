import Link from "next/link";
import { navbarLinks } from "../../assets/links/links";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <ul className={styles.container}>
        <div className={styles.navLinks}>
          {navbarLinks.map(({ label, route, description }) => {
            return (
              <div key={route}>
                <li className={styles.icons}>
                  <a href={route} target="_blank" rel="noreferrer">
                    {label} {description}
                  </a>
                </li>
              </div>
            );
          })}
        </div>
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