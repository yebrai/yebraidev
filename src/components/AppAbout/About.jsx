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
      I'm a Backend Developer with over 2 years of experience, based in Seville. I specialize in server-side solutions and have experience with front-end development and cloud technologies. I thrive on challenging projects, enjoy collaborating with individuals, and am dedicated to continuously growing my developer skills.
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
