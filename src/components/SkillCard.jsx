import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function SkillCard({ category, skills, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
          {category}
        </span>

        <ArrowUpRight
          size={18}
          className="text-white/20 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/60"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/60 transition-colors hover:border-white/20 hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCard;