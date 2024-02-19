import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { enterLeft, fadeUp } from "../utils/animations";
import { isSmallScreen } from "../utils";

export default function Contact({ className }) {
  return (
    <section id="contact" className={`container ${className}`}>
      <motion.h2
        className="mb-8"
        variants={isSmallScreen ? fadeUp : enterLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: isSmallScreen ? "0px" : "-150px" }}
      >
        <span className="with-line-horizontal">Contact me</span>
      </motion.h2>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
      >
        <p className="mb-6 max-w-4xl">
          Want to collaborate or need a web developer? Send me a message below
          and I&apos;ll be in touch.
        </p>

        <ContactForm />
      </motion.div>
    </section>
  );
}
