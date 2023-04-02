import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <>
      <h3>Skills</h3>
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
          <p>(Github)</p>
        </li>
        <li>
          <p>NoSql</p>
          <p>(MongoDB)</p>
        </li>
        <li>
          <p>NodeJS</p>
        </li>
        <li>
          <p>ExpressJs</p>
        </li>
      </ul>
    </>
  );
}
