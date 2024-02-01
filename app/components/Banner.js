import { motion } from "framer-motion";

export default function Banner({ className }) {
  const line1 = "Tom Dolton";
  const line2 = "Web Developer";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <header className={`${className} grid items-center justify-items-start`}>
      <div className="container space-y-4 relative">
        <motion.div variants={sentence} initial="hidden" animate="visible">
          <h1 className="text-6xl md:text-8xl font-medium with-line-horizontal">
            {line1.split("").map((char, index) => (
              <motion.span key={`${char}-${index}`} variants={letter}>
                {char}
              </motion.span>
            ))}
          </h1>

          <br />
          <h2 className="text-2xl md:text-4xl font-medium tracking-wider">
            {line2.split("").map((char, index) => (
              <motion.span key={`${char}-${index}`} variants={letter}>
                {char}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <p className="md:text-lg">
          Full stack web developer specialising in front end.
        </p>
      </div>
    </header>
  );
}
