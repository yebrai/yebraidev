import Image from "next/image";
import styles from "./Portfolio.module.css";
import tmb from '../../assets/images/tmb.jpg'
import retroscript from '../../assets/images/retroscript.jpg'
import tasteit from '../../assets/images/tasteit.jpg'
import ourhome from '../../assets/images/ourhome.jpg'
import infecnation from '../../assets/images/infectnation.jpg'

export default function Projects() {
  const links = [
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
        title: "Infecnation",
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
      <h3>Portfolio</h3>
      <ul className={styles.mainUl}>
    {links.map(({imageSrc, title, description}, i) => {
        return (

        <li key={i}>
        <div>
          <Image src={imageSrc} fill={true} alt={title}></Image>
        </div>
          <h4>{title}</h4>
          <p>{description}</p>
        </li>
        )
    })}
      </ul>
    </>
  );
}
