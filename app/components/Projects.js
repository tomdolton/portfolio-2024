import Image from "next/image";
import RightArrow from "./icons/RightArrow";
import { motion } from "framer-motion";
import { enterLeft, fadeUp } from "../utils/animations";
import { isSmallScreen } from "../utils";

export default function Projects({ className }) {
  const projects = [
    {
      title: "Pravi",
      text: "Pravi is a SaaS platform designed to help non-profit organisations attract and convert new donors. It leverages AI to generate data-driven donor personas and to create targeted fundraising campaigns and content.<br/><br/>As the lead frontend developer, I was responsible for building a component library using Storybook, architecting the Vue.js interface, and integrating dynamic workflows and multi-step form wizards. I also contributed to backend integration and developed full features, including the AI-powered campaign content generator using the OpenAI API.",
      tech: [
        "Vue.js",
        "Typescript",
        "Tailwind CSS",
        "Storybook",
        "Laravel",
        "OpenAI API",
      ],
      url: "https://pravi.com/",
      image: {
        url: "/images/projects/pravi.webp",
        alt: "The Pravi app find new donors results page",
        width: 355,
        height: 355,
        alignRight: false,
      },
      wide: true,
      tall: false,
    },

    {
      title: "MindsMe",
      text: "Developed for the UK Ministry of Justice, MindsMe is a web app designed to support prison leavers in assessing potential brain injuries and tracking their mental wellbeing in collaboration with probation officers. <br/><br/> As part of a small fullstack team, I contributed to key features including user survey tools, an interactive analytics dashboard, and a three-tier role-based access system for administrators, probation officers, and end users. I also led accessibility improvements following an official audit, and supported backend security enhancements.",
      tech: ["Laravel", "Vue.js", "MySQL", "SCSS", "Vuetify"],
      url: "https://orbitalinnovations.com/innovations/apps-and-platforms#mindsme",
      wide: false,
    },
    {
      title: "Orbital Global websites",
      text: "A suite of marketing websites for a digital services group, each statically generated with Next.js and powered by a Strapi headless CMS to enable flexible content management and blogging features. <br/><br/>As the sole developer working closely with a designer, I was responsible for the full implementation — from CMS integration to frontend architecture — and built custom animations using CSS, Framer Motion, and Lottie. The sites were deployed to Vercel and optimised for fast performance and smooth user experience.",
      tech: ["Next.js", "React", "Tailwind CSS", "HTML5", "Strapi", "Vercel"],
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
      text: "An interactive platform built for Suffolk Libraries that helps users find local events based on their mood preferences. The site includes an advanced search feature with filters, as well as a recommendation engine powered by a custom-built AI API (developed by a partner team) that suggests events based on mood-based questionnaire responses. <br/><br/>For administrators, I implemented dynamic data visualisations using Chart.js and Google Maps API to display user engagement, responses, and event patterns through charts and heatmaps.",
      tech: ["Laravel", "Vue.js", "Inertia", "Tailwind CSS", "MySQL"],
      url: "https://discovermore.suffolklibraries.co.uk/",
      image: {
        url: "/images/projects/discover-more.png",
        alt: "The Discover More events search user interface",
        width: 355,
        height: 355,
        alignRight: false,
      },
      wide: false,
      tall: true,
    },
    // {
    //   title: "Innovation Labs",
    //   text: "Innovation Labs are a range of co-working hubs which provide support for entrepreneurship and skills acquisition. I was primarily responsible for building the website, which make user of multi level authentication for different user groups, Stripe payment API for managing subscriptions and the Google maps API.",
    //   tech: ["Laravel", "Vue.js", "SCSS", "Bootstrap", "MySQL"],
    //   url: "https://innovationlabsgroup.com/",
    //   image: {
    //     url: "/images/projects/innovation-labs.webp",
    //     alt: "The Innovation Labs website locations page",
    //     width: 355,
    //     height: 355,
    //     alignRight: true,
    //   },
    //   wide: false,
    //   tall: true,
    // },
    {
      title: "Scoop",
      text: "Scoop is an interactive video platform built for training and educational experiences, allowing users to control their own journey through branching video content.<br/><br/>I developed custom video player controls and a flexible logic-tree system that enabled the platform to support multiple, reusable walkthrough experiences — each with its own unique branching paths and logic. This allowed the product to scale across different organisations and use cases without additional frontend redevelopment.<br/><br/>Videos are hosted and streamed via AWS, ensuring reliable delivery and performance at scale. State management is handled with Pinia, tracking user progress, video playback status, and inputs in real time to provide a seamless and personalised learning experience.<br/><br/>The platform is distributed as a series of standalone tools tailored for organisations who commission bespoke training content, enabling rapid deployment and easy maintenance.",
      tech: ["Vue.js", "VideoJS", "Bulma", "SCSS", "AWS"],
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
