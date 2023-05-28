import Image from "next/image";
import ivanPng from "../../assets/images/ivanAv.png";
import styles from "./Welcome.module.css";
import { motion } from 'framer-motion';
import useInit from "@/hooks/useInit";
import useAnimations from "@/hooks/useAnimations";

export default function Welcome() {
  const textRef = useInit()
  const controls = useAnimations(2, false)

  return (
    <>
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={controls}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      id="about"
    >
      <section className={styles.containerMainSection}>
        <div className={styles.avatar}>
          <Image className={styles.avatarImage} src={ivanPng} fill={true} alt="Profile Image" />
        </div>
        <div className={styles.presentationContainer}>
          <h1 className={styles.presentation}>
            Hello <span className={styles.waveIcon}>👋🏼</span>, i'm <name>Ivan</name>
          </h1>
          <p className={styles.position} ref={textRef}></p>
        </div>
      </section>
    </motion.div>
    </>
  );
}