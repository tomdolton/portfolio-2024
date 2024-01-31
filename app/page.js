"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <div className="h-[899px] relative bg-gradient-1 bg-cover bg-no-repeat bg-center">
        <Navbar />

        <Banner />
      </div>
    </>
  );
}
