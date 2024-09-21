import styles from "./Education.module.css";
export default function Education() {
  return (
    <section id="educationSection">
      <h2 id="education">Education</h2>
      <div className={styles.educationContainer}>
        <div>
          <h4>Full Stack Web Development Degree</h4>
          <div>
            <p className={styles.titleEducation}>
              <b>
                <a target="_blank" href="https://www.ironhack.com/" rel="noreferrer">IRONHACK</a>
              </b>{" "}
              <span> September 2022 - November 2022 </span> 
            </p>
          </div>
          <p>
            Immersive Bootcamp specialized in developing projects with MERN stack under agile methodologies.
          </p>
          <p>
            <b>Frontend technologies:</b> HTML, CSS, JavaScript(ES6), React, Handlebars.
          </p>
          <p>
            <b>Backend technologies:</b> Express.js, Node.js, MongoDB, REST APIs, Fetch APIs, Axios.
          </p>
          <p>
            <b>Testing:</b> Jasmine.
          </p>
          <a className={styles.certification} target="_blank" href="https://drive.google.com/file/d/1eicZaI4vGKEmJz8iqbBlp2hbtzMYWeCO/view?usp=sharing" rel="noreferrer">
            🔗 Certification
          </a>
        </div>
        <div>
          <h4>Backend Development Course</h4>
          <p className={styles.titleEducation}>
            <b>
              <a target="_blank" href="https://www.corenetworks.es/" rel="noreferrer">Core Networks</a>
            </b>{" "}
            <span>June 2022 - August 2022</span>
          </p>
          <p>
            Intensive hands-on training focused on advanced backend development, covering essential concepts and practical skills.
          </p>
          <p>
            <b>Frontend technologies covered:</b> HTML, CSS, JavaScript (ES6).
          </p>
          <p>
            <b>Backend technologies covered:</b> PHP, C++.
          </p>
          <p>
            <b>Infrastructure & Database:</b> MySQL, Linux, Virtual Machine Architecture (VMA), Docker.
          </p>
        </div>
        <div>
          <h4>Self-taught Web and Cloud Development</h4>
          <p className={styles.titleEducation}>
            <span>2021 - Present</span>
          </p>
          <p>
            Passionate about exploring and mastering development environments, focusing on low-level systems and full-stack solutions.
          </p>
          <p>
            <b>Tools & Technologies:</b> PHPStorm, GoLand, VSCode, Docker, Kubernetes, Jenkins, GitHub Actions, AWS, New Relic, Grafana, Elastic.
          </p>
        </div>
      </div>
    </section>
  );
}