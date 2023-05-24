import styles from "./About.module.css";
export default function About() {
  return (
    <>
      <h2 id="about">About me</h2>
      <div className={styles.aboutContainer}>
        <p>
          As an enthusiastic individual passionate about new technologies and
          web development, I actively dedicate my free time to continuous
          learning.</p>
          
          <p> Motivated by a relentless drive for personal and
          professional growth, I took the initiative to expand my skills through
          self-directed learning. Additionally, I successfully completed the{" "}
          <b>Full Stack Web Development Bootcamp at Ironhack</b>, where I gained
          hands-on experience and acquired valuable knowledge in various coding
          concepts. Currently, I am actively seeking an organization that
          embraces a fast-paced environment, encourages ongoing learning and
          professional development, and offers exciting products. Above all, I
          value teamwork and seek a collaborative work environment that fosters
          both personal and collective growth.
        </p>
        <p>
          I´m looking for an organization that moves fast, gives{" "}
          <u>time and resources to learn and grow</u>, with exciting products,
          and <u>teamwork values</u>. In short, a work environment that fosters
          collaboration and learning.
        </p>
      </div>
    </>
  );
}
