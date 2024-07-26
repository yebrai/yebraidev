import Image from 'next/image';
import mongodbImage from '../../assets/images/mongodb-meetup.webp';
import aiImage from '../../assets/images/ia-meetup.webp';
import styles from './CommunityInvolvement.module.css';
import { FaMeetup } from "react-icons/fa";

const communityImages = {
  mongodb: mongodbImage,
  ai: aiImage,
};

const communityLinks = {
  mongodb: 'https://www.meetup.com/seville-mongodb-meetup-group/',
  ai: 'https://www.meetup.com/ia-generativa-sevilla/',
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
          title="Inteligencia Artificial Generativa Sevilla"
          role="Community Organizer"
          description="Organize meetups for Generative AI in Sevilla, coordinating workshops and facilitating collaborative knowledge sharing for mutual support and growth."
          date="July 2023 - Current"
          image={communityImages.ai}
          link={communityLinks.ai}
        />
      </div>
    </section>
  );
}
