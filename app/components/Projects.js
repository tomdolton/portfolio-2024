import Image from "next/image";
import RightArrow from "./icons/RightArrow";
import { motion } from "framer-motion";
import { enterLeft, fadeUp } from "../utils/animations";
import { isSmallScreen } from "../utils";

export default function Projects({ className }) {
  const projects = [
    {
      title: "MindsMe",
      text: "Developed for the Ministry of Justice, MindsMe is a web app for prison leavers that provides assessment of a brain injury, with the ability for them and their probation officer to track their mental wellbeing. <br/><br/> As part of a small team in a fullstack role my responsibilities included user surveys, tools and analytics dashboard.",
      tech: ["Laravel", "Vue.js", "MySQL", "SCSS", "Vuetify"],
      url: "https://orbitalinnovations.com/innovations/apps-and-platforms#mindsme",

      wide: false,
    },
    {
      title: "Orbital Global websites",
      text: "A suite of marketing websites for Orbital Global, which include blogging features enabled by my integrating Strapi headless CMS integration with Next.js to make four static generated sites. As the sole developer working closely with a designer, I also created custom animations using a combination of CSS, framer motion and lottie files.",
      tech: ["Next.js", "React", "Tailwind", "HTML5", "Strapi"],
      url: "https://orbitalmedia.com",
      image: {
        url: "/images/projects/orbital-media.png",
        alt: "The Orbital Media website homepage",
        width: 355,
        height: 355,
        alignRight: true,
      },
      wide: true,
    },
    {
      title: "Discover More",
      text: "Suffolk Libraries Discover More allows people to discover events based on their mood preferences. The site includes an extensive search feature with filters as well as a recommendation feature where events are recommended based on user responses to a questionnaire, using an AI API recommendation engine. The site also visualises user response and event data in charts and heat-maps for administrators.",
      tech: ["Laravel", "Vue", "Inertia", "Tailwind", "PHP", "MySQL"],
      url: "https://discovermore.suffolklibraries.co.uk/",
      image: {
        url: "/images/projects/discover-more.png",
        alt: "The Discover More events search user interface",
        width: 355,
        height: 355,
        alignRight: false,
      },
      wide: true,
    },
    {
      title: "Innovation Labs",
      text: "Innovation Labs are a range of co-working hubs which provide support for entrepreneurship and skills acquisition. I was primarily responsible for building the website, which make user of multi level authentication for different user groups, Stripe payment API for managing subscriptions and the Google maps API.",
      tech: ["Laravel", "Vue.js", "SCSS", "Bootstrap", "MySQL"],
      url: "https://innovationlabsgroup.com/",
      image: {
        url: "/images/projects/innovation-labs.webp",
        alt: "The Innovation Labs website locations page",
        width: 355,
        height: 355,
        alignRight: true,
      },
      wide: false,
      tall: true,
    },
    {
      title: "Scoop",
      text: "Scoop is an interactive video platform aimed at training and education. Users can control their own journey by through the experience. <br/> I coded custom video player controls and logic tree feature that enabled the product to be deployed for multiple experiences, each with their own walkthrough logic.",
      tech: ["Vue.js", "VideoJS", "Bulma", "SCSS"],
      url: "https://citb-scoop-drylining.com/",
      image: {
        url: "/images/projects/scoop.webp",
        alt: "The Scoop website interactive video page",
        width: 355,
        height: 355,
        alignRight: false,
      },
      wide: true,
    },
  ];

  return (
    <section id="projects" className={`${className}`}>
      <div className="container">
        <motion.h2
          className="mb-8"
          variants={isSmallScreen ? fadeUp : enterLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isSmallScreen ? "0px" : "-150px" }}
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
                ${project.wide ? "xl:col-span-2" : "xl:col-span-1"}
                ${project.tall && "xl:row-span-2 xl:flex-col lg:items-center"}`}
          >
            {project.image && (
              <Image
                className={`h-full w-full max-w-[383px] object-cover object-left-top rounded-lg max-h-[383px] ${
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

              <ul className="inline-flex flex-wrap justify-start bg-navy/50 py-3 rounded-lg max-w-48 min-[585px]:max-w-none xl:max-w-48 2xl:max-w-none">
                {project.tech.map((item, index) => (
                  <li
                    className="text-sm min-[585px]:border-r border-offwhite xl:border-0 py-1 px-5 last-of-type:border-0 flex-1 2xl:border-r 2xl:flex-auto"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>

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
