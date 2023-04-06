import Image from 'next/image'
import ivanPng from '../../assets/images/ivanAv.png'
import styles from './Welcome.module.css'
import { useEffect, useRef } from 'react';
import { init } from "ityped";

export default function Welcome() {

    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, {
        showCursor: false,
        backDelay: 2000,
        typeSpeed: 100,
        strings: ['<Junior Front-End Developer />'],
      });
    }, []);


    return (
        <>
        <section className={styles.containerMainSection}>
        <div className={styles.avatar}>
        <Image src={ivanPng} fill={true} alt="Profile Image"/>
        </div>
        <div>
        <h1 className={styles.presentation}>Hello 👋🏼, i´m <name>Ivan</name></h1>
        <p className={styles.position} ref={textRef}></p>
    </div>
    </section>
    </>
    )
}