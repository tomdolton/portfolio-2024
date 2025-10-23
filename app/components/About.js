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
            I&apos;m a full-stack web developer with over 5 years of professional experience, specialising in building accessible, high-performance web applications with a strong focus on frontend architecture and modern TypeScript development.
          </p>
          <p>
            I create responsive, maintainable interfaces using React, Vue, and Next.js, and work confidently across the stack with Laravel, Supabase, and RESTful APIs. I&apos;ve delivered projects for clients ranging from the UK Ministry of Justice to Teva International, often taking ownership of the entire frontend build or shaping the project&apos;s technical direction.
          </p>
          <p>
            My background in acoustics and music technology, gives me a unique problem-solving perspective and eye for detail. Outside of work, you&apos;ll find me exploring new music, experimenting with creative tech, or hiking in the hills.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
