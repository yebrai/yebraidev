import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const [terminalText, setTerminalText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  
  const fullText = "I enjoy working on personal projects and open source. My most ambitious projects are currently in private development with market launch planned for late 2025. One of these projects is https://psonder.com";
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTerminalText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40);
    
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);
  
  return (
    <section id="portfolioSection" className={styles.portfolioSection}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 id="portfolio">Personal Projects</h2>
        
        <div className={styles.terminalContainer}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalButtons}>
              <span className={`${styles.terminalButton} ${styles.closeButton}`}></span>
              <span className={`${styles.terminalButton} ${styles.minimizeButton}`}></span>
              <span className={`${styles.terminalButton} ${styles.maximizeButton}`}></span>
            </div>
            <div className={styles.terminalTitle}>yebraidev-projects</div>
          </div>
          
          <div className={styles.terminalBody}>
            <div className={styles.terminalLine}>
              <span className={styles.terminalPrompt}>→ yebraidev@dev:~$</span>
              <span className={styles.terminalCommand}> get-projects --status</span>
            </div>
            
            <div className={styles.terminalOutput}>
              {terminalText}
              <span className={`${styles.cursor} ${cursorVisible ? styles.visible : ''}`}>▋</span>
            </div>
            
            <div className={styles.terminalLine}>
              <span className={styles.terminalPrompt}>→ yebraidev@dev:~$</span>
              <span className={styles.terminalCommand}> open-link --github</span>
            </div>
            
            <div className={styles.terminalOutput}>
              Opening <a href="https://github.com/yebrai" target="_blank" rel="noopener noreferrer" className={styles.terminalLink}>github.com/yebrai</a> in browser...
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}