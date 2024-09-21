import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Portfolio.module.css";
import { portfolioLinks } from "../../assets/links/links";

export default function Portfolio() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 627);
    };

    handleResize(); // Check initial screen width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCard = (index) => {
    if (isMobile) {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  return (
    <section id="portfolioSection">
      <h2 id="portfolio">Personal Projects</h2>
      <p>
        I enjoy working on personal projects, collaborating with others, and participating in open source. You can find many more on my <a href="https://github.com/yebrai" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
      <ul className={styles.mainUl}>
        {portfolioLinks.map(({ imageSrc, title, techs, linkCode, linkDemo, description }, i) => {
          const isOpen = openIndex === i;
          return (
            <li key={i} className={`${styles.card} ${isMobile && isOpen ? styles.active : ""}`}>
              <div className={styles.cardHeader} onClick={() => toggleCard(i)}>
                <h3>{title}</h3>
                {isMobile && (
                  <span className={`${styles.toggleIcon} ${isOpen ? styles.open : ""}`}>🔽</span>
                )}
              </div>
              <div className={`${styles.cardContent} ${isMobile && isOpen ? styles.openContent : ""} ${!isMobile ? styles.alwaysOpen : ""}`}>
                <div className={styles.image}>
                  <a href={linkDemo} target="_blank" rel="noreferrer">
                    <Image
                      className={styles.imageCard}
                      src={imageSrc}
                      fill={true}
                      alt={title}
                    />
                  </a>
                </div>
                <p className={styles.descriptionText}>{description}</p>
                <h4>Tech stack:</h4>
                <div className={styles.techsContainer}>
                  {techs.map((each, i) => (
                    <p key={i}>{each}</p>
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
              </div>
              <div className={styles.techsContainer}>
                {techs.map((each, i) => (
                  <p key={i}>{each}</p>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
