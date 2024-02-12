import ContactForm from "./ContactForm";
import RightArrow from "./icons/RightArrow";

export default function Contact({ className }) {
  return (
    <section id="contact" className={`container ${className}`}>
      <h2 className="mb-8">
        <span className="with-line-horizontal">Contact me</span>
      </h2>

      <p className="mb-6 max-w-4xl">
        Want to collaborate or need a web developer? Send me a message below and
        I&apos;ll be in touch.
      </p>

      <ContactForm />
    </section>
  );
}
