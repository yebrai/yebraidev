import styles from "./Navbar.module.css";
import ToggleMenu from "../AppToggleMenu/Toggle";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);

  };
  return (
    <>
      <ul className={isOpen ? styles.openContainer : styles.container}>
        <div className={styles.navSections}>
        <ToggleMenu toggleDropdown={toggleDropdown} isOpen={isOpen}/>
        <h1>Yebrai<name>dev</name></h1>
        </div>
      </ul>
    </>
  );
}