import styles from "./Skills.module.css";
export default function Skills() {
  return (
    <section id="skillsSection">
      <h2 id="skills">Skills</h2>
      <ul className={styles.skillsUl}>
        <li>
          <p>Javascript</p>
        </li>
        <li>
          <p>Testing <span>(Jest) </span></p>
        </li>
        <li>
          <p>ExpressJS</p>
        </li>
        <li>
          <p>PHP</p>
        </li>
        <li>
          <p>NodeJS</p>
        </li>

        <li>
          <p>JQuery</p>
        </li>
        <li>
          <p>ReactJS</p>
        </li>
        <li>
          <p>MongoDB</p>
        </li>
        <li>
          <p>CakePHP</p>
        </li>
        <li>
          <p>NextJS</p>
        </li>
      </ul>
    </section>
  );
}
