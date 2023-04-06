import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <>
      <h2>Skills</h2>
      <ul className={styles.skillsUl}>
        <li>
          <p>Javascript</p>
        </li>
        <li>
          <p>Typescript</p>
        </li>
        <li>
          <p>ReactJS</p>
        </li>
        <li>
          <p>NextJS</p>
        </li>
        <li>
          <p>Git</p>
          <p className={styles.details}>(Github)</p>
        </li>
        <li>
          <p>NoSql</p>
          <p className={styles.details}>(MongoDB)</p>
        </li>
        <li>
          <p>NodeJS</p>
        </li>
        <li>
          <p>ExpressJs</p>
        </li>
        <li>
          <p>Scrum</p>
          <p className={styles.details}>(Agile)</p>
        </li>
      </ul>
    </>
  );
}
