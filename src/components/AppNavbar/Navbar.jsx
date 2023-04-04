import {navbarLinks} from "../../assets/links/links";
import styles from "./Navbar.module.css";

export default function Navbar() {


  return (
    <>
      <ul className={styles.container}>
        {navbarLinks.map(({ label, route, description }) => {
          return (
            <div key={route}>
              <li className={styles.icons}>
                <a href={route} target="_blank" rel="noreferrer">{label} {description}</a>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
}
