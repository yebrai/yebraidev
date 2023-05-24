import React, { useEffect, useState } from "react";
import Navbar from "@/components/AppNavbar/Navbar";
import Welcome from "@/components/AppWelcome/Welcome";
import Portfolio from "@/components/AppPortfolio/Portfolio";
import About from "@/components/AppAbout/About";
import Education from "@/components/AppEducation/Education";
import { NextSeo } from "next-seo";
import Skills from "@/components/AppSkills/Skills";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <NextSeo title="Ivan Garcia Yebra" description="Yebraidev Website" />
      <Navbar />
      <section className="main">
        <div className={`introMain ${isVisible ? "visible" : ""}`}>
          <Welcome />
          <About />
        <Portfolio />
        <Education />
        <Skills />
        </div>
      </section>
      <footer>© 2023 Ivan Yebra</footer>
    </>
  );
}
