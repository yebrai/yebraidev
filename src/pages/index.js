import Head from 'next/head'
import Navbar from '@/components/AppNavbar/Navbar'
import Welcome from '@/components/AppWelcome/Welcome'
import Projects from '@/components/AppProjects/Projects'
import Skills from '@/components/AppSkills/Skills'
import Education from '@/components/AppEducation/Education'

export default function Home() {
  return (
    <>
    <Navbar/>
    <section className='main'>
    <Welcome/>
    <Education/>
    <Projects/>
    <Skills/>
    </section>
    <footer>Contact with me</footer>
    </>
  )
}
