import React from 'react';
import { NextSeo } from 'next-seo';
import Navbar from "@/components/AppNavbar/Navbar";
import GoStackGuide from '@/components/AppGolang/GoStackGuide';

export default function GolangPage() {
  return (
    <>
      <NextSeo
        title="Go Stack - Yebraidev"
        description="Guía completa del stack de desarrollo con Go - Yebraidev"
        openGraph={{
          title: 'Go Stack - Yebraidev',
          description: 'Guía completa del stack de desarrollo con Go para aplicaciones escalables',
          url: 'https://www.yebraidev.es/golang',
          site_name: 'Yebraidev',
        }}
      />
      <div className="intro-main visible">
        <Navbar />
        <section className="main">
          <GoStackGuide />
        </section>
      </div>
      <footer>© 2025 Yebraidev</footer>
    </>
  );
}