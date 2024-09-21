import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendarAlt, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styles from "./Experience.module.css";

const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate === 'Present' ? new Date() : new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;
  return years > 0 ? `${years} year${years > 1 ? 's' : ''}` : `${months} month${months > 1 ? 's' : ''}`;
};

const ExperienceItem = ({ title, company, website, startDate, endDate, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const duration = calculateDuration(startDate, endDate);

  return (
    <div className={`${styles.experienceBlock} ${isOpen ? styles.open : ''}`}>
      <div className={styles.experienceHeader} onClick={() => setIsOpen(!isOpen)}>
        <div>
          <h4>
            <FontAwesomeIcon icon={faBriefcase} className={styles.icon} />
            <span className={styles.title}>{title}</span>
            <a href={website} target="_blank" rel="noreferrer" className={styles.companyName}>
              at {company}
            </a>
          </h4>
          <div className={styles.titleExperience}>
            <span><FontAwesomeIcon icon={faCalendarAlt} /> {startDate} - {endDate} ({duration})</span>
          </div>
        </div>
        <span 
          className={`${styles.toggleIcon} ${isOpen ? styles.open : ""}`}
        >
          🔼
        </span>
      </div>
      <div className={`${styles.experienceContent} ${isOpen ? styles.contentOpen : styles.contentClosed}`}>
        {children}
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <section id="experienceSection">
      <h2 id="experience">Jobs</h2>
      <div className={styles.experienceContainer}>
        <ExperienceItem
          title="Backend Developer"
          company="CoverManager"
          website="https://www.covermanager.com"
          startDate="Mar. 2024"
          endDate="Present"
        >
          <p>• Optimized high-concurrency endpoints, enhancing response times by over 50% with asynchronous operations.</p>
          <p>• Migrated a monolithic system to a scalable microservices architecture using Domain-Driven Design (DDD) and Hexagonal Architecture principles.</p>
          <p>• Utilized NewRelic for real-time performance monitoring and optimization.</p>
          <p>• Managed deployments with AWS and Docker, and integrated CI/CD pipelines using Bitbucket.</p>
          <p>• Refined session and JWT token systems to support multiple users and sessions efficiently.</p>
          <p>• Refactored legacy code to improve readability and transformed it into scalable models.</p>
          <p>• Simplified and unified team code contributions, merging them into production branches.</p>
        </ExperienceItem>
        <ExperienceItem
          title="Full-stack Developer"
          company="DSS Network"
          website="https://www.dssnetwork.es"
          startDate="Apr. 2023"
          endDate="Mar. 2024"
        >
          <p>• Designed and implemented frontend architecture with Next.js 14.1, and supported backend using CakePHP 5 and PHP 8.1.</p>
          <p>• Engineered scalable solutions with MVC architecture, MySQL, and MongoDB.</p>
          <p>• Deployed Docker containers for local development across diverse technologies.</p>
          <p>• Integrated various APIs and payment platforms (e.g., Redsys, Stripe, Braintree) to enhance system functionality.</p>
          <p>• Developed an automatic SITEMAP generator, streamlining updates and saving time.</p>
        </ExperienceItem>
        <ExperienceItem
          title="Full-stack Developer"
          company="Antler"
          website="https://www.antler.co"
          startDate="Nov. 2022"
          endDate="Apr. 2023"
        >
          <p>• Created RESTful endpoints in Node.js for efficient server communication with MySQL and MongoDB.</p>
          <p>• Developed reusable React components and custom hooks to enhance efficiency and code reusability.</p>
          <p>• Implemented layouts and database connectivity using JavaScript (ES6), React, and Node.js.</p>
        </ExperienceItem>
      </div>
    </section>
  );
}
