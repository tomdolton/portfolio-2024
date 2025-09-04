import { motion } from "framer-motion";
import { enterLeft, fadeUp } from "../utils/animations";
import { isSmallScreen } from "../utils";

const barsParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const bars = {
  hidden: { width: 0 },
  visible: (score) => ({
    width: `${score}%`,
    transition: {
      type: "spring",
      stiffness: 32,
    },
  }),
};

export default function Skills({ className }) {
  const skillsData = {
    "Core Languages & Concepts": [
      {
        name: "JavaScript",
        score: 90,
        color: "#22d3ee",
        class: "from-[#00B3CC] to-[#D6FF7F]",
      },
      {
        name: "TypeScript",
        score: 80,
        color: "#22d3ee",
        class: "from-[#00B3CC] to-[#D6FF7F]",
      },
      {
        name: "HTML5",
        score: 100,
        color: "#22d3ee",
        class: "from-[#00B3CC] to-[#D6FF7F]",
      },
      {
        name: "CSS",
        score: 98,
        color: "#22d3ee",
        class: "from-[#00B3CC] to-[#D6FF7F]",
      },

      {
        name: "PHP",
        score: 65,
        color: "#22d3ee",
        class: "from-[#00B3CC] to-[#D6FF7F]",
      },
      {
        name: "SQL (MySQL, PostgreSQL)",
        score: 65,
        color: "#22d3ee",
        class: "from-[#00B3CC] to-[#D6FF7F]",
      },
    ],

    "Frameworks & Libraries": [
      {
        name: "Vue.js",
        score: 90,
        color: "#42b883",
        class: "from-emerald-700 to-green-400",
      },
      {
        name: "React",
        score: 85,
        color: "#42b883",
        class: "from-emerald-700 to-green-400",
      },
      {
        name: "Next.js",
        score: 83,
        color: "#42b883",
        class: "from-emerald-700 to-green-400",
      },
      {
        name: "Laravel",
        score: 70,
        color: "#42b883",
        class: "from-emerald-700 to-green-400",
      },
      {
        name: "Tailwind CSS",
        score: 98,
        color: "#42b883",
        class: "from-emerald-700 to-green-400",
      },
      {
        name: "Bootstrap",
        score: 80,
        color: "#42b883",
        class: "from-emerald-700 to-green-400",
      },
    ],

    "Tooling & Deployment": [
      {
        name: "Build Tools (Vite, Webpack)",
        score: 75,
        color: "#6366f1",
        class: "from-indigo-700 to-indigo-400",
      },
      {
        name: "Git",
        score: 90,
        color: "#6366f1",
        class: "from-indigo-700 to-indigo-400",
      },
      {
        name: "Vercel",
        score: 65,
        color: "#6366f1",
        class: "from-indigo-700 to-indigo-400",
      },
      {
        name: "AWS",
        score: 55,
        color: "#6366f1",
        class: "from-indigo-700 to-indigo-400",
      },
    ],
  };

  return (
    <section id="skills" className={`${className}`}>
      <div className="container">
        <motion.h2
          className="mb-8"
          variants={isSmallScreen ? fadeUp : enterLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isSmallScreen ? "0px" : "-150px" }}
        >
          <span className="with-line-horizontal">Skills</span>
        </motion.h2>
      </div>

      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="mb-12 px-6">
          <h3 className="text-xl font-semibold mb-4 text-white/90">
            {category}
          </h3>
          <motion.div
            className="grid lg:grid-cols-2 gap-x-24 gap-y-3 md:gap-y-4 rounded-2xl p-6 md:p-8"
            variants={barsParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="flex items-start">
                <h4 className="w-28 sm:w-36 shrink-0 font-medium text-white/80">
                  {skill.name}
                </h4>
                <div className="w-full rounded-full bg-white/10 mt-1">
                  <motion.div
                    className={`rounded-full h-3 opacity-80 bg-gradient-to-r ${skill.class}`}
                    custom={skill.score}
                    variants={bars}
                  ></motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
}
