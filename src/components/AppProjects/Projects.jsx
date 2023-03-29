import Image from "next/image";
import styles from "./Projects.module.css";
import tmb from '../../assets/images/tmb.jpg'
import retroscript from '../../assets/images/retroscript.jpg'
import tasteit from '../../assets/images/tasteit.jpg'
import ourhome from '../../assets/images/ourhome.jpg'
import infecnation from '../../assets/images/infectnation.jpg'

export default function Projects() {
  const links = [
    {
      imageSrc: tmb,
      title: "PDF-SIGNER",
      description: "pdfsigner",
    },
    {
      imageSrc: tmb,
      title: "The Movie Bulletin",
      description: "pdfsigner",
    },
    {
        imageSrc: retroscript,
        title: "Retroscript",
        description: "pdfsigner",
    },
    {
        imageSrc: tasteit,
        title: "Taste-it",
        description: "pdfsigner",
    },
    {
        imageSrc: ourhome,
        title: "Our Home",
        description: "pdfsigner",
    },
    {
        imageSrc: infecnation,
        title: "PDF-SIGNER",
        description: "pdfsigner",
    },
    {
        imageSrc: tasteit,
        title: "FlappyBirdJS/TS",
        description: "pdfsigner",
    },
    {
        imageSrc: tasteit,
        title: "Alleaway",
        description: "pdfsigner",
    },
  ];

  return (
    <>
      <h3>Projects</h3>
      <ul className={styles.mainUl}>
    {links.map(({imageSrc, title, description}, i) => {
        return (

        <li key={i}>
        <div>
          <Image src={imageSrc} fill={true}></Image>
        </div>
          <h4>{title}</h4>
          <p>{description}</p>
        </li>
        )
    })}
      </ul>
    

      {/* <ul className={styles.mainUl}>
        <li>
          <Image></Image>
          <h4>PDF-SIGNER</h4>
          <p>pdf signer</p>
        </li>
        <li>
          <Image></Image>
          <h4>TM Bulletin</h4>
          <p>pdf signer</p>
        </li>
        <li>
          <Image></Image>
          <h4>Retroscript</h4>
          <p>pdf signer</p>
        </li>
        <li>
          <Image></Image>
          <h4>Taste-it</h4>
          <p>pdf signer</p>
        </li>
        <li>
          <Image></Image>
          <h4>Our Home</h4>
          <p>pdf signer</p>
        </li>
        <li>
          <Image></Image>
          <h4>Infecnation</h4>
          <p>pdf signer</p>
        </li>
        <li>
          <Image></Image>
          <h4>Flappy Bird.ts</h4>
          <p>pdf signer</p>
        </li>
        <li>
          <Image></Image>
          <h4>Alleawey</h4>
          <p>pdf signer</p>
        </li>
      </ul> */}
    </>
  );
}
