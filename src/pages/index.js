import Navbar from "@/components/AppNavbar/Navbar";
import Welcome from "@/components/AppWelcome/Welcome";
import Portfolio from "@/components/AppPortfolio/Portfolio";
import About from "@/components/AppAbout/About";
import Education from "@/components/AppEducation/Education";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import { useStore } from "./hooks/useLanguage";

export default function Home() {
  const { english} = useStore()
  useEffect(() => {
    console.log('hola¿?')
  }, [english]);
  return (
    <>
      <NextSeo title="Ivan Garcia Yebra" description="Yebraidev Website" />
      <Navbar />
      <section className="main">
        <Welcome />
        <Portfolio />
        <About />
        <Education />
      </section>
      <footer>© 2023 Ivan Yebra</footer>
    </>
  );
}
