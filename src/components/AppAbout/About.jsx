import styles from "./About.module.css";
export default function About() {
  return (
    <>
      <h2 id="about">About me</h2>
      <div className={styles.aboutContainer}>
        <p>
        I'm a creative Web Developer based in Seville. My focus is on developing intuitive and visually appealing interfaces. I'm actively seeking opportunities to grow and collaborate on projects that enhance my skills, while remaining committed to delivering quality and high-performance solutions. I'm always ready to take on new challenges as a developer
        </p>
      </div>
    </>
  );
}
