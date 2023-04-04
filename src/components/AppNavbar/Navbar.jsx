import { AiFillLinkedin, AiFillGithub } from "react-icons/Ai";
import { MdEmail } from "react-icons/Md";
import { BsPersonCircle } from "react-icons/Bs";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const links = [
    {
      label: <BsPersonCircle />,
      route: "https://github.com/yebrai",
      description: "+34 692806198",
    },
    {
      label: <AiFillGithub />,
      route: "https://github.com/yebrai",
      description: "Yebraidev",
    },
    {
      label: <AiFillLinkedin />,
      route: "https://www.linkedin.com/in/ivangarciayebra",
      description: "My Linkedin Profile",
    },
    {
      label: <MdEmail />,
      route: "/upcoming",
      description: "Let´s talk!",
    },
  ];

  return (
    <>
      <ul className={styles.container}>
        {links.map(({ label, route, description }) => {
          return (
            <div key={route}>
              <li className={styles.icons}>
                <Link href={route}>{label} {description}</Link>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
}
