import { motion } from "framer-motion";
import { enterLeft, fadeUp } from "../utils/animations";
import { isSmallScreen } from "../utils";

export default function About({ className }) {
  return (
    <section id="about" className={`${className} container`}>
      <div className="max-w-prose space-y-4">
        <motion.h2
          variants={isSmallScreen ? fadeUp : enterLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isSmallScreen ? "0px" : "-150px" }}
        >
          <span className="with-line-horizontal">About me</span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
        >
          <p>
            I&apos;m a full-stack developer with over 3 years of experience. I
            build accessible, responsive websites and web apps using modern
            HTML, CSS, Javascript, and PHP practices, having worked with clients
            ranging from the Ministry of Justice to Teva International.
          </p>
          <p>
            I often use React or Vue when writing Javascript, but can adapt to
            whatever tools are required. I specialise in frontend development,
            but also have experience working fullstack, particularly in the
            Laravel and Next.js frameworks.
          </p>
          <p>
            My previous work experience in other industries, such as acoustics,
            gives me a unique perspective on development. When I&apos;m not
            coding, you can find me playing music or hiking in the great
            outdoors.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
