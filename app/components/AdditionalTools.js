import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function AdditionalTools({ className }) {
  const groupedTools = {
    "Styling & Animation": [
      "CSS Modules",
      "CSS-in-JS",
      "Framer Motion",
      "Lottie",
      "Responsive Design",
      "Accessibility (WCAG)",
      "shadcn/ui",
    ],

    "Routing & State Management": [
      "Vue Router",
      "React Router",
      "SSR",
      "Pinia",
      "Redux Toolkit",
    ],

    "Testing & Documentation": [
      // "Vitest",
      // "Jest",
      // "Testing Library",
      "Storybook",
      "Lighthouse",
      "axe-core (Accessibility Testing)",
    ],

    "API & Data": [
      "REST APIs",
      "OpenAI API",
      "Google Maps API",
      "Google Charts",
      "Chart.js",
    ],

    "Build Tools & Formatting": [
      "Vite",
      "Webpack",
      "ESLint",
      "Docker",
      "Github",
      "Github Actions",
      "CI/CD",
      
    ],

    "CMS & Platforms": ["Strapi", "WordPress"],

    "Backend & Runtime": ["Node.js", "Express.js"],

    "Security & SEO": ["SEO", "Progressive Web Apps (PWA)"],

    "UX & UI Tools": ["Figma Handoff"],

    "Development Approach": [
      "Agile Methodology",
      "Jira",
      "Code Reviews & Pull Requests",
      "Frontend Architecture Ownership",
      "PRINCE2 Agile Certified",
    ],
  };

  const allTools = Object.values(groupedTools).flat();

  return (
    <section className={`mt-16 ${className}`}>
      <div className="container">
        <h2 className="text-xl font-semibold mb-6">
          <span className="with-line-horizontal">Other Tools & Experience</span>
        </h2>

        <div className="flex flex-wrap gap-4 max-w-5xl mx-auto justify-center">
          {allTools.map((tool, idx) => (
            <HoverBorderGradient
              as="span"
              duration={3}
              key={idx}
              className="inline-flex px-4 py-2 text-sm text-white  rounded-full hover:bg-white/1 transition cursor-default "
            >
              {tool}
            </HoverBorderGradient>
          ))}
        </div>
      </div>
    </section>
  );
}
