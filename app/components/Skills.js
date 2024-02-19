import { motion, useSpring } from "framer-motion";
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
  // Frontend
  // Backend
  // Frameworks
  // Dev ops
  // ECommerce
  // Source Control/Project Management
  const skillsData = [
    {
      name: "CSS / SCSS",
      color: "#22d3ee",
      score: 100,
      class: "from-[#00B3CC] to-[#D6FF7F]",
    },
    {
      name: "HTML",
      color: "#22d3ee",
      score: 100,
      class: "from-[#00B3CC] to-[#D6FF7F]",
    },
    {
      name: "Javascript",
      color: "#f43f5e",
      score: 90,
      class: "from-cyan-500 to-blue-500",
    },
    {
      name: "PHP",
      score: 65,
      color: "#14b8a6",
      class: "from-cyan-500 to-blue-500",
    },

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
      name: "MySQL",
      score: 55,
      color: "#4945ff",
      class: "from-violet-600 to-purple-800",
    },
    {
      name: "Wordpress",
      score: 85,
      color: "#0675c4",
      class: "from-indigo-800 to-blue-500",
    },

    {
      name: "Tailwind CSS",
      score: 90,
      color: "#ff9900",
      class: "from-amber-500 to-amber-700",
    },
    {
      name: "Bootstrap 5",
      score: 85,
      color: "#ff9900",
      class: "from-amber-500 to-amber-700",
    },
    {
      name: "Shopify",
      score: 50,
      color: "#ff9900",
      class: "from-amber-500 to-amber-700",
    },
    {
      name: "Git / GitHub",
      score: 90,
      color: "#ff9900",
      class: "from-amber-500 to-amber-700",
    },
    {
      name: "AWS",
      score: 35,
      color: "#ff9900",
      class: "from-amber-500 to-amber-700",
    },
  ];

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

      <motion.div
        className="grid lg:grid-cols-2 gap-x-24 gap-3 bg-gradient-to-b from-blue-500/15 to-blue-900/15 rounded-2xl p-6 md:p-8 mx-6"
        variants={barsParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
      >
        {skillsData.map((skill, index) => (
          <div key={index} className="flex items-center">
            <h3 className="w-28 sm:w-36 shrink-0 sm:text-lg">{skill.name}</h3>

            <div className="w-full rounded-full bg-blue-100/20">
              <motion.div
                className={`bg-white rounded-full h-3 opacity-70 bg-gradient-to-r from-blue-400 to to-blue-200`}
                // className={`bg-white rounded-full h-3 opacity-70 bg-gradient-to-r ${skill.class}`}
                // style={{ background: `${skill.color}` }}
                custom={skill.score}
                variants={bars}
              ></motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
