import { motion } from "framer-motion";
import { enterLeft } from "../utils/animations";
import { WavyBackground } from "./ui/wavy-background";

export default function Banner({ className }) {
  const line1 = "Tom  Dolton";
  const line2 = "Web Developer";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const enterLeftBanner = {
    visible: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
      },
    },
    hidden: { x: -200 },
  };

  return (
    <header className={`${className} grid items-center justify-items-start relative`}>
      <div className="container relative z-10">
        <motion.div variants={sentence} initial="hidden" animate="visible">
          <h1 className="max-[369px]:text-5xl text-6xl md:text-8xl font-medium text-center md:text-left relative mb-4">
            <motion.span
              className="with-line-horizontal inline-block top-1/2 absolute"
              variants={enterLeftBanner}
            ></motion.span>
            {line1.split("").map((char, index) => (
              <motion.span key={`${char}-${index}`} variants={letter}>
                {char}
              </motion.span>
            ))}
          </h1>

          {/* <br /> */}
          <h2 className="text-2xl md:text-4xl font-medium tracking-wider mb-4">
            {line2.split("").map((char, index) => (
              <motion.span key={`${char}-${index}`} variants={letter}>
                {char}
              </motion.span>
            ))}
          </h2>

          <motion.p
            variants={letter}
            className="text-center md:text-left md:text-lg"
          >
            Full stack web developer specialising in front end.
          </motion.p>
        </motion.div>
      </div>

      <WavyBackground containerClassName="absolute top-8 left-0 bottom-0 right-0 -z-10 w-full hidden sm:block" className="" />
    </header>
  );
}
