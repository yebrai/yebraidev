import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import ivanPng from '../assets/images/ivan.png'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <section className={styles.containerMainSection}>
        <div><Image src={ivanPng} width={300} height={300}></Image></div>
        <div>
        <h1>Hello 👋🏼, i'm <name>Ivan</name></h1>
        <h3>Web developer</h3>
        <div>
      <ul>
      <li>About me</li>
      <li>Proyects</li>
      <li>My Skills</li>
      <li>My Cv</li>
      </ul>
    </div>
        </div> 
          
    </section>

 
    <footer>Contact with me</footer>
    </>
  )
}
