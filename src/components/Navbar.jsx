import Image from 'next/image'
import { AiFillLinkedin, AiFillGithub, AiFillHome } from 'react-icons/Ai'
import { SlHome } from 'react-icons/Sl'
import { GrContact } from 'react-icons/Gr'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {

    const links = [
        {
          label: <AiFillHome />,
          route: '/'
        },
        {
          label: <AiFillGithub />,
          route: '/favourites'
        },
        {
          label: <AiFillLinkedin />,
          route: '/popular'
        },
        {
          label: <GrContact />,
          route: '/upcoming'
        }
      
      ]
      
    return (
        <>
            <ul className={styles.container}>
            {links.map(({ label, route }) => {
          return (
            <li className={styles.icons} key={route}>
              <Link href={route}>{label}</Link>
            </li>
          )
        })}
            </ul>
        </>
    )

    
}