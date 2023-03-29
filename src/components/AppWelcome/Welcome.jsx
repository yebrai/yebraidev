import Image from 'next/image'
import ivanPng from '../../assets/images/ivanAv.png'
import styles from './Welcome.module.css'

export default function Welcome() {


    return (
        <>
        <section className={styles.containerMainSection}>
        <div className={styles.avatar}>
        <Image src={ivanPng} fill={true}></Image>
        </div>
        <div>
        <h1 className={styles.presentation}>Hello 👋🏼, i'm <name>Ivan</name></h1>
        <h3 className={styles.position}>Full-stack Developer</h3>
    </div>
    </section>
    </>
    )
}