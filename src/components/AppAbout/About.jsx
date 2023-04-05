import styles from "./About.module.css";
import stylesBtn from "../AppPortfolio/Portfolio.module.css";

export default function About() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <h3>About me</h3>
        <p>
          With a background in <b>team management</b>, curious and enthusiastic
          about new technologies and web development, I like to spend my free
          time learning new things. After several years working with people and
          e-commerce, I'm seeking new horizons and opportunities on web
          development world. Due to my restless mind, I wanted to go further in
          my professional career and began learning by myself. I also studied
          the <b>Full Stack Web Development Bootcamp at Ironhack</b>, where I
          did my first projects and learned a lot of new and exciting things
          about coding.
        </p>
        <p>
          I'm looking for an organization that moves fast, gives{" "}
          <u>time and resources to learn and grow</u>, with exciting products,
          and <u>teamwork values</u>. In short, a work environment that fosters
          collaboration and learning.
        </p>
        <div className={styles.btnContainer}>
          <a
            href="https://drive.google.com/file/d/1stE7ndCjlA-zk9KQYWh4GfewJXXERdev/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <button className={stylesBtn.btn}>Check my resume</button>
          </a>
        </div>
      </div>
    </>
  );
}
