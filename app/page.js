"use client";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-1 bg-no-repeat bg-right-top bg-cover">
        <Navbar />

        <Banner className="py-60 md:py-48" />

        <About className="md:pt-48" />
      </div>

      <div className="bg-gradient-2 bg-contain bg-no-repeat bg-left-top">
        <Projects className="pt-40" />

        <Skills className="pt-40" />
      </div>

      <div className="bg-gradient-3 bg-no-repeat bg-left-top bg-cover">
        <Contact className="pt-64 pb-32" />

        <Footer className="pb-14" />
      </div>
    </>
  );
}
