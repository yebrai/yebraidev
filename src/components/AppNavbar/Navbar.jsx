import {navbarLinks} from "../../assets/links/links";
import styles from "./Navbar.module.css";
import stylesBtn from "../AppPortfolio/Portfolio.module.css";
import { GrDownload } from "react-icons/Gr";


export default function Navbar() {


  return (
    <>
            <ul className={styles.container}>
    <div className={styles.navLinks}>
        {navbarLinks.map(({ label, route, description }) => {
          return (
            <div key={route}>
              <li className={styles.icons}>
                <a href={route} target="_blank" rel="noreferrer">{label} {description}</a>
              </li>
            </div>
          );
        })}
    </div>
    <div></div>
      </ul>

    </>
  );
}
