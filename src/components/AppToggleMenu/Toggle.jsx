import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from "./Toggle.module.css";

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <motion.button onClick={toggleDropdown}>Abrir</motion.button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          style={{ backgroundColor: 'white', padding: '20px' }}
        >
                <ul className={styles.container}>
        <div className={styles.navSections}>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#education">Education</Link>
          <Link href="#about">About me</Link>
        </div>
          <ToggleMenu/>
          
      </ul>
        </motion.div>
      )}
    </div>
  );
};

export default ToggleMenu;
