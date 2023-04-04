import Image from "next/image";
import styles from "./Portfolio.module.css";
import {portfolioLinks} from "../../assets/links/links";

export default function Portfolio() {
  return (
    <>
      <div>
        <h3>Portfolio </h3>
        <ul className={styles.mainUl}>
          {portfolioLinks.map(({ imageSrc, title, techs, linkCode, linkDemo }, i) => {
            return (
              <li key={i}>
                <h4>{title}</h4>
                <div className={styles.image}>
                  <Image className={styles.imageCard} src={imageSrc} fill={true} alt={title}></Image>
                </div>
                <div className={styles.techsContainer}>
                  {techs.map((each, i) => (
                    <p  key={i}>{each}</p>
                  ))}
                </div>
                <div className={styles.buttonContainer}>
                  <a href={linkCode} target="_blank" rel="noreferrer">
                    <button className={styles.btn}>Code</button>
                  </a>
                  <a href={linkDemo} target="_blank" rel="noreferrer">
                    <button className={styles.btnDemo}>Demo</button>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
