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
          Backend Developer with 2+ years of experience. Specialized in server-side solutions with a strong background in front-end, cloud, and Linux technologies. Passionate about Clean Code and focused on creating scalable, readable code to support team collaboration and efficient workflows.
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
            href="https://drive.google.com/file/d/1Cs92rk2A4Pyj0Fo0AyfVvUbAdjl15Trh/view?usp=drive_link" 
            target="_blank" 
            rel="noreferrer" 
            onClick={handleDownload} // Agregar el manejador de clics aquí
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
