import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const [textIndex, setTextIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  
  // Dividir el texto en tres partes: antes del enlace, el enlace, y después del enlace
  const textBeforeLink = "I enjoy working on personal projects and open source. My most ambitious projects are currently in private development with market launch planned for late 2025. One of these projects is ";
  const linkText = "https://psonder.com";
  const fullTextLength = textBeforeLink.length + linkText.length;
  
  useEffect(() => {
    // Typing effect
    if (textIndex < fullTextLength) {
      const typingTimeout = setTimeout(() => {
        setTextIndex(prev => prev + 1);
      }, 40);
      
      return () => clearTimeout(typingTimeout);
    }
  }, [textIndex, fullTextLength]);
  
  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Renderizar texto escrito hasta ahora
  const renderText = () => {
    // Si no hemos llegado al enlace todavía
    if (textIndex <= textBeforeLink.length) {
      return (
        <>
          {textBeforeLink.substring(0, textIndex)}
        </>
      );
    } 
    // Si estamos escribiendo el enlace
    else {
      const linkPartLength = textIndex - textBeforeLink.length;
      return (
        <>
          {textBeforeLink}
          <a 
            href="https://psonder.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.terminalLink}
          >
            {linkText.substring(0, linkPartLength)}
          </a>
        </>
      );
    }
  };
  
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
              {renderText()}
              <span className={`${styles.cursor} ${cursorVisible ? styles.visible : ''}`}>▋</span>
            </div>
            
            <div className={styles.terminalLine} style={{ opacity: textIndex >= fullTextLength ? 1 : 0, transition: 'opacity 0.5s ease' }}>
              <span className={styles.terminalPrompt}>→ yebraidev@dev:~$</span>
              <span className={styles.terminalCommand}> open-link --github</span>
            </div>
            
            <div className={styles.terminalOutput} style={{ opacity: textIndex >= fullTextLength ? 1 : 0, transition: 'opacity 0.5s ease' }}>
              Opening <a href="https://github.com/yebrai" target="_blank" rel="noopener noreferrer" className={styles.terminalLink}>github.com/yebrai</a> in browser...
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}