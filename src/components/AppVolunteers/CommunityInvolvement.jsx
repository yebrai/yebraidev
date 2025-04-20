import Image from 'next/image';
import mongodbImage from '../../assets/images/mongodb-meetup.webp';
import goImage from '../../assets/images/Golang.webp';
import styles from './CommunityInvolvement.module.css';
import { FaMeetup } from "react-icons/fa";

const communityImages = {
  mongodb: mongodbImage,
  go: goImage,
};

const communityLinks = {
  mongodb: 'https://www.meetup.com/seville-mongodb-meetup-group/',
  ai: 'https://www.meetup.com/golang-sevilla/',
};

const CommunityInvolvementItem = ({ title, role, description, date, image, link }) => (
  <div className={styles.communityBlock}>
    <div className={styles.communityImage}>
      <Image src={image} alt={title} layout="responsive" width={100} />
    </div>
    <div className={styles.communityContent}>
      <h4>{title}</h4>
      <span className={styles.role}>{role}</span>
      <span className={styles.date}>{date}</span>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
        Meet Us <FaMeetup size={20} />
      </a>
    </div>
  </div>
);

export default function CommunityInvolvement() {
  return (
    <section id="communityInvolvement">
      <h2>Community Involvement</h2>
      <p>
        I like to share in industry communities where I not only contribute, but also learn from others.
      </p>
      <div className={styles.communityContainer}>
        <CommunityInvolvementItem
          title="MongoDB User Group"
          role="MongoDB User Group Leader"
          description="Collaborate with MongoDB for community events in Sevilla, including workshops, talks, and networking sessions. Foster shared knowledge and support growth within the local MongoDB community."
          date="February 2023 - Current"
          image={communityImages.mongodb}
          link={communityLinks.mongodb}
        />
        <CommunityInvolvementItem
          title="Golang Sevilla"
          role="Community Organizer"
          description="Host Go meetups in Seville where we create workshops, share latest developments and best practices, while connecting with passionate developers in a collaborative environment focused on collective growth."
          date="July 2024 - Current"
          image={communityImages.go}
          link={communityLinks.go}
        />
      </div>
    </section>
  );
}
