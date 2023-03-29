import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/AppNavbar/Navbar'
import Welcome from '@/components/AppWelcome/Welcome'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Welcome/>
    <footer>Contact with me</footer>
    </>
  )
}
