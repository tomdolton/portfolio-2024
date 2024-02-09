"use client";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <div className="min-h-[899px] bg-gradient-1 bg-cover bg-no-repeat bg-center">
        <Navbar />

        <Banner className="py-60 md:py-40" />

        <About className="md:py-36" />
      </div>

      <div className="min-h-[1823px] bg-gradient-2 bg-cover bg-no-repeat bg-center">
        <Projects className="mt-80 mb-40" />

        <Skills className="" />
      </div>

      <div className="min-h-[653px] bg-gradient-3 bg-cover bg-no-repeat bg-top pt-32">
        <Contact className="mb-40" />
      </div>
    </>
  );
}
