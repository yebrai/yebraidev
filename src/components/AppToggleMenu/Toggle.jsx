import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from "./Toggle.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ToggleIcon, ToggleIconCancel} from "../../assets/icons/icons"
import {BiHomeAlt2} from "react-icons/bi"
import {TbSchool} from 'react-icons/tb'
import {RiPagesLine} from 'react-icons/ri'
import {MdOutlineLanguage} from 'react-icons/md'
import { FaMeetup } from "react-icons/fa";
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';


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
          <Link href="#about" onClick={toggleDropdown}><BiHomeAlt2 />About me</Link>
          <Link href="#experience" onClick={toggleDropdown}><FontAwesomeIcon icon={faBriefcase}/>Jobs</Link>
          <Link href="#skills" onClick={toggleDropdown}><MdOutlineLanguage/>Skills</Link>
          <Link href="#communityInvolvement" onClick={toggleDropdown}><FaMeetup/>Community</Link>
          <Link href="#portfolio" onClick={toggleDropdown}><RiPagesLine/>Proyects</Link>
          <Link href="#education" onClick={toggleDropdown}><TbSchool size={20}/>Education</Link>
        </ul>
      </motion.div>
    </div>
  );
};

export default ToggleMenu;
