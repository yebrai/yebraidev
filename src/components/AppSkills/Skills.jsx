import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faJs, faGolang, faPhp, faLinux, faDocker, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skillsSection">
      <h2 id="skills">Skills</h2>
      <ul className={styles.skillsUl}>
        <li className={styles.skillsCategory}>
          <h3 className={styles.categoryTitle}>Technologies</h3>
          <ul className={styles.skillsList}>
            <li><FontAwesomeIcon icon={faPhp} /><p>PHP</p></li>
            <li><FontAwesomeIcon icon={faJs} /><p>JavaScript</p></li>
            <li><FontAwesomeIcon icon={faGolang} /><p>Go (Golang)</p></li>
            <li><FontAwesomeIcon icon={faNodeJs} /><p>Node.js</p></li>
          </ul>
        </li>

        <li className={styles.skillsCategory}>
          <h3 className={styles.categoryTitle}>Frameworks & Libraries</h3>
          <ul className={styles.skillsList}>
            <li><FontAwesomeIcon icon={faPhp} /><p>Symfony</p></li>
            <li><FontAwesomeIcon icon={faPhp} /><p>Codeigniter</p></li>
            <li><FontAwesomeIcon icon={faPhp} /><p>CakePHP</p></li>
            <li><FontAwesomeIcon icon={faReact} /><p>ReactJS</p></li>
            <li><FontAwesomeIcon icon={faReact} /><p>NextJS</p></li>
          </ul>
        </li>

        <li className={styles.skillsCategory}>
          <h3 className={styles.categoryTitle}>DB & Infrastructure</h3>
          <ul className={styles.skillsList}>
            <li><FontAwesomeIcon icon={faDatabase} /><p>MySQL</p></li>
            <li><FontAwesomeIcon icon={faDatabase} /><p>MongoDB</p></li>
            <li><FontAwesomeIcon icon={faDatabase} /><p>Redis</p></li>
            <li><FontAwesomeIcon icon={faLinux} /><p>Linux</p></li>
            <li><FontAwesomeIcon icon={faDocker} /><p>Docker</p></li>
          </ul>
        </li>

        <li className={styles.skillsCategory}>
          <h3 className={styles.categoryTitle}>Methodologies</h3>
          <ul className={styles.skillsList}>
            <li><FontAwesomeIcon icon={faCheckCircle} /><p>DDD (Domain-Driven Design)</p></li>
            <li><FontAwesomeIcon icon={faCheckCircle} /><p>TDD (Test-Driven Development)</p></li>
            <li><FontAwesomeIcon icon={faCheckCircle} /><p>Hexagonal Architecture</p></li>
            <li><FontAwesomeIcon icon={faCheckCircle} /><p>SOLID</p></li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
