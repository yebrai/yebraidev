import { iconsLink } from "@/assets/links/links";
import styles from "./About.module.css";
import { motion, useAnimation } from 'framer-motion';
import useAnimations from "@/hooks/useAnimations";

export default function About() {
  const controls = useAnimations(2, true);

  const handleDownload = () => {
    window.gtag('event', 'download', {
      event_category: 'CV',
      event_label: 'CV Download',
      value: 1,
    });
  };

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={controls}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <p className={styles.aboutText}>
        Backend Developer specialized in building robust server-side solutions. With a strong background in front-end, cloud, and Linux technologies, I focus on delivering clean, scalable code that fosters team collaboration and efficient workflows. Passionate about Clean Code principles, I aim to create systems that are not only functional but maintainable and adaptable.
        </p>
        <ul className={styles.iconsMain}>
          {iconsLink.map(({ label, route }) => (
            <div key={route} className={styles.iconContainer}>
              <li className={styles.icons}>
                <a href={route} target="_blank" rel="noreferrer">
                  {label}
                </a>
              </li>
            </div>
          ))}
        </ul>
        <div className={styles.downloadContainer}>
          <a 
            href="https://drive.google.com/file/d/1lFYYH5g6LbH2NaLgEeJiL_yFPh2f9iRU/view?usp=drive_link" 
            target="_blank" 
            rel="noreferrer" 
            onClick={handleDownload}
            download="true"
          >
            Download CV
          </a>
        </div>
        <div className={styles.aboutContainer}>
        </div>
      </motion.div>
    </>
  );
}
