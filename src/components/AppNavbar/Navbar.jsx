import Link from "next/link";
import { navbarLinks } from "../../assets/links/links";
import styles from "./Navbar.module.css";
import { useStore } from "@/hooks/useLanguage";
import { useEffect } from "react";
import { languageAction } from '../../hooks/useLanguage'

export default function Navbar() {
  const { interchangeLanguage, toLanguage } = useStore()

  useEffect(() => {
    console.log(languageAction)
  },[toLanguage])

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
            <button onClick={interchangeLanguage}>En/Es</button>
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
