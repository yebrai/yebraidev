import React, { useEffect, useState } from "react";
import Navbar from "@/components/AppNavbar/Navbar";
import Welcome from "@/components/AppWelcome/Welcome";
import Portfolio from "@/components/AppPortfolio/Portfolio";
import About from "@/components/AppAbout/About";
import Education from "@/components/AppEducation/Education";
import Experience from "@/components/AppExperience/Experience";
import CommunityInvolvement from "@/components/AppVolunteers/CommunityInvolvement";
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
      <NextSeo
        title="Yebraidev"
        description="Yebraidev Website"
        openGraph={{
          title: 'Yebraidev',
          description: 'Portfolio of Ivan Yebra',
          url: 'https://www.yebraidev.es',
          site_name: 'Yebraidev',
        }}
      />
      <div className={`introMain ${isVisible ? "visible" : ""}`}>
        <Navbar />
        <section className="main">
          <Welcome />
          <About />
          <Experience />
          <Skills />
          <CommunityInvolvement />
          {/* <Portfolio /> */}
          {/* <Education /> */}
        </section>
      </div>
      <footer>© 2025 Yebraidev</footer>
    </>
  );
}
