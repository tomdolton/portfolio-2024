import Image from "next/image";
import Link from "next/link";
import LinkedIn from "./icons/LinkedIn";
import Github from "./icons/Github";
import { motion } from "framer-motion";
import { enterTop } from "../utils/animations";

export default function Navbar() {
  const pageData = {
    links: [
      { label: "About", url: "#about" },
      { label: "Projects", url: "#projects" },
      { label: "Skills", url: "#skills" },
      { label: "Contact", url: "#contact" },
    ],

    socials: {
      linkedIn: "https://www.linkedin.com/in/tom-dolton-b69b4b204/",
      github: "https://github.com/tomdolton",
    },
  };

  return (
    <nav>
      <div className="px-4 md:px-8 py-4 flex items-center">
        <Link href="/">
          <Image
            className="w-8 md:w-[47px]"
            src="/images/logo@2x.png"
            width={47}
            height={42}
            alt="Home"
          />
        </Link>

        <div className="ml-auto md:mr-20 space-x-5 md:space-x-8 hover:text-white font-medium md:text-lg transition">
          {pageData.links.map((link, index) => (
            <Link href={link.url} key={index}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute right-4 md:right-8 top-28 md:top-64 inline-flex flex-col gap-4 with-line-vertical"
        variants={enterTop}
        initial="hidden"
        animate="visible"
      >
        <a href={pageData.socials.github} target="_blank">
          <Github />
        </a>
        <a href={pageData.socials.linkedIn} target="_blank">
          <LinkedIn />
        </a>
      </motion.div>
    </nav>
  );
}
