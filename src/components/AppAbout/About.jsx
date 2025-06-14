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
          Backend specialist with frontend and cloud background. I build scalable, maintainable systems with a strong focus on clean architecture and performance. Experienced in migrating services to distributed architectures.
          <br /><br />
          Golang & MongoDB community leader.
        </p>
          
          <div className={styles.experienceBoxes}>
            <div className={styles.expBox}>
              <FontAwesomeIcon icon={faCode} className={styles.expIcon} />
              <div className={styles.expText}>
                <span className={styles.expYears}>4+</span>
                <span className={styles.expLabel}>Years collaborating as Software Engineer</span>
              </div>
            </div>
            
            <div className={styles.expBox}>
              <FontAwesomeIcon icon={faLayerGroup} className={styles.expIcon} />
              <div className={styles.expText}>
                <span className={styles.expYears}>9+</span>
                <span className={styles.expLabel}>Projects with Diverse Teams & Architectures</span>
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
            href="https://drive.google.com/file/d/1mJA_Krgl5RoANg0wP2fjA-SGt15LEZPA/view?usp=drive_link" 
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