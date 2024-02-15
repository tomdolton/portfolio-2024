import Image from "next/image";
import RightArrow from "./icons/RightArrow";
import { motion } from "framer-motion";
import { enterLeft, fadeUp } from "../utils/animations";

export default function Projects({ className }) {
  const projects = [
    {
      title: "MindsMe",
      text: "Developed for the Ministry of Justice, MindsMe is a web app for prison leavers that provides assessment of a brain injury, with the ability for them and their probation officer to track their mental wellbeing. <br/><br/> As part of a small team in a fullstack role my responsibilities included user surveys, tools and analytics dashboard.",
      tech: ["Laravel", "Vue.js", "MySQL", "SCSS", "HTML5"],
      url: "https://orbitalinnovations.com/innovations/apps-and-platforms#mindsme",

      wide: false,
    },
    {
      title: "Orbital Global websites",
      text: "A suite of websites for Orbital Global, which include blogging features enabled by my integrating Strapi headless CMS integration with Next.js. As the sole developer working closely with a designer these sites includes custom animations done with a combination of CSS, framer motion and lottie files.",
      tech: ["Next.js", "React", "Tailwind", "HTML5", "Strapi"],
      url: "https://orbitalmedia.com",
      image: {
        url: "/images/projects/orbital-media.png",
        alt: "The Orbital Media website homepage screenshot",
        width: 355,
        height: 355,
        alignRight: true,
      },
      wide: true,
    },
    {
      title: "Discover More",
      text: "Suffolk Libraries Discover More allows people to discover events based on their mood preferences.",
      tech: ["Laravel", "Vue", "Tailwind", "HTML5", "PHP", "MySQL"],
      url: "https://discovermore.suffolklibraries.co.uk/",
      image: {
        url: "/images/projects/discover-more.png",
        alt: "The Discover More events search user interface screenshot",
        width: 355,
        height: 355,
        alignRight: false,
      },
      wide: true,
    },
    // {
    //   title: "Scoop",
    //   text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor. Incididunt Ut Labore Et Dolore Magna Aliqua. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    //   tech: ["Vue.js", "SCSS", "VideoJS", "HTML5"],
    //   url: "https://mindsme.com",
    //   image: {
    //     url: "/images/projects/orbital-media.png",
    //     alt: "The Orbital Media website homepage screenshot",
    //     width: 355,
    //     height: 355,
    //     alignRight: false,
    //   },
    //   wide: true,
    // },
    {
      title: "Innovation Labs",
      text: "Innovation Labs Group provides experienced, tried and tested support for innovation, entrepreneurship and skills acquisition, set within a friendly, supportive and cost effective coworking environment.",
      tech: ["Laravel", "Vue.js", "SCSS", "Bootstrap", "MySQL"],
      url: "https://innovationlabsgroup.com/",

      wide: false,
    },
  ];

  return (
    <section id="projects" className={`${className}`}>
      <div className="container">
        <motion.h2
          className="mb-8"
          variants={enterLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
        >
          <span className="with-line-horizontal">Projects</span>
        </motion.h2>
      </div>

      <motion.div
        className="px-6 grid xl:grid-cols-3 gap-5"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-grey rounded-2xl relative p-6 backdrop-blur-2xl bg-white/15 transition duration-300 ease-linear border border-transparent
                hover:-translate-y-0.5 hover:border-offwhite/50 hover:bg-white/25
                ${
                  project.image &&
                  "flex flex-col lg:flex-row items-start justify-between gap-8"
                }
                ${project.wide ? "xl:col-span-2" : "xl:col-span-1"}`}
          >
            {project.image && (
              <Image
                className={`h-full w-full max-w-[400px] object-cover object-left-top rounded-lg ${
                  project.image.alignRight && "lg:order-2"
                }`}
                src={project.image.url}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
              />
            )}
            <div className="flex flex-col items-start justify-start gap-5 h-full order-1">
              <h3 className="font-medium text-xl md:text-2xl tracking-wide">
                {project.title}
              </h3>

              <p
                className="max-w-prose"
                dangerouslySetInnerHTML={{ __html: project.text }}
              ></p>

              <ul className="inline-flex flex-wrap justify-start bg-navy/50 py-3 rounded-lg xl:max-w-48 2xl:max-w-none">
                {project.tech.map((item, index) => (
                  <li
                    className="text-sm border-r border-offwhite xl:border-0 py-1 px-5 last-of-type:border-0 flex-1 2xl:border-r 2xl:flex-auto"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {/* <ul className="grid grid-cols-3 rounded-lg overflow-hidden">
                {project.tech.map((item, index) => (
                  <li className="text-sm py-1 px-5 bg-navy/50" key={index}>
                    {item}
                  </li>
                ))}
              </ul> */}

              <a
                className="text-lg border-offwhite border rounded-3xl px-5 py-2.5 mt-auto flex justify-between items-center gap-11 hover:gap-14 hover:bg-white/10 transition-all"
                href={project.url}
                target="_blank"
              >
                View Project
                <RightArrow />
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
