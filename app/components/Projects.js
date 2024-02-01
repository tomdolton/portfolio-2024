import Image from "next/image";
import RightArrow from "./icons/RightArrow";

export default function Projects({ className }) {
  const projects = [
    {
      title: "MindsMe",
      text: "An application to assess prison leavers who had brain injury in the past.",
      tech: ["Laravel", "Vue.js", "MySQL", "SCSS", "HTML5"],
      url: "https://mindsme.co.uk",

      wide: false,
    },
    {
      title: "Orbital Global websites",
      text: "A suite of websites for Orbital Global, which include blogging features enabled by my integrating Strapi headless CMS integration with Next.js. As the sole developer working closely with a designer these sites includes custom animations done with a combination of CSS, framer motion and lottie files.",
      tech: ["Next.js", "React", "Tailwind", "HTML5", "Strapi CMS"],
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
      url: "https://mindsme.com",
      image: {
        url: "/images/projects/orbital-media.png",
        alt: "The Orbital Media website homepage screenshot",
        width: 355,
        height: 355,
        alignRight: false,
      },
      wide: true,
    },
    {
      title: "Scoop",
      text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor. Incididunt Ut Labore Et Dolore Magna Aliqua. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
      tech: ["Vue.js", "SCSS", "VideoJS", "HTML5"],
      url: "https://mindsme.com",
      image: {
        url: "/images/projects/orbital-media.png",
        alt: "The Orbital Media website homepage screenshot",
        width: 355,
        height: 355,
        alignRight: false,
      },
      wide: true,
    },
    {
      title: "Innovation Labs",
      text: "Innovation Labs Group provides experienced, tried and tested support for innovation, entrepreneurship and skills acquisition, set within a friendly, supportive and cost effective coworking environment.",
      tech: [
        "Laravel",
        "Vue.js",
        "SCSS",
        "Bootstrap 5",
        "HTML5",
        "PHP",
        "MySQL",
      ],
      url: "https://mindsme.com",

      wide: false,
    },
  ];

  return (
    <section id="projects" className={`${className} container`}>
      <h2 className="with-line-horizontal mb-8">Projects</h2>

      <div className="grid lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-grey rounded-2xl overflow-hidden relative p-8 backdrop-blur-2xl bg-white/15 transition duration-300 ease-linear border border-transparent
                hover:-translate-y-0.5 hover:border-offwhite/50 hover:bg-white/25
                ${project.image && "flex items-start justify-between gap-5"}
                ${project.wide ? "col-span-2" : "col-span-1"}`}
          >
            {project.image && (
              <Image
                className={`h-full max-w-[45%] object-cover rounded-lg ${
                  project.image.alignRight && "order-1"
                }`}
                src={project.image.url}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
              />
            )}
            <div className="space-y-6 flex flex-col items-start">
              <h3 className="font-medium text-xl md:text-2xl tracking-wide">
                {project.title}
              </h3>

              <p>{project.text}</p>

              <ul className="inline-flex bg-navy/50 py-3 rounded-lg">
                {project.tech.map((item, index) => (
                  <li
                    className="text-sm border-r border-offwhite py-1 px-5 last-of-type:border-0"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <a
                className="text-lg border-offwhite border rounded-3xl px-5 py-2.5 flex justify-between items-center gap-11 hover:gap-14 hover:bg-white/10 transition-all"
                href={project.url}
                target="_blank"
              >
                View Project
                <RightArrow />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
