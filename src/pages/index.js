import Head from 'next/head'
import Navbar from '@/components/AppNavbar/Navbar'
import Welcome from '@/components/AppWelcome/Welcome'
import Projects from '@/components/AppProjects/Projects'

export default function Home() {
  return (
    <>
    <Navbar/>
    <section className='main'>
    <Welcome/>
    <Projects/>
    </section>
    <footer>Contact with me</footer>
    </>
  )
}
