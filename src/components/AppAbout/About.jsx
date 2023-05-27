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
          I'm a creative Web Developer based in Seville. My focus is on developing intuitive and visually appealing interfaces. I'm actively seeking opportunities to grow and collaborate on projects that enhance my skills, while remaining committed to delivering quality and high-performance solutions. I'm always ready to take on new challenges as a developer.
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
      <a href="https://drive.google.com/file/d/1K4K1C9jvJ2E0jnPilNqqqJdgCIDxaQJG/view?usp=share_link" download="true">Download CV</a>
      </div>
      <div className={styles.aboutContainer}>
      </div>
    </motion.div>
    </>
  );
}
