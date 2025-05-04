import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
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
  const router = useRouter();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Manejador de clics fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si el menú está abierto y el clic no fue ni en el menú ni en el botón
      if (
        isOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        toggleDropdown();
      }
    };

    // Agregar el event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Limpiar el event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleDropdown]);

  // Función para construir la URL de destino
  const getHref = (hash) => {
    // Si estamos en la página principal, solo usamos el hash
    // De lo contrario, volvemos a la página principal con el hash
    return router.pathname === '/' ? hash : `/${hash}`;
  };

  return (
    <div>
      <motion.button 
        ref={buttonRef}
        onClick={toggleDropdown} 
        className={styles.toggleButton}
      >
        {isOpen ? <ToggleIconCancel/> : <ToggleIcon/>}
      </motion.button>
      <motion.div
        ref={menuRef}
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: isOpen ? 0 : -200 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.6 }}
        className={isOpen ? styles.openContainer : styles.container}
      >
        <ul className={styles.toggleLinks}>
          <Link href="/#about" onClick={toggleDropdown}><BiHomeAlt2 />About me</Link>
          <Link href="/#experience" onClick={toggleDropdown}><FontAwesomeIcon icon={faBriefcase}/>Jobs</Link>
          <Link href="/#skills" onClick={toggleDropdown}><MdOutlineLanguage/>Skills</Link>
          <Link href="/#communityInvolvement" onClick={toggleDropdown}><FaMeetup/>Community</Link>
          <Link href="/#portfolio" onClick={toggleDropdown}><RiPagesLine/>Proyects</Link>
          {/* <Link href="/#education" onClick={toggleDropdown}><TbSchool size={20}/>Education</Link> */}
        </ul>
      </motion.div>
    </div>
  );
};

export default ToggleMenu;