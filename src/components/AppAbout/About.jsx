import { iconsLink } from "@/assets/links/links";
import styles from "./About.module.css";
import { motion, useAnimation } from 'framer-motion';
import useAnimations from "@/hooks/useAnimations";

export default function About() {

  const controls = useAnimations(2, true);

  return (
    <>
        <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <p className={styles.aboutText}>
      Backend Developer with 2+ years of experience. Specialised in server-side solutions with strong background in front-end, cloud and linux technologies. Passionate about SOLID principles and delivering readable, scalable and maintainable products.
      </p>
      <ul className={styles.iconsMain}>
        {iconsLink.map(({ label, route }) => {
          return (
            <div key={route} className={styles.iconContainer}>
              <li className={styles.icons}>
                <a href={route} target="_blank" rel="noreferrer">
                  {label}
                </a>
              </li>
            </div>
          );
        })}
      </ul>
      <div className={styles.downloadContainer}>
      <a href="https://drive.google.com/file/d/1Cs92rk2A4Pyj0Fo0AyfVvUbAdjl15Trh/view?usp=drive_link" target="_blank" rel="noreferrer" download="true">Download CV</a>
      </div>
      <div className={styles.aboutContainer}>
      </div>
    </motion.div>
    </>
  );
}
