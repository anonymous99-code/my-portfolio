import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills & Technologies"
          title="Tools I use to build."
          description="A growing toolkit across frontend development, backend engineering, cybersecurity, and modern development workflows."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skillGroup, index) => (
            <SkillCard
              key={skillGroup.category}
              category={skillGroup.category}
              skills={skillGroup.skills}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-sm leading-6 text-white/30">
            I don't just collect technologies. I focus on understanding how
            they work together to solve real problems.
          </p>

          <span className="text-xs uppercase tracking-[0.15em] text-white/20">
            Always learning
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;