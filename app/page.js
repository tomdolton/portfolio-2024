"use client";
import dynamic from "next/dynamic";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
const About = dynamic(() => import("./components/About"), { ssr: false });
const Projects = dynamic(() => import("./components/Projects"), { ssr: false });
const Skills = dynamic(() => import("./components/Skills"), { ssr: false });
const AdditionalTools = dynamic(() => import("./components/AdditionalTools"), {
  ssr: false,
});
const Contact = dynamic(() => import("./components/Contact"), { ssr: false });
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Banner className="py-60 md:py-48" />

      <About className="md:pt-48" />

      <div className="bg-gradient-2 bg-contain bg-no-repeat bg-left-top">
        <Projects className="pt-40" />

        <Skills className="pt-40" />

        <AdditionalTools className="pt-40" />
      </div>

      <div className="bg-gradient-3 bg-no-repeat bg-left-top bg-cover">
        <div className="bg-black/70">
          <Contact className="pt-64 pb-32 " />

          <Footer className="pb-14" />
        </div>
      </div>
    </>
  );
}
