import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendarAlt, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styles from "./Experience.module.css";

// Function to calculate duration
const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate === 'Present' ? new Date() : new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;
  return years > 0 ? `${years} year` : `${months} months`;
};

const ExperienceItem = ({ title, company, startDate, endDate, children }) => {
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
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
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
      <h2 id="experience">Experience</h2>
      <div className={styles.experienceContainer}>
        <ExperienceItem title="Backend Developer" company="CoverManager" startDate="Mar. 2024" endDate="Present">
          <p>• Handling and architecting models and controllers to improve workflows, optimize queries, and develop with clean code using PHP and CodeIgniter.</p>
          <p>• Implementation of Domain-Driven Design (DDD), Hexagonal Architecture, and microservices for scalable and maintainable systems.</p>
          <p>• Leveraging NewRelic for performance monitoring and system optimization.</p>
          <p>• Management and deployment of applications using AWS and Docker for scalable cloud solutions.</p>
        </ExperienceItem>
        <ExperienceItem title="Full-stack Developer" company="DSS Network" startDate="Apr. 2023" endDate="Mar. 2024">
          <p>• Collaborate closely with multidisciplinary teams, translating client needs into effective technical solutions.</p>
          <p>• Developed the frontend architecture with Next.js 14.1 and built backend models and controllers using CakePHP 5 and PHP 8.1 for a new project.</p>
          <p>• MySQL database administration and optimization for enhanced system efficiency and performance.</p>
          <p>• Responsible for continuous system support and maintenance, ensuring stability and timely issue resolution.</p>
          <p>• Integrated diverse APIs to enhance system functionality and connectivity.</p>
          <p>• Developed and customized modules to meet specific client needs, enhancing software versatility.</p>
        </ExperienceItem>
        <ExperienceItem title="Full-stack Developer" company="Antler" startDate="Nov. 2022" endDate="Apr. 2023">
          <p>• Business and food startup to launch in 2023.</p>
          <p>• Developed RESTful endpoints in Node.js, enabling my React application to communicate with the server efficiently.</p>
          <p>• Development of layout and connection to MySQL database, using JavaScript (ES6), React, NodeJS and MongoDB.</p>
          <p>• Developed reusable components to enhance efficiency and promote code reusability.</p>
          <p>• Implemented hooks and custom hooks to improve system efficiency and encourage code reusability.</p>
        </ExperienceItem>
      </div>
    </section>
  );
}
