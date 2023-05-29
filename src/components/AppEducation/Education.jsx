import styles from "./Education.module.css";
export default function Education() {
  return (
    <section id="educationSection">
      <h2 id="education">Education & Certifications</h2>
      <div className={styles.educationContainer}>
        <div>
          <h4>Scrum Fundamentals Certified</h4>
          <p className={styles.titleEducation}>
            <b>
              <a href="https://www.scrumstudy.com/">SCRUMstudy</a>
            </b>{" "}
            April 2023
          </p>
          <p className={styles.titleEducationDescription}>
            Understanding of how the Scrum framework works to carry out a
            successful project, project initiation phases, and how the Scrum
            framework works.
          </p>
          <a className={styles.certification} href="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-Iv%C3%A1nGarc%C3%ADaYebra-972400.pdf">
          🔗  Certification
          </a>
        </div>

        <div>
          <h4>Full Stack Web Development Degree</h4>
          <div className={styles.titleContainer}>
            <p className={styles.titleEducation}>
              <b>
                <a href="https://www.ironhack.com/">IRONHACK</a>
              </b>{" "}
              September 2022 - November 2022
            </p>
          </div>
          <p>
            Immersive Bootcamp specialized in developing projects with MERN
            stack under agile methodologies.
          </p>
          <p>
            <b>Frontend technologies:</b> HTML, CSS, JavaScript(ES6), React
            (with Hooks), Handlebars.
          </p>
          <p>
            <b>Backend technologies:</b> Express.js, Node.js, MongoDB, REST
            APIs, Fetch APIs, Axios.
          </p>
          <a className={styles.certification} href="https://drive.google.com/file/d/1eicZaI4vGKEmJz8iqbBlp2hbtzMYWeCO/view?usp=sharing">
          🔗 Certification
          </a>
        </div>
      </div>
    </section>
  );
}
