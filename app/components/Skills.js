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
        color: "#f43f5e",
        class: "from-cyan-500 to-blue-500",
      },
      {
        name: "TypeScript",
        score: 65,
        color: "#f43f5e",
        class: "from-cyan-500 to-blue-500",
      },
      {
        name: "HTML5",
        score: 100,
        color: "#22d3ee",
        class: "from-[#00B3CC] to-[#D6FF7F]",
      },
      {
        name: "CSS",
        score: 100,
        color: "#22d3ee",
        class: "from-[#00B3CC] to-[#D6FF7F]",
      },

      {
        name: "PHP",
        score: 65,
        color: "#14b8a6",
        class: "from-cyan-500 to-blue-500",
      },
      {
        name: "MySQL",
        score: 55,
        color: "#4945ff",
        class: "from-violet-600 to-purple-800",
      },
    ],

    "Frameworks & Libraries": [
      {
        name: "Vue.js",
        score: 90,
        color: "#42b883",
        class: "from-emerald-700 to-green-600",
      },
      {
        name: "React",
        score: 80,
        color: "#0a7ea4",
        class: "from-teal-600 to-cyan-700",
      },
      {
        name: "Next.js",
        score: 75,
        color: "#0070f3",
        class: "from-neutral-400 to-stone-500",
      },
      {
        name: "Laravel",
        score: 70,
        color: "#f7352d",
        class: "from-orange-700 to-red-800",
      },
      {
        name: "Tailwind CSS",
        score: 95,
        color: "#ff9900",
        class: "from-amber-500 to-amber-700",
      },
      {
        name: "Bootstrap",
        score: 80,
        color: "#ff9900",
        class: "from-amber-500 to-amber-700",
      },
    ],

    "Tooling & Deployment": [
      {
        name: "Build Tools (Vite, Webpack)",
        score: 75,
        color: "#6366f1",
        class: "from-indigo-500 to-indigo-700",
      },
      {
        name: "Git",
        score: 90,
        color: "#ff9900",
        class: "from-amber-500 to-amber-700",
      },
      {
        name: "Vercel",
        score: 40,
        color: "#ff9900",
        class: "from-amber-500 to-amber-700",
      },
      {
        name: "AWS",
        score: 40,
        color: "#ff9900",
        class: "from-amber-500 to-amber-700",
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
            className="grid lg:grid-cols-2 gap-x-24 gap-3 bg-gradient-to-b from-blue-500/10 to-blue-900/10 rounded-2xl p-6 md:p-8"
            variants={barsParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center">
                <h4 className="w-28 sm:w-36 shrink-0 sm:text-lg text-white/80">
                  {skill.name}
                </h4>
                <div className="w-full rounded-full bg-white/10">
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
