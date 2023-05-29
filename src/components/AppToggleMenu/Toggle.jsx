import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from "./Toggle.module.css";
import {ToggleIcon, ToggleIconCancel} from "../../assets/icons/icons"

const ToggleMenu = ({toggleDropdown, isOpen}) => {


  return (
    <div>
      <motion.button onClick={toggleDropdown} className={styles.toggleButton}>{isOpen ? <ToggleIconCancel/> : <ToggleIcon/>}</motion.button>
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: isOpen ? 0 : -200 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.6 }}
        className={isOpen ? styles.openContainer : styles.container}
      >
        <ul className={styles.toggleLinks}>
          <Link href="#portfolio" onClick={toggleDropdown}>Proyects</Link>
          <Link href="#skills" onClick={toggleDropdown}>Skills</Link>
          <Link href="#education" onClick={toggleDropdown}>Education</Link>
          <Link href="#about" onClick={toggleDropdown}>About me</Link>
        </ul>
      </motion.div>
    </div>
  );
};

export default ToggleMenu;
