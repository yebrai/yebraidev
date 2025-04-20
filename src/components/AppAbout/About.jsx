import { iconsLink } from "@/assets/links/links";
import styles from "./About.module.css";
import { motion } from 'framer-motion';
import useAnimations from "@/hooks/useAnimations";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLayerGroup, faBullseye } from '@fortawesome/free-solid-svg-icons';

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
        <div className={styles.aboutContainer}>
          <p className={styles.profileSummary}>
          Backend specialist building robust server-side solutions with cloud and Linux background. I deliver clean, scalable code with a proven ability to rapidly adapt to new environments, technologies, and requirements while maintaining high quality standards.
          </p>
          
          <div className={styles.experienceBoxes}>
            <div className={styles.expBox}>
              <FontAwesomeIcon icon={faCode} className={styles.expIcon} />
              <div className={styles.expText}>
                <span className={styles.expYears}>4+</span>
                <span className={styles.expLabel}>Years as Software Engineer</span>
              </div>
            </div>
            
            <div className={styles.expBox}>
              <FontAwesomeIcon icon={faLayerGroup} className={styles.expIcon} />
              <div className={styles.expText}>
                <span className={styles.expYears}>9+</span>
                <span className={styles.expLabel}>Services, Systems & Teams</span>
              </div>
            </div>
          </div>
          
          <div className={styles.missionContainer}>
            <FontAwesomeIcon icon={faBullseye} className={styles.missionIcon} />
            <p className={styles.missionText}>
              Building sustainable systems that deliver real impact and long-term value
            </p>
          </div>
        </div>
        
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
      </motion.div>
    </>
  );
}