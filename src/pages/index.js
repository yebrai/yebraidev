import Head from "next/head";
import Navbar from "@/components/AppNavbar/Navbar";
import Welcome from "@/components/AppWelcome/Welcome";
import Portfolio from "@/components/AppPortfolio/Portfolio";
import Skills from "@/components/AppSkills/Skills";
import About from "@/components/AppAbout/About";
import Education from "@/components/AppEducation/Education";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="main">
        <Welcome />
        <Portfolio />
        <Skills />
        <div className="about">
          <About />
          <Education />
        </div>
      </section>
      <footer>Contact with me</footer>
    </>
  );
}
