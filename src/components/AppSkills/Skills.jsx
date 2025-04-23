import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faCheckCircle, faServer, faCloud } from '@fortawesome/free-solid-svg-icons';
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skillsSection">
      <h2 id="skills">Skills</h2>
      
      <div className={styles.skillsContainer}>
        <div className={styles.skillsCategory}>
          <div className={styles.categoryHeader}>
            <FontAwesomeIcon icon={faCode} className={styles.categoryIcon} />
            <h3 className={styles.categoryTitle}>Core Languages</h3>
          </div>
          <div className={styles.skillsList}>
            <div className={styles.skillItem}>
              <span>Go</span>
            </div>
            <div className={styles.skillItem}>
              <span>PHP</span>
            </div>
            <div className={styles.skillItem}>
              <span>JavaScript/TypeScript</span>
            </div>
          </div>
        </div>

        <div className={styles.skillsCategory}>
          <div className={styles.categoryHeader}>
            <FontAwesomeIcon icon={faServer} className={styles.categoryIcon} />
            <h3 className={styles.categoryTitle}>Frameworks & Libraries</h3>
          </div>
          <div className={styles.skillsList}>
            <div className={styles.skillItem}>
              <span>Gin/Echo</span>
            </div>
            <div className={styles.skillItem}>
              <span>Symfony/Laravel</span>
            </div>
            <div className={styles.skillItem}>
              <span>Node.js/Express</span>
            </div>
            <div className={styles.skillItem}>
              <span>Vue.js</span>
            </div>
            <div className={styles.skillItem}>
              <span>React/Next.js</span>
            </div>
          </div>
        </div>

        <div className={styles.skillsCategory}>
          <div className={styles.categoryHeader}>
            <FontAwesomeIcon icon={faCloud} className={styles.categoryIcon} />
            <h3 className={styles.categoryTitle}>Cloud & DevOps</h3>
          </div>
          <div className={styles.skillsList}>
            <div className={styles.skillItem}>
              <span>Google Cloud Platform</span>
            </div>
            <div className={styles.skillItem}>
              <span>Kubernetes</span>
            </div>
            <div className={styles.skillItem}>
              <span>Docker</span>
            </div>
            <div className={styles.skillItem}>
              <span>Terraform</span>
            </div>
            <div className={styles.skillItem}>
              <span>GitHub Actions</span>
            </div>
          </div>
        </div>

        <div className={styles.skillsCategory}>
          <div className={styles.categoryHeader}>
            <FontAwesomeIcon icon={faDatabase} className={styles.categoryIcon} />
            <h3 className={styles.categoryTitle}>Databases & Messaging</h3>
          </div>
          <div className={styles.skillsList}>
            <div className={styles.skillItem}>
              <span>PostgreSQL</span>
            </div>
            <div className={styles.skillItem}>
              <span>MySQL</span>
            </div>
            <div className={styles.skillItem}>
              <span>MongoDB</span>
            </div>
            <div className={styles.skillItem}>
              <span>Redis</span>
            </div>
            <div className={styles.skillItem}>
              <span>Elasticsearch</span>
            </div>
            <div className={styles.skillItem}>
              <span>RabbitMQ</span>
            </div>
            <div className={styles.skillItem}>
              <span>PUB/SUB</span>
            </div>
          </div>
        </div>

        <div className={styles.skillsCategory}>
          <div className={styles.categoryHeader}>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.categoryIcon} />
            <h3 className={styles.categoryTitle}>Architecture & Methodologies</h3>
          </div>
          <div className={styles.skillsList}>
            <div className={styles.skillItem}>
              <span>Domain-Driven Design</span>
            </div>
            <div className={styles.skillItem}>
              <span>Event-Driven Architecture</span>
            </div>
            <div className={styles.skillItem}>
              <span>Microservices</span>
            </div>
            <div className={styles.skillItem}>
              <span>Modular Monolithic</span>
            </div>
            <div className={styles.skillItem}>
              <span>Hexagonal Architecture</span>
            </div>
            <div className={styles.skillItem}>
              <span>SOLID Principles</span>
            </div>
            <div className={styles.skillItem}>
              <span>TDD</span>
            </div>
          </div>
        </div>

        <div className={styles.skillsCategory}>
          <div className={styles.categoryHeader}>
            <FontAwesomeIcon icon={faServer} className={styles.categoryIcon} />
            <h3 className={styles.categoryTitle}>Monitoring & Observability</h3>
          </div>
          <div className={styles.skillsList}>
            <div className={styles.skillItem}>
              <span>New Relic</span>
            </div>
            <div className={styles.skillItem}>
              <span>Grafana</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}