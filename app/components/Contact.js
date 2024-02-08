import ContactForm from "./ContactForm";
import RightArrow from "./icons/RightArrow";

export default function Contact() {
  return (
    <section className="container">
      <h2 className="with-line-horizontal mb-8">Contact me</h2>

      <p className="mb-8">
        Want to collaborate or need a web developer? Send me a message below and
        I&apos;ll be in touch.
      </p>

      <ContactForm />
    </section>
  );
}
