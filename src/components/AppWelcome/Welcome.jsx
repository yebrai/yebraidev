import Image from "next/image";
import ivanPng from "../../assets/images/ivanAv.png";
import styles from "./Welcome.module.css";
import { useEffect, useRef } from "react";
import { init } from "ityped";

export default function Welcome() {
  const textRef = useRef();
  const { welcome, toLanguage, interchangeLanguage} = useStore()

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 2000,
      typeSpeed: 100,
      strings: ["<Junior Front-End Developer />"],
    });
    
  }, []);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  const handleScroll = () => {
    const scrollOffset = 100
    const scrollPosition = window.innerHeight + window.pageYOffset;

    // Agregar o quitar la clase "visible" según la posición del scroll
    const sections = document.getElementsByClassName('scroll-section');
    Array.from(sections).forEach((section) => {
      const sectionPosition = section.offsetTop;
      if (scrollPosition >= sectionPosition + scrollOffset) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className={styles.containerMainSection}>
      <button onClick={interchangeLanguage}></button>
        <div className={styles.avatar}>
          <Image className={styles.avatarImage} src={ivanPng} fill={true} alt="Profile Image" />
        </div>
        <div>
          <h1 className={styles.presentation}>
            {welcome}<name> Ivan</name>
          </h1>
          <p className={styles.position} ref={textRef}></p>
        </div>
      </section>
    </>
  );
}
