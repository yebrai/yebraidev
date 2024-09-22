import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
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

const ExperienceItem = ({ title, company, website, startDate, endDate, description, techs, projects, achievements }) => {
  const [isOpen, setIsOpen] = useState(false);
  const duration = calculateDuration(startDate, endDate);

  return (
    <div className={`${styles.experienceBlock} ${isOpen ? styles.open : ''}`}>
      <div className={styles.experienceHeader} onClick={() => setIsOpen(!isOpen)}>
        <div>
          <h4>
            <FontAwesomeIcon icon={faBriefcase} className={styles.icon} />
            <span className={styles.title}>{title}</span>
            <span className={styles.companyName}> at {company}</span>
          </h4>
          <div className={styles.titleExperience}>
            <span><FontAwesomeIcon icon={faCalendarAlt} /> {startDate} - {endDate} ({duration})</span>
          </div>
        </div>
        <span className={`${styles.toggleIcon} ${isOpen ? styles.open : ""}`}>🔼</span>
      </div>
      <div className={`${styles.experienceContent} ${isOpen ? styles.contentOpen : styles.contentClosed}`}>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Techs:</strong> {techs}</p>
        <p><strong>Projects:</strong> {projects.map((project, index) => (
          <span key={index}>
            <a href={project.url} target="_blank" rel="noreferrer">{project.name}</a>
            {index < projects.length - 1 && ', '}
          </span>
        ))}</p>
        <p><strong>My Achievements:</strong></p>
        {achievements.map((achievement, index) => (
          <p key={index}>• {achievement}</p>
        ))}
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
          description="CoverManager is a SaaS solution for managing event coverage and ticketing, designed to streamline the workflow of event organizers and enhance customer experience."
          techs="PHP, Node.js, CodeIgniter, Docker, AWS, Redis, MongoDB, MySQL"
          projects={[{ name: 'CoverManager', url: 'https://www.covermanager.com' }]}
          achievements={[
            "Optimized high-concurrency endpoints, enhancing response times by over 50% with asynchronous operations.",
            "Migrated a monolithic system to a scalable microservices architecture using Domain-Driven Design (DDD) and Hexagonal Architecture principles.",
            "Utilized NewRelic for real-time performance monitoring and optimization.",
            "Managed deployments with AWS and Docker, and integrated CI/CD pipelines using Bitbucket.",
            "Refined session and JWT token systems to support multiple users and sessions efficiently.",
            "Refactored legacy code to improve readability and transformed it into scalable models.",
            "Simplified and unified team code contributions, merging them into production branches."
          ]}
        />
        <ExperienceItem
          title="Full-stack Developer"
          company="DSS Network"
          website="https://www.dssnetwork.es"
          startDate="Apr. 2023"
          endDate="Mar. 2024"
          description="DSS Network is a digital agency specializing in web development and design, providing comprehensive solutions for businesses across various sectors."
          techs="Next.js, CakePHP, PHP, MySQL, MongoDB, Docker"
          projects={[
            { name: 'Teatro Flamenco Málaga', url: 'https://teatroflamencomalaga.com/' },
            { name: 'Teatro Flamenco Madrid', url: 'https://teatroflamencomadrid.com/' },
            { name: 'Teatro Flamenco Sevilla', url: 'https://teatroflamencosevilla.com/' },
            { name: 'Blex', url: 'https://blex.es/' },
            { name: 'Flamenco Cultural', url: 'https://flamencocultural.com/' },
            { name: 'Flamenco Tickets', url: 'https://flamencotickets.com/' }
          ]}
          achievements={[
            "Designed and implemented frontend architecture with Next.js 14.1, and supported backend using CakePHP 5 and PHP 8.1.",
            "Engineered scalable solutions with MVC architecture, MySQL, and MongoDB.",
            "Deployed Docker containers for local development across diverse technologies.",
            "Integrated various APIs and payment platforms (e.g., Redsys, Stripe, Braintree) to enhance system functionality.",
            "Developed an automatic SITEMAP generator, streamlining updates and saving time."
          ]}
        />
        <ExperienceItem
          title="Full-stack Developer"
          company="Antler"
          website="https://www.antler.co"
          startDate="Nov. 2022"
          endDate="Apr. 2023"
          description="Antler is a global startup generator and early-stage venture capital firm, focused on building and investing in world-class technology startups."
          techs="Node.js, MySQL, MongoDB, React"
          projects={[{ name: 'Antler', url: 'https://www.antler.co' }]}
          achievements={[
            "Created RESTful endpoints in Node.js for efficient server communication with MySQL and MongoDB.",
            "Developed reusable React components and custom hooks to enhance efficiency and code reusability.",
            "Implemented layouts and database connectivity using JavaScript (ES6), React, and Node.js."
          ]}
        />
      </div>
    </section>
  );
}
