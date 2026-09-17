import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const experiences = [
  {
    period: "June 2025 — Present",
    role: "Full-Stack Developer",
    company: "Self-Directed / Project-Based",
    description:
      "Started my software development journey in June 2025 and have since built multiple full-stack applications while developing practical experience across frontend, backend, databases, APIs, authentication, and deployment.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Python",
      "Django",
      "DRF",
      "SQLite",
      "REST APIs",
      "JWT",
      "Git",
    ],
  },
  {
    period: "2025 — Present",
    role: "Cybersecurity",
    company: "Practical Learning & Projects",
    description:
      "Developing practical cybersecurity skills alongside software development through security-focused projects, Linux environments, Python utilities, network analysis, and application security experimentation.",
    technologies: [
      "Python",
      "Linux",
      "Kali Linux",
      "Network Security",
      "Web Security",
      "Security Tools",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="My journey so far."
          description="A timeline of the skills, technologies, and practical experience I've developed through continuous learning and building."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="relative md:pl-12"
              >
                <div className="absolute left-0 top-1 hidden h-[15px] w-[15px] rounded-full border-2 border-white/40 bg-[#050505] md:block" />

                <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 lg:grid-cols-[180px_1fr]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-white/30">
                      {experience.period}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold">
                          {experience.role}
                        </h3>

                        <p className="mt-1 text-sm text-white/40">
                          {experience.company}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={20}
                        className="text-white/20"
                      />
                    </div>

                    <p className="mt-6 max-w-3xl text-sm leading-7 text-white/50">
                      {experience.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;