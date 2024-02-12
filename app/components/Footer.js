import Image from "next/image";
import Link from "next/link";
import Github from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";

export default function Footer({ className }) {
  const pageData = {
    socials: {
      linkedIn: "https://www.linkedin.com/in/tom-dolton-b69b4b204/",
      github: "https://github.com/tomdolton",
    },
  };

  return (
    <footer className={`container ${className}`}>
      <div className="with-line-reverse flex items-center justify-end gap-5">
        <a href={pageData.socials.github} target="_blank">
          <Github />
        </a>
        <a href={pageData.socials.linkedIn} target="_blank">
          <LinkedIn />
        </a>

        <Link href="/" className="ml-2">
          <Image
            className="w-8 md:w-[47px] "
            src="/images/logo@2x.png"
            width={47}
            height={42}
            alt="Home"
          />
        </Link>
      </div>
    </footer>
  );
}
