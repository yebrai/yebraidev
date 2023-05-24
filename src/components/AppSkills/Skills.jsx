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
          <p>Unit Testing</p>
          <span className={styles.details}>(Jest)</span>
        </li>
        <li>
          <p>ExpressJS</p>
        </li>
        <li>
          <p>Typescript</p>
        </li>
        <li>
          <p>NodeJS</p>
        </li>

        <li>
          <p>Git</p>
          <span className={styles.details}>(Github)</span>
        </li>
        <li>
          <p>ReactJS</p>
        </li>
        <li>
          <p>NoSql</p>
          <span className={styles.details}>(MongoDB)</span>
        </li>
        <li>
          <p>Scrum</p>
          <span className={styles.details}>(Agile)</span>
        </li>
        <li>
          <p>NextJS</p>
        </li>
      </ul>
    </section>
  );
}
